const adm = [
    {
        id: 131,
        nome: "ASLEY RODRIGO DE MELO LIMA",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 94,
        nome: "CARLOS HENRIQUE ESPASIANI",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 181,
        nome: "CHARLES DEMETRIUS BARRETO SILVA",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 51,
        nome: "JULIANO OLIVEIRA DE SOUZA",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 200,
        nome: "JULIO KAUÃ DE SOUSA PINTO",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 196,
        nome: "KAUÃ DE CARVALHO NASCIMENTO",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 64,
        nome: "LEANDRO SANTOS",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 199,
        nome: "LUCAS NATHAN NOGUEIRA DA SILVA",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 201,
        nome: "MARCO AURELIO LEITE GOMES",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 141,
        nome: "MARCOS ROBERT DE MELO LIMA",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 214,
        nome: "PAULO VICTOR BARBOSA DE SOUZA",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 203,
        nome: "RENATA DE JESUS SANTOS",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    /* {
        id: 120,
        nome: "VICTOR MENDES DOS SANTOS",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    }, */
    {
        id: 188,
        nome: "VINICIUS SOUSA BOMFIM",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
    {
        id: 161,
        nome: "YURI DIAS PEREIRA",
        diasViagem: null,
        contagem: 0,
        atrasadas: 0
    },
]
let updateCount = adm.length * 2, percent = 0, contIteration = 0

function createPainel () {
    if (!state.functions.supervisor.paineldevisualizacaoTarefasTime) {
        return
    }

    const painelBar = document.querySelector("#fdt-mt-header > ul:nth-child(1)")
    const qtdDias = 8
    const { datas, dias } = getArrayDate(qtdDias)

    const html = `<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-toggle="tooltip" data-placement="bottom" title="Painel do Supervisor" data-original-title="Painel do Supervisor"><i class="fa fa-fw fa-table fdt-cor-azul"></i></span></a>
                    <ul id="panelSup" class="dropdown-menu hidden-xs">
                        <li class="fdt-dropdown-cabecalho" style="color: #005689;">Painel do Supervisor</li>
                        <li class="fdt-widget-lembretes">
                            <ul>
                                <li>
                                    ${generateTable(adm, datas, dias)}
                                </li>
                            </ul>
                        </li>
                        <li class="fdt-widget-lembretes" style="display: flex; justify-content: center; align-items: center; gap: 10px; padding: 10px 0;">
                            <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                                <span style="background: #34454E; width: 10px; height: 10px;"></span>Tarefas Atrasadas
                            </div>
                            <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                                <span style="background: #A5D5EF; width: 10px; height: 10px;"></span>Tarefas Ativas
                            </div>
                            <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                                <span style="background: #CCC; width: 10px; height: 10px;"></span>Tarefas Encerradas
                            </div>
                            <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                                <span style="background: #ADADAD; width: 10px; height: 10px;"></span>Total de Tarefas
                            </div>
                        </li>
                    </ul>`
                    /* <li class="fdt-dropdown-rodape">
                            <div style="cursor: pointer;">
                                <i class="fa fa-fw fa-refresh"></i>&nbsp;Recarregar Dados
                            </div>
                    </li> */
    const li = document.createElement("li")
    li.innerHTML = html
    li.setAttribute('class', 'dropdown mensagens hidden-xs')
    li.setAttribute('id', 'painelBTNSup')
    painelBar.appendChild(li)
    const panelSup = document.querySelector("#panelSup")
    const contentBar = createBar()
    panelSup.append(contentBar)
    estilizarTabela()

    
    const inputDados = (nome, result) => {

        const tds = document.querySelectorAll('.tabela td')
        let tdsSeparados = {}
        tdsSeparados[nome] = {}
        tds.forEach(td => {
            if (td.dataset.nome == nome) {
                if (!tdsSeparados[nome][td.dataset.date]) {
                    tdsSeparados[nome][td.dataset.date] = {}
                }
                tdsSeparados[nome][td.dataset.date][td.dataset.categoria] = td
            }
        })

        let chaves = Object.entries(result).map(e => e[0])

        chaves = chaves.filter(chave => (chave != "idTarefas"))

        chaves.forEach(chave => {
            if (chave == 'atrasadas') {
                tdsSeparados[nome]['atrasadas']['atrasadas'].innerHTML = result['atrasadas']
            } else if (result[chave] == 0) {
                tdsSeparados[nome][chave].innerHTML = 0
            } else {
                tdsSeparados[nome][chave]['Ativas'].innerHTML = result[chave]['Ativas']
                tdsSeparados[nome][chave]['Encerradas'].innerHTML = result[chave]['Encerradas']
                tdsSeparados[nome][chave]['Total'].innerHTML = result[chave]['Total']
            }
        })
        incrementBar()
    }

    adm.forEach(e => {
        e['nomeTLC'] = e.nome.toLocaleLowerCase().split(' ')[0]
    })

    document.querySelector('#painelBTNSup').addEventListener('click', () => {
        showContentBar(contentBar)
        getTarefasAtrasadas(adm).then(result => {
            adm.forEach(e => {
                inputDados(e.nomeTLC, result[e.nome])
            })
        })
        
        for(let c = 0; c < adm.length; c++) {
            adm[c].contagem = getTarefasSemanal(adm[c].id, datas).then(result => {
                inputDados(adm[c].nomeTLC,result)
                return result
            })
        }
    })
}

function generateTable(adm, datas, dias) {
    
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let table = `<table class="tabela">`

    for (c = 0; c <= adm.length; c++) {
        table += `<tr>`
        let nome
        if (c > 0) {
            nome = adm[c-1].nome.split(' ')[0]
        }
        for (let j = 0; j <= datas.length; j++) {
            if ((j == 0) && (c == 0)) {
                table += `<th style="background: rgb(0 86 137);">&nbsp;</th>`
            } else if ((j != 0) && (c == 0)) {
                if (j > 1)
                    table += `<th colspan="3" data-date="${(datas[j-1].toISOString().split('T'))[0]}" class="dRow">${datas[j-1].toLocaleDateString()}<br>${semana[dias[j-1]]}</th>`
                else
                    table += `<th data-date="${datas[j-1]}" class="dRow">Tarefas ${datas[j-1]}</th>`
            } else if ((j == 0) && (c > 0)) {
                table += `<th data-nome="${nome.toLowerCase()}" class="nCollumn">${nome}</th>`
            } else if (c > 0) {
                if (j > 1)
                    table += `<td data-toggle="tooltip" data-original-title="Ativas" data-placement="Top" style="background: #A5D5EF;" data-categoria="Ativas" data-nome="${nome.toLowerCase()}" data-date="${(datas[j-1].toISOString().split('T'))[0]}">-</td>
                    <td data-toggle="tooltip" data-original-title="Encerradas" data-placement="Top" style="background: #CCC;" data-categoria="Encerradas" data-nome="${nome.toLowerCase()}" data-date="${(datas[j-1].toISOString().split('T'))[0]}">-</td>
                    <td data-toggle="tooltip" data-original-title="Total" data-placement="Top" style="background: #ADADAD;" data-categoria="Total" data-nome="${nome.toLowerCase()}" data-date="${(datas[j-1].toISOString().split('T'))[0]}">-</td>`
                else
                    table += `<td style="background: #34454E; color: #FFF;" data-categoria="atrasadas" data-nome="${nome.toLowerCase()}" data-date="${datas[j-1]}">-</td>`
            }
        }
        table += `</tr>`
    }
    return table
}

function estilizarTabela() {
    const titulos = document.querySelectorAll('.dRow')
    const nomes = document.querySelectorAll('.nCollumn')
    const numbers = document.querySelectorAll('.tabela td')

    const formatTitle = (element) => {
        element.style.padding = '0.5rem'
        element.style.background = '#1c5475'
        element.style.color = '#FFF'
    }
    const formatContent = (element) => {
        element.style.padding = '0.5rem'
        element.style.textAlign = 'center'
        element.style.border = '1px solid lightgray'
    } 

    titulos.forEach(th => {
        th.style.textAlign = 'center'
        formatTitle(th)
    })

    nomes.forEach(th => {
        formatTitle(th)
    })

    numbers.forEach(td => {
        formatContent(td)
    })
}

function getArrayDate (qtdDias) {
    let datas = ['atrasadas'], dias = ['atrasadas']
    let date = new Date()
    cont = 0

    for (c = 1; c <= qtdDias; c++) {
        date.setHours(0,0,0,0)
        let indiceDiaSemana = date.getDay()
        dias.push(indiceDiaSemana)
        datas.push(date)
        date = new Date(date)
        date.setDate(date.getDate()+1)
        cont++
    }

    return { datas, dias }
}

function getTarefasSemanal (id, datas) {
    
    const url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/ajax/jsonAgendaTarefas.asp'

    let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Length': '64',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive'
    })

    const data = {
        idTI: '',
        idST: '',
        idRE: '',
        idEX: id,
        idAG: '',
        start: datas[1].toISOString().split('T')[0],
        end: datas[datas.length-2].toISOString().split('T')[0],
    }

    let init = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data).replaceAll('"','').replaceAll(':','=').replaceAll('{','').replaceAll('}','').replaceAll(',','&')
    }

    const request = new Request(url, init)

    const result = fetch(request)
    .then(response => response.text())
    .then(response => {
        let str = response
        str = str.replace(/(\r\n|\n|\r|\t)/gm, "").replaceAll('"',"'")
        if (str.match(/\x07/)) {
            str = str.replace(/\x07/,"")
        }
        let chavesCorretas = ['"id": "','", "title": "','", "allDay": "','", "start": "','", "end": "','", "color": "','", "textColor": "','", "borderColor": "','", "url": "','" }']
        let chavesErradas = ["'id': '","', 'title': '","', 'allDay': '","', 'start': '","', 'end': '","', 'color': '","', 'textColor': '","', 'borderColor': '","', 'url': '","' }"]

        for (c = 0; c < chavesCorretas.length; c++) {
            str = str.replaceAll(chavesErradas[c],chavesCorretas[c])
        }

        return JSON.parse(str)
    })
    .then(resp => {

        const contagem = {}
        contagem['idTarefas'] = []
        for (c = 0; c < datas.length; c++) {
            if (c > 0)
                contagem[(datas[c].toISOString().split("T"))[0]] = {
                    Total: 0,
                    Ativas: 0,
                    Encerradas: 0
            }
        }
        
        resp.forEach(e => {
            const data = e['start'].replace(/T\d\d:\d\d:\d\d/, "")
            
            try {
                contagem[data]['Total']++
                if (e.color == "#A5D5EF")
                    contagem[data]['Ativas']++
                if (e.color == "#CCC")
                    contagem[data]['Encerradas']++
                if (data == (datas[1].toISOString().split("T"))[0])
                    contagem['idTarefas'].push(e['id'])
            } catch (error) {
                console.log(contagem, data, e, error)
            }
        })
        return contagem
    })
    
    return result
}

