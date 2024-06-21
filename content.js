const state = {
    active: null,
    functions: {
        todasPaginas: {
            tipoIntimacaoIsJudicial: null,
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
            painelVisualizacaoTarefasTimeINSS: null,
        },
        tjse: {
            botaoExportarAlvaras: null
        }
    }
}


let submit = true,
    cliente = {
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

function selectRespExec (colaborador) {
    const responsavelSelect = document.querySelector("#fdt-form > div:nth-child(15) > div:nth-child(1) > div > div > ul"),
        executorSelect = document.querySelector("#fdt-form > div:nth-child(15) > div:nth-child(2) > div > div > ul")
    for (let index = 0; index < responsavelSelect.children.length; index++) {
        if (responsavelSelect.children[index].innerText.trim() == colaborador.responsavel.trim()) 
            responsavelSelect.children[index].children[0].click()
        if (responsavelSelect.children[index].innerText.trim() == colaborador.executor.trim())
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

function addListaTarefas({ nome, datasViagem, tarefas }, data) {
    const ano = new Date().getFullYear(),
        [ diaData, mesData, anoData ] = data,
        date = `${diaData}/${mesData}/${anoData}`,
        div = document.querySelector('#contactdiv'),
        p1 = document.createElement('p')
    
    p1.innerHTML = `${nome.slice(0,nome.search(' '))}: ${tarefas}`
    p1.style.color = 'white'
    p1.dataset.colaborador = nome
    p1.style.cursor = 'pointer'

    if (datasViagem) {
        for (const dataViagem of datasViagem) {
            if (date == `${dataViagem}/${ano}`) 
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

async function selectExecutorContatar (element) {
    const adm = await Promise.all(await element)

    const responsavelInterior = adm.reduce((previous, currrent) => {
        if (currrent.interiores.includes(cliente.cliente.localAtendido)) {
            return currrent
        }
        return previous
    }, null)

    if (responsavelInterior) {
        return {responsavel: 'JULIANO OLIVEIRA DE SOUZA', executor: responsavelInterior.nome}
    }

    const executor = adm.reduce((previous, currrent) => {
        if (previous.tarefas > currrent.tarefas) {
            return currrent
        }
        return previous
    }, adm[0])

    return {responsavel: 'JULIANO OLIVEIRA DE SOUZA', executor: executor.nome}
}

async function getTarefasAdm(colaborador, [ dia, mes, ano ]){

    const parser = new DOMParser()

    const urlRequest = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default.asp'

    const body = `bsAdvTarefas=s&bsAdvTarefasTecnica=&bsAdvTarefasDe=${dia}%2F${mes}%2F${ano}&bsAdvTarefasAte=${dia}%2F${mes}%2F${ano}&bsAdvTarefasTitulo=&bsAdvTarefasTipo=&bsAdvTarefasStatus=p&bsAdvTarefasAgendada=&bsAdvTarefasResponsavel=&bsAdvTarefasExecutor=${colaborador.id}&bsAdvTarefasCompromisso=&bsAdvTarefasCliente=&bsAdvTarefasCpf=&filtrar=Filtrar`

    return await fetch(urlRequest, {
            method: "POST",
            body: body,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
    }).then(function (response) {
        return response.blob()
    }).then(async function (result) {
        const doc = parser.parseFromString(await result.text(),'text/html')

        const tarefas = doc.documentElement.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')
            let contador = 0
            tarefas.forEach(e => {
                if (e.children[2] != null) {
                    const lengthProcessTJ = 12
                    if ((e.children[2].innerText.match("[0-9]*")[0].length >= lengthProcessTJ) && !(e.children[3].innerText.search('Acompanhar') == 0)) {
                        contador++
                    }
                }
            })

        colaborador.tarefas = contador
        addListaTarefas(colaborador, [ dia, mes, ano ])

        return colaborador
    })
}

async function requererTarefasContatar(data) {
    
    const adm = []

    //Última atualização: 24/05/2024
    // Padrão para data das viagens: ['DD/MM']
    const parceiros = ['ELIZEU ( PARCEIRO)','MARIA DO POV. PREGUIÇA','AGENOR (PARCEIRO)','ELIZANGELA ( PARCEIRA)','ERMINIO','AUGUSTO ( PARCEIRO)'],
        varaEstancia = ['7ª VARA FEDERAL', '1ª VARA CIVEL DE ESTÂNCIA', '2ª VARA CIVEL DE ESTÂNCIA', 'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE ESTÂNCIA', 'VARA DE ESTÂNCIA', 'VARA DO TRABALHO DE ESTÂNCIA'],
        estancia = [
            {
                id: 22,
                nome: "SANDOVAL FILHO CORREIA LIMA FILHO",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            }
        ],
        aracaju = [
            {
                id: 131,
                nome: "ASLEY RODRIGO DE MELO LIMA",
                interiores: ["CONDE/BA", "ALAGOINHAS"],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 94,
                nome: "CARLOS HENRIQUE ESPASIANI",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 196,
                nome: "KAUÃ DE CARVALHO NASCIMENTO",
                interiores: ["CARMOPÓLIS", "LOTEAMENTO JEOVA (BOTAFOGO)"],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 199,
                nome: "LUCAS NATHAN NOGUEIRA DA SILVA ",
                interiores: ["ESTANCIA", "TOBIAS BARRETO", "PEDRINHAS"],
                datasViagem: [],
                tarefas: 0
            },
            /* {
                id: idMarcoR,
                nome: "MARCOS ROBERT DE MELO LIMA",
                interiores: [],
                datasViagem: viagemMarcoR,
                tarefas: 0
            }, */
            {
                id: 217,
                nome: "THIAGO SANTOS SANTANA",
                interiores: ["CAPELA","JAPARATUBA"],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 188,
                nome: "VINICIUS SOUSA BOMFIM",
                interiores: ["UMBAÚBA"],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 161,
                nome: "YURI DIAS PEREIRA",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
        ]

    if (((cliente.cliente.cidade == "ESTANCIA" && cliente.cliente.localAtendido == "ESTANCIA")) || ((parceiros.includes(cliente.cliente.parceiro)) && varaEstancia.includes(cliente.processo.vara))) {
        adm.push(...estancia)
    } else {
        if (varaEstancia.includes(cliente.processo.vara)) {
            alert("Verificar executor manualmente!")
            adm.push(...aracaju)
            adm.push(...estancia)
        } else {
            adm.push(...aracaju)
        }
    }

    return adm.map(async colaborador => {
        return getTarefasAdm(colaborador, data)
    })
}

async function validaExecutorContatar () {
    const dataInput = document.querySelector('#dataParaFinalizacao')

    createListaTarefas()

    const adm = requererTarefasContatar(dataInput.value.split('/'))

    const executorContatar = await selectExecutorContatar(adm)

    selectRespExec(executorContatar)
}

function converterParaTarefaAvulsa() {
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
        financeiro = ["RPV TRF1 BRASÌLIA", "RPV TRF1 GOIÁS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTÂNCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATÓRIO"],
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
        tarefasFinanceiro = ["RPV TRF1 BRASÌLIA", "RPV TRF1 GOIÁS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTÂNCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATÓRIO"],
        tarefasAdm = ["CONTATAR CLIENTE","LEMBRAR CLIENTE"],
        tarefaSac = "SMS E WHATSAPP",
        lengthSecao = 4,
        secao = numeroProcesso.slice(num - lengthSecao,num),
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
    const caracteresProcesso = cliente.processo.origem.length
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
        alert("Erro no cadastro do número do processo")
}

function validaTipoIntimacao(txt) {
    const p1 = txt.search("PERÍCIA")
    const ehPericia = (p1 === 0)
    const { cidade, estado } = cliente.processo

    if (txt === "RPV") {
        if (cidade === "ESTANCIA")
            return "RPV TRF5 ESTÂNCIA"
        if (estado === "DF")
            return "RPV TRF1 BRASÌLIA"
        if (estado === "GO")
            return "RPV TRF1 GOIÁS"
        if (estado === "BA")
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
        financeiro = ["RECEBIMENTO DE ALVARÁ","RPV TRF1 BAHIA", "RPV TRF1 BRASÌLIA", "RPV TRF1 GOIÁS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTÂNCIA","RECEBIMENTO DE PRECATÓRIO"],
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

            if ((optionLi.children[index].children[0].children[0].innerText.toUpperCase() == "CONTATAR CLIENTE" || optionLi.children[index].children[0].children[0].innerText.toUpperCase() == "LEMBRAR CLIENTE") && cliente.processo.estado != "DF" && cliente.processo.estado != "GO") {
                const executor = validaExecutorContatar()
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
        }
    })

    ajax(2,linkClienteAjax, cliente.cliente.id, gravarBtn)
}

async function ajax (opt, link, id, gravarBtn) {
    
    const parser = new DOMParser()

    const urlRequest = opt == 3 ? "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/default.asp" : `${link}${id}`

    const body = `bsAdvClientes=s&org=&idPR=&idCR=&idCP=&bsAdvClientesProspect=&bsAdvClientesTexto=&bsAdvClientesCPF=${id}&bsAdvClientesCNPJ=&bsAdvClientesGrupo=&bsAdvClientesSituacao=&bsAdvClientesEstado=&bsAdvClientesCidade=&bsAdvClientesNaturalUF=&bsAdvClientesNaturalCidade=&bsAdvClientesFornecedor=&bsAdvClientesLocalAtendido=&bsAdvClientesNascimentoDataDe=&bsAdvClientesNascimentoDataAte=&bsAdvClientesDataDe=&bsAdvClientesDataAte=&bsAdvClientesIncluidoPor=&bsAdvClientesProcessosStatus=&bsAdvClientesAtualizacaoDe=&bsAdvClientesAtualizacaoAte=&bsAdvClientesAtualizacaoCampo=&bsAdvClientesProcessosDataDe=&bsAdvClientesProcessosDataAte=&bsAdvClientesProcessosNatureza=&bsAdvClientesProcessosMerito=&bsAdvClientesProcessosSentenca=&bsAdvClientesINSSDe=&bsAdvClientesINSSAte=&bsAdvClientesINSSResponsavel=&bsAdvClientesINSSResultado=&bsAdvResponsavelPendencia=&bsAdvComoChegou=&filtrar=Filtrar`

    fetch(urlRequest, {
            method: opt != 3 ? "GET" : "POST",
            body: opt != 3 ? null : body,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
    }).then(function (response) {
        return response.blob()
    }).then(async function (result) {
        const doc = parser.parseFromString(await result.text(),'text/html')

        if (opt === 1) {
            extrairDadosRequisicaoProcessoHtml(doc, gravarBtn)
        }
        else {
            if (opt === 2)
                extrairDadosRequisicaoClienteHtml(doc, gravarBtn)
            else
                extrairIDRequisicaoClienteHtml(doc, gravarBtn)
        }
        setCliente(cliente)
        gravarBtn.removeAttribute('disabled')
    })
}

function setValidacaoFunctionOff () {
    const editCompromissoBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div:nth-child(2) > a:nth-child(2)'),
        addTarefaBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div:nth-child(2) > a:nth-child(3)'),
        addTarefaAvulsaBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div.fdt-pg-header > a:nth-child(1)'),
        addTarefaClienteBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div.fdt-pg-header > a:nth-child(2)'),
        btnTarefaClientePesq = document.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td:nth-child(2) > a")

    const buttons = [editCompromissoBtn, addTarefaBtn, addTarefaAvulsaBtn, addTarefaClienteBtn, btnTarefaClientePesq]

    buttons.forEach(button => {
        if (button)
            button.addEventListener('click', () => {
                setAutoComplete(false)
            })
    })
}

function setValidacaoFunctionOn() {
    const addCompromissoBtn = document.querySelector('body > section > section > div.fdt-espaco > div > div.fdt-pg-header > a:nth-child(3) > i')

    if (addCompromissoBtn)
        addCompromissoBtn.addEventListener('click', async () => {
            await setAutoComplete(true)
        })
}

function removeAcentuacaoString (string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
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
        pageBuscaProcessos = (url.includes(urlProcessos)),
        pageTarefas = (url.includes(urlTarefas)),
        pageCompromissos = (url.includes(urlCompromissos)),
        pageCadastroProcesso = (url.includes(urlProcessosCadastro)),
        pageVisualizacaoAbaCompromissos = (url.includes(urlCompromissoDefault)),
        pageVisualizacaoCompromisso = (url.includes(urlCompromissoFicha)),
        pageFormularioAddTarefaSemCompromisso = (url.includes(urlClienteAddtarefa)),
        pageVisualizacaoTarefa = (url.includes(urlTarefasFicha)),
        pageUploadArquivo = (url.includes(urlUpFile)),
        pagePortalDoAdvogado = (url.includes(urlPortalDoAdvogado)),
        isSistema = (url.includes("http://fabioribeiro.eastus.cloudapp.azure.com")),
        isPJE = (url.includes("/pje/"))
    
    digitacaoPorVoz()

    if (isSistema) {
        createPainel('ADM', ADM, state.functions.supervisor.painelVisualizacaoTarefasTimeADM)
        createPainel('SAC', SAC, state.functions.supervisor.painelVisualizacaoTarefasTimeSAC)
        createPainel('FINANCEIRO', FINANCEIRO, state.functions.supervisor.painelVisualizacaoTarefasTimeFINANCEIRO)
        createPainel('INSS', INSS, state.functions.supervisor.painelVisualizacaoTarefasTimeINSS)
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

async function activate() {
    const [ estado, clienteSaved ] = await Promise.all([getState(), getCliente()]),
        { URL } = document

    const { active, functions } = estado

    state.active = active
    state.functions = functions

    if (!clienteSaved) {
        await setCliente(cliente)
    }

    if (!active)
        return

    idPage(URL)
}

function updateEvent() {
    enviarResposta()
};

(async function run () {
    activate()
    updateEvent()
})()