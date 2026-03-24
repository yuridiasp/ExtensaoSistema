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
            tipo: '128'
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

    const urlRequest = `${basePathKorbil}/adv/clientesHistorico/formularioScript.asp`

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

function initHistoricoHandlers() {
    const selectTipoHistorico = document.querySelector("#idTipoHistorico")
    if (!selectTipoHistorico) return

    const descricaoHandler = setupDescricaoHistorico()
    const taskHandler = setupTaskFromTypeHistorico()

    selectTipoHistorico.addEventListener("change", () => {
        descricaoHandler?.(selectTipoHistorico.value)
        taskHandler?.(selectTipoHistorico.value)
    })
}

function setupDescricaoHistorico() {
    if(!state.functions.abaRegistroHistorico.historicoRegistroIntimacao) {
        return
    }

    const textArea = document.querySelector("#ocorrencia")
    const selectTipoHistorico = document.querySelector("#idTipoHistorico")

    const createSelectSubtipo = () => {
        const selectTipoHistoricoContainer = document.querySelector("#fdt-form > div:nth-child(8)")
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
            textArea.innerHTML = newSelect.value
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
        Object.keys(options).forEach((group) => {

            const optgroup = document.createElement('optgroup')
            optgroup.label = group
            select.append(optgroup)

            Object.keys(options[group]).forEach(option => {
                const newOption = document.createElement('option')
                newOption.value = options[group][option]
                newOption.innerHTML = option
                select.append(newOption)
            })
        })
    }

    const tiposHistorico = {
        104: {
            tipo: 'CRM (Acompanhamento)',
            subtipo: {
                'Geral': {
                    'Aguardando o cliente passar pelo atendimento': 'Acompanhamento realizado (Aguardando o cliente passar pelo atendimento)',
                    'Aguardando a remarcação do atendimento': 'Acompanhamento realizado (Aguardando a remarcação do atendimento)',
                    'Aguardando conclusão e ciência do cálculo': 'Acompanhamento realizado (Aguardando conclusão e ciência do cálculo)',
                    'Aguardando resolução das pendências referente ao caso': 'Acompanhamento realizado (Aguardando resolução das pendências referente ao caso XXX)',
                    'Aguardando ajuizamento do caso': 'Acompanhamento realizado (Aguardando ajuizamento do caso XXX)',
                },
                'Judicial': {
                    'Acompanhamento realizado': 'Acompanhamento realizado. No momento, o processo judicial encontra-se em andamento, aguardando XXXXXXX.',
                },
                'Administrativo': {
                    'Acompanhamento realizado': 'Acompanhamento realizado. No momento, aguardando a resolução do requerimento administrativo nº XXXXX.',
                    'Oportunidade clonada do funil': 'Oportunidade clonada do funil INSS DIGITAL para o funil PREVIDENCIÁRIO em razão da entrada por D.I.',
                    'Oportunidade transferida do funil': 'Oportunidade transferida do funil INSS DIGITAL para o funil PREVIDENCIÁRIO em razão do indeferimento. ',
                },
            }
        },
        127: {
            tipo: 'CRM (Avanço de Etapa)',
            texto: 'Oportunidade avançada da etapa XXX para a etapa YYY.',
        },
        102: {
            tipo:'CRM (Criação de Oportunidade)',
            texto: 'Oportunidade registrada no CRM (Possível caso de XXX).',
        },
        110: {
            tipo: 'CRM (Ganho de Oportunidade)',
            texto: 'Tendo em vista o término do processo e não existir honorários pendentes de quitação, registro o ganho da oportunidade no CRM.',
        },
        88: {
            tipo: 'CRM (Intervenção)',
            subtipo: {
                'Geral': {
                    'Sem tarefa para remarcação de atendimento': 'Ao acompanhar a oportunidade, foi constatado que não foi realizado o atendimento; portanto, criei uma tarefa para proceder com a remarcação.',
                    'Sem tarefa para ciência dos documentos anexados': 'Ao acompanhar a oportunidade, observei que não foi criada tarefa para ciência dos documentos anexados ao cadastro; encaminhei ao setor responsável para as devidas providências.',
                    'Sem tarefa ou envelope para solicitação de pendência': 'Ao acompanhar a oportunidade, constatei que não foi aberto envelope ou criada tarefa para solicitação das pendências; dito isso, encaminho ao setor ADM para as providências. ',
                    'Cadastro em nome de familiar/ amigo': 'Ao acompanhar a oportunidade, constatei que o cadastro estava vinculado ao nome de XXX. Em decorrência disso, atualizei os dados no CRM para refletir o nome correto do cliente e anexei as informações pertinentes à sua ficha no sistema Korbil.',
                    'Demora injustificada': 'Ao acompanhar a oportunidade, constatei que o requerimento XXX foi protocolado em [data], sem decisão até o momento. Diante disso, encaminho tarefa ao setor responsável para análise da viabilidade de ação judicial por demora injustificada.',
                    'Envelope estagnado na análise jurídica': 'Ao acompanhar a oportunidade, constatei que o caso do cliente encontra-se estagnado na análise jurídica há mais de 30 dias. Diante disso, encaminho tarefa ao setor responsável para análise da situação e providências.',
                    'Solicitação do regular andamento': 'Ao acompanhar a oportunidade no CRM, constatei que o processo XXX encontra-se sem movimentação desde [data]. Diante disso, crio tarefa para o setor XXX avaliar a necessidade de peticionar visando o regular andamento do processo.',
                    'Sem tarefa para registro de nova oportunidade': 'Ao analisar o caso, identifiquei que não havia nenhuma tarefa criada para o registro de uma nova oportunidade no CRM. Diante disso, criei a oportunidade no funil COMERCIAL e, em seguida, realizei a transferência para o funil XXXXX.',
                    'Sem parecer do advogado quanto ao atendimento realizado': 'Ao verificar a oportunidade no CRM, constatei a ausência de informações sobre o atendimento. Diante disso, criei uma tarefa para que o advogado responsável registre um parecer no histórico, com orientações sobre os próximos passos a serem seguidos para a continuidade do caso.',
                    'Tarefa finalizada sem pendência sanada': 'Ao acompanhar a oportunidade no CRM, constatei que a tarefa para solicitação da pendência foi concluída sem resolução; por isso, criei nova tarefa para continuidade da solicitação pendente.',
                },
            }
        },
        105: {
            tipo: 'CRM (Perda de Oportunidade)',
            texto: 'Registro a perda da oportunidade no CRM tendo em vista que XXX.',
        },
        126: {
            tipo: 'CRM (Transferência de Funil)',
            texto: 'Oportunidade transferida do funil COMERCIAL para o funil YYY. ',
        },
        124: {
            tipo: 'Registro de Intimação',
            texto: `Registrado compromisso de intimação conforme solicitação:\nNúmero do Processo: [Número do Processo]\nDescrição da Intimação: [Descrição resumida e objetiva da intimação]\nNome do Solicitante: [Nome e segundo nome do colaborador que solicitou]\nMeio de Comunicação: [Mensagem via Contact Board, Grupo Geral no Whatsapp, Tarefa, etc.]\nData da Solicitação: [Data da solicitação]`,
        },
        70: {
            tipo: 'Sentença Procedente',
            subtipo: {
                'Tipo de Atendimento': {
                    'Presencial': 'O juízo de primeira instância proferiu sentença de procedência. Necessário marcar atendimento presencial para dar ciência ao cliente.',
                    'Virtual': 'O juízo de primeira instância proferiu sentença de procedência. Necessário marcar atendimento virtual para dar ciência ao cliente.',
                }
            }
        },
        71: {
            tipo: 'Sentença improcedente',
            subtipo: {
                'Tipo de Atendimento': {
                    'Presencial': 'O juízo de primeira instância proferiu sentença de improcedência. Necessário marcar atendimento presencial para dar ciência ao cliente.',
                    'Virtual': 'O juízo de primeira instância proferiu sentença de improcedência. Necessário marcar atendimento virtual para dar ciência ao cliente.',
                }
            }
        },
        33: {
            tipo: 'Acórdão',
            subtipo: {
                'Decisão positiva': {
                    'Atendimento Presencial': 'A decisão da TRSE foi positiva. Necessário marcar atendimento presencial para dar ciência ao cliente.',
                    'Atendimento Virtual': 'A decisão da TRSE foi positiva. Necessário marcar atendimento virtual para dar ciência ao cliente.',
                },
                'Decisão negativa': {
                    'Atendimento Presencial': 'A decisão da TRSE foi negativa. Necessário marcar atendimento presencial para dar ciência ao cliente.',
                    'Atendimento Virtual': 'A decisão da TRSE foi negativa. Necessário marcar atendimento virtual para dar ciência ao cliente.',
                }
            }
        },
        3: {
            tipo: 'Atendimento Interno',
            texto: `AÇÃO: XX.\n\nCASO: XXX.\n\nDocumentação solicitada:\n•	RG e CPF do requerente\n•	Comprovante de residência atualizado\n•	Senha do MEU INSS\n•	Carteira de trabalho/CNIS/Carnês\n•	Laudo médico atualizado – relatórios, receitas, exames... etc.\n•	Cadastro Único atualizado\n•	Documentos de identificação e CPF dos membros do grupo familiar\n•	Comprovantes de gastos com medicamentos, tratamentos, etc.\n•	Certidão de casamento\n•	Declaração de imposto de renda\n•	Comprovantes de endereço em comum\n•	Documentos da funerária\n•	Documentos do hospital\n•	Registros fotográficos\n•	Certidão de óbito\n•	RG e CPF do falecido\n\nPara segurado especial: em nome do cliente (preferencialmente):\n•	Certidão de nascimento de filhos com profissão “lavrador”\n•	Certidão de casamento com profissão “lavrador”\n•	Notas fiscais de venda de produtos rurais\n•	Bloco de produtor rural\n•	Contratos de arrendamento/parceria/meação\n•	Declarações de sindicatos ou associações rurais\n•	Declaração de assentamento do INCRA\n•	Declaração de exercício de pesca artesanal (se aplicável)\n•	Cadastro do PRONAF\n•	Comprovantes de recebimento de benefício rural\n•	Fichas de filiação em sindicato rural\n•	Registro de imóvel rural (próprio ou de terceiro)\n•	Cadastro no CAR (Cadastro Ambiental Rural)\n•	DAP ou CAF ativa (Declaração de Aptidão ao Pronaf / Cadastro Nacional da Agricultura Familiar)\n•	Contrato de empréstimo rural\n•	Declaração da prefeitura [programa de sementes ou outro agrícola];\n•	Ficha de matrícula escolar com profissão;\n•	Ficha do posto de Saúde com profissão;\n•	Outro: ______,`
        },
        4: {
            tipo: 'Atendimento Externo',
            texto: `AÇÃO: XX.\n\nCASO: XXX.\n\nDocumentação solicitada:\n•	RG e CPF do requerente\n•	Comprovante de residência atualizado\n•	Senha do MEU INSS\n•	Carteira de trabalho/CNIS/Carnês\n•	Laudo médico atualizado – relatórios, receitas, exames... etc.\n•	Cadastro Único atualizado\n•	Documentos de identificação e CPF dos membros do grupo familiar\n•	Comprovantes de gastos com medicamentos, tratamentos, etc.\n•	Certidão de casamento\n•	Declaração de imposto de renda\n•	Comprovantes de endereço em comum\n•	Documentos da funerária\n•	Documentos do hospital\n•	Registros fotográficos\n•	Certidão de óbito\n•	RG e CPF do falecido\n\nPara segurado especial: em nome do cliente (preferencialmente):\n•	Certidão de nascimento de filhos com profissão “lavrador”\n•	Certidão de casamento com profissão “lavrador”\n•	Notas fiscais de venda de produtos rurais\n•	Bloco de produtor rural\n•	Contratos de arrendamento/parceria/meação\n•	Declarações de sindicatos ou associações rurais\n•	Declaração de assentamento do INCRA\n•	Declaração de exercício de pesca artesanal (se aplicável)\n•	Cadastro do PRONAF\n•	Comprovantes de recebimento de benefício rural\n•	Fichas de filiação em sindicato rural\n•	Registro de imóvel rural (próprio ou de terceiro)\n•	Cadastro no CAR (Cadastro Ambiental Rural)\n•	DAP ou CAF ativa (Declaração de Aptidão ao Pronaf / Cadastro Nacional da Agricultura Familiar)\n•	Contrato de empréstimo rural\n•	Declaração da prefeitura [programa de sementes ou outro agrícola];\n•	Ficha de matrícula escolar com profissão;\n•	Ficha do posto de Saúde com profissão;\n•	Outro: ______`,
        },
        72: {
            tipo: 'Atendimento Virtual',
            subtipo: {
                'Tentativa de contato': {
                    'Com sucesso': `AÇÃO: XX.\n\nCASO: XXX.\n\nDocumentação solicitada:\n•	RG e CPF do requerente\n•	Comprovante de residência atualizado\n•	Senha do MEU INSS\n•	Carteira de trabalho/CNIS/Carnês\n•	Laudo médico atualizado – relatórios, receitas, exames... etc.\n•	Cadastro Único atualizado\n•	Documentos de identificação e CPF dos membros do grupo familiar\n•	Comprovantes de gastos com medicamentos, tratamentos, etc.\n•	Certidão de casamento\n•	Declaração de imposto de renda\n•	Comprovantes de endereço em comum\n•	Documentos da funerária\n•	Documentos do hospital\n•	Registros fotográficos\n•	Certidão de óbito\n•	RG e CPF do falecido\n•	Provas rurais.`,
                    'Com falha': 'Não realizado: Tentativa de contato frustrada. Liguei ?x, mas ninguém atendeu. Retorno tarefa para remarcar atendimento.',
                },
            }
        },
        129: {
            tipo: 'Laudo perícial',
            subtipo: {
                'Médico': {
                    'Favorável': 'Foi juntado aos autos laudo pericial médico favorável à parte autora. Manifestação protocolada.',
                    'Desfavorável': 'Foi juntado aos autos laudo pericial médico desfavorável à parte autora. Manifestação protocolada.',
                },
                'Social': {
                    'Favorável': 'Foi juntado aos autos laudo pericial social favorável à parte autora. Manifestação protocolada.',
                    'Desfavorável': 'Foi juntado aos autos laudo pericial social desfavorável à parte autora. Manifestação protocolada.',
                }
            }
        },
        130: {
            tipo: 'Protocolo',
            subtipo: {
                'Processo em andamento': {
                    'Juntada de Documento': 'Houve a juntada de documento aos autos.',
                    'Juntada de Relatório': 'Houve a juntada de relatório médico aos autos.',
                    'Regular Andamento': 'Foi protocolado pedido de andamento processual.',
                }
            }
        }
    }

    /* selectTipoHistorico.addEventListener("change", () => {
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
    }) */

    return (selectedValue) => {
        resetSelectSubtipo()

        const tipoSelecionado = tiposHistorico[selectedValue]
        if (!tipoSelecionado) return

        textArea.innerHTML = ""

        if (tipoSelecionado.subtipo) {
            showSelectSubtipo()
            addOptionsToSelect(subOption, tipoSelecionado.subtipo)
        } else if (tipoSelecionado.texto) {
            textArea.innerHTML = tipoSelecionado.texto
        }
    }
}

