function filtroAlvaraTJSE() {
    if (!state.functions.tjse.botaoExportarAlvaras) {
        return
    }

    let frame = null
    const downFrame = document.querySelector('#downFrame')
    
    if (downFrame) {
        frame = downFrame.contentDocument.querySelector("#mainFrame")
    }
    
    if (frame) {
        try {
            frame.onload = () => {
                const alvaras = []
                const intimacoes = frame.contentDocument.querySelectorAll("body > center > table > tbody > tr")
                const title = frame.contentDocument.querySelector("body > h3")

                if (title.innerText === "CONSULTA A PROCESSOS TRAMITADOS") {
                    const periodo = frame.contentDocument.querySelector("body > p")
                    const regex = /\d{2}\/\d{2}\/\d{4}/g
                    const [ dataInicial, dataFinal ] = periodo.innerText.match(regex)
                    const nome = `${dataInicial}-${dataFinal}`
                    const parent = title.parentNode
                    const button = document.createElement("button")
                    const buscaAlvara = (descricao, termo) => {
                        const descricao_normalizada = descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(),
                            termo_normalizado = termo.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                        
                        if (descricao_normalizada.includes(termo_normalizado)) {
                            return descricao
                        }
                        return null
                    }
        
                    button.innerHTML = "Exportar Alvarás para CSV"
                    parent.insertBefore(button, title)
                    
                    if (intimacoes) {
                        intimacoes.forEach(intimacao => {
                            const linhas = intimacao.querySelectorAll("td > table:nth-child(2) > tbody > tr")
                            const processo = "'" + linhas[1].children[0].innerText
                            const descricao = linhas[5].innerText.replaceAll("\n", " | ").replaceAll(";", ".")
                            
                            if (buscaAlvara(descricao, "alvará")) {
                                alvaras.push({ processo, descricao })
                            }
                        })
                        console.log(alvaras)
                        button.addEventListener('click', () => toCSV(alvaras, nome))
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}


function toCSV(alvaras, nome) {
    const head = ["Número do Processo", "Descrição da Intimação"]
    let csv_data = [head.join(";")]



    alvaras.map(alvara => {
        let csvrow = []
        csvrow.push(alvara.processo)
        csvrow.push(alvara.descricao)
        csv_data.push(csvrow.join(";"))
    })

    csv_data = csv_data.join('\n');

    downloadCSVFile(csv_data, nome)
}

function downloadCSVFile(csv_data, nome) {
 
    // Create CSV file object and feed
    // our csv_data into it
    const BOM = new Uint8Array([0xEF,0xBB,0xBF])
    const CSVFile = new Blob([BOM, csv_data], {
        type: "text/csv"
    })

    // Create to temporary link to initiate
    // download process
    let temp_link = document.createElement('a')

    // Download csv file
    temp_link.download = "Alvarás-" + nome.replaceAll("/","") + ".csv"
    let url = window.URL.createObjectURL(CSVFile)
    temp_link.href = url

    // This link should not be displayed
    temp_link.style.display = "none"
    document.body.appendChild(temp_link)

    // Automatically click the link to
    // trigger download
    temp_link.click()
    document.body.removeChild(temp_link)
}