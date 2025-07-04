function contarDias([ dia, mes, ano], final, parametro) {
    let contaTodos = 0,
        contaUteis = 0,
        domingos = 0,
        date = new Date(ano, mes, dia),
        i

    if (date.toDateString() == final.toDateString())
        return 0

    while (date < final) {
        date.setDate(date.getDate() + 1)
        const { isHoliday } = isFeriado({ date, parametro, cliente })
        i = date.getDay()

        if (i == 0) {
            domingos++
        }

        if ((i > 0 && i < 6) && (!isHoliday)) {
            contaUteis++
        } 
        contaTodos++
    }

    cliente.compromisso.semanas = domingos

    return { uteis: contaUteis, todosDias: contaTodos}
}

function dataContato(intervalo, dataInterno, parametro) {
    let hoje = new Date(),
        fimIntervalo = Number(intervalo),
        date
        

    hoje.setHours(0, 0, 0, 0)
    
    if (intervalo > 0) {
        let c = 0
        date = new Date(dataInterno)
        while (c < fimIntervalo) {
            date.setDate(date.getDate() -1)
            const { isHoliday } = isFeriado({ date, parametro, cliente })
            i = date.getDay()
            if ((i > 0) && (i < 6) && !isHoliday) {
                ++c
            }
        }
    } else {
        date = new Date(dataInterno)
    }

    if (date < hoje) {
        date = hoje   
    }

    return date.toLocaleDateString()
}

function calculaIntervaloTarefasAdministrativo(dias) {
    
    const { tipoCompromisso, tarefas, semanas } = cliente.compromisso,
        contTres = "PERICIA",
        contQuatro = "EXIGENCIA INSS",
        tipoCompromissoNormalizado = removeAcentuacaoString(tipoCompromisso),
        tarefaAtualNormalizada = removeAcentuacaoString(tarefas[0]),
        agenciasGODF = [
            'AG. AGUAS LINDAS DE GOIAS',
            'AG. ANAPOLIS - CENTRO',
            'AG. ANAPOLIS - VILA JAIARA',
            'AG. BRASILIA - ASA SUL',
            'AG. BRASILIA - CEILANDIA',
            'AG. BRASILIA - GAMA',
            'AG. BRASILIA - PLANALTINA',
            'AG. BRASILIA - SOBRADINHO',
            'AG. BRASILIA - TAGUATINGA',
            'AG. GOIANIA - CENTRO',
            'AG. GOIANIA - UNIVERSITARIO',
            'AG. GOIAS',
            'AG. GOIAS - CIDADE OCIDENTAL',
            'AG. GOIAS - PADRE BERNARDO',
            'AG. LUZIANIA',
            'AG. VALPARAISO DE GOIAS'
        ]

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
                if (agenciasGODF.includes(cliente.requerimento.postoINSS)) {
                    return dias-3
                }
                return dias-1
            }
            if (tarefaAtualNormalizada === 'SMS E WHATSAPP') {
                return dias-1
            }
            if (tarefaAtualNormalizada === 'LEMBRAR CLIENTE')
                return 2
        }
    } else {
        return dias-1
    }

    return 0
}

