onExtensionInstalled(setInitial)

function setInitial() {
    setInitialState()
}

async function setInitialState() {
    const promises = []
    let savedState = await getState()
    let autocomplete = await getAutoComplete()
    let financeiro = await getFinanceiro()
    let contagemTarefas = await getContagemTarefas()

    if (!savedState)
        promises.push(setState(state))
    if (!autocomplete)
        promises.push(setAutoComplete(true))
    if (!financeiro)
        promises.push(setFinanceiro(true))
    if (!contagemTarefas) {
        promises.push(setContagemTarefas(null, null, null))
    }

    await Promise.all(promises)
}