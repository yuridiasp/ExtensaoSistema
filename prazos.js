function contarDias([ dia, mes, ano], final, parametro) {
    let contaTodos = 0,
        contaUteis = 0,
        domingos = 0,
        date = new Date(ano, mes, dia),
        condiction,
        i

    if (date.toDateString() == final.toDateString())
        return 0

    while (date < final) {
        date.setDate(date.getDate() + 1)
        condiction = isFeriado(date, parametro)
        i = date.getDay()

        if (i == 0) {
            domingos++
        }

        if ((i > 0 && i < 6) && (!condiction)) {
            contaUteis++
        } 
        contaTodos++
    }

    cliente.compromisso.semanas = domingos

    return { uteis: contaUteis, todosDias: contaTodos}
}

function dataContato(intervalo, dataInterno, parametro, todosDias) {
    let hoje = new Date(),
        fimIntervalo = Number(intervalo),
        date,
        anoContato,
        mesContato,
        diaContato,
        condiction

    hoje.setHours(0, 0, 0, 0)
    
    if (intervalo > 0) {
        let c = 0
        date = new Date(dataInterno)
        while (c < fimIntervalo) {
            date.setDate(date.getDate() -1)
            condiction = isFeriado(date, parametro)
            i = date.getDay()
            if ((i > 0) && (i < 6) && !condiction) {
                ++c
            }
        }
    } else {
        date = new Date(dataInterno)
    }

    anoContato = date.getFullYear()
    mesContato = date.getMonth()+1
    diaContato = date.getDate()

    hoje.setDate(hoje.getDate() + todosDias)

    return `${diaContato < 10 ? '0'.concat(diaContato) : diaContato}/${mesContato < 10 ? '0'.concat(mesContato) : mesContato}/${anoContato}`
}

function calculaIntervaloTarefasAdministrativo(dias) {
    
    const { tipoCompromisso, tarefas, semanas, quantidadeTarefas } = cliente.compromisso,
        contTres = "PERICIA",
        contQuatro = "EXIGENCIA INSS",
        tipoCompromissoNormalizado = removeAcentuacaoString(tipoCompromisso),
        tarefaAtualNormalizada = removeAcentuacaoString(tarefas[0])

    if (contQuatro.includes(tipoCompromissoNormalizado)) {
        if (tarefaAtualNormalizada === "ANALISE DE EXIGENCIA INSS DIGITAL") {
            return dias-1
        }

        if (tarefaAtualNormalizada === "INTERVENCAO - CONTROLE INSS DIGITAL" && tarefas.length === 3) {
            return dias-2
        }

        if (tarefaAtualNormalizada === "INTERVENCAO - CONTROLE INSS DIGITAL" && tarefas.length === 2) {
            return 1
        }

        if (tarefaAtualNormalizada === "CUMPRIMENTO EXIGENCIA INSS DIGITAL") {
            return 0
        }
    }

    if (tipoCompromissoNormalizado.search(contTres) === 0 && dias > 10) {
        if (semanas >= 2) {
            if (tarefaAtualNormalizada === 'CONTATAR CLIENTE') {
                return dias-1
            }
            if (tarefaAtualNormalizada === 'SMS E WHATSAPP') {
                return dias-1
            }
            if (tarefaAtualNormalizada === 'LEMBRAR CLIENTE')
                return 2
        }
    }

    return 0
}