function setupTaskFromTypeHistorico () {
    if (!state.functions.abaRegistroHistorico.historicoRegistroTask)
        return

    const idLucas = 199
    const idGabriel = 115
    const idTipoTarefaContatar = 15
    const idTipoTarefaProtocoloINSS = 97
    const selectTipoHistorico = document.querySelector("#idTipoHistorico")
    const gravarBTN = document.querySelector('input[name="btnGravar"]')
    const divPilotoTarefaAuto = document.querySelector("#divPilotoTarefaAuto")
    const form = document.querySelector("#fdt-form")
    const btnClone = gravarBTN.cloneNode(true)
    gravarBTN.parentNode.insertBefore(btnClone, gravarBTN)
    btnClone.style.display = "none"

    const tiposHistorico = {
        acordao: 33,
        sentenca_improcedente: 71,
        sentenca_procedente: 70,
        analise_inss_digital: 43
    }

    const tiposComTarefa = [
        String(tiposHistorico.acordao),
        String(tiposHistorico.sentenca_improcedente),
        String(tiposHistorico.sentenca_procedente),
        String(tiposHistorico.analise_inss_digital)
    ]

    const getHistoricoDescription = (idTipoHistorico) => {
        if (idTipoHistorico == tiposHistorico.analise_inss_digital) {
            const hora = document.querySelector("#hora")
            const data = document.querySelector("#data")
            return `Protocolar requerimento: histórico ${data.value} às ${hora.value}`
        }

        if (idTipoHistorico == tiposHistorico.acordao)
            return "Informar acórdão."

        return "Informar sentença."
    }

    /* selectTipoHistorico.addEventListener('change', () => {
        if (selectTipoHistorico.value == tiposHistorico.acordao || selectTipoHistorico.value == tiposHistorico.sentenca_improcedente || selectTipoHistorico.value == tiposHistorico.sentença_procedente || selectTipoHistorico.value == tiposHistorico.analise_inss_digital) {
            divPilotoTarefaAuto.style.display = "block"
            btnClone.style.display = "inline-block"
            gravarBTN.style.display = "none"
        } else {
            divPilotoTarefaAuto.style.display = "none"
            gravarBTN.style.display = "inline-block"
            btnClone.style.display = "none"
        }
    }) */

    btnClone.addEventListener('click', async event => {
        event.preventDefault()
        btnClone.disabled = true
        try {
            const idCL = document.URL.match(/(?<=idCL=)\d+/)
            const descricaoTarefa = getHistoricoDescription(selectTipoHistorico.value)
            const dataParaFinalizacao = calcularProximoDiaUtil(parametros.tarefaContatar)
            const idTipoTarefa = selectTipoHistorico.value == tiposHistorico.analise_inss_digital ? idTipoTarefaProtocoloINSS : idTipoTarefaContatar
            const idResponsavel = selectTipoHistorico.value == tiposHistorico.analise_inss_digital ? idGabriel : idLucas
            const idExecutor = idResponsavel
            await createTarefa({ idCL, descricaoTarefa, dataParaFinalizacao, idTipoTarefa, idExecutor, idResponsavel })
            alert("Tarefa criada com sucesso!")
            form.submit()
        } catch (error) {
            alert(`Houve um erro para criar a tarefa: ${error}`)
        } finally {
            btnClone.disabled = false
        }
    })

    return (selectedValue) => {
        if (tiposComTarefa.includes(String(selectedValue))) {
            divPilotoTarefaAuto.style.display = "block"
            btnClone.style.display = "inline-block"
            gravarBTN.style.display = "none"
        } else {
            divPilotoTarefaAuto.style.display = "none"
            gravarBTN.style.display = "inline-block"
            btnClone.style.display = "none"
        }
    }
}