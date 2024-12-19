function getPortalByNumberCase(numberCase) {
    const number = removeCaracteresProcesso(numberCase)
    const unicNumericLength = 20
    const TJSELength = 12
    const ECintLength = 17
    const inssLengthMin = 9
    const inssLengthMax = 10
    const isUnicNumeric = number.length === unicNumericLength
    const isTJSENumberLength = number.length === TJSELength
    const isECinNumbertLength = number.length === ECintLength
    const isINSSSNumberLength = inssLengthMin <= number.length && number.length <= inssLengthMax
    const portais = getPortais()
    
    if (isUnicNumeric) {
        const indiceJudicialSphere = 13
        const indiceTenRegion = 14
        const indiceUnitRegion = 16

        const digitFederalJustice = 4
        const digitLaborJustice = 5
        const digitFederalSupremeCourt = 1
        const digitFederalSuperiorCourtJustice = 3
        const digitEstadualJustice = 8
        
        const region = numberCase.slice(indiceTenRegion, indiceUnitRegion)
        const judicialSphere = numberCase[indiceJudicialSphere]

        const isFederal = judicialSphere == digitFederalJustice
        const isLabor = judicialSphere == digitLaborJustice
        const isFederalSupremeCourt = judicialSphere == digitFederalSupremeCourt
        const isFederalSuperiorCourtJustice = judicialSphere == digitFederalSuperiorCourtJustice
        const isFederaldigitEstadualJustice = judicialSphere == digitEstadualJustice

        let keyPortal = null
        
        if (isFederal) {
            if (region === "05") {
                if (numberCase.search("080") === 0) {
                    keyPortal = `TRF${region}`
                } else if (numberCase.search("050") === 0) {
                    keyPortal = "CRETA"
                } else {
                    keyPortal = `PJE2X`
                }
            } else {
                keyPortal = `TRF${region}`
            }
        }
        
        if (isLabor) {
            keyPortal = `TRT${region}`
        }
        
        if (isFederalSupremeCourt) {
            keyPortal = "STF"
        }
        
        if (isFederalSuperiorCourtJustice) {
            keyPortal = "STJ"
        }
        
        if (isFederaldigitEstadualJustice) {
            const mapCountry = {
                "01": "TJAC",
                "02": "TJAL",
                "03": "TJAP",
                "04": "TJAM",
                "05": "TJBA",
                "06": "TJCE",
                "07": "TJDF",
                "08": "TJES",
                "09": "TJGO",
                "10": "TJMA",
                "11": "TJMT",
                "12": "TJMS",
                "13": "TJMG",
                "14": "TJPA",
                "15": "TJPB",
                "16": "TJPR",
                "17": "TJPE",
                "18": "TJPI",
                "19": "TJRJ",
                "20": "TJRN",
                "21": "TJRS",
                "22": "TJRO",
                "23": "TJRR",
                "24": "TJSC",
                "25": "TJSE",
                "26": "TJSP",
                "27": "TJTO",
            }

            keyPortal = mapCountry[region]
        }

        return keyPortal ? { name: keyPortal, link: portais[keyPortal] } : keyPortal

    } else if (isTJSENumberLength) {
        return { name: "TJSE", link: portais["TJSE"] }
    } else if (isINSSSNumberLength) {
        return { name: "MEU INSS", link: portais["INSS"] }
    } else if (isECinNumbertLength) {
        return { name: "E-Cint", link: portais["ECINT"] }
    }
    
    return null
}

function getNumberCase(page, container) {
    if (page === "processo") {
        return document.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div:nth-child(2) > div:nth-child(2) > span").innerText
    }

    if (page === "fichaTarefa") {
        return document.querySelector("body > section > section > div.fdt-espaco > div > div:nth-child(1) > h4").innerHTML.replace("Ficha da tarefa: ", "")
    }

    if (page === "listaProcesso") {
        return container.parentElement.parentElement.parentElement.querySelector("td:nth-child(3)").innerText
    }

    if (page === "tarefas") {
        return container.parentElement.parentElement.parentElement.querySelector("td:nth-child(3)").innerText.split("\n")[0].split(" ")[0]
    }

    const pre = container.parentElement.parentElement.parentElement.querySelector("td:nth-child(3) > span").innerText

    if (pre === "Pré-processo") {
        return null
    }

    return container.parentElement.parentElement.parentElement.querySelector("td:nth-child(4)").innerText
}

function getContainers(page) {
    if (page === "processo" || page === "fichaTarefa") {
        return document.querySelectorAll("body > section > section > div.fdt-espaco > div > div:nth-child(2)")
    }

    if (page === "listaProcesso" || page === "tarefas") {
        return document.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr > td.fdt-acao > div > div")
    }

    return document.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > table > tbody > tr > td.fdt-acao > div > div")
}

function getElementsProcessContainers(page) {
    const containers = getContainers(page)

    if (containers) {
        const numberCases = Array.from(containers).map(container => getNumberCase(page, container))
    
        return { containers, numberCases }
    }

    return { containers: null, numberCases: null }
}

function createButtonLinkJusticePortalForCase(page) {
    if (!state.functions.todasPaginas.criarBotaoAcessoPortalJusticaProcesso) {
        return
    }
    
    const { containers, numberCases } = getElementsProcessContainers(page)
    
    if (containers) {
        for (let index = 0; index < containers.length; index++) {
            const container = containers[index]
            const numberCase = numberCases[index]

            if (numberCase) {

                const portal = getPortalByNumberCase(numberCase)
                
                if (portal) {
                    const button = `<a rel="noreferrer noopener" target="_blank" href=${portal.link} class="fdt-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="${portal.name}"><i class="fdt-icon-header fa fa-link fa-vermelho"></i></a>`
        
                    if (page === "cliente") {
                        container.style.width = "120px"
                    }

                    if (page === "listaProcesso") {
                        container.style.width = "260px"
                    }

                    if (page === "tarefas") {
                        container.style.width = "230px"
                    }
                    
                    container.innerHTML += button
                }
            }

            
        }
    }
}