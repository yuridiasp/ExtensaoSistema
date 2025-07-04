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

function getFeriadosFixos ({ ano, parametro, competencia = null, cliente }) {
    
    const indexJaneiro = 0

    const competenciaNormalizada = competencia?.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase()
    
    const dataFactory = (date, resultados, increment = null) => {
        const { data: [mes, dia], feriado, isNacional } = date
        const yearCalculated = increment ? (ano + 1 ): (increment === false ? (ano - 1) :  ano)
        const holidayDate = new Date(yearCalculated, mes, dia)
        holidayDate.setHours(0,0,0,0)
        const dateString = holidayDate.toISOString()
        
        resultados[dateString] ? resultados[dateString].push({ feriado, isNacional: isNacional ? isNacional : false }) : resultados[dateString] = [ { feriado, isNacional: isNacional ? isNacional : false } ]
    }

    const setIntervaloFeriadosJudiciario = (diaInicio, mesInicio, diaFinal, mesFinal, feriado) => {
        
        const fimMesDezembro = 31,
            diaPrimeiro = 1
        
        let feriados = [],
            dia = diaInicio,
            mes = mesInicio
        
        
        while(mes !== mesFinal || dia <= diaFinal && mes === mesFinal) {
            feriados.push({data: [mes, dia], feriado, isNacional: feriado === "RECESSO FORENSE: 20/12 A 06/01"})
            dia++
            
            if (dia > fimMesDezembro) {
                dia = diaPrimeiro
                mes = indexJaneiro
            }
        }

        return feriados
    }
    
    const tarefaContatar = parametro === parametros.tarefaContatar,
        tarefaAdvogado = parametro === parametros.tarefaAdvogado,
        tarefaINSSDigital = parametro === parametros.inss,
        isHighlight = parametro === parametros.highlight,
        isTJ = cliente?.processo?.origem?.length === 12,
        diaInicioForense = 20,
        mesInicioForense = 11,
        diaFimForense = 6,
        mesFimForense = 0,
        diaInicioFeriasAdvogados = 20,
        mesInicioFeriasAdvogados = 11,
        diaFimFeriasAdvogados = isTJ ? 20 : 21,
        isTRT = cliente?.processo?.natureza === "TRABALHISTA",
        mesFimFeriasAdvogados = 0,
        isIS = competenciaNormalizada || isTJ || isTRT,
        isTRF1 = !isTJ && !isHighlight && cliente?.processo?.origem?.slice(13,16) === "401",
        forense = setIntervaloFeriadosJudiciario(diaInicioForense, mesInicioForense, diaFimForense, mesFimForense, "RECESSO FORENSE: 20/12 A 06/01"),
        advogados = setIntervaloFeriadosJudiciario(diaInicioFeriasAdvogados, mesInicioFeriasAdvogados, diaFimFeriasAdvogados, mesFimFeriasAdvogados, "RECESSO DOS ADVOGADOS (ART. 220 NCPC): 20/12 a 20/01")
        
        const resultados = {},
            datas = { // [mes, dia] (indice do mes de 0 a 11)
                nacional: [
                    {data: [0,1], feriado: "CONFRATERNIZAÇÃO UNIVERSAL - NACIONAL", isNacional: true},
                    {data: [3,21], feriado: "TIRADENTES - NACIONAL", isNacional: true},
                    {data: [4,1], feriado: "DIA DO TRABALHO - NACIONAL", isNacional: true},
                    {data: [8,7], feriado: "INDEPENDÊNCIA DO BRASIL - NACIONAL", isNacional: true},
                    {data: [9,12], feriado: "DIA DAS CRIANÇAS - DIA DA PADROEIRA DO BRASIL - NACIONAL", isNacional: true},
                    {data: [10,2], feriado: "FINADOS - NACIONAL", isNacional: true},
                    {data: [10,15], feriado: "PROCLAMAÇÃO DA REPÚBLICA - NACIONAL", isNacional: true},
                    {data: [10,20], feriado: "DIA DA CONSCIÊNCIA NEGRA - NACIONAL", isNacional: true},
                    {data: [11,25], feriado: "NATAL - NACIONAL", isNacional: true},
                ],
                recessoForense : forense,
                feriasAdvogados: advogados,
                justicaNacional: [
                    {data: [7,11], feriado: "DIA DO MAGISTRADO - JUSTIÇA"},
                    {data: [9,28], feriado: "DIA DO FUNCIONÁRIO PÚBLICO - JUSTIÇA"},
                    {data: [10,1], feriado: "LEI FEDERAL Nº 5.010/66 - JUSTIÇA"},
                    {data: [11,8], feriado: "DIA DA JUSTIÇA - JUSTIÇA"},
                    {data: [3,16], feriado: "QUARTA-FEIRA SANTA - PONTO FACULTATIVO JUSTIÇA"}, //ADICIONADO EM 16/04/2025
                    {data: [3,17], feriado: "QUINTA-FEIRA SANTA - PONTO FACULTATIVO JUSTIÇA"}, //ADICIONADO EM 16/04/2025
                ],
                justicaEstadual: [
                    {data: [5,20], feriado: "PÓS CORPUS CHRISTI - PONTO FACULTATIVO"},
                    {data: [5,23], feriado: "VÉSPERA SÃO JOÃO - PONTO FACULTATIVO"},
                    {data: [6,7], feriado: "SEGUNDA IMPRENSSADA REFERENTE AO FERIADO DE EMANCIPAÇÃO POLÍTICA DE SERGIPE - PONTO FACULTADO DA JUSTIÇA DE SERGIPE"},
                ],
                TRF1: [
                    {data: [4,2], feriado: "SEXTA IMPRENSSADA REFERENTE AO FERIADO DE DIA DO TRABALHO - PONTO FACULTADO DA JUSTIÇA"},
                ],
                'SE': [
                    {data: [5,24], feriado: "SÃO JOÃO - SERGIPE"},
                    {data: [6,8], feriado: "EMANCIPAÇÃO POLÍTICA DE SERGIPE - SERGIPE"},
                ],
                'ARACAJU': [
                    {data: [11,8], feriado: "PADROEIRA - ARACAJU"},
                    {data: [2,17], feriado: "ANIVERSÁRIO DE ARACAJU"}
                ],
                interiores : {
                    'AQUIDABA': [
                        {data: [3,4], feriado: "EMANCIPAÇÃO POLÍTICA - AQUIDABÃ"},
                        {data: [6,26], feriado: "PADROEIRA - AQUIDABÃ"}
                    ],
                    'ARAUA': [
                        {data: [3,9], feriado: "EMANCIPAÇÃO POLÍTICA - ARAUÁ"},
                        {data: [9,5], feriado: "SÃO BENEDITO - ARAUÁ"},
                        {data: [11,8], feriado: "PADROEIRA - ARAUÁ"}
                    ],
                    'AREIA BRANCA': [
                        {data: [10,11], feriado: "FUNDAÇÃO DA CIDADE - AREIA BRANCA"},
                        {data: [11,8], feriado: "PADROEIRA - AREIA BRANCA"}
                    ],
                    'BARRA DOS COQUEIROS': [
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - BARRA DOS COQUEIROS"},
                        {data: [11,13], feriado: "PADROEIRA - BARRA DOS COQUEIROS"}
                    ],
                    'BOQUIM': [
                        {data: [2,21], feriado: "CRIAÇÃO DO MUNICÍPIO - BOQUIM"},
                        {data: [6,26], feriado: "PADROEIRA - BOQUIM"}
                    ],
                    'CAMPO DO BRITO': [
                        {data: [7,15], feriado: "PADROEIRA - CAMPO DO BRITO"},
                        {data: [9,29], feriado: "EMANCIPAÇÃO POLÍTICA - CAMPO DO BRITO"}
                    ],
                    'CANINDE DE SAO FRANCISCO': [
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - CANINDÉ DE SÃO FRANCISCO"},
                        {data: [11,8], feriado: "PADROEIRA - CANINDÉ DE SÃO FRANCISCO"}
                    ],
                    'CAPELA': [
                        {data: [1,2], feriado: "PADROEIRO - CAPELA"},
                        {data: [7,28], feriado: "EMANCIPAÇÃO POLÍTICA - CAPELA"}
                    ],
                    'CARIRA': [
                        {data: [4,2], feriado: "PADROEIRA - CARIRA"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - CARIRA"}
                    ],
                    'CARMOPOLIS': [
                        {data: [6,16], feriado: "PADROEIRA - CARMÓPOLIS"},
                        {data: [9,16], feriado: "EMANCIPAÇÃO POLÍTICA - CARMÓPOLIS"},
                        {data: [10,29], feriado: "DIA DO EVANGÉLICO - CARMÓPOLIS"}
                    ],
                    'CEDRO DE SAO JOAO': [
                        {data: [5,24], feriado: "PADROEIRO - CEDRO DE SÃO JOÃO"},
                        {data: [9,4], feriado: "EMANCIPAÇÃO POLÍTICA - CEDRO DE SÃO JOÃO"}
                    ],
                    'CRISTINAPOLIS': [
                        {data: [3,24], feriado: "EMANCIPAÇÃO POLÍTICA - CRISTINÁPOLIS"},
                        {data: [6,31], feriado: "FERIADO MUNICIPAL EVANGÉLICO - CRISTINÁPOLIS"},
                        {data: [9,4], feriado: "PADROEIRO - CRISTINÁPOLIS"}
                    ],
                    'DIVINA PASTORA': [
                        {data: [2,13], feriado: "EMANCIPAÇÃO POLÍTICA - DIVINA PASTORA"}
                    ],
                    'ESTANCIA': [
                        {data: [4,4], feriado: "ANIVERSÁRIO DE ESTÂNCIA"},
                        {data: [11,12], feriado: "PADROEIRA - ESTÂNCIA"}
                    ],
                    'FREI PAULO': [
                        {data: [5,30], feriado: "PADROEIRO - FREI PAULO"},
                        {data: [9,23], feriado: "EMANCIPAÇÃO POLÍTICA - FREI PAULO"}
                    ],
                    'GARARU': [
                        {data: [2,15], feriado: "EMANCIPAÇÃO POLÍTICA - GARARU"},
                        {data: [4,10], feriado: "FESTA DO CRUZEIRO - GARARU"},
                        {data: [7,15], feriado: "DIA DA ASSUNÇÃO DE NOSSA SENHORA - GARARU"}
                    ],
                    'INDIAROBA': [
                        {data: [2,28], feriado: "EMANCIPAÇÃO POLÍTICA - INDIAROBA"},
                        {data: [11,8], feriado: "PADROEIRA - INDIAROBA"}
                    ],
                    'ITABAIANA': [
                        {data: [0,27], feriado: "PADROEIRO - ITABAIANA"},
                        {data: [5,13], feriado: "EMANCIPAÇÃO POLÍTICA - ITABAIANA"},
                        {data: [7,28], feriado: "PADROEIRA - ITABAIANA"}
                    ],
                    'ITABAIANINHA': [
                        {data: [9,19], feriado: "EMANCIPAÇÃO POLÍTICA - ITABAIANINHA"},
                        {data: [11,8], feriado: "PADROEIRA - ITABAIANINHA"}
                    ],
                    'ITAPORANGA DAJUDA': [
                        {data: [1,2], feriado: "PADROEIRA - ITAPORANGA D'AJUDA"},
                        {data: [2,28], feriado: "EMANCIPAÇÃO POLÍTICA - ITAPORANGA D'AJUDA"}
                    ],
                    'JAPARATUBA': [
                        {data: [5,11], feriado: "EMANCIPAÇÃO POLÍTICA - JAPARATUBA"},
                        {data: [11,8], feriado: "PADROEIRA - JAPARATUBA"}
                    ],
                    'JAPOATA': [
                        {data: [10,23], feriado: "EMANCIPAÇÃO POLÍTICA - JAPOATÃ"},
                        {data: [10,25], feriado: "PADROEIRA - JAPOATÃ"}
                    ],
                    'LAGARTO': [
                        {data: [3,20], feriado: "EMANCIPAÇÃO POLÍTICA - LAGARTO"},
                        {data: [8,8], feriado: "PADROEIRA - LAGARTO"}
                    ],
                    'LARANJEIRAS': [
                        {data: [5,26], feriado: "PADROEIRA - LARANJEIRAS"},
                        {data: [7,7], feriado: "EMANCIPAÇÃO POLÍTICA - LARANJEIRAS"}
                    ],
                    'MALHADOR': [
                        {data: [2,19], feriado: "PADROEIRO - MALHADOR"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - MALHADOR"}
                    ],
                    'MARUIM': [
                        {data: [0,21], feriado: "PADROEIRO - MARUIM"},
                        {data: [4,5], feriado: "EMANCIPAÇÃO POLÍTICA - MARUIM"},
                        {data: [7,15], feriado: "CO-PADROEIRA NOSSA SENHORA DA PAZ - MARUIM"}
                    ],
                    'MONTE ALEGRE DE SERGIPE': [
                        {data: [5,24], feriado: "PADROEIRO - MONTE ALEGRE DE SERGIPE"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - MONTE ALEGRE DE SERGIPE"}
                    ],
                    'NEOPOLIS': [
                        {data: [5,13], feriado: "PADROEIRO - NEOPÓLIS"},
                        {data: [5,29], feriado: "SÃO PEDRO - NEOPÓLIS"},
                        {data: [9,7], feriado: "NOSSA SENHORA DO ROSÁRIO - NEOPÓLIS"},
                        {data: [9,18], feriado: "FUNDAÇÃO DA CIDADE - NEOPÓLIS"}
                    ],
                    'NOSSA SENHORA DA GLORIA': [
                        {data: [0,5], feriado: "FESTA DOS SANTOS REIS - NOSSA SENHORA DA GLÓRIA"},
                        {data: [7,15], feriado: "PADROEIRA - NOSSA SENHORA DA GLÓRIA"},
                        {data: [8,26], feriado: "EMANCIPAÇÃO POLÍTICA - NOSSA SENHORA DA GLÓRIA"}
                    ],
                    'NOSSA SENHORA DAS DORES': [
                        {data: [5,11], feriado: "EMANCIPAÇÃO POLÍTICA - NOSSA SENHORA DAS DORES"},
                        {data: [8,15], feriado: "PADROEIRA - NOSSA SENHORA DAS DORES"}
                    ],
                    'SOCORRO': [
                        {data: [1,2], feriado: "PADROEIRA - NOSSA SENHORA DO SOCORRO"},
                        {data: [6,7], feriado: "EMANCIPAÇÃO POLÍTICA - NOSSA SENHORA DO SOCORRO"},
                        {data: [7,15], feriado: "FESTA DE NOSSA SENHORA DO AMPARO - NOSSA SENHORA DO SOCORRO"}
                    ],
                    'PACATUBA': [
                        {data: [10,20], feriado: "PADROEIRO - PACATUBA"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - PACATUBA"}
                    ],
                    'PEDRINHAS': [
                        {data: [2,19], feriado: "PADROEIRO - PEDRINHAS"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - PEDRINHAS"}
                    ],
                    'PIRAMBU': [
                        {data: [1,11], feriado: "PADROEIRA - PIRAMBU"},
                        {data: [10,26], feriado: "EMANCIPAÇÃO POLÍTICA - PIRAMBU"}
                    ],
                    'POCO REDONDO': [
                        {data: [7,15], feriado: "PADROEIRA - POÇO REDONDO"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - POÇO REDONDO"}
                    ],
                    'POCO VERDE': [
                        {data: [0,21], feriado: "PADROEIRO - POÇO VERDE"},
                        {data: [4,3], feriado: "CO-PADROEIRA - POÇO VERDE"},
                        {data: [10,25], feriado: "EMANCIPAÇÃO POLÍTICA - POÇO VERDE"}
                    ],
                    'PORTO DA FOLHA': [
                        {data: [1,19], feriado: "EMANCIPAÇÃO POLÍTICA - PORTO DA FOLHA"},
                        {data: [11,7], feriado: "PADROEIRA - PORTO DA FOLHA"}
                    ],
                    'PROPRIA': [
                        {data: [1,7], feriado: "EMANCIPAÇÃO POLÍTICA - PROPRIÁ"},
                        {data: [5,13], feriado: "PADROEIRO - PROPRIÁ"}
                    ],
                    'RIACHAO DO DANTAS': [
                        {data: [4,9], feriado: "EMANCIPAÇÃO POLÍTICA - RIACHÃO DO DANTAS"},
                        {data: [10,21], feriado: "PADROEIRA - RIACHÃO DO DANTAS"}
                    ],
                    'RIACHUELO': [
                        {data: [0,25], feriado: "EMANCIPAÇÃO POLÍTICA - RIACHUELO"},
                        {data: [5,11], feriado: "BATALHA NAVAL DE RIACHUELO - RIACHUELO"},
                        {data: [11,8], feriado: "PADROEIRA - RIACHUELO"}
                    ],
                    'RIBEIROPOLIS': [
                        {data: [9,30], feriado: "PADROEIRO - RIBEIRÓPOLIS"},
                        {data: [11,18], feriado: "EMANCIPAÇÃO POLÍTICA - RIBEIRÓPOLIS"}
                    ],
                    'SALGADO': [
                        {data: [0,22], feriado: "PADROEIRO - SALGADO"},
                        {data: [9,4], feriado: "EMANCIPAÇÃO POLÍTICA - SALGADO"}
                    ],
                    'SANTANA DO SAO FRANCISCO': [
                        {data: [3,6], feriado: "EMANCIPAÇÃO POLÍTICA - SANTANA DO SÃO FRANCISCO"},
                        {data: [6,26], feriado: "PADROEIRA - SANTANA DO SÃO FRANCISCO"}
                    ],
                    'SANTO AMARO DAS BROTAS': [
                        {data: [0,15], feriado: "PADROEIRA - SANTO AMARO DAS BROTAS"},
                        {data: [11,15], feriado: "EMANCIPAÇÃO POLÍTICA - SANTO AMARO DAS BROTAS"}
                    ],
                    'SAO CRISTOVAO': [
                        {data: [8,8], feriado: "PADROEIRA - SÃO CRISTÓVÃO"}
                    ],
                    'SAO DOMINGOS': [
                        {data: [9,21], feriado: "EMANCIPAÇÃO POLÍTICA - SÃO DOMINGOS"},
                        {data: [7,8], feriado: "PADROEIRO - SÃO DOMINGOS"}
                    ],
                    'SIMAO DIAS': [
                        {data: [5,12], feriado: "EMANCIPAÇÃO POLÍTICA - SIMÃO DIAS"},
                        {data: [6,26], feriado: "PADROEIRA - SIMÃO DIAS"}
                    ],
                    'TOBIAS BARRETO': [
                        {data: [5,7], feriado: "ANIVERSÁRIO DE NASCIMENTO DE TOBIAS BARRETO DE MENEZES - TOBIAS BARRETO"},
                        {data: [7,15], feriado: "PADROEIRA - TOBIAS BARRETO"},
                        {data: [9,23], feriado: "EMANCIPAÇÃO POLÍTICA - TOBIAS BARRETO"}
                    ],
                    'UMBAUBA': [
                        {data: [1,2], feriado: "PADROEIRA - UMBAÚBA"},
                        {data: [1,6], feriado: "EMANCIPAÇÃO POLÍTICA - UMBAÚBA"}
                    ]
                }
            }
    
    datas.nacional.forEach(date => dataFactory(date, resultados))
    
    if (isIS || isHighlight) {
        datas.justicaEstadual.forEach(date => dataFactory(date, resultados))
    }

    if (tarefaContatar || isHighlight || tarefaINSSDigital) {
        datas.SE.forEach(date => dataFactory(date, resultados))

        datas.ARACAJU.forEach(date => dataFactory(date, resultados))
    }

    if (tarefaAdvogado || isHighlight) {
        datas.justicaNacional.forEach(date => dataFactory(date, resultados))

        datas.feriasAdvogados.forEach(date => {
            const month = date.data[0]
            
            let increment = null

            if (month === indexJaneiro) {
                increment = true
            }
            else {
                increment = false
            }

            dataFactory(date, resultados, increment)
            dataFactory(date, resultados)
        })
        
        if (competenciaNormalizada || cliente?.processo?.estado == 'SE') {
            datas.SE.forEach(date => dataFactory(date, resultados))
        }

        if (isTRF1 || isHighlight) {
            datas.TRF1.forEach(date => dataFactory(date, resultados))
        }
        
        const cidades = Object.entries(datas.interiores)

        if (cliente?.processo?.cidade === 'ARACAJU') {
            datas.ARACAJU.forEach(date => dataFactory(date, resultados))
        }

        for (const [jurisdicao, feriados] of cidades) {
            if (competenciaNormalizada?.includes(jurisdicao) || jurisdicao === cliente?.processo?.cidade || isHighlight) {
                feriados.forEach(date => dataFactory(date, resultados))
            }
        }
    }

    datas.recessoForense.forEach(date => {
        const month = date.data[0]
        
        let increment = null

        if (month == indexJaneiro) {
            increment = true
        }
        else {
            increment = false
        }

        if (isHighlight) {
            dataFactory(date, resultados, !increment)
        }

        dataFactory(date, resultados, increment)
        dataFactory(date, resultados)
    })
    
    return resultados
}

function calculaFeriadosDerivadosPascoa(pascoa) {
    const pascoaTimestamp = pascoa.getTime()
    
    const feriadosDerivados = [
        { nome: "SEGUNDA DE CARNAVAL - PONTO FACULTATIVO", offset: -48 },
        { nome: "TERÇA DE CARNAVAL - PONTO FACULTATIVO", offset: -47 },
        { nome: "QUARTA DE CINZAS - PONTO FACULTATIVO ATÉ AS 14H", offset: -46 },
        { nome: "QUARTA-FEIRA SANTA - PONTO FACULTATIVO", offset: -4 },
        { nome: "QUINTA-FEIRA MAIOR - PONTO FACULTATIVO", offset: -3 },
        { nome: "SEXTA-FEIRA DA PAIXÃO - NACIONAL", offset: -2 },
        { nome: "CORPUS CHRISTI - NACIONAL", offset: 60 }
    ]

    return [ {data: pascoa, feriado: "PÁSCOA - NACIONAL", isNacional: true},
        ...feriadosDerivados.map(({ nome, offset }) => {
            const data = new Date(pascoaTimestamp)
            data.setHours(0,0,0,0)
            data.setDate(data.getDate() + offset)

            return { data, feriado: nome, isNacional: nome.endsWith("NACIONAL") }
        })
    ]
}

function calculaFeriados({ parametro, year, competencia, cliente }) {
    const date = new Date()
    
    const ano = year || date.getFullYear(),
        fixos = getFeriadosFixos({ parametro, ano, competencia, cliente }),
        pascoa = calculaPascoa(ano),
        feriados = { ...fixos }
    
    const feriadosDerivadosPascoa = calculaFeriadosDerivadosPascoa(pascoa)
    
    feriadosDerivadosPascoa.forEach(feriadoVariavel => {
        const { data, feriado, isNacional } = feriadoVariavel

        const dateString = data.toISOString()

        feriados[dateString] ? feriados[dateString].push({ feriado, isNacional: isNacional ? isNacional : false }) : feriados[dateString] = [ { feriado, isNacional: isNacional ? isNacional : false } ]
    })
    
    return feriados
}

function isFeriado ({ date, parametro, year = null, competencia = null, cliente = null }) {
    
    const feriados = calculaFeriados({ parametro, year, competencia, cliente })
    
    const dateString = date.toISOString()
    
    if (feriados[dateString]) {
        let holiday = ''

        const isNacional = feriados[dateString].reduce((prev, { feriado, isNacional }) => {
            
            holiday += feriado + '\n'

            return isNacional ? isNacional : prev
        }, false)


        return { isHoliday: true, holiday, isNacional }
    }

    return { isHoliday: false }
}
/* const cliente = {
    processo: {
        origem: '00048838720214058500',
        estado: 'SE',
        natureza: 'PREVIDENCIÁRIO'
    }
}
const parametros = {
    tarefaContatar: 1,
    tarefaAdvogado: 2,
    highlight: 3
}

const date = new Date('06/01/2025')

console.log(isFeriado(date)) */