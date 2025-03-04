const horarios = {
        morning: "Manhã",
        afternoon: "Tarde",
        undefined: "Indefinido"
    },
    modosAgendamento = {
        total: "Total",
        priority: "Prioridades",
        scheduling: "Agendamentos"
    },
    maxValueProgressBar = 100,
    colors = {
        total: "#0096881a",
        priority: "#dc35451a",
        scheduling: "#ffc1071a"
    }

let updateCountFollowUps,
    percentFollowUps = 0,
    contIterationFollowUps = 0

async function getFollowUpTypes() {
    const parser = new DOMParser()
    const result = await fetch("http://fabioribeiro.eastus.cloudapp.azure.com/fab/tiposHistorico/default.asp")
    const html = await result.text()
    const doc =  parser.parseFromString(html, "text/html")
    const typesElementList = doc.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr")
    const followUpTypes = Array.from(typesElementList).map(typeElement => typeElement.querySelector("td:nth-child(3)").innerText.toUpperCase())

    return followUpTypes
}

function insertStyleSheet() {
    const cssRules = [
        `.table-container {
            max-width: 50vw;
            max-height: 50vh;
            overflow-x: auto;
            overflow-y: auto;
            border: 1px solid #ddd;
            border-radius: 10px;
            background: white;
        }`,
        `table.follow {
            position: relative;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-family: 'Inter', sans-serif;
            background: #f8f9fa;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }`,
        `table.follow thead {
            top: 0;
            position: sticky;
            background: #004085;
            color: #ffffff;
            font-weight: bold;
            z-index: 5;
        }`,
        `table.follow thead th {
            padding: 12px;
            border: 1px solid #d1d1d1;
            text-align: center;
        }`,
        `table.follow tbody th:first-child {
            position: sticky;
            left: 0;
            max-width: 10vw;
            overflow-wrap: break-word;
            background-color: #ffffff;
            z-index: 2;
            font-weight: bold;
            text-align: left;
            padding-left: 10px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }`,
        `table.follow tbody tr:nth-child(odd) {
            background-color: #e9ecef;
        }`,
        `table.follow tbody tr:nth-child(even) {
            background-color: #ffffff;
        }`,
        `table.follow td {
            text-align: center;
            padding: 10px;
            border: 1px solid #d1d1d1;
            transition: background 0.3s ease;
        }`,
        `table.follow td:hover {
            background: #007bff33;
        }`,
        `table.follow td[data-types-appointments="Total"] {
            background: ${colors.total};
        }`,
        `table.follow td[data-types-appointments="Agendamentos"] {
            background: ${colors.scheduling};
        }`,
        `table.follow td[data-types-appointments="Prioridades"] {
            background: ${colors.priority};
            color: #7d1919;
            font-weight: bold;
        }`,
        `table.follow, table.follow th, table.follow td {
            border-radius: 5px;
        }`,
        `@media (max-width: 768px) {
            table.follow {
                font-size: 14px;
            }
            table.follow td, table.follow th {
                padding: 8px;
            }
        }`
    ]
    

    const styleElement = document.querySelector("style")

    cssRules.forEach(rule => {
        styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length)
    })
}

