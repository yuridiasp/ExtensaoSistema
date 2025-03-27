const typeListTasksProtocol = ["DEMORA INJUSTIFICADA", "ENVELOPE - PREV"]
const typeOfTaskSearch = {
    geral: 0,
    protocolo: 1,
    prorrogacao: 2,
}
const prazosTarefasAvulsas = {
    prev: {
        "LOAS": 90,
        "AUXÍLIO DOENÇA": 45,
        "AUXÍLIO ACIDENTE": 60,
        "AUXÍLIO RECLUSÃO": 60,
        "SALÁRIO MATERNIDADE": 30,
        "APOSENTADORIA POR IDADE URBANA": 90,
        "APOSENTADORIA POR IDADE RURAL": 90,
        "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO": 90,
        "APOSENTADORIA ESPECIAL": 90,
        "APOSENTADORIA POR INVALIDEZ": 45,
        "PAB": 90,
        "PENSÃO POR MORTE": 60,
        "ENVELOPE": 7
    },
    civ: {},
    trt: {},
    inss: {
        "PEDIDO DE PRORROGAÇÃO AUXÍLIO DOENÇA - ADM": (-15),
    }
}
const { eduardo, thalyson, joseHenrique, yan, ana, elton, saulo } = {
    eduardo: {
        id: 192,
        nome: "EDUARDO PAIXÃO ROCHA SOBRINHO",
        nomeTLC: "EDUARDO",
        diasViagem: [],
        tarefas: 0
    },
    thalyson: {
        id: 206,
        nome: "THALYSON KELSON LIMA TORRES",
        nomeTLC: "THALYSON",
        diasViagem: [],
        tarefas: 0
    },
    joseHenrique: {
        id: 230,
        nome: "JOSÉ HENRIQUE VASCONCELOS RODRIGUES FONTES",
        nomeTLC: "JOSÉ HENRIQUE",
        diasViagem: [],
        tarefas: 0
    },
    yan: {
        id: 229,
        nome: "YAN THADEU PORTO DE OLIVEIRA SANTOS",
        nomeTLC: "YAN",
        diasViagem: [],
        tarefas: 0
    },
    ana: {
        id: 134,
        nome: "ANA CAROLINA SOARES DE MELO",
        nomeTLC: "ANA CAROLINA",
        diasViagem: [],
        tarefas: 0
    },
    elton: {
        id: 244,
        nome: "ELTON SILVA HONORATO",
        nomeTLC: "ELTON",
        diasViagem: [],
        tarefas: 0
    },
    saulo: {
        id: 248,
        nome: "SAULO MATHEUS ARAUJO DE SANTANA",
        nomeTLC: "SAULO MATHEUS",
        diasViagem: [],
        tarefas: 0
    }
}
const demandas = {
    prev: {
        "ANÁLISE": {
            executores: [ana, eduardo, thalyson]
        },
        "AUXÍLIO DOENÇA": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
        "AUXÍLIO ACIDENTE": {
            executores: [joseHenrique, yan],
            isDIList: true
        },
        "AUXÍLIO RECLUSÃO": {
            executores: [eduardo, thalyson, yan],
            isDIList: true
        },
        "AÇÃO DE COBRANÇA": {
            executores: [eduardo, thalyson, yan]
        },
        "ADICIONAL 25%": {
            executores: [thalyson, joseHenrique, yan]
        },
        "APOSENTADORIA ESPECIAL": {
            executores: [eduardo, thalyson, ana],
            isDIList: true
        },
        "APOSENTADORIA POR IDADE URBANA": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
        "APOSENTADORIA POR IDADE RURAL": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
        "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO": {
            executores: [eduardo, thalyson, ana],
            isDIList: true
        },
        "APOSENTADORIA RPPS": {
            executores: [eduardo, ana]
        },
        "APOSENTADORIA POR INVALIDEZ": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
        "LOAS": { 
            executores: [thalyson, joseHenrique, yan, elton, saulo],
            isDIList: true
        },
        "MANDADO DE SEGURANÇA": {
            executores: [elton, saulo],
            isDIList: true
        },
        "PAB": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
        "PENSÃO POR MORTE": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
        "REVISÃO RMI": {
            executores: [eduardo, thalyson, ana]
        },
        "SALÁRIO MATERNIDADE": {
            executores: [eduardo, thalyson, joseHenrique, yan],
            isDIList: true
        },
    },
    civ: {},
    trt: {},
    inss: {
        "PEDIDO DE PRORROGAÇÃO AUXÍLIO DOENÇA - ADM": {
            executores: INSS.filter(colaborador => colaborador.assignments.includes("prorrogação"))
        }
    }
}
const areas = {
    previdenciaria: "prev",
    civel: "civ",
    trabalhista: "trt",
    inssDigital: "inss"
}
let previousOption = null