async function getTarefasAtrasadas (adm) {

    const array = {}

    const ontem = new Date()
    const passado = new Date(ontem.getFullYear()-10,ontem.getMonth(), ontem.getDate())
    ontem.setDate(ontem.getDate()-1)
    
    const url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default.asp'

    let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Length': '64',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive'
    })

    const data = {
        bsAdvTarefas: "s",
        bsAdvTarefasTecnica: "",
        bsAdvTarefasDe: `${passado.getDate() < 10 ? "0" + passado.getDate() : passado.getDate()}/${passado.getMonth() < 10 ? "0" + (passado.getMonth() + 1) : passado.getMonth() + 1}/${passado.getFullYear()}`,
        bsAdvTarefasAte: `${ontem.getDate() < 10 ? "0" + ontem.getDate() : ontem.getDate()}/${ontem.getMonth() < 10 ? "0" + (ontem.getMonth() + 1) : ontem.getMonth() + 1}/${ontem.getFullYear()}`,
        bsAdvTarefasTitulo: "",
        bsAdvTarefasTipo: "",
        bsAdvTarefasStatus: "p",
        bsAdvTarefasAgendada: "",
        bsAdvTarefasResponsavel: "",
        bsAdvTarefasCompromisso: "",
        bsAdvTarefasCliente: "",
        bsAdvTarefasCpf: "",
        bsAdvTarefasPauta: "", 
        filtrar: "Filtrar",
    }

    let str = ""

    adm.forEach(e => {
        str += `&bsAdvTarefasExecutor=${e.id}`
        array[e.nome] = { atrasadas: 0 }
    })

    let init = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data).replaceAll('"','').replaceAll(':','=').replaceAll('{','').replaceAll('}','').replaceAll(',','&') + str
    }

    const request = new Request(url, init)

    const result = fetch(request)
    .then(response => response.text())
    .then(response => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(response,'text/html')
        let tarefas = doc.documentElement.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')
        tarefas.forEach(e => {
            if (e.children[5].children[3]) {
                array[e.children[5].children[3].innerText.trim()].atrasadas++
            }
        })
        return array
    })
    
    return result
}


