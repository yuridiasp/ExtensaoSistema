function Kentro() {
    if (!state.functions.kentro.contagemTarefasVencimento) {
        return
    }

    const contagemTarefas = new Map()
    const btnsRegistrados = new WeakSet()
    const vencimentoRegistrado = new WeakSet()
    const idLabel = "contador_tarefas"
    let previousBTN = null

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

    const observeDOMChanges = () => {
        const observer = new MutationObserver(() => {
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
        })

        observer.observe(document.body, { attributes: true, childList: true, subtree: true })
    }

    observeDOMChanges()
}