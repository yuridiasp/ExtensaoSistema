let target = null
let ouvindo = false
const keyAtivaction = 119
const recognition = createRecognition()

function createRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = SpeechRecognition !== undefined ? new SpeechRecognition : null

    if (!recognition) {
        console.log("Não foi encontrado Speech Recognition")
        return null
    }

    recognition.lang = "pt_BR"

    recognition.onstart = () => {
        ouvindo = true
    }

    recognition.onend = () => {
        ouvindo = false
    }

    recognition.onerror = e => {
        console.log('Erro: ', e)
    }

    recognition.onresult = e => {
        target.innerHTML = e.results[0][0].transcript
    }

    return recognition
}

function keyEvent(event) {
    let key = event.keyCode || event.which;
    target = event.target
    
    if (key === keyAtivaction && !ouvindo) {
        ouvindo = true
        recognition.start()
    }

}
  
function metaKeyUp (event) {
    let key = event.keyCode || event.which;
    
    target = event.target
    
    if (key === keyAtivaction && ouvindo) {
        ouvindo = false
        recognition.stop()
    }
}

function digitacaoPorVoz() {    
    if (!state.functions.todasPaginas.digitarUsandoVoz) {
        return
    }

    addEventListener('keydown', event => {
        if (!recognition) {
            return
        }
        keyEvent(event)
    })

    addEventListener('keyup', event => {
        if (!recognition) {
            return
        }
        metaKeyUp(event)
    })
}