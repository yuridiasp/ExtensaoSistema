const btnActive = window.document.querySelector("#botaoAtiva")
const googlemaps_APIKey = ""

let initialState, state = {
    active: null
}

function sendMessage(status) {
    enviarMensagem()
}

const cidades = [
    "Amparo de São Francisco",
    "Aquidabã",
    "Aracaju",
    "Arauá",
    "Areia Branca",
    "Barra dos Coqueiros",
    "Boquim",
    "Brejo Grande",
    "Campo do Brito",
    "Canhoba",
    "Canindé de São Francisco",
    "Capela",
    "Carira",
    "Carmópolis",
    "Cedro de São João",
    "Cristinápolis",
    "Cumbe",
    "Divina Pastora",
    "Estância",
    "Feira Nova",
    "Frei Paulo",
    "Gararu",
    "General Maynard",
    "Graccho Cardoso",
    "Ilha das Flores",
    "Indiaroba",
    "Itabaiana",
    "Itabaianinha",
    "Itabi",
    "Itaporanga d'Ajuda",
    "Japaratuba",
    "Japoatã",
    "Lagarto",
    "Laranjeiras",
    "Macambira",
    "Malhada dos Bois",
    "Malhador",
    "Maruim",
    "Moita Bonita",
    "Monte Alegre de Sergipe",
    "Muribeca",
    "Neópolis",
    "Nossa Senhora Aparecida",
    "Nossa Senhora da Glória",
    "Nossa Senhora das Dores",
    "Nossa Senhora de Lourdes",
    "Nossa Senhora do Socorro",
    "Pacatuba",
    "Pedra Mole",
    "Pedrinhas",
    "Pinhão",
    "Pirambu",
    "Poço Redondo",
    "Poço Verde",
    "Porto da Folha",
    "Propriá",
    "Riachão do Dantas",
    "Riachuelo",
    "Ribeirópolis",
    "Rosário do Catete",
    "Salgado",
    "Santa Luzia do Itanhy",
    "Santa Rosa de Lima",
    "Santana do São Francisco",
    "Santo Amaro das Brotas",
    "São Cristóvão",
    "São Domingos",
    "São Francisco",
    "São Miguel do Aleixo",
    "Simão Dias",
    "Siriri",
    "Telha",
    "Tobias Barreto",
    "Tomar do Geru",
    "Umbaúba"
]

async function calcularDistancia (destino, origem) {

    return new Promise(
        (resolve, reject) => {

            let httpRequest
            makeRequest(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destino}&origins=${origem}&key=${googlemaps_APIKey}`)
            
            function makeRequest(url) {
                if (window.XMLHttpRequest) {
                    httpRequest = new XMLHttpRequest()
                } else
                    if (window.ActiveXObject) {
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
                httpRequest.onreadystatechange = function() {
                    // readyState = 4   - referente a request concluida
                    // status     = 200 - referente ao status code http 'OK'
                    if (this.readyState == 4 && this.status == 200) {
                    // responsável por coletar a resposta. 
                    let response  = this.responseText
                    // preenchimento do resultado no HTML
                    resolve(JSON.parse(response))
                    }
    
                    // Responsável por tratar o retorno que não for bem sucedido
                    if (this.readyState == 4 && this.status !== 200){
                        console.log('Data not found!')  
                    }
                }
                httpRequest.open('GET', url, true)
                httpRequest.send()
            }
        }
    )
}

async function sendRequest (destino,origem) {
    try {
        return calcularDistancia(destino,origem)
    }
    catch {
        console.log(error.message)
    }
}

async function distanceMatrix() {
    let distancia_aracaju = []
    let cidade
    cidades.forEach(async e => {
        cidade = await sendRequest(e.replaceAll(' ','%20')+ '%2C' +'SE',"Alagoinhas"+ '%2C' +'BA')
        distancia_aracaju.push(
            {
                Destino: e,
                Resposta: cidade,
            }
        )
    })
    console.log(distancia_aracaju)
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
    //await distanceMatrix()
})()
