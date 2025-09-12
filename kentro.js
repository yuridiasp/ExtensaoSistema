function Kentro() {
    const contagemTarefas = new Map()
    const btnsRegistrados = new WeakSet()
    const vencimentoRegistrado = new WeakSet()
    const idLabel = "contador_tarefas"
    let previousBTN = null
    let scheduled = null
    let textarea = null
    let inputResponsavel = null

    const postRequest = async (url, body) => {
        const r = await callKentro(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body
        })
    
        if (!r?.ok) console.error(r)
        
        return { status: r?.status, body: r?.body}
    }

    const removePreviousLabel = (btn) => {
        const label = btn.querySelector(`#${idLabel}`)
        const previousLabel = previousBTN?.querySelector(`#${idLabel}`)

        if (label === previousLabel || !previousBTN)
            return

        previousLabel.remove()
    }

    const addLabelContagemTarefas = (btn) => {
        let label = btn.querySelector(`#${idLabel}`)
        if (!label) {
            label = document.createElement("span")
            label.id = idLabel;
            label.style.cssText = `
                color: #FFF;
                background: crimson;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                z-index: 10;
                position: absolute;
                top: -5px;
                right: -5px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.7em;
            `
            label.innerHTML = "0"
            btn.appendChild(label)
        }
        return label
    }

    const getVencimento = (elementDateText) => {
        const rawDate = elementDateText?.innerText?.split("T")[0]?.split("-")

        if (!rawDate || rawDate.length < 3)
            return null

        const [anoVencimento, mesVencimento, diaVencimento] = rawDate

        return new Date(anoVencimento, mesVencimento - 1, diaVencimento)
    }

    const contarDatas = (tasks) => {
        const resultado = new Map()

        tasks.forEach((task) => {
            const date = convertTimestampToDate(task.duedate)
            if (!date) return
            const key = date.toLocaleDateString()
            resultado.set(key, (resultado.get(key) || 0) + 1)
        })

        return resultado
    }

    const convertTimestampToDate = (timestamp) => {
        if(!timestamp)
            return null
        return new Date(timestamp * 1000)
    }

    const createOrUpdateLabel = (btn, elementDateText) => {
        removePreviousLabel(btn)
        const dateKey = getVencimento(elementDateText).toLocaleDateString()
        const count = contagemTarefas.get(dateKey) || 0
        const label = addLabelContagemTarefas(btn)
        label.innerHTML = count
        previousBTN = btn
    }

    const atualizarDatepicker = async (username) => {
        
        const { url, schema } = getDataApiKentro(username)
        const { status, body } = await postRequest(url, schema)
        let tasks = []

        if(status === 200) tasks = JSON.parse(body)
        
        const datepicker = document.querySelector("div.cdk-overlay-pane.mat-datepicker-popup") || document.querySelector("div.mat-datepicker-popup.cdk-overlay-pane")
        const elementDateText = document.querySelector("label.mat-calendar-hidden-label")

        if (!datepicker || !elementDateText || !tasks.length) return

        contagemTarefas.clear()
        contarDatas(tasks).forEach((value, key) => contagemTarefas.set(key, value))

        datepicker.querySelectorAll("td > button").forEach(btn => {
            if (!btnsRegistrados.has(btn)) {
                if (btn.classList.contains("mat-calendar-body-active")) {
                    createOrUpdateLabel(btn, elementDateText)
                }

                btn.addEventListener("click", () => createOrUpdateLabel(btn, elementDateText))
                btnsRegistrados.add(btn)
            }
        })

        datepicker.querySelectorAll("td > button").forEach(btn => {
            if (btn.classList.contains("mat-calendar-body-active")) {
                createOrUpdateLabel(btn, elementDateText)
            }
            btn.addEventListener("click", () => createOrUpdateLabel(btn, elementDateText))
        })
    }

    const registrarNavegacaoMensal = (username) => {
        const previousMonthButton = document.querySelector("button.mat-calendar-previous-button")
        const forwardMonthButton = document.querySelector("button.mat-calendar-next-button")

        if (previousMonthButton && !previousMonthButton.dataset.listenerAdded) {
            previousMonthButton.addEventListener("click", () => {
                setTimeout(() => atualizarDatepicker(username), 100)
            });
            previousMonthButton.dataset.listenerAdded = "true"
        }

        if (forwardMonthButton && !forwardMonthButton.dataset.listenerAdded) {
            forwardMonthButton.addEventListener("click", () => {
                setTimeout(() => atualizarDatepicker(username), 100)
            })
            forwardMonthButton.dataset.listenerAdded = "true"
        }
    }

    const setMatInputValue = (el, value, {blur = true} = {}) => {
        if (!el) throw new Error('Elemento inválido');

        el.focus();
        // Ajuste do valor no elemento nativo
        el.value = value;
        // Eventos que informam o Angular/Material
        el.dispatchEvent(new InputEvent('input', {bubbles: true}));
        el.dispatchEvent(new Event('change', {bubbles: true}));

        if (blur) el.blur();
    }

    const createSelectCombo = () => {
        if (!state.functions.kentro.selectComboPendencias) {
            return
        }

        const root = Array.from(document.querySelectorAll("mat-label"))?.find(label => label.innerHTML === "Pendência")?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
        
        if(!root) return

        const pendingDocumentOptions = [
            "AGENDAMENTO INSS",
            "AGRAVO DE EXECUÇÃO",
            "AGRAVO DE INSTRUMENTO",
            "AGRAVO DE PETIÇÃO",
            "AGRAVO DE TUTELA ANTECIPADA",
            "AGRAVO EM RECURSO EXTRAORDINÁRIO",
            "AGRAVO REGIMENTAL",
            "ALEGAÇÕES FINAIS",
            "APELAÇÃO",
            "AUTO DECLARAÇÃO",
            "BOLETIM DE OCORRÊNCIA",
            "CAD UNICO",
            "CÁLCULO",
            "CARNÊS",
            "CARTA DE CONCESSÃO",
            "CARTA DE INDEFERIMENTO",
            "CARTA DE PREPOSIÇÃO",
            "CARTEIRA DO SINDICATO OU DA COLÔNIA",
            "CAUTELAR",
            "CERTIDÃO",
            "CERTIDÃO DE CASAMENTO",
            "CERTIDÃO DE INTEIRO TEOR",
            "CERTIDÃO DE NASCIMENTO",
            "CERTIDÃO DE ÓBITO",
            "CERTIDÃO ELEITORAL COM PROFISSÃO",
            "CNH",
            "CNIS OU SALÁRIOS DE CONTRIBUIÇÃO",
            "CNPJ",
            "COMPROVANTE DE RENDA",
            "COMPROVANTE DE RESIDÊNCIA",
            "COMPROVANTES DE GASTOS",
            "COMPROVANTES DE PAGAMENTOS",
            "CONIND",
            "CONTAS",
            "CONTESTAÇÃO",
            "CONTRACHEQUE",
            "CONTRAMINUTA",
            "CONTRARRAZÕES",
            "CONTRATO",
            "CONVERSAS WHATSAPP",
            "CÓPIA DA FICHA ONOMÁSTICA",
            "CÓPIA DO DOCTO DA TERRA ONDE TRABALHAVA",
            "CPF",
            "CTPS",
            "CUMPRIMENTO DE SENTENÇA",
            "CUSTAS PROCESSUAIS",
            "DECLARAÇÃO",
            "DECLARAÇÃO DE HIPOSSUFICIÊNCIA ECONÔMICA",
            "DECLARAÇÃO DO BENEFÍCIO",
            "DOCUMENTOS INSS",
            "DOCUMENTOS JUSTIÇA GRATUITA",
            "DOCUMENTOS PESSOAIS",
            "DOCUMENTOS RECEBIDOS",
            "DPVAT",
            "E-MAIL",
            "EMBARGOS DE DECLARAÇÃO",
            "EMBARGOS DE DIVERGÊNCIAS",
            "EMBARGOS DE TERCEIROS",
            "EMBARGOS INFRINGENTES",
            "ENVELOPE",
            "ESCRITURA PARTICULAR",
            "ESCRITURA PÚBLICA",
            "EXAMES",
            "EXIGÊNCIA INSS",
            "EXPLICANDO OS HONORÁRIOS",
            "EXTRATO FGTS",
            "EXTRATO PASEP",
            "EXTRATOS DE CONTAS",
            "FATURAS",
            "FICHA FINANCEIRA",
            "FICHA MÉDICA DO POSTO DE SAÚDE COM PROFISSÃO",
            "FICHAS",
            "FOTOS",
            "GPS",
            "HISCRE",
            "HISMED",
            "HISTÓRICO DE CONSIGNAÇÃO",
            "HOLERITES",
            "IMPOSTO DE RENDA",
            "INFBEN",
            "INQUIRIÇÃO DE TESTEMUNHAS",
            "MANIFESTAÇÃO SOBRE LAUDO MÉDICO PERICIAL",
            "MANIFESTAÇÕES",
            "MICROFILMAGENS",
            "NÃO ME PERTURBE",
            "NOTAS FISCAIS",
            "NOTIFICAÇÃO EXTRAJUDICIAL",
            "ORIENTAÇÕES S/ COBRANÇA DE HONORÁRIOS",
            "OUTROS",
            "OUTROS ARQUIVOS",
            "PESSOAIS",
            "PETIÇÃO GERAL",
            "PETIÇÃO INICIAL",
            "PPP E LTCAT",
            "PROCESSO",
            "PROCESSO ADMINISTRATIVO",
            "PROCURAÇÃO",
            "PROCURAÇÃO E CTPS",
            "PROCURAÇÃO E PESSOAIS",
            "PROCURAÇÃO PÚBLICA",
            "PROVAS RURAIS",
            "RECURSO DE REVISTA",
            "RECURSO ESPECIAL",
            "RECURSO EXTRAORDINÁRIO",
            "RECURSO INOMINADO",
            "RECURSO ORDINÁRIO",
            "RECURSOS",
            "REGISTRO DE AQUAVIARIO",
            "RELATÓRIO MÉDICO",
            "RÉPLICA",
            "REQUERIMENTOS",
            "RG",
            "SENHA MEU INSS",
            "TERMO DE CURATELA",
            "TERMO DE REPRESENTAÇÃO",
            "TERMO DE RESCISÃO",
            "TESTEMUNHAS",
            "TRANSCRIÇÃO",
            "TRCT",
            "TRCT E OUTROS"
        ]

        const colaboradores = [
            "ALÃ FEITOSA CARVALHO",
            "ALINE RIBEIRO",
            "ALVARO SÉRGIO DE OLIVEIRA FALCÃO",
            "ANA CAROLINA SOARES DE MELO",
            "ANDRÉ LEVY BATISTA DA SILVA",
            "ANSELMO DAVID DOS SANTOS RODRIGUES",
            "ARTHUR PISISTRATO DE AMORIM REBELO",
            "ARTHUR PORTO ROSENDO",
            "BRUNO PEREIRA LIMA VASCONCELOS",
            "BRUNO PRADO GUIMARAES",
            "BRYAN CAMPOS DE ANDRADE",
            "CAMILA TOJAL MACHADO SANTOS",
            "CARLOS EDUARDO DOS SANTOS",
            "CARLOS FERNANDES PEREIRA DA SILVA",
            "CARLOS ROBERTO SANTOS ARAUJO DA SILVA",
            "CHRISTYAN RANGELL SILVA DAMASCENO XAVIER",
            "CRISTINA BEZERRA DA SILVA",
            "DANIEL CABRAL PEREIRA SANTOS",
            "DAVI ALVES DOS SANTOS",
            "DIEGO DOS SANTOS SILVA",
            "DIEGO MELO SOBRINHO",
            "EDUARDO PAIXÃO ROCHA SOBRINHO",
            "EFRAIM SILVA CORREA DOS SANTOS",
            "ELTON SILVA HONORATO",
            "EMILLY STHEFANE FERREIRA DOS SANTOS PEREIRA",
            "ENZO RIBEIRO",
            "ERICK RODRIGUES DE JEUS",
            "ERINALDO FARO SANTOS",
            "FABIO RIBEIRO",
            "FELIPE PANTA CARDOSO",
            "FERNANDO BATISTA",
            "FERNANDO HENRIQUE BARBOZA NASCIMENTO",
            "FLAVIO LUCAS LIMA SOUZA",
            "FRANCIELLE DIAS NEVES",
            "GABRIEL DAVILA FILGUEIRAS MELLONE",
            "GABRIEL FRANÇA VITAL",
            "GLENISSON NASCIMENTO",
            "GUILHERME CAUAN MATOS SILVA",
            "GUILHERME VINICIUS RIBEIRO JASMIM",
            "HELLEN VITORIA ROCHA SILVA SANTOS",
            "HELTON FRADES BRABEC SOUZA",
            "HENYR GOIS DOS SANTOS",
            "ICARO RODRIGO DOS SANTOS SILVA",
            "ISAC CRUZ SANTOS",
            "JEFERSON ALMEIDA SANTOS",
            "JHONATAN NASCIMENTO TAVARES",
            "JHONATHAN DA FONSECA ALMEIDA FLOR",
            "JOÃO VITOR FARIAS DOS SANTOS",
            "JOSÉ ESTEFÂNIO DOS SANTOS FIGUEIREDO",
            "JULIANO OLIVEIRA DE SOUZA",
            "KAUÃ DE CARVALHO NASCIMENTO",
            "KEVEN FARO DE CARVALHO",
            "LAYNE DA SILVA GOIS",
            "LEANDRO SANTOS",
            "LEONARDO CARDOSO AMÉRICO VITAL",
            "LEONARDO TEIXEIRA SANTOS SILVA",
            "LINIKER BERNARDO SOARES",
            "LUCAS NATHAN NOGUEIRA DA SILVA",
            "LUCIANA DOS SANTOS ARAUJO",
            "LUCIANA LIMA REZENDE",
            "LUIZ CARLOS LOPES DOS SANTOS",
            "MARCO AURELIO LEITE GOMES",
            "MARCUS VINICIUS DE SOUZA MORAIS",
            "MARIA LUANNA DE LIMA SOUZA",
            "MATHEUS CAMPELO DA SILVA",
            "MATHEUS CORREIA SANTOS",
            "MATHEUS MATOS BARRETO",
            "MONICA NOGUEIRA SANTOS",
            "MURILLO VICTOR SANTOS ROCHA",
            "PABLO DIAS MARIANO",
            "PATRICK DE OLIVEIRA COSTA",
            "PAULO VICTOR SANTANA TEIXEIRA",
            "PAUTISTA BRASILIA ADVOGADOS",
            "PAUTISTA CIVEL ADVOGADOS",
            "PAUTISTA PREVIDENCIARIO ADVOGADOS",
            "PAUTISTA TRABALHISTA ADVOGADOS",
            "RENATA DE JESUS SANTOS",
            "RODRIGO AGUIAR SANTOS",
            "SANDOVAL FILHO CORREIA LIMA FILHO",
            "SARA CRISTINA TELES LOIOLA",
            "SARA GONÇALVES PINHEIRO",
            "SAULO LIMA ALVES DOS SANTOS",
            "SAULO MATHEUS ARAUJO DE SANTANA",
            "SHEYLA SANTANA SANTOS",
            "SILVANIA PINHEIRO DE LEMOS",
            "STEFANNY MORAIS DO NASCIMENTO",
            "SUPORTE FÁBRICA DE TEMPO",
            "THALYSON KELSON LIMA TORRES",
            "THIAGO SANTOS SANTANA",
            "TRICYA MATEUS ROLEMBERG",
            "VICTOR ALESSANDRO DANTAS PAIXÃO",
            "VICTOR MENDES DOS SANTOS",
            "VINICIUS SANTOS MELO",
            "WILKE RODRIGUES DE JESUS",
            "YAN THADEU PORTO DE OLIVEIRA SANTOS",
            "YURI DIAS PEREIRA"
        ]

        class SelectCombo {
            lastItemSelected = null

            constructor(items, target, options = { isUnique: false, placeholder: "Buscar tipos de documentos..."}) {
                this.isUnique = options.isUnique
                this.selectItems = this.isUnique ? null : []
                this.target = target
                this.root = this.setRoot(target)
                this.items = this.setItemList(items)
                this.searchBar = this.setSearchBar(options.placeholder)
                this.container = this.setContainerList()
                this.list = this.setList()
                this.render()
                this.childrens = [...this.getAllChildren(target.parentElement.parentElement.parentElement.parentElement), ...this.getAllChildren(this.container)]
                //this.selectItems = this.initSelectItemsList(target)
            }

            /* initSelectItemsList(target) {
                if (!target.value?.includes(";")) return []

                const items = target.value?.split(";")

                if (items.lenght) {
                    return items.filter(item => options.includes(item))
                }

                return []
            } */

            getAllChildren(target) {
                let children = []
                
                // Função recursiva para percorrer todos os filhos
                function traverse(node) {
                    // Adiciona os filhos ao array
                    for (let child of node.children) {
                        children.push(child)
                        // Chama a função recursivamente para adicionar os filhos dos filhos
                        traverse(child)
                    }
                }
                
                traverse(target)

                return children
            }
            
            bind() {
                this.searchBar.addEventListener("input", () => this.updateListSeachBar())
                document.addEventListener("click", (event) => this.toggle(event))
                this.items.forEach(item => item.addEventListener("click", () => this.applySelection(item)))
            }

            render() {
                this.root.append(this.container)
                this.container.append(this.searchBar)
                this.container.append(this.list)

                this.items.forEach(item => {
                    this.list.append(item)
                    const checked = item.querySelector("span.checked")
                    const textContent = item.querySelector("span.textContent")
                    item.addEventListener("mouseenter", () => item.style.background = "whitesmoke")
                    item.addEventListener("mouseout", () => item.style.background = "#FFF")
                    checked.addEventListener("mouseenter", () => item.style.background = "whitesmoke")
                    checked.addEventListener("mouseout", () => item.style.background = "none")
                    textContent.addEventListener("mouseenter", () => item.style.background = "whitesmoke")
                    textContent.addEventListener("mouseout", () => item.style.background = "none")
                })
            }

            applySelection(item) {
                const checked = item.querySelector("span.checked")
                const textContent = item.querySelector("span.textContent")
                let newValue
                
                if (this.isUnique) {
                    if (this.selectItems === textContent.innerHTML) {
                        newValue = ""
                        this.lastItemSelected.remove("selected")
                    } else {
                        newValue = textContent.textContent
                        this.lastItemSelected = item.textContent
                        item.classList.add("selected")
                    }
                } else {
                    if (this.selectItems.includes(textContent.innerHTML)) {
                        this.selectItems = this.selectItems.filter(item => item !== textContent.innerHTML)
                        checked.innerHTML = ''
                    } else {
                        this.selectItems.push(textContent.innerHTML)
                        checked.innerHTML = '✓'
                    }
                    newValue = this.selectItems.join(";")
                }

                setMatInputValue(this.target, newValue)
            }

            setItemList(items) {
                return items.map(item => {
                    const li = document.createElement("li")
                    li.style.display = "flex"
                    li.style.width = "100%"
                    li.style.justifyContent = "space-between"
                    li.style.padding = "10px"
                    li.style.background = '#FFF'

                    li.innerHTML = `<span class="textContent">${item}</span><span style="margin-right: 20px;" class="checked"></span>`

                    return li
                })
            }

            setSearchBar(placeholder) {
                const input = document.createElement("input")
                input.type = 'text'
                input.id = 'typeDocsSeach'
                input.placeholder = placeholder
                input.autocomplete = "off"
                input.style.border = "0"
                input.style.borderBottom = "1px #9400D3 solid"
                input.style.background = "whitesmoke"
                input.style.boxSizing = "border-box"
                input.style.outline = "none"
                input.style.width = "100%"
                input.style.padding = "10px"
                input.style.boxSizing = "border-box"
                
                return input
            }

            setRoot() {
                const root = document.createElement("div")
                root.style.display = "none"
                this.target.parentElement.parentElement.parentElement.parentElement.parentElement.append(root)
                /* const { top, left } = this.calculateBelowPosition()
                root.style.position = 'absolute'
                root.style.top = top + 'px'
                root.style.left = left + 'px' */
                root.style.zIndex = "999"

                return root
            }

            setContainerList() {
                const container = document.createElement("div")
                container.id = 'selectContainer'
                container.style.width = "450px"
                container.style.marginTop = "10px"
                container.style.boxShadow = `0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)`
                container.style.borderRadius = "0 0 5px 5px"

                return container
            }

            setList() {
                const list = document.createElement("ul")
                list.id = "selectItems"
                list.style.width = "100%"
                list.style.cursor = "pointer"
                list.style.maxHeight = "50vh"
                list.style.overflowX = "hidden"
                list.style.boxSizing = "border-box"
                list.style.padding = "0"

                return list
            }

            updateListSeachBar() {
                const results = this.items.filter(select => {
                    const found = select.innerHTML.includes(this.searchBar.value.toUpperCase())
                    if (found) {
                        select.style.display = "flex"
                    } else {
                        select.style.display = "none"
                    }

                    return found
                })

                results[0]?.focus()
            }

            toggle(event)  {
                if (this.childrens.includes(event.target)) {
                    this.open()
                } else {
                    this.close()
                }
            }

            open() {
                this.root.style.display = "block"
                this.searchBar.focus()
            }

            close() {
                this.root.style.display = "none"
                this.clearSearchBar()
                this.updateListSeachBar()
            }

            clearSearchBar() {
                this.searchBar.value = ""
            }

            calculateBelowPosition() {
                const rect = this.target.getBoundingClientRect()
                
                return {
                    top: rect.x,
                    left: rect.y
                }
            }
        }

        const pendencias = root.querySelector('textarea[placeholder="Pendência"]')

        if (textarea?.id !== pendencias?.id) {
            const selectComboPendencias = new SelectCombo(pendingDocumentOptions, pendencias)
            selectComboPendencias.bind()
    
            textarea = pendencias
        }

        const responsavelPendencia = Array.from(root.querySelectorAll('input'))?.find(input => input.parentElement.querySelector("label")?.innerText === "Responsável pela pendência")

        if (inputResponsavel?.id !== responsavelPendencia?.id) {
            const selectComboResponsavel = new SelectCombo(colaboradores, responsavelPendencia, { isUnique: true,  placeholder: "Buscar colaborador..." })
            selectComboResponsavel.bind()
    
            inputResponsavel = responsavelPendencia
        }
    }

    const handleMutations = () => {
        if(scheduled) return
        scheduled = true

        setTimeout(() => {
            try {
                createSelectCombo()

                if (!state.functions.kentro.contagemTarefasVencimento) {
                    return
                }
    
                const urlTarefas = "https://fabioribeiroadvogados.atenderbem.com/base/agenttasksdashboard"
                
                if (document.URL !== urlTarefas) return
                
                const vencimento = document.querySelector("div.dialog-content.overflow-hidden app-task-duedate")
                
                if (!vencimento || vencimentoRegistrado.has(vencimento)) return;

                const username = document.querySelector(" body > ca-sp > ng-component > div > div > div:nth-child(1) > div:nth-child(5) > ca-userdropdown > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)")?.innerText || document.querySelector("body > ca-sp > ng-component > div > div > div.header-base.header-bg.header-fg.ng-tns-c1117775850-1 > div.header-user.ng-tns-c1117775850-1.ng-star-inserted > ca-userdropdown > div > div.mat-ripple.mat-mdc-menu-trigger.flex-row.usermenu-area > div.username-text-area > div.font-light")?.innerText || document.querySelector("body > ca-sp > ng-component > div > div > div.header-base.header-bg.header-fg.ng-tns-c327233304-1 > div.header-user.ng-tns-c327233304-1.ng-star-inserted > ca-userdropdown > div > div.mat-ripple.mat-mdc-menu-trigger.flex-row.usermenu-area > div.username-text-area > div.font-light")?.innerText
    
                vencimento.addEventListener('click', () => {
                    setTimeout(() => {
                        atualizarDatepicker(username)
                        registrarNavegacaoMensal(username)
                    }, 100)
                })
            } finally {
                scheduled = false
            }
        }, 500)
    }

    const observeDOMChanges = () => {      
        const observer = new MutationObserver(handleMutations)

        observer.observe(document.body, { attributes: true, childList: true, subtree: true })

        handleMutations()
    }

    observeDOMChanges()
}

async function callKentro(url, init = {}) {
    return await new Promise((resolve) => {
        chrome.runtime.sendMessage(
            {
            type: "KENTRO_FETCH",
            url,
            method: init.method,
            headers: init.headers,
            body: init.body
            },
            resolve
        );
    });
};

function getCsrf() {
  const m = document.querySelector('meta[name="csrf-token"]');
  return m?.content || "";
};

// exemplo de uso
/* (async () => {
    if (!document.URL.includes("fabioribeiroadvogados.atenderbem.com"))
        return

     const get = async (url) => {
        const r = await callKentro(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-csrf-token": getCsrf(), 'Authorization': `Bearer ${localStorage.getItem("jwtToken")}` },
            body: { id: 9008, simple: true }
        })
    
        if (!r?.ok) console.error(r)
        else console.log("Resposta Kentro:", r?.status, r?.body)
    } 
    const post = async (url, body) => {
        const r = await callKentro(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body
        })
    
        if (!r?.ok) console.error(r)
        
        return { status: r?.status, body: r?.body}
    }
    const { url, schema } = getDataApiKentro("leandro")
    const result = await post(url, schema)

    console.log(JSON.parse(result.body))
})(); */