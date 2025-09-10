const atendimentos = {
    "AASM": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "57.141px",
    },
    "ÁGUAS LINDAS": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "114.281px",
    },
    "ARACAJU": {
        top: "35.5%",
        fields: ["advogadoAgendamento", "dataAgendamento", "horarioAgendamento"],
        height: "171.422px",
    },
    "CAPELA - MIRANDA": null,
    "CAPELA - PIRUNGA": null,
    "CONDE": null,
    "ESTÂNCIA": {
        top: "41.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "114.281px",
    },
    "JAPARATUBA": null,
    "LOT. JEOVÁ": null,
    "NOVO GAMA": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "57.141px",
    },
    "PEDRINHAS": null,
    "PORTO RICO": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "57.141px",
    },
    "SANTA MARIA": {
        top: "41.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "114.281px",
    },
    "SANTA MARIA DF": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "57.141px",
    },
    "SANTO ANTÔNIO GO": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "57.141px",
    },
    "TAGUATINGA": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "114.281px",
    },
    "TOBIAS BARRETO": {
        top: "41.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "114.281px",
    },
    "VALPARAÍSO": {
        top: "39.5%",
        fields: ["dataAgendamento", "horarioAgendamento"],
        height: "57.141px",
    },
}

function removeListBackgroundPhotoGen() {
    const lastBackground = document.querySelector("#backgroundFollow")

    if (lastBackground) {
        lastBackground.remove()
    }
}

function createPopupPhotoGenerator() {
    removeListBackgroundPhotoGen()

    const movePopupPhotoGenerator = (background) => {
        background.style.top = window.scrollY + "px"
    }

    const background = document.createElement("div")
    const popup = document.createElement("div")

    background.addEventListener("click", event => {
        if (event.target === background) {
            background.remove()
            showScrollBar()
        }
    })
    
    document.body.append(background)
    background.append(popup)

    background.id = "backgroundFollow"
    background.style.zIndex = 10
    background.style.background = "#000000a6"
    background.style.position = "absolute"
    background.style.width = "100%"
    background.style.top = "0"
    background.style.padding = "0"
    background.style.margin = "0"
    background.style.display = "flex"
    background.style.justifyContent = "center"

    popup.style.zIndex = 11
    popup.style.display = "flex"
    popup.style.background = "#f5f5f5"
    popup.style.maxWidth = "1100px"
    popup.style.padding = "5px"
    popup.style.borderRadius = "10px"
    popup.style.margin = "10px"
    popup.style.position = "relative"

    const optionsAtendimentos = Object.keys(atendimentos).reduce((previous, current) => {
        previous += `<option value="${current}">${current}</option>`
        return previous
    }, '')

    popup.innerHTML = `<div id="closePhotoGenerator" style="display: flex; justify-content: center; align-items: center; position: absolute; z-index: 15; width: 40px; height: 40px; border-radius: 100%; background: #111; right: -10px; top: -10px; color: #CCC"><i class="fa fa-times"></i></div>
                <div id="capture" style="position: relative; margin: 0; padding: 0; max-height: 1131.530px">
                    <div id="legendaImagem" style="font-family: &quot;Arial Black&quot;, sans-serif; flex-direction: column; position: absolute; top: 35.5%; width: 100%; height: 171.422px;justify-content: space-between;">
                        <div id="advogadoAgendamento" style="text-align: left; color: #ffffff;font-size: 40px; padding-left: 70px; height: 57.141px;align-items: center;">DR. DIEGO</div>
                        <div id="dataAgendamento" style="text-align: left; color: #ffffff;font-size: 40px; padding-left: 70px; height: 57.141px;">15/08/2025</div>
                        <div id="horarioAgendamento" style="text-align: left; color: #ffffff;font-size: 40px; padding-left: 70px; height: 57.141px;">08:00</div>
                    </div>
                    <img id="image-background" width="800" src="" alt="" srcset="">
                </div>
                <div style="margin: 10px; text-align: center;">
                    <h2>Dados do Agendamento</h2>
                    <fieldset class="form-group">
                        <label for="atendimentos">Local Atendimento:</label>
                        <select class="form-control" name="atendimentos" id="atendimentos">${optionsAtendimentos}</select>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="dataFormulario">Data do Agendamento:</label>
                        <input class="form-control" id="dataFormulario" type="date">
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="horarioFormulario">Horário do Agendamento:</label>
                        <input class="form-control" id="horarioFormulario" type="time">
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="advogadoFormulario">Advogado:</label>
                        <input class="form-control" type="text" name="advogadoFormulario" id="advogadoFormulario">
                    </fieldset>
                    <button id="gerarImagemBTN" class="btn fdt-btn-oliva">Salvar Imagem</button>
                    <button id="copiarImagemBTN" class="btn fdt-btn-azul">Copiar Imagem</button>
                </div>
                <div id="resultado"></div>`

    const legendaImagem = document.querySelector("#legendaImagem")
    const imageBackground = document.querySelector("#image-background")

    const atendimentosSelect = document.querySelector("#atendimentos")
    const horarioFormulario = document.querySelector("#horarioFormulario")
    const dataFormulario = document.querySelector("#dataFormulario")
    const advogadoFormulario = document.querySelector("#advogadoFormulario")
    
    const agendamento = document.querySelector("#agendamento")
    const dataAgendamento = document.querySelector("#dataAgendamento")
    const horarioAgendamento = document.querySelector("#horarioAgendamento")
    const advogadoAgendamento = document.querySelector("#advogadoAgendamento")

    const closePhotoGenerator = document.querySelector("#closePhotoGenerator")

    closePhotoGenerator.addEventListener("click", () => {
        background.remove()
        showScrollBar()
    })

    movePopupPhotoGenerator(background)

    return { legendaImagem, imageBackground, atendimentosSelect, horarioAgendamento, dataAgendamento, advogadoAgendamento, agendamento, advogadoFormulario, dataFormulario, horarioFormulario }
}

