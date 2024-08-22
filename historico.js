async function createHistorico() {
    const tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso)

    if ((!state.functions.cadastroTarefa.criarHistoricoINSSDigital || cliente.compromisso.tarefas.length >= 1) || !(tipoCompromissoNormalizado === 'EXIGENCIA INSS' || tipoCompromissoNormalizado.search('PERICIA') === 0)) {
        return
    }

    debugger

    const weekDay = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    const date = new Date()
    const [dia, mes, ano] = cliente.compromisso.prazoFatal.split("/")
    const dateForEvent = new Date(`${ano}-${mes}-${dia}T00:00:00`)
    const [ hours, minutes ] = date.toLocaleTimeString().split(':')
    const day = weekDay[dateForEvent.getDay()]

    const tipoCompromisso = tipoCompromissoNormalizado.search("PERICIA") === 0 ? "PERICIA" : tipoCompromissoNormalizado
    const tipos = {
        'EXIGENCIA INSS': {
            historico: `${cliente.requerimento.protocolo} - Exigência INSS Digital P.F ${cliente.compromisso.prazoFatal}.Tarefa criada para análise.`,
            tipo: '63'
        },
        'PERICIA': {
            historico: `${cliente.requerimento.protocolo} - ${cliente.compromisso.tipoCompromisso}\r\nData e Hora: ${cliente.compromisso.prazoFatal} (${day}) às ${cliente.compromisso.prazoFatal}\r\nLocal: ${cliente.compromisso.local}\r\nEndereço: ${cliente.compromisso.endereco}\r\nOrientar a levar o agendamento, relatórios médicos e documentos pertinentes a atividade rural / pescador (caso exerça).\r\nChegar com 30 minutos de antecedência.`,
            tipo: '20'
        }
    }

    const body = {
        org: '',
        idOP: '',
        idCL: cliente.cliente.id,
        idPR: '',
        hora: `${hours}:${minutes}`,
        data: date.toLocaleDateString(),
        depto: 'P',
        idTipoHistorico: tipos[tipoCompromisso].tipo,
        idProcesso: '',
        ocorrencia: tipos[tipoCompromisso].historico,
        incluirNaSequencia: '',
        btnGravar: 'Gravar informações'
    }

    const urlEncodedData = new URLSearchParams(body).toString();
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