const prazosProtocolosProcessos = {
    previdenciaria: {
        "LOAS": 90,
        "AUXÍLIO DOENÇA": 45,
        "AUXÍLIO ACIDENTE": 60,
        "AUXÍLIO RECLUSÃO": 60,
        "SALÁRIO MATERNIDADE": 30,
        "APOSENTADORIA POR IDADE URBANA": 90,
        "APOSENTADORIA POR IDADE RURAL": 90,
        "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO": 90,
        "APOSENTADORIA ESPECIAL": 90,
        "APOSENTADORIA POR INVALIDEZ": 45,
        "PAB": 90,
        "PENSÃO POR MORTE": 60,
    },
    civ: {},
    trt: {}
}
const { eduardo, thalyson, joseHenrique, yan, ana, italo } = {
    eduardo: {
        id: 192,
        nome: "EDUARDO PAIXÃO ROCHA SOBRINHO",
        nomeTLC: "EDUARDO",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    thalyson: {
        id: 206,
        nome: "THALYSON KELSON LIMA TORRES",
        nomeTLC: "THALYSON",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    joseHenrique: {
        id: 230,
        nome: "JOSÉ HENRIQUE VASCONCELOS RODRIGUES FONTES",
        nomeTLC: "JOSÉ HENRIQUE",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    yan: {
        id: 229,
        nome: "YAN THADEU PORTO DE OLIVEIRA SANTOS",
        nomeTLC: "YAN",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    ana: {
        id: 134,
        nome: "ANA CAROLINA SOARES DE MELO",
        nomeTLC: "ANA CAROLINA",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
    italo: {
        id: 159,
        nome: "ITALO DE ANDRADE BEZERRA",
        nomeTLC: "ITALO",
        diasViagem: [],
        contagem: 0,
        atrasadas: 0
    },
}
const demandas = {
    prev: {
        "LOAS": [thalyson, joseHenrique, yan],
        "AUXÍLIO DOENÇA": [eduardo, thalyson, joseHenrique, yan],
        "AUXÍLIO ACIDENTE": [joseHenrique, yan],
        "AUXÍLIO RECLUSÃO": [eduardo, thalyson, yan],
        "SALÁRIO MATERNIDADE": [eduardo, thalyson, joseHenrique, yan],
        "APOSENTADORIA POR IDADE URBANA": [eduardo, thalyson, joseHenrique, yan],
        "APOSENTADORIA POR IDADE RURAL": [eduardo, thalyson, joseHenrique, yan],
        "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO": [eduardo, thalyson, ana, italo],
        "APOSENTADORIA ESPECIAL": [eduardo, thalyson, ana, italo],
        "APOSENTADORIA POR INVALIDEZ": [eduardo, thalyson, joseHenrique, yan],
        "PAB": [eduardo, thalyson, joseHenrique, yan],
        "PENSÃO POR MORTE": [eduardo, thalyson, joseHenrique, yan],
        "REVISÃO RMI": [eduardo, thalyson, ana, italo],
        "ADICIONAL 25%": [thalyson, joseHenrique, yan],
        "APOSENTADORIA RPPS": [eduardo, ana, italo]
    },
    civ: {},
    trt: {}
}
const areas = {
    previdenciaria: "prev",
    civel: "civ",
    trabalhista: "trt",
}

function selectRespExecJuridico({ isEnvelope, area }) {
    const isPrevienciaria = area === areas.previdenciaria
    if (isEnvelope) {
        if (isPrevienciaria) {
            //TODO
        }
    } else {
        //TODO
    }
}

function createInputSelect(divDescription) {
    const htmlDescriptionSelect =   `<select name="descricao" id="descricao" class="form-control selectpicker" data-live-search="true" data-parsley-id="19" tabindex="-98">
                                        <option value="LOAS">LOAS</option>
                                        <option value="AUXÍLIO DOENÇA">AUXÍLIO DOENÇA</option>
                                        <option value="AUXÍLIO ACIDENTE">AUXÍLIO ACIDENTE</option>
                                        <option value="AUXÍLIO RECLUSÃO">AUXÍLIO RECLUSÃO</option>
                                        <option value="SALÁRIO MATERNIDADE">SALÁRIO MATERNIDADE</option>
                                        <option value="APOSENTADORIA POR IDADE URBANA">APOSENTADORIA POR IDADE URBANA</option>
                                        <option value="APOSENTADORIA POR IDADE RURAL">APOSENTADORIA POR IDADE RURAL</option>
                                        <option value="APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO">APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO</option>
                                        <option value="APOSENTADORIA ESPECIAL">APOSENTADORIA ESPECIAL</option>
                                        <option value="APOSENTADORIA POR INVALIDEZ">APOSENTADORIA POR INVALIDEZ</option>
                                        <option value="PAB">PAB</option>
                                        <option value="PENSÃO POR MORTE">PENSÃO POR MORTE</option>
                                        <option value="REVISÃO RMI">REVISÃO RMI</option>
                                        <option value="ADICIONAL 25%">ADICIONAL 25%</option>
                                        <option value="APOSENTADORIA RPPS">APOSENTADORIA RPPS</option>
                                    </select>`
    
    divDescription.innerHTML = htmlDescriptionSelect
}

function createInputTextArea(divDescription) {
    const descriptionElement = document.querySelector("#descricao")

    if (descriptionElement.type === 'textarea') {
        return
    }

    const htmlDescriptionTextArea = `<textarea name="descricao" id="descricao" required="" maxlength="1000" class="form-control" data-parsley-id="19"></textarea>`

    divDescription.innerHTML = htmlDescriptionTextArea
}

function automaticDistributionTasksJuricial() {
    const select = document.querySelector('#idTipoTarefa')
    const divDescription = document.querySelector("#fdt-form > div:nth-child(14) > div.col-sm-8 > div")

    select.addEventListener("change", ({ target }) => {
        const { selectedOptions } = target
        
        const tipoTarefa = selectedOptions[0].innerText.toUpperCase()

        if (tipoTarefa === "ENVELOPE - PREV") {
            createInputSelect({ isEnvelope: true, area: areas.previdenciaria, divDescription })
            return selectRespExecJuridico({ isEnvelope: true, area: areas.previdenciaria })
        }

        if (tipoTarefa === "DEMORA INJUSTIFICADA") {
            createInputSelect({ isEnvelope: true, area: areas.previdenciaria, divDescription })
            return selectRespExecJuridico({ isEnvelope: false, area: areas.previdenciaria })
        }

        return createInputTextArea(divDescription)
    })
}