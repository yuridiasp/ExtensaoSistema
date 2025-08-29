function Kentro() {
    const contagemTarefas = new Map()
    const btnsRegistrados = new WeakSet()
    const vencimentoRegistrado = new WeakSet()
    const idLabel = "contador_tarefas"
    let previousBTN = null
    let scheduled = null
    let textarea = null

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

    const contarDatas = (elements) => {
        const resultado = new Map()

        elements.forEach((el) => {
            const date = extractDateFromText(el.innerText)
            if (!date) return
            const key = date.toLocaleDateString()
            resultado.set(key, (resultado.get(key) || 0) + 1)
        })

        return resultado
    }

    const extractDateFromText = (text) => {
        const regexDate = text.match(/\d\d\/\d\d\/\d{4}/)
        if (regexDate) {
            const [dia, mes, ano] = regexDate[0].split("/")
            return new Date(ano, mes - 1, dia)
        } else if (text.includes("Vence hoje")) {
            return new Date()
        } else if (text.includes("Vence amanhã")) {
            const date = new Date()
            date.setDate(date.getDate() + 1)
            return date
        }
        return null
    }

    const createOrUpdateLabel = (btn, elementDateText) => {
        removePreviousLabel(btn)
        const dateKey = getVencimento(elementDateText).toLocaleDateString()
        const count = contagemTarefas.get(dateKey) || 0
        const label = addLabelContagemTarefas(btn)
        label.innerHTML = count
        previousBTN = btn
    }

    const atualizarDatepicker = () => {
        const datepicker = document.querySelector("div.cdk-overlay-pane.mat-datepicker-popup")
        const elementDateText = document.querySelector("label.mat-calendar-hidden-label")
        const elements = document.querySelectorAll("ca-task-row")

        if (!datepicker || !elementDateText || !elements.length) return

        contagemTarefas.clear()
        contarDatas(elements).forEach((value, key) => contagemTarefas.set(key, value))

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

    const registrarNavegacaoMensal = () => {
        const previousMonthButton = document.querySelector("button.mat-calendar-previous-button")
        const forwardMonthButton = document.querySelector("button.mat-calendar-next-button")

        if (previousMonthButton && !previousMonthButton.dataset.listenerAdded) {
            previousMonthButton.addEventListener("click", () => {
                setTimeout(atualizarDatepicker, 100)
            });
            previousMonthButton.dataset.listenerAdded = "true"
        }

        if (forwardMonthButton && !forwardMonthButton.dataset.listenerAdded) {
            forwardMonthButton.addEventListener("click", () => {
                setTimeout(atualizarDatepicker, 100)
            })
            forwardMonthButton.dataset.listenerAdded = "true"
        }
    }

    const createSelectCombo = (lastContainer) => {
        if (!state.functions.kentro.selectComboPendencias) {
            return
        }

        const root = Array.from(document.querySelectorAll("mat-label"))?.find(label => label.innerHTML === "Pendência")?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
        
        if(!root || (lastContainer === root)) return

        const options = [
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
            "TRANSCRIÇÃO",
            "TRCT",
            "TRCT E OUTROS"
        ]

        class SelectCombo {

            #selectItems = []

            constructor(contentRoot, items, target, { placeholder = "" } = {}) {
                this.root = typeof contentRoot === "string" ? document.querySelector(contentRoot) : contentRoot
                this.target = target
                this.items = this.setItemList(items)
                this.searchBar = this.setSearchBar(placeholder)
                this.container = this.setContainerList()
                this.list = this.setList()
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
                    item.addEventListener("mouseout", () => item.style.background = "none")
                    checked.addEventListener("mouseenter", () => item.style.background = "whitesmoke")
                    checked.addEventListener("mouseout", () => item.style.background = "none")
                    textContent.addEventListener("mouseenter", () => item.style.background = "whitesmoke")
                    textContent.addEventListener("mouseout", () => item.style.background = "none")
                })
            }

            applySelection(item) {
                const checked = item.querySelector("span.checked")
                const textContent = item.querySelector("span.textContent")
                if (this.#selectItems.includes(textContent.innerHTML)) {
                    this.#selectItems = this.#selectItems.filter(item => item !== textContent.innerHTML)
                    checked.innerHTML = ''
                } else {
                    this.#selectItems.push(textContent.innerHTML)
                    checked.innerHTML = '✓'
                }

                this.target.value = this.#selectItems.join(";")
            }

            setItemList(items) {
                return items.map(item => {
                    const li = document.createElement("li")
                    li.style.display = "flex"
                    li.style.width = "100%"
                    li.style.justifyContent = "space-between"
                    li.style.padding = "10px"

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
                if (event.target.tagName === "LI" || event.target.tagName === "UL" || event.target.tagName === "SPAN" || event.target.tagName === "INPUT"  || event.target.tagName === "TEXTAREA") {
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
        }
        
        const pendencias = root.querySelector('textarea[placeholder="Pendência"]')

        if (textarea?.id === pendencias.id) return

        const content = document.createElement("div")
        content.style.display = "none"
        root.append(content)

        const selectCombo = new SelectCombo(content, options, pendencias, "Buscar tipos de documentos...")

        selectCombo.render()
        selectCombo.bind()

        textarea = pendencias

        return selectCombo
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
                
                const vencimento = document.querySelector("body > div.cdk-overlay-container app-task-duedate")
                
                if (!vencimento || vencimentoRegistrado.has(vencimento)) return;
    
                vencimento.addEventListener('click', () => {
                    setTimeout(() => {
                        atualizarDatepicker()
                        registrarNavegacaoMensal()
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