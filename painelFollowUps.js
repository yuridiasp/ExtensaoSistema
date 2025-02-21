let updateCountFollowUps = 1,
    percent = 0,
    contIteration = 0

function createPainelFollowUps(condiction) {
    if (!condiction) {
        return
    }

    const painelBar = document.querySelector(
        "#fdt-mt-header > ul:nth-child(1)"
    )
    
    const { datas, dias } = getArrayDateFollowUps()
    const cor = {
        ADM: "azul",
        SAC: "verde",
        FINANCEIRO: "vermelho",
        INSS: "preto",
    }

    const html = `<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-toggle="tooltip" data-placement="bottom" title="Painel Geral de Follow-Ups" data-original-title="Painel Geral de Follow-Ups"><i class="fa fa-fw fa-table fdt-cor-${
        cor[setor]
    }"></i></span></a>
                <ul id="panelFollowUps" class="dropdown-menu hidden-xs">
                    <li class="fdt-dropdown-cabecalho" style="color: #005689;">Painel do Supervisor</li>
                    <li class="fdt-widget-lembretes">
                        <ul>
                            <li>
                                ${generateTableFollowUps(colaboradores, datas, dias)}
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
    li.setAttribute("class", "dropdown mensagens hidden-xs")
    li.setAttribute("id", `painelBTNSupFollowUps`)
    painelBar.appendChild(li)
    const panelSup = document.querySelector(`#panelSupFollowUps`)
    const contentBar = createBarFollowUps()
    panelSup.append(contentBar)
    estilizarTabelaFollowUps()

    const inputDadosFollowUps = (nome, result) => {
        const tds = document.querySelectorAll(".tabela td")
        let tdsSeparados = {}
        tdsSeparados[nome] = {}
        tds.forEach((td) => {
            if (td.dataset.nome == nome) {
                if (!tdsSeparados[nome][td.dataset.date]) {
                    tdsSeparados[nome][td.dataset.date] = {}
                }
                tdsSeparados[nome][td.dataset.date][td.dataset.categoria] = td
            }
        })

        let chaves = Object.entries(result).map((e) => e[0])

        chaves = chaves.filter((chave) => chave != "idTarefas")

        chaves.forEach((chave) => {
            if (chave == "atrasadas") {
                tdsSeparados[nome]["atrasadas"]["atrasadas"].innerHTML =
                    result["atrasadas"]
            } else if (result[chave] == 0) {
                tdsSeparados[nome][chave].innerHTML = 0;
            } else {
                tdsSeparados[nome][chave]["Ativas"].innerHTML =
                    result[chave]["Ativas"]
                tdsSeparados[nome][chave]["Encerradas"].innerHTML =
                    result[chave]["Encerradas"]
                tdsSeparados[nome][chave]["Total"].innerHTML =
                    result[chave]["Total"]
            }
        })
        incrementBarFollowUps(setor);
    }

    document
        .querySelector(`#painelBTNSupFollowUps`)
        .addEventListener("click", () => {
            showContentBarFollowUps(contentBar, setor);

            colaboradores.forEach(({ id, nomeTLC }) => {

                getFollowUps(id, datas).then((result) => {
                    inputDadosFollowUps(nomeTLC, result)
                })
            })
        })
}

function generateTableFollowUps(tiposAtendimento, datas, dias) {
    const semana = [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
    ]
    const horarios = {
        morning: "Manhã",
        afternoon: "Tarde",
        undefined: "Indefinido"
    }
    let table = `<table class="tabela">`

    for (c = 0; c <= tiposAtendimento.length; c++) {
        table += `<tr>`

        let nome

        if (c > 0) {
            nome = tiposAtendimento[c - 1].nomeTLC
        }

        for (let j = 0; j <= datas.length; j++) {
            if (j == 0 && c == 0) {
                table += `<th style="background: rgb(0 86 137);">&nbsp;</th>`
            } else if (j != 0 && c == 0) {
                if (j > 1)
                    table += `<th colspan="3" data-date="${
                        datas[j - 1].toISOString().split("T")[0]
                    }" class="dRow">${datas[j - 1].toLocaleDateString()}<br>${
                        semana[dias[j - 1]]
                    }</th>`
                else
                    table += `<th data-date="${
                        datas[j - 1]
                    }" class="dRow">Tarefas ${datas[j - 1]}</th>`;
            } else if (j == 0 && c > 0) {
                table += `<th data-nome="${nome}" class="nCollumn">${nome.toUpperCase()}</th>`
            } else {
                if (j > 1)
                    table += `<td data-toggle="tooltip" data-original-title="Agendamentos" data-placement="Top" style="background: #A5D5EF;" data-categoria="Agendamentos" data-nome="${nome}" data-date="${
                        datas[j - 1].toISOString().split("T")[0]
                    }">-</td>
                <td data-toggle="tooltip" data-original-title="Prioridades" data-placement="Top" style="background: #CCC;" data-categoria="Prioridades" data-nome="${nome}" data-date="${
                        datas[j - 1].toISOString().split("T")[0]
                    }">-</td>
                <td data-toggle="tooltip" data-original-title="Total" data-placement="Top" style="background: #ADADAD;" data-categoria="Total" data-nome="${nome}" data-date="${
                        datas[j - 1].toISOString().split("T")[0]
                    }">-</td>`
            }
        }
        table += `</tr>`
    }
    return table
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
        dias.push(indiceDiaSemana)
        datas.push(date)

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
            const tipoFollowUp = followUp.querySelector("td:nth-child(6) > span").textContent
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
function resetBarFollowUps(setor) {
    percent[setor] = 0;
    contIteration[setor] = 0;
    const bar = document.querySelector("#barFollowUps");
    bar.value = percent[setor];
}

function finishLoadFollowUps(bar, interval, setor) {
    interval.clearInterval();
    bar.value = percent[setor];
}

function incrementBarFollowUps(setor) {
    const bar = document.querySelector("#barFollowUps");
    const unidade = 100 / updateCount[setor];
    percent[setor] += unidade;
    bar.value = Math.round(percent[setor]);
    contIteration[setor]++;
    if (updateCount[setor] == contIteration[setor]) {
        const contentBar = document.querySelector("#contentBarFollowUps");
        hiddeContentBarFollowUps(contentBar);
    }
}

function hiddeContentBarFollowUps(contentBar) {
    contentBar.style.display = "none";
}

function showContentBarFollowUps(contentBar, setor) {
    resetBarFollowUps(setor);
    contentBar.style.display = "flex";
}

function createStyleProgressBarFollowUps() {
    const style = document.createElement("style");

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
    `;

    document.head.appendChild(style);
}

function createBarFollowUps() {
    const maxValueProgressBar = 1;
    const contentBar = document.createElement("div");
    const progress = document.createElement("progress");
    const p = document.createElement("p");
    contentBar.append(p);
    contentBar.append(progress);
    contentBar.id = "contentBarFollowUps";
    progress.id = "barFollowUps";
    p.innerHTML = "Carregando...";

    p.style.fontSize = "1.5em";
    p.style.color = "#40383A";

    contentBar.style.position = "absolute";
    contentBar.style.flexDirection = "column";
    contentBar.style.justifyContent = "center";
    contentBar.style.alignItems = "center";
    contentBar.style.background = "#CCC";
    contentBar.style.top = "0";
    contentBar.style.left = "0";
    contentBar.style.width = "100%";
    contentBar.style.height = "100%";

    progress.max = maxValueProgressBar;

    return contentBar;
}
