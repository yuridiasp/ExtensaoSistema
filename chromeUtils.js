

function chromeRuntimeOnInstalledAddListener(listener) {
    chrome.runtime.onInstalled.addListener(listener)
}

function enviarResposta() {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            activate()
            sendResponse({validation: "Atualizado"})
        }
    )
}

function enviarMensagem () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: status}, function(response) {
            console.log(response.validation)
        })
    })
}

function onExtensionInstalled(listener) {
    chromeRuntimeOnInstalledAddListener(listener)
}

function getState() {
    return chromeStorageLocalGet('activeACFR')
}

function setState(stateValue) {
    return chromeStorageLocalSet({ activeACFR: stateValue })
}

function getCliente() {
    return chromeStorageLocalGet('clienteFR')
}

function setCliente(clienteValue) {
    return chromeStorageLocalSet({clienteFR: clienteValue})
}

function getFinanceiro() {
    return chromeStorageLocalGet('financeiro')
}

function setFinanceiro(financeiro) {
    return chromeStorageLocalSet({financeiro: financeiro})
}

function getAutoComplete() {
    return chromeStorageLocalGet('autoComplete')
}

function setAutoComplete(autoComplete) {
    return chromeStorageLocalSet({autoComplete: autoComplete})
}

function getDataIsDia() {
    return chromeStorageLocalGet('datePub')
}

function chromeStorageLocalGet(key) {
    return new Promise((resolve) => chrome.storage.local.get([key], (result) => {
        resolve(result[key])
    }))
}

function chromeStorageLocalSet(object) {
    return new Promise((resolve) => chrome.storage.local.set(object, resolve))
}