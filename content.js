const parametros = {
    inss: 0,
    tarefaContatar: 1,
    tarefaAdvogado: 2,
    highlight: 3
}
const controllers = new Map()

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
            descricaoCompromisso: null,
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

    contarDias([ dia, mes, ano], dataInterno, parametros.inss)

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
        /* contDoisCalculo = ["MANIFESTACAO SOBRE CALCULOS", "MANIFESTACAO SOBRE CALCULO"], */
        contDoisEmenda = ["EMENDAR","DADOS PERICIA SOCIAL","DADOS COMPLEMENTARES", "DADOS PARA PERICIA SOCIAL", "DADOS COMPLEMENTARES PARA PERÍCIA SOCIAL"],
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
    /* const hasTwoTasksCalculo = contDoisCalculo.includes(tipoCompromissoNormalizado) */
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

    /* if (hasTwoTasksCalculo)
        return calculo */
    
    if (hasTwoTasksFinanceiro)
        return [cliente.compromisso.tipoCompromisso + " - ADVOGADO", cliente.compromisso.tipoCompromisso + " - FINANCEIRO"]
    
    /* if (isLiminarPericiaAdm)
        return [cliente.compromisso.tipoCompromisso + " - ADVOGADO", "ACOMPANHAR - ADM"] */

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
                descricaoTarefa.value = descricaoTarefa.value.toUpperCase().trim()
                cliente.compromisso.descricaoCompromisso = descricaoTarefa.value
                selectTipoCompromisso(descricaoTarefa, typeOptions)
                cliente.compromisso.tipoCompromisso = validaTipoCompromisso(descricaoTarefa.value)
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
    if (!state.functions.abaPesquisaProcesso.autoBuscaNumProcessoPesquisa) {
        return
    }
    if (processoInput) {
        processoInput.addEventListener('paste', () => {
            setTimeout(() => {
                if (state.functions.abaPesquisaProcesso.autoFormatacaoNumProcessoPesquisa) {
                    processoInput.value = removeCaracteresProcesso(processoInput.value)
                }
                submitPesquisaProcesso()
            }, 10);
        })
    }
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

