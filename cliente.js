function getIdClienteCreateClienteRequest(url) {
    const id = url.split('idPK=')[1]
    console.log(url, id)
    return id
}

async function createCliente(body) {
    try {
        const url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/formularioScript.asp'
        const method = 'POST'
        const contentType = 'application/x-www-form-urlencoded'
        const response = await fetch(url, { body: new URLSearchParams(body).toString(), method, headers: new Headers({ "Content-Type": contentType }) })
        
        if (response.ok) {
            console.log('Sucesso:', response.statusText)
            return getIdClienteCreateClienteRequest(response.url)
        } else {
            console.error('Erro na requisição:', response.statusText)
            return null
        }
    } catch (error) {
        console.error('Erro:', error)
        return null
    }
}