const changeViewGenerator = (hasFollowUp, advogadoFormulario, dataFormulario, horarioFormulario) => {
    dataFormulario.disabled = !hasFollowUp
    horarioFormulario.disabled = !hasFollowUp
    advogadoFormulario.disabled = !hasFollowUp
}

const setStyleLabel = (atendimentosSelect) => {
    const local = atendimentosSelect.value
    const locais = {
        "AASM": "ATENDIMENTO ASSOCIAÇÃO ATLÉTICA DO SANTA MARIA (AASM)",
        "ÁGUAS LINDAS": "ATENDIMENTO ÁGUAS LINDAS",
        "ARACAJU": "ATENDIMENTO ARACAJU (SEDE)",
        "CAPELA - MIRANDA": "ATENDIMENTO MIRANDA",
        "CAPELA - PIRUNGA": "ATENDIMENTO PIRUNGA",
        "CONDE": "ATENDIMENTO CONDE",
        "ESTÂNCIA": "ATENDIMENTO ESTÂNCIA",
        "JAPARATUBA": "ATENDIMENTO JAPARATUBA",
        "LOT. JEOVÁ": "ATENDIMENTO LOT. JEOVÁ",
        "NOVO GAMA": "ATENDIMENTO NOVO GAMA",
        "PEDRINHAS": "ATENDIMENTO PEDRINHAS",
        "PORTO RICO": "ATENDIMENTO PORTO RICO",
        "SANTA MARIA": "ATENDIMENTO SANTA MARIA",
        "SANTA MARIA DF": "ATENDIMENTO SANTA MARIA / DF",
        "TAGUATINGA": "ATENDIMENTO TAGUATINGA",
        "TOBIAS BARRETO": "ATENDIMENTO TOBIAS BARRETO",
        "VALPARAÍSO": "ATENDIMENTO VALPARAÍSO",
    }
}

const setAgendamentoImage = (horarioAgendamento, horarioFormulario, dataAgendamento, dataFormulario) => {
    const [ ano, mes, dia ] = dataFormulario.value.split("-")
    const date = new Date(ano, mes - 1, dia)
    const horario = horarioFormulario.value

    horarioAgendamento.innerHTML = horario
    dataAgendamento.innerHTML = date.toLocaleDateString()
}

const setAdvogadoImage = (advogadoAgendamento, advogadoFormulario) => {
    advogadoAgendamento.innerHTML = advogadoFormulario.value
    if(advogadoFormulario.value.length > 10) {
        advogadoAgendamento.style.fontSize = "30px"
    } else {
        advogadoAgendamento.style.fontSize = "40px"
    }
}

