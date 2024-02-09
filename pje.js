function addEvento() {
    const buttons = document.querySelectorAll("a.btn-danger")
    buttons.forEach(button => {
        button.addEventListener("click", captureClickConfirmAndRegister, false)
    })
}

function removeEvento() {
    const buttons = document.querySelectorAll("a.danger")
    //window.confirm = state.originalConfirm
    buttons.forEach(button => {
        button.removeEventListener("click", captureClickConfirmAndRegister, false)
    })
}

function extrairNumeroProcesso (segundaColuna) {
    return segundaColuna.children[0].children[0].children[0].textContent.split(' ')[1].replaceAll('-','').replaceAll('.','')
}

function getPortal () {
    const url = window.location.toString()

    if (url.includes('pje1g.trf1'))
        return 'TRF1 - 1º GRAU'
    if (url.includes('pje2g.trf1'))
        return 'TRF1 - 2º GRAU'
    if (url.includes('pje1g.trf5'))
        return 'PJe2x - 1º GRAU'
    if (url.includes('pje2g.trf5'))
        return 'PJe2x - 2º GRAU'
    if (url.includes('pje.tjdft'))
        return 'TJDFT - 1º GRAU'
    if (url.includes('pje2i.tjdft'))
        return 'TJDFT - 2º GRAU'
    if (url.includes('pje.tjdft'))
        return 'TJBA - 1º GRAU'
    if (url.includes('pje.tjba'))
        return 'TJBA - 2º GRAU'
}

function extrairDadosIntimacao(primeiraColuna) {
    const nome = primeiraColuna.children[0].children[0].textContent
    const expediente = primeiraColuna.children[2].children[0].children[0].textContent
    const ciencia = new Date().toLocaleString()
    const portal = getPortal()
    return { nome, expediente, portal, ciencia }
}

function formataDadosIntimacao (element) {
    const intimacao = element.parentElement.parentElement.parentElement.parentElement.parentElement.children[1]
    const primeiraColuna = intimacao.children[0].children[0]
    const dadosIntimacao = extrairDadosIntimacao(primeiraColuna)
    const segundaColuna = intimacao.children[0].children[1]
    const processo = extrairNumeroProcesso(segundaColuna)
    return { processo, ...dadosIntimacao}
}

async function MarcarButton (event) {
    
    let { target } = event

    if (target.classList.value == 'fa fa-search')
        target = event.target.parentElement
    
    target.classList.remove("btn-danger")

    const objeto = formataDadosIntimacao(target)
    let report = await getReport()
    if (!report) {
        report = []
    }
    report.push(objeto)
    await setReport(report)
}

async function captureClickConfirmAndRegister(event = null) {
    if (event)
        await MarcarButton(event)
    /* let confirmResult
    window.confirm = (...args) => {
        confirmResult = state.originalConfirm(...args)
        
        
        return confirmResult;
    }
    if (confirmResult) {
        if (event)
            await MarcarButton(event)
    } */
}

async function activatePJEMarker() {
    
    /* if (state.active == "Desativado") {
        removeEvento()
        return
    } */

    const loader = document.querySelector("#_viewRoot\\:status\\.start")


    if (loader) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.type == "attributes" && mutation.attributeName == "style") {
                    let title = document.querySelector('#formExpedientes\\:Filtros > div > div.col-xs-8.col-md-8')
                    if (title != null) {
                        addEvento()
                    }
                }
            })
        })

        observer.observe(loader, {attributes: true})
    }
}