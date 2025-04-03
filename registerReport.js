const dataProcessosRegisterReport = {
    creta: {
        buttonSelector: 'a[href^="javascript:doConsulta"]',
        processoSelector: 'a[href^="javascript:doConsulta"]',
        nomeSelector: 'td:nth-child(1)',
        expedienteSelector: 'td:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)',
        rowsSelector: 'body > table > tbody > tr:nth-child(3) > td > form > table.grid > tbody > tr',
        registers: (portalType) => onloadToApplyRegisterReport(() => addEventToRegisterReport(portalType)),
    },
    trf5: {
        buttonSelector: {
            'Intimações': 'a[id^="formExpedientesPendentesAdvogadoProcurador"]',
            'Intimações de RPV/PRC': 'a[id^="formExpedientesPendentesRpvAdvogadoProcurador"]',
            'Intimações de Pauta de Julgamento': 'a[id^="formPendentesEletronico"]'
        },
        processoSelector: {
            'Intimações': 'td:nth-child(3)',
            'Intimações de RPV/PRC': 'td:nth-child(4)',
            'Intimações de Pauta de Julgamento': 'td:nth-child(3)'
        },
        nomeSelector: {
            'Intimações': {
                polo_ativo: 'td:nth-child(9)',
                polo_passivo: 'td:nth-child(10)'
            },
            'Intimações de RPV/PRC': {
                polo_ativo: 'td:nth-child(8)',
                polo_passivo: null
            },
            'Intimações de Pauta de Julgamento': {
                polo_ativo: 'td:nth-child(10)',
                polo_passivo: 'td:nth-child(3)'
            }
        },
        expedienteSelector: {
            'Intimações': 'td:nth-child(8)',
            'Intimações de RPV/PRC': 'td:nth-child(9)',
            'Intimações de Pauta de Julgamento': 'td:nth-child(8)'
        },
        rowsSelector: {
            'Intimações': '#formExpedientesPendentesAdvogadoProcurador\\:expedientesPendentesAdvogadoProcuradorDataTable  > tbody > tr',
            'Intimações de RPV/PRC': '#formExpedientesPendentesRpvAdvogadoProcurador\\:expedientesPendentesRpvAdvogadoProcuradorDataTable > tbody > tr',
            'Intimações de Pauta de Julgamento': '#formPendentesEletronico\\:sessaoPautaProcessoTrfInimacoesList > tbody > tr'
        },
        registers: (portalType) => observerLoaderToApplyRegisterReport(() => addEventToRegisterReport(portalType)),
    },
    pje: {
        buttonSelector: 'a.btn-danger',
        processoSelector: 'a[title="Autos Digitais"]',
        nomeSelector: 'span[title="Destinatário"]',
        expedienteSelector: 'span[title="Data de criação do expediente"]',
        rowsSelector: '#formExpedientes\\:tbExpedientes\\:tb > tr',
        registers: (portalType) => observerLoaderToApplyRegisterReport(() => addEventToRegisterReport(portalType)),
    },
    pjeTRF1: {
        buttonSelector: 'a.btn-danger',
        processoSelector: 'a[title="Autos Digitais"]',
        nomeSelector: 'span[title="Destinatrio"]',
        expedienteSelector: 'span[title="Data de criação do expediente"]',
        rowsSelector: '#formExpedientes\\:tbExpedientes\\:tb > tr',
        registers: (portalType) => observerLoaderToApplyRegisterReport(() => addEventToRegisterReport(portalType)),
    },
}

function extrairNumeroProcesso(elementProcesso, portalType) {
    let textProcess = elementProcesso.innerText.trim()
    if (portalType === 'pje' || portalType === 'pjeTRF1') {
        textProcess = elementProcesso.innerText.trim().split(' ')[1]
    }
    return removeCaracteresProcesso(textProcess)
}

function getPortal() {
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
    if (url.includes('creta.jfse'))
        return 'CRETA - JFSE'
    if (url.includes('https://pje.jfse.jus.br/'))
        return 'TRF5/JFSE - 1º GRAU'
    if (url.includes('https://pje.trf5.jus.br/'))
        return 'TRF5/JFSE - 2º GRAU'
}

async function markSummonsButton({ target: button }) {
    button.classList.value === 'fa fa-search' ? button.parentElement.classList.remove("btn-danger") : button.classList.remove("btn-danger")
}

async function registerToExportSummons(report) {
    let reports = await getReport()
    if (!reports) {
        reports = []
    }
    reports.push(report)
    await setReport(reports)
}

async function captureClickConfirmAndRegister(event = null, portalType, report) {
    if (event) {
        if (portalType === 'pje' || portalType === 'pjeTRF1')
            await markSummonsButton(event)
        await registerToExportSummons(report)
    }
    /* let confirmResult
    window.confirm = (...args) => {
        confirmResult = state.originalConfirm(...args)
        
        
        return confirmResult;
    }
    if (confirmResult) {
        if (event)
            await markSummonsButton(event)
    } */
}

function getAbaAtiva() {
    const td = document.querySelector('td[class$="rich-tabhdr-cell-active"]')

    if (td)
        return td.innerText.trim()
    return null
}

