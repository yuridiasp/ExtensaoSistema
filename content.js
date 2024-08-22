const parametros = {
    tarefaContatar: 1,
    tarefaAdvogado: 2,
    highlight: 3
}


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
        requerimento: {
            id: null,
            protocolo: null,
            data: null,
            responsavel: null,
            tipoBeneficio: null,
            postoINSS: null,
            status: null
        },
        processo: {
            id: null,
            origem: null,
            dependente: null,
            reu: null,
            responsavel: null,
            natureza: null,
            merito: null,
            cidade: null,
            estado: null,
            vara: null
        },
        compromisso: {
            id: null,
            atualizar: true,
            prazoInterno: null,
            prazoFatal: null,
            tarefas: null,
            quantidadeTarefas: null,
            tipoCompromisso: null,
            descricao: null,
            semanas: null,
            local: null,
            endereco: null,
            horario: null,
            perito: null
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

function addEventListenerCheckboxTaskList() {
    const listaTarefas = document.querySelector("#listagem")
    const taskCheckbox = listaTarefas.taskCheckbox

    taskCheckbox.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            cliente.compromisso.tarefas = Array.from(listaTarefas.taskCheckbox).filter(check => check.checked).map(checked => checked.value)
        })
    })
}

function getListagemTarefas() {
    const html = cliente.compromisso.tarefas.reduce((prev, cur, index) => {
        const tarefaNormalizada = removeAcentuacaoString(cur)
        const id = tarefaNormalizada.trim().replaceAll(" ", "")

        const isAudienciaOuEmenda = removeAcentuacaoString(cur).search("AUDIENCIA") === 0 || removeAcentuacaoString(cur).search("EMENDAR") === 0
        prev += `
                <div>
                    <input ${isAudienciaOuEmenda ? "disabled" : ""} value="${cur}" name="taskCheckbox" class="taskCheckbox" id="${id}" type="checkbox" checked>
                    <label for="${id}">${cur}</label>
                </div>
            `
        return prev
    }, "")

    return html
}

function createListaTarefasAbaCompromissos () {
    const listaTarefas = document.querySelector("#listaTarefas")
      
    if (!listaTarefas) {
        const footer = document.querySelector("footer")
        const content = `
            <h4>Tarefas do Compromisso</h4>
            <form id="listagem"></form>
        `
        footer.innerHTML = `<div id="listaTarefas">${content}</div><div>${footer.innerHTML}</div>`
        footer.style.display = "flex"
        footer.style.justifyContent = "space-between"

        return document.querySelector("#listaTarefas")
    }

    return listaTarefas
}

function atualizarListaTarefasAbaCompromissos() {
    if (cliente.compromisso.tarefas.length < 2 || !state.functions.cadastroCompromisso.exibirListaTarefas) {
        return
    }
    const listagem = createListaTarefasAbaCompromissos()

    const listaTarefas = listagem.querySelector("#listagem")

    listaTarefas.innerHTML = getListagemTarefas()

    addEventListenerCheckboxTaskList()
}

function getListaTarefasCompromissoAdministrativo(tipoCompromisso = cliente.compromisso.tipoCompromisso) {
    const inputPrazoInterno = document.querySelector("#dataPrazoInterno")
    const inputPrazoFatal = document.querySelector("#dataPrazoFatal")
    const inputDescriptionCompromisso = document.querySelector("#descricao")

    if (!inputPrazoInterno.value.length || !inputPrazoFatal.value.length || !inputDescriptionCompromisso.value.length) {
        return []
    }

    const pericia = ["CONTATAR CLIENTE", "SMS E WHATSAPP","LEMBRAR CLIENTE"],
        periciaShort = ["CONTATAR CLIENTE", "SMS E WHATSAPP"]

    const exigencia = ["ANALISE DE EXIGENCIA INSS DIGITAL", "INTERVENCAO - CONTROLE INSS DIGITAL", "INTERVENCAO - CONTROLE INSS DIGITAL", "CUMPRIMENTO EXIGENCIA INSS DIGITAL"]

    const tipoCompromissoNormalizado = removeAcentuacaoString(tipoCompromisso)

    const hoje = new Date(),
        ano = hoje.getFullYear(),
        mes = hoje.getMonth(),
        dia = hoje.getDate(),
        data = extrairDataPrazoFatalInput(inputPrazoInterno.value),
        dataInterno = new Date(data[2],data[1],data[0])

    contarDias([ dia, mes, ano], dataInterno, parametros.tarefaAdvogado)

    const isMoreWeek = cliente.compromisso.semanas > 1
    const isPericia = tipoCompromissoNormalizado.search("PERICIA") === 0
    const isExigencia = tipoCompromissoNormalizado.includes("EXIGENCIA")

    if (isPericia && isMoreWeek) {
        return pericia
    }

    if (isPericia && !isMoreWeek) {
        return periciaShort
    }

    if (isExigencia) {
        return exigencia
    }

    return []
}

function getListaTarefasCompromissoJudicial(tipoCompromisso = cliente.compromisso.tipoCompromisso) {
    const inputPrazoInterno = document.querySelector("#dataPrazoInterno")
    const inputPrazoFatal = document.querySelector("#dataPrazoFatal")
    const inputDescriptionCompromisso = document.querySelector("#descricao")

    if (!inputPrazoInterno.value.length || !inputPrazoFatal.value.length || !inputDescriptionCompromisso.value.length) {
        return []
    }

    const audiencia = ["CONTATAR CLIENTE","SMS E WHATSAPP","LEMBRAR CLIENTE"],
        audienciaShort = ["CONTATAR CLIENTE","SMS E WHATSAPP"],
        instrucao = ["CONTATAR CLIENTE","SMS E WHATSAPP","LEMBRAR CLIENTE", "ANÁLISE"],
        instrucaoShort = ["CONTATAR CLIENTE","SMS E WHATSAPP","ANÁLISE"]

    const pericia = ["CONTATAR CLIENTE", "SMS E WHATSAPP","LEMBRAR CLIENTE"],
        periciaShort = ["CONTATAR CLIENTE", "SMS E WHATSAPP"],
        periciaDF = ["CONTATAR CLIENTE", "SMS E WHATSAPP","LEMBRAR CLIENTE","ATO ORDINATÓRIO"],
        periciaDFShort = ["CONTATAR CLIENTE", "SMS E WHATSAPP","ATO ORDINATÓRIO"]

    const emendar = ["EMENDAR", "CONTATAR CLIENTE"]

    const calculo = ["MANIFESTAÇÃO - ADVOGADO", "ANÁLISE - CÁLCULO"]

    const tipoCompromissoNormalizado = removeAcentuacaoString(tipoCompromisso),
        contDoisADM = "DECISAO ANTECIPACAO PERICIA",
        contDoisCalculo = ["MANIFESTACAO SOBRE CALCULOS", "MANIFESTACAO SOBRE CALCULO"],
        contDoisEmenda = ["EMENDAR","DADOS PERICIA SOCIAL","DADOS COMPLEMENTARES"],
        contDoisFinanceiro = ["RECEBIMENTO DE ALVARA", "RPV TRF1 BRASILIA", "RPV TRF1 GOIAS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTANCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATORIO"],
        contTres = "PERICIA",
        contQuatro = ["AUDIENCIA DE CONCILIACAO", "AUDIENCIA CONCILIATORIA", "AUDIENCIA DE INTERROGATORIO"],
        contCinco = ["AUDIENCIA INAUGURAL", "AUDIENCIA INICIAL","AUDIENCIA DE INSTRUCAO", "AUDIENCIA DE INSTRUCAO E JULGAMENTO", "AUDIENCIA UNA"]

    const hoje = new Date(),
        ano = hoje.getFullYear(),
        mes = hoje.getMonth(),
        dia = hoje.getDate(),
        data = extrairDataPrazoFatalInput(inputPrazoInterno.value),
        dataInterno = new Date(data[2],data[1],data[0])

    contarDias([ dia, mes, ano], dataInterno, parametros.tarefaAdvogado)
    
    const isDFOrGO = (cliente.processo.estado == "DF" || cliente.processo.estado == "GO")
    const isMoreWeek = cliente.compromisso.semanas > 1
    const hasFiveTasks = contCinco.includes(tipoCompromissoNormalizado)
    const hasFourTasks = contQuatro.includes(tipoCompromissoNormalizado)
    const isPericia = tipoCompromissoNormalizado.search(contTres) === 0
    const isLiminarPericiaAdm = tipoCompromissoNormalizado.includes(contDoisADM)
    const hasTwoTasksEmenda = contDoisEmenda.includes(tipoCompromissoNormalizado)
    const hasTwoTasksCalculo = contDoisCalculo.includes(tipoCompromissoNormalizado)
    const hasTwoTasksFinanceiro = contDoisFinanceiro.includes(tipoCompromissoNormalizado)
    
    if (hasFiveTasks && isMoreWeek) {
        instrucao.unshift(cliente.compromisso.tipoCompromisso)
        return instrucao
    }

    if (hasFiveTasks && !isMoreWeek) {
        instrucaoShort.unshift(cliente.compromisso.tipoCompromisso)
        return instrucaoShort
    }

    if (hasFourTasks && isMoreWeek) {
        audiencia.unshift(cliente.compromisso.tipoCompromisso)
        return audiencia
    }

    if (hasFourTasks && !isMoreWeek) {
        audienciaShort.unshift(cliente.compromisso.tipoCompromisso)
        return audienciaShort
    }

    if (isPericia && isDFOrGO && isMoreWeek)
        return periciaDF

    if (isPericia && isDFOrGO && !isMoreWeek)
        return periciaDFShort

    if (isPericia && !isDFOrGO && isMoreWeek)
        return pericia

    if (isPericia && !isDFOrGO && !isMoreWeek)
        return periciaShort

    if (hasTwoTasksEmenda)
        return emendar

    if (hasTwoTasksCalculo)
        return calculo
    
    if (hasTwoTasksFinanceiro)
        return [cliente.compromisso.tipoCompromisso + " - ADVOGADO", cliente.compromisso.tipoCompromisso + " - FINANCEIRO"]
    
    if (isLiminarPericiaAdm)
        return [cliente.compromisso.tipoCompromisso + " - ADVOGADO", "ACOMPANHAR - ADM"]

    return [cliente.compromisso.tipoCompromisso]
}
   