const verifyFollowUpRegister = (local) => {
    const placesAppointmentsList = ["AASM", "ÁGUAS LINDAS", "ARACAJU", "ESTÂNCIA", "NOVO GAMA", "PORTO RICO", "SANTA MARIA", "SANTA MARIA DF", "SANTO ANTÔNIO GO", "TAGUATINGA", "TOBIAS BARRETO", "VALPARAÍSO"]

    return placesAppointmentsList.includes(local)
}

const setImageBackground = (atendimentosSelect, imageBackground) => {
    const local = atendimentosSelect.value
    
    const imageUrl = chrome.runtime.getURL(`atendimentos/images/${local}.jpg`)
    
    const testImage = new Image()

    testImage.onload = () => {
        imageBackground.src = imageUrl
    }

    testImage.onerror = () => {
        removeListBackgroundPhotoGen()
        alert("Imagem não cadastrada para esse tipo de atendimento.")
    }

    testImage.src = imageUrl
}

const setViewLegendDiv = (hasFollowUp, legendaImagem, local) => {
    const fields = ["advogadoAgendamento", "dataAgendamento", "horarioAgendamento"]

    if(atendimentos[local]) {
        fields.forEach(field => {
            if(atendimentos[local].fields.includes(field))
                document.querySelector(`#${field}`).style.display = "flex"
            else
                document.querySelector(`#${field}`).style.display = "none"
        })
        legendaImagem.style.top = atendimentos[local].top
        legendaImagem.style.height = atendimentos[local].height
    }
    
    legendaImagem.style.display = hasFollowUp ? "flex" : "none"
}

const changeImage = (local, atendimentosSelect, imageBackground, legendaImagem, advogadoFormulario, dataFormulario, horarioFormulario) => {
    const hasFollowUp = verifyFollowUpRegister(local)
    setViewLegendDiv(hasFollowUp, legendaImagem, local)
    setImageBackground(atendimentosSelect, imageBackground)
    changeViewGenerator(hasFollowUp, advogadoFormulario, dataFormulario, horarioFormulario)
}

async function gerarBlobDaImagem() {
    const target = document.getElementById('capture')

    if(!target) {
        return false
    }
    
    const canvas = await html2canvas(target, {
        useCORS: true,
        allowTaint: false,
    })
    
    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error("Erro ao gerar blob da imagem"))
          }
        }, "image/jpg")
    })
}

async function copiarImagem(message = null, sendResponse = null) {
    const blob = await gerarBlobDaImagem()

    if(message) {
        if (!blob) {
            sendResponse({ error: "Elemento #capture não encontrado. Janela da imagem do agendamento deve estar visível para copiá-la." })

            return true
        }

        const url = URL.createObjectURL(blob)
        sendResponse({ image: url })

        return true
    }
    

    if (!navigator.clipboard || typeof ClipboardItem === 'undefined') {
        alert("Navegador sem suporte ou conexão insegura (https requerido). Use a função de copiar via Pop-up da extensão.")
        return
    }

    const item = new ClipboardItem({ [blob.type]: blob })
    await navigator.clipboard.write([item])
    alert("Imagem copiada com sucesso!")
}

function gerarImagem(nome = "agendamento") {
    const elemento = document.getElementById('capture')
    html2canvas(elemento, {
        useCORS: true,
        allowTaint: false,
    }).then((canvas) => {
        const imagem = canvas.toDataURL("image/jpg")
        const link = document.createElement("a")
        link.href = imagem
        link.download = `${nome}.jpg`

        link.click()

        document.getElementById('resultado').innerHTML = ""
    })
}

const setListenersPhotoGenerator = (horarioAgendamento, dataAgendamento, advogadoAgendamento, atendimentosSelect, imageBackground, advogadoFormulario, legendaImagem, agendamento, dataFormulario, horarioFormulario) => {
    horarioFormulario.addEventListener("input", () => setAgendamentoImage(horarioAgendamento, horarioFormulario, dataAgendamento, dataFormulario))
    dataFormulario.addEventListener("input", () => setAgendamentoImage(horarioAgendamento, horarioFormulario, dataAgendamento, dataFormulario))
    advogadoFormulario.addEventListener("input", event => { event.target.value = event.target.value.toUpperCase(); setAdvogadoImage(advogadoAgendamento, advogadoFormulario) })
    atendimentosSelect.addEventListener("input", () => {
        const local = atendimentosSelect.value
        changeImage(local, atendimentosSelect, imageBackground, legendaImagem, advogadoFormulario, dataFormulario, horarioFormulario)
        if(advogadoFormulario.value.length > 10) {
            advogadoAgendamento.style.fontSize = "30px"
        } else {
            advogadoAgendamento.style.fontSize = "40px"
        }
    })
}