function getButtonReport(row, portalType) {

    let selector = dataProcessosRegisterReport[portalType].buttonSelector

    const abaAtiva = getAbaAtiva()

    if (portalType === "trf5") {
        selector = dataProcessosRegisterReport.trf5[abaAtiva]
    }

    return row.querySelector(selector)
}

function getProcessReport(row, portalType) {

    let selector = dataProcessosRegisterReport[portalType].processoSelector

    const abaAtiva = getAbaAtiva()

    if (portalType === "trf5") {
        selector = dataProcessosRegisterReport.trf5[abaAtiva].processoSelector
    }
    
    return extrairNumeroProcesso(row.querySelector(selector), portalType)
}

function getNameReport(row, portalType) {

    const abaAtiva = getAbaAtiva()

    if (portalType === "trf5") {
        if (abaAtiva === 'Intimações de RPV/PRC') {
            return row.querySelector(dataProcessosRegisterReport.trf5[abaAtiva].nomeSelector.polo_ativo).innerText
        } else {
            return `${row.querySelector(dataProcessosRegisterReport.trf5[abaAtiva].nomeSelector.polo_ativo).innerText} - ${row.querySelector(dataProcessosRegisterReport.trf5[abaAtiva].nomeSelector.polo_passivo).innerText}`
        }
    } else if (portalType === "creta") {
        return row.querySelector(dataProcessosRegisterReport[portalType].nomeSelector).innerText.split("\n\n")[3].split('>>>')[0].replace('(','')
    }

    return row.querySelector(dataProcessosRegisterReport[portalType].nomeSelector).innerText
}

function getExpedienteReport(row, portalType) {

    let selector = dataProcessosRegisterReport[portalType].expedienteSelector

    const abaAtiva = getAbaAtiva()

    if (portalType === "trf5") {
        selector = dataProcessosRegisterReport.trf5[abaAtiva].expedienteSelector
    }

    return row.querySelector(selector).innerText
}

function getCurrentTime() {
    const date = new Date()

    return date.toLocaleString()
}

function addEventToRegisterReport(portalType) {

    let selector = dataProcessosRegisterReport[portalType].rowsSelector

    if (portalType === 'trf5') {
        const abaAtiva = getAbaAtiva()

        selector = dataProcessosRegisterReport[portalType][abaAtiva].rowsSelector
    }

    let rowsSummon = document.querySelectorAll(selector)

    if (portalType === 'creta') {
        rowsSummon = document.querySelector('iframe[name="principal"]').contentDocument.querySelector('iframe[name="frame_conteudo"]').contentDocument.querySelectorAll(selector)
    }
    
    if (rowsSummon.length) {
        rowsSummon.forEach(row => {
            
            const buttonAccept = getButtonReport(row, portalType)

            if (buttonAccept) {
                const report = {
                    processo: getProcessReport(row, portalType),
                    nome: getNameReport(row, portalType),
                    expediente: getExpedienteReport(row, portalType),
                    portal: getPortal(),
                    ciencia: getCurrentTime()
                }
                if (buttonAccept)
                    buttonAccept.addEventListener("click", event => captureClickConfirmAndRegister(event, portalType, report), false)
            }
            
        })
    }
}

function removeEventSummons() {
    const buttons = document.querySelectorAll("a.danger")
    //window.confirm = state.originalConfirm
    buttons.forEach(button => {
        button.removeEventListener("click", captureClickConfirmAndRegister, false)
    })
}

function onloadToApplyRegisterReport(functionEventPJE) {

    const iframePrincipal = document.querySelector('iframe[name="principal"]')

    iframePrincipal.onload = () => {

        const iframeConteudo = iframePrincipal.contentDocument.querySelector('iframe[name="frame_conteudo"]')
        
        if (iframeConteudo) {
            iframeConteudo.onload = () => {
                functionEventPJE()
            }
        }
    }
}

async function observerLoaderToApplyRegisterReport(functionEventPJE) {
    /* if (state.active == "Desativado") {
        removeEventSummons()
        return
    } */
   
    const loader = document.querySelector("#_viewRoot\\:status\\.start")
    
    if (loader) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.type == "attributes" && mutation.attributeName == "style" && mutation.target.style.display === "none") {
                    const title = document.querySelector('#formExpedientes\\:Filtros > div > div.col-xs-8.col-md-8')
                    const abaAtiva = getAbaAtiva()
                    if (title || abaAtiva) {
                        functionEventPJE()
                    }
                }
            })
        })

        observer.observe(loader, {attributes: true})
    }
}

async function registerReportSummons(portalType) {

    dataProcessosRegisterReport[portalType].registers(portalType)
}

async function activateReportSummons({ isTRF1, isCRETA, isTRF5 }) {
    
    const getPortalType = () => {
        if (isCRETA) {
            onloadToApplyRegisterReport()
            return 'creta'
        }
        if (isTRF5)
            return 'trf5'
        if (isTRF1)
            return 'pjeTRF1'
        return 'pje'
    }

    const portalType = getPortalType()

    registerReportSummons(portalType)
}