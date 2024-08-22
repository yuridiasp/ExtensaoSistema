async function createTarefa({ idCL, idTipoTarefa = 77, dataParaFinalizacao, idResponsavel = 64, idExecutor = 64 }) {
    const url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/formularioScript.asp'
    const method = 'POST'
    const contentType = 'application/x-www-form-urlencoded'
    const body = {
        idPK: '',
        idCO: '',
        idPR: '',
        idCL,
        org: '',
        superior: '',
        idResponsavelAvisado: '',
        agendada: 'n',
        acaoColetiva: '',
        idTipoTarefa,
        pautaIdUsuarioResp: '',
        dataParaFinalizacaoAgendada: '',
        onde: '',
        horarioInicial: '',
        horarioFinal: '',
        dataParaFinalizacao,
        descricao: 'Cliente primeira vez.',
        idResponsavel,
        idExecutor,
        lembreteQuandoFinalizarPara: '',
        btnGravar: 'Gravar informações'
    }

    const response = await fetch(url, { body: new URLSearchParams(body).toString(), method, headers: new Headers({ "Content-Type": contentType }) })

    if (response.ok) {
        console.log("Tarefa criada com sucesso")
    } else {
        console.log("Erro ao tentar criar tarefa para o CRM")
    }
}