async function createHistorico() {

    if (!state.functions.cadastroTarefa.criarHistoricoINSSDigital || cliente.compromisso.tarefas.length >= 1) {
        return
    }

    debugger
    const tipos = {
        'EXIGENCIA INSS': {
            historico: `${cliente.requerimento.protocolo} - Exigência INSS Digital P.F ${cliente.compromisso.prazoFatal}.Tarefa criada para análise.`,
            tipo: '63'
        }
    }
    const date = new Date()
    const [ hours, minutes ] = date.toLocaleTimeString().split(':')
    const idCliente = cliente.cliente.id //'11580' - Leandro
    const hora = `${hours}:${minutes}`
    const data = date.toLocaleDateString()
    const idProcesso = ''
    const descricaoHistorico = tipos["EXIGENCIA INSS"].historico
    const btnGravar = 'Gravar informações'
    const idTipoHistorico = tipos["EXIGENCIA INSS"].tipo
    const depto = 'P'
    
    const historicoPayload = `org=&idOP=&idCL=${idCliente}&idPR=&hora=${hora}&data=${data}&depto=${depto}&idTipoHistorico=${idTipoHistorico}&idProcesso=${idProcesso}&ocorrencia=${descricaoHistorico}&incluirNaSequencia=&btnGravar=${btnGravar}`

    const urlEncodedData = new URLSearchParams(historicoPayload).toString();
    console.log(urlEncodedData)
    const parser = new DOMParser()

    const urlRequest = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientesHistorico/formularioScript.asp'

    return await fetch(urlRequest, {
            method: "POST",
            body: urlEncodedData,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
    }).then(function (response) {
        return response.blob()
    }).then(async (result) => parser.parseFromString(await result.text(),'text/html'))
}