function selectTipoCompromisso (descricaoTarefa, typeOptions) {
    const compromissosJudiciais = {
            default: "INTIMACAO",
            PERICIA: "PERICIA",
            AUDIENCIA: "AUDIENCIA",
            ALVARA: "ALVARA",
            PRECATORIO: "RPV",
            PRECATORIO: "PRECATORIO"
        },
        compromissosAdministrativos = {
            default: "PERICIA MEDICA ADMINISTRATIVA",
            "EXIGENCIA INSS": "EXIGENCIA INSS",
            "PERICIA SOCIAL": "PERICIA SOCIAL ADMINISTRATIVA",
            "PERICIA DE PRORROGACAO": "PERICIA MEDICA DE PRORROGACAO"
        }
            
    let tarefaIdentificada

    if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        const compromissoKey = removeAcentuacaoString(descricaoTarefa.value).split(" ")[0]
        const compromissoJudicial = compromissosJudiciais[compromissoKey]
        tarefaIdentificada = compromissoJudicial ? compromissoJudicial : compromissosJudiciais.default
    } else {
        const compromissoAdministrativo = compromissosAdministrativos[removeAcentuacaoString(descricaoTarefa.value)]
        tarefaIdentificada = compromissoAdministrativo ? compromissoAdministrativo : compromissosAdministrativos.default
    }

    for (const type of Array.from(typeOptions)) {
        if (removeAcentuacaoString(type.innerText.toUpperCase()) === tarefaIdentificada) {
            type.querySelector("a").click()
            break
        }
    }
}

function loadObserver(injectedFunction, target) {
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                injectedFunction()
                observer.disconnect()
            }
        }
    }
    const observer = new MutationObserver(callback)
    observer.observe(target, { attributes: true, childList: true, subtree: true })
}

function handleCompromisso() {
    if (!state.functions.cadastroCompromisso.selecaodoTipodeCompromisso) {
        return
    }
    
    const descricaoTarefa = document.querySelector("#descricao")

    const typeOptions = document.querySelectorAll("#fdt-form > div:nth-child(6) > div:nth-child(1) > div > div > ul > li")

    const listener = () => {
        if (descricaoTarefa) {
            const typeOptions = document.querySelectorAll("#fdt-form > div:nth-child(6) > div:nth-child(1) > div > div > ul > li")

            const selectCompromisso = async () => {
                descricaoTarefa.value = descricaoTarefa.value.toUpperCase()
                selectTipoCompromisso(descricaoTarefa, typeOptions)
                cliente.compromisso.tipoCompromisso = validaTipoCompromisso(descricaoTarefa.value.trim())
                cliente.compromisso.tarefas = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? getListaTarefasCompromissoJudicial() : getListaTarefasCompromissoAdministrativo()
                atualizarListaTarefasAbaCompromissos()
                await setCliente(cliente)
            }

            if (descricaoTarefa.length) {
                selectCompromisso()
            }

            descricaoTarefa.focus()

            descricaoTarefa.addEventListener('change', selectCompromisso)
        }
    }

    if (!typeOptions.length) {
        const target = document.querySelector("#fdt-form > div:nth-child(6) > div:nth-child(1)")
        loadObserver(listener, target)
    } else {
        listener()
    }
}

function getIdCliente(url) {
    const separator = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? "idPR=" : "idAG="

    return url.split(separator)[1]
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
    
    
    if (processoInput) {
        addEventoPasteProcesso(processoInput)
    }
    if (processoInputCad) {
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
    const responsavelSelect = document.querySelectorAll("#fdt-form > div:nth-child(15) > div:nth-child(1) > div > div > ul li"),
        executorSelect = document.querySelectorAll("#fdt-form > div:nth-child(15) > div:nth-child(2) > div > div > ul li")
    
    for (let index = 0; index < responsavelSelect.length; index++) {
        if (responsavelSelect[index].innerText.trim() == colaborador.responsavel.trim()) 
            responsavelSelect[index].children[0].click()
        if (responsavelSelect[index].innerText.trim() == colaborador.executor.trim())
            executorSelect[index].children[0].click()
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
        const responsaveisAdministrativos = ['SILVANIA PINHEIRO DE LEMOS']
        const executor = event.target.dataset.colaborador
        const responsavel = !state.functions.todasPaginas.tipoIntimacaoIsJudicial && responsaveisAdministrativos.includes(executor) ? executor : document.querySelector("#idResponsavel").selectedOptions[0].innerText

        const respExec = { responsavel, executor }

        selectRespExec(respExec)
    })
}

async function selectExecutorCalculo (colaboradores) {
    const colaboradoresCalculo = await Promise.all(await colaboradores)

    const executor = colaboradoresCalculo.reduce((previous, currrent) => {
        if (previous.tarefas > currrent.tarefas) {
            return currrent
        }
        return previous
    }, colaboradoresCalculo[0])

    return {responsavel: 'GUILHERME JASMIM', executor: executor.nome}
}

async function selectExecutorContatarAdministrativo (colaboradores) {
    const adm = await Promise.all(await colaboradores)
    const tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso)

    const executor = adm.reduce((previous, currrent) => {
        if (previous.tarefas > currrent.tarefas) {
            return currrent
        }
        return previous
    }, adm[0])

    const getResponsavelAdministrativo = () => {
        if (tipoCompromissoNormalizado.includes("PERICIA") || (tipoCompromissoNormalizado.includes("EXIGENCIA INSS") && cliente.compromisso.tarefas.length === 3)) {
            return "FLAVIO LUCAS LIMA SOUZA"
        }

        /* if (executor.nome === "JOSE PEDRO DE GOIS NETO") {
            return executor.nome
        } */

        return "SILVANIA PINHEIRO DE LEMOS"
    }

    return { responsavel: getResponsavelAdministrativo(), executor: executor.nome }
}

async function selectExecutorContatarJudicial (colaboradores) {
    const adm = await Promise.all(await colaboradores)
    let responsavel = 'JULIANO OLIVEIRA DE SOUZA'

    const responsavelInterior = adm.reduce((previous, currrent) => {
        if (currrent.interiores.includes(removeAcentuacaoString(cliente.cliente.localAtendido))) {
            return currrent
        }
        return previous
    }, null)

    if (responsavelInterior) {
        return {responsavel, executor: responsavelInterior.nome}
    }

    const executor = adm.reduce((previous, currrent) => {
        if (previous.tarefas > currrent.tarefas) {
            return currrent
        }
        return previous
    }, adm[0])

    if (executor.nome.includes("SANDOVAL"))
        responsavel =  'SANDOVAL FILHO CORREIA LIMA FILHO'
    else if (cliente.processo.estado === 'GO' || cliente.processo.estado === 'DF') {
        responsavel = 'HENYR GOIS DOS SANTOS'
    }

    return { responsavel, executor: executor.nome }
}

async function selectExecutorContatar(colaboradores) {
    const isTaskCalculo = removeAcentuacaoString(cliente.compromisso.tipoCompromisso).includes("CALCULO") && removeAcentuacaoString(cliente.compromisso.tarefas[0]).includes("CALCULO")

    if (isTaskCalculo) {
        return await selectExecutorCalculo(colaboradores)
    }
    
    if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        return await selectExecutorContatarJudicial(colaboradores)
    }
    
    return await selectExecutorContatarAdministrativo (colaboradores)
}