async function createPainelFollowUps(condiction) {
    if (!condiction) {
        return
    }

    const painelBar = document.querySelector(
        "#fdt-mt-header > ul:nth-child(1)"
    )

    insertStyleSheet()
    
    const { datas, dias } = getArrayDateFollowUps()

    const tiposAtendimento = await getFollowUpTypes()

    const html = `<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-toggle="tooltip" data-placement="bottom" title="Painel Geral de Follow-Ups" data-original-title="Painel Geral de Follow-Ups"><i class="fa fa-fw fa-magnet fdt-cor-violeta"></i></span></a>
                <ul id="panelFollowUps" class="dropdown-menu hidden-xs">
                    <li class="fdt-dropdown-cabecalho" style="color: #005689;">Painel Geral de Follow-Ups</li>
                    <li class="fdt-widget-lembretes">
                        <ul>
                            <li class="table-container">
                                <table class="tabela follow">${generateTableFollowUps(tiposAtendimento, datas, dias)}</table>
                            </li>
                        </ul>
                    </li>
                    <li class="fdt-widget-lembretes" style="display: flex; justify-content: center; align-items: center; gap: 10px; padding: 10px 0;">
                        <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                            <span style="background: ${colors.total}; width: 10px; height: 10px;"></span>Total (Agendamentos + Prioridades)
                        </div>
                        <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                            <span style="background: ${colors.priority}; width: 10px; height: 10px;"></span>Prioridades
                        </div>
                        <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                            <span style="background: ${colors.scheduling}; width: 10px; height: 10px;"></span>Agendamentos
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
    li.setAttribute("class", "dropdown mensagens hidden-xs")
    li.setAttribute("id", 'painelBTNSupFollowUps')
    painelBar.appendChild(li)
    const panelSup = document.querySelector('#panelFollowUps')
    const contentBar = createBarFollowUps()
    panelSup.appendChild(contentBar)
    /* estilizarTabelaFollowUps() */

    const inputDadosFollowUps = (tipoFollowUp, result) => {
        
        const tds = document.querySelectorAll(".tabela.follow td")
        let tdsSeparados = {}
        tds.forEach((td) => {
            if (td.dataset.nome === tipoFollowUp) {
                if (!tdsSeparados[tipoFollowUp]) {
                    tdsSeparados[tipoFollowUp] = {}
                }
                if (!tdsSeparados[tipoFollowUp][td.dataset.date]) {
                    tdsSeparados[tipoFollowUp][td.dataset.date] = {}
                }
                if (!tdsSeparados[tipoFollowUp][td.dataset.date][td.dataset.horario]) {
                    tdsSeparados[tipoFollowUp][td.dataset.date][td.dataset.horario] = {}
                }

                tdsSeparados[tipoFollowUp][td.dataset.date][td.dataset.horario][td.dataset.categoria] = td
            }
        })

        const dates = Object.entries(result).map((e) => e[0])
        
        dates.forEach((date) => {
            tdsSeparados[tipoFollowUp][date][horarios.morning][modosAgendamento.scheduling].innerHTML = result[date]['morning']["scheduling"]
            tdsSeparados[tipoFollowUp][date][horarios.morning][modosAgendamento.priority].innerHTML = result[date]['morning']["priority"]
            tdsSeparados[tipoFollowUp][date][horarios.morning][modosAgendamento.total].innerHTML = result[date]['morning']["total"]
            tdsSeparados[tipoFollowUp][date][horarios.afternoon][modosAgendamento.scheduling].innerHTML = result[date]['afternoon']["scheduling"]
            tdsSeparados[tipoFollowUp][date][horarios.afternoon][modosAgendamento.priority].innerHTML = result[date]['afternoon']["priority"]
            tdsSeparados[tipoFollowUp][date][horarios.afternoon][modosAgendamento.total].innerHTML = result[date]['afternoon']["total"]
            tdsSeparados[tipoFollowUp][date][horarios.undefined][modosAgendamento.scheduling].innerHTML = result[date]['undefined']["scheduling"]
            tdsSeparados[tipoFollowUp][date][horarios.undefined][modosAgendamento.priority].innerHTML = result[date]['undefined']["priority"]
            tdsSeparados[tipoFollowUp][date][horarios.undefined][modosAgendamento.total].innerHTML = result[date]['undefined']["total"]
        })
        incrementBarFollowUps()
    }

    document
        .querySelector(`#painelBTNSupFollowUps`)
        .addEventListener("click", () => {
            showContentBarFollowUps(contentBar);

            getFollowUps(datas).then((result) => {
                const nomes = Object.keys(result)
                updateCountFollowUps = nomes.length
                nomes.forEach(nome => inputDadosFollowUps(nome, result[nome]))
            })
        })
}

