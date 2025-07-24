async function createHistorico() {
    const tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso)

    if ((!state.functions.cadastroTarefa.criarHistoricoINSSDigital || cliente.compromisso.tarefas.length >= 1) || !(tipoCompromissoNormalizado === 'EXIGENCIA INSS' || tipoCompromissoNormalizado.search('PERICIA') === 0)) {
        return
    }

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
            historico: `${cliente.requerimento.protocolo} - ${cliente.compromisso.tipoCompromisso}\r\nData e Hora: ${cliente.compromisso.prazoFatal} (${day}) às ${cliente.compromisso.horario}\r\nLocal: ${cliente.compromisso.local}\r\nEndereço: ${cliente.compromisso.endereco}\r\nOrientar a levar o agendamento, relatórios médicos e documentos pertinentes a atividade rural / pescador (caso exerça).\r\nChegar com 30 minutos de antecedência.`,
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

    const urlEncodedData = new URLSearchParams(body).toString()

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

function completeDescricaoHistorico() {
    if(!state.functions.abaRegistroHistorico.historicoRegistroIntimacao) {
        return
    }

    const textArea = document.querySelector("#ocorrencia")
    const selectTipoHistorico = document.querySelector("#idTipoHistorico")

    const createSelectSubtipo = () => {
        const selectTipoHistoricoContainer = document.querySelector("#fdt-form > div:nth-child(10)")
        const div = document.createElement('div')
        div.classList.add('row')
        div.style.display = 'none'

        div.innerHTML = `<div class="form-group col-sm-6">
								<label for="idSubTipoHistorico">Subtipo:</label>
                                <select id="idSubTipoHistorico" name="idSubTipoHistorico" class="btn-group form-control">
                                    <option></option>
                                </select>
							</div>
							<div class="clearfix"></div>
						</div>`

        selectTipoHistoricoContainer.after(div)

        const newSelect = document.querySelector('#idSubTipoHistorico')
        newSelect.addEventListener('change', () => {
            textArea.innerHTML = tiposHistorico[selectTipoHistorico.value].subtipo[newSelect.value]
        })

        return [newSelect, div]
    }

    const [subOption, container] = createSelectSubtipo()

    const resetSelectSubtipo = () => {
        container.style.display = 'none'
        subOption.innerHTML = '<option></option>'
    }

    const showSelectSubtipo = () => {
        container.style.display = 'block'
    }

    const addOptionsToSelect = (select, options) => {
        Object.keys(options).forEach((option, index) => {
            const newOption = document.createElement('option')
            newOption.value = option
            newOption.innerHTML = option
            select.append(newOption)
        })
    }

    const tiposHistorico = {
        104: {
            tipo: 'CRM (Acompanhamento)',
            subtipo: {
                'Aguardando o cliente passar pelo atendimento': 'Acompanhamento realizado (Aguardando o cliente passar pelo atendimento)',
                'Aguardando a remarcação do atendimento': 'Acompanhamento realizado (Aguardando a remarcação do atendimento)',
                'Aguardando conclusão e ciência do cálculo': 'Acompanhamento realizado (Aguardando conclusão e ciência do cálculo)',
                'Aguardando resolução das pendências referente ao caso': 'Acompanhamento realizado (Aguardando resolução das pendências referente ao caso XXX)',
                'Aguardando ajuizamento do caso': 'Acompanhamento realizado (Aguardando ajuizamento do caso XXX)',
            }
        },
        127: {
            tipo: 'CRM (Avanço de Etapa)',
            texto: 'Oportunidade avançada da etapa XXX para a etapa YYY.'
        },
        102: {
            tipo:'CRM (Criação de Oportunidade)',
            texto: 'Oportunidade registrada no CRM (Possível caso de XXX).'
        },
        110: {
            tipo: 'CRM (Ganho de Oportunidade)',
            texto: 'Tendo em vista o término do processo e não existir honorários pendentes de quitação, registro o ganho da oportunidade no CRM.'
        },
        88: {
            tipo: 'CRM (Intervenção)',
            subtipo: {
                'Sem tarefa para remarcação de atendimento': 'Ao acompanhar a oportunidade, foi constatado que não foi realizado o atendimento; portanto, criei uma tarefa para proceder com a remarcação.',
                'Sem tarefa para ciência dos documentos anexados': 'Ao acompanhar a oportunidade, observei que não foi criada tarefa para ciência dos documentos anexados ao cadastro; encaminhei ao setor responsável para as devidas providências.',
                'Sem tarefa ou envelope para solicitação de pendência': 'Ao acompanhar a oportunidade, constatei que não foi aberto envelope ou criada tarefa para solicitação das pendências; dito isso, encaminho ao setor ADM para as providências. ',
                'Cadastro em nome de familiar/ amigo': 'Ao acompanhar a oportunidade, constatei que o cadastro estava vinculado ao nome de XXX. Em decorrência disso, atualizei os dados no CRM para refletir o nome correto do cliente e anexei as informações pertinentes à sua ficha no sistema Korbil.',
                'Demora injustificada': 'Ao acompanhar a oportunidade, constatei que o requerimento XXX foi protocolado em [data], sem decisão até o momento. Diante disso, encaminho tarefa ao setor responsável para análise da viabilidade de ação judicial por demora injustificada.',
                'Envelope estagnado na análise jurídica': 'Ao acompanhar a oportunidade, constatei que o caso do cliente encontra-se estagnado na análise jurídica há mais de 30 dias. Diante disso, encaminho tarefa ao setor responsável para análise da situação e providências.',
                'Solicitação do regular andamento': 'Ao acompanhar a oportunidade no CRM, constatei que o processo XXX encontra-se sem movimentação desde [data]. Diante disso, crio tarefa para o setor XXX avaliar a necessidade de peticionar visando o regular andamento do processo.',
                'Sem tarefa para registro de nova oportunidade': 'Ao analisar o caso do cliente, constatei que não havia sido criada tarefa para registrar nova oportunidade no CRM. Em seguida, criei a oportunidade no funil XXX, na etapa XXX.',
                'Sem parecer do advogado quanto ao atendimento realizado': 'Ao verificar a oportunidade no CRM, constatei a ausência de informações sobre o atendimento. Diante disso, criei uma tarefa para que o advogado responsável registre um parecer no histórico, com orientações sobre os próximos passos a serem seguidos para a continuidade do caso.',
                'Tarefa finalizada sem pendência sanada': 'Ao acompanhar a oportunidade no CRM, constatei que a tarefa para solicitação da pendência foi concluída sem resolução; por isso, criei nova tarefa para continuidade da solicitação pendente.',
            }
        },
        105: {
            tipo: 'CRM (Perda de Oportunidade)',
            texto: 'Registro a perda da oportunidade no CRM tendo em vista que XXX.'
        },
        126: {
            tipo: 'CRM (Transferência de Funil)',
            texto: 'Oportunidade transferida do funil XXX para o funil YYY. '
        },
        124: {
            tipo: 'Registro de Intimação',
            texto: `Registrado compromisso de intimação conforme solicitação:\nNúmero do Processo: [Número do Processo]\nDescrição da Intimação: [Descrição resumida e objetiva da intimação]\nNome do Solicitante: [Nome e segundo nome do colaborador que solicitou]\nMeio de Comunicação: [Mensagem via Contact Board, Grupo Geral no Whatsapp, Tarefa, etc.]\nData da Solicitação: [Data da solicitação]`
        }
    }

    selectTipoHistorico.addEventListener("change", () => {
        resetSelectSubtipo()
        if (tiposHistorico[selectTipoHistorico.value]) {
            textArea.innerHTML = ''
            if (tiposHistorico[selectTipoHistorico.value].subtipo) {
                showSelectSubtipo()
                addOptionsToSelect(subOption, tiposHistorico[selectTipoHistorico.value].subtipo)
            } else {
                textArea.innerHTML = tiposHistorico[selectTipoHistorico.value].texto
            }
        }
    })
}