function formataNumProcesso (processoInput) {
    if (processoInput) {
        processoInput.addEventListener('change', event => {
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
    const responsavelSelect = document.querySelector('button[data-id="idResponsavel"]').parentElement.querySelectorAll("div > div > ul > li"),
        executorSelect = document.querySelector('button[data-id="idExecutor"]').parentElement.querySelectorAll("div > div > ul > li")
    
    for (let index = 0; index < responsavelSelect.length; index++) {
        if (responsavelSelect[index].innerText.trim() == colaborador.responsavel.trim())
            responsavelSelect[index].children[0].click()
        if (responsavelSelect[index].innerText.trim() == colaborador.executor.trim())
            executorSelect[index].children[0].click()
    }
}

function createListaTarefas (typeOfTask = typeOfTaskSearch.geral, area = null) {
    const divtarefa = document.querySelector('#divTipoTarefaNormal')

    const div = document.createElement('div'),
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
    
    if (!typeOfTask) {
        p1.innerHTML = `Local atendido:`
        p3.innerHTML = `${cliente.cliente.localAtendido}`
        p2.innerHTML = `Cidade do cliente:`
        p4.innerHTML = `${cliente.cliente.cidade}`
        p5.innerHTML = `Parceiro:`
        p6.innerHTML = `${cliente.cliente.parceiro}`
    }
    
    div.appendChild(h1)
    div.appendChild(p1)
    div.appendChild(p3)
    div.appendChild(p2)
    div.appendChild(p4)
    div.appendChild(p5)
    div.appendChild(p6)
    div.appendChild(h2)
    divtarefa.appendChild(div)
    
    h1.innerHTML = typeOfTask? '' : 'INFO CLIENTE'
    h2.innerHTML = `TAREFAS ${typeOfTask? area :'ADM'}`

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

function limparListaTarefas() {
    const pNodeList = document.querySelectorAll("#contactdiv p")

    pNodeList.forEach(p => {
        if (p.dataset.colaborador) {
            p.remove()
        }
    })
}

function addListaTarefas({ nome, datasViagem, tarefas }, data) {

    const createRowTaskList = (name, tasks, travelDates) => {
        const ano = new Date().getFullYear()
        const p = document.createElement('p')

        p.innerHTML = `${name.slice(0,name.search(' '))}: ${tasks}`
        p.style.color = 'white'
        p.dataset.colaborador = name
        p.style.cursor = 'pointer'

        if (travelDates) {
            for (const dataViagem of travelDates) {
                if (date == `${dataViagem}/${ano}`)
                    p.style.color = 'yellow'
            }
        }

        const defaultColor = p.style.color

        p.addEventListener('mouseenter', event => {
            event.target.style.color = 'gray'
        })
    
        p.addEventListener('mouseleave', event => {
            event.target.style.color = defaultColor
        })

        return p
    }

    const date = data.toLocaleDateString(),
        div = document.querySelector('#contactdiv'),
        p1 = createRowTaskList(nome, tarefas, datasViagem)
 

    div.appendChild(p1)

    p1.addEventListener('click', event => {
        const responsavelSelecionado = document.querySelector("#idResponsavel").selectedOptions[0].innerText
        const responsaveisINSS = ['SILVANIA PINHEIRO DE LEMOS']
        const responsaveisAdministrativo = ['SANDOVAL FILHO CORREIA LIMA FILHO']
        const responsaveisPrevidenciario = ['KEVEN FARO DE CARVALHO']
        const executor = event.target.dataset.colaborador;
        const responsavel = (() => {
            if (!state.functions.todasPaginas.tipoIntimacaoIsJudicial && responsaveisINSS.includes(executor) || responsaveisAdministrativo.includes(executor)) {
                return executor
            } else if(cliente.cliente.estado === "DF" || cliente.cliente.estado === "GO") {
                return "HENYR GOIS DOS SANTOS"
            } else if (state.functions.todasPaginas.tipoIntimacaoIsJudicial && !responsaveisAdministrativo.includes(executor) && !responsaveisPrevidenciario.includes(responsavelSelecionado)) {
                return 'JULIANO OLIVEIRA DE SOUZA'
            } else {
                return responsavelSelecionado
            }
        })();

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
        const brasilia = ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.BSB)).map(colaborador => colaborador.nome)

        if (brasilia.includes(executor.nome)) {
            return "HENYR GOIS DOS SANTOS"
        }

        if (tipoCompromissoNormalizado.includes("PERICIA") || (tipoCompromissoNormalizado.includes("EXIGENCIA INSS") && cliente.compromisso.tarefas.length === 3)) {
            return "GABRIEL FRANÇA VITAL"
        }

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

async function getTarefasColaboradores({ colaborador, dataDe, dataAte = dataDe, typeOfTask = typeOfTaskSearch.geral }){
    
    if (controllers.has(colaborador.id)) {
        controllers.get(colaborador.id).abort()
        controllers.delete(colaborador.id)
    }

    const controller = new AbortController()
    const signal = controller.signal
    controllers.set(colaborador.id, controller)

    const parser = new DOMParser()

    const urlRequest = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default.asp'

    const bodyObject = {
        bsAdvTarefas: 's',
        bsAdvTarefasExecutor: colaborador.id,
        filtrar: 'Filtrar',
        bsAdvTarefasDe: dataDe.toLocaleDateString(),
        bsAdvTarefasAte: dataAte.toLocaleDateString()
    }

    return await fetch(urlRequest, {
            method: "POST",
            body: new URLSearchParams(bodyObject),
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            signal
    }).then(function (response) {
        return response.blob()
    }).then(async function (result) {
        const doc = parser.parseFromString(await result.text(),'text/html')
        
        const tarefas = doc.documentElement.querySelectorAll('body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr')
            let contador = 0
            
            tarefas.forEach(e => {
                if (typeOfTask === typeOfTaskSearch.protocolo) {
                    if (e.children[3] != null) {
                        const tipoTarefa = e.children[3].innerText.toUpperCase()

                        if (typeListTasksProtocol.includes(tipoTarefa)) {
                            contador++
                        }
                    }
                } if (typeOfTask === typeOfTaskSearch.prorrogacao) {
                    if (e.children[3] != null) {
                        const tipoTarefa = e.children[3].innerText.toUpperCase()

                        if (tipoTarefa === "PEDIDO DE PRORROGAÇÃO AUXÍLIO DOENÇA - ADM") {
                            contador++
                        }
                    }
                } else {
                    if (e.children[2] != null) {
                        const lengthProcessTJ = 12
                        if ((e.children[2].innerText.match("[0-9]*")[0].length >= lengthProcessTJ) && !(e.children[3].innerText.search('Acompanhar') == 0)) {
                            contador++
                        }
                    }
                }
            })

        colaborador.tarefas = contador
        addListaTarefas(colaborador, dataDe)

        return colaborador
    })
}

function filterColaboradoresCalculo () {
    
    return CALCULO
}

function filterColaboradoresAdministrativo () {
    let colaboradores = []
    const tarefasAdm = ["CONTATAR CLIENTE","LEMBRAR CLIENTE"]
    const tarefaAtualNormalizada = removeAcentuacaoString(cliente.compromisso.tarefas[0])
    const tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso)

    const postosDFGO = [
        "AG. AGUAS LINDAS DE GOIAS",
        "AG. ANAPOLIS - CENTRO",
        "AG. ANAPOLIS - VILA JAIARA",
        "AG. BRASILIA - ASA SUL",
        "AG. BRASILIA - CEILANDIA",
        "AG. BRASILIA - GAMA",
        "AG. BRASILIA - PLANALTINA",
        "AG. BRASILIA - SOBRADINHO",
        "AG. BRASILIA - TAGUATINGA",
        "AG. GOIANIA - CENTRO",
        "AG. GOIANIA - UNIVERSITARIO",
        "AG. GOIAS",
        "AG. GOIAS - CIDADE OCIDENTAL",
        "AG. GOIAS - PADRE BERNARDO",
        "AG. LUZIANIA",
        "AG. VALPARAISO DE GOIAS",
    ]

    const inssDigital = INSS.filter(colaborador => colaborador.assignments.includes(assignments.inssDigital.exigencia))

    if (postosDFGO.includes(cliente.requerimento.postoINSS.toUpperCase()) && tarefasAdm.includes(tarefaAtualNormalizada)) {
        colaboradores.push(...ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.BSB)))
    } else {
        colaboradores = inssDigital.filter(({ nome }) => {
    
            const nomeNormalizado = removeAcentuacaoString(nome)
    
            if (tipoCompromissoNormalizado.includes("EXIGENCIA INSS")) {
                const isFirstTask = cliente.compromisso.tarefas.length === 4
                const isSecondTask = cliente.compromisso.tarefas.length === 3
                const isThirdTask = cliente.compromisso.tarefas.length === 2
                const isLastTask = cliente.compromisso.tarefas.length === 1
    
                if (isFirstTask) {
                    return nomeNormalizado.includes("SILVANIA")
                }
                if (isSecondTask) {
                    return nomeNormalizado.includes("GABRIEL")
                }
    
                if (isThirdTask) {
                    return nomeNormalizado.includes("SILVANIA")
                }
    
                if (isLastTask) {
                    return !nomeNormalizado.includes("SILVANIA")
                }
            } else if (tipoCompromissoNormalizado.includes("PERICIA")) {
                
                return !nomeNormalizado.includes("GABRIEL") && !nomeNormalizado.includes("SILVANIA")
            }
        })
    }


    return colaboradores
}

function filterColaboradoresJudicial () {
    const colaboradores = []

    const parceiros = ['ELIZEU ( PARCEIRO)','MARIA DO POV. PREGUIÇA','AGENOR (PARCEIRO)','ELIZANGELA ( PARCEIRA)','ERMINIO','AUGUSTO ( PARCEIRO)'],
        varaEstancia = ['7ª VARA FEDERAL', '1ª VARA CIVEL DE ESTÂNCIA', '2ª VARA CIVEL DE ESTÂNCIA', 'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE ESTÂNCIA', 'VARA DE ESTÂNCIA', 'VARA DO TRABALHO DE ESTÂNCIA']

    if (cliente.processo.estado === 'GO' || cliente.processo.estado === 'DF') {
        colaboradores.push(...ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.BSB)))
    } else if (((cliente.cliente.cidade == "ESTANCIA" && cliente.cliente.localAtendido == "ESTANCIA")) || ((parceiros.includes(cliente.cliente.parceiro)) && varaEstancia.includes(cliente.processo.vara))) {
        colaboradores.push(...ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.estancia)))
    } else {
        if (varaEstancia.includes(cliente.processo.vara)) {
            colaboradores.push(...ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.geral)))
            colaboradores.push(...ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.estancia)))
            alert("Verificar executor manualmente!")
        } else {
            colaboradores.push(...ADM.filter(colaborador => colaborador.assignments.includes(assignments.contatar.geral)))
        }
    }

    return colaboradores
}