function obterPrimeiroEUltimoDia(data, tipoTarefa) {
    const tiposTarefasMesmoDia = ["PEDIDO DE PRORROGAÇÃO AUXÍLIO DOENÇA - ADM"]
    const isTipoTarefasMesmoDia = tiposTarefasMesmoDia.includes(tipoTarefa)
    const ano = data.getFullYear()
    const mes = data.getMonth()

    // Primeiro dia do mês
    const primeiroDia = isTipoTarefasMesmoDia  ? data : new Date(ano, mes, 1)

    // Último dia do mês
    const ultimoDia = isTipoTarefasMesmoDia ? data : new Date(ano, mes + 1, 0)

    return { primeiroDia, ultimoDia }
}

function requererTarefasProtocolJuridico(data, area, tipoTarefa) {
    const colaboradores = demandas[area][tipoTarefa].executores
    const typeOfTask = typeListTasksProtocol.includes(tipoTarefa) ? typeOfTaskSearch.protocolo : typeOfTaskSearch.prorrogacao

    const { primeiroDia, ultimoDia } = obterPrimeiroEUltimoDia(data, tipoTarefa)

    return colaboradores.map(async colaborador => {
        return getTarefasColaboradores({ colaborador, dataDe: primeiroDia, dataAte: ultimoDia, typeOfTask })
    })
}

async function selectRespExecJuridico(area, data, tipoTarefa) {
    const typeOfTask = typeListTasksProtocol.includes(tipoTarefa) ? typeOfTaskSearch.protocolo : typeOfTaskSearch.prorrogacao
    const contactDiv = document.querySelector('#contactdiv')
    if (!contactDiv)
        createListaTarefas(typeOfTask, area.toUpperCase())
    else
        limparListaTarefas()

    const listaColaboradores = await Promise.all(requererTarefasProtocolJuridico(data, area, tipoTarefa))
    
    const executor = listaColaboradores.reduce((previous, currrent) => {
        if (previous.tarefas > currrent.tarefas) {
            return currrent
        }
        return previous
    }, listaColaboradores[0])

    const responsavel = area === areas.inssDigital ? executor.nome : "KEVEN FARO DE CARVALHO"

    selectRespExec ({ responsavel, executor: executor.nome }) 
}

function updateOption(selectedOptions, date) {
    if (previousOption) {
        previousOption.value = previousOption.dataset.original
        previousOption.innerHTML = previousOption.dataset.original
    }

    previousOption = selectedOptions
    
    selectedOptions.innerHTML += ` - P.I. ${date.toLocaleDateString()}`
    selectedOptions.value += ` - P.I. ${date.toLocaleDateString()}`
}

function setDataTarefa(date) {
    const dataParaFinalizacaoInput = document.querySelector("#dataParaFinalizacao")
    
    dataParaFinalizacaoInput.value = date.toLocaleDateString()
}

function addEventListenerToSelect(area, isEnvelope) {
    const selectDescription = document.querySelector("#descricao")

    selectDescription.addEventListener("change", ({ target }) => {
        const { selectedOptions } = target
        const tipoTarefa = selectedOptions[0].innerText.toUpperCase()
        const tipoTarefaDTO = { isEnvelope, tipoTarefa }
        
        const { prazoInterno, prazoFatal, prazoCRM } = calcularPrazoProtocoloProcesso(area, tipoTarefaDTO)

        setDataTarefa(prazoFatal)

        updateOption(selectedOptions[0], prazoInterno)
        
        selectRespExecJuridico(area, prazoInterno, tipoTarefa)

        const btnGravar = document.querySelector("#btnGravar")

        btnGravar.addEventListener("click", async event => {
            event.preventDefault()
            btnGravar.disabled = true
            const form = document.querySelector("#fdt-form")

            const idCL = document.querySelector("#fdt-form > input[type=hidden]:nth-child(4)").value

            const descricaoTarefa = `Nova oportunidade: ${isEnvelope ? `ENVELOPE ${area.toUpperCase()}` : 'DEMORA INJUSTIFICADA'} - ${selectedOptions[0].dataset.original} - P.F. ${prazoFatal.toLocaleDateString()}`
            await createTarefa({ idCL, descricaoTarefa, dataParaFinalizacao: prazoCRM.toLocaleDateString() })

            form.submit()
        })
    })
}

function getOptionsSelectInput(area, isEnvelope) {
    const tiposTarefas = Object.keys(demandas[area])

    const textHTML = tiposTarefas.reduce((previous, current) => {
        if (!isEnvelope && !demandas[area][current].isDIList) {
            return previous
        }

        previous += `<option data-original="${current}" value="${current}">${current}</option>`

        return previous
    }, '')

    return textHTML
}

function createInputSelect({ isEnvelope, area, divDescription }) {
    if (!state.functions.cadastroTarefa.tarefasAvulsasJuridicoCRM) {
        return
    }
    const htmlDescriptionSelect =   `<select name="descricao" id="descricao" class="form-control selectpicker" data-live-search="true" data-parsley-id="19" tabindex="-98" required>
                                        <option value=""></option>
                                        ${ getOptionsSelectInput(area, isEnvelope) }
                                    </select>`
    
    divDescription.innerHTML = htmlDescriptionSelect

    addEventListenerToSelect(area, isEnvelope)
}

