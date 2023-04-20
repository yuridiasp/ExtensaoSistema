

onExtensionInstalled(setInitial)

function setInitial() {
    setInitialState()
}

async function setInitialState() {
    let state = await getState()
    let autocomplete = await getAutoComplete()
    let financeiro = await getFinanceiro()
    const initialState = {
        active: true,
        functions: {
            abaCadastrodeProcesso: {
                autoFormatNumProcesso: undefined
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
                paineldevisualizacaoTarefasTime: undefined,
            }
        }
    }

    if (state == null || state == undefined)
        await setState(initialState)
    if (autocomplete == null || autocomplete == undefined)
        await setAutoComplete(true)
    if (financeiro == null || financeiro == undefined)
        await setFinanceiro(true)
    
}

