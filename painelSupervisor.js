let currentTable = 0;

const ADM = [
        {
            id: 219,
            nome: "ARTHUR PORTO ROSENDO",
            nomeTLC: "ARTHUR",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 256,
            nome: "CHRISTYAN RANGELL SILVA DAMASCENO XAVIER",
            nomeTLC: "CHRISTYAN",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 204,
            nome: "DIEGO DOS SANTOS SILVA",
            nomeTLC: "DIEGO SANTOS",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 238,
            nome: "ERICK RODRIGUES DE JEUS",
            nomeTLC: "ERICK",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 139,
            nome: "FLAVIO LUCAS LIMA SOUZA",
            nomeTLC: "FLAVIO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 205,
            nome: "HELTON FRADES BRABEC SOUZA",
            nomeTLC: "HELTON",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 239,
            nome: "ISAC CRUZ SANTOS",
            nomeTLC: "ISAC",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 241,
            nome: "JEFERSON ALMEIDA SANTOS",
            nomeTLC: "JEFERSON",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 197,
            nome: "JHONATHAN DA FONSECA ALMEIDA FLOR",
            nomeTLC: "JHONATHAN FONSECA",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 247,
            nome: "JHONATAN NASCIMENTO TAVARES",
            nomeTLC: "JHONATHAN NASCIMENTO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 51,
            nome: "JULIANO OLIVEIRA DE SOUZA",
            nomeTLC: "JULIANO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 221,
            nome: "LEONARDO TEIXEIRA SANTOS SILVA",
            nomeTLC: "LEONARDO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 199,
            nome: "LUCAS NATHAN NOGUEIRA DA SILVA",
            nomeTLC: "LUCAS",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 201,
            nome: "MARCO AURELIO LEITE GOMES",
            nomeTLC: "MARCO AURELIO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 198,
            nome: "MURILLO VICTOR SANTOS ROCHA",
            nomeTLC: "MURILLO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 203,
            nome: "RENATA DE JESUS SANTOS",
            nomeTLC: "RENATA",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 217,
            nome: "THIAGO SANTOS SANTANA",
            nomeTLC: "THIAGO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 161,
            nome: "YURI DIAS PEREIRA",
            nomeTLC: "YURI",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
    ],
    SAC = [
        {
            id: 226,
            nome: "CARLOS FERNANDES PEREIRA DA SILVA",
            nomeTLC: "CARLOS FERNANDES",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 233,
            nome: "EMILLY STHEFANE FERREIRA DOS SANTOS PEREIRA",
            nomeTLC: "EMILLY",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 225,
            nome: "ERINALDO FARO SANTOS",
            nomeTLC: "ERINALDO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 213,
            nome: "HELLEN VITORIA ROCHA SILVA SANTOS",
            nomeTLC: "HELLEN",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 62,
            nome: "HENYR GOIS DOS SANTOS",
            nomeTLC: "HENYR",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 140,
            nome: "LAYNE DA SILVA GOIS",
            nomeTLC: "LAYNE",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 193,
            nome: "LINIKER BERNARDO SOARES",
            nomeTLC: "LINIKER",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 232,
            nome: "SARA CRISTINA TELES LOIOLA",
            nomeTLC: "SARA CRISTINA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 153,
            nome: "TRICYA MATEUS ROLEMBERG",
            nomeTLC: "TRICYA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
    ],
    FINANCEIRO = [
        {
            id: 14,
            nome: "ALINE RIBEIRO",
            nomeTLC: "ALINE",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 216,
            nome: "CAMILA TOJAL MACHADO SANTOS",
            nomeTLC: "CAMILA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 11,
            nome: "LUCIANA DOS SANTOS ARAUJO",
            nomeTLC: "LUCIANA ARAUJO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 127,
            nome: "LUCIANA LIMA REZENDE",
            nomeTLC: "LUCIANA LIMA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 148,
            nome: "OVERLANDIA SANTOS MELO",
            nomeTLC: "OVERLANDIA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 207,
            nome: "SHEYLA SANTANA SANTOS",
            nomeTLC: "SHEYLA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 120,
            nome: "VICTOR MENDES DOS SANTOS",
            nomeTLC: "VICTOR",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
    ],
    INSS = [
        {
            id: 235,
            nome: "ANDRÉ LEVY BATISTA DA SILVA",
            nomeTLC: "ANDRÉ",
            assignments: ["prorrogação"],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 240,
            nome: "BRUNO PEREIRA LIMA VASCONCELOS",
            nomeTLC: "BRUNO",
            assignments: ["prorrogação"],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 132,
            nome: "DANIEL CABRAL PEREIRA SANTOS",
            nomeTLC: "DANIEL",
            assignments: ["prorrogação"],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 115,
            nome: "GABRIEL FRANÇA VITAL",
            nomeTLC: "GABRIEL FRANÇA",
            assignments: ["prorrogação"],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 212,
            nome: "LUIZ CARLOS LOPES DOS SANTOS",
            nomeTLC: "LUIZ CARLOS",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 162,
            nome: "MIQUEAS CAMPOS DA SILVA",
            nomeTLC: "MIQUEAS",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 24,
            nome: "SILVANIA PINHEIRO DE LEMOS",
            nomeTLC: "SILVANIA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
    ]
    PREVIDENCIARIO = [
        {
            id: 134,
            nome: "ANA CAROLINA SOARES DE MELO",
            nomeTLC: "ANA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 1,
            nome: "DIEGO MELO SOBRINHO",
            nomeTLC: "DIEGO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 192,
            nome: "EDUARDO PAIXÃO ROCHA SOBRINHO",
            nomeTLC: "EDUARDO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 244,
            nome: "ELTON SILVA HONORATO",
            nomeTLC: "ELTON",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 2,
            nome: "FABIO RIBEIRO",
            nomeTLC: "FABIO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 230,
            nome: "JOSÉ HENRIQUE VASCONCELOS RODRIGUES FONTES",
            nomeTLC: "JOSÉ HENRIQUE",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 93,
            nome: "KEVEN FARO DE CARVALHO",
            nomeTLC: "KEVEN",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 47,
            nome: "LAIS PEREIRA MORAES",
            nomeTLC: "LAIS",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 28,
            nome: "MARCUS VINICIUS DE SOUZA MORAIS",
            nomeTLC: "MARCUS",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 23,
            nome: "SARA GONÇALVES PINHEIRO",
            nomeTLC: "SARA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 206,
            nome: "THALYSON KELSON LIMA TORRES",
            nomeTLC: "THALYSON",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 229,
            nome: "YAN THADEU PORTO DE OLIVEIRA SANTOS",
            nomeTLC: "YAN",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
    ],
    TRABALHISTA = [
        {
            id: 108,
            nome: "FELIPE PANTA CARDOSO",
            nomeTLC: "FELIPE",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 158,
            nome: "FERNANDO HENRIQUE BARBOZA NASCIMENTO",
            nomeTLC: "FERNANDO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 104,
            nome: "GLENISSON NASCIMENTO",
            nomeTLC: "GLENISSON",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 175,
            nome: "MATHEUS CORREIA SANTOS",
            nomeTLC: "MATHEUS CORREIA",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
    ],
    CIVEL = [
        {
            id: 166,
            nome: "ALÃ FEITOSA CARVALHO",
            nomeTLC: "ALÃ",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 210,
            nome: "EFRAIM SILVA CORREA DOS SANTOS",
            nomeTLC: "EFRAIM",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 187,
            nome: "GABRIEL DAVILA FILGUEIRAS MELLONE",
            nomeTLC: "GABRIEL",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 164,
            nome: "MATHEUS MATOS BARRETO",
            nomeTLC: "MATHEUS MATOS",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 55,
            nome: "RODRIGO AGUIAR SANTOS",
            nomeTLC: "RODRIGO",
            assignments: [],
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
    ],
    CALCULO = [
        {
            id: 180,
            nome: "ANSELMO DAVID DOS SANTOS RODRIGUES",
            nomeTLC: "ANSELMO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 237,
            nome: "CARLOS EDUARDO DOS SANTOS",
            nomeTLC: "CARLOS",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 100,
            nome: "GUILHERME JASMIM",
            nomeTLC: "GUILHERME",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 147,
            nome: "WILKE RODRIGUES DE JESUS",
            nomeTLC: "WILKE",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
    ],
    CRM = [
        {
            id: 242,
            nome: "BRYAN CAMPOS DE ANDRADE",
            nomeTLC: "BRYAN",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 196,
            nome: "KAUÃ DE CARVALHO NASCIMENTO",
            nomeTLC: "KAUÃ",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 64,
            nome: "LEANDRO SANTOS",
            nomeTLC: "LEANDRO",
            assignments: [],
            diasViagem: [],
            contagem: 0,
            atrasadas: 0
        },
    ]
const data = {
    ADM: {
        updateCount: ADM.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "azul",
    },
    SAC: {
        updateCount: SAC.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "rosa",
    },
    FINANCEIRO: {
        updateCount: FINANCEIRO.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "vermelho",
    },
    INSS: {
        updateCount: INSS.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "amarelo",
    },
    PREVIDENCIARIO: {
        updateCount: PREVIDENCIARIO.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "verde",
    },
    TRABALHISTA: {
        updateCount: TRABALHISTA.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "magenta",
    },
    CIVEL: {
        updateCount: CIVEL.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "roxo",
    },
    CALCULO: {
        updateCount: CALCULO.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "marrom",
    },
    CRM: {
        updateCount: CRM.length * 2,
        percent: 0,
        contIteration: 0,
        cor: "cinza",
    },
}


function createPainel (setor, colaboradores, condiction) {
    if (!condiction) {
        return
    }
    
    const getActiveIndex = (parametrosCalculoDias) => {
        return parametrosCalculoDias.findIndex(parametro => parametro === 0)
    }

    const addStyleAnimationTable = () => {
        const sheet = document.styleSheets[0]
        sheet.insertRule('.hidden-table-follow { display: none ;}', sheet.cssRules.length)
        /* sheet.insertRule('.active-table-follow { display: table-row; animation: slide-in-table-follow 0.4s ease-in-out; }', sheet.cssRules.length) */
        sheet.insertRule('.active-table-follow { display: table-row; }', sheet.cssRules.length)
        /* sheet.insertRule('.slide-out-table-follow { animation: slide-out-table-follow 0.4s ease-in-out; }', sheet.cssRules.length) */
        sheet.insertRule('@keyframes slide-in-table-follow { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }', sheet.cssRules.length)
        sheet.insertRule('@keyframes slide-out-table-follow { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-100%); opacity: 0; } }', sheet.cssRules.length)
        sheet.insertRule('.button-container-table-follow { margin: 10px; text-align: center; }', sheet.cssRules.length)
        sheet.insertRule('.button-table-follow { margin: 5px; padding: 5px 10px; background-color: #004085; color: white; border: none; border-radius: 5px; cursor: pointer; }', sheet.cssRules.length)
        sheet.insertRule('.button-table-follow:hover { background-color: #0056b3; }', sheet.cssRules.length)
    }

    function showTable(index) {
        const tabelas = document.querySelectorAll(`.${id}-table`)
        tabelas.forEach((tabela, i) => {
            tabela.classList.remove("active-table-follow", "slide-out-table-follow")
            tabela.classList.add("hidden-table-follow")
            if (i === index) {
                tabela.classList.remove("hidden-table-follow")
                tabela.classList.add("active-table-follow")
            }
        })
    }

    const activeBTNTable = (id, tabelas) => {
        const btnProximo = document.querySelector(`#${id}-button-table-follow-proximo`)
        const btnAnterior = document.querySelector(`#${id}-button-table-follow-anterior`)
        console.log(currentTable)
        btnProximo.disabled = false
        btnAnterior.disabled = false

        if (currentTable === tabelas.length - 1)
            btnProximo.disabled = true

        if (currentTable === 0)
            btnAnterior.disabled = true
    }

    const nextTable = (id) => {
        const tabelas = document.querySelectorAll(`.${id}-table`)
        /* tabelas[currentTable].classList.add("slide-out-table-follow") */
        currentTable = (currentTable + 1) % tabelas.length
        showTable(currentTable)
        activeBTNTable(id, tabelas)
    }

    const prevTable = (id, btn) => {
        const tabelas = document.querySelectorAll(`.${id}-table`)
        /* tabelas[currentTable].classList.add("slide-out-table-follow") */
        currentTable = (currentTable - 1 + tabelas.length) % tabelas.length
        showTable(currentTable)
        activeBTNTable(id, tabelas)
    }

    addStyleAnimationTable()
    const painelBar = document.querySelector("#fdt-mt-header > ul:nth-child(1)")
    const qtdViews = 3
    const qtdDias = 8
    const parametrosCalculoDias = getOffsetDays(qtdDias, qtdViews)
    const activeIndex = getActiveIndex(parametrosCalculoDias)
    const viewsArrayDate = getArrayDatePanelSupervisor(qtdDias, qtdViews, parametrosCalculoDias)
    const id = `painelBTNSup${setor}`
    let currentTable = activeIndex
    
    const tables = viewsArrayDate.reduce((previous, { datas, dias }, index) => {
        previous += generateTable(colaboradores, datas, dias, index, id, activeIndex)
        return previous
    }, '')
    
    const html = `<a href="" class="dropdown-toggle" data-toggle="personalizedDropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-toggle="tooltip" data-placement="bottom" title="Painel do Supervisor ${setor}" data-original-title="Painel do Supervisor ${setor}"><i class="fa fa-fw fa-table fdt-cor-${data[setor].cor}"></i></span></a>
                    <ul id="panelSup${setor}" class="dropdown-menu hidden-xs">
                        <li class="fdt-dropdown-cabecalho" style="color: #005689;">Painel do Supervisor</li>
                        <li class="fdt-widget-lembretes" style="display: flex; justify-content: center; align-items: center; gap: 10px; padding: 10px 0;">
                            ${
                                qtdViews > 1 ? `
                                    <div class="button-container-table-follow">
                                        <button id="${id}-button-table-follow-anterior" class="${id}-button-table-follow btn fdt-btn-azul">Anterior</button>
                                    </div>
                                ` : ''
                            }
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
                            ${
                                qtdViews > 1 ? `
                                    <div class="button-container-table-follow">
                                        <button id="${id}-button-table-follow-proximo" class="${id}-button-table-follow btn fdt-btn-azul">Próximo</button>
                                    </div>
                                ` : ''
                            }
                        </li>
                        <li class="fdt-widget-lembretes">
                            <ul>
                                <li>
                                    ${tables}
                                </li>
                            </ul>
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
    li.setAttribute('id', id)
    painelBar.appendChild(li)
    
    const panelSup = document.querySelector(`#panelSup${setor}`)
    const contentBar = createBar(setor)
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
            if (chave.includes('atrasadas')) {
                tdsSeparados[nome][chave][chave].innerHTML = result[chave]
            } else if (result[chave] == 0) {
                tdsSeparados[nome][chave].innerHTML = 0
            } else {
                tdsSeparados[nome][chave]['Ativas'].innerHTML = result[chave]['Ativas']
                tdsSeparados[nome][chave]['Encerradas'].innerHTML = result[chave]['Encerradas']
                tdsSeparados[nome][chave]['Total'].innerHTML = result[chave]['Total']
            }
        })
        incrementBar(setor)
    }
    
    li.addEventListener('click', event => {
        event.preventDefault()

        if (!li.classList.contains("open")) {
                li.classList.add("open")
            
            createBackgroundFollowUp(li)

            showContentBar(contentBar, setor)

            colaboradores.forEach(({ id, nomeTLC }) => {

                const params = `&bsAdvTarefasExecutor=${id}`
                const tarefasAtrasadas = {}
                const start = viewsArrayDate[0]['datas'][1]
                const end = viewsArrayDate[viewsArrayDate.length - 1]['datas'][viewsArrayDate[viewsArrayDate.length - 1]['datas'].length - 1]
                
                const datas = []
                
                viewsArrayDate.forEach((value, index) => {
                    tarefasAtrasadas[`atrasadas${index}`] = 0
                    datas.push(...value.datas)
                })
                
                getTarefasSemanal(id, start, end, datas).then(result => {
                    inputDados(nomeTLC, result)
                })

                getTarefasAtrasadas(params, tarefasAtrasadas, qtdViews).then(result => {
                    inputDados(nomeTLC, result)
                })
            })
        }
    })

    document.querySelectorAll(`.${id}-button-table-follow`).forEach(btn => {
        btn.addEventListener('click', event => {
            if (event.target.innerHTML === "Anterior") {
                prevTable(id)
            } else {
                nextTable(id)
            }
        })
    })
}

function generateTable(colaboradores, datas, dias, index = null, id = null, activeIndex = null) {
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let table = `<table class="tabela ${ id ? `${id}-table` : '' } ${ index === activeIndex ? 'active-table-follow' : 'hidden-table-follow' }" id="${ id ? `${id}-table${ index ?? '' }` : '' }">`

    for (c = 0; c <= colaboradores.length; c++) {
        table += `<tr>`

        let nome

        if (c > 0) {
            nome = colaboradores[c-1].nomeTLC
        }

        for (let j = 0; j <= datas.length; j++) {
            if ((j == 0) && (c == 0)) {
                table += `<th style="background: rgb(0 86 137);">&nbsp;</th>`
            } else if ((j != 0) && (c == 0)) {
                if (j > 1)
                    table += `<th colspan="3" data-date="${(datas[j-1].toISOString().split('T'))[0]}" class="dRow">${datas[j-1].toLocaleDateString()}<br>${semana[dias[j-1]]}</th>`
                else
                    table += `<th data-date="${datas[j-1]}" class="dRow">Tarefas atrasadas</th>`
            } else if ((j == 0) && (c > 0)) {
                table += `<th data-nome="${nome}" class="nCollumn">${nome.toUpperCase()}</th>`
            } else if (c > 0) {
                if (j > 1)
                    table += `<td data-toggle="tooltip" data-original-title="Ativas" data-placement="Top" style="background: #A5D5EF;" data-categoria="Ativas" data-nome="${nome}" data-date="${(datas[j-1].toISOString().split('T'))[0]}">-</td>
                    <td data-toggle="tooltip" data-original-title="Encerradas" data-placement="Top" style="background: #CCC;" data-categoria="Encerradas" data-nome="${nome}" data-date="${(datas[j-1].toISOString().split('T'))[0]}">-</td>
                    <td data-toggle="tooltip" data-original-title="Total" data-placement="Top" style="background: #ADADAD;" data-categoria="Total" data-nome="${nome}" data-date="${(datas[j-1].toISOString().split('T'))[0]}">-</td>`
                else
                    table += `<td style="background: #34454E; color: #FFF;" data-categoria="atrasadas${index ?? ""}" data-nome="${nome}" data-date="${datas[j-1]}">-</td>`
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

function getOffsetDays(qtdDias, qtdViews) {
    const parametrosCalculoDias = []

    for (let diasOffsetIndice = 0; diasOffsetIndice <= ((qtdViews - 1) / 2); diasOffsetIndice++) {
        const parametro = qtdDias * diasOffsetIndice
        
        parametrosCalculoDias.push(parametro)
        
        if (diasOffsetIndice > 0)
            parametrosCalculoDias.push(parametro * (-1))
    }

    parametrosCalculoDias.sort((a, b) => a - b)

    return parametrosCalculoDias
}

function getArrayDatePanelSupervisor (qtdDias, qtdViews, parametrosCalculoDias) {
    const views = []
    

    for (let contagemView = 0; contagemView < qtdViews; contagemView++) {
        let date = new Date()
        date.setDate(date.getDate() + parametrosCalculoDias[contagemView])
        const datas = [`atrasadas${contagemView}`]
        const dias = [`atrasadas${contagemView}`]

        for (let contagemDias = 1; contagemDias <= qtdDias; contagemDias++) {
            date.setHours(0,0,0,0)
            let indiceDiaSemana = date.getDay()
            dias.push(indiceDiaSemana)
            datas.push(date)
            date = new Date(date)
            date.setDate(date.getDate()+1)
        }

        views.push({ datas, dias })
    }
    

    return views
}

function getArrayDate (qtdDias) {
    let date = new Date()
    const datas = ['atrasadas']
    const dias = ['atrasadas']

    for (let contagemDias = 1; contagemDias <= qtdDias; contagemDias++) {
        date.setHours(0,0,0,0)
        let indiceDiaSemana = date.getDay()
        dias.push(indiceDiaSemana)
        datas.push(date)
        date = new Date(date)
        date.setDate(date.getDate()+1)
    }

    return { datas, dias }
}

function getTarefasSemanal (id, start, end, datas) {
    const url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/ajax/jsonAgendaTarefas.asp'
    const endIso = end.toISOString().split('T')[0]
    const data = {
        idTI: '',
        idST: '',
        idRE: '',
        idEX: id,
        idAG: '',
        start: start.toISOString().split('T')[0],
        end: endIso,
    }

    const body = JSON.stringify(data).replaceAll('"','').replaceAll(':','=').replaceAll('{','').replaceAll('}','').replaceAll(',','&')

    const result = fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
        body
    })
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
            str = str.replaceAll(chavesErradas[c], chavesCorretas[c])
        }

        return JSON.parse(str)
    })
    .then(resp => {
        const contagem = {
            idTarefas: []
        }

        for (c = 0; c < datas.length; c++) {
            if (typeof datas[c] != "string") {
                contagem[(datas[c].toISOString().split("T"))[0]] = {
                    Total: 0,
                    Ativas: 0,
                    Encerradas: 0
                }
            }
        }
        
        resp.forEach((e) => {
            const data = e['start'].replace(/T\d\d:\d\d:\d\d/, "")
            
            if (data <= endIso) {
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
            }
        })
        return contagem
    })
    
    return result
}

async function getTarefasAtrasadas (params, tarefasAtrasadas) {
    
    const ontem = new Date()
    const passado = new Date(ontem.getFullYear()-10,ontem.getMonth(), ontem.getDate())
    ontem.setDate(ontem.getDate()-1)
    
    const url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default.asp'

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

    const body = JSON.stringify(data).replaceAll('"','').replaceAll(':','=').replaceAll('{','').replaceAll('}','').replaceAll(',','&') + params

    const result = await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }),
        body
    })
    .then(response => response.text())
    .then(response => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(response,'text/html')
        const tarefas = doc.documentElement.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')

        const lastTask = tarefas[tarefas.length - 1]

        if (lastTask) {
            const counter = lastTask.querySelector("td.text-center.fdt-counter")
            const keys = Object.keys(tarefasAtrasadas)

            keys.forEach(key => {
                tarefasAtrasadas[key] = counter ? counter.innerText : 0
            })
        }

        return tarefasAtrasadas
    })
    
    return result
}


// Barra de Carregamento
function resetBar(setor) {
    data[setor].percent = 0
    data[setor].contIteration = 0
    const bar = document.querySelector('#bar' + setor)
    bar.value = data[setor].percent
}

function finishLoad(bar, interval, setor) {
    interval.clearInterval()
    bar.value = data[setor].percent
}

function incrementBar(setor) {
    const bar = document.querySelector("#bar" + setor)
    const unidade = 100 / data[setor].updateCount
    data[setor].percent += unidade
    bar.value = Math.round(data[setor].percent)
    data[setor].contIteration++
    if (data[setor].updateCount == data[setor].contIteration) {
        const contentBar = document.querySelector("#contentBar" + setor)
        hiddeContentBar(contentBar)
    }
}

function hiddeContentBar(contentBar) {
    contentBar.style.display = "none"
}

function showContentBar(contentBar, setor) {
    resetBar(setor)
    contentBar.style.display = "flex"
}

function createStyleProgressBar() {
    const style = document.createElement('style')

    style.innerHTML = `
        progress {
            width: 50%;
            height: 20px;
        }

        progress::-webkit-progress-bar {
            background-color: #eee;
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        }

        progress::-webkit-progress-value {
            border-radius: 10px;
            transition: width 0.5s;
            background: linear-gradient(to right, #4caf50, #81c784);
        }

        progress::-moz-progress-bar {
            border-radius: 10px;
            transition: width 0.5s;
            background: linear-gradient(to right, #4caf50, #81c784);
        }

        progress::-ms-fill {
            border-radius: 10px;
            transition: width 0.5s;
            background: linear-gradient(to right, #4caf50, #81c784);
        }
    `

    document.head.appendChild(style)
}

function createBar(setor) {
    const maxValueProgressBar = 100
    const contentBar = document.createElement('div')
    const progress = document.createElement('progress')
    const p = document.createElement('p')
    contentBar.append(p)
    contentBar.append(progress)
    contentBar.id = "contentBar" + setor
    progress.id = "bar" + setor
    p.innerHTML="Carregando..."

    p.style.fontSize = "1.5em"
    p.style.color = "#40383A"

    contentBar.style.position = "absolute"
    contentBar.style.flexDirection = "column"
    contentBar.style.justifyContent = "center"
    contentBar.style.alignItems = "center"
    contentBar.style.background = "#CCC"
    contentBar.style.top = "0"
    contentBar.style.left = "0"
    contentBar.style.width = "100%"
    contentBar.style.height = "100%"

    progress.max = maxValueProgressBar
    
    return contentBar
}

function createBackgroundFollowUp(panel) {
    const background = document.createElement("div")

    background.style.position = "absolute"
    background.style.width = "100%"
    background.style.height = "100%"
    background.style.zIndex = "15"
    background.style.top = "0"

    document.body.append(background)

    background.addEventListener("click", () => {
        background.remove()
        panel.classList.toggle("open")
    })
}