function calcularPrazoProrrogacao(dataDCB, area, tipoTarefa) {
    const agora = new Date()
    const prazoTarefa = new Date(dataDCB)
    prazoTarefa.setDate(dataDCB.getDate() + prazosTarefasAvulsas[area][tipoTarefa])
    
    if (agora > prazoTarefa) {
        prazoTarefa.setDate(agora.getDate() + 1)

        return getDiaUtil(prazoTarefa)
    }

    return getDiaUtil(prazoTarefa, area)
}

async function getDCB (idCliente, gravarBtn) {
    const { dcb } = await requestDataCliente({
        id: idCliente,
        module: "cliente",
        gravarBtn
    })

    if (!dcb.length) {
        return { dcb: null, errorMessage: "Data de DCB não cadastrada na Ficha do Cliente!" }
    }

    const [dia, mes, ano] = dcb.split("/")
    const dataDCB = new Date(ano, mes - 1, dia)

    const agora = new Date()

    if (dataDCB < agora) {
        return { dcb: null, errorMessage: "Data de DCB não está atualizada!" }
    }

    return { dcb: dataDCB }
}

async function createInputTextArea(divDescription, area, tipoTarefa) {
    if (!state.functions.cadastroTarefa.tarefasProrrogacaoDCB) {
        return
    }

    const descriptionElement = document.querySelector("#descricao")
    let value = ''

    if (descriptionElement.type === 'textarea' && tipoTarefa !== "PEDIDO DE PRORROGAÇÃO AUXÍLIO DOENÇA - ADM") {
        return
    }

    if (tipoTarefa === "PEDIDO DE PRORROGAÇÃO AUXÍLIO DOENÇA - ADM") {
        const btnGravar = document.querySelector("#btnGravar")
        const idCL = document.querySelector("#fdt-form > input[type=hidden]:nth-child(4)").value
        const { dcb, errorMessage } = await getDCB(idCL, btnGravar)
        if (!dcb) {
            alert(errorMessage)
        } else {
            value = `Realizar Pedido de Prorrogação - DCB ${dcb.toLocaleDateString()}`
            const prazoTarefa = calcularPrazoProrrogacao(dcb, area, tipoTarefa)
            setDataTarefa(prazoTarefa)
            selectRespExecJuridico(area, prazoTarefa, tipoTarefa)
        }
    }

    const htmlDescriptionTextArea = `<textarea name="descricao" id="descricao" required="" maxlength="1000" class="form-control" data-parsley-id="19">${value}</textarea>`

    divDescription.innerHTML = htmlDescriptionTextArea
}

function getDiaUtil(date, area) {
    const newDate = new Date(date)

    while((newDate.getDay() === 0) || (newDate.getDay() === 6) || isFeriado(newDate, parametros.tarefaContatar).isHoliday) {
        const ascrecimoOrDescrescimo = area === areas.inssDigital ? (-1) : 1
        newDate.setDate(newDate.getDate() + ascrecimoOrDescrescimo)
    }

    return newDate
}

function calcularPrazoProtocoloProcesso(area, { isEnvelope, tipoTarefa }) {
    const tipoDemanda = isEnvelope ? "ENVELOPE" : tipoTarefa
    const acrescimo = isEnvelope ? 0 : 1
    const prazoJuridico = isEnvelope ? 0 : 7
    const prazoProtocolo = prazosTarefasAvulsas[area][tipoDemanda]
    
    const datePrazoFatal = new Date()
    datePrazoFatal.setDate(datePrazoFatal.getDate() + prazoProtocolo + prazoJuridico + acrescimo)
    const prazoFatal = getDiaUtil(datePrazoFatal, area)

    const datePrazoInterno = new Date()
    datePrazoInterno.setDate(datePrazoInterno.getDate() + (isEnvelope ? 0 : prazoProtocolo) + acrescimo)
    const prazoInterno = getDiaUtil(datePrazoInterno, area)

    const datePrazoCRM = isEnvelope ? new Date() : new Date(prazoInterno)
    datePrazoCRM.setDate(datePrazoCRM.getDate() + 1)
    const prazoCRM = getDiaUtil(datePrazoCRM, area)

    return { prazoInterno, prazoFatal, prazoCRM }
}

function automaticDistributionTasksJuricial() {
    const select = document.querySelector('#idTipoTarefa')
    const divDescription = document.querySelector("#fdt-form > div:nth-child(14) > div.col-sm-8 > div")

    select.addEventListener("change", ({ target }) => {
        const { selectedOptions } = target
        
        const tipoTarefa = selectedOptions[0].innerText.toUpperCase()

        if (tipoTarefa === "ENVELOPE - PREV") {
            return createInputSelect({ isEnvelope: true, area: areas.previdenciaria, divDescription })
             
        }

        if (tipoTarefa === "DEMORA INJUSTIFICADA") {
            return createInputSelect({ isEnvelope: false, area: areas.previdenciaria, divDescription })
        }

        return createInputTextArea(divDescription, areas.inssDigital, tipoTarefa)
    })
}