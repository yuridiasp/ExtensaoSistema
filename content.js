const state = {
    active: null,
    functions: {
        todasPaginas: {
            digitarUsandoVoz: undefined,
            contadorTarefas: undefined
        },
        abaCadastrodeProcesso: {
            autoFormatNumProcesso: null,
            alteracaoNumeroProcesso: null
        },
        abaPesquisaProcesso: {
            autoFormatacaoNumProcessoPesquisa: null
        },
        abaCompromissosProcesso: {
            mostrarBotadeRolagem: null
        },
        cadastroCompromisso:{
            selecaodoTipodeCompromisso: null,
            mostrarBotoesAuxiliaresdeDias: null,
            AutoPreenchimentoPrazoInterno: null,
        },
        cadastroTarefa:{
            AutoPreenchimentoTarefasIntimacoes: null,
        },
        carregamentoArquivo:{
            seleçãoTipoArquivo: null,
            preenchimentoCamposArquivos: null,
        },
        preProcesso:{
            preenchimentoNomePasta: null,
        },
        supervisor: {
            painelVisualizacaoTarefasTimeADM: null,
            painelVisualizacaoTarefasTimeSAC: null,
            painelVisualizacaoTarefasTimeFINANCEIRO: null,
        },
        tjse: {
            botaoExportarAlvaras: null
        }
    }
}

function getEndereço (local) {

    if (local.value.length == 0)
        return ""
    else {
        let locais = Object.entries(locaisAudiencias)
        for (const [key,value] of locais) {
            if (removeAcentuacaoString(key) == removeAcentuacaoString(local.value)){
                return `${key}: ${value}`
            }
        }
        return local.value
    }
}


let submit = true

let cliente = {
        cliente: {
            id: null,
            nome: null,
            cpf: null,
            cidade: null,
            estado: null,
            localAtendido: null,
            parceiro: null
        },
        processo: {
            id: null,
            origem: null,
            dependente: null,
            coletivo: false,
            reu: null,
            responsavel: null,
            natureza: null,
            merito: null,
            cidade: null,
            estado: null,
            vara: null,
            cpfDemaisEnvolvidos: [],
            idDemaisEnvolvidos: []
        },
        compromisso: {
            id: null,
            atualizar: true,
            prazoInterno: null,
            prazoFatal: null,
            tarefaRestante: null,
            tarefaSequencia: null,
            tipoCompromisso: null,
            tipoTarefa: null,
            descricao: null,
            semanas: null,
            linkAddCompromisso: null
        }
    }

function ouvirEventos (target) {
    for (let prop in target) {
        if(prop.substr(0,2) == "on"){
            target.addEventListener(prop.substr(2), function(e){
                console.log(e.type,e.target)
           })
        }
     }
     
    let eventos = ['click', 'blur', 'mouseover', 'mouseup', 'mousedown','animationstart','animationend','animationiteration']
    
    for (let evt of eventos) {
        target.addEventListener(evt, function(e){
            console.log(e.type)
        })
    }
}

function calculaPascoa(ano) {
    let X,
        Y

    if (ano >= 2020 && ano <= 2099) {
        X = 24
        Y = 5
    }
    if (ano >= 2100 && ano <= 2199) {
        X = 24
        Y = 6
    }
    if (ano >= 2200 && ano <= 2299) {
        X = 25
        Y = 7
    }

    let a = ano % 19,
        b = ano % 4,
        c = ano % 7,
        d = (19 * a + X) % 30,
        e = (2 * b + 4 * c + 6 * d + Y) % 7,
        DIA,
        MES

    if (d+e > 9) {
        DIA = d+e-9
        MES = 3
    } else {
        DIA = d+e+22
        MES = 2
    }

    if (MES == 3 && DIA == 26)
        DIA = 19

    if (MES == 3 && DIA == 25 && d == 28 && a > 10)
        DIA = 18

    return new Date(ano, MES, DIA)
}