async function getTarefasColaboradores(colaborador, [ dia, mes, ano ]){

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

function filterColaboradoresCalculo () {
    const calculo = [
        {
            id: 180,
            nome: "ANSELMO DAVID DOS SANTOS RODRIGUES",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
        {
            id: 100,
            nome: "GUILHERME JASMIM",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
        {
            id: 147,
            nome: "WILKE RODRIGUES DE JESUS",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
    ]
    
    return calculo
}

function filterColaboradoresAdministrativo () {
    const tipoCompromisso = removeAcentuacaoString(cliente.compromisso.tipoCompromisso)

    const INSS = [
        {
            id: 132,
            nome: "DANIEL CABRAL PEREIRA SANTOS",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
        {
            id: 139,
            nome: "FLAVIO LUCAS LIMA SOUZA",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
        {
            id: 115,
            nome: "GABRIEL FRANÇA VITAL",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
        {
            id: 162,
            nome: "MIQUEAS CAMPOS DA SILVA",
            nomeTLC: "miqueas",
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        },
        {
            id: 154,
            nome: "OSMAR SILVA VIANA",
            interiores: [],
            datasViagem: [],
            tarefas: 0
        },
        {
            id: 24,
            nome: "SILVANIA PINHEIRO DE LEMOS",
            nomeTLC: "silvania",
            diasViagem: null,
            contagem: 0,
            atrasadas: 0
        }
    ]

    const colaboradores = INSS.filter(({ nome }) => {

        const nomeNormalizado = removeAcentuacaoString(nome)

        if (tipoCompromisso.includes("EXIGENCIA INSS")) {
            const isFirstTask = cliente.compromisso.tarefas.length === 4
            const isSecondTask = cliente.compromisso.tarefas.length === 3
            const isThirdTask = cliente.compromisso.tarefas.length === 2
            const isLastTask = cliente.compromisso.tarefas.length === 1

            if (isFirstTask) {
                return nomeNormalizado.includes("SILVANIA")
            }
            if (isSecondTask) {
                return nomeNormalizado.includes("FLAVIO")
            }

            if (isThirdTask) {
                return nomeNormalizado.includes("SILVANIA")
            }

            if (isLastTask) {
                return !nomeNormalizado.includes("SILVANIA")
            }
        } else if (tipoCompromisso.includes("PERICIA")) {
            return !nomeNormalizado.includes("FLAVIO") && !nomeNormalizado.includes("SILVANIA")
        }
    })

    return colaboradores
}

function filterColaboradoresJudicial () {
    const colaboradores = []

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
                id: 196,
                nome: "KAUÃ DE CARVALHO NASCIMENTO",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 199,
                nome: "LUCAS NATHAN NOGUEIRA DA SILVA ",
                interiores: ["ESTANCIA", "TOBIAS BARRETO", "PEDRINHAS"],
                datasViagem: [],
                tarefas: 0
            }, //[],
            /* {
                id: 225,
                nome: "ERINALDO FARO SANTOS",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            }, */
            {
                id: 188,
                nome: "VINICIUS SOUSA BOMFIM",
                interiores: ["UMBAUBA", "CARMOPOLIS", "LOTEAMENTO JEOVA (BOTAFOGO)"],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 94,
                nome: "CARLOS HENRIQUE ESPASIANI",
                interiores: ["CAPELA", "JAPARATUBA", "CONDE/BA", "ALAGOINHAS"],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 131,
                nome: "ASLEY RODRIGO DE MELO LIMA",
                interiores: [],
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
        ],
        brasilia = [
            {
                id: 215,
                nome: "JÚLIA ROBERTA DE FÁTIMA SOUSA ARAÚJO",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 223,
                nome: "MATHEUS CAMPELO DA SILVA",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 80,
                nome: "PATRICIA ANDRE SIMÃO DE SOUZA",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
            {
                id: 222,
                nome: "STEFANNY MORAIS DO NASCIMENTO",
                interiores: [],
                datasViagem: [],
                tarefas: 0
            },
        ]

    if (cliente.processo.estado === 'GO' || cliente.processo.estado === 'DF') {
        colaboradores.push(...brasilia)
    } else if (((cliente.cliente.cidade == "ESTANCIA" && cliente.cliente.localAtendido == "ESTANCIA")) || ((parceiros.includes(cliente.cliente.parceiro)) && varaEstancia.includes(cliente.processo.vara))) {
        colaboradores.push(...estancia)
    } else {
        if (varaEstancia.includes(cliente.processo.vara)) {
            alert("Verificar executor manualmente!")
            colaboradores.push(...aracaju)
            colaboradores.push(...estancia)
        } else {
            colaboradores.push(...aracaju)
        }
    }

    debugger

    return colaboradores
}

async function requererTarefasContatar(data) {
    const isJudicial = state.functions.todasPaginas.tipoIntimacaoIsJudicial

    const isTaskCalculo = removeAcentuacaoString(cliente.compromisso.tipoCompromisso).includes("CALCULO") && removeAcentuacaoString(cliente.compromisso.tarefas[0]).includes("CALCULO")

    const colaboradores = isTaskCalculo ? filterColaboradoresCalculo() : isJudicial ? filterColaboradoresJudicial() : filterColaboradoresAdministrativo()

    return colaboradores.map(async colaborador => {
        return await getTarefasColaboradores(colaborador, data)
    })
}

async function validaExecutorContatar () {
    const dataInput = document.querySelector('#dataParaFinalizacao')
    const arrDate = dataInput.value.split('/')
    
    createListaTarefas()

    const colaboradores = await requererTarefasContatar(arrDate)
    
    const executorContatar = await selectExecutorContatar(colaboradores)

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
    const digito = Number(cliente.processo.origem[num-1]),
        financeiro = ["RPV TRF1 BRASILIA", "RPV TRF1 GOIAS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTANCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATORIO"],
        tarefasAdm = ["CONTATAR CLIENTE","LEMBRAR CLIENTE"],
        sac = "SMS E WHATSAPP",
        liminarPericiaAdm = "ACOMPANHAR",
        natureza = cliente.processo.natureza,
        tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso),
        tarefaAtualNormalizada = removeAcentuacaoString(cliente.compromisso.tarefas[0])

    if (tarefaAtualNormalizada.includes(liminarPericiaAdm)  && tarefaAtualNormalizada.includes("ADM")) {
        converterParaTarefaAvulsa()
        return {responsavel: 'LEANDRO SANTOS', executor: 'LEANDRO SANTOS'}
    }
    
    if (tarefaAtualNormalizada.includes("RECEBIMENTO DE ALVARA") && tarefaAtualNormalizada.includes("FINANCEIRO")) {
        converterParaTarefaAvulsa()
        return {responsavel: "VICTOR MENDES DOS SANTOS",executor: "VICTOR MENDES DOS SANTOS"}
    }

    if (financeiro.includes(tarefaAtualNormalizada.split("-")[0].trim()) && tarefaAtualNormalizada.includes("FINANCEIRO")) {
        //let ehMateusFinanceiro = await getFinanceiro()
        //setFinanceiro(!ehMateusFinanceiro)
        return {responsavel: "LUCIANA LIMA REZENDE",executor: "SHEYLA SANTANA SANTOS"} //ehMateusFinanceiro ? "MATEUS DOS SANTOS SILVA":"OVERLANDIA SANTOS MELO"
    }

    if (tarefasAdm.includes(tarefaAtualNormalizada)) {
        if (cliente.cliente.cidade === "ESTANCIA" && cliente.cliente.localAtendido === "ESTANCIA")
            return {responsavel: "SANDOVAL FILHO CORREIA LIMA FILHO",executor: "SANDOVAL FILHO CORREIA LIMA FILHO"}
        return {responsavel: "JULIANO OLIVEIRA DE SOUZA",executor: "JULIANO OLIVEIRA DE SOUZA"}
    }

    if (sac === tarefaAtualNormalizada)
        return {responsavel: "HENYR GOIS DOS SANTOS",executor: "LAYNE DA SILVA GOIS"}

    if (tipoCompromissoNormalizado === "MANIFESTACAO SOBRE CALCULOS" && tarefaAtualNormalizada.includes("ANALISE")) {
        return {responsavel: "GUILHERME JASMIM", executor: "GUILHERME JASMIM"}
    }

    if (natureza === "TRABALHISTA")
        return {responsavel: "FELIPE PANTA CARDOSO",executor: "FELIPE PANTA CARDOSO"}

    if (natureza === "PREVIDENCIÁRIA")
        return {responsavel: "KEVEN FARO DE CARVALHO",executor: "KEVEN FARO DE CARVALHO"}

    if (natureza === "BANCÁRIO" || natureza === "CÍVEL" || natureza === "CONSUMIDOR" || natureza === "SERVIDOR PÚBLICO") {
        const ala = [0,1,8]
        const gabriel = [2,3,4,6]
        if (tarefaAtualNormalizada !== "SESSÃO DE JULGAMENTO" && tarefaAtualNormalizada.search("AUDIENCIA") !== 0) {
            if (gabriel.includes(digito))
                return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "GABRIEL DAVILA FILGUEIRAS MELLONE"}
            if (ala.includes(digito))
                return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "ALÃ FEITOSA CARVALHO"}
        }
        return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "RODRIGO AGUIAR SANTOS"}
    }
}

async function validaResponsavelFederal (num) {
    const tarefaAtualNormalizada = removeAcentuacaoString(cliente.compromisso.tarefas[0]),
        numeroProcesso = cliente.processo.origem,
        financeiro = ["RPV TRF1 BRASILIA", "RPV TRF1 GOIAS", "RPV TRF5 ARACAJU", "RPV TRF5 ESTANCIA", "RPV TRF1 BAHIA", "RECEBIMENTO DE PRECATORIO"],
        tarefasAdm = ["CONTATAR CLIENTE","LEMBRAR CLIENTE"],
        tarefaSac = "SMS E WHATSAPP",
        liminarPericiaAdm = "ACOMPANHAR",
        lengthSecao = 4,
        secao = numeroProcesso.slice(num - lengthSecao,num),
        secaoDFGO = ["3400","3501","3502","3506", "0015"],
        setimoDigito = Number(numeroProcesso[6]),
        digitoVerificador = numeroProcesso.slice(13,16),
        natureza = cliente.processo.natureza

    if (tarefaAtualNormalizada.includes(liminarPericiaAdm) && tarefaAtualNormalizada.includes("ADM")) {
        converterParaTarefaAvulsa()
        return {responsavel: 'LEANDRO SANTOS', executor: 'LEANDRO SANTOS'}
    }
    
    if (tarefaAtualNormalizada.includes("RECEBIMENTO DE ALVARA") && tarefaAtualNormalizada.includes("FINANCEIRO")) {
        converterParaTarefaAvulsa()
        return {responsavel: "VICTOR MENDES DOS SANTOS",executor: "VICTOR MENDES DOS SANTOS"}
    }

    if (financeiro.includes(tarefaAtualNormalizada.split("-")[0].trim()) && tarefaAtualNormalizada.includes("FINANCEIRO")) {
        //let ehMateusFinanceiro = await getFinanceiro()
        //setFinanceiro(!ehMateusFinanceiro)
        return {responsavel: "LUCIANA LIMA REZENDE",executor: "SHEYLA SANTANA SANTOS"} //ehMateusFinanceiro ? "MATEUS DOS SANTOS SILVA":"OVERLANDIA SANTOS MELO"
    }

    if (tarefasAdm.includes(tarefaAtualNormalizada)) {
        //Tarefa contatar para BSB
        if (cliente.processo.estado === "DF" || cliente.processo.estado === "GO") {
            return {responsavel: "HENYR GOIS DOS SANTOS", executor: "HENYR GOIS DOS SANTOS"}
        }

        //Tarefa contatar para escritório de Estância
        if(cliente.cliente.cidade === "ESTANCIA"  && cliente.cliente.localAtendido === "ESTANCIA") { 
            return {responsavel: "SANDOVAL FILHO CORREIA LIMA FILHO",executor: "SANDOVAL FILHO CORREIA LIMA FILHO"}
        }

        //Tarefa contatar para demais localidades
        return {responsavel: "JULIANO OLIVEIRA DE SOUZA",executor: "JULIANO OLIVEIRA DE SOUZA"}
    }

    if (tarefaSac === tarefaAtualNormalizada) { //Tarefas para o SAC
        return {responsavel: "HENYR GOIS DOS SANTOS",executor: "LAYNE DA SILVA GOIS"}
    }

    if ((digitoVerificador === "520" || natureza === "TRABALHISTA") || (natureza === "SERVIDOR PÚBLICO" && cliente.processo.responsavel === "VICTOR HUGO SOUSA ANDRADE")) {  //Processos Trabalhistas TRT20
        return {responsavel: "FELIPE PANTA CARDOSO",executor: "FELIPE PANTA CARDOSO"}
    }

    if (digitoVerificador === "401" || secaoDFGO.includes(secao)) { // Processos do TRF1
        const varasDF = ["23ª VARA FEDERAL BRASÍLIA", "24ª VARA FEDERAL DE BRASÍLIA", "25ª VARA FEDERAL DE BRASÍLIA", "26ª VARA FEDERAL DE BRASÍLIA", "27ª VARA FEDERAL DE BRASÍLIA", "23ª VARA FEDERAL", "24ª VARA FEDERAL", "25ª VARA FEDERAL", "26ª VARA FEDERAL", "27ª VARA FEDERAL", "BRASILIA", "1ª VARA FEDERAL CÍVEL SJGO", "TJ GOIÁS", "VARA FEDERAL DA SSJ LUZIÂNIA-GO", "VARA DE ÁGUAS LINDAS DE GOIÁS", "VARA FEDERAL DE RIO VERDE-GO", "VARA FEDERAL SJDF"]
        
        if ((cliente.processo.estado === "DF" || cliente.processo.estado === "GO")) {
            if (!varasDF.includes(cliente.processo.vara)) {
                alert('Atenção: Confirme o responsável e executor da tarefa!')
            }
            let bruno = [0,1,2]
            if (bruno.includes(setimoDigito) || tarefaAtualNormalizada.search("AUDIENCIA") === 0)
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
                    return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
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

                /* const responsavel = function responsavel () {
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
    
                } */

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
            //return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
                
        }
    }
    
    if (natureza === "CÍVEL" || natureza === "CONSUMIDOR" || natureza === "SERVIDOR PÚBLICO" || natureza === "BANCÁRIO") { //Processos de natureza cível
        if (cliente.processo.estado === "DF" || cliente.processo.estado === "GO") {
            return {responsavel: "BRUNO PRADO GUIMARAES",executor: "BRUNO PRADO GUIMARAES"}
        }
        return {responsavel: "RODRIGO AGUIAR SANTOS",executor: "RODRIGO AGUIAR SANTOS"}
    }
}

function validaResponsavelAdministrativo() {
    const tarefa = removeAcentuacaoString(cliente.compromisso.tarefas[0]),
        tarefaSac = "SMS E WHATSAPP"

        if (tarefaSac === tarefa) {
            return {responsavel: "HENYR GOIS DOS SANTOS",executor: "LAYNE DA SILVA GOIS"}
        }

        return null
}

async function validaEsferaProcesso() {
    if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        const caracteresProcesso = cliente.processo.origem.length
        const lengthCharProcessTJ = 12
        const lengthCharProcessFederalProtocol = 15
        const lengthCharProcessFederalEcint = 17
        const lengthCharProcessAllFederal = 20
    
        if (caracteresProcesso === lengthCharProcessTJ) {
            return await validaResponsavelTj(caracteresProcesso)
        }
        
        if (caracteresProcesso === lengthCharProcessFederalProtocol || caracteresProcesso === lengthCharProcessFederalEcint || caracteresProcesso === lengthCharProcessAllFederal) {
            return await validaResponsavelFederal(caracteresProcesso)
        }
    
        alert("Erro no cadastro do número do processo")
    } else {
        return validaResponsavelAdministrativo()
    }

    return null
}

function validaTipoCompromisso(descriptionCompromisso) {
    const { cidade, estado } = cliente.processo
    const descriptionCompromissoNormalizado = removeAcentuacaoString(descriptionCompromisso)
    const pauta = ["PAUTA", "RETIRADO DE PAUTA"]
    const emendar = ["DADOS PERICIA SOCIAL", "DADOS COMPLEMENTARES", "EMENDA", "EMENDA A INICIAL", "EMENDAR A INICIAL", "EMENDAR"]
    const pedidoVistas = ["PEDIDO DE VISTAS", "PEDIDO DE VISTA"]

    if (descriptionCompromissoNormalizado === "RPV") {
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
    
    if (pauta.includes(descriptionCompromissoNormalizado))
        return "SESSÃO DE JULGAMENTO"

    if (descriptionCompromissoNormalizado === "ALVARA")
        return "RECEBIMENTO DE ALVARÁ"

    if (descriptionCompromissoNormalizado === "PRECATORIO")
        return "RECEBIMENTO DE PRECATÓRIO"
    
    if (descriptionCompromissoNormalizado === "AUDIENCIA DE CONCILIACAO")
        return "AUDIÊNCIA CONCILIATÓRIA"
    
    if (descriptionCompromissoNormalizado === "AUDIENCIA INICIAL")
        return "AUDIÊNCIA INAUGURAL"
    
    if (descriptionCompromissoNormalizado === "PLANILHA")
        return "CÁLCULOS"
    
    if (emendar.includes(descriptionCompromissoNormalizado))
        return "EMENDAR"
    
    if (pedidoVistas.includes(descriptionCompromissoNormalizado))
        return "MANIFESTAÇÃO"

    return descriptionCompromisso
}

function desmarcarCaixaTarefaSequencia() {
    const box = document.querySelector("#incluirOutra")
    box.checked = false
}

async function submitAtualizarTarefa () {
    const formTarefa = document.querySelector("#fdt-form")
    const gravarBtn = document.querySelector("#btnGravar")
    const descricaoTarefa = document.querySelector("#descricao")

    gravarBtn.addEventListener('click', async event => {
        event.preventDefault()

        if (cliente.compromisso.tarefas.length === cliente.compromisso.quantidadeTarefas) {
            cliente.compromisso.descricao = descricaoTarefa.value
        }

        cliente.compromisso.tarefas.shift()
        desativarAtualizacao()
        await setCliente(cliente)

        if (!state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
            await createHistorico()
        }

        formTarefa.submit()
    })
}

function existeOrigem() {
    if (cliente.processo.dependente)
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

function atualizaDescricao (descricaoTarefa, horarioInicial, horarioFinal, local) {
    const isJudicial = state.functions.todasPaginas.tipoIntimacaoIsJudicial
    const fistWordInTarefa = removeAcentuacaoString(cliente.compromisso.tarefas[0].split(" ")[0]),
        localText = getEndereço(local),
        numero = isJudicial ? existeOrigem() : cliente.requerimento.protocolo,
        tipoTarefaNormalizado = removeAcentuacaoString(cliente.compromisso.tarefas[0]),
        tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso)
        
    horarioFinal.value = atualizaHora(horarioInicial)

    
    if (cliente.compromisso.descricao && removeAcentuacaoString(fistWordInTarefa) !== "ANALISE" && tipoTarefaNormalizado !== "ATO ORDINATORIO" && cliente.compromisso.tipoCompromisso !== "EMENDAR"  && !tipoCompromissoNormalizado.includes('DECISAO ANTECIPACAO PERICIA') && !tipoCompromissoNormalizado.includes("EXIGENCIA")) {

        descricaoTarefa.value = cliente.compromisso.descricao

    } else if (tipoCompromissoNormalizado.search('PERICIA') === 0 && cliente.compromisso.quantidadeTarefas === cliente.compromisso.tarefas.length) {
        if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
            const perito = document.querySelector('#inputPerito')
    
            descricaoTarefa.value = `${numero} - ${cliente.compromisso.tipoCompromisso} DE ${cliente.cliente.nome} (${cliente.cliente.cpf}), NO DIA ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, PERITO: ${perito ? perito.value : ''}, LOCAL: ${localText}`
        } else {
            const inputEndereco = document.querySelector('#inputEndereco')

            descricaoTarefa.value = `${numero} - ${cliente.compromisso.tipoCompromisso}: DATA E HORA: ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, LOCAL: ${localText}, ENDEREÇO: ${inputEndereco ? inputEndereco.value : ''}. ORIENTAR A LEVAR O AGENDAMENTO, RELATÓRIOS MÉDICOS E DOCUMENTOS PERTINENTES A ATIVIDADE RURAL / PESCADO (CASO EXERÇA). CHEGAR COM 30 MINUTOS DE ANTECEDÊNCIA`
        }

    } else if (isJudicial) {

        if (fistWordInTarefa == "AUDIENCIA" && cliente.compromisso.quantidadeTarefas === cliente.compromisso.tarefas.length) {

            descricaoTarefa.value = `${numero} - ${cliente.compromisso.tipoCompromisso} DE ${cliente.cliente.nome} (${cliente.cliente.cpf}) X ${cliente.processo.reu.length > 0 ? cliente.processo.reu : ''}, NO DIA ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, LOCAL: ${localText}`

        }
        else if (tipoTarefaNormalizado === "ATO ORDINATORIO" && tipoCompromissoNormalizado.includes('PERICIA')) {

            descricaoTarefa.value = `${numero} - ATO ORDINATÓRIO (PERÍCIA DESIGNADA)`

        } else if ((fistWordInTarefa === "ANALISE") && tipoCompromissoNormalizado.search('AUDIENCIA') === 0) {

            descricaoTarefa.value = `${numero} - VERIFICAR NECESSIDADE DE TESTEMUNHAS`

        } else if ((cliente.compromisso.tipoCompromisso === "EMENDAR") && (cliente.compromisso.tarefas[0] === "CONTATAR CLIENTE")) {

            descricaoTarefa.value = `${numero} - `

        } else if (tipoTarefaNormalizado.includes('ACOMPANHAR')  && tipoCompromissoNormalizado.includes('DECISAO ANTECIPACAO PERICIA')) {
            descricaoTarefa.value = `${numero} - ACOMPANHAR ANTECIPAÇÃO DA PERÍCIA ADMINISTRATIVA`
        } else {

            descricaoTarefa.value = `${numero} - ${cliente.compromisso.tipoCompromisso}`

        }
    } else {
        if (tipoTarefaNormalizado === "ANALISE DE EXIGENCIA INSS DIGITAL") {

            descricaoTarefa.value = `${numero} - EXIGÊNCIA INSS DIGITAL P.F. ${cliente.compromisso.prazoFatal}`

        } else if (tipoTarefaNormalizado === "INTERVENCAO - CONTROLE INSS DIGITAL") {

            descricaoTarefa.value = `${numero} - VERIFICAR DIGILIGÊNCIAS EM RELAÇÃO A ANÁLISE DA EXIGÊNCIA P.F. ${cliente.compromisso.prazoFatal}`

        } else if (tipoTarefaNormalizado === "CUMPRIMENTO EXIGENCIA INSS DIGITAL") {

            descricaoTarefa.value = `${numero} - CUMPRIR EXIGÊNCIAS INSS DIGITAL P.F. ${cliente.compromisso.prazoFatal}`

        }
    }
}

function searchTipoIntimacao(selectTipoIntimacaoInput) {
    
    const tipoIntimacaoToUpperNormalized = removeAcentuacaoString(cliente.compromisso.tarefas[0].toUpperCase()).split("-")[0].trim()
    let achou = false,
        inputManifestacao = null,
        shortInput = null
    
    for (const option of selectTipoIntimacaoInput) {
        const optionToUpperNormalized = removeAcentuacaoString(option.innerText.toUpperCase().trim())
        const isManifestacao = optionToUpperNormalized.includes("MANIFESTACAO")
        const isTask = optionToUpperNormalized === tipoIntimacaoToUpperNormalized
        const fistWordIncluded = optionToUpperNormalized.includes(tipoIntimacaoToUpperNormalized.split(" ")[0])
        
        if (isManifestacao) {
            inputManifestacao = option.children[0]
        }

        if (isTask) {
            return option.children[0]
        } else {
            if (!shortInput && fistWordIncluded) {
                shortInput = option.children[0]
                achou = true
            }
        }
    }
    
    if (achou) {
        return shortInput
    }
    
    return inputManifestacao
}

function selectTipoIntimacao() {
    const selectTipoIntimacaoInput = document.querySelectorAll("#fdt-form > div:nth-child(10) > div.form-group.col-sm-8 > div > div > ul > li")

    const listener = () => {
        const selectTipoIntimacaoInput = document.querySelectorAll("#fdt-form > div:nth-child(10) > div.form-group.col-sm-8 > div > div > ul > li")

        searchTipoIntimacao(selectTipoIntimacaoInput).click()
    }

    if (!selectTipoIntimacaoInput.length) {
        const target = document.querySelector("#fdt-form > div:nth-child(10) > div.form-group.col-sm-8")
        loadObserver(listener, target)
    } else {
        listener()
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
    const idInputSecundario = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? 'inputPerito' : 'inputEndereco'
    const tarefaNormal = document.querySelector('#divTipoTarefaNormal'),
        dataInput = document.querySelector('#divTipoTarefaNormal > div:nth-child(1) > div.col-sm-8'),
        horarioFinal = document.querySelector("#horarioFinal"),
        descricaoTarefa = document.querySelector("#descricao"),
        divRow2 = document.createElement('div'),
        divSecundario = document.createElement('div'),
        labelSecundario = document.createElement('label'),
        inputSecundario = document.createElement('input'),
        divLocal = document.createElement('div'),
        labelLocal = document.createElement('label'),
        inputLocal = document.createElement('input'),
        divHorarioInicial = document.createElement('div'),
        labelHorarioInicial = document.createElement('label'),
        inputHorarioInicial = document.createElement('input')
    
    
    dataInput.setAttribute('class','form-group col-sm-4')
    divRow2.setAttribute('class','row')
    tarefaNormal.appendChild(divRow2)
    
    labelSecundario.innerHTML = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? 'Perito(a): ' : 'Endereço: '
    divSecundario.setAttribute('class','form-group col-sm-4')
    inputSecundario.setAttribute('class','form-control')
    inputSecundario.setAttribute('id', idInputSecundario)
    
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
    
    inputLocal.addEventListener('input', async () => {
        inputLocal.value = inputLocal.value.toUpperCase()
        atualizaDescricao(descricaoTarefa, inputHorarioInicial,horarioFinal, inputLocal)
        cliente.compromisso.local = inputLocal.value
        await setCliente(cliente)
    })

    divRow2.appendChild(divHorarioInicial)
    divHorarioInicial.appendChild(labelHorarioInicial)
    divHorarioInicial.appendChild(inputHorarioInicial)
    inputHorarioInicial.value = '00:00'
    inputHorarioInicial.addEventListener('input', async () => {
        inputHorarioInicial.value = inputHorarioInicial.value.toUpperCase()
        atualizaDescricao(descricaoTarefa, inputHorarioInicial,horarioFinal, inputLocal)
        cliente.compromisso.horario = inputHorarioInicial.value
        await setCliente(cliente)
    })

    divRow2.appendChild(divSecundario)
    divSecundario.appendChild(labelSecundario)
    divSecundario.appendChild(inputSecundario)
    inputSecundario.addEventListener('input', async () => {
        inputSecundario.value = inputSecundario.value.toUpperCase()
        atualizaDescricao(descricaoTarefa, inputHorarioInicial, horarioFinal, inputLocal)
        if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
            cliente.compromisso.perito = inputSecundario.value
        } else {
            cliente.compromisso.endereco = inputSecundario.value
        }
        await setCliente(cliente)
    })
}

async function selecionarResponsavelExecutor(option) {
    const adv = await validaEsferaProcesso()

    if (adv)
        selectRespExec(adv)

    const isTaskCalculo = removeAcentuacaoString(cliente.compromisso.tipoCompromisso).includes("CALCULO") && removeAcentuacaoString(cliente.compromisso.tarefas[0]).includes("CALCULO")
    const isTaskContatar = option.children[0].children[0].innerText.toUpperCase() == "CONTATAR CLIENTE"
    const isTaskLembrar = option.children[0].children[0].innerText.toUpperCase() == "LEMBRAR CLIENTE"
    const isTaskWhatsapp = option.children[0].children[0].innerText.toUpperCase() == "SMS E WHATSAPP"
    const isDFOrGO = cliente.processo.estado === "DF" || cliente.processo.estado === "GO"

    if ((isTaskContatar || isTaskLembrar) || (isDFOrGO && (isTaskContatar || isTaskLembrar || isTaskWhatsapp)) || !state.functions.todasPaginas.tipoIntimacaoIsJudicial && !adv || isTaskCalculo) {
        validaExecutorContatar()
    }

}

function loadInfo () {
    if (!state.functions.cadastroTarefa.AutoPreenchimentoTarefasIntimacoes || !cliente.compromisso.tarefas.length) {
        return
    }

    const descricaoTarefa = document.querySelector("#descricao"),
        optionsLi = document.querySelectorAll(`#fdt-form > div:nth-child(10) > div.form-group.col-sm-8 > div > div > ul > li`),
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
    
    for (const option of optionsLi) {
        option.children[0].addEventListener('click', async () => {

            const eventTargets = [horarioInicial, local, processoDependente],
                contactdiv = document.querySelector("#contactdiv")

            const arrayAudiencias = ["AUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO", "AUDIÊNCIA UNA", "AUDIÊNCIA DE INSTRUÇÃO", "AUDIÊNCIA INICIAL", "AUDIÊNCIA INAUGURAL"]

            const ehTarefaParaAdmOuSac = ((cliente.compromisso.tarefas[0] == "CONTATAR CLIENTE") || (cliente.compromisso.tarefas[0] == "LEMBRAR CLIENTE") || (cliente.compromisso.tarefas[0] == "SMS E WHATSAPP")),
                ehAudiencia = (arrayAudiencias.includes(cliente.compromisso.tipoCompromisso))

            if (removeAcentuacaoString(cliente.compromisso.tipoCompromisso).search('PERICIA') == 0 && cliente.compromisso.tarefas.length === cliente.compromisso.quantidadeTarefas)
                mostrarCamposPericia()

            calcularDataTarefa((ehTarefaParaAdmOuSac || ehAudiencia) ? parametros.tarefaContatar : parametros.tarefaAdvogado)

            if ((horarioInicial.value.length == 0 || local.value.length == 0))
                atualizaDescricao(descricaoTarefa, horarioInicial, horarioFinal, local)

            eventTargets.forEach(element => {
                if (element)
                    element.addEventListener(element == horarioInicial ? 'blur':'input', () => {
                        atualizaDescricao(descricaoTarefa, horarioInicial, horarioFinal, local)
                    })
            })

            if (contactdiv) {
                contactdiv.parentNode.removeChild(contactdiv)
            }

            selecionarResponsavelExecutor(option)

            submitAtualizarTarefa()

            if (cliente.compromisso.tarefas.length === 1) {
                desmarcarCaixaTarefaSequencia()
            }
        })
    }

    selectTipoIntimacao()
}


function focarInputProcesso() {
    const inputProcesso = document.querySelector("#bsAdvProcessosTexto")

    if (inputProcesso) {
        inputProcesso.value = ""
        inputProcesso.focus()
    }
}

async function requestIdClientFromProtocol(protocolo) {
    
    const parser = new DOMParser()
    const urlRequest = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/inss/default.asp"
    const formData = `bsAdvINSS=s&org=&bsAdvINSSData=inssData&bsAdvINSSDataDe=29%2F06%2F2010&bsAdvINSSDataAte=02%2F07%2F2050&bsAdvINSSCpf=&bsAdvINSSResponsavel=&bsAdvINSSCliente=&bsAdvINSSProtocolo=${protocolo}&filtrar=Filtrar`

    const doc = await fetch(urlRequest, {
        method: "POST",
        body: formData,
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }).then(function (response) {
        return response.blob()
    }).then(async (result) => parser.parseFromString(await result.text(),'text/html'))
    
    const urlFichaCliente = await doc.documentElement.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td.fdt-acao > div > div > a:nth-child(3)").href
    
    return urlFichaCliente.split("idPK=")[1]
}

async function extrairDadosRequisicaoRequerimentoHtml(response) {
    const dataClient = {
        requerimento: {
            id: response.documentElement.querySelector("#fdt-form > input[type=hidden]:nth-child(1)").value.toUpperCase(),
            protocolo: response.documentElement.querySelector("#inssProtocolo").value.toUpperCase(),
            data: response.documentElement.querySelector("#inssData").value.toUpperCase()
        }
    }

    const selectResponsavelRequerimento = response.documentElement.querySelector("#inssResponsavel")
    const indexResponsavelRequerimento = selectResponsavelRequerimento.selectedIndex
    dataClient.requerimento.responsavel = indexResponsavelRequerimento === -1 ? "" : selectResponsavelRequerimento.options[indexResponsavelRequerimento].innerText.toUpperCase()

    const selectTipoBeneficioRequerimento = response.documentElement.querySelector("#inssIdTipoBeneficio")
    const indexTipoBeneficioRequerimento = selectTipoBeneficioRequerimento.selectedIndex
    dataClient.requerimento.tipoBeneficio = indexTipoBeneficioRequerimento === -1 ? "" : selectTipoBeneficioRequerimento.options[indexTipoBeneficioRequerimento].innerText.toUpperCase()

    const selectPostoINSSRequerimento = response.documentElement.querySelector("#inssIdPosto")
    const indexPostoINSSRequerimento = selectPostoINSSRequerimento.selectedIndex
    dataClient.requerimento.postoINSS = indexPostoINSSRequerimento === -1 ? "" : selectPostoINSSRequerimento.options[indexPostoINSSRequerimento].innerText.toUpperCase()

    const selectStatusRequerimento = response.documentElement.querySelector("#idStatus")
    const indexStatusRequerimento = selectStatusRequerimento.selectedIndex
    dataClient.requerimento.status = indexStatusRequerimento === -1 ? "" : selectStatusRequerimento.options[indexStatusRequerimento].innerText.toUpperCase()

    dataClient.idCliente = await requestIdClientFromProtocol(dataClient.requerimento.protocolo)

    return dataClient

}

function extrairDadosRequisicaoClienteHtml(response) {
    
    const dataClient = {
        nome: response.documentElement.querySelector("#apelido").value.toUpperCase(),
        cpf: response.documentElement.querySelector("#cpf").value.toUpperCase(),
    }
    
    const selectParceiro = response.documentElement.querySelector("#idFornecedor")
    const indexParceiro = selectParceiro.selectedIndex
    dataClient.parceiro = indexParceiro === -1 ? "" : selectParceiro.options[indexParceiro].innerText.toUpperCase()

    const selectLocalAtendido = response.documentElement.querySelector("#idLocalAtendido")
    const indexLocalAtendido = selectLocalAtendido.selectedIndex
    dataClient.localAtendido = indexLocalAtendido === -1 ? "" : selectLocalAtendido.options[indexLocalAtendido].innerText.toUpperCase()

    const selectCidade = response.documentElement.querySelector("#lstCidade")
    const indexCidade = selectCidade.selectedIndex
    dataClient.cidade = indexCidade === -1 ? "" : selectCidade.options[indexCidade].innerText.toUpperCase()

    const selectEstado = response.documentElement.querySelector("#lstEstado")
    const indexEstado = selectEstado.selectedIndex
    dataClient.estado = indexEstado === -1 ? "" : selectEstado.options[indexEstado].value.toUpperCase()

    const selectSituacao = response.documentElement.querySelector("#idSituacao")
    const indexSituacao = selectSituacao.selectedIndex
    dataClient.situacao = indexSituacao === -1 ? "" : selectSituacao.options[indexSituacao].innerText.toUpperCase()

    return dataClient

}

function extrairDadosRequisicaoProcessoHtml(response) {
    
    const dataClient = {
        idCliente: response.documentElement.querySelector("#fdt-form > input[type=hidden]:nth-child(2)").value.toUpperCase(),
        processo: {
            id: response.documentElement.querySelector("#fdt-form > input[type=hidden]:nth-child(1)").value.toUpperCase(),
            origem: response.documentElement.querySelector("#numero").value.toUpperCase(),
            reu: response.documentElement.querySelector("#nomeReu").value.toUpperCase(),
        }
    }

    const selectResponsavelProcesso = response.documentElement.querySelector("#idResponsavel")
    const indexResponsavelProcesso = selectResponsavelProcesso.selectedIndex
    dataClient.processo.responsavel = indexResponsavelProcesso === -1 ? "" : selectResponsavelProcesso.options[indexResponsavelProcesso].innerText.toUpperCase()
    

    const selectNaturezaProcesso = response.documentElement.querySelector("#idNatureza")
    const indexNaturezaProcesso = selectNaturezaProcesso.selectedIndex
    dataClient.processo.natureza = indexNaturezaProcesso === -1 ? 0 : selectNaturezaProcesso.options[indexNaturezaProcesso].innerText.toUpperCase()

    const selectMeritoProcesso = response.documentElement.querySelector("#idMerito")
    const indexMeritoProcesso = selectMeritoProcesso.selectedIndex
    dataClient.processo.merito = indexMeritoProcesso === -1 ? 0 : selectMeritoProcesso.options[indexMeritoProcesso].innerText.toUpperCase()

    const selectCidadeProcesso = response.documentElement.querySelector("#lstCidade")
    const indexCidadeProcesso = selectCidadeProcesso.selectedIndex
    dataClient.processo.cidade = indexCidadeProcesso === -1 ? 0 : selectCidadeProcesso.options[indexCidadeProcesso].innerText.toUpperCase()
    
    const selectEstadoProcesso = response.documentElement.querySelector("#lstEstado")
    const indexEstadoProcesso = selectEstadoProcesso.selectedIndex
    dataClient.processo.estado = indexEstadoProcesso === -1 ? 0 : selectEstadoProcesso.options[indexEstadoProcesso].value.toUpperCase()

    const selectVaraProcesso = response.documentElement.querySelector("#idVara")
    const indexVaraProcesso = selectVaraProcesso.selectedIndex
    dataClient.processo.vara = indexVaraProcesso === -1 ? 0 : selectVaraProcesso.options[indexVaraProcesso].innerText.toUpperCase()

    return dataClient
}

async function requestDataCliente(params) {
    
    const modules = {
        inss: {
            link: "http://fabioribeiro.eastus.cloudapp.azure.com/adv/inss/formulario.asp?idPK=",
            functionRequest: extrairDadosRequisicaoRequerimentoHtml
        },
        cliente: {
            link: "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/formulario.asp?idPK=",
            functionRequest: extrairDadosRequisicaoClienteHtml
        },
        processos: {
            link: "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/formulario.asp?idPK=",
            functionRequest: extrairDadosRequisicaoProcessoHtml
        }
    }

    if (params.gravarBtn)
        params.gravarBtn.disabled = true
    
    const { link, functionRequest } = modules[params.module]
    const doc = await ajax(link, params.id)

    if (params.gravarBtn)
        params.gravarBtn.disabled = false

    return await functionRequest(doc)
}

async function ajax(link, id) {
    
    const parser = new DOMParser()

    const urlRequest = `${link}${id}`

    return await fetch(urlRequest, {
            method: "GET",
            body: null,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
    }).then(function (response) {
        return response.blob()
    }).then(async (result) => parser.parseFromString(await result.text(),'text/html'))
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

function addEventToAutocomplete() {
    const editTarefaBtn = document.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')
    
    if (editTarefaBtn) {
        editTarefaBtn.forEach(element => {
            const button = element.children[1].children[0].children[1].children[1]
            if (button) {
                button.addEventListener('click',() => {
                    setAutoComplete(false)
                })
            }
        })
    }
}

function removeAcentuacaoString (string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

async function preenchimentoTarefasDeCompromissos() {
    cliente = await getCliente()
    if (cliente.compromisso.atualizar)
        createInputDependente()
    loadInfo()
}

async function setIdClientPreProcesso() {
    const idClient = document.querySelector("#fdt-form > input[type=hidden]:nth-child(1)").value
    cliente.cliente.id = idClient
    await setCliente(cliente)
}

async function preenchimentoFormularioPreProcesso() {
    
    if (!state.functions.preProcesso.preenchimentoFormularioPreProcesso) {
        return
    }

    cliente = await getCliente()
    
    const naturezaTitle = document.querySelector("#nomeTipo").value
            
    const gravarBtn = document.querySelector("#btnGravar")

    const { estado, localAtendido, situacao } = await requestDataCliente({
        id: cliente.cliente.id,
        module: "cliente",
        gravarBtn
    })
    
    const selectItemList = (options, reference, isLocalOrigem = null) => {
        options.forEach(option => {
            let isOptionForReference = option.innerText.toUpperCase().trim() === reference.toUpperCase().trim()

            if (isLocalOrigem) {
                isOptionForReference = option.innerText.toUpperCase().trim().includes(reference.toUpperCase().trim())
            }

            if (isOptionForReference) {
                option.children[0].click()
            }
        })
    }

    const verificarResposavel = () => {
        const naturezaNormalizado = removeAcentuacaoString(naturezaTitle).toLowerCase()
        const responsaveis = {
            calculo: "GUILHERME JASMIM",
            civel: "RODRIGO AGUIAR SANTOS",
            indefinido: "",
            "inss digital": "SILVANIA PINHEIRO DE LEMOS",
            previdenciario: {
                bsb: "BRUNO PRADO GUIMARAES",
                outros: "MARCUS VINICIUS DE SOUZA MORAIS"
            },
            trabalhista: "FELIPE PANTA CARDOSO"
        }
        
        if (naturezaNormalizado === "previdenciario") {
            if (estado === "GO" || estado === "DF")
                return responsaveis.previdenciario.bsb
            return responsaveis.previdenciario.outros
        }
        return responsaveis[naturezaNormalizado]
    }

    const primeiraVez = document.querySelectorAll("#fdt-form > div:nth-child(7) > div.col-sm-3 > div > div > ul > li")
    selectItemList(primeiraVez, situacao === 'CLIENTE 1ª VEZ' ? 'Sim': 'Não')

    const origem = document.querySelectorAll("#fdt-form > div:nth-child(7) > div.form-group.col-sm-2 > div > div > ul > li")
    selectItemList(origem, 'A identificar')
    
    const advogado = document.querySelectorAll("#fdt-form > div:nth-child(9) > div:nth-child(2) > div > div > ul > li")
    const responsavel = verificarResposavel()
    selectItemList(advogado, responsavel)

    const escritorioOrigem = document.querySelectorAll("#fdt-form > div:nth-child(9) > div:nth-child(3) > div > div > ul > li")
    selectItemList(escritorioOrigem, localAtendido, true)

    const escritorioResponsavel = document.querySelectorAll("#fdt-form > div:nth-child(9) > div:nth-child(4) > div > div > ul > li")
    selectItemList(escritorioResponsavel, "Matriz (Aracaju)")

    const naturezaAcao = document.querySelectorAll("#fdt-form > div:nth-child(11) > div:nth-child(2) > div > div > ul > li")
    selectItemList(naturezaAcao, naturezaTitle === "Previdenciário" ? "Previdenciária" : naturezaTitle)
}

function prenchimentoNomePasta() {
    if (!state.functions.preProcesso.preenchimentoNomePasta) {
        return
    }

    const nome = document.querySelector("#fdt-form > div.row.fdt-ficha > div:nth-child(1) > span"),
        cpf = document.querySelector("#fdt-form > div.row.fdt-ficha > div:nth-child(2) > span"),
        nomePastaInput = document.querySelector("#preProcessoPasta")

    nomePastaInput.value = removeCaracteresProcesso(cpf.innerText).replaceAll(".", "").replaceAll("-", "") + removeAcentuacaoString(nome.innerText).toUpperCase().replaceAll(" ", "")
}

function createExportButtonGeridListNotifications() {

    const notifications = document.querySelectorAll("#notificacoesBarra > div.filtro-content > div.card")

    const arrayNotifications = Array.from(notifications).map(notification => {
        return {
            titulo: notification.querySelector("div.conteudo > div:nth-child(1) > div > span").innerText,
            subtitulo: notification.querySelector("div.conteudo > div.open").innerText
        }
    })
    
    const divIcons = document.querySelector("#notificacoesBarra > div.barra-opcoes-notificacao > div:nth-child(2)")

    const button = document.createElement("button")

    button.innerHTML = "EXPORTAR CSV"
    const hoje = new Date()
    const nome = `GERID-${hoje.toLocaleDateString().replaceAll("/", "-")}`

    button.addEventListener("click", () => toCSV(arrayNotifications, nome))

    divIcons.append(button)
}

function addListenersCompromisso() {
    const dataFinal =  document.querySelector("#dataPrazoFatal"),
        dataInicial = document.querySelector("#dataPrazoInterno"),
        tipoIntimacao = document.querySelector("#descricao"),
        formCompromisso = document.querySelector("#fdt-form"),
        gravarBtn = document.querySelector("#fdt-form > div.row.margemCima20 > div > input.btn.fdt-btn-verde")

    handleCompromisso()

    gravarBtn.addEventListener("click", async event => {
        event.preventDefault()
        cliente.compromisso.prazoInterno = dataInicial.value
        cliente.compromisso.prazoFatal = dataFinal.value
        cliente.compromisso.quantidadeTarefas = cliente.compromisso.tarefas.length
        await setCliente(cliente)
        formCompromisso.submit()
    })
    
    dataInicial.addEventListener('blur', async () => {
        cliente.compromisso.tarefas = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? getListaTarefasCompromissoJudicial() : getListaTarefasCompromissoAdministrativo()
        atualizarListaTarefasAbaCompromissos()
        await setCliente(cliente)
    })

    dataFinal.addEventListener('blur', async () => {
        const indiceAudiencia = removeAcentuacaoString(tipoIntimacao.value).search('AUDIENCIA'),
            indicePericia = removeAcentuacaoString(tipoIntimacao.value).search('PERICIA'),
            indicePauta = tipoIntimacao.value.search('PAUTA'),
            ehAudiencia = (indiceAudiencia == 0),
            ehPericia = (indicePericia == 0),
            ehPauta = (indicePauta == 0)

        if (ehAudiencia || ehPauta || ehPericia) {
            if (state.functions.cadastroCompromisso.AutoPreenchimentoPrazoInterno)
                dataInicial.value = dataFinal.value
            cliente.compromisso.tarefas = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? getListaTarefasCompromissoJudicial() : getListaTarefasCompromissoAdministrativo()
            atualizarListaTarefasAbaCompromissos()
            await setCliente(cliente)
        }
    })
}

async function buscarDadosClienteProcessos(url) {
    const gravarBtn = document.querySelector("#fdt-form > div.row.margemCima20 > div > input.btn.fdt-btn-verde"),
        idProcesso = getIdCliente(url)

    const { idCliente, processo, requerimento } = await requestDataCliente({
        id: idProcesso,
        module: state.functions.todasPaginas.tipoIntimacaoIsJudicial ? "processos" : "inss",
        gravarBtn
    })

    const { nome, cpf, estado, cidade, localAtendido, parceiro } = await requestDataCliente({
        id: idCliente,
        module: "cliente",
        gravarBtn
    })
    
    cliente.cliente.id = idCliente
    cliente.cliente.nome = nome
    cliente.cliente.cpf = cpf
    cliente.cliente.estado = estado
    cliente.cliente.cidade = cidade
    cliente.cliente.localAtendido = localAtendido
    cliente.cliente.parceiro = parceiro

    if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        cliente.processo.id = idProcesso
        cliente.processo.origem = processo.origem
        cliente.processo.reu = processo.reu
        cliente.processo.responsavel = processo.responsavel
        cliente.processo.natureza = processo.natureza
        cliente.processo.merito = processo.merito
        cliente.processo.estado = processo.estado
        cliente.processo.cidade = processo.cidade
        cliente.processo.vara = processo.vara
    } else {
        cliente.requerimento.id = requerimento.id
        cliente.requerimento.protocolo = requerimento.protocolo
        cliente.requerimento.responsavel = requerimento.responsavel
        cliente.requerimento.tipoBeneficio = requerimento.tipoBeneficio
        cliente.requerimento.status = requerimento.status
        cliente.requerimento.data = requerimento.data
        cliente.requerimento.postoINSS = requerimento.postoINSS
    }

    setCliente(cliente)
}

function datepickerHighlighter () {

    if (!state.functions.todasPaginas.datepickerHighlighter) {
        return
    }

    const datepickers = document.querySelectorAll(".datepicker")

    datepickers.forEach(datepicker => {
    
        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                    const dateTimeWidget = datepicker.querySelector(".bootstrap-datetimepicker-widget")
                
                    if (dateTimeWidget) {
                        const tbody = dateTimeWidget.querySelector("ul > li:nth-child(1) > div > div.datepicker-days > table > tbody")
                        const tds = tbody.querySelectorAll("td")
                        tds.forEach(td => {
                            if (td.dataset.day) {
                                const [dia, mes, ano] = td.dataset.day.split("/")
                                const date = new Date(`${mes}/${dia}/${ano}`)
                                const { isHoliday, holiday, isNacional } = isFeriado(date, parametros.highlight, ano)
                                
                                if (isHoliday) {
                                    td.style.backgroundColor = isNacional ? '#fce3e4' : '#CCC'
                                    td.style.border = isNacional ? '1px solid #fe9595' : '1px solid #ffe5e7'
                                    td.title = holiday
                                }
                            }
                        })
                    }
                }
            }
        }
    
        const observer = new MutationObserver(callback)
        
        observer.observe(datepicker, { attributes: true, childList: true, subtree: true })
    })
}