function hiddeScrollBar() {
    document.querySelector("body").style.overflowY = "hidden"
}

function showScrollBar() {
    document.querySelector("body").style.overflowY = "auto"
}

function initDataImageDefaut(
    local = "AASM",
    horario = "09:00",
    data = (new Date()).toISOString().split("T")[0],
    tiposAtendimento = "ATENDIMENTO DR. DIEGO",
    nome = "Agendamento" + " " + local,
    date = new Date()
) {
    const tiposAtendimentos = {
        "AASM - DF": "PREVIDENCIÁRIO",
        "ATENDIMENTO ÁGUAS LINDAS": "PREVIDENCIÁRIO",
        "ATENDIMENTO CÍVEL": "CÍVEL",
        "ATENDIMENTO CÍVEL VIRTUAL": "CÍVEL",
        "ATENDIMENTO DR. DIEGO": "DR. DIEGO",
        "ATENDIMENTO DR. FABIO": "DR. FÁBIO",
        "ATENDIMENTO DR. MARCUS": "DR. MARCUS",
        "ATENDIMENTO DRA. SARA": "DRA. SARA",
        "ATENDIMENTO ESTÂNCIA": "PREVIDENCIÁRIO",
        "ATENDIMENTO PLANTONISTA (TESTE)": "FR ADVOGADOS",
        "ATENDIMENTO SANTA MARIA (Filial Aju)": "PREVIDENCIÁRIO",
        "ATENDIMENTO TAGUATINGA": "PREVIDENCIÁRIO",
        "ATENDIMENTO TRABALHISTA": "TRABALHISTA",
        "CÁRITAS - SANTA MARIA - DF": "PREVIDENCIÁRIO",
        "NOVO GAMA - DF": "PREVIDENCIÁRIO",
        "ORIENTAÇÃO DE AUDIÊNCIA": "FR ADVOGADOS",
        "PORTO RICO - DF": "PREVIDENCIÁRIO",
        "PREVIDENCIÁRIO - VIRTUAL": "PREVIDENCIÁRIO",
        "PREVIDENCIÁRIO QUINTA-FEIRA DE TARDE": "PREVIDENCIÁRIO",
        "PREVIDENCIÁRIO SEGUNDA E QUARTA-FEIRA DE MANHÃ": "PREVIDENCIÁRIO",
        "SANTO ANTONIO DO DESCOBERTO - GO": "PREVIDENCIÁRIO",
        "VALPARAÍSO - DF": "PREVIDENCIÁRIO",
    }

    const { legendaImagem, imageBackground, atendimentosSelect, horarioAgendamento, dataAgendamento, advogadoAgendamento, agendamento, advogadoFormulario, dataFormulario, horarioFormulario } = createPopupPhotoGenerator()
    hiddeScrollBar()
    atendimentosSelect.value = local
    horarioFormulario.value = horario
    dataFormulario.value = data
    advogadoFormulario.value = tiposAtendimentos[tiposAtendimento]
    horarioAgendamento.innerHTML = horario
    dataAgendamento.innerHTML = date.toLocaleDateString()
    advogadoAgendamento.innerHTML = tiposAtendimentos[tiposAtendimento]

    if(advogadoFormulario.value.length > 10) {
        advogadoAgendamento.style.fontSize = "30px"
    } else {
        advogadoAgendamento.style.fontSize = "40px"
    }
    
    changeImage(local, atendimentosSelect, imageBackground, legendaImagem, advogadoFormulario, dataFormulario, horarioFormulario)
    setAdvogadoImage(advogadoAgendamento, advogadoFormulario)
    setListenersPhotoGenerator(horarioAgendamento, dataAgendamento, advogadoAgendamento, atendimentosSelect, imageBackground, advogadoFormulario, legendaImagem, agendamento, dataFormulario, horarioFormulario)

    const gerarImagemBTN = document.querySelector("#gerarImagemBTN")
    const copiarImagemBTN = document.querySelector("#copiarImagemBTN")

    gerarImagemBTN.addEventListener("click", () => gerarImagem(nome))

    copiarImagemBTN.addEventListener('click', async () => copiarImagem())
}