function FeriadosFixos (ano, parametro) {

    const tarefaContatar = (parametro == 1),
        tarefaAdvogado = (parametro == 2),
        indexDia = 1,
        indexMes = 0,
        indexJaneiro = 0,
        diaInicioForense = 20,
        mesInicioForense = 11,
        diaFimForense = 6,
        mesFimForense = 0,
        diaInicioFeriasAdvogados = 20,
        mesInicioFeriasAdvogados = 11,
        diaFimFeriasAdvogados = 20,
        mesFimFeriasAdvogados = 0,
        forense = setIntervaloFeriadosJudiciario(diaInicioForense, mesInicioForense, diaFimForense, mesFimForense),
        advogados = setIntervaloFeriadosJudiciario(diaInicioFeriasAdvogados, mesInicioFeriasAdvogados, diaFimFeriasAdvogados, mesFimFeriasAdvogados)
        let resultados = [],
            datas = { // [mes, dia] (indice do mes de 0 a 11)
                nacional: [
                    [0,1], //CONFRATERNIZAÇÃO UNIVERSAL
                    [3,21], //TIRADENTES
                    [4,1], //DIA DO TRABALHO
                    [8,7], //INDEPENDÊNCIA DO BRASIL
                    [9,12], //DIA DAS CRIANÇAS - DIA DA PADROEIRA DO BRASIL
                    [10,2], //FINADOS
                    [10,15], //PROCLAMAÇÃO DA REPÚBLICA
                    [11,25], //NATAL
                ],
                recessoForense : forense, //Recesso Forense 20/12 a 06/01
                feriasAdvogados: advogados, //Recesso dos advogados 20/12 a 20/01 Art. 220 NCPC
                justicaNacional: [
                    [7,11], //DIA DO MAGISTRADO
                    [9,28], //DIA DO FUNCIONÁRIO PÚBLICO
                    [10,1], //LEI FEDERAL Nº 5.010/66
                    [11,8], //DIA DA JUSTIÇA
                ],
                TRF1: [],
                'SE': [
                    [5,24], //SÃO JOÃO
                    [6,8], //EMANCIPAÇÃO POLÍTICA DE SERGIPE
                    [10,3] //Ponto Facultativo da Justiça
                ],
                'AQUIDABA': [
                    [3,4], //EMANCIPAÇÃO POLÍTICA
                    [6,26] //PADROEIRA
                ],
                'ARACAJU': [
                    [11,8], //PADROEIRA
                    [2,17] //ANIVERSÁRIO DE ARACAJU
                ],
                'ARAUA': [
                    [3,9], //EMANCIPAÇÃO POLÍTICA
                    [9,5], //SÃO BENEDITO
                    [11,8] //PADROEIRA
                ],
                'AREIA BRANCA': [
                    [10,11], //FUNDAÇÃO DA CIDADE
                    [11,8] //PADROEIRA
                ],
                'BARRA DOS COQUEIROS': [
                    [10,25], //EMANCIPAÇÃO POLÍTICA
                    [11,13] //PADROEIRA
                ],
                'BOQUIM': [
                    [2,21], //CRIAÇÃO DO MUNICÍPIO
                    [6,26] //PADROEIRA
                ],
                'CAMPO DO BRITO': [
                    [7,15], //PADROEIRA
                    [9,29] //EMANCIPAÇÃO POLÍTICA
                ],
                'CANINDE DE SAO FRANCISCO': [
                    [10,25], //EMANCIPAÇÃO POLÍTICA
                    [11,8] //EMANCIPAÇÃO POLÍTICA
                ],
                'CAPELA': [
                    [1,2], //PADROEIRO
                    [7,28] //EMANCIPAÇÃO POLÍTICA
                ],
                'CARIRA': [
                    [4,2], //PADROEIRA
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'CARMOPOLIS': [
                    [6,16], //PADROEIRA
                    [9,16], //EMANCIPAÇÃO POLÍTICA
                    [10,29] //DIA DO EVANGÉLICO
                ],
                'CEDRO DE SAO JOAO': [
                    [5,24], //PADROEIRO
                    [9,4] //EMANCIPAÇÃO POLÍTICA
                ],
                'CRISTINAPOLIS': [
                    [3,24], //EMANCIPAÇÃO POLÍTICA
                    [6,31], //FERIADO MUNICIPAL EVANGÉLICO
                    [9,4] //PADROEIRO
                ],
                'DIVINA PASTORA': [
                    [2,13] //EMANCIPAÇÃO POLÍTICA
                ],
                'ESTANCIA': [
                    [4,4], //ANIVERSÁRIO DA CIDADE
                    [11,12] //PADROEIRA
                ],
                'FREI PAULO': [
                    [5,30], //PADROEIRO
                    [9,23] //EMANCIPAÇÃO POLÍTICA
                ],
                'GARARU': [
                    [2,15], //EMANCIPAÇÃO POLÍTICA
                    [4,10], //FESTA DO CRUZEIRO
                    [7,15] //DIA DA ASSUNÇÃO DE NOSSA SENHORA
                ],
                'INDIAROBA': [
                    [2,28], //EMANCIPAÇÃO POLÍTICA
                    [11,8] //PADROEIRA
                ],
                'ITABAIANA': [
                    [0,27], //PADROEIRO
                    [5,13], //EMANCIPAÇÃO POLÍTICA
                    [7,28] //PADROEIRA
                ],
                'ITABAIANINHA': [
                    [9,19], //EMANCIPAÇÃO POLÍTICA
                    [11,8] //PADROEIRA
                ],
                'ITAPORANGA DAJUDA': [
                    [1,2], //PADROEIRA
                    [2,28] //EMANCIPAÇÃO POLÍTICA
                ],
                'JAPARATUBA': [
                    [5,11], //EMANCIPAÇÃO POLÍTICA
                    [11,8] //PADROEIRA
                ],
                'JAPOATA': [
                    [10,23], //EMANCIPAÇÃO POLÍTICA
                    [10,25] //PADROEIRA
                ],
                'LAGARTO': [
                    [3,20], //EMANCIPAÇÃO POLÍTICA
                    [8,8] //PADROEIRA
                ],
                'LARANJEIRAS': [
                    [5,26], //PADROEIRA
                    [7,7] //EMANCIPAÇÃO POLÍTICA
                ],
                'MALHADOR': [
                    [2,19], //PADROEIRO
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'MARUIM': [
                    [0,21], //PADROEIRO
                    [4,5], //EMANCIPAÇÃO POLÍTICA
                    [7,15] //CO-PADROEIRA NOSSA SENHORA DA PAZ
                ],
                'MONTE ALEGRE DE SERGIPE': [
                    [5,24], //PADROEIRO
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'NEOPOLIS': [
                    [5,13], //PADROEIRO
                    [5,29], //SÃO PEDRO
                    [9,7], //NOSSA SENHORA DO ROSÁRIO
                    [9,18] //FUNDAÇÃO DA CIDADE
                ],
                'NOSSA SENHORA DA GLORIA': [
                    [0,5], //FESTA DOS SANTOS REIS
                    [7,15], //PADROEIRA
                    [8,26] //EMANCIPAÇÃO POLÍTICA
                ],
                'NOSSA SENHORA DAS DORES': [
                    [5,11], //EMANCIPAÇÃO POLÍTICA
                    [8,15] //PADROEIRA
                ],
                'SOCORRO': [
                    [1,2], //PADROEIRA
                    [6,7], //EMANCIPAÇÃO POLÍTICA
                    [7,15] //FESTA DE NOSSA SENHORA DO AMPARO
                ],
                'PACATUBA': [
                    [10,20], //PADROEIRO
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'PEDRINHAS': [
                    [2,19], //PADROEIRO
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'PIRAMBU': [
                    [1,11], //PADROEIRA
                    [10,26] //EMANCIPAÇÃO POLÍTICA
                ],
                'POCO REDONDO': [
                    [7,15], //PADROEIRA
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'POCO VERDE': [
                    [0,21], //PADROEIRO
                    [4,3], //CO-PADROEIRA
                    [10,25] //EMANCIPAÇÃO POLÍTICA
                ],
                'PORTO DA FOLHA': [
                    [1,19], //EMANCIPAÇÃO POLÍTICA
                    [11,7] //PADROEIRA
                ],
                'PROPRIA': [
                    [1,7], //EMANCIPAÇÃO POLÍTICA
                    [5,13] //PADROEIRO
                ],
                'RIACHAO DO DANTAS': [
                    [4,9], //EMANCIPAÇÃO POLÍTICA
                    [10,21] //PADROEIRA
                ],
                'RIACHUELO': [
                    [0,25], //EMANCIPAÇÃO POLÍTICA
                    [5,11], //BATALHA NAVAL DE RIACHUELO
                    [11,8] //PADROEIRA
                ],
                'RIBEIROPOLIS': [
                    [9,30], //PADROEIRO
                    [11,18] //EMANCIPAÇÃO POLÍTICA
                ],
                'SALGADO': [
                    [0,22], //PADROEIRO
                    [9,4] //EMANCIPAÇÃO POLÍTICA
                ],
                'SANTANA DO SAO FRANCISCO': [
                    [3,6], //EMANCIPAÇÃO POLÍTICA
                    [6,26] //PADROEIRA
                ],
                'SANTO AMARO DAS BROTAS': [
                    [0,15], //PADROEIRA
                    [11,15] //EMANCIPAÇÃO POLÍTICA
                ],
                'SAO CRISTOVAO': [
                    [8,8] //PADROEIRA
                ],
                'SAO DOMINGOS': [
                    [9,21], //EMANCIPAÇÃO POLÍTICA
                    [7,8] //PADROEIRO
                ],
                'SIMAO DIAS': [
                    [5,12], //EMANCIPAÇÃO POLÍTICA
                    [6,26] //PADROEIRA
                ],
                'TOBIAS BARRETO': [
                    [5,7], //ANIVERSÁRIO DE NASCIMENTO DE TOBIAS BARRETO DE MENEZES
                    [7,15], //PADROEIRA
                    [9,23] //EMANCIPAÇÃO POLÍTICA
                ],
                'UMBAUBA': [
                    [1,2], //PADROEIRA
                    [1,6] //EMANCIPAÇÃO POLÍTICA
                ]
            }

    function setIntervaloFeriadosJudiciario(diaInicio, mesInicio, diaFinal, mesFinal) {
        const fimMesDezembro = 31,
            diaPrimeiro = 1

        let feriados = [],
            condicao = true,
            dia = diaInicio,
            mes = mesInicio

        while(condicao) {
            feriados.push([mes, dia])
            dia++
            
            if (dia > fimMesDezembro) {
                dia = diaPrimeiro
                mes = indexJaneiro
            }
            if ((dia > diaFinal) && (mes == mesFinal)) {
                condicao = false
            }
        }

        return feriados
    }
    
    datas.nacional.forEach(feriado => {
        resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
    })

    if (tarefaContatar) {
        datas.SE.forEach(feriado => {
            resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
        })
        datas.ARACAJU.forEach(feriado => {
            resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
        })
    }

    if (tarefaAdvogado) {
        datas.justicaNacional.forEach(feriado => {
            resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
        })

        datas.feriasAdvogados.forEach(feriado => {
            if (feriado[indexMes] == indexJaneiro) {
                resultados.push(new Date(ano+1, feriado[indexMes], feriado[indexDia]))
                resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
            }
            else {
                resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
                resultados.push(new Date(ano-1, feriado[indexMes], feriado[indexDia]))
            }
        })

        if (cliente.processo.estado == 'SE') {
            datas.SE.forEach(feriado => {
                resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
            })
        }

        if (cliente.processo.estado == 'DF' || cliente.processo.estado == 'GO') {
            datas.TRF1.forEach(feriado => {
                resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
            })
        }
        
        let date = Object.entries(datas)
        for (const [key,value] of date) {
            if (key == cliente.processo.cidade){
                value.forEach(feriado => {
                    resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
                })
            }
        }
    }

    datas.recessoForense.forEach(feriado => {
        if (feriado[indexMes] == indexJaneiro) {
            resultados.push(new Date(ano+1, feriado[indexMes], feriado[indexDia]))
            resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
        }
        else {
            resultados.push(new Date(ano, feriado[indexMes], feriado[indexDia]))
            resultados.push(new Date(ano-1, feriado[indexMes], feriado[indexDia]))
        }
    })

    return resultados
}

function calculaFeriados(parametro) {
    const interDiasPascoaQuartaSanta = 4,
        interDiasPascoaQuintaSanta = 3,
        interDiasPascoaSextaPaixao = 2,
        interDiasPascoaSegundaCarnaval = 48,
        interDiasPascoaTercaCarnaval = 47,
        interDiasPascoaQuartaCinzas = 46,
        interDiasPascoaCorpus = 60

    let date = new Date(),
        ano = date.getFullYear(),
        fixos = FeriadosFixos(ano,parametro),
        pascoa = calculaPascoa(ano),
        pascoaMilleseconds = pascoa.valueOf(),
        datePascoa1 = new Date(pascoaMilleseconds),
        datePascoa2 = new Date(pascoaMilleseconds),
        datePascoa3 = new Date(pascoaMilleseconds),
        datePascoa4 = new Date(pascoaMilleseconds),
        datePascoa5 = new Date(pascoaMilleseconds),
        datePascoa6 = new Date(pascoaMilleseconds),
        datePascoa7 = new Date(pascoaMilleseconds),
        quartaSanta = new Date(datePascoa1.setDate(pascoa.getDate() - interDiasPascoaQuartaSanta)),
        quintaSanta = new Date(datePascoa2.setDate(pascoa.getDate() - interDiasPascoaQuintaSanta)),
        paixao = new Date(datePascoa3.setDate(pascoa.getDate() - interDiasPascoaSextaPaixao)),
        segundaCarnaval = new Date(datePascoa4.setDate(pascoa.getDate() - interDiasPascoaSegundaCarnaval)),
        tercaCarnaval = new Date(datePascoa5.setDate(pascoa.getDate() - interDiasPascoaTercaCarnaval)),
        quartaCinzas = new Date(datePascoa6.setDate(pascoa.getDate() - interDiasPascoaQuartaCinzas)),
        corpus = new Date (datePascoa7.setDate(pascoa.getDate() + interDiasPascoaCorpus)),
        variaveis = [segundaCarnaval, tercaCarnaval, quartaCinzas, quartaSanta, quintaSanta, paixao, pascoa, corpus],
        feriados = []

    fixos.forEach(e => {
        feriados.push(e)
    })
    variaveis.forEach(e => {
        feriados.push(e)
    })
    
    return feriados
}

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

function extrairDataPrazoFatalInput (prazoFatal) {
    let data = prazoFatal.split('/')
    return [data[0],Number(data[1])-1,data[2]]
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

function desativarAtualizacao() {
    cliente.compromisso.atualizar = false
}

function saveInfoCompromissos() {
    if (!state.functions.cadastroCompromisso.selecaodoTipodeCompromisso) {
        return
    }
    const descricaoTarefa = document.querySelector("#descricao"),
        optionUl = document.querySelector("#fdt-form > div:nth-child(6) > div:nth-child(1) > div > div > ul"),
        tipos = {
            "AUDIÊNCIA": "7",
            "PERÍCIA": "17",
            "RPV": "23",
            "ALVARÁ": "4",
            "PRECATÓRIO": "21"
        },
        tiposArray = Object.entries(tipos)
    let intimacaoId = "16"

    if (descricaoTarefa !== null) {
        descricaoTarefa.focus()
        descricaoTarefa.addEventListener('change', event => {
            event.target.value = event.target.value.toUpperCase()
            let tarefaIdentificada,
                indexTipoTarefa
            
            if (optionUl !== null) {

                for (const [key, value] in tiposArray) {
                    indexTipoTarefa = removeAcentuacaoString(event.target.value).search(removeAcentuacaoString(tiposArray[key][0]))
                    tarefaIdentificada = (indexTipoTarefa == 0)
                    if (tarefaIdentificada) {
                        intimacaoId = tiposArray[key][1]
                    }
                }

                optionUl.children[intimacaoId].children[0].click()
            }
        })
    }

}

function getIdCliente(url) {
    const indiceCliente = url.search("idPR=")
    return url.slice(indiceCliente+5)
}

function submitPesquisaProcesso() {
    const subBtn = document.querySelector("#fdt-form > div:nth-child(6) > div:nth-child(4) > input") || document.querySelector("#fdt-form > div:nth-child(4) > div:nth-child(3) > input")
    subBtn.click()
}

function addEventoPasteProcesso (processoInput) {
    processoInput.addEventListener('paste', () => {
        setTimeout(() => {
            processoInput.value = removeCaracteresProcesso(processoInput.value)
            submitPesquisaProcesso()
        }, 10);
    })
}

function removeCaracteresProcesso(numeroProcesso) {
    
    let processoFormatado = ''

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for (let index = 0; index < numeroProcesso.length; index++) {
        if (isNumber(numeroProcesso[index]))
            processoFormatado += numeroProcesso[index]
    }

    return processoFormatado
}

function formataNumProcesso () {
    if (!state.functions.abaCadastrodeProcesso.autoFormatNumProcesso) {
        return
    }
    const processoInput = document.querySelector("#bsAdvProcessosTexto"),
        processoInputCad = document.querySelector("#numero")
    
    
    if (processoInput !== null) {
        addEventoPasteProcesso(processoInput)
    }
    if (processoInputCad !== null) {
        processoInputCad.addEventListener('change', event => {
                event.target.value = removeCaracteresProcesso(event.target.value)
        })
    }
}

function habilitarEdicaoNumeroProcesso() {
    if (!state.functions.abaCadastrodeProcesso.alteracaoNumeroProcesso) {
        return
    }
    const processoInputCad = document.querySelector("#numero")

    processoInputCad.readOnly = false
    processoInputCad.style = ""
}

function selectRespExec (adv) {
    const responsavelSelect = document.querySelector("#fdt-form > div:nth-child(15) > div:nth-child(1) > div > div > ul"),
        executorSelect = document.querySelector("#fdt-form > div:nth-child(15) > div:nth-child(2) > div > div > ul")
    for (let index = 0; index < responsavelSelect.children.length; index++) {
        if (responsavelSelect.children[index].innerText.trim() == adv.responsavel.trim()) 
            responsavelSelect.children[index].children[0].click()
        if (responsavelSelect.children[index].innerText.trim() == adv.executor.trim())
            executorSelect.children[index].children[0].click()
    }
}

function createListaTarefas () {
    const divtarefa = document.querySelector('#divTipoTarefaNormal'),
        div = document.createElement('div'),
        h1 = document.createElement('h3'),
        h2 = document.createElement('h3'),
        p1 = document.createElement('p'),
        p3 = document.createElement('p'),
        p2 = document.createElement('p'),
        p4 = document.createElement('p'),
        p5 = document.createElement('p'),
        p6 = document.createElement('p')
    
    divtarefa.style.zIndex = 10
    divtarefa.style.position = 'relative'
    
    div.style.position = 'absolute'
    div.style.right = '5%'
    div.style.top = '0px'
    div.style.textAlign = 'center'
    div.style.background = 'dimgray'
    div.style.borderRadius = '5px'
    div.style.color = 'white'
    div.setAttribute('id','contactdiv')
    
    p1.innerHTML = `Local atendido:`
    p3.innerHTML = `${cliente.cliente.localAtendido}`
    p2.innerHTML = `Cidade do cliente:`
    p4.innerHTML = `${cliente.cliente.cidade}`
    p5.innerHTML = `Parceiro:`
    p6.innerHTML = `${cliente.cliente.parceiro}`
    
    div.appendChild(h1)
    div.appendChild(p1)
    div.appendChild(p3)
    div.appendChild(p2)
    div.appendChild(p4)
    div.appendChild(p5)
    div.appendChild(p6)
    div.appendChild(h2)
    divtarefa.appendChild(div)
    
    h1.innerHTML = 'INFO CLIENTE'
    h2.innerHTML = 'TAREFAS ADM'

    const titles = [h1, h2]

    titles.forEach(e => {
        e.style.background = 'whitesmoke'
        e.style.padding = '5px'
        e.style.textAlign = 'center'
        e.style.fontStyle = 'bold'
        e.style.borderRadius = '5px'
        e.style.top = '0px'
        e.style.color = 'dimgray'
    })
}

function addListaTarefas(adm,data) {
    const ano = new Date().getFullYear(),
        [diaData, mesData, anoData] = data,
        date = `${diaData}/${mesData}/${anoData}`,
        div = document.querySelector('#contactdiv'),
        p1 = document.createElement('p'),
        [id, nome, interiores, datasViagem, contagemTarefas] = adm
    
    p1.innerHTML = `${nome.slice(0,nome.search(' '))}: ${contagemTarefas}`
    p1.style.color = 'white'
    p1.dataset.colaborador = nome
    p1.style.cursor = 'pointer'

    if (datasViagem !== null) {
        for (let index = 0; index < datasViagem.length; index++) {
            if (date == `${datasViagem[index]}/${ano}`) 
                p1.style.color = 'yellow'
        }
    }

    const defaultColor = p1.style.color

    div.appendChild(p1)

    p1.addEventListener('mouseenter', event => {
        event.target.style.color = 'gray'
    })

    p1.addEventListener('mouseleave', event => {
        event.target.style.color = defaultColor
    })

    p1.addEventListener('click', event => {
        let tarefaForEstancia = event.target.dataset.colaborador.search('SANDOVAL') == 0,
            respExec = {}

        if (tarefaForEstancia) {
            respExec = {responsavel: event.target.dataset.colaborador, executor: event.target.dataset.colaborador}
        } else {
            respExec = {responsavel: 'JULIANO OLIVEIRA DE SOUZA', executor: event.target.dataset.colaborador}
        }

        selectRespExec(respExec)
    })
}

async function getTarefasAdm(element,data){ 
    let idExecutor = element[0]

    // uso da API para fornecer acesso a realizar requests ao servidor
    let xhttp = new XMLHttpRequest();
    // esta função é chamado sempre que o atributo readyState sofre alteração
    xhttp.onreadystatechange = function() {
        // readyState = 4   - referente a request concluida
        // status     = 200 - referente ao status code http 'OK'
        if (this.readyState == 4 && this.status == 200) {
            // responsável por coletar a resposta. 
            let response  = this.responseText
            // preenchimento do resultado no HTML
            let parser = new DOMParser()
            let doc = parser.parseFromString(response,'text/html')
            let tarefas = doc.documentElement.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')
            let contador = 0
            tarefas.forEach(e => {
                if (e.children[2] != null) {
                    if ((e.children[2].innerText.match("[0-9]*")[0].length >= 12) && !(e.children[3].innerText.search('Acompanhar') == 0)) {
                        contador++
                    }
                }
            })
            element[4] = contador
            addListaTarefas(element,data)
        }

        // Responsável por tratar o retorno que não for bem sucedido
        if (this.readyState == 4 && this.status !== 200){
            console.log('Data not found!') 
        }
    }
    // URL
    let url = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default.asp'

    // configuração para request
    xhttp.open("POST", url, true)
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    // envio da request
    xhttp.send(`bsAdvTarefas=s&bsAdvTarefasTecnica=&bsAdvTarefasDe=${data[0]}%2F${data[1]}%2F${data[2]}&bsAdvTarefasAte=${data[0]}%2F${data[1]}%2F${data[2]}&bsAdvTarefasTitulo=&bsAdvTarefasTipo=&bsAdvTarefasStatus=p&bsAdvTarefasAgendada=&bsAdvTarefasResponsavel=&bsAdvTarefasExecutor=${idExecutor}&bsAdvTarefasCompromisso=&bsAdvTarefasCliente=&bsAdvTarefasCpf=&filtrar=Filtrar`)
}


async function validaExecutorContatar () {
    let dataInput = document.querySelector('#dataParaFinalizacao')
    createListaTarefas()
    setTimeout(async () => {
        let adm = await requererTarefasContatar(dataInput.value.split('/'))

        adm.forEach(e => {
            if (e[2] != null)
                if (e[2].length > 1) {
                    e[2].forEach(local => {
                        if (local == cliente.cliente.localAtendido) {
                            return e[1]
                        }
                    })
                }
                else
                    if (e[2] == cliente.cliente.localAtendido) {
                        return e[1]
                    }
        })
        let min = adm[0][3]
        for (let index = 1; index < adm.length-1; index++) {
            if (min > adm[index][3]) {
                min = adm[index][3]
            } 
        }
        return adm
    }, 100)
    
    async function requererTarefasContatar(data) {
        let adm = []

        //Última atualização: 07/08/2023
        // Padrão para data das viagens: ['DD/MM']
        const viagemAsley = null,
            viagemRobert = null,
            viagemHenrique = null,
            viagemLucas = null,
            parceiros = ['ELIZEU ( PARCEIRO)','MARIA DO POV. PREGUIÇA','AGENOR (PARCEIRO)','ELIZANGELA ( PARCEIRA)','ERMINIO','AUGUSTO ( PARCEIRO)'],
            varaEstancia = ['7ª VARA FEDERAL', '1ª VARA CIVEL DE ESTÂNCIA', '2ª VARA CIVEL DE ESTÂNCIA', 'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE ESTÂNCIA', 'VARA DE ESTÂNCIA', 'VARA DO TRABALHO DE ESTÂNCIA'],
            idSandoval = 22,
            idAsley = 131,
            idCarlosH = 94,
            idMarcoR = 141,
            idYuriD = 161,
            idLucas = 199,
            idKaua = 196,
            idVinicius = 188,
            estancia = [
                [idSandoval,"SANDOVAL FILHO CORREIA LIMA FILHO",null,null,0]
            ],
            aracaju = [
                [idAsley,"ASLEY RODRIGO DE MELO LIMA",["CONDE/BA"],viagemAsley,0],
                [idCarlosH,"CARLOS HENRIQUE ESPASIANI",["CAPELA","JAPARATUBA"],viagemHenrique,0],
                [idKaua,"KAUÃ DE CARVALHO NASCIMENTO",["CARMOPÓLIS", "LOTEAMENTO JEOVA (BOTAFOGO)"],null,0],
                [idLucas,"LUCAS NATHAN NOGUEIRA DA SILVA ",["ESTANCIA", "TOBIAS BARRETO"],viagemLucas,0],
                [idMarcoR,"MARCOS ROBERT DE MELO LIMA",null,viagemRobert,0],
                [idVinicius,"VINICIUS SOUSA BOMFIM",["PEDRINHAS"],null,0],
                [idYuriD,"YURI DIAS PEREIRA",null,null,0],
            ]

        if (((cliente.cliente.cidade == "ESTANCIA" && cliente.cliente.localAtendido == "ESTANCIA")) || ((parceiros.includes(cliente.cliente.parceiro)) && varaEstancia.includes(cliente.processo.vara)))
            estancia.forEach(e => {
                adm.push(e)
            })
        else {
            if (varaEstancia.includes(cliente.processo.vara)) {
                alert("Verificar executor manualmente!")
                aracaju.forEach(e => {
                    adm.push(e)
                })
                estancia.forEach(e => {
                    adm.push(e)
                })
            }
            else
                aracaju.forEach(e => {
                    adm.push(e)
                })
        }

        adm.forEach(async e => {
            getTarefasAdm(e,data)
        })

        return adm
    }
}

function converterParaTarefaAvulsa() {
    console.log(cliente);
    const idCompromisso = document.querySelector("#fdt-form > input[type=hidden]:nth-child(2)"),
        idProcesso = document.querySelector("#fdt-form > input[type=hidden]:nth-child(3)"),
        idCliente = document.querySelector("#fdt-form > input[type=hidden]:nth-child(4)")

    idCompromisso.value = ""
    idProcesso.value = ""
    idCliente.value = cliente.cliente.id
}

async function validaResponsavelTj (num) {
    const tarefa = cliente.compromisso.tipoTarefa,
        digito = Number(cliente.processo.origem[num-1]),
        financeiro = ["RPV TRF1 BRASÌLIA", "RPV TRF1 GOIÁS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTÂNCIA", "RPV TRF1 BAHIA", "PRECATÓRIO"],
        adm = ["CONTATAR CLIENTE","LEMBRAR CLIENTE"],
        sac = "SMS E WHATSAPP",
        natureza = cliente.processo.natureza

    if (tarefa === "RECEBIMENTO DE ALVARÁ" && cliente.compromisso.tarefaRestante === 1) {
        converterParaTarefaAvulsa()
        return {responsavel: "LUCIANA DOS SANTOS ARAUJO",executor: "LUCIANA LIMA REZENDE"}
    }

    if (financeiro.includes(tarefa) && cliente.compromisso.tarefaRestante === 2) {
        //let ehMateusFinanceiro = await getFinanceiro()
        //setFinanceiro(!ehMateusFinanceiro)
        return {responsavel: "LUCIANA DOS SANTOS ARAUJO",executor: "OVERLANDIA SANTOS MELO"} //ehMateusFinanceiro ? "MATEUS DOS SANTOS SILVA":"OVERLANDIA SANTOS MELO"
    }
    if (adm.includes(tarefa)){
        if (cliente.cliente.cidade === "ESTANCIA" && cliente.cliente.localAtendido === "ESTANCIA")
            return {responsavel: "SANDOVAL FILHO CORREIA LIMA FILHO",executor: "SANDOVAL FILHO CORREIA LIMA FILHO"}
        return {responsavel: "JULIANO OLIVEIRA DE SOUZA",executor: "JULIANO OLIVEIRA DE SOUZA"}
    }
    if (sac === tarefa)
        return {responsavel: "HENYR GOIS DOS SANTOS",executor: "LAYNE DA SILVA GOIS"}
    if (natureza === "TRABALHISTA")
        return {responsavel: "FELIPE PANTA CARDOSO",executor: "FELIPE PANTA CARDOSO"}
    if (natureza === "PREVIDENCIÁRIA")
        return {responsavel: "KEVEN FARO DE CARVALHO",executor: "KEVEN FARO DE CARVALHO"}
    if (natureza === "BANCÁRIO" || natureza === "CÍVEL" || natureza === "CONSUMIDOR" || natureza === "SERVIDOR PÚBLICO") {
        const ala = [0,1,8]
        const gabriel = [2,3,4,6]
        //const rodrigo = [5,7,9,4,6,8]
        if (tarefa != "SESSÃO DE JULGAMENTO" && tarefa.search("AUDIÊNCIA") != 0) {
            if (gabriel.includes(digito))
                return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "GABRIEL DAVILA FILGUEIRAS MELLONE"}
            if (ala.includes(digito))
                return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "ALÃ FEITOSA CARVALHO"}
        }
        return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "RODRIGO AGUIAR SANTOS"}
    }
}

async function validaResponsavelFederal (num) {
    const tarefa = cliente.compromisso.tipoTarefa,
        numeroProcesso = cliente.processo.origem,
        tarefasFinanceiro = ["RPV TRF1 BRASÌLIA", "RPV TRF1 GOIÁS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTÂNCIA", "RPV TRF1 BAHIA", "PRECATÓRIO"],
        tarefasAdm = ["CONTATAR CLIENTE","LEMBRAR CLIENTE"],
        tarefaSac = "SMS E WHATSAPP",
        secao = numeroProcesso.slice(num-4,num),
        secaoDFGO = ["3400","3501","3502","3506", "0015"],
        setimoDigito = Number(numeroProcesso[6]),
        digitoVerificador = numeroProcesso.slice(13,16),
        natureza = cliente.processo.natureza,
        indiceTarefa = ((cliente.processo.estado === 'DF') || (cliente.processo.estado === 'GO') ? 1 : 2)

    if ((tarefa === "RECEBIMENTO DE ALVARÁ") && (cliente.compromisso.tarefaRestante === 1)) {
        converterParaTarefaAvulsa()
        return {responsavel: "LUCIANA DOS SANTOS ARAUJO",executor: "LUCIANA LIMA REZENDE"}
    }

    if (tarefasFinanceiro.includes(tarefa) && cliente.compromisso.tarefaRestante === indiceTarefa) {
        //let ehMateusFinanceiro = await getFinanceiro()
        //setFinanceiro(!ehMateusFinanceiro)
        return {responsavel: "LUCIANA DOS SANTOS ARAUJO",executor: "OVERLANDIA SANTOS MELO"} //ehMateusFinanceiro ? "MATEUS DOS SANTOS SILVA":"OVERLANDIA SANTOS MELO"
    }

    if (tarefasAdm.includes(tarefa)) {
        //Tarefa contatar para BSB
        if (cliente.processo.estado === "DF" || cliente.processo.estado === "GO") {
            return {responsavel: "HENYR GOIS DOS SANTOS",executor: "LAYNE DA SILVA GOIS"}
        }

        //Tarefa contatar para escritório de Estância
        if(cliente.cliente.cidade === "ESTANCIA"  && cliente.cliente.localAtendido === "ESTANCIA") { 
            return {responsavel: "SANDOVAL FILHO CORREIA LIMA FILHO",executor: "SANDOVAL FILHO CORREIA LIMA FILHO"}
        }

        //Tarefa contatar para demais localidades
        return {responsavel: "JULIANO OLIVEIRA DE SOUZA",executor: "JULIANO OLIVEIRA DE SOUZA"} 
    }

    if (tarefaSac === tarefa) { //Tarefas para o SAC
        return {responsavel: "HENYR GOIS DOS SANTOS",executor: "LAYNE DA SILVA GOIS"}
    }

    if ((digitoVerificador === "520" || natureza === "TRABALHISTA") || (natureza === "SERVIDOR PÚBLICO" && cliente.processo.responsavel === "VICTOR HUGO SOUSA ANDRADE")) {  //Processos Trabalhistas TRT20
        return {responsavel: "FELIPE PANTA CARDOSO",executor: "FELIPE PANTA CARDOSO"}
    }

    if (digitoVerificador === "401" || secaoDFGO.includes(secao)) { // Processos do TRF1
        let varasDF = ["23ª VARA FEDERAL BRASÍLIA", "24ª VARA FEDERAL DE BRASÍLIA", "25ª VARA FEDERAL DE BRASÍLIA", "26ª VARA FEDERAL DE BRASÍLIA", "27ª VARA FEDERAL DE BRASÍLIA", "23ª VARA FEDERAL", "24ª VARA FEDERAL", "25ª VARA FEDERAL", "26ª VARA FEDERAL", "27ª VARA FEDERAL", "BRASILIA", "1ª VARA FEDERAL CÍVEL SJGO", "TJ GOIÁS", "VARA FEDERAL DA SSJ LUZIÂNIA-GO", "VARA DE ÁGUAS LINDAS DE GOIÁS", "VARA FEDERAL DE RIO VERDE-GO", "VARA FEDERAL SJDF"]
        
        if ((cliente.processo.estado === "DF" || cliente.processo.estado === "GO")) {
            if (!varasDF.includes(cliente.processo.vara)) {
                alert('Atenção: Confirme o responsável e executor da tarefa!')
            }
            let bruno = [0,1,2]
            if (bruno.includes(setimoDigito) || tarefa.search("AUDIÊNCIA") === 0)
                return {responsavel: "BRUNO PRADO GUIMARAES",executor: "BRUNO PRADO GUIMARAES"}
            return {responsavel: "BRUNO PRADO GUIMARAES",executor: "PAULO VICTOR SANTANA TEIXEIRA"}
        }
        
        if (cliente.processo.estado === "BA") {
            return {responsavel: "LAIS PEREIRA MORAES",executor: "LAIS PEREIRA MORAES"}
        }

        return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
    }

    if (natureza === "PREVIDENCIÁRIA") {
        if (digitoVerificador === "403") { //Processos do TRF3
            return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
        }

        if (digitoVerificador === "405" && numeroProcesso.search('080') === 0) { //Processos do TRF5
            if (cliente.processo.merito === "MANDADO DE SEGURANÇA") {
                if (setimoDigito <= 4) {
                    return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"} //"FERNANDO HENRIQUE BARBOZA NASCIMENTO"
                }

                return {responsavel: "DIEGO MELO SOBRINHO",executor: "ITALO DE ANDRADE BEZERRA"}
            }

            return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
        }

        else {
            if (secao === "8500") { //Processos da seção de Aracaju
                if (setimoDigito < 3) {
                    return {responsavel: "KEVEN FARO DE CARVALHO",executor: "KEVEN FARO DE CARVALHO"}
                }

                const responsavel = function responsavel () {
                    // Verifica se há um valor armazenado no localStorage para o índice atual
                    if (!localStorage.getItem('currentIndex')) {
                        localStorage.setItem('currentIndex', '0')
                    }
    
                    // Array com os elementos que serão alternados
                    const elementos = ["KEVEN FARO DE CARVALHO", "FERNANDO HENRIQUE BARBOZA NASCIMENTO", "ITALO DE ANDRADE BEZERRA"]
    
                    // Obtém o índice atual do localStorage e converte para número
                    let currentIndex = parseInt(localStorage.getItem('currentIndex'))
    
                    // Obtém o elemento atual do array com base no índice atual
                    const elementoAtual = elementos[currentIndex]
    
                    // Incrementa o índice atual para apontar para o próximo elemento
                    currentIndex = (currentIndex + 1) % elementos.length
    
                    // Armazena o novo índice atual no localStorage
                    localStorage.setItem('currentIndex', currentIndex.toString());
    
                    return elementoAtual
    
                }

                //const advogado = responsavel()
                
                // Retorna o elemento atual
                //return {responsavel: advogado,executor: advogado}

                return {responsavel: "MARCUS VINICIUS DE SOUZA MORAIS",executor: "MARCUS VINICIUS DE SOUZA MORAIS"}
            }
            if (secao === "8501") //Processos da seção de Itabaiana
                return {responsavel: "LAIS PEREIRA MORAES",executor: "LAIS PEREIRA MORAES"}
            if (secao === "8502") { //Processos da seção de Estância
                if (setimoDigito < 3)
                    return {responsavel: "KEVEN FARO DE CARVALHO",executor: "KEVEN FARO DE CARVALHO"}
                return {responsavel: "SARA GONÇALVES PINHEIRO",executor: "SARA GONÇALVES PINHEIRO"}
            }
            if (secao === "8503") //Processos da seção de Lagarto
                return {responsavel: "SARA GONÇALVES PINHEIRO",executor: "SARA GONÇALVES PINHEIRO"}
            if (secao === "8504")//Processos da seção de Propriá
                return {responsavel: "LAIS PEREIRA MORAES",executor: "LAIS PEREIRA MORAES"}
            return null
        }
    }
    if (natureza === "CÍVEL" || natureza === "CONSUMIDOR" || natureza === "SERVIDOR PÚBLICO") //Processos de natureza cível
        return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "RODRIGO AGUIAR SANTOS"}
    if (natureza === "BANCÁRIO") //Processos de natureza bancária
        return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "RODRIGO AGUIAR SANTOS"}
}

async function validaEsferaProcesso() {
    let caracteresProcesso = cliente.processo.origem.length
    let adv
    if (caracteresProcesso === 12) {
        adv = await validaResponsavelTj(caracteresProcesso)
        if (adv !== null)
            selectRespExec(adv)
    } else if (caracteresProcesso === 15 || caracteresProcesso === 17 || caracteresProcesso === 20) {
        adv = await validaResponsavelFederal(caracteresProcesso)
        if (adv !== null)
            selectRespExec(adv)
    } else
        console.log("Erro no cadastro do número do processo")
}

function validaTipoIntimacao(txt) {
    let p1 = txt.search("PERÍCIA")
    const ehPericia = (p1 === 0)

    if (txt === "RPV") {
        if (cliente.processo.cidade === "ESTANCIA")
            return "RPV TRF5 ESTÂNCIA"
        if (cliente.processo.estado === "DF")
            return "RPV TRF1 BRASÌLIA"
        if (cliente.processo.estado === "GO")
            return "RPV TRF1 GOIÁS"
        if (cliente.processo.cidade === "BA")
            return "RPV TRF1 BAHIA"
        return "RPV TRF5 ARACAJU"
    }
    
    if (txt === "PAUTA" || txt === "RETIRADO DE PAUTA")
        return "SESSÃO DE JULGAMENTO"

    if (txt === "ALVARÁ")
        return "RECEBIMENTO DE ALVARÁ"

    if (txt === "PRECATÓRIO")
        return "RECEBIMENTO DE PRECATÓRIO"
    
    if (txt === "AUDIÊNCIA DE CONCILIAÇÃO")
        return "AUDIÊNCIA CONCILIATÓRIA"
    
    if (txt === "AUDIÊNCIA INICIAL")
        return "AUDIÊNCIA INAUGURAL"
    
    if (txt === "PLANILHA")
        return "CÁLCULOS"
    
    if (txt === "DADOS PERICIA SOCIAL" || txt === "DADOS COMPLEMENTARES" || txt === "EMENDA" || txt === "EMENDA A INICIAL" || txt === "EMENDAR A INICIAL" || txt === "EMENDAR À INICIAL" || txt === "EMENDA À INICIAL")
        return "EMENDAR"
    
    if (txt === "PEDIDO DE VISTAS" || txt === "PEDIDO DE VISTA")
        return "MANIFESTAÇÃO"

    if (ehPericia)
        return "CONTATAR CLIENTE"

    return txt
}

function desmarcarCaixaTarefaSequencia() {
    let box = document.querySelector("#incluirOutra")
    box.checked = false
}

function proximaTarefa (descricaoTarefa) {
    const tipoAudiencia = ["INSTRUÇÃO", "UNA", "INICIAL", "INAUGURAL"],
        audiencia = ["CONTATAR CLIENTE","SMS E WHATSAPP","LEMBRAR CLIENTE"],
        audienciaShort = ["CONTATAR CLIENTE","SMS E WHATSAPP"],
        instrucao = ["CONTATAR CLIENTE","SMS E WHATSAPP","LEMBRAR CLIENTE", "ANÁLISE"],
        instrucaoShort = ["CONTATAR CLIENTE","SMS E WHATSAPP","ANÁLISE"],
        pericia = ["SMS E WHATSAPP","LEMBRAR CLIENTE"],
        periciaShort = ["SMS E WHATSAPP"],
        periciaDF = ["SMS E WHATSAPP","LEMBRAR CLIENTE","ATO ORDINATÓRIO"],
        periciaDFShort = ["SMS E WHATSAPP","ATO ORDINATÓRIO"],
        financeiro = ["RECEBIMENTO DE ALVARÁ","RPV TRF1 BAHIA", "RPV TRF1 BRASÌLIA", "RPV TRF1 GOIÁS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTÂNCIA","PRECATÓRIO"],
        emendar = "CONTATAR CLIENTE",
        sequencia = cliente.compromisso.tarefaSequencia,
        compromisso = cliente.compromisso.tipoCompromisso,
        cont = cliente.compromisso.tarefaRestante
    let achou = false,
        i

    if (cliente.compromisso.tarefaSequencia === cliente.compromisso.tarefaRestante) {
        cliente.compromisso.descricao = descricaoTarefa.value
    }

    tipoAudiencia.forEach(e => {
        if (compromisso.search(e) > -1) {
            achou = true
        }
    })

    if (compromisso.search('AUDIÊNCIA') === 0 && cont > -1) {
        if (!achou) {
            if (cliente.compromisso.tarefaSequencia < 4) {
                i = audienciaShort.indexOf(cliente.compromisso.tipoTarefa)
                if (i <= audienciaShort.length) {
                    cliente.compromisso.tipoTarefa = audienciaShort[i+1]
                    return cont-1
                }
            }
            else {
                i = audiencia.indexOf(cliente.compromisso.tipoTarefa)
                if (i <= audiencia.length) {
                    cliente.compromisso.tipoTarefa = audiencia[i+1]
                    return cont-1
                }
            }
        }
        else {
            if (cliente.compromisso.tarefaSequencia < 5) {
                i = instrucaoShort.indexOf(cliente.compromisso.tipoTarefa)
                if (i <= instrucaoShort.length) {
                    cliente.compromisso.tipoTarefa = instrucaoShort[i+1]
                    return cont-1
                }
            }
            else {
                i = instrucao.indexOf(cliente.compromisso.tipoTarefa)
                if (i <= instrucao.length) {
                    cliente.compromisso.tipoTarefa = instrucao[i+1]
                    return cont-1
                }
            }
        }
    }
    else {
        if (compromisso.search('PERÍCIA') === 0 && cont > -1) {
            if (cliente.processo.estado === "DF" || cliente.processo.estado === "GO") {
                if (cliente.compromisso.tarefaSequencia < 4) {
                    i = periciaDFShort.indexOf(cliente.compromisso.tipoTarefa)
                    if (i <= periciaDFShort.length) {
                        cliente.compromisso.tipoTarefa = periciaDFShort[i+1]
                        return cont-1
                    }
                }
                else {
                    i = periciaDF.indexOf(cliente.compromisso.tipoTarefa)
                    if (i <= periciaDF.length) {
                        cliente.compromisso.tipoTarefa = periciaDF[i+1]
                        return cont-1
                    }
                }
            }
            else {
                if (cliente.compromisso.tarefaSequencia < 3) {
                    i = periciaShort.indexOf(cliente.compromisso.tipoTarefa)
                    if (i <= periciaShort.length) {
                        cliente.compromisso.tipoTarefa = periciaShort[i+1]
                        return cont-1
                    }
                }
                else {
                    i = pericia.indexOf(cliente.compromisso.tipoTarefa)
                    if (i <= pericia.length) {
                        cliente.compromisso.tipoTarefa = pericia[i+1]
                        return cont-1
                    }
                }
            }
        }
        else {
            if (sequencia === 2 && cont > 1 && financeiro.includes(cliente.compromisso.tipoTarefa)) {
                return cont-1
            }

            if (sequencia === 2 && cont > 1 && !(financeiro.includes(cliente.compromisso.tipoTarefa))) {
                cliente.compromisso.tipoTarefa = emendar
                return cont-1
            }
            if (sequencia === 2 && cont === 1 && !(financeiro.includes(cliente.compromisso.tipoTarefa))) {
                cliente.compromisso.tipoTarefa = ''
            }
            return cont
        }
    }
}

function mostrarFormTarefaColetivo () {
    const divTarefa = document.createElement('div')

    divTarefa.style.width = '100px'
    divTarefa.style.height = '100px'
    divTarefa.style.background = 'white'
}


function removeEventGravar () {
    const gravarBtn = document.querySelector('#btnGravar')

    gravarBtn.addEventListener('click', event => {
        event.preventDefault()
    })

    mostrarFormTarefaColetivo()
}

async function submitAtualizarTarefa (descricaoTarefa) {
    const gravarBtn = document.querySelector("#btnGravar")
    //removeEventGravar()
    gravarBtn.addEventListener('click', async () => {
        if (submit) {
            submit = false
            cliente.compromisso.tarefaRestante = await proximaTarefa(descricaoTarefa)
            desativarAtualizacao()
            setCliente(cliente)
        }
    })
}

function existeOrigem() {
    if (cliente.processo.dependente !== null)
        if (cliente.processo.dependente.length > 0)
            return `${cliente.processo.dependente} (ORIGEM ${cliente.processo.origem})`
    return cliente.processo.origem
}

function atualizaHora (horarioInicial) {
    const duracaoAudicencia = 2
    let hora = Number(horarioInicial.value.slice(0,2)) + duracaoAudicencia

    if (!horarioInicial.value.length)
        horarioInicial.value = "00:00"

    if (hora == 24)
        hora = '00'
    else if (hora == 25)
        hora = '01'
    else if (hora == 26)
        hora = '02'
    else if (hora < 10) {
        let num = hora
        hora = `0${num}`
    }
    return `${hora}:${horarioInicial.value.slice(3)}`
}

function atualizaDescricao (descricaoTarefa,horarioInicial,horarioFinal,local) {
    let loc = cliente.compromisso.tipoTarefa.search(" ")

    if (loc < 0)
        loc = cliente.compromisso.tipoTarefa.length   

    const validacaoTarefa = removeAcentuacaoString(cliente.compromisso.tipoTarefa.slice(0, loc)),
        endereço = getEndereço(local),
        processo = existeOrigem()
        
    horarioFinal.value = atualizaHora(horarioInicial)

    if (cliente.compromisso.descricao !== null && removeAcentuacaoString(validacaoTarefa) != "ANALISE" && removeAcentuacaoString(cliente.compromisso.tipoTarefa) != "ATO ORDINATORIO" && cliente.compromisso.tipoCompromisso != "EMENDAR") {
        descricaoTarefa.value = cliente.compromisso.descricao
    }
    else {
        if (validacaoTarefa == "AUDIENCIA" && cliente.compromisso.tarefaSequencia == cliente.compromisso.tarefaRestante) {
            descricaoTarefa.value = `${processo} - ${cliente.compromisso.tipoCompromisso} DE ${cliente.cliente.nome} ${cliente.cliente.cpf} X ${cliente.processo.reu.length > 0 ? cliente.processo.reu : '_______'}, NO DIA ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, LOCAL: ${endereço}`
        }
        else
            if (removeAcentuacaoString(cliente.compromisso.tipoCompromisso).search('PERICIA') == 0 && cliente.compromisso.tarefaRestante > 1) {
                    let perito = document.querySelector('#inputPerito')
                    descricaoTarefa.value = `${processo} - ${cliente.compromisso.tipoCompromisso} DE ${cliente.cliente.nome} ${cliente.cliente.cpf}, NO DIA ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, PERITO: ${perito != null ? perito.value : ''}, LOCAL: ${endereço}`
            }
            else
                if (removeAcentuacaoString(cliente.compromisso.tipoTarefa) == "ATO ORDINATORIO" && removeAcentuacaoString(cliente.compromisso.tipoCompromisso).search('PERICIA') == 0) {
                    descricaoTarefa.value = `${processo} - ATO ORDINATÓRIO (PERÍCIA DESIGNADA)`
                }
                else
                    if ((validacaoTarefa == "ANALISE") && removeAcentuacaoString(cliente.compromisso.tipoCompromisso).search('AUDIENCIA') == 0) {
                        descricaoTarefa.value = `${processo} - VERIFICAR NECESSIDADE DE TESTEMUNHAS`
                    }
                    else
                        if ((cliente.compromisso.tipoCompromisso == "EMENDAR") && (cliente.compromisso.tarefaRestante == 1)) {
                            descricaoTarefa.value = `${processo} - `
                        }
                        else {
                            descricaoTarefa.value = `${processo} - ${cliente.compromisso.tipoCompromisso}`
                        }
    }
}

function selectTipoIntimacao(selectTipoIntimacaoInput, optionLi) {
    let achou = false,
        indiceManifestação,
        tipoIntimacao = cliente.compromisso.tipoTarefa,
        space = (tipoIntimacao.search(" "))

    for (let i = 0; i < selectTipoIntimacaoInput.options.length; i++) {

        let n = removeAcentuacaoString(selectTipoIntimacaoInput.options[i].innerText).toUpperCase().search(removeAcentuacaoString(tipoIntimacao).toUpperCase()),
            nIntimacao = removeAcentuacaoString(selectTipoIntimacaoInput.options[i].innerText).toUpperCase().search(("MANIFESTACAO"))

        if (nIntimacao == 0)
            indiceManifestação = i

        if (n == 0) {
            optionLi.children[i].children[0].click()
            achou = true
            return 0
        }

    }
    
    for (let i = 0; i < selectTipoIntimacaoInput.options.length; i++) {
        let n = removeAcentuacaoString(selectTipoIntimacaoInput.options[i].innerText).toUpperCase().search(removeAcentuacaoString(tipoIntimacao.slice(0,space)))

        if (n == 0) {
            optionLi.children[i].children[0].click()
            achou = true
            return 0
        }
    }
    
    if (!achou) {
        optionLi.children[indiceManifestação].children[0].click()
    }
}

function createInputDependente() {
    const txtDependente = document.createElement('b'),
        input = document.createElement('input'),
        divConteudo = document.querySelector(".alert-info")
    
    txtDependente.setAttribute('id','txtDependente')
    txtDependente.innerHTML = 'Processo dependente: '
    input.setAttribute('id','input_dependente')
    input.setAttribute('type','text')
    input.classList.add("form-control")
    input.style.display = 'inline'
    input.style.width = '40%'
    divConteudo.innerHTML += '<br>'
    divConteudo.appendChild(txtDependente)
    divConteudo.appendChild(input)

    input.addEventListener('input', event => {
        cliente.processo.dependente = removeCaracteresProcesso(event.target.value)
    })
}

function mostrarCamposPericia () {
    const tarefaNormal = document.querySelector('#divTipoTarefaNormal'),
        dataInput = document.querySelector('#divTipoTarefaNormal > div:nth-child(1) > div.col-sm-8'),
        horarioFinal = document.querySelector("#horarioFinal"),
        descricaoTarefa = document.querySelector("#descricao"),
        divRow2 = document.createElement('div'),
        divPerito = document.createElement('div'),
        labelPerito = document.createElement('label'),
        inputPerito = document.createElement('input'),
        divLocal = document.createElement('div'),
        labelLocal = document.createElement('label'),
        inputLocal = document.createElement('input'),
        divHorarioInicial = document.createElement('div'),
        labelHorarioInicial = document.createElement('label'),
        inputHorarioInicial = document.createElement('input')
    
    
    dataInput.setAttribute('class','form-group col-sm-4')
    divRow2.setAttribute('class','row')
    tarefaNormal.appendChild(divRow2)
    
    labelPerito.innerHTML = 'Perito(a): '
    divPerito.setAttribute('class','form-group col-sm-4')
    inputPerito.setAttribute('class','form-control')
    inputPerito.setAttribute('id','inputPerito')
    
    labelLocal.innerHTML = 'Local: '
    divLocal.setAttribute('class','form-group col-sm-4')
    inputLocal.setAttribute('class','form-control')
    
    labelHorarioInicial.innerHTML = 'Horário: '
    divHorarioInicial.setAttribute('class','form-group datepicker-hora col-sm-4')
    inputHorarioInicial.setAttribute('class','form-control')
    inputHorarioInicial.setAttribute('type','time')
    inputHorarioInicial.setAttribute('id','horarioInicial')

    dataInput.after(divLocal)
    divLocal.appendChild(labelLocal)
    divLocal.appendChild(inputLocal)
    
    inputLocal.addEventListener('input', () => {
        inputLocal.value = inputLocal.value.toUpperCase()
        atualizaDescricao(descricaoTarefa, inputHorarioInicial,horarioFinal, inputLocal)
    })

    divRow2.appendChild(divHorarioInicial)
    divHorarioInicial.appendChild(labelHorarioInicial)
    divHorarioInicial.appendChild(inputHorarioInicial)
    inputHorarioInicial.value = '00:00'
    inputHorarioInicial.addEventListener('input',() => {
        inputHorarioInicial.value = inputHorarioInicial.value.toUpperCase()
        atualizaDescricao(descricaoTarefa, inputHorarioInicial,horarioFinal, inputLocal)
    })

    divRow2.appendChild(divPerito)
    divPerito.appendChild(labelPerito)
    divPerito.appendChild(inputPerito)
    inputPerito.addEventListener('input',() => {
        inputPerito.value = inputPerito.value.toUpperCase()
        atualizaDescricao(descricaoTarefa, inputHorarioInicial,horarioFinal, inputLocal)
    })
}

function loadInfo () {
    if (!state.functions.cadastroTarefa.AutoPreenchimentoTarefasIntimacoes) {
        return
    }

    const selectTipoIntimacaoInput = document.querySelector("#idTipoTarefa"),
        descricaoTarefa = document.querySelector("#descricao"),
        optionLi = document.querySelector(`#fdt-form > div:nth-child(10) > div.form-group.col-sm-8 > div > div > ul`),
        horarioInicial = document.querySelector("#horarioInicial"),
        horarioFinal = document.querySelector("#horarioFinal"),
        local = document.querySelector("#onde"),
        processoDependente = document.querySelector("#input_dependente")

    descricaoTarefa.addEventListener('change', event => {
        event.target.value = event.target.value.toUpperCase()
    })

    local.addEventListener('input', event => {
        event.target.value = event.target.value.toUpperCase()
    })
    
    for (let index = 0; index < optionLi.children.length; index++) {
        optionLi.children[index].children[0].addEventListener('click', () => {

            const eventTargets = [horarioInicial,local,processoDependente],
                contactdiv = document.querySelector("#contactdiv")

            validaEsferaProcesso()

            setTimeout(() => {

                const arrayAudiencias = ["AUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO", "AUDIÊNCIA UNA", "AUDIÊNCIA DE INSTRUÇÃO", "AUDIÊNCIA INICIAL", "AUDIÊNCIA INAUGURAL"],
                    parametros = {
                        tarefaContatar: 1,
                        tarefaAdvogado: 2
                    }

                const ehTarefaParaAdmOuSac = ((cliente.compromisso.tipoTarefa == "CONTATAR CLIENTE") || (cliente.compromisso.tipoTarefa == "LEMBRAR CLIENTE") || (cliente.compromisso.tipoTarefa == "SMS E WHATSAPP")),
                    ehAudiencia = (arrayAudiencias.includes(cliente.compromisso.tipoCompromisso))

                if (cliente.compromisso.tipoCompromisso.search('PERÍCIA') == 0 && cliente.compromisso.tarefaSequencia == cliente.compromisso.tarefaRestante)
                    mostrarCamposPericia()

                calcularDataTarefa( (ehTarefaParaAdmOuSac || ehAudiencia) ? parametros.tarefaContatar : parametros.tarefaAdvogado)

                if (cliente.compromisso.atualizar) {
                    const contagem = contarTarefas()
                    cliente.compromisso.tarefaSequencia = contagem
                    cliente.compromisso.tarefaRestante = contagem
                }
            }, 50);
            if ((horarioInicial.value.length == 0 || local.value.length == 0))
                atualizaDescricao(descricaoTarefa, horarioInicial,horarioFinal, local)

            eventTargets.forEach(element => {
                if (element !== null)
                    element.addEventListener(element == horarioInicial ? 'blur':'input', () => {
                        atualizaDescricao(descricaoTarefa, horarioInicial, horarioFinal, local)
                    })
            })

            if (contactdiv != null) {
                contactdiv.parentNode.removeChild(contactdiv)
            }

            if ((optionLi.children[index].children[0].children[0].innerText.toUpperCase() == "CONTATAR CLIENTE" || optionLi.children[index].children[0].children[0].innerText.toUpperCase() == "LEMBRAR CLIENTE") && (cliente.processo.estado != "DF" || cliente.processo.estado != "GO")) {
                validaExecutorContatar()
            }

            submitAtualizarTarefa(descricaoTarefa)

            if (cliente.compromisso.tarefaRestante <= 1) {
                desmarcarCaixaTarefaSequencia()
            }
        })
    }

    selectTipoIntimacao(selectTipoIntimacaoInput,optionLi)
}

function contarTarefas(tipoCompromisso = cliente.compromisso.tipoCompromisso) {
    let contagem
    const contDois = ["EMENDAR","DADOS PERÍCIA SOCIAL","DADOS COMPLEMENTARES","ALVARÁ","RPV","PRECATÓRIO"],
        contTres = "PERÍCIA",
        contQuatro = ["AUDIÊNCIA DE CONCILIAÇÃO", "AUDIÊNCIA CONCILIATÓRIA", "AUDIÊNCIA DE INTERROGATÓRIO"],
        contCinco = ["AUDIÊNCIA INAUGURAL", "AUDIÊNCIA INICIAL","AUDIÊNCIA DE INSTRUÇÃO", "AUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO", "AUDIÊNCIA UNA"]
    
    if (contDois.includes(tipoCompromisso)){
        contagem = 2
    } else if (tipoCompromisso.search(contTres) == 0) {
        if (cliente.processo.estado == "DF" || cliente.processo.estado == "GO") {
            if (cliente.compromisso.semanas > 1)
                contagem = 4
            else
                contagem = 3
        }
        else {
            if (cliente.compromisso.semanas > 1)
                contagem = 3
            else
                contagem = 2
        }
    }
    else {
        if (contQuatro.includes(tipoCompromisso)){
            if (cliente.compromisso.semanas > 1)
                contagem = 4
            else
                contagem = 3

        }
        else {
            if (contCinco.includes(tipoCompromisso)){
                if (cliente.compromisso.semanas > 1)
                    contagem = 5
                else
                    contagem = 4
            }
            else
                contagem = 1
        }
    }
    return contagem
}

function separaTitulo(titulo) {
    
    const tipoCompromisso = titulo.slice(13, titulo.search("\n")),
        aux = titulo.slice(titulo.search("\n")+1),
        linhaDois = aux.slice(0,aux.search("\n")),
        tipoIntimacao = validaTipoIntimacao(tipoCompromisso),
        contagem = contarTarefas(tipoCompromisso)

    cliente.compromisso.tipoCompromisso = tipoCompromisso
    cliente.compromisso.tarefaSequencia = contagem
    cliente.compromisso.tarefaRestante = contagem
    cliente.compromisso.prazoInterno = linhaDois.slice(15,25)
    cliente.compromisso.prazoFatal = linhaDois.slice(49)
    cliente.compromisso.tipoTarefa = tipoIntimacao

    return cliente
}

function getIdCo () {
    const idCoInput = document.querySelector("#fdt-form > input[type=hidden]:nth-child(2)")

    const idCo = idCoInput.value

    if (idCo.length) {
        return idCo
    }

    return null
}

async function saveInfoTarefas() {
    
    if (cliente.compromisso.atualizar) {
        const titulo = document.querySelector(".alert-info")
        cliente.compromisso.id = getIdCo()
        cliente = separaTitulo(titulo.innerText)
        await setCliente(cliente)
    }
}

function focarInputProcesso() {
    const inputProcesso = document.querySelector("#bsAdvProcessosTexto")

    if (inputProcesso !== null) {
        inputProcesso.value = ""
        inputProcesso.focus()
    }
}

function extrairIDRequisicaoClienteHtml (response) {
    const btnVer = response.documentElement.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td.fdt-acao > div > div > a:nth-child(1)"),
        id = btnVer.href.slice(btnVer.href.search("idPK=")+5)

    cliente.processo.idDemaisEnvolvidos.push(id)
}

function extrairDadosRequisicaoClienteHtml(response) {

    const fichas = response.documentElement.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.fdt-ficha"),
        dadosPrincipais = fichas[0].innerText.split('\n'),
        localizacao = fichas[3].innerText.split('\n')
    
    dadosPrincipais.forEach(e => {
        if (e.search("Parceiro:") > -1) {
            cliente.cliente.parceiro = e.slice(e.search("Parceiro:")+10).toUpperCase()
        }
        if (e.search("Local atendido:") > -1)
            cliente.cliente.localAtendido = e.slice(e.search("Local atendido:")+16).toUpperCase()
    })

    localizacao.forEach(e => {
        if (e.search("Cidade:") > -1) {
            cliente.cliente.cidade = e.slice(e.search("Cidade:")+8).toUpperCase()
        }
        if (e.search("Estado:") > -1)
            cliente.cliente.estado = e.slice(e.search("Estado:")+8).toUpperCase()
    })

}

function extrairDadosRequisicaoProcessoHtml(response, gravarBtn) {
    const buttonsPainel = response.documentElement.querySelectorAll("a.fdt-icon"),
        linkClienteAjax = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/ficha.asp?idPK=",
        fichas = response.documentElement.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.fdt-ficha"),
        dadosObrigatorios = fichas[0].innerText.split('\n')

    let dadosPrincipais = () => {
        let achou = false
        for (let index = 0; index < fichas[2].children.length; index++) {
            if (fichas[2].children[index].innerText.search("Data da distribuição:") > -1)
                achou = true
        }

        if (achou)
            return fichas[2].innerText.split('\n')
        else
            return fichas[3].innerText.split('\n')
    }
    
    dadosObrigatorios.forEach(e => {
        if (e.search(" AÇÃO COLETIVA") > -1)
            cliente.processo.coletivo = true
        if (e.search("Cliente:") > -1) {
            let array = e.slice(e.search("Cliente:")+9).split("(")
            cliente.cliente.nome = array[0].toUpperCase()
            cliente.cliente.cpf = "(" + array[1]
        }
        if (e.search("Número:") > -1)
            cliente.processo.origem = e.slice(e.search("Número:")+8).toUpperCase()
        if (e.search("Nome do réu:") > -1)
            cliente.processo.reu = e.slice(e.search("Nome do réu:")+13).toUpperCase()
        if (e.search("Responsável pelo processo:") > -1)
            cliente.processo.responsavel = e.slice(e.search("Responsável pelo processo:")+27).toUpperCase()
    })

    dadosPrincipais().forEach(e => {
        if (e.search("Natureza da ação:") > -1)
            cliente.processo.natureza = e.slice(e.search("Natureza da ação:")+18).toUpperCase()
        if (e.search("Mérito da causa:") > -1)
            cliente.processo.merito = e.slice(e.search("Mérito da causa:")+17).toUpperCase()
        if (e.search("Cidade:") > -1)
            cliente.processo.cidade = e.slice(e.search("Cidade:")+8).toUpperCase()
        if (e.search("Estado:") > -1)
            cliente.processo.estado = e.slice(e.search("Estado:")+8).toUpperCase()
        if (e.search("Vara / Turma:") > -1)
            cliente.processo.vara = e.slice(e.search("Vara / Turma:")+14).toUpperCase()
    })

    buttonsPainel.forEach(e => {
        if (e.title === "Ficha do cliente") {
            const str = e.href.slice(e.href.search("idPK=")+5)
            const [idCliente, idProcesso] = str.split("&idPRorg=")

            cliente.cliente.id = idCliente
            cliente.processo.id = idProcesso

            console.log(cliente);
        }
    })

    ajax(2,linkClienteAjax, cliente.cliente.id, gravarBtn)
}

async function ajax (opt, link, id, gravarBtn) {

    let httpRequest
    const parser = new DOMParser()

    if (opt == 3)
        makeRequest("http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/default.asp")
    else
        makeRequest(`${link}${id}`)

    function makeRequest(url) {
      if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
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
        httpRequest.onreadystatechange = alertContents;
        if (opt != 3) {
            httpRequest.open('GET', url)
            httpRequest.send()
        }
        else {
            httpRequest.open('POST', url)
            httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            httpRequest.send(`bsAdvClientes=s&org=&idPR=&idCR=&idCP=&bsAdvClientesProspect=&bsAdvClientesTexto=&bsAdvClientesCPF=${id}&bsAdvClientesCNPJ=&bsAdvClientesGrupo=&bsAdvClientesSituacao=&bsAdvClientesEstado=&bsAdvClientesCidade=&bsAdvClientesNaturalUF=&bsAdvClientesNaturalCidade=&bsAdvClientesFornecedor=&bsAdvClientesLocalAtendido=&bsAdvClientesNascimentoDataDe=&bsAdvClientesNascimentoDataAte=&bsAdvClientesDataDe=&bsAdvClientesDataAte=&bsAdvClientesIncluidoPor=&bsAdvClientesProcessosStatus=&bsAdvClientesAtualizacaoDe=&bsAdvClientesAtualizacaoAte=&bsAdvClientesAtualizacaoCampo=&bsAdvClientesProcessosDataDe=&bsAdvClientesProcessosDataAte=&bsAdvClientesProcessosNatureza=&bsAdvClientesProcessosMerito=&bsAdvClientesProcessosSentenca=&bsAdvClientesINSSDe=&bsAdvClientesINSSAte=&bsAdvClientesINSSResponsavel=&bsAdvClientesINSSResultado=&bsAdvResponsavelPendencia=&bsAdvComoChegou=&filtrar=Filtrar`)
        }
    }
    
        function alertContents() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let doc = parser.parseFromString(httpRequest.responseText,'text/html')
                
                if (opt == 1) {
                    extrairDadosRequisicaoProcessoHtml(doc, gravarBtn)
                }
                else {
                    if (opt == 2)
                        extrairDadosRequisicaoClienteHtml(doc, gravarBtn)
                    else
                        extrairIDRequisicaoClienteHtml(doc, gravarBtn)
                }
                setCliente(cliente)
                gravarBtn.removeAttribute('disabled')
            } else {
                console.log('There was a problem with the request.')
            }
        }
    }
}

