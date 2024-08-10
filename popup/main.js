const btnActive = window.document.querySelector("#botaoAtiva")
const inputsCheck = document.querySelectorAll('input[type=checkbox]')
const radiosTipoIntimacao = document.querySelectorAll('input[type=radio]')
const googlemaps_APIKey = ""
const genReport = document.querySelector('#genReport')

let initialState

async function clearReportSaved() {
    await setReport(null)
}

function PDFGen (array) {
    const nome = setNamePDF()
    const content = [[ 'Processo', 'Nome', 'Expediente', 'Registro da Ciência', 'Portal' ]]

    array.forEach(({ processo, expediente, ciencia, portal }) => {
        content.push([ processo, expediente, ciencia, portal ])
    })

    const docDefinition = {
        content: [
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    body: content
                }
            }
        ]
    }

    pdfMake.createPdf(docDefinition).download(nome)
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
        tipoIntimacaoJudicial.checked = false
        tipoIntimacaoAdministrativa.checked = true
    }

    radiosTipoIntimacao.forEach(radio => {
        radio.addEventListener('input', async () => {
            const { checked, value } = radio
            if (value === "judicial"  && checked) {
                state.functions.todasPaginas.tipoIntimacaoIsJudicial = true
            }

            if (value === "administrativa" && checked) {
                state.functions.todasPaginas.tipoIntimacaoIsJudicial = false
            }

            await saveState(state)
        })
    })

    inputsCheck.forEach(async input => {
        try {
            const estado = functions[input.dataset.aba][input.dataset.nome]
    
            if (!estado)
                input.checked = false
            else
                input.checked = estado
        } catch (error) {
            console.log(error)
            input.checked = false
            functions[input.dataset.aba] = {}
            functions[input.dataset.aba][input.dataset.nome] = false
            await saveState(state)
        }
        
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