async function requererTarefasContatar(data) {
    const isJudicial = state.functions.todasPaginas.tipoIntimacaoIsJudicial

    const isTaskCalculo = false /* removeAcentuacaoString(cliente.compromisso.tipoCompromisso).includes("CALCULO") && removeAcentuacaoString(cliente.compromisso.tarefas[0]).includes("CALCULO") */

    const colaboradores = isTaskCalculo ? filterColaboradoresCalculo() : isJudicial ? filterColaboradoresJudicial() : filterColaboradoresAdministrativo()

    return colaboradores.map(async colaborador => {
        return await getTarefasColaboradores({ colaborador, dataDe: data })
    })
}

async function validaExecutorContatar () {
    const dataInput = document.querySelector('#dataParaFinalizacao')
    const [dia, mes, ano] = dataInput.value.split('/')
    const date = new Date(ano, mes - 1, dia)
    createListaTarefas()

    const colaboradores = await requererTarefasContatar(date)
    
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
        return {responsavel: "LUCIANA LIMA REZENDE",executor: "LUCIANA LIMA REZENDE"}
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
        return {responsavel: "LUCIANA LIMA REZENDE",executor: "LUCIANA LIMA REZENDE"} //ehMateusFinanceiro ? "MATEUS DOS SANTOS SILVA":"OVERLANDIA SANTOS MELO"
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
    
    if (digitoVerificador === "401" || digitoVerificador === "807" || secaoDFGO.includes(secao)) { // Processos do TRF1
        const varasDF = [
            "1ª VARA FEDERAL CÍVEL SJGO",
            "1ª VARA FEDERAL DE ANÁPOLIS",
            "2ª VARA FEDERAL DE ANÁPOLIS",
            "20ª VARA FEDERAL DA SJDF",
            "21º VARA FEDERAL",
            "23ª VARA FEDERAL",
            "23ª VARA FEDERAL BRASÍLIA",
            "24ª VARA FEDERAL",
            "24ª VARA FEDERAL DE BRASÍLIA",
            "25ª VARA FEDERAL",
            "25ª VARA FEDERAL DE BRASÍLIA",
            "26ª VARA FEDERAL",
            "26ª VARA FEDERAL DE BRASÍLIA",
            "27ª VARA FEDERAL",
            "27ª VARA FEDERAL DE BRASÍLIA",
            "BRASILIA",
            "JUIZADO ESPECIAL FEDERAL DE ANÁPOLIS",
            "VARA DE AÇÕES PREVIDENCIÁRIAS DO DF",
            "VARA DE ÁGUAS LINDAS DE GOIÁS",
            "VARA FEDERAL DA SSJ LUZIÂNIA-GO",
            "VARA FEDERAL DE RIO VERDE-GO",
            "VARA FEDERAL SJDF",
            "TJ GOIÁS",
        ]
        
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
            return {responsavel: "ANA CAROLINA SOARES DE MELO",executor: "ANA CAROLINA SOARES DE MELO"}
        }

        return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
    }

    if (natureza === "PREVIDENCIÁRIA") {
        if (digitoVerificador === "403") { //Processos do TRF3
            return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
        }

        if (digitoVerificador === "405" && numeroProcesso.search('080') === 0) { //Processos do TRF5
            /* if (cliente.processo.merito === "MANDADO DE SEGURANÇA") {
                if (setimoDigito <= 4) {
                    return {responsavel: "DIEGO MELO SOBRINHO",executor: "DIEGO MELO SOBRINHO"}
                }

                return {responsavel: "DIEGO MELO SOBRINHO",executor: "ITALO DE ANDRADE BEZERRA"}
            } */

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
                return {responsavel: "ANA CAROLINA SOARES DE MELO",executor: "ANA CAROLINA SOARES DE MELO"}
            if (secao === "8502") { //Processos da seção de Estância
                if (setimoDigito < 3)
                    return {responsavel: "KEVEN FARO DE CARVALHO",executor: "KEVEN FARO DE CARVALHO"}
                return {responsavel: "SARA GONÇALVES PINHEIRO",executor: "SARA GONÇALVES PINHEIRO"}
            }
            if (secao === "8503") //Processos da seção de Lagarto
                return {responsavel: "SARA GONÇALVES PINHEIRO",executor: "SARA GONÇALVES PINHEIRO"}
            if (secao === "8504")//Processos da seção de Propriá
                return {responsavel: "ANA CAROLINA SOARES DE MELO",executor: "ANA CAROLINA SOARES DE MELO"}
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
            return {responsavel: "HENYR GOIS DOS SANTOS", executor: "LAYNE DA SILVA GOIS"}
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
    const emendar = ["DADOS PERICIA SOCIAL", "DADOS COMPLEMENTARES", "DADOS COMPLEMENTARES PARA PERÍCIA", "DADOS COMPLEMENTARES PARA PERÍCIA SOCIAL", "EMENDA", "EMENDA A INICIAL", "EMENDAR A INICIAL", "EMENDAR"]
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
    
    if (pedidoVistas.includes(descriptionCompromissoNormalizado) || descriptionCompromissoNormalizado === "JULGAMENTO ANTECIPADO")
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

function atualizaDescricao({ descricaoTarefa, horarioInicial, horarioFinal, local, inputEndereco, inputObservation, inputPerito = null }) {

    const getInputObservationValue = (input) => {
        if (input && input.value.length) {
                return `[${input.value.toUpperCase()}]`
        }
        return ''
    }

    const { tipoIntimacaoIsJudicial } = state.functions.todasPaginas
    const fistWordInTarefa = removeAcentuacaoString(cliente.compromisso.tarefas[0].split(" ")[0]),
        [ localText, endereco ] = getEndereço(local, inputEndereco),
        numero = tipoIntimacaoIsJudicial ? existeOrigem() : cliente.requerimento.protocolo,
        tipoTarefaNormalizado = removeAcentuacaoString(cliente.compromisso.tarefas[0]),
        tipoCompromissoNormalizado = removeAcentuacaoString(cliente.compromisso.tipoCompromisso),
        observation = getInputObservationValue(inputObservation)
        
    inputEndereco.value = endereco
    horarioFinal.value = atualizaHora(horarioInicial)

    if (cliente.compromisso.descricao && removeAcentuacaoString(fistWordInTarefa) !== "ANALISE" && tipoTarefaNormalizado !== "ATO ORDINATORIO" && tipoCompromissoNormalizado !== "EMENDAR"  && !tipoCompromissoNormalizado.includes('DECISAO ANTECIPACAO PERICIA') && !tipoCompromissoNormalizado.includes("EXIGENCIA")) {

        descricaoTarefa.value = cliente.compromisso.descricao

    } else if (tipoCompromissoNormalizado.search('PERICIA') === 0 && cliente.compromisso.quantidadeTarefas === cliente.compromisso.tarefas.length) {
        if (tipoIntimacaoIsJudicial) {

            descricaoTarefa.value = `${numero} - ${cliente.compromisso.descricaoCompromisso} DE ${cliente.cliente.nome} (${cliente.cliente.cpf}), NO DIA ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, PERITO: ${inputPerito.value}, LOCAL: ${localText}, ENDEREÇO: ${inputEndereco.value} ${observation}`

        } else {

            descricaoTarefa.value = `${numero} - ${cliente.compromisso.descricaoCompromisso}: DATA E HORA: ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, LOCAL: ${localText}, ENDEREÇO: ${inputEndereco.value}. ORIENTAR A LEVAR O AGENDAMENTO, RELATÓRIOS MÉDICOS E DOCUMENTOS PERTINENTES A ATIVIDADE RURAL / PESCADO (CASO EXERÇA). CHEGAR COM 30 MINUTOS DE ANTECEDÊNCIA`

        }
    } else if (tipoIntimacaoIsJudicial) {

        if (fistWordInTarefa == "AUDIENCIA" && cliente.compromisso.quantidadeTarefas === cliente.compromisso.tarefas.length) {

            descricaoTarefa.value = `${numero} - ${cliente.compromisso.descricaoCompromisso} DE ${cliente.cliente.nome} (${cliente.cliente.cpf}) X ${cliente.processo.reu.length > 0 ? cliente.processo.reu : ''}, NO DIA ${cliente.compromisso.prazoInterno} ÀS ${horarioInicial.value}, LOCAL: ${localText}, ENDEREÇO: ${inputEndereco.value} ${observation}`

        } else if (tipoTarefaNormalizado === "ATO ORDINATORIO" && tipoCompromissoNormalizado.includes('PERICIA')) {

            descricaoTarefa.value = `${numero} - ATO ORDINATÓRIO (PERÍCIA DESIGNADA)`

        } else if ((fistWordInTarefa === "ANALISE") && tipoCompromissoNormalizado.search('AUDIENCIA') === 0) {

            descricaoTarefa.value = `${numero} - VERIFICAR NECESSIDADE DE TESTEMUNHAS`

        } else if (cliente.compromisso.descricaoCompromisso.includes('DADOS COMPLEMENTARES') && cliente.compromisso.tarefas[0] === "CONTATAR CLIENTE") {
            descricaoTarefa.value = `${numero} - SOLICITAR DADOS COMPLEMENTARES PARA PERÍCIA SOCIAL (APELIDO, ENDEREÇO ATUALIZADO, PONTO DE REFERÊNCIA E CONTATO TELEFÔNICO)`
        } else if ((tipoCompromissoNormalizado === "EMENDAR") && (cliente.compromisso.tarefas[0] === "CONTATAR CLIENTE")) {

            descricaoTarefa.value = `${numero} - `

        } else if (tipoTarefaNormalizado.includes('ACOMPANHAR')  && tipoCompromissoNormalizado.includes('DECISAO ANTECIPACAO PERICIA')) {

            descricaoTarefa.value = `${numero} - ACOMPANHAR ANTECIPAÇÃO DA PERÍCIA ADMINISTRATIVA`

        } else {
            descricaoTarefa.value = `${numero} - ${cliente.compromisso.descricaoCompromisso}`
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
        const isJugamentoAntecipado = tipoIntimacaoToUpperNormalized.includes("JULGAMENTO") && tipoIntimacaoToUpperNormalized.includes("ANTECIPADO")
        const isTask = optionToUpperNormalized === tipoIntimacaoToUpperNormalized
        const fistWordIncluded = optionToUpperNormalized.split(" ").includes(tipoIntimacaoToUpperNormalized.split(" ")[0])
        
        if (isManifestacao) {
            inputManifestacao = option.children[0]
        }

        if (isJugamentoAntecipado) {
            return inputManifestacao
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
    if (!state.functions.cadastroTarefa.AutoPreenchimentoTarefasIntimacoes || !cliente.compromisso.tarefas.length) {
        return
    }

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

function createInputObservation() {
    const inputContainer = document.createElement("div")
    inputContainer.classList.add("row")
    inputContainer.innerHTML = `<div class="form-group col-sm-8">
                            <label for="observationForTask">Observação:</label>
                            <input class="form-control" id="observationForTask" type="text">
                        </div>
                        <div class="clearfix"></div>`

    const referenceElement = document.querySelector("#fdt-form > div:nth-child(14)")
    const parentElement = document.querySelector("#fdt-form")

    parentElement.insertBefore(inputContainer, referenceElement)

    return inputContainer.querySelector("#observationForTask")
}

function mostrarCamposPericia(inputObservation) {
    
    const updateDescriptionForExpertise = async (input, key, { descricaoTarefa, inputHorario, horarioFinal, inputLocal, inputObservation, inputPerito, inputEndereco }) => {
        input.value = input.value.toUpperCase()
        atualizaDescricao({ descricaoTarefa, horarioInicial: inputHorario, horarioFinal, local: inputLocal, inputObservation, inputEndereco, inputPerito })
        cliente.compromisso[key] = input.value
        await setCliente(cliente)
    }

    const createInputForExpertise = (typeForInput, parentElement) => {

        if (!state.functions.todasPaginas.tipoIntimacaoIsJudicial && typeForInput === "perito") {
            return []
        }

        const insertInputBefore = (container) => parentElement.before(container)
        const insertInputAfter = (container) => parentElement.after(container)
        const appendInput = (container) => parentElement.append(container)
        const typesForInput = {
            perito: {
                id: 'inputPerito',
                divClass: ['form-group', 'col-sm-4'],
                label: 'Perito',
                inputType: 'text',
                insertMethod: appendInput
            },
            horario: {
                id: 'inputHorario',
                divClass: ['form-group', 'datepicker-hora', 'col-sm-4'],
                label: 'Horário',
                inputType: 'time',
                insertMethod: appendInput
            },
            local: {
                id: 'inputLocal',
                divClass: ['form-group', 'col-sm-4'],
                label: 'Local',
                inputType: 'text',
                insertMethod: insertInputAfter
            },
            endereco: {
                id: 'inputEndereco',
                divClass: ['form-group', 'col-sm-8'],
                label: 'Endereço',
                inputType: 'text',
                insertMethod: insertInputBefore
            },
        }
        
        const inputContainer = document.createElement("div")
        typesForInput[typeForInput].insertMethod(inputContainer)

        const isHorario = typeForInput === "horario"
        const isPerito = typeForInput === "perito"
        const isLocal = typeForInput === "local"
        const isHorarioOrPeritoOrLocal = isHorario || isPerito || isLocal

        if(!isHorarioOrPeritoOrLocal) {
            inputContainer.classList.add("row")

            
            const inputDiv = document.createElement("div")
            inputDiv.classList.add(...typesForInput[typeForInput].divClass)
            inputDiv.innerHTML = `<label for="${typesForInput[typeForInput].id}">${typesForInput[typeForInput].label}:</label>
                                <input class="form-control" id="${typesForInput[typeForInput].id}" type="${typesForInput[typeForInput].inputType}" value="${isHorario ? "00:00" : ""}">`
            
            const clearfixDiv = document.createElement("div")

            inputContainer.append(inputDiv)
            inputContainer.append(clearfixDiv)
        } else {
            inputContainer.classList.add(...typesForInput[typeForInput].divClass)
            inputContainer.innerHTML = `<label for="${typesForInput[typeForInput].id}">${typesForInput[typeForInput].label}:</label>
                                        <input class="form-control" id="${typesForInput[typeForInput].id}" type="${typesForInput[typeForInput].inputType}" value="${isHorario ? "00:00" : ""}">`
        }

        const input = document.querySelector(`#${typesForInput[typeForInput].id}`)
        
        return [ input, inputContainer ]
    }

    const tarefaNormal = document.querySelector('#divTipoTarefaNormal'),
        divData = document.querySelector('#divTipoTarefaNormal > div:nth-child(1) > div.col-sm-8'),
        horarioFinal = document.querySelector("#horarioFinal"),
        descricaoTarefa = document.querySelector("#descricao"),
        containerDadosPericia = document.createElement('div')  
    
    divData.setAttribute('class','form-group col-sm-4')
    containerDadosPericia.setAttribute('class','row')
    tarefaNormal.append(containerDadosPericia)
    
    
    const [inputHorario, containerHorario] = createInputForExpertise('horario', containerDadosPericia)
    const [inputPerito] = createInputForExpertise('perito', containerDadosPericia)
    const [inputLocal] = createInputForExpertise('local', divData)
    const [inputEndereco, containerEndereco] = createInputForExpertise('endereco', containerDadosPericia, document.querySelector("#divTipoTarefaNormal > div:nth-child(1)"))

    const dataDescription = { descricaoTarefa, inputHorario, horarioFinal, inputLocal, inputObservation, inputPerito, inputEndereco }
    
    inputHorario.addEventListener('input', event => updateDescriptionForExpertise(event.target, 'horario', dataDescription))
    inputLocal.addEventListener('input', event => updateDescriptionForExpertise(event.target, 'local', dataDescription))
    inputEndereco.addEventListener('input', event => updateDescriptionForExpertise(event.target, 'endereco', dataDescription))

    if (state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        inputPerito.addEventListener('input', event => updateDescriptionForExpertise(event.target, 'perito', dataDescription))
    }

    if(!state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
        const div = containerEndereco.children[0]
        containerHorario.after(div)
        div.setAttribute("class", "form-group col-sm-4")
    }

    return { inputLocal, inputPerito, inputEndereco, inputHorario }
}

async function selecionarResponsavelExecutor(option) {
    
    const adv = await validaEsferaProcesso()

    if (adv)
        selectRespExec(adv)

   /*  const isTaskCalculo = removeAcentuacaoString(cliente.compromisso.tipoCompromisso).includes("CALCULO") && removeAcentuacaoString(cliente.compromisso.tarefas[0]).includes("CALCULO") */
    const isTaskCalculo = null
    const isTaskContatar = option.innerText.toUpperCase() == "CONTATAR CLIENTE"
    const isTaskLembrar = option.innerText.toUpperCase() == "LEMBRAR CLIENTE"
    const isTaskWhatsapp = option.innerText.toUpperCase() == "SMS E WHATSAPP"
    const isDFOrGO = cliente.processo.estado === "DF" || cliente.processo.estado === "GO"

    if ((isTaskContatar || isTaskLembrar) || (isDFOrGO && (isTaskContatar || isTaskLembrar)) || !state.functions.todasPaginas.tipoIntimacaoIsJudicial && !adv || isTaskCalculo) {
        validaExecutorContatar()
    }
}

function loadInfo () {
    
    if (!state.functions.cadastroTarefa.AutoPreenchimentoTarefasIntimacoes || !cliente.compromisso.tarefas.length) {
        return
    }

    const descricaoTarefa = document.querySelector("#descricao"),
        select = document.querySelector('#idTipoTarefa'),
        horarioFinal = document.querySelector("#horarioFinal"),
        processoDependente = document.querySelector("#input_dependente")

    let local = document.querySelector("#onde"),
        perito = { value: "" },
        endereco = { value: "" },
        horarioInicial = document.querySelector("#horarioInicial")

    descricaoTarefa.addEventListener('change', event => {
        event.target.value = event.target.value.toUpperCase()
    })

    local.addEventListener('input', event => {
        event.target.value = event.target.value.toUpperCase()
    })

    select.addEventListener("change", ({ target }) => {
        const { selectedOptions } = target
        const eventTargets = [horarioInicial, local, processoDependente],
            contactdiv = document.querySelector("#contactdiv")
        let inputObservation = null

        const arrayAudiencias = ["AUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO", "AUDIÊNCIA UNA", "AUDIÊNCIA DE INSTRUÇÃO", "AUDIÊNCIA INICIAL", "AUDIÊNCIA INAUGURAL"]

        const ehTarefaParaAdmOuSac = ((cliente.compromisso.tarefas[0] == "CONTATAR CLIENTE") || (cliente.compromisso.tarefas[0] == "LEMBRAR CLIENTE") || (cliente.compromisso.tarefas[0] == "SMS E WHATSAPP")),
            isAudienciaComTestemunha = arrayAudiencias.includes(cliente.compromisso.tipoCompromisso),
            isPericia = removeAcentuacaoString(cliente.compromisso.tipoCompromisso).search('PERICIA') == 0,
            isAudienciaOrPericia = cliente.compromisso.tipoCompromisso.search("AUDIÊNCIA") === 0 || isPericia,
            isFirstTask = cliente.compromisso.tarefas.length === cliente.compromisso.quantidadeTarefas,
            isLastTask = cliente.compromisso.tarefas.length === 1
            
        if(isAudienciaOrPericia && isFirstTask && state.functions.todasPaginas.tipoIntimacaoIsJudicial) {
            inputObservation = createInputObservation()
            eventTargets.push(inputObservation)
        }

        if (isPericia && isFirstTask) {
            const { inputLocal, inputPerito, inputEndereco, inputHorario } = mostrarCamposPericia(inputObservation)
            horarioInicial = inputHorario
            local = inputLocal
            endereco = inputEndereco
            perito = inputPerito
        }

        calcularDataTarefa(!state.functions.todasPaginas.tipoIntimacaoIsJudicial ? parametros.inss : (ehTarefaParaAdmOuSac || isAudienciaComTestemunha) ? parametros.tarefaContatar : parametros.tarefaAdvogado)

        if ((horarioInicial.value.length == 0 || local.value.length == 0))
            atualizaDescricao({ descricaoTarefa, horarioInicial, horarioFinal, local, inputObservation, inputEndereco: endereco, inputPerito: perito })

        eventTargets.forEach(element => {
            if (element)
                element.addEventListener(element == horarioInicial ? 'blur':'input', () => {
                    atualizaDescricao({ descricaoTarefa, horarioInicial, horarioFinal, local, inputObservation, inputEndereco: endereco, inputPerito: perito })
                })
        })

        if (contactdiv) {
            contactdiv.parentNode.removeChild(contactdiv)
        }

        selecionarResponsavelExecutor(selectedOptions[0])

        submitAtualizarTarefa()

        if (isLastTask) {
            desmarcarCaixaTarefaSequencia()
        }
        
    })

    selectTipoIntimacao()
}


function focarInputProcesso() {
    if (!state.functions.abaPesquisaProcesso.autofocoNumProcessoPesquisa) {
        return
    }

    const inputProcesso = document.querySelector("#bsAdvProcessosTexto")

    if (inputProcesso) {
        inputProcesso.focus()
    }
}

function limparInputProcesso() {
    if (!state.functions.abaPesquisaProcesso.autolimpezaNumProcessoPesquisa) {
        return
    }

    const inputProcesso = document.querySelector("#bsAdvProcessosTexto")

    if (inputProcesso) {
        inputProcesso.value = ""
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
        dcb: response.documentElement.querySelector("#dcbData").value.toUpperCase()
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
    
    if (editTarefaBtn && editTarefaBtn.length > 1 && !editTarefaBtn[0].innerText.includes("Nenhum registro até o momento.")) {
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
    return string ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : ''
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
        cliente.compromisso.quantidadeTarefas = cliente.compromisso.tarefas?.length
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

    const { nome, cpf, estado, cidade, localAtendido, parceiro, dcb } = await requestDataCliente({
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
    cliente.cliente.dcb = dcb

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

function removerNewButtons() {
    if (!state.functions.todasPaginas.removerNewButtons) {
        return
    }
    const buttonWhatsapp = document.querySelector("body > section > aside > div:nth-child(7)")
    const buttonChamados = document.querySelector("body > section > aside > div:nth-child(8)")

    buttonWhatsapp.remove()
    buttonChamados.remove()
}

function pinSideMenu() {
    
    if (!state.functions.todasPaginas.fixarMenuNavegacaoLateral) {
        return
    }

    const mainSection = document.querySelector("body > section > section")

    if (mainSection) {
        const body = document.querySelector("body")
        body.style.height = "100vh"
        mainSection.style.display = "block"
        mainSection.style.overflowY = "auto"
    }
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

function fixCollumnTRT20() {
    const observer = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                const section = document.querySelector("#timeline")
                
                if (section) {
                    section.style.gridTemplateColumns = "1fr 2fr"
                    observer.disconnect()  
                }              
            }
        }
    })

    observer.observe(document.body, { childList: true })
}

function fixProcessRegistrationButton() {
    if (!state.functions.abaFichaCliente.fixButtonNewProcess) {
        return
    }
    const regex = /(?<=idPK=)\d+/
    const url = document.URL
    const id = regex.exec(url)
    const link = `http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/formulario.asp?idCL=${id}`

    const button = document.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > a")
    button.href = link
    button.innerHTML = "Novo Processo"
}

function addListaAuxiliares() {
    const list = document.querySelector("body > section > aside > nav > ul")
    const li = document.createElement("li")
    list.append(li)
    li.classList.add("fdt_ml-menu-item")
    
    const a = document.createElement("a")
    a.classList.add("fdt_ml-menu-toggle")
    a.innerHTML = `<i class="fa fa-list"></i>
            <span class="fdt_ml-menu-titulo" style="width: auto;">Listas auxiliares</span>
            <span class="fdt_ml-menu-seta"><i class="fa fa-angle-left"></i></span>`

    const ul = document.createElement("ul")
    ul.classList.add("fdt_ml-menu-dropdown")
    ul.innerHTML = `<li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliCargos/default.asp"><i class="fa fa-list"></i> Cargos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliGrupos/default.asp"><i class="fa fa-list"></i> Grupos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliPostosINSS/default.asp"><i class="fa fa-list"></i> Postos do INSS</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliSituacoes/default.asp"><i class="fa fa-list"></i> Situações</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliTiposArquivos/default.asp"><i class="fa fa-list"></i> Tipos de arquivos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliTiposHistoricos/default.asp"><i class="fa fa-list"></i> Tipos de históricos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliLocalAtendido/default.asp"><i class="fa fa-list"></i> Locais de atendimento</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliComoChegou/default.asp"><i class="fa fa-list"></i> Como chegou</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstINSSStatus/default.asp"><i class="fa fa-list"></i> Status do INSS</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliPrioridades/default.asp"><i class="fa fa-list"></i> Prioridades de clientes</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstModelos/default.asp"><i class="fa fa-print"></i> Modelos de documentos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstCliBairros/default.asp"><i class="fa fa-list"></i> Bairros</a></li>
            
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProEscritorios/default.asp"><i class="fa fa-list"></i> Escritórios</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProFases/default.asp"><i class="fa fa-list"></i> Fases do processo</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProInstancias/default.asp"><i class="fa fa-list"></i> Instâncias</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProMeritos/default.asp"><i class="fa fa-list"></i> Méritos da causa</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProNaturezas/default.asp"><i class="fa fa-list"></i> Naturezas de ação</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProOrgaos/default.asp"><i class="fa fa-list"></i> Órgãos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProProbabilidades/default.asp"><i class="fa fa-list"></i> Probabilidades de êxito</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProRelevancias/default.asp"><i class="fa fa-list"></i> Relev. do processo</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProSentencas/default.asp"><i class="fa fa-list"></i> Sentenças</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProStatus/default.asp"><i class="fa fa-list"></i> Status</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProTipos/default.asp"><i class="fa fa-list"></i> Tipos de processos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstProVaras/default.asp"><i class="fa fa-list"></i> Varas</a></li>
            
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstAgeTiposCompromissos/default.asp"><i class="fa fa-list"></i> Tipos de compromissos</a></li>
                <li><a href="http://fabioribeiro.eastus.cloudapp.azure.com/adv/lstAgeTiposTarefas/default.asp"><i class="fa fa-list"></i> Tipos de tarefas</a></li>`
    
    li.append(a)
    li.append(ul)

    a.addEventListener("click", () => li.classList.toggle("aberto"))
}

async function idPage(url) {
    
    const urlClienteCadastro = 'http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/formulario.asp?org=',
        urlProcessosCadastro = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/formulario",
        urlProcessos = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/default",
        urlProcessosFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/processos/ficha",
        urlCompromissos = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/formulario",
        urlCompromissoFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/ficha",
        urlCompromissoDefault = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/default",
        urlCompromissoEscolherTipo= "http://fabioribeiro.eastus.cloudapp.azure.com/adv/compromissos/incluirEscolhe",
        urlListaTarefas = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default",
        urlTarefasForm = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/formulario",
        urlTarefasFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/ficha",
        urlClienteFicha = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/ficha",
        urlClienteAddtarefa = "http://fabioribeiro.eastus.cloudapp.azure.com/adv/clientes/default",
       /*  urlCadastroPreProcesso = "http://fabioribeiro.eastus.cloudapp.azure.com/pre/preProcessos/formulario",
        urlCadastroPreProcessoPasta = "http://fabioribeiro.eastus.cloudapp.azure.com/pre/preProcessos/formularioCria", */
        urlSistemaFR = "http://fabioribeiro.eastus.cloudapp.azure.com",
        urlListaFollowUps = "http://fabioribeiro.eastus.cloudapp.azure.com/flw/followups/default.asp",
        urlPortalDoAdvogadoTJSE = "https://www.tjse.jus.br/tjnet/portaladv/index.wsp",
        urlKentro = "fabioribeiroadvogados.atenderbem.com/",
        urlPJE = "/pje/",
        urlTRF1 = 'trf1.jus.br/',
        urlCRETA = 'https://creta.jfse.jus.br/',
        urlTRF51G = 'https://pje.jfse.jus.br/',
        urlTRF52G = 'https://pje.trf5.jus.br/',
        urlGeridINSS = "https://atendimento.inss.gov.br/",
        urlTRT20 = "https://pje.trt20.jus.br/",
        autoCompletar = await getAutoComplete(),
        pageBuscaProcessos = url.includes(urlProcessos),
        isPageFichaTarefas = url.includes(urlTarefasFicha),
        isPageListaTarefas = url.includes(urlListaTarefas),
        isPageTarefasFormDeCompromisso = url.includes(urlTarefasForm) && url.includes("idCO"),
        isPageTarefasFormDeCliente = url.includes(urlTarefasForm) && url.includes("idCL"),
        isPageVisualizacaoProcesso = url.includes(urlProcessosFicha),
        isPageCompromissos = url.includes(urlCompromissos),
        isPageCompromissoEscolherTipo = url.includes(urlCompromissoEscolherTipo),
        isPageFichaCliente = url.includes(urlClienteFicha),
        isPageCadastroCliente = url.includes(urlClienteCadastro),
        isPageCadastroProcesso = url.includes(urlProcessosCadastro),
        isPageVisualizacaoAbaCompromissos = url.includes(urlCompromissoDefault),
        isPageVisualizacaoCompromisso = url.includes(urlCompromissoFicha),
        isPageFormularioAddTarefaSemCompromisso = url.includes(urlClienteAddtarefa),
        /* isPagePreProcessoPasta = url.includes(urlCadastroPreProcessoPasta),
        isPagePreProcessoFormulario = url.includes(urlCadastroPreProcesso), */
        pagePortalDoAdvogado = url.includes(urlPortalDoAdvogadoTJSE),
        isPageListaFollowUps = url.includes(urlListaFollowUps),
        isSistema = url.includes(urlSistemaFR),
        isPJE = url.includes(urlPJE),
        isTRF1 = url.includes(urlTRF1),
        isCRETA = url.includes(urlCRETA),
        isTRF5 = url.includes(urlTRF51G) || url.includes(urlTRF52G),
        isTRT20 = url.includes(urlTRT20),
        isGerid = url.includes(urlGeridINSS),
        isKentro = url.includes(urlKentro)
        
    digitacaoPorVoz()
    
    if (isSistema) {
        const isYuri = document.querySelector("#fdt-mt-header > ul.nav.navbar-nav.navbar-right.hidden-xs > li > a").innerText.trim() === "YURI DIAS"

        if(isYuri) {
            addListaAuxiliares()
        }

        datepickerHighlighter()
        pinSideMenu()
        removerNewButtons()
        createStyleProgressBar()
        createPainel('ADM', ADM, state.functions.supervisor.painelVisualizacaoTarefasTimeADM)
        createPainel('SAC', SAC, state.functions.supervisor.painelVisualizacaoTarefasTimeSAC)
        createPainel('FINANCEIRO', FINANCEIRO, state.functions.supervisor.painelVisualizacaoTarefasTimeFINANCEIRO)
        createPainel('INSS', INSS, state.functions.supervisor.painelVisualizacaoTarefasTimeINSS)
        createPainel('PREVIDENCIARIO', PREVIDENCIARIO, state.functions.supervisor.painelVisualizacaoTarefasTimePREVIDENCIARIO)
        createPainel('TRABALHISTA', TRABALHISTA, state.functions.supervisor.painelVisualizacaoTarefasTimeTRABALHISTA)
        createPainel('CIVEL', CIVEL, state.functions.supervisor.painelVisualizacaoTarefasTimeCIVEL)
        createPainel('CALCULO', CALCULO, state.functions.supervisor.painelVisualizacaoTarefasTimeCALCULO)
        createPainel('CRM', CRM, state.functions.supervisor.painelVisualizacaoTarefasTimeCRM)
        createPainelFollowUps(state.functions.todasPaginas.painelVisualizacaoFollowUps)
        contarTarefasParaHoje()
        createButtonPhotoGenerator(isPageListaFollowUps)
        if (pageBuscaProcessos) {
            
            const processoInput = document.querySelector("#bsAdvProcessosTexto")
            
            if (state.functions.abaPesquisaProcesso.autoFormatacaoNumProcessoPesquisa) {
                formataNumProcesso(processoInput)
            }
            addEventoPasteProcesso(processoInput)
            focarInputProcesso()
            limparInputProcesso()
            createButtonLinkJusticePortalForCase("listaProcesso")
        } else if (isPageTarefasFormDeCompromisso && autoCompletar) {
            preenchimentoTarefasDeCompromissos()
        } else if (isPageTarefasFormDeCliente) {
            automaticDistributionTasksJuricial()
        } else if (isPageCompromissos && autoCompletar) {
                createDataListCompromissos()
                addListenersCompromisso()
                createButtonPrazo()
                buscarDadosClienteProcessos(url)
        } else if (isPageFichaTarefas) {
            createButtonScriptForTask()
            createButtonLinkJusticePortalForCase("fichaTarefa")
        } else if (isPageCadastroProcesso) {
            if (state.functions.abaCadastrodeProcesso.autoFormatNumProcesso) {
                const processoInputCad = document.querySelector("#numero")
                formataNumProcesso(processoInputCad)
            }
            habilitarEdicaoNumeroProcesso()
        } else if (isPageVisualizacaoAbaCompromissos) {
            createButtonRolagem()
            setValidacaoFunctionOn()
        } else if (isPageVisualizacaoCompromisso || isPageFormularioAddTarefaSemCompromisso) {
            setValidacaoFunctionOff()
        } else if (isPageListaTarefas) {
            addEventToAutocomplete()
            createButtonLinkJusticePortalForCase("tarefas")
        }/*  else if (isPagePreProcessoPasta) {
            await setIdClientPreProcesso()
            prenchimentoNomePasta()
        } else if (isPagePreProcessoFormulario) {
            preenchimentoFormularioPreProcesso()
        } */ else if (isPageCompromissoEscolherTipo) {
            await setAutoComplete(true)
        } else if (isPageCadastroCliente) {
            //criarTarefaClientePrimeiraVez()
        } else if (isPageVisualizacaoProcesso) {
            createButtonLinkJusticePortalForCase("processo")
        } else if (isPageFichaCliente) {
            createButtonLinkJusticePortalForCase("cliente")
            fixProcessRegistrationButton()
        }
    } else if (pagePortalDoAdvogado) {
        filtroAlvaraTJSE()
    } else if (isTRF5 || isCRETA || isPJE) {
        activateReportSummons({ isPJE, isCRETA, isTRF5, isTRF1 })
    } else if (isGerid) {
        createExportButtonGeridListNotifications()
    } else if (isTRT20) {
        fixCollumnTRT20()
    } else if (isKentro) {
        Kentro()
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
    
    await idPage(URL)
}

function updateEvent() {
    enviarResposta()
};

(async function run () {
    activate()
    updateEvent()
})()