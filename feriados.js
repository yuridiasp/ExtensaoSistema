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

    const setIntervaloFeriadosJudiciario = (diaInicio, mesInicio, diaFinal, mesFinal) => {
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
    
    const tarefaContatar = parametro === parametros.tarefaContatar,
        tarefaAdvogado = parametro === parametros.tarefaAdvogado,
        indexJaneiro = 0,
        diaInicioForense = 20,
        mesInicioForense = 11,
        diaFimForense = 6,
        mesFimForense = 0,
        diaInicioFeriasAdvogados = 20,
        mesInicioFeriasAdvogados = 11,
        diaFimFeriasAdvogados = 20,
        mesFimFeriasAdvogados = 0,
        isTJ = cliente.processo.origem ? cliente.processo.origem.length === 12 : false,
        isTRT = cliente.processo.natureza === "TRABALHISTA",
        isIS = isTJ || isTRT,
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
                justicaEstadual: [
                    [4,31] //Ponto Facultativo 2024
                ],
                TRF1: [],
                'SE': [
                    [5,24], //SÃO JOÃO
                    [6,8], //EMANCIPAÇÃO POLÍTICA DE SERGIPE
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
    
    datas.nacional.forEach(([mes, dia]) => {
        resultados.push(new Date(ano, mes, dia))
    })

    if (isIS) {
        datas.justicaEstadual.forEach(([mes, dia]) => {
            resultados.push(new Date(ano, mes, dia))
        })
    }

    if (tarefaContatar) {
        datas.SE.forEach(([mes, dia]) => {
            resultados.push(new Date(ano, mes, dia))
        })
        datas.ARACAJU.forEach(([mes, dia]) => {
            resultados.push(new Date(ano, mes, dia))
        })
    }

    if (tarefaAdvogado) {
        datas.justicaNacional.forEach(([mes, dia]) => {
            resultados.push(new Date(ano, mes, dia))
        })

        datas.feriasAdvogados.forEach(([mes, dia]) => {
            if (mes == indexJaneiro) {
                resultados.push(new Date(ano+1, mes, dia))
                resultados.push(new Date(ano, mes, dia))
            }
            else {
                resultados.push(new Date(ano, mes, dia))
                resultados.push(new Date(ano-1, mes, dia))
            }
        })
        
        if (cliente.processo.estado == 'SE') {
            datas.SE.forEach(([mes, dia]) => {
                resultados.push(new Date(ano, mes, dia))
            })
        }

        if (cliente.processo.estado == 'DF' || cliente.processo.estado == 'GO') {
            datas.TRF1.forEach(([mes, dia]) => {
                resultados.push(new Date(ano, mes, dia))
            })
        }
        
        let date = Object.entries(datas)
        for (const [key,value] of date) {
            if (key == cliente.processo.cidade){
                value.forEach(([mes, dia]) => {
                    resultados.push(new Date(ano, mes, dia))
                })
            }
        }
    }

    datas.recessoForense.forEach(([mes, dia]) => {
        if (mes == indexJaneiro) {
            resultados.push(new Date(ano+1, mes, dia))
            resultados.push(new Date(ano, mes, dia))
        }
        else {
            resultados.push(new Date(ano, mes, dia))
            resultados.push(new Date(ano-1, mes, dia))
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

function isFeriado (date,parametro) {
    const feriados = calculaFeriados(parametro)
    for (const feriado of feriados) {
        const foundFeriado = feriado.toDateString() == date.toDateString()
        if (foundFeriado) {
            return true
        }
    }

    return false
}