function criarTarefaClientePrimeiraVez() {
    if (!state.functions.abaCadastroCliente.criarTarefaCRM) {
        return
    }

    const formCliente = document.querySelector("#fdt-form")
    const btnGravar = document.querySelector("#btnGravar")
    const idSituacaoClientePrimeiraVez = "10"

    btnGravar.addEventListener('click', async event => {
        event.preventDefault()

        btnGravar.disabled = true
        
        if (formCliente.idSituacao.value === idSituacaoClientePrimeiraVez) { //Leads === 13
            const formData = new FormData(formCliente)
    
            try {
                const idCL = await createCliente(formData)
    
                if (!idCL) {
                    throw new Error('Falha ao criar cliente.')
                }
                const dataParaFinalizacao = calcularProximoDiaUtil(parametros.tarefaContatar)
                await createTarefa({ idCL, dataParaFinalizacao })
    
                const pageAddFoto = `http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/foto.asp?msg=add&idPK=${idCL}`
                window.location.replace(pageAddFoto)
            } catch (error) {
                console.error(error)
                formCliente.submit()
            }
        } else {
            formCliente.submit()
        }
    })
}

async function idPage(url) {
    
    const urlClienteCadastro = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/formulario.asp?org=',
        urlProcessosCadastro = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/formulario",
        urlProcessos = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/default",
        urlCompromissos = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/formulario",
        urlCompromissoFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/ficha",
        urlCompromissoDefault = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/default.asp",
        urlCompromissoEscolherTipo= "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/incluirEscolhe.asp",
        urlTarefas = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/formulario",
        urlTarefasFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default",
        urlClienteAddtarefa = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/default",
        urlCadastroPreProcesso = "http://fabioribeiro.eastus.cloudapp.azure.com/pre/preProcessos/formulario.asp",
        urlCadastroPreProcessoPasta = "http://fabioribeiro.eastus.cloudapp.azure.com/pre/preProcessos/formularioCria.asp",
        urlSistemaFR = "http://fabioribeiro.eastus.cloudapp.azure.com",
        urlPortalDoAdvogadoTJSE = "https://www.tjse.jus.br/tjnet/portaladv/index.wsp",
        urlPJE = "/pje/",
        urlCRETA = 'https://creta.jfse.jus.br/',
        urlTRF51G = 'https://pje.jfse.jus.br/',
        urlTRF52G = 'https://pje.trf5.jus.br/',
        urlGeridINSS = "https://atendimento.inss.gov.br/",
        autoCompletar = await getAutoComplete(),
        pageBuscaProcessos = url.includes(urlProcessos),
        pageTarefas = url.includes(urlTarefas),
        pageCompromissos = url.includes(urlCompromissos),
        pageCompromissoEscolherTipo = url.includes(urlCompromissoEscolherTipo),
        pageCadastroCliente = url.includes(urlClienteCadastro),
        pageCadastroProcesso = url.includes(urlProcessosCadastro),
        pageVisualizacaoAbaCompromissos = url.includes(urlCompromissoDefault),
        pageVisualizacaoCompromisso = url.includes(urlCompromissoFicha),
        pageFormularioAddTarefaSemCompromisso = url.includes(urlClienteAddtarefa),
        pageVisualizacaoTarefa = url.includes(urlTarefasFicha),
        pagePreProcessoPasta = url.includes(urlCadastroPreProcessoPasta),
        pagePreProcessoFormulario = url.includes(urlCadastroPreProcesso),
        pagePortalDoAdvogado = url.includes(urlPortalDoAdvogadoTJSE),
        isSistema = url.includes(urlSistemaFR),
        isPJE = url.includes(urlPJE),
        isCRETA = url.includes(urlCRETA),
        isTRF5 = url.includes(urlTRF51G) || url.includes(urlTRF52G),
        isGerid = url.includes(urlGeridINSS)
        
    digitacaoPorVoz()
    datepickerHighlighter()
    
    if (isSistema) {
        createStyleProgressBar()
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
        } else if (pageTarefas && autoCompletar) {
            preenchimentoTarefasDeCompromissos()
        } else if (pageCompromissos && autoCompletar) {
                createDataListCompromissos()
                addListenersCompromisso()
                createButtonPrazo()
                buscarDadosClienteProcessos(url)
        } else if (pageCadastroProcesso) {
            formataNumProcesso()
            habilitarEdicaoNumeroProcesso()
        } else if (pageVisualizacaoAbaCompromissos) {
            createButtonRolagem()
            setValidacaoFunctionOn()
        } else if (pageVisualizacaoCompromisso || pageFormularioAddTarefaSemCompromisso) {
            setValidacaoFunctionOff()
        } else if (pageVisualizacaoTarefa) {
            addEventToAutocomplete()
        } else if (pagePreProcessoPasta) {
            await setIdClientPreProcesso()
            prenchimentoNomePasta()
        } else if (pagePreProcessoFormulario) {
            preenchimentoFormularioPreProcesso()
        } else if (pageCompromissoEscolherTipo) {
            await setAutoComplete(true)
        } else if (pageCadastroCliente) {
            criarTarefaClientePrimeiraVez()
        }
        
    } else if (pagePortalDoAdvogado) {
        filtroAlvaraTJSE()
    } else if (isTRF5 || isCRETA || isPJE) {
        activateReportSummons({ isPJE, isCRETA, isTRF5 })
    } else if (isGerid) {
        createExportButtonGeridListNotifications()
    }
}

function validateFunctions(initFunctions, savedFunctions) {

    const keysFunctions = Object.keys(initFunctions)
    const keysSaveds = Object.keys(savedFunctions)
    const filtredKeys = keysFunctions.filter(key => !keysSaveds.includes(key))

    filtredKeys.forEach(key => {
        savedFunctions[key] = initFunctions[key]
    })
    
    return savedFunctions
}

async function activate() {
    const [ estado, clienteSaved ] = await Promise.all([getState(), getCliente()]),
        { URL } = document

    console.log(clienteSaved)

    const { active, functions } = estado

    state.active = active
    state.functions = validateFunctions(state.functions, functions)
    
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