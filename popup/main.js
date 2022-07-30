const btnActive = window.document.querySelector("#botaoAtiva")
const googlemaps_APIKey = ""

let initialState, state = {
    active: null
}

function sendMessage(status) {
    enviarMensagem()
}

/* function calcularDistancia (destino, origem) {
    let httpRequest
    makeRequest(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destino}&origins=${origem}&key=${googlemaps_APIKey}`)
    
    function makeRequest(url) {
      if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
            try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP")
            }
            catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) {}
            }
        }
    
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance')
            return false
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url, true)
        httpRequest.send()
        }
    
        function alertContents() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                console.dir(httpRequest.responseText)
            } else {
                console.log('There was a problem with the request.')
            }
        }
    }
} */

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

function onBtnActive() {
    if (!state.active) {
        btnActive.value = "ATIVADO"
        state.active = true
    }
    else {
        btnActive.value = "DESATIVADO"
        state.active = false
    }
    saveState(state.active)
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
        btnActive.value = "ATIVADO"
    else
        btnActive.value = "DESATIVADO"
    updateCorBtn()
    addListenerBtnActive()
}

async function saveState(state) {
    setActive(state)
}

function update(status) {
    sendMessage(status)
    updateCorBtn(status)
}

async function getInitialState() {
    let value = await getActive()
    if (value == undefined)
        value = true
    return {
        active: value
    }
}

(async function () {
    state = await getInitialState()
    initialState = { ...state }
    stateBtn()
    /* cidade_destino = "Aracaju"
    estado_destino = "SE"
    cidade_origem = "Estancia"
    estado_origem = "SE"
    calcularDistancia(cidade_destino+estado_destino,cidade_origem+estado_origem) */
})()