function calculaIntervaloTarefasJudicial(dias) {
    const { tipoCompromisso, tarefas, semanas, quantidadeTarefas } = cliente.compromisso,
        { estado } = cliente.processo,
        contDois = {
            outros: ["EMENDAR","DADOS PERICIA SOCIAL","DADOS COMPLEMENTARES"],
            financeiro: ["RPV TRF1 BRASILIA", "RPV TRF1 GOIAS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTANCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATORIO", "RECEBIMENTO DE ALVARA"]
        },
        contTres = "PERICIA",
        contQuatro = ["AUDIENCIA DE CONCILIACAO", "AUDIENCIA CONCILIATORIA", "AUDIENCIA DE INTERROGATORIO"],
        contCinco = ["AUDIENCIA DE INSTRUCAO", "AUDIENCIA INAUGURAL", "AUDIENCIA INICIAL", "AUDIENCIA DE INSTRUCAO E JULGAMENTO", "AUDIENCIA UNA"],
        tipoCompromissoNormalizado = removeAcentuacaoString(tipoCompromisso),
        tarefaAtualNormalizada = removeAcentuacaoString(tarefas[0])

    if (((contCinco.includes(tipoCompromisso) && dias > 11) || (contQuatro.includes(tipoCompromissoNormalizado) && dias > 10) || (tipoCompromissoNormalizado.search(contTres) === 0) && dias > 10)) {
        if (semanas >= 2) {
            if (tarefaAtualNormalizada === 'ANALISE')
                return dias-1
            if ((tarefaAtualNormalizada === 'CONTATAR CLIENTE' || tarefaAtualNormalizada === 'SMS E WHATSAPP')) {
                if (estado !== 'GO' && estado != 'DF') {
                    return dias-2
                }
                else {
                    if (tarefaAtualNormalizada === 'CONTATAR CLIENTE') {
                        return dias-3
                    }
                    if (tarefaAtualNormalizada === 'SMS E WHATSAPP') {
                        if (contQuatro.includes(tipoCompromissoNormalizado))
                            return dias-7
                        return dias-2
                    }
                }
            }
            if (tarefaAtualNormalizada === 'LEMBRAR CLIENTE')
                return 2
            if (tarefaAtualNormalizada === 'ATO ORDINATORIO')
                return dias-1
        }
    }
    else {
        const ehAudienciaOuPericia = (contCinco.includes(tipoCompromissoNormalizado) || contQuatro.includes(tipoCompromissoNormalizado) || tipoCompromissoNormalizado.search(contTres) === 0)
        if (ehAudienciaOuPericia) {
            if (tarefas.length === quantidadeTarefas && tipoCompromissoNormalizado.search(contTres) === -1)
                return 0
            else
                if (tarefaAtualNormalizada === 'LEMBRAR CLIENTE')
                    return 2
            if (estado === 'GO' || estado === 'DF') {
                if (tarefaAtualNormalizada === 'CONTATAR CLIENTE')
                    return dias-1
            }
            return dias-1
        }
    }
    
    if (contDois.outros.includes(tipoCompromissoNormalizado)) {
        if (tarefaAtualNormalizada === 'CONTATAR CLIENTE') {
            return dias-1
        }
    }

    if (contDois.financeiro.includes(tipoCompromissoNormalizado)) {
        if ((tipoCompromissoNormalizado.includes('RPV') || tipoCompromissoNormalizado.includes('PRECATORIO')) && tarefaAtualNormalizada.includes("ADVOGADO")) {
            return dias-5
        }
        
        if ((tipoCompromissoNormalizado.includes('RPV') || tipoCompromissoNormalizado.includes('PRECATORIO')) && tarefaAtualNormalizada.includes("FINANCEIRO")) {
            return 0
        }
    }

    return 0
}

function extrairDataPrazoFatalInput (prazoFatal) {
    const data = prazoFatal.split('/')
    return [data[0],Number(data[1])-1,data[2]]
}

function calcularDataTarefa(parametro) {
    const dataFinalizacao = document.querySelector("#dataParaFinalizacao"),
        dataFinalizacaoAgendada = document.querySelector("#dataParaFinalizacaoAgendada"),
        hoje = new Date(),
        ano = hoje.getFullYear(),
        mes = hoje.getMonth(),
        dia = hoje.getDate(),
        data = extrairDataPrazoFatalInput(cliente.compromisso.prazoInterno),
        dataInterno = new Date(data[2],data[1],data[0]),
        { uteis, todosDias} = contarDias([dia, mes, ano], dataInterno, parametro),
        intervalo = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? calculaIntervaloTarefasJudicial(uteis) : calculaIntervaloTarefasAdministrativo(uteis),
        dataTarefa = dataContato(intervalo, dataInterno, parametro, todosDias),
        contactdiv = document.querySelector("#contactdiv")
    
    dataFinalizacao.value = dataTarefa
    dataFinalizacaoAgendada.value = dataTarefa

    const verifyContactTask = ({ target }) => {
        target.value = target.value
        if (((cliente.compromisso.tarefas[0] == "CONTATAR CLIENTE" || cliente.compromisso.tarefas[0] == "LEMBRAR CLIENTE") && (cliente.processo.estado != "DF" || cliente.processo.estado != "GO")) || !state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
            if (contactdiv) {
                contactdiv.parentNode.removeChild(contactdiv)
                validaExecutorContatar()
            }
        }
    }

    dataFinalizacaoAgendada.addEventListener('blur', verifyContactTask)

    dataFinalizacao.addEventListener('blur', verifyContactTask)
}

function formataData (dia,mes,ano) {
    if (mes < 10)
        mes = `0${mes}`
    if (dia < 10)
        dia = `0${dia}`
    return `${dia}/${mes}/${ano}`
}