// Barra de Carregamento
function resetBar() {
    percent = 0
    contIteration = 0
    const bar = document.querySelector('#bar')
    bar.style.width = `${percent}%`
}

function finishLoad(bar, interval) {
    interval.clearInterval()
    bar.style.width = percent + '%'
}

function incrementBar() {
    const bar = document.querySelector("#bar")
    const unidade = 100 / updateCount
    percent += unidade
    bar.style.width = `${percent}%`
    contIteration++
    if (updateCount == contIteration) {
        const contentBar = document.querySelector("#contentBar")
        hiddeContentBar(contentBar)
    }
}

function hiddeContentBar(contentBar) {
    contentBar.style.display = "none"
}

function showContentBar(contentBar) {
    resetBar()
    contentBar.style.display = "flex"
}

function createBar() {
    const contentBar = document.createElement('div')
    const progress = document.createElement('div')
    const bar = document.createElement('div')
    const p = document.createElement('p')
    contentBar.append(p)
    contentBar.append(progress)
    progress.append(bar)
    contentBar.id = "contentBar"
    bar.id = "bar"
    progress.id = "progress"
    p.innerHTML="Carregando..."

    p.style.color = "#005689"

    contentBar.style.position = "absolute"
    contentBar.style.flexDirection = "column"
    contentBar.style.justifyContent = "center"
    contentBar.style.alignItems = "center"
    contentBar.style.background = "#CCC"
    contentBar.style.top = "0"
    contentBar.style.left = "0"
    contentBar.style.width = "100%"
    contentBar.style.height = "100%"

    progress.style.position = "relative"
    progress.style.background = "#FFF"
    progress.style.width = "80%"
    progress.style.height = "10%"
    progress.style.zIndex = "100"
    progress.style.borderRadius = "10px"

    bar.style.position = "absolute"
    bar.style.background = "#005689"
    bar.style.width = `${percent}%`
    bar.style.height = "100%"
    bar.style.borderRadius = "10px"
    
    return contentBar
}