function generateTableFollowUps(tiposAtendimento, datas) {
    let isOddLine = false
    const semana = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ]

    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tbody = document.createElement("tbody")

    table.appendChild(thead)
    table.appendChild(tbody)

    const trDatasTHead = document.createElement('tr')
    const trHorariosTHead = document.createElement('tr')

    const th = document.createElement("th")
    th.rowSpan = 2
    th.innerHTML = "Tipo de Atendimento"
    trDatasTHead.appendChild(th)

    thead.appendChild(trDatasTHead)
    thead.appendChild(trHorariosTHead)                
    
    for (const tipo of tiposAtendimento) {
        isOddLine = !isOddLine
        const tr = document.createElement("tr")
        const th = document.createElement("th")
        th.innerHTML = tipo
        tr.classList.add("nCollumn")
        tr.appendChild(th)
        /* if (isOddLine)
            th.style.filter = "brightness(0.8)" */
        for(const data of datas) {
            //THead
            if (tipo === tiposAtendimento[0]) {
                const thData = document.createElement("th")
                thData.colSpan = 9
                thData.innerHTML = `${data.toLocaleDateString()} (${semana[data.getDay()]})`
                thData.dataset['date'] = data.toLocaleDateString()
                trDatasTHead.appendChild(thData)

                const thMorning = document.createElement("th")
                thMorning.dataset['period'] = "Manhã"
                thMorning.innerHTML = "Manhã"
                thMorning.colSpan = 3
                trHorariosTHead.appendChild(thMorning)
                
                const thAfternoon = document.createElement("th")
                thAfternoon.dataset['period'] = "Tarde"
                thAfternoon.innerHTML = "Tarde"
                thAfternoon.colSpan = 3
                trHorariosTHead.appendChild(thAfternoon)
                
                const thUndefined = document.createElement("th")
                thUndefined.dataset['period'] = "Indefinido"
                thUndefined.innerHTML = "Indefinido"
                thUndefined.colSpan = 3
                trHorariosTHead.appendChild(thUndefined)
            }
            
            //TBody
            for (let index = 1; index <= 3; index++) {
                const tdAgendamentos = document.createElement("td")
                tdAgendamentos.dataset['typesAppointments'] = "Agendamentos"
                tdAgendamentos.dataset['originalTitle'] = "Agendamentos"
                tdAgendamentos.dataset['toggle'] = "tooltip"
                tdAgendamentos.dataset['placement'] = "Top"
                tdAgendamentos.dataset['categoria'] = "Agendamentos"
                tdAgendamentos.dataset['nome'] = tipo
                tdAgendamentos.dataset['date'] = data.toLocaleDateString()
                tdAgendamentos.innerHTML = '-'
                
                const tdPrioridades = document.createElement("td")
                tdPrioridades.dataset['typesAppointments'] = "Prioridades"
                tdPrioridades.dataset['originalTitle'] = "Prioridades"
                tdPrioridades.dataset['toggle'] = "tooltip"
                tdPrioridades.dataset['placement'] = "Top"
                tdPrioridades.dataset['categoria'] = "Prioridades"
                tdPrioridades.dataset['nome'] = tipo
                tdPrioridades.dataset['date'] = data.toLocaleDateString()
                tdPrioridades.innerHTML = "-"
                
                const tdTotal = document.createElement("td")
                tdTotal.dataset['typesAppointments'] = "Total"
                tdTotal.dataset['originalTitle'] = "Total"
                tdTotal.dataset['toggle'] = "tooltip"
                tdTotal.dataset['placement'] = "Top"
                tdTotal.dataset['categoria'] = "Total"
                tdTotal.dataset['nome'] = tipo
                tdTotal.dataset['date'] = data.toLocaleDateString()
                tdTotal.innerHTML = "-"

                tr.appendChild(tdTotal)
                tr.appendChild(tdPrioridades)
                tr.appendChild(tdAgendamentos)

                if (index === 1) {
                    tdAgendamentos.dataset.horario = horarios.morning
                    tdPrioridades.dataset.horario = horarios.morning
                    tdTotal.dataset.horario = horarios.morning
                } else if (index === 2) {
                    tdAgendamentos.dataset.horario = horarios.afternoon
                    tdPrioridades.dataset.horario = horarios.afternoon
                    tdTotal.dataset.horario = horarios.afternoon
                } else {
                    tdAgendamentos.dataset.horario = horarios.undefined
                    tdPrioridades.dataset.horario = horarios.undefined
                    tdTotal.dataset.horario = horarios.undefined
                }
            }
        }
        tbody.append(tr)
    }

    return table.innerHTML
}