function createButtonPhotoGeneratorfollowUpListMenu(followUpListMenu) {
    const ulFollowUp = followUpListMenu.querySelector("ul.fdt_ml-menu-dropdown")
    const li = document.createElement("li")
    const a = document.createElement("a")
    li.append(a)
    ulFollowUp.append(li)

    a.innerHTML = '<i class="fa fa-image"></i>Imagem Agendamento'

    a.addEventListener("click", event => {
        event.preventDefault()

        initDataImageDefaut()
    })
}

function createButtonPhotoGenerator(isFollowUpURL = null) {

    if(!state.functions.abaFollowUps.photoGenerator) {
        return
    }

    const followUpListMenu = Array.from(document.querySelectorAll("body > section > aside > nav > ul > li.fdt_ml-menu-item")).find(element => element.innerHTML.includes("Follow-ups"))

    if(!followUpListMenu) {
        return
    }

    createButtonPhotoGeneratorfollowUpListMenu(followUpListMenu)

    if (!isFollowUpURL) {
        return
    }

    const getDataHorario = (element) => {
        const [data, hora] = element.innerText.split("\n")[0].trim().split(" às ")
        const [dia, mes, ano] = data.split("/")
        const dataFormatada = `${ano}-${mes}-${dia}`
        const date = new Date(ano, mes - 1, dia)

        if (hora) {
            const bloco = hora.split(":")[0] + ":00"
            return [dataFormatada, bloco, date]
        }

        return [dataFormatada, "00:00", date]
    }

    const folloUpsList = document.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr")

    folloUpsList.forEach(element => {
        const locaisPorTipoAtendimentos = {
            "AASM - DF": "AASM",
            "ATENDIMENTO ÁGUAS LINDAS": "ÁGUAS LINDAS",
            "ATENDIMENTO CÍVEL": "ARACAJU",
            "ATENDIMENTO CÍVEL VIRTUAL": "ARACAJU",
            "ATENDIMENTO DR. DIEGO": "ARACAJU",
            "ATENDIMENTO DR. FABIO": "ARACAJU",
            "ATENDIMENTO DR. MARCUS": "ARACAJU",
            "ATENDIMENTO DRA. SARA": "ARACAJU",
            "ATENDIMENTO ESTÂNCIA": "ESTÂNCIA",
            "ATENDIMENTO PLANTONISTA (TESTE)": "ARACAJU",
            "ATENDIMENTO SANTA MARIA (Filial Aju)": "SANTA MARIA",
            "ATENDIMENTO TAGUATINGA": "TAGUATINGA",
            "ATENDIMENTO TRABALHISTA": "ARACAJU",
            "CÁRITAS - SANTA MARIA - DF": "SANTA MARIA DF",
            "DR FÁBIO (Filial Santa Maria Aracaju)": "SANTA MARIA",
            "NOVO GAMA - DF": "NOVO GAMA",
            "ORIENTAÇÃO DE AUDIÊNCIA": "ARACAJU",
            "PORTO RICO - DF": "PORTO RICO",
            "PREVIDENCIÁRIO - VIRTUAL": "ARACAJU",
            "PREVIDENCIÁRIO QUINTA-FEIRA DE TARDE": "ARACAJU",
            "PREVIDENCIÁRIO SEGUNDA E QUARTA-FEIRA DE MANHÃ": "ARACAJU",
            "SANTO ANTONIO DO DESCOBERTO - GO": "SANTO ANTÔNIO GO",
            "VALPARAÍSO - DF": "VALPARAÍSO",
        }
        const container = element.querySelector("td.fdt-acao > div > div")
        const button = document.createElement("a")

        const nome = element.querySelector("td:nth-child(4)").innerText.split("\n")[0]

        const tipoAtendimento = element.querySelector("td:nth-child(6) > span").textContent.trim()

        const dataHorarioElement = element.querySelector("td:nth-child(7)")

        const [data, horario, date] = getDataHorario(dataHorarioElement)

        const local = locaisPorTipoAtendimentos[tipoAtendimento]
        
        container.append(button)
        container.style.width = "290px"
        button.classList.add("fdt-icon")
        button.dataset.toggle = "tooltip"
        button.dataset.placement = "top"
        button.dataset.originalTitle = "Photo Generator"
        button.innerHTML = '<i class="fa fa-image fa-verde"></i>'
        button.onclick = () => initDataImageDefaut(local, horario, data, tipoAtendimento, nome, date)
    })
}