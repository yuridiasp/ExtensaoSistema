onExtensionInstalled(setInitial)

function setInitial() {
    setInitialState()
}

async function setInitialState() {
    let state = await getState()
    let autocomplete = await getAutoComplete()
    let financeiro = await getFinanceiro()
    let contagemTarefas = await getContagemTarefas()
    const promises = []
    const initialState = {
        active: true,
        functions: {
            todasPaginas: {
                digitarUsandoVoz: undefined,
                contadorTarefas: undefined
            },
            abaCadastrodeProcesso: {
                autoFormatNumProcesso: undefined,
                alteracaoNumeroProcesso: undefined
            },
            abaPesquisaProcesso: {
                autoFormatacaoNumProcessoPesquisa: undefined
            },
            abaCompromissosProcesso: {
                mostrarBotadeRolagem: undefined
            },
            cadastroCompromisso:{
                selecaodoTipodeCompromisso: undefined,
                mostrarBotoesAuxiliaresdeDias: undefined,
                AutoPreenchimentoPrazoInterno: undefined,
            },
            cadastroTarefa:{
                AutoPreenchimentoTarefasIntimacoes: undefined,
            },
            carregamentoArquivo:{
                seleçãoTipoArquivo: undefined,
                preenchimentoCamposArquivos: undefined,
            },
            supervisor: {
                painelVisualizacaoTarefasTimeADM: undefined,
                painelVisualizacaoTarefasTimeSAC: undefined,
                painelVisualizacaoTarefasTimeFINANCEIRO: undefined,
            }
        }
    }

    if (state == null || state == undefined)
        promises.push(setState(initialState))
    if (autocomplete == null || autocomplete == undefined)
        promises.push(setAutoComplete(true))
    if (financeiro == null || financeiro == undefined)
        promises.push(setFinanceiro(true))
    if (contagemTarefas == null || contagemTarefas == undefined) {
        promises.push(setContagemTarefas(null, null, null))
    }

    await Promise.all(promises)
}