function calculaIntervaloTarefasJudicial(dias) {
    
    const { tipoCompromisso, tarefas, semanas, quantidadeTarefas } = cliente.compromisso,
        { estado } = cliente.processo,
        contDois = {
            outros: ["EMENDAR","DADOS PERICIA SOCIAL","DADOS COMPLEMENTARES"],
            calculo: ["MANIFESTACAO SOBRE CALCULOS", "MANIFESTACAO SOBRE CALCULO", 'PLANILHA'],
            financeiro: ["RPV TRF1 BRASILIA", "RPV TRF1 GOIAS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTANCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATORIO", "RECEBIMENTO DE ALVARA"],
            adm: ['DECISAO ANTECIPACAO PERICIA']
        },
        contTres = "PERICIA",
        contQuatro = ["AUDIENCIA DE CONCILIACAO", "AUDIENCIA CONCILIATORIA", "AUDIENCIA DE INTERROGATORIO"],
        contCinco = ["AUDIENCIA DE INSTRUCAO", "AUDIENCIA INAUGURAL", "AUDIENCIA INICIAL", "AUDIENCIA DE INSTRUCAO E JULGAMENTO", "AUDIENCIA UNA"],
        tipoCompromissoNormalizado = removeAcentuacaoString(tipoCompromisso),
        tarefaAtualNormalizada = removeAcentuacaoString(tarefas[0]),
        isDFOrGO = estado === 'GO' || estado === 'DF'

    if (((contCinco.includes(tipoCompromissoNormalizado) && dias > 11) || (contQuatro.includes(tipoCompromissoNormalizado) && dias > 10) || (tipoCompromissoNormalizado.search(contTres) === 0) && dias > 10)) {
        if (semanas >= 2) {
            if (tarefaAtualNormalizada === 'ANALISE')
                return dias-1
            if ((tarefaAtualNormalizada === 'CONTATAR CLIENTE' || tarefaAtualNormalizada === 'SMS E WHATSAPP')) {
                if (!isDFOrGO) {
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
        const isCourtHearingOrExpertise = (contCinco.includes(tipoCompromissoNormalizado) || contQuatro.includes(tipoCompromissoNormalizado) || tipoCompromissoNormalizado.search(contTres) === 0)

        if (isCourtHearingOrExpertise) {
            if (tarefas.length === quantidadeTarefas && tipoCompromissoNormalizado.search(contTres) === -1)
                return 0
            else
                if (tarefaAtualNormalizada === 'LEMBRAR CLIENTE')
                    return 2
            if (isDFOrGO) {
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

    const isAttorneyTask = tarefaAtualNormalizada.includes('ADVOGADO')

    /* if (contDois.calculo.includes(tipoCompromissoNormalizado)) {
        if (isAttorneyTask) {
            return 0
        }
        
        return 2
    } */

    if (contDois.adm.includes(tipoCompromissoNormalizado)) {
        if (isAttorneyTask) {
            return 0
        }

        return dias-1
    }

    if (contDois.financeiro.includes(tipoCompromissoNormalizado)) {

        const isFinanceTask = tipoCompromissoNormalizado.includes('RPV') || tipoCompromissoNormalizado.includes('PRECATORIO')

        if (isFinanceTask && isAttorneyTask) {
            return dias-5
        }

        return 0
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
        [ diaPrazoInterno, mesPrazoInterno, anoPrazoInterno ] = extrairDataPrazoFatalInput(cliente.compromisso.prazoInterno),
        dataInterno = new Date(anoPrazoInterno, mesPrazoInterno, diaPrazoInterno),
        { uteis } = contarDias([dia, mes, ano], dataInterno, parametro),
        intervalo = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? calculaIntervaloTarefasJudicial(uteis) : calculaIntervaloTarefasAdministrativo(uteis),
        dataTarefa = dataContato(intervalo, dataInterno, parametro)
    
    dataFinalizacao.value = dataTarefa
    dataFinalizacaoAgendada.value = dataTarefa

    const verifyContactTask = ({ target }) => {
        dataFinalizacaoAgendada.value = target.value
        dataFinalizacao.value = target.value

        const isTaskContatar = cliente.compromisso.tarefas[0] == "CONTATAR CLIENTE"
        const isTaskLembrar = cliente.compromisso.tarefas[0] == "LEMBRAR CLIENTE"
        /* const isDFOrGO = cliente.processo.estado === "DF" || cliente.processo.estado === "GO" */

        if (isTaskContatar || isTaskLembrar || !state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
            const contactdiv = document.querySelector("#contactdiv")
            
            if (contactdiv) {
                contactdiv.parentNode.removeChild(contactdiv)
                validaExecutorContatar()
            }
        }
    }

    dataFinalizacaoAgendada.addEventListener('blur', verifyContactTask)

    dataFinalizacao.addEventListener('blur', verifyContactTask)
}

function calcularPrazo (prazo, parametro) {
    
    const dataPub = document.querySelector("#dataPublicacao"),
        tipoIntimacao = document.querySelector("#descricao"),
        processo = document.querySelector('#numeroProcesso'),
        diasFatal = Number(prazo),
        StringTipoIntimacao = removeAcentuacaoString(tipoIntimacao.value).toUpperCase(),
        isSentenca = (StringTipoIntimacao.search("SENTENCA") === 0),
        isDecisao = (StringTipoIntimacao.search("DECISAO") === 0),
        isAcordao = (StringTipoIntimacao.search("ACORDAO") === 0),
        numCharProcessoTJSE = 12,
        { natureza, estado } = cliente.processo,
        isProcessoCivel = processo ? (processo.value.length === numCharProcessoTJSE) : false,
        isProcessoTrabalhista = (natureza === "TRABALHISTA"),
        sunday = 0,
        saturday = 6

    let dateFinal = new Date(),
        dateInicial = new Date(),
        contagemDias = 1,
        diasInterno

    dateInicial.setHours(0,0,0,0)
    dateFinal.setHours(0,0,0,0)


    if (isProcessoCivel || isProcessoTrabalhista || !state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        if (dataPub.value.length) {
            const [ dia, mes, ano ] = dataPub.value.split('/')
            dateFinal = new Date(ano, Number(mes)-1, Number(dia))
            dateInicial = new Date(ano, Number(mes)-1, Number(dia))
        }

        if (dateInicial.getDay() === 6) {
            dateFinal.setDate(dateFinal.getDate() + 2)
            dateInicial.setDate(dateInicial.getDate() + 2)
        }
    }

    while (diasFatal >= contagemDias) {
        dateFinal.setDate(dateFinal.getDate() + 1)

        const weekDay = dateFinal.getDay()

        const { isHoliday } = isFeriado({ date: dateFinal, parametro, cliente })

        if (weekDay > sunday && weekDay < saturday && !isHoliday) {
            contagemDias += 1
        }
    }
    
    if (isSentenca || isDecisao || isAcordao) {
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
            diasInterno = diasFatal - 3
        }
    }
    
    contagemDias = 1

    const isDFOrGo = estado === 'GO' || estado === 'DF'

    if (isDFOrGo && !(isSentenca || isDecisao || isAcordao)) {
        dateInicial = new Date (dateFinal.getTime())
        while (contagemDias <= 3) {
            const weekDay = dateInicial.getDay()
            const { isHoliday } = isFeriado({ date: dateInicial, parametro, cliente })
            
            if (isHoliday) {
                dateInicial.setDate(dateInicial.getDate() - 1)
            } else {
                if (contagemDias === 3) {
                    if (weekDay === sunday) {
                        dateInicial.setDate(dateInicial.getDate() - 2)
                    }
                    if (weekDay === saturday) {
                        dateInicial.setDate(dateInicial.getDate() - 1)
                    }
                    break
                } else {
                    dateInicial.setDate(dateInicial.getDate() - 1)
                    contagemDias++
                }
            }
        }
    } else {
        while (diasInterno >= contagemDias) {
            dateInicial.setDate(dateInicial.getDate() + 1)
            const weekDay = dateInicial.getDay()
            const { isHoliday } = isFeriado({ date: dateInicial, parametro, cliente })
            
            if (diasInterno >= contagemDias) {
                if (weekDay > sunday && weekDay < saturday && !isHoliday) {
                    contagemDias = contagemDias + 1
                }
            }
            else {
                if (isHoliday && weekDay > sunday && weekDay < saturday) {
                    dateInicial.setDate(dateInicial.getDate() - 1)
                    contagemDias = contagemDias + 1
                }
                else
                    if (weekDay > sunday && weekDay < saturday)
                        contagemDias = contagemDias + 1
            }
        }
    }

    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)

    if (dateInicial < hoje) {
        dateInicial = hoje
    }

    return [ dateInicial.toLocaleDateString(), dateFinal.toLocaleDateString() ]
}

function calcularProximoDiaUtil (parametro) {
    const date = new Date()

    do {
        date.setDate(date.getDate() + 1)
    } while(isFeriado({ date, parametro, cliente }) && (date.getDay() === 0 || date.getDay() === 6))

    return date.toLocaleDateString()
}