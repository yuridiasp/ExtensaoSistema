

onExtensionInstalled(setInitial)

function setInitial() {
    setInitialActive()
}

async function setInitialActive() {
    let active = await getActive()
    let autocomplete = await getAutoComplete()
    let financeiro = await getFinanceiro()

    if (active == null || active == undefined)
        await setActive(true)
    if (autocomplete == null || autocomplete == undefined)
        await setAutoComplete(true)
    if (financeiro == null || financeiro == undefined)
        await setFinanceiro(true)
}

