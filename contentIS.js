function getCompetencia() {
    let texto, array, textoTrabalhista
    
    if (document.querySelector('#downFrame'))
        texto = document.querySelector('#downFrame').contentDocument.documentElement.querySelector('#mainFrame').contentDocument.documentElement.querySelector('body > form > table.table.table-striped > tbody > tr > td:nth-child(3)')
    else
        textoTrabalhista = document.querySelector("body > pje-root > mat-sidenav-container > mat-sidenav-content > pje-cabecalho > div > mat-toolbar > pje-cabecalho-processo > section > div > section.oj-cargo")

    if (texto) {
        array = texto.innerText.split('\n')
    
        return {competencia: array[1], portal: 'TJ'}
    } else if (textoTrabalhista) {
        array = textoTrabalhista.innerText.split('/')
    
        return {competencia: array[0], portal: 'TRT'}
    }
    
    return {competencia: null, portal: null}

}

function getPartesProcesso(portal) {
    if(portal === 'TJ') {
        const iframe = document.querySelector('#downFrame')
        if(iframe) {
            const table = Array.from(document.querySelector('#downFrame').contentDocument.documentElement.querySelector('#mainFrame').contentDocument.documentElement.querySelectorAll("body > form > table")).find(table => table.innerHTML.includes("Partes do Processo:"))
    
            return Array.from(table.querySelectorAll("tr")).filter((tr, index) => index > 1).map(tr => removeAcentuacaoString(tr.children[1].innerText.trim().toUpperCase()))
        }
    }

    return document.querySelector("body > pje-root > mat-sidenav-container > mat-sidenav-content > pje-cabecalho > div > mat-toolbar > pje-cabecalho-processo > section > div > section.mat-tooltip-trigger.partes").innerText.split("x").map(parte => parte.trim())
}

function copyText(texto, sendResponse) {
    const tempInput = document.createElement("h2")
    let body = document.querySelector("body")
    
    if (!body) {
        body = document.createElement('body')
        document.querySelector("html").appendChild(body)
    }
    
    tempInput.innerHTML = texto.replaceAll("&lt;","<").replaceAll("&gt;",">")
    
    const stylizer = () => {
        tempInput.style.position = 'fixed'
        tempInput.style.opacity = 0
        tempInput.style.textAlign = "center"
        document.querySelector("*").style.setProperty("font-family",  "Times New Roman, serif", "important")
        tempInput.style.fontSize = "16px"
        tempInput.style.fontFamily = "Times New Roman, serif"
        tempInput.style.color = "red"
        tempInput.style.background = "none"
        tempInput.style.fontWeight = "normal"
        tempInput.style.border = "none"
    }

    const listenerBody = async (records, observer) => {
        
        stylizer()

        let range = document.createRange()

        range.selectNodeContents(tempInput)
        
        let selection = window.getSelection()
        selection.addRange(range)
        
        document.execCommand('copy')
        
        selection.removeAllRanges()

        body.removeChild(tempInput)

        sendResponse({resposta: texto})

        observer.disconnect()
    }

    const observer = new MutationObserver(listenerBody)
    observer.observe(body, { childList: true })

    body.appendChild(tempInput)
}

function autoSearchProcess(processo) {
    const urlAtual = document.URL
    const urlPageBuscaProcesso = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/default.asp'
    
    if (urlAtual == urlPageBuscaProcesso) {
        const processoInput = document.querySelector("#bsAdvProcessosTexto")
        const btnFiltro = document.querySelector("#fdt-form > div:nth-child(6) > div:nth-child(4) > input") || document.querySelector("#fdt-form > div:nth-child(4) > div:nth-child(3) > input")

        processoInput.value = processo
        btnFiltro.click()
    }
}

function getIdProcessFromDocument(document) {
    const a = document.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td.fdt-acao > div > div > a:nth-child(2)")
    
    const indexProcess = 1
    const idProcess = a.href.split("idPK=")[indexProcess]

    return idProcess
}

function connectPort() {
    const isSidepanelRequest = true
    chrome.runtime.onConnect.addListener(function(port) {

        port.onMessage.addListener(function(request) {
            
            if (request) {
                const data = {
                    bsAdvProcessos: "s",
                    bsAdvProcessosTexto: request,
                    bsAdvProcessosData: "p.dataDistribuicao",
                    bsAdvProcessosDataSentenca: "p.dataSentenca",
                    filtrar: "Filtrar"
                }

                fetch("http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/default.asp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(data),
                }).then(response => {
                    if (!response.ok) {
                        console.error('Erro na requisição: ' + response.status)
                    }
                    return response.text();
                }).then(async resposta => {
                    let parser = new DOMParser()
                    let doc = parser.parseFromString(resposta,'text/html')
                    const element = doc.documentElement.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td:nth-child(3)")

                    if (element) {
                        let verify = element.innerText.includes(request)
                        
                        const params = {
                            module: "processos",
                            id: getIdProcessFromDocument(doc.documentElement)
                        }
                        requestDataCliente(params, isSidepanelRequest).then(result => {
                            if (verify) {
                                autoSearchProcess(request)
                            }
                            port.postMessage({checked: verify, result })
                        }).catch(e => {
                            console.log(e)
                            port.postMessage({checked: verify})
                        })
                    } else {
                        port.postMessage({checked: false})
                    }
                }).catch(err => {
                    alert(err)
                })
            }
        })
    })
}

function getPartes () {
    const trPartes = document.querySelector('#downFrame').contentDocument.documentElement.querySelector('#mainFrame').contentDocument.querySelector("body > form > table:nth-child(12)").querySelector("tbody").children

    if (trPartes) {
        const partes = {}
    
        for (let c = 1; c < trPartes.length; c++) {
            partes[trPartes[c].children[0].innerText.trim().toLowerCase()] = trPartes[c].children[1].innerText.trim()
        }
    
        return partes
    }

    return null
};

(function () {
    //updateEvent()
    connectPort()

    // Select the node that will be observed for mutations
    let frame = null
    const downFrame = document.querySelector('#downFrame')
    if (downFrame) {
        frame = downFrame.contentDocument
    }

    if (frame) {
        try {
            const targetNode = frame.documentElement.querySelector("#mainFrame")
    
            targetNode.onload = () => {
                //const partes = getPartes()
            }
        } catch (error) {
            // console.log(error)
        }
    }
})()