function formataData (dia,mes,ano) {
    if (mes < 10)
        mes = `0${mes}`
    if (dia < 10)
        dia = `0${dia}`
    return `${dia}/${mes}/${ano}`
}

function isFeriado (date,parametro) {
    const feriados = calculaFeriados(parametro)
    let feriado = false,
        ehFeriado

    for (let index = 0; index < feriados.length; index++) {
        ehFeriado = feriados[index].toDateString() == date.toDateString()
        if (ehFeriado) {
            feriado = true
            break
        }
    }

    return feriado
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
        i,
        condiction


    if (isProcessoCivel || isProcessoTrabalhista) {
        if (dataPub.value.length > 0) {
            const data = dataPub.value.split('/')
            dateFinal = new Date(data[2],Number(data[1])-1,Number(data[0]))
            dateInicial = new Date(data[2],Number(data[1])-1,Number(data[0]))
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
            cont = cont + 1
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
        }
        if (diasFatal === 5 && isProcessoTrabalhista) {
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

function createButtonPrazo() {
    if (!state.functions.cadastroCompromisso.mostrarBotoesAuxiliaresdeDias) {
        return
    }
    
    const dataPub = document.querySelector('#dataPublicacao'),
        prazoInicial = document.querySelector("#dataPrazoInterno"),
        prazoFinal = document.querySelector("#dataPrazoFatal"),
        divDataPublicacao = document.querySelector('#fdt-form > div:nth-child(7) > div:nth-child(2)'),
        divAuxiliar = document.createElement('div'),
        divCinco = document.createElement('div'),
        divOito = document.createElement('div'),
        divDez = document.createElement('div'),
        divQuinze = document.createElement('div'),
        buttonCinco = document.createElement('input'),
        buttonOito = document.createElement('input'),
        buttonDez = document.createElement('input'),
        buttonQuinze = document.createElement('input'),
        pCinco = document.createElement('p'),
        pOito = document.createElement('p'),
        pDez = document.createElement('p'),
        pQuinze = document.createElement('p')
    
    buttonCinco.setAttribute('id','button5')
    buttonOito.setAttribute('id','button8')
    buttonDez.setAttribute('id','button10')
    buttonQuinze.setAttribute('id','button15')
    pCinco.setAttribute('id','prazo5')
    pOito.setAttribute('id','prazo8')
    pDez.setAttribute('id','prazo10')
    pQuinze.setAttribute('id','prazo15')
    buttonCinco.setAttribute('class','btnPrazo')
    buttonCinco.setAttribute('value','05')
    buttonCinco.setAttribute('type','button')
    buttonOito.setAttribute('class','btnPrazo')
    buttonOito.setAttribute('value','08')
    buttonOito.setAttribute('type','button')
    buttonDez.setAttribute('class','btnPrazo')
    buttonDez.setAttribute('value','10')
    buttonDez.setAttribute('type','button')
    buttonQuinze.setAttribute('class','btnPrazo')
    buttonQuinze.setAttribute('value','15')
    buttonQuinze.setAttribute('type','button')
    divDataPublicacao.appendChild(divAuxiliar)
    divAuxiliar.appendChild(divCinco)
    divAuxiliar.appendChild(divOito)
    divAuxiliar.appendChild(divDez)
    divAuxiliar.appendChild(divQuinze)
    divCinco.appendChild(buttonCinco)
    divCinco.appendChild(pCinco)
    divOito.appendChild(buttonOito)
    divOito.appendChild(pOito)
    divDez.appendChild(buttonDez)
    divDez.appendChild(pDez)
    divQuinze.appendChild(buttonQuinze)
    divQuinze.appendChild(pQuinze)
    divDataPublicacao.style.position = 'relative'
    divAuxiliar.style.position = 'absolute'
    divAuxiliar.style.display = 'flex'
    divAuxiliar.style.flexDirection = 'column'
    divAuxiliar.style.top = '-82px'
    divAuxiliar.style.right = '-150px'
    pCinco.style.color = 'gray'
    pOito.style.color = 'gray'
    pDez.style.color = 'gray'
    pQuinze.style.color = 'gray'
    pCinco.innerHTML = `5 DIAS`
    pOito.innerHTML = `8 DIAS`
    pDez.innerHTML = `10 DIAS`
    pQuinze.innerHTML = `15 DIAS`
    divCinco.style.display = 'flex'
    divCinco.style.flexDirection = 'row'
    divCinco.style.alignItems = 'center'
    divOito.style.display = 'flex'
    divOito.style.flexDirection = 'row'
    divOito.style.alignItems = 'center'
    divDez.style.display = 'flex'
    divDez.style.flexDirection = 'row'
    divDez.style.alignItems = 'center'
    divQuinze.style.display = 'flex'
    divQuinze.style.flexDirection = 'row'
    divQuinze.style.alignItems = 'center'

    dataPub.addEventListener('blur', () => {
        const prazoCinco = calcularPrazo(buttonCinco.value,2),
            prazoOito = calcularPrazo(buttonOito.value,2),
            prazoDez = calcularPrazo(buttonDez.value,2),
            prazoQuinze = calcularPrazo(buttonQuinze.value,2)

        pCinco.innerHTML = `${prazoCinco[0].slice(0,5)} - ${prazoCinco[1].slice(0,5)}`
        pOito.innerHTML = `${prazoOito[0].slice(0,5)} - ${prazoOito[1].slice(0,5)}`
        pDez.innerHTML = `${prazoDez[0].slice(0,5)} - ${prazoDez[1].slice(0,5)}`
        pQuinze.innerHTML = `${prazoQuinze[0].slice(0,5)} - ${prazoQuinze[1].slice(0,5)}`
    })
    
    let btn = document.querySelectorAll('.btnPrazo')

    btn.forEach(e => {
        e.addEventListener('click', event => {
            const [inicial, final] = calcularPrazo(Number(event.target.value),2)
            prazoInicial.value = inicial
            prazoFinal.value =  final
        })
        e.style.padding = '15px'
        e.style.borderRadius = '5px'
        e.style.margin = '5px'
        e.style.background = 'rgb(77, 72, 72)'
        e.style.color = 'white'
        e.style.border = '1px solid #ccc'
    })
}

function setValidacaoFunctionOff () {
    const editCompromissoBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div:nth-child(2) > a:nth-child(2)'),
        addTarefaBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div:nth-child(2) > a:nth-child(3)'),
        addTarefaAvulsaBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div.fdt-pg-header > a:nth-child(1)'),
        addTarefaClienteBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div.fdt-pg-header > a:nth-child(2)'),
        btnTarefaClientePesq = document.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td:nth-child(2) > a")
    
    if (editCompromissoBtn != null)
        editCompromissoBtn.addEventListener('click', () => {
            setAutoComplete(false)
        })

    if (addTarefaBtn != null)
        addTarefaBtn.addEventListener('click', () => {
            setAutoComplete(false)
        })

    if (addTarefaAvulsaBtn != null)
        addTarefaAvulsaBtn.addEventListener('click', () => {
            setAutoComplete(false)
        })

    if (addTarefaClienteBtn != null)
        addTarefaClienteBtn.addEventListener('click', () => {
            setAutoComplete(false)
        })

    if (btnTarefaClientePesq != null)
        btnTarefaClientePesq.addEventListener('click', () => {
            setAutoComplete(false)
        })
}

function setValidacaoFunctionOn() {
    const addCompromissoBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div.fdt-pg-header > a:nth-child(3) > i')

    if (addCompromissoBtn != null)
        addCompromissoBtn.addEventListener('click', async () => {
            await setAutoComplete(true)
        })
}

function createButtonRolagem () {
    if (!state.functions.abaCompromissosProcesso.mostrarBotadeRolagem) {
        return
    }
    const  arrow = document.createElement('input')

    arrow.setAttribute('type','button')
    arrow.value = 'DOWN'
    document.body.after(arrow)
    arrow.style.position = 'fixed'
    arrow.style.top = '0'
    arrow.style.right = '0'
    arrow.style.margin = '8em'
    arrow.style.background = 'dimgray'
    arrow.style.padding = '30px'
    arrow.style.width = '10em'
    arrow.style.height = '10em'
    arrow.style.borderRadius = '1em'
    arrow.style.MozBorderRadius = '1em'
    arrow.style.WebkitBorderRadius = '1em'
    arrow.style.color = 'white'
    arrow.style.fontWeight = 'bold'
    arrow.style.borderStyle = 'none'
    arrow.style.boxShadow = '10px 5px 5px black'

    arrow.addEventListener('click', () => {
        if (arrow.value == 'DOWN') {
            arrow.setAttribute('disabled','')
            window.scroll(0, document.documentElement.scrollHeight)
            arrow.value = 'UP'
            arrow.removeAttribute('disabled')
        }
        else {
            window.scroll(0,0)
            arrow.value = 'DOWN'
        }
    })
}

function removeAcentuacaoString (string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

function padronizaStrings (string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(' ','').replaceAll('-','').toUpperCase()
}

function completarInputs () {
    const titleFile = document.querySelectorAll("#fdt-form > div.alert.alert-success.fs20.margemCima20"),
        filesName = [],
        buttonsList = [],
        divs = document.querySelectorAll("#fdt-form > div")
    
    for (let index = 0; index < divs.length; index++) {
        const isTitleFile = divs[index].classList.contains("alert-success")

        if (isTitleFile) {
            buttonsList.push(divs[index+1])
        }
    }

    titleFile.forEach(e => {
        const textArray = e.textContent.split('.')

        filesName.push(textArray[0].trim())
    })

    for (let index = 0; index < titleFile.length; index++) {
        const input = document.querySelector(`#descricao_${index+1}`),
            ul = buttonsList[index].children[0].children[1].children[1].children[1].children
        
            input.value = filesName[index]

        for (let i = 0; i < ul.length; i++) {
            const sFileName = padronizaStrings(filesName[index]),
                span = ul[i].children[0].children[0], sSpan = padronizaStrings(span.textContent)

            if (sSpan == sFileName) {
                span.click()
            }
        }
    }
}

async function idPage(url) {
    const urlProcessosCadastro = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/formulario",
        urlProcessos = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/default",
        urlCompromissos = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/formulario",
        urlCompromissoFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/ficha",
        urlCompromissoDefault = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/default.asp",
        urlTarefas = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/formulario",
        urlTarefasFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default",
        urlClienteAddtarefa = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/default",
        urlUpFile = "http://fabioribeiro.eastus.cloudapp.azure.com//adv/clientesArquivos/formulario.asp",
        urlPortalDoAdvogado = "https://www.tjse.jus.br/tjnet/portaladv/index.wsp",
        urlCadastroPreProcesso = "http://fabioribeiro.eastus.cloudapp.azure.com/pre/preProcessos/formularioCria.asp",
        autoCompletar = await getAutoComplete(),
        pageBuscaProcessos = (url.search(urlProcessos) > -1),
        pageTarefas = (url.search(urlTarefas) > -1),
        pageCompromissos = (url.search(urlCompromissos) > -1),
        pageCadastroProcesso = (url.search(urlProcessosCadastro) > -1),
        pageVisualizacaoAbaCompromissos = (url.search(urlCompromissoDefault) > -1),
        pageVisualizacaoCompromisso = (url.search(urlCompromissoFicha) > -1),
        pageFormularioAddTarefaSemCompromisso = (url.search(urlClienteAddtarefa) > -1),
        pageVisualizacaoTarefa = (url.search(urlTarefasFicha) > -1),
        pageUploadArquivo = (url.search(urlUpFile) > -1),
        pagePortalDoAdvogado = (url.search(urlPortalDoAdvogado) > -1),
        isSistema = (url.search("http://fabioribeiro.eastus.cloudapp.azure.com") > -1),
        isPJE = (url.search("/pje/") > 0)
    
    digitacaoPorVoz()

    if (isSistema) {
        createPainel('ADM', ADM, state.functions.supervisor.painelVisualizacaoTarefasTimeADM)
        createPainel('SAC', SAC, state.functions.supervisor.painelVisualizacaoTarefasTimeSAC)
        createPainel('FINANCEIRO', FINANCEIRO, state.functions.supervisor.painelVisualizacaoTarefasTimeFINANCEIRO)
        contarTarefasParaHoje()

        if (pageBuscaProcessos) {
            if (!state.functions.abaPesquisaProcesso.autoFormatacaoNumProcessoPesquisa) {
                return
            }
            formataNumProcesso()
            focarInputProcesso()
        } else if (pageTarefas) {
            if (autoCompletar) {
                cliente = await getCliente()
                if (cliente.compromisso.atualizar)
                    createInputDependente()
                saveInfoTarefas()
                loadInfo()
            }
        } else if (pageCompromissos) {
            const dataFinal =  document.querySelector("#dataPrazoFatal"),
                dataInicial = document.querySelector("#dataPrazoInterno"),
                tipoIntimacao = document.querySelector("#descricao")
            
            dataFinal.addEventListener('blur', () => {
                const indiceAudiencia = removeAcentuacaoString(tipoIntimacao.value).search('AUDIENCIA'),
                    indicePericia = removeAcentuacaoString(tipoIntimacao.value).search('PERICIA'),
                    indicePauta = tipoIntimacao.value.search('PAUTA'),
                    ehAudiencia = (indiceAudiencia == 0),
                    ehPericia = (indicePericia == 0),
                    ehPauta = (indicePauta == 0)
    
                if (ehAudiencia || ehPauta || ehPericia) {
                    dataInicial.value = dataFinal.value
                }
            })
    
            if (autoCompletar) {
                const gravarBtn = document.querySelector("#fdt-form > div.row.margemCima20 > div > input.btn.fdt-btn-verde"),
                    id = getIdCliente(url),
                    linkProcessosAjax = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/ficha.asp?idPK="
    
                gravarBtn.setAttribute('disabled','')
                ajax(1,linkProcessosAjax,id, gravarBtn)
                saveInfoCompromissos()
                setCliente(cliente)
                createButtonPrazo()
            }
            console.log(cliente)
        } else if (pageCadastroProcesso) {
            formataNumProcesso()
            habilitarEdicaoNumeroProcesso()
        } else if (pageVisualizacaoAbaCompromissos) {
            createButtonRolagem()
            setValidacaoFunctionOn()
        } else if (pageVisualizacaoCompromisso || pageFormularioAddTarefaSemCompromisso) {
            setValidacaoFunctionOff()
    
        } else if (pageVisualizacaoTarefa) {
            const editTarefaBtn = document.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')
    
            if (editTarefaBtn != null) {
                editTarefaBtn.forEach(element => {
                    let e = element.children[1].children[0].children[1].children[1]
                    if (e != null) {
                        e.addEventListener('click',() => {
                            setAutoComplete(false)
                        })
                    }
                })
            }
        } else if (pageUploadArquivo) {
            completarInputs()
        } else if (urlCadastroPreProcesso) {
            if (!state.functions.preProcesso.preenchimentoNomePasta) {
                return
            }

            const nome = document.querySelector("#fdt-form > div.row.fdt-ficha > div:nth-child(1) > span"),
                cpf = document.querySelector("#fdt-form > div.row.fdt-ficha > div:nth-child(2) > span"),
                nomePastaInput = document.querySelector("#preProcessoPasta")

            nomePastaInput.value = nome.innerText.toUpperCase().replaceAll(" ", "") + cpf.innerText.replaceAll(".", "").replaceAll("-", "")
        }
    } else if (pagePortalDoAdvogado) {
            filtroAlvaraTJSE()
    } else if (isPJE) {
        activatePJEMarker()
    }
}

function getURL() {
    return document.URL
}

async function activate() {
    const [ estado, clienteSaved ] = await Promise.all([getState(), getCliente()]),
        url = getURL()

    const { active, functions } = estado

    state.active = active
    state.functions = functions

    if (!clienteSaved) {
        await setCliente(cliente)
    }

    if (!active)
        return

    idPage(url)
}

function updateEvent() {
    enviarResposta()
}

async function run () {
    activate()
    updateEvent()
}

window.onload = run