const prazosProtocolosProcessos = {
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
    trt: {}
}
const { eduardo, thalyson, joseHenrique, yan, ana, italo, elton } = {
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
    italo: {
        id: 159,
        nome: "ITALO DE ANDRADE BEZERRA",
        nomeTLC: "ITALO",
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
}
const demandas = {
    prev: {
        "LOAS": [thalyson, joseHenrique, yan, elton],
        "AUXÍLIO DOENÇA": [eduardo, thalyson, joseHenrique, yan],
        "AUXÍLIO ACIDENTE": [joseHenrique, yan],
        "AUXÍLIO RECLUSÃO": [eduardo, thalyson, yan],
        "SALÁRIO MATERNIDADE": [eduardo, thalyson, joseHenrique, yan],
        "APOSENTADORIA POR IDADE URBANA": [eduardo, thalyson, joseHenrique, yan],
        "APOSENTADORIA POR IDADE RURAL": [eduardo, thalyson, joseHenrique, yan],
        "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO": [eduardo, thalyson, ana, italo],
        "APOSENTADORIA ESPECIAL": [eduardo, thalyson, ana, italo],
        "APOSENTADORIA POR INVALIDEZ": [eduardo, thalyson, joseHenrique, yan],
        "PAB": [eduardo, thalyson, joseHenrique, yan],
        "PENSÃO POR MORTE": [eduardo, thalyson, joseHenrique, yan],
        "REVISÃO RMI": [eduardo, thalyson, ana, italo],
        "ADICIONAL 25%": [thalyson, joseHenrique, yan],
        "APOSENTADORIA RPPS": [eduardo, ana, italo],
        "ANÁLISE": [ana, italo, eduardo, thalyson]
    },
    civ: {},
    trt: {}
}
const areas = {
    previdenciaria: "prev",
    civel: "civ",
    trabalhista: "trt",
}
let previousOption = null

function obterPrimeiroEUltimoDia(data) {
    const ano = data.getFullYear()
    const mes = data.getMonth()

    // Primeiro dia do mês
    const primeiroDia = new Date(ano, mes, 1)

    // Último dia do mês
    const ultimoDia = new Date(ano, mes + 1, 0)

    return { primeiroDia, ultimoDia }
}

function requererTarefasProtocolJuridico(data, area, tipoTarefa) {
    const colaboradores = demandas[area][tipoTarefa]
    const isTaskProtocol = true

    const { primeiroDia, ultimoDia } = obterPrimeiroEUltimoDia(data)

    return colaboradores.map(async colaborador => {
        return getTarefasColaboradores({ colaborador, dataDe: primeiroDia, dataAte: ultimoDia, isTaskProtocol })
    })
}

async function selectRespExecJuridico(area, data, tipoTarefa) {
    const isTaskProtocol = true
    const contactDiv = document.querySelector('#contactdiv')
    if (!contactDiv)
        createListaTarefas(isTaskProtocol, area.toUpperCase())
    else
        limparListaTarefas()

    const listaColaboradores = await Promise.all(requererTarefasProtocolJuridico(data, area, tipoTarefa))

    const responsavel = "KEVEN FARO DE CARVALHO"
    
    const executor = listaColaboradores.reduce((previous, currrent) => {
        if (previous.tarefas > currrent.tarefas) {
            return currrent
        }
        return previous
    }, listaColaboradores[0])

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

        setDataTarefa(prazoFatal, selectedOptions[0])

        updateOption(selectedOptions[0], prazoInterno)
        
        selectRespExecJuridico(area, prazoInterno, tipoTarefa)

        const btnGravar = document.querySelector("#btnGravar")

        btnGravar.addEventListener("click", async event => {
            event.preventDefault()
            btnGravar.disabled = true
            const form = document.querySelector("#fdt-form")

            const idCL = document.querySelector("#fdt-form > input[type=hidden]:nth-child(4)").value

            const descricaoTarefa = `Nova oportunidade: ${isEnvelope ? `ENVELOPE ${area}` : 'DEMORA INJUSTIFICADA'} - ${selectedOptions[0].dataset.original} - P.F. ${prazoFatal.toLocaleDateString()}`
            await createTarefa({ idCL, descricaoTarefa, dataParaFinalizacao: prazoCRM.toLocaleDateString() })

            form.submit()
        })
    })
}

