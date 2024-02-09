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