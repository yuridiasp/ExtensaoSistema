/* onExtensionInstalled(setInitial)

function setInitial() {
    setInitialState()
    //setPanel()
}

async function setInitialState() {
    const promises = []
    const initialState = {
        active: true,
        functions: {
            todasPaginas: {
                tipoIntimacaoIsJudicial: null,
                digitarUsandoVoz: null,
                contadorTarefas: null,
                datepickerHighlighter: null,
                criarBotaoAcessoPortalJusticaProcesso: null,
                fixarMenuNavegacaoLateral: null,
                painelVisualizacaoFollowUps: null,
                removerNewButtons: null,
            },
            abaFichaCliente: {
                fixButtonNewProcess: null,
            },
            abaRegistroHistorico: {
                historicoRegistroIntimacao: null
            },
            abaCadastroCliente: {
                criarTarefaCRM: null,
            },
            abaCadastrodeProcesso: {
                alteracaoNumeroProcesso: null,
            },
            abaPesquisaProcesso: {
                autoBuscaNumProcessoPesquisa: null,
                autofocoNumProcessoPesquisa: null,
                autolimpezaNumProcessoPesquisa: null,
                autoFormatacaoNumProcessoPesquisa: null,
            },
            abaCompromissosProcesso: {
                mostrarBotadeRolagem: null,
                rolagemSuavePagina: null,
            },
            cadastroCompromisso:{
                selecaodoTipodeCompromisso: null,
                exibirlistaDescricaoCompromisso: null,
                mostrarBotoesAuxiliaresdeDias: null,
                AutoPreenchimentoPrazoInterno: null,
                exibirListaTarefas: null,
            },
            cadastroTarefa:{
                AutoPreenchimentoTarefasIntimacoes: null,
                criarHistoricoINSSDigital: null,
                tarefasAvulsasJuridicoCRM: null,
                tarefasProrrogacaoDCB: null,
            },
            abaFollowUps: {
                photoGenerator: null,
            },
            fichaTarefa: {
                criarBotaoScriptGenerator: null,
            },
            preProcesso:{
                preenchimentoNomePasta: null,
                preenchimentoFormularioPreProcesso: null,
            },
            supervisor: {
                painelVisualizacaoTarefasTimeADM: null,
                painelVisualizacaoTarefasTimeSAC: null,
                painelVisualizacaoTarefasTimeFINANCEIRO: null,
                painelVisualizacaoTarefasTimeINSS: null,
                painelVisualizacaoTarefasTimePREVIDENCIARIO: null,
                painelVisualizacaoTarefasTimeTRABALHISTA: null,
                painelVisualizacaoTarefasTimeCIVEL: null,
                painelVisualizacaoTarefasTimeCALCULO: null,
                painelVisualizacaoTarefasTimeCRM: null,
            },
            tjse: {
                botaoExportarAlvaras: null,
            },
            gerid: {
                botaoExportarNotificacoes: null,
            },
            kentro: {
                contagemTarefasVencimento: null,
            }
        }
    }
    
    let savedState = await getState()
    let autocomplete = await getAutoComplete()
    let financeiro = await getFinanceiro()
    let contagemTarefas = await getContagemTarefas()

    if (!savedState)
        promises.push(setState(initialState))
    if (!autocomplete)
        promises.push(setAutoComplete(true))
    if (!financeiro)
        promises.push(setFinanceiro(true))
    if (!contagemTarefas) {
        promises.push(setContagemTarefas(null, null, null))
    }

    await Promise.all(promises)
}; */

chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    if (msg?.type === "KENTRO_FETCH") {
        const method = msg.method || "GET"
        try {
            const res = await fetch(msg.url, {
            method,
            headers: msg.headers || {},
            body: msg.body && method != "GET" ? JSON.stringify(msg.body) : undefined,
            credentials: "include",              // inclui cookies/sessão do usuário
            cache: "no-store",                   // evita cache agressivo do SW do site
            mode: "cors"
            });
            const text = await res.text();
            console.log(text)
            sendResponse({ ok: res.ok, status: res.status, body: text });
        } catch (e) {
            sendResponse({ ok: false, error: String(e) });
        }
        return true; // resposta assíncrona
    }
});