function getOptionsSelectInput(area, isEnvelope) {
    switch(area) {
        case areas.previdenciaria:
            if (!isEnvelope) {
                return `<option data-original="LOAS" value="LOAS">LOAS</option>
                        <option data-original="APOSENTADORIA POR IDADE URBANA" value="APOSENTADORIA POR IDADE URBANA">APOSENTADORIA POR IDADE URBANA</option>
                        <option data-original="APOSENTADORIA POR IDADE RURAL" value="APOSENTADORIA POR IDADE RURAL">APOSENTADORIA POR IDADE RURAL</option>
                        <option data-original="APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO" value="APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO">APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO</option>
                        <option data-original="APOSENTADORIA ESPECIAL" value="APOSENTADORIA ESPECIAL">APOSENTADORIA ESPECIAL</option>
                        <option data-original="APOSENTADORIA POR INVALIDEZ" value="APOSENTADORIA POR INVALIDEZ">APOSENTADORIA POR INVALIDEZ</option>
                        <option data-original="AUXÍLIO DOENÇA" value="AUXÍLIO DOENÇA">AUXÍLIO DOENÇA</option>
                        <option data-original="SALÁRIO MATERNIDADE" value="SALÁRIO MATERNIDADE">SALÁRIO MATERNIDADE</option>
                        <option data-original="PENSÃO POR MORTE" value="PENSÃO POR MORTE">PENSÃO POR MORTE</option>
                        <option data-original="AUXÍLIO RECLUSÃO" value="AUXÍLIO RECLUSÃO">AUXÍLIO RECLUSÃO</option>
                        <option data-original="AUXÍLIO ACIDENTE" value="AUXÍLIO ACIDENTE">AUXÍLIO ACIDENTE</option>
                        <option data-original="PAB" value="PAB">PAB</option>
                        `;
            }
            return `
                    <option data-original="ANÁLISE" value="ANÁLISE">ANÁLISE</option>
                    <option data-original="APOSENTADORIA POR IDADE URBANA" value="APOSENTADORIA POR IDADE URBANA">APOSENTADORIA POR IDADE URBANA</option>
                    <option data-original="APOSENTADORIA POR IDADE RURAL" value="APOSENTADORIA POR IDADE RURAL">APOSENTADORIA POR IDADE RURAL</option>
                    <option data-original="APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO" value="APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO">APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO</option>
                    <option data-original="APOSENTADORIA ESPECIAL" value="APOSENTADORIA ESPECIAL">APOSENTADORIA ESPECIAL</option>
                    <option data-original="APOSENTADORIA POR INVALIDEZ" value="APOSENTADORIA POR INVALIDEZ">APOSENTADORIA POR INVALIDEZ</option>
                    <option data-original="APOSENTADORIA RPPS" value="APOSENTADORIA RPPS">APOSENTADORIA RPPS</option>
                    <option data-original="AUXÍLIO DOENÇA" value="AUXÍLIO DOENÇA">AUXÍLIO DOENÇA</option>
                    <option data-original="AUXÍLIO ACIDENTE" value="AUXÍLIO ACIDENTE">AUXÍLIO ACIDENTE</option>
                    <option data-original="AUXÍLIO RECLUSÃO" value="AUXÍLIO RECLUSÃO">AUXÍLIO RECLUSÃO</option>
                    <option data-original="LOAS" value="LOAS">LOAS</option>
                    <option data-original="SALÁRIO MATERNIDADE" value="SALÁRIO MATERNIDADE">SALÁRIO MATERNIDADE</option>
                    <option data-original="PAB" value="PAB">PAB</option>
                    <option data-original="PENSÃO POR MORTE" value="PENSÃO POR MORTE">PENSÃO POR MORTE</option>
                    <option data-original="REVISÃO RMI" value="REVISÃO RMI">REVISÃO RMI</option>
                    <option data-original="ADICIONAL 25%" value="ADICIONAL 25%">ADICIONAL 25%</option>`;
        case areas.civel: return '';
        case areas.trabalhista: return '';
        default: return;
    }
}

function createInputSelect({ isEnvelope, area, divDescription }) {
    
    const htmlDescriptionSelect =   `<select name="descricao" id="descricao" class="form-control selectpicker" data-live-search="true" data-parsley-id="19" tabindex="-98" required>
                                        <option value=""></option>
                                        ${ getOptionsSelectInput(area, isEnvelope) }
                                    </select>`
    
    divDescription.innerHTML = htmlDescriptionSelect

    addEventListenerToSelect(area, isEnvelope)
}

function createInputTextArea(divDescription) {
    const descriptionElement = document.querySelector("#descricao")

    if (descriptionElement.type === 'textarea') {
        return
    }

    const htmlDescriptionTextArea = `<textarea name="descricao" id="descricao" required="" maxlength="1000" class="form-control" data-parsley-id="19"></textarea>`

    divDescription.innerHTML = htmlDescriptionTextArea
}

function getDiaUtil(date) {
    const newDate = new Date(date)

    while((newDate.getDay() === 0) || (newDate.getDay() === 6) || isFeriado(newDate, parametros.tarefaContatar).isHoliday) {
        newDate.setDate(newDate.getDate() + 1)
    }

    return newDate
}

function calcularPrazoProtocoloProcesso(area, { isEnvelope, tipoTarefa }) {
    const tipoDemanda = isEnvelope ? "ENVELOPE" : tipoTarefa
    const acrescimo = isEnvelope ? 0 : 1
    const prazoJuridico = isEnvelope ? 0 : 7
    const prazoProtocolo = prazosProtocolosProcessos[area][tipoDemanda]
    
    const datePrazoFatal = new Date()
    datePrazoFatal.setDate(datePrazoFatal.getDate() + prazoProtocolo + prazoJuridico + acrescimo)
    const prazoFatal = getDiaUtil(datePrazoFatal)

    const datePrazoInterno = new Date()
    datePrazoInterno.setDate(datePrazoInterno.getDate() + (isEnvelope ? 0 : prazoProtocolo) + acrescimo)
    const prazoInterno = getDiaUtil(datePrazoInterno)

    const datePrazoCRM = isEnvelope ? new Date() : new Date(prazoInterno)
    datePrazoCRM.setDate(datePrazoCRM.getDate() + 1)
    const prazoCRM = getDiaUtil(datePrazoCRM)

    return { prazoInterno, prazoFatal, prazoCRM }
}

function automaticDistributionTasksJuricial() {
    if (!state.functions.cadastroTarefa.tarefasAvulsasJuridicoCRM) {
        return
    }
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

        return createInputTextArea(divDescription)
    })
}