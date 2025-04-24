const removeListBackgroundPhotoGen = () => {
    const lastBackground = document.querySelector("#backgroundFollow")

    if (lastBackground) {
        lastBackground.remove()
    }
}

const createPopupPhotoGenerator = () => {
    removeListBackgroundPhotoGen()

    const background = document.createElement("div")
    const popup = document.createElement("div")

    background.addEventListener("click", event => {
        if (event.target === background)
            background.remove()
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

    popup.innerHTML = `<div id="closePhotoGenerator" style="display: flex; justify-content: center; align-items: center; position: absolute; z-index: 15; width: 40px; height: 40px; border-radius: 100%; background: #111; right: -10px; top: -10px; color: #CCC"><i class="fa fa-times"></i></div>
                <div id="capture" style="position: relative; margin: 0; padding: 0; max-height: 1131.530px">
                    <div id="legendaImagem" style="display: flex; font-family: 'Arial Black', sans-serif; flex-direction: column; position: absolute; top: 40%; width: 100%; background: #0a1a3f; justify-content: center; align-items: center; border-top: #B38A12 5px solid; border-bottom: #B38A12 5px solid; padding: 30px 0;">
                    <div style="position: relative; width: 100%;">
                        <h1 id="titulo" style="position: absolute; top: -80px; font-size: 40px; color: #BF800B;text-shadow:  -2px -2px 0 #ffffff,   2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff; text-align: center; padding: 0; line-height: 1.2; width: 100%"></h1>
                    </div>
                    <div>
                        <p style="text-align: center;font-family: 'Arial Black', sans-serif; font-size: 24px; color: #dca716; text-transform: uppercase; text-shadow: -2px -2px 0 #000000,  2px -2px 0 #000000, -2px  2px 0 #000000,  2px  2px 0 #000000; letter-spacing: 1px;">AGENDAMENTO: <span id="agendamento" style="color: #ffffff;"></span></p>
                        <p style="font-family: 'Arial Black', sans-serif; font-size: 24px; color: #dca716; text-transform: uppercase; text-shadow: -2px -2px 0 #000000,  2px -2px 0 #000000, -2px  2px 0 #000000,  2px  2px 0 #000000; letter-spacing: 1px;">ADVOGADO: <span id="advogado" style="color: #ffffff;"></span></p>
                    </div>
                    </div>
                    <img id="image-background" width="800" src="" alt="" srcset="">
                </div>
                <div style="margin: 10px; text-align: center;">
                    <h2>Dados do Agendamento</h2>
                    <fieldset class="form-group">
                        <label for="atendimentos">Local Atendimento:</label>
                        <select class="form-control" name="atendimentos" id="atendimentos">
                            <option value="AASM">AASM</option>
                            <option value="ÁGUA QUENTE">ÁGUA QUENTE</option>
                            <option value="ÁGUAS LINDAS">ÁGUAS LINDAS</option>
                            <option value="ARACAJU">ARACAJU</option>
                            <option value="CAPELA - MIRANDA">CAPELA - MIRANDA</option>
                            <option value="CAPELA - PIRUNGA">CAPELA - PIRUNGA</option>
                            <option value="CONDE">CONDE</option>
                            <option value="ESTÂNCIA">ESTÂNCIA</option>
                            <option value="JAPARATUBA">JAPARATUBA</option>
                            <option value="LOT. JEOVÁ">LOT. JEOVÁ</option>
                            <option value="NOVO GAMA">NOVO GAMA</option>
                            <option value="PEDRINHAS">PEDRINHAS</option>
                            <option value="PORTO RICO">PORTO RICO</option>
                            <option value="SANTA MARIA">SANTA MARIA</option>
                            <option value="SANTA MARIA DF">SANTA MARIA DF</option>
                            <option value="SANTO ANTÔNIO">SANTO ANTÔNIO</option>
                            <option value="TAGUATINGA">TAGUATINGA</option>
                            <option value="TOBIAS BARRETO">TOBIAS BARRETO</option>
                            <option value="VALPARAÍSO">VALPARAÍSO</option>
                        </select>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="dataAgendamento">Data do Agendamento:</label>
                        <input class="form-control" id="dataAgendamento" type="date">
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="horarioAgendamento">Horário do Agendamento:</label>
                        <input class="form-control" id="horarioAgendamento" type="time">
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="advogadoAgendamento">Advogado:</label>
                        <input class="form-control" type="text" name="advogadoAgendamento" id="advogadoAgendamento">
                    </fieldset>
                    <button id="gerarImagemBTN" class="btn fdt-btn-oliva">Salvar Imagem</button>
                    <button id="copiarImagemBTN" class="btn fdt-btn-azul">Copiar Imagem</button>
                </div>
                <div id="resultado"></div>`

    const legendaImagem = document.querySelector("#legendaImagem")
    const imageBackground = document.querySelector("#image-background")

    const atendimentosSelect = document.querySelector("#atendimentos")
    const horarioAgendamento = document.querySelector("#horarioAgendamento")
    const dataAgendamento = document.querySelector("#dataAgendamento")
    const advogadoAgendamento = document.querySelector("#advogadoAgendamento")
    
    const agendamentoElement = document.querySelector("#agendamento")
    const advogadoElement = document.querySelector("#advogado")
    const tituloElement = document.querySelector("#titulo")

    const closePhotoGenerator = document.querySelector("#closePhotoGenerator")

    closePhotoGenerator.addEventListener("click", () => {
        background.remove()
    })

    return { legendaImagem, imageBackground, atendimentosSelect, horarioAgendamento, dataAgendamento, advogadoAgendamento, agendamentoElement, advogadoElement, tituloElement }
}

const changeViewGenerator = (hasFollowUp) => {
    dataAgendamento.disabled = !hasFollowUp
    horarioAgendamento.disabled = !hasFollowUp
    advogadoAgendamento.disabled = !hasFollowUp
}

const setStyleLabel = () => {
    const local = atendimentosSelect.value
    const locais = {
        "AASM": "ATENDIMENTO ASSOCIAÇÃO ATLÉTICA DO SANTA MARIA (AASM)",
        "ÁGUA QUENTE": "ATENDIMENTO ÁGUA QUENTE (OMAQ)",
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

const setAgendamentoImage = (agendamentoElement) => {
    const [ ano, mes, dia ] = dataAgendamento.value.split("-")
    const date = new Date(ano, mes - 1, dia)
    const horario = horarioAgendamento.value
    const text = `${date.toLocaleDateString()} NO BLOCO DAS ${horario}<br>(ORDEM DE CHEGADA)`

    agendamentoElement.innerHTML = text
}

const setAdvogadoImage = (advogadoElement) => {
    const advogadoName = advogadoAgendamento.value

    advogadoElement.innerHTML = advogadoName
}

const setLocalImage = (atendimentosSelect, tituloElement) => {
    const local = atendimentosSelect.value
    const locais = {
        "AASM": "ATENDIMENTO ASSOCIAÇÃO ATLÉTICA DO SANTA MARIA (AASM)",
        "ÁGUA QUENTE": "ATENDIMENTO ÁGUA QUENTE (OMAQ)",
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

    tituloElement.innerHTML = locais[local]
}

const verifyFollowUpRegister = (local) => {
    const placesAppointmentsList = []

    return placesAppointmentsList.includes(local)
}

const setImageBackground = (atendimentosSelect, imageBackground) => {
    const local = atendimentosSelect.value
    
    const imageUrl = chrome.runtime.getURL(`atendimentos/images/${local}.png`)
    
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

const setViewLegendDiv = (hasFollowUp, legendaImagem) => {
    legendaImagem.style.display = hasFollowUp ? "flex" : "none"
}

const changeImage = (local, atendimentosSelect, imageBackground, tituloElement, legendaImagem) => {
    const hasFollowUp = verifyFollowUpRegister(local)
    setViewLegendDiv(hasFollowUp, legendaImagem)
    setImageBackground(atendimentosSelect, imageBackground)
    setLocalImage(atendimentosSelect, tituloElement)
    changeViewGenerator(hasFollowUp)
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
        }, "image/png")
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
        const imagem = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = imagem
        link.download = `${nome}.png`

        link.click()

        document.getElementById('resultado').innerHTML = ""
    })
}

const setListenersPhotoGenerator = (horarioAgendamento, dataAgendamento, advogadoAgendamento, atendimentosSelect, imageBackground, tituloElement, advogadoElement, legendaImagem, agendamentoElement) => {
    horarioAgendamento.addEventListener("input", () => setAgendamentoImage(agendamentoElement))
    dataAgendamento.addEventListener("input", () => setAgendamentoImage(agendamentoElement))
    advogadoAgendamento.addEventListener("input", () => setAdvogadoImage(advogadoElement))
    atendimentosSelect.addEventListener("input", () => {
        const local = atendimentosSelect.value
        changeImage(local, atendimentosSelect, imageBackground, tituloElement, legendaImagem)
    })
}

function initDataImageDefaut(
    local = "AASM",
    horario = "09:00",
    data = (new Date()).toISOString().split("T")[0],
    tiposAtendimento = "ATENDIMENTO DR. DIEGO",
    nome = "Agendamento" + " " + local
) {

    const tiposAtendimentos = {
        "AASM - DF": "Previdenciário",
        "ÁGUA QUENTE - DF": "Previdenciário",
        "ATENDIMENTO ÁGUAS LINDAS": "Previdenciário",
        "ATENDIMENTO CÍVEL": "Cível",
        "ATENDIMENTO CÍVEL VIRTUAL": "Cível",
        "ATENDIMENTO DR. DIEGO": "Dr. Diego",
        "ATENDIMENTO DR. FABIO": "Dr. Fábio",
        "ATENDIMENTO DR. MARCUS": "Dr. Marcus",
        "ATENDIMENTO DRA. SARA": "Dra. Sara",
        "ATENDIMENTO ESTÂNCIA": "Previdenciário",
        "ATENDIMENTO PLANTONISTA (TESTE)": "FR Advogados",
        "ATENDIMENTO SANTA MARIA (Filial Aju)": "Previdenciário",
        "ATENDIMENTO TAGUATINGA": "Previdenciário",
        "ATENDIMENTO TRABALHISTA": "Trabalhista",
        "NOVO GAMA - DF": "Previdenciário",
        "ORIENTAÇÃO DE AUDIÊNCIA": "FR Advogados",
        "PORTO RICO - DF": "Previdenciário",
        "PREVIDENCIÁRIO - VIRTUAL": "Previdenciário",
        "PREVIDENCIÁRIO QUINTA-FEIRA DE TARDE": "Previdenciário",
        "PREVIDENCIÁRIO SEGUNDA E QUARTA-FEIRA DE MANHÃ": "Previdenciário",
        "VALPARAÍSO - DF": "Previdenciário",
    }

    const { legendaImagem, imageBackground, atendimentosSelect, horarioAgendamento, dataAgendamento, advogadoAgendamento, agendamentoElement, advogadoElement, tituloElement } = createPopupPhotoGenerator()

    atendimentosSelect.value = local
    horarioAgendamento.value = horario
    dataAgendamento.value = data
    advogadoAgendamento.value = tiposAtendimentos[tiposAtendimento]
    
    changeImage(local, atendimentosSelect, imageBackground, tituloElement, legendaImagem)
    setAgendamentoImage(agendamentoElement)
    setAdvogadoImage(advogadoElement)
    setListenersPhotoGenerator(horarioAgendamento, dataAgendamento, advogadoAgendamento, atendimentosSelect, imageBackground, tituloElement, advogadoElement, legendaImagem, agendamentoElement)

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

        if (hora) {
            const bloco = hora.split(":")[0] + ":00"
            return [dataFormatada, bloco]
        }

        return [dataFormatada, "00:00"]
    }

    const folloUpsList = document.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr")

    folloUpsList.forEach(element => {
        const locaisPorTipoAtendimentos = {
            "AASM - DF": "AASM",
            "ÁGUA QUENTE - DF": "ÁGUA QUENTE",
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
            "NOVO GAMA - DF": "NOVO GAMA",
            "ORIENTAÇÃO DE AUDIÊNCIA": "ARACAJU",
            "PORTO RICO - DF": "PORTO RICO",
            "PREVIDENCIÁRIO - VIRTUAL": "ARACAJU",
            "PREVIDENCIÁRIO QUINTA-FEIRA DE TARDE": "ARACAJU",
            "PREVIDENCIÁRIO SEGUNDA E QUARTA-FEIRA DE MANHÃ": "ARACAJU",
            "VALPARAÍSO - DF": "VALPARAÍSO",
            "SUGESTÃO NOVO CARD": "SUGESTÃO NOVO CARD"
        }
        const container = element.querySelector("td.fdt-acao > div > div")
        const button = document.createElement("a")

        const nome = element.querySelector("td:nth-child(4)").innerText.split("\n")[0]

        const tipoAtendimento = element.querySelector("td:nth-child(6) > span").textContent.trim()

        const dataHorarioElement = element.querySelector("td:nth-child(7)")

        const [data, horario] = getDataHorario(dataHorarioElement)

        const local = locaisPorTipoAtendimentos[tipoAtendimento]

        container.append(button)
        button.classList.add("fdt-icon")
        button.dataset.toggle = "tooltip"
        button.dataset.placement = "top"
        button.dataset.originalTitle = "Photo Generator"
        button.innerHTML = '<i class="fa fa-image fa-verde"></i>'
        button.onclick = () => initDataImageDefaut(local, horario, data, tipoAtendimento, nome)
    })
}