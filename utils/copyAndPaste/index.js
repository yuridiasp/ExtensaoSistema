function copyAndPaste(text) {
    const tempInput = document.createElement("p")
    tempInput.innerHTML = text
    const body = document.querySelector("body") ?? document.querySelector("html").appendChild(document.createElement('body'))
    
    const stylizer = () => {
        tempInput.style.position = 'fixed'
        tempInput.style.opacity = 0
        tempInput.style.textAlign = "center"
        document.querySelector("*").style.setProperty("font-family",  "Times New Roman, serif", "important")
        tempInput.style.fontSize = "16px"
        tempInput.style.fontFamily = "Times New Roman, serif"
        tempInput.style.color = "red"
        tempInput.style.background = "none"
        tempInput.style.fontWeight = "normal"
        tempInput.style.border = "none"
    }

    const listenerBody = async (records, observer) => {
        
        /* stylizer() */

        let range = document.createRange()

        range.selectNodeContents(tempInput)
        
        let selection = window.getSelection()
        selection.addRange(range)
        
        document.execCommand('copy')
        
        selection.removeAllRanges()

        body.removeChild(tempInput)

        observer.disconnect()
    }

    const observer = new MutationObserver(listenerBody)
    observer.observe(body, { childList: true })

    body.appendChild(tempInput)
}