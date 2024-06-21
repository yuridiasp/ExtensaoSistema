function contarDias(inicial,final, parametro) {
    let contaTodos = 0,
        contaUteis = 0,
        domingos = 0,
        date = new Date(inicial[2],inicial[1],inicial[0]),
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

function dataContato(intervalo,dataInterno,parametro, todosDias) {
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

function calculaIntervaloTarefas (dias) {
    const { tipoCompromisso, tipoTarefa, tarefaSequencia, semanas, tarefaRestante } = cliente.compromisso,
        { estado } = cliente.processo,
        contDois = {
            outros: ["EMENDAR","DADOS PERÍCIA SOCIAL","DADOS COMPLEMENTARES"],
            financeiro: ["ALVARÁ","RPV","PRECATÓRIO"]
        },
        contTres = "PERÍCIA",
        contQuatro = ["AUDIÊNCIA DE CONCILIAÇÃO", "AUDIÊNCIA CONCILIATÓRIA", "AUDIÊNCIA DE INTERROGATÓRIO"],
        contCinco = ["AUDIÊNCIA DE INSTRUÇÃO", "AUDIÊNCIA INAUGURAL", "AUDIÊNCIA INICIAL", "AUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO", "AUDIÊNCIA UNA"]

    if (((contCinco.includes(tipoCompromisso) && dias > 11) || (contQuatro.includes(tipoCompromisso) && dias > 10) || (tipoCompromisso.search(contTres) === 0) && dias > 10)) {
        if (semanas >= 2) {
            if (tipoTarefa === 'ANÁLISE')
                return dias-1
            if ((tipoTarefa === 'CONTATAR CLIENTE' || tipoTarefa === 'SMS E WHATSAPP')) {
                if (estado !== 'GO' && estado != 'DF') {
                    return dias-2
                }
                else {
                    if (tipoTarefa === 'CONTATAR CLIENTE') {
                        return dias-3
                    }
                    if (tipoTarefa === 'SMS E WHATSAPP') {
                        if (contQuatro.includes(tipoCompromisso))
                            return dias-7
                        return dias-2
                    }
                }
            }
            if (tipoTarefa === 'LEMBRAR CLIENTE')
                return 2
            if (tipoTarefa === 'ATO ORDINATÓRIO')
                return dias-1
        }
    }
    else {
        const ehAudienciaOuPericia = (contCinco.includes(tipoCompromisso) || contQuatro.includes(tipoCompromisso) || tipoCompromisso.search(contTres) === 0)
        if (ehAudienciaOuPericia) {
            if ((tarefaRestante === tarefaSequencia) && tipoCompromisso.search(contTres) === -1)
                return 0
            else
                if (tipoTarefa === 'LEMBRAR CLIENTE')
                    return 2
            if (estado === 'GO' || estado === 'DF') {
                if (tipoTarefa === 'CONTATAR CLIENTE')
                    return dias-1
            }
            return dias-1
        }
    }
    
    if (contDois.outros.includes(tipoCompromisso)) {
        if (tipoTarefa === 'CONTATAR CLIENTE') {
            return dias-1
        }
    }

    const indiceTarefa = ((cliente.processo.estado === 'DF') || (cliente.processo.estado === 'GO') ? 1 : 2)

    if (contDois.financeiro.includes(tipoCompromisso)) {
        if (tipoCompromisso === 'RPV' && tarefaRestante === indiceTarefa) {
            return 0
        }

        if (tipoCompromisso === 'RPV' && tarefaRestante !== indiceTarefa) {
            return dias-5
        }
    }

    return 0
}

function extrairDataPrazoFatalInput (prazoFatal) {
    let data = prazoFatal.split('/')
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
        dias = contarDias([dia, mes, ano], dataInterno, parametro),
        { uteis, todosDias} = dias,
        intervalo = calculaIntervaloTarefas (uteis),
        dataTarefa = dataContato(intervalo, dataInterno, parametro, todosDias),
        contactdiv = document.querySelector("#contactdiv")
    
    dataFinalizacao.value = dataTarefa
    dataFinalizacaoAgendada.value = dataTarefa

    dataFinalizacaoAgendada.addEventListener('blur', e => {
        dataFinalizacao.value = e.target.value
        if ((cliente.compromisso.tipoTarefa == "CONTATAR CLIENTE" || cliente.compromisso.tipoTarefa == "LEMBRAR CLIENTE") && (cliente.processo.estado != "DF" || cliente.processo.estado != "GO")) {
            if (contactdiv != null) {
                contactdiv.parentNode.removeChild(contactdiv)
                validaExecutorContatar()
            }
        }
    })

    dataFinalizacao.addEventListener('blur', e => {
        dataFinalizacaoAgendada.value = e.target.value
        if ((cliente.compromisso.tipoTarefa == "CONTATAR CLIENTE" || cliente.compromisso.tipoTarefa == "LEMBRAR CLIENTE") && (cliente.processo.estado != "DF" || cliente.processo.estado != "GO")) {
            let contactdiv = document.querySelector("#contactdiv")
            if (contactdiv != null) {
                contactdiv.parentNode.removeChild(contactdiv)
                validaExecutorContatar()
            }
        }
    })
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
        isProcessoCivel = (processo.value.length === numCharProcessoTJSE),
        isProcessoTrabalhista = (natureza === "TRABALHISTA")

    let dateFinal = new Date(),
        dateInicial = new Date(),
        cont = 1,
        diasInterno,
        condiction,
        i


    if (isProcessoCivel || isProcessoTrabalhista) {
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