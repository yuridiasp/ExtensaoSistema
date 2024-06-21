function padronizaStrings (string) {
    return removeAcentuacaoString(string).replaceAll(' ','').replaceAll('-','').toUpperCase()
}

function completarInputs () {
    const titleFile = document.querySelectorAll("#fdt-form > div.alert.alert-success.fs20.margemCima20"),
        filesName = [],
        buttonsList = [],
        divs = document.querySelectorAll("#fdt-form > div")
    
    for (let index = 0; index < divs.length; index++) {
        const isTitleFile = divs[index].classList.contains("alert-success")

        if (isTitleFile) {
            buttonsList.push(divs[index+1])
        }
    }

    titleFile.forEach(e => {
        const textArray = e.textContent.split('.')

        filesName.push(textArray[0].trim())
    })

    for (let index = 0; index < titleFile.length; index++) {
        const input = document.querySelector(`#descricao_${index+1}`),
            ul = buttonsList[index].children[0].children[1].children[1].children[1].children
        
            input.value = filesName[index]

        for (let i = 0; i < ul.length; i++) {
            const sFileName = padronizaStrings(filesName[index]),
                span = ul[i].children[0].children[0], sSpan = padronizaStrings(span.textContent)

            if (sSpan == sFileName) {
                span.click()
            }
        }
    }
}