const btnActive = window.document.querySelector("#botaoAtiva")
const inputsCheck = document.querySelectorAll('input[type=checkbox]')
const tipoIntimacaoJudicial = document.querySelector('#tipoIntimacaoJudicial')
const tipoIntimacaoAdministrativa = document.querySelector('#tipoIntimacaoAdministrativa')
const googlemaps_APIKey = ""
const genReport = document.querySelector('#genReport')

async function clearReportSaved() {
    await setReport(null)
}

function setNamePDF() {
    const date = new Date()
    const dia = date.getDate(), mes = date.getMonth()+1, ano = date.getFullYear()
    return `PJE ${dia}${mes < 10 ? '0' + mes : mes}${ano}.pdf`
}

genReport.addEventListener('click', async () => {
    const report = await getReport()
    console.log(report);
    if (report) {
        PDFGen(report)
        //clearReportSaved()
    } else {
        alert('Não há registros de intimações.')
    }
})

let initialState, state = {
    active: undefined,
    functions: {
        todasPaginas: {
            tipoIntimacaoIsJudicial: null,
            digitarUsandoVoz: undefined,
            contadorTarefas: undefined
        },
        abaCadastrodeProcesso: {
            autoFormatNumProcesso: null,
            alteracaoNumeroProcesso: null
        },
        abaPesquisaProcesso: {
            autoFormatacaoNumProcessoPesquisa: null
        },
        abaCompromissosProcesso: {
            mostrarBotadeRolagem: null
        },
        cadastroCompromisso:{
            selecaodoTipodeCompromisso: null,
            mostrarBotoesAuxiliaresdeDias: null,
            AutoPreenchimentoPrazoInterno: null,
        },
        cadastroTarefa:{
            AutoPreenchimentoTarefasIntimacoes: null,
        },
        carregamentoArquivo:{
            seleçãoTipoArquivo: null,
            preenchimentoCamposArquivos: null,
        },
        preProcesso:{
            preenchimentoNomePasta: null,
        },
        supervisor: {
            painelVisualizacaoTarefasTimeADM: null,
            painelVisualizacaoTarefasTimeSAC: null,
            painelVisualizacaoTarefasTimeFINANCEIRO: null,
            painelVisualizacaoTarefasTimeINSS: null,
        },
        tjse: {
            botaoExportarAlvaras: null
        }
    }
}

function sendMessage(status) {
    enviarMensagem()
}

function updateCorBtn() {
    if (state.active) {
        btnActive.classList.remove("btn_inative")
        btnActive.classList.add("btn_active")
    }
    else {
        btnActive.classList.remove("btn_active")
        btnActive.classList.add("btn_inative")
    }
}

function loadSelectionFunction(functions) {

    const isJudicialIntimation = functions.todasPaginas.tipoIntimacaoIsJudicial
    
    if (!isJudicialIntimation) {
        tipoIntimacaoJudicial.checked = true
        tipoIntimacaoAdministrativa.checked = true
    }

    tipoIntimacaoJudicial.addEventListener('change', async () => {
        const { checked } = tipoIntimacaoJudicial
        state.functions.todasPaginas.tipoIntimacaoIsJudicial = checked
        await saveState(state)
    })

    inputsCheck.forEach(input => {
        const estado = functions[input.dataset.aba][input.dataset.nome]

        if (!estado)
            input.checked = false
        else
            input.checked = estado

        input.addEventListener('change', async event => {
            const { checked } = event.target
            state.functions[event.target.dataset.aba][event.target.dataset.nome] = checked
            await saveState(state)
        })
    })
}

function onBtnActive() {
    if (!state.active) {
        btnActive.value = "ON"
        state.active = true
    }
    else {
        btnActive.value = "OFF"
        state.active = false
    }
    saveState(state)
    setInitial()
    updateCorBtn()
}

function addListenerBtnActive() {
    btnActive.addEventListener("click", event => {
        event.stopPropagation()
        onBtnActive()
    })
}

function stateBtn() {
    if (state.active)
        btnActive.value = "ON"
    else
        btnActive.value = "OFF"
    loadSelectionFunction(state.functions)
    updateCorBtn()
    addListenerBtnActive()
}

async function saveState(state) {
    setState(state)
}

function update(status) {
    sendMessage(status)
    updateCorBtn(status)
}

async function getInitialState() {
    let result = await getState()

    if (!result) {
        result = state
    }

    if (result.active == undefined)
        result.active = true

    return result
};

(async function () {
    state = await getInitialState()
    initialState = { ...state }
    stateBtn()
    //await distanceMatrix()
})()