function calcularPrazo (prazo,parametro) {
    const dataPub = document.querySelector("#dataPublicacao"),
        tipoIntimacao = document.querySelector("#descricao"),
        processo = document.querySelector('#numeroProcesso'),
        diasFatal = Number(prazo),
        StringTipoIntimacao = removeAcentuacaoString(tipoIntimacao.value).toUpperCase(),
        isSentenca = (StringTipoIntimacao.search("SENTENCA") === 0),
        isDecisao = (StringTipoIntimacao.search("DECISAO") === 0),
        isAcordao = (StringTipoIntimacao.search("ACORDAO") == 0),
        isSentencaOrAcordaoOrDecisao = (isSentenca || isDecisao || isAcordao),
        numCharProcessoTJSE = 12,
        natureza = cliente.processo.natureza,
        isProcessoCivel = processo ? (processo.value.length === numCharProcessoTJSE) : false,
        isProcessoTrabalhista = (natureza === "TRABALHISTA")

    let dateFinal = new Date(),
        dateInicial = new Date(),
        cont = 1,
        diasInterno,
        condiction,
        i


    if (isProcessoCivel || isProcessoTrabalhista || !state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        if (dataPub.value.length > 0) {
            const [ dia, mes, ano ] = dataPub.value.split('/')
            dateFinal = new Date(ano,Number(mes)-1,Number(dia))
            dateInicial = new Date(ano,Number(mes)-1,Number(dia))
        }

        if (dateInicial.getDay() === 6) {
            dateFinal.setDate(dateFinal.getDate()+2)
            dateInicial.setDate(dateInicial.getDate()+2)
        }
    }

    while (diasFatal >= cont) {
        dateFinal.setDate(dateFinal.getDate() + 1)
        i = dateFinal.getDay()

        if (i > 0 && i < 6 && !isFeriado(dateFinal,parametro)) {
            cont += 1
        }
    }

    let ano = dateFinal.getFullYear(),
        mes = dateFinal.getMonth()+1,
        dia =  dateFinal.getDate(),
        final = formataData(dia, mes, ano)
    
    if (isSentencaOrAcordaoOrDecisao) {
        if (isProcessoCivel || isProcessoTrabalhista) {
            diasInterno = 3
        }
        else {
            if (diasFatal === 5)
                diasInterno = 2
            else
                diasInterno = 5
        }
    }
    else {
        if (diasFatal === 5 && isProcessoCivel) {
            diasInterno = 3
        } else if (diasFatal === 5 && isProcessoTrabalhista) {
            diasInterno = 2
        }
        else {
            diasInterno = diasFatal-3
        }
    }
    
    cont = 1

    const isGoias = (cliente.processo.estado === 'GO'),
        isDF = (cliente.processo.estado === 'DF'),
        ehBarril = (isGoias || isDF)

    if (ehBarril && !isSentencaOrAcordaoOrDecisao) {
        dateInicial = new Date (dateFinal.getFullYear(), dateFinal.getMonth(), dateFinal.getDate()-1)
        while (cont <= 3) {
            i = dateInicial.getDay()
            condiction = isFeriado(dateInicial,parametro)
            
            if (condiction) {
                dateInicial.setDate(dateInicial.getDate() - 1)
            } else {
                if (cont === 3) {
                    if ((i === 6) || (i === 0)) {
                        if (i === 0) {
                            dateInicial.setDate(dateInicial.getDate() - 2)
                        }
                        if (i === 6) {
                            dateInicial.setDate(dateInicial.getDate() - 1)
                        }
                    }
                    break
                } else {
                    dateInicial.setDate(dateInicial.getDate() - 1)
                    cont++
                }
            }
        }
    } else {
        while (diasInterno >= cont) {
            dateInicial.setDate(dateInicial.getDate() + 1)
            i = dateInicial.getDay()
            condiction = isFeriado(dateInicial,parametro)
            
            if (diasInterno >= cont) {
                if (i > 0 && i < 6 && !condiction) {
                    cont = cont + 1
                }
            }
            else {
                if (condiction && i > 0 && i < 6) {
                    dateInicial.setDate(dateInicial.getDate() - 1)
                    cont = cont + 1
                }
                else
                    if (i > 0 && i < 6)
                        cont = cont + 1
            }
        }
    }

    ano = dateInicial.getFullYear()
    mes = dateInicial.getMonth()+1
    dia = dateInicial.getDate()
    let inicial = formataData(dia, mes, ano)

    return [inicial,final]
}