function estilizarTabelaFollowUps() {
    const titulos = document.querySelectorAll(".dRow")
    const nomes = document.querySelectorAll(".nCollumn")
    const numbers = document.querySelectorAll(".tabela td")

    const formatTitle = (element) => {
        element.style.padding = "0.5rem"
        element.style.background = "#1c5475"
        element.style.color = "#FFF"
    }
    const formatContent = (element) => {
        element.style.padding = "0.5rem"
        element.style.textAlign = "center"
        element.style.border = "1px solid lightgray"
    }

    titulos.forEach((th) => {
        th.style.textAlign = "center"
        formatTitle(th)
    })

    nomes.forEach((th) => {
        formatTitle(th)
    })

    numbers.forEach((td) => {
        formatContent(td)
    })
}

function getArrayDateFollowUps() {
    let datas = [],
        dias = [],
        date = new Date(),
        indiceDiaSemana = date.getDay(),
        IsSegundaSemana = false

    do {
        date.setHours(0, 0, 0, 0)
        
        if (indiceDiaSemana === 0) {
            IsSegundaSemana = true
        }
        if (indiceDiaSemana > 0 && indiceDiaSemana < 6) {
            dias.push(indiceDiaSemana)
            datas.push(date)
        }
        
        date = new Date(date)
        date.setDate(date.getDate() + 1)
        indiceDiaSemana = date.getDay()
    } while(!(indiceDiaSemana === 6 && IsSegundaSemana))

    return { datas, dias }
}

async function getFollowUps(datas) {
    
    let totalPages = 1,
        currentPage = 1,
        listFollowUps = {}

    const isMorning = (hora) => {
        
        return Number(hora) >= 0 && Number(hora) < 12
    }

    const fillListFollowUps = (doc, listFollowUps) => {
        const followUps = doc.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr")
        
        const list = Array.from(followUps).reduce((listFollowUps, followUp) => {
            const tipoFollowUp = followUp.querySelector("td:nth-child(6) > span").textContent.toUpperCase()
            const dataAgendamentoElement = followUp.querySelector("td:nth-child(7)")
            const isPrioridade = dataAgendamentoElement.innerHTML.includes("fa-exclamation-triangle")
            const [ data, hora ] = dataAgendamentoElement.innerText.includes("às") ? dataAgendamentoElement.innerText.trim().split(":")[0].split(" às ") : [dataAgendamentoElement.innerText.trim().slice(0, 10), undefined ]
            
            if (!listFollowUps[tipoFollowUp]) {
                listFollowUps[tipoFollowUp] = {}
            }

            if (!listFollowUps[tipoFollowUp][data]) {
                listFollowUps[tipoFollowUp][data] = {
                    morning: {
                        total: 0,
                        priority: 0,
                        scheduling: 0
                    },
                    afternoon: {
                        total: 0,
                        priority: 0,
                        scheduling: 0
                    },
                    undefined: {
                        total: 0,
                        priority: 0,
                        scheduling: 0
                    }
                } 
            }

            if (isPrioridade) {
                if (hora === undefined) {
                    listFollowUps[tipoFollowUp][data]['undefined']['total'] += 1
                    listFollowUps[tipoFollowUp][data]['undefined']['priority'] += 1
                } else if (isMorning(hora)) {
                    listFollowUps[tipoFollowUp][data]['morning']['total'] += 1
                    listFollowUps[tipoFollowUp][data]['morning']['priority'] += 1
                } else {
                    listFollowUps[tipoFollowUp][data]['afternoon']['total'] += 1
                    listFollowUps[tipoFollowUp][data]['afternoon']['priority'] += 1
                }
            } else {
                if (hora === undefined) {
                    listFollowUps[tipoFollowUp][data]['undefined']['scheduling'] += 1
                    listFollowUps[tipoFollowUp][data]['undefined']['total'] += 1
                } else if (isMorning(hora)) {
                    listFollowUps[tipoFollowUp][data]['morning']['scheduling'] += 1
                    listFollowUps[tipoFollowUp][data]['morning']['total'] += 1
                } else {
                    listFollowUps[tipoFollowUp][data]['afternoon']['scheduling'] += 1
                    listFollowUps[tipoFollowUp][data]['afternoon']['total'] += 1
                }
            }

            return listFollowUps
        }, listFollowUps)

        return list
    }

    const requestData = async (page, datas, listFollowUps) => {
        const firstIndexDate = 0
        const lastIndexDate = datas.length - 1
        const dataDe = datas[firstIndexDate].toLocaleDateString()
        const dataAte = datas[lastIndexDate].toLocaleDateString()
        const numberPageTextIndex = 3
        const html = await (await fetch(`http://fabioribeiro.eastus.cloudapp.azure.com/flw/followups/default.asp?pg=${page}&bsFlwFollows=s&bsFlwFollowsAcao=&bsFlwFollowsUsuario=&bsFlwFollowsCliente=&bsFlwFollowsDataDe=${dataDe}&bsFlwFollowsDataAte=${dataAte}&bsFlwFollowsStatus=0&bsFlwFollowsTipo=&bsFlwFollowsCPF=&bsFlwFollowsChegou=`)).text()

        const parser = new DOMParser()

        const doc = parser.parseFromString(html, 'text/html')

        const followUps = fillListFollowUps(doc, listFollowUps)
        
        if (page === 1) {
            const pages = doc.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.row.margemCimaNeg15.fs12 > div > p").textContent.split(' ')[numberPageTextIndex]

            return { pages, followUps }
        }
        
        return { followUps }
    }

    do {
        const { pages, followUps } = await requestData(currentPage, datas, listFollowUps)

        listFollowUps = followUps

        if (pages)
            totalPages = pages

        currentPage++
    } while (currentPage <= totalPages)

    return listFollowUps
}

// Barra de Carregamento
function resetBarFollowUps() {
    percentFollowUps = 0
    contIterationFollowUps = 0
    const bar = document.querySelector("#barFollowUps")
    bar.value = percentFollowUps
}

function finishLoadFollowUps(bar, interval) {
    interval.clearInterval()
    bar.value = percentFollowUps;
}

function incrementBarFollowUps() {
    const bar = document.querySelector("#barFollowUps")
    const unidade = maxValueProgressBar / updateCountFollowUps
    percentFollowUps += unidade
    bar.value = Math.round(percentFollowUps)
    contIterationFollowUps++
    if (updateCountFollowUps === contIterationFollowUps) {
        const contentBar = document.querySelector("#contentBarFollowUps")
        hiddeContentBarFollowUps(contentBar)
    }
}

function hiddeContentBarFollowUps(contentBar) {
    contentBar.style.display = "none"
}

function showContentBarFollowUps(contentBar) {
    resetBarFollowUps()
    contentBar.style.display = "flex"
}

function createStyleProgressBarFollowUps() {
    const style = document.createElement("style")

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

function createBarFollowUps() {
    const contentBar = document.createElement("div")
    const progress = document.createElement("progress")
    const p = document.createElement("p")
    contentBar.append(p)
    contentBar.append(progress)
    contentBar.id = "contentBarFollowUps"
    progress.id = "barFollowUps"
    p.innerHTML = "Carregando..."

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
    contentBar.style.zIndex = 10

    progress.max = maxValueProgressBar

    return contentBar
}
