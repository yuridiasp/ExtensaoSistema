function Kentro() {
    const contarDatas = (datesObject) => {
        return datesObject.reduce((resultObjet, currentDate) => {
            const localeDateString = currentDate.toLocaleDateString()
            if (!resultObjet[localeDateString]) {
                resultObjet[localeDateString] = 1
            } else {
                resultObjet[localeDateString] += 1
            }
        }, {})
    }
    
    const observer = new MutationObserver((mutationList, observer) => {
        const urlTarefas = "https://fabioribeiroadvogados.atenderbem.com/base/agenttasksdashboard"
        
        if (document.URL !== urlTarefas)
            return

        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                const elements = document.querySelectorAll("body > ca-sp > ng-component > div > div > div.content-base.ng-tns-c154-1 > ca-agent-task-dashboard > div > div.full-width.flex-elastic.overflow-hidden > div > ca-task-row")

                if (elements.length) {
                    const regexLocaleDate = /\d\d\/\d\d\/\d{4}/
                    const container = document.querySelector("body > div.cdk-overlay-container")

                    if (container) {
                        const [ vencimento, inicio, termino ] = container.querySelectorAll("body > div.cdk-overlay-container app-task-duedate")

                        if (vencimento) {
                            vencimento.addEventListener('click', () => {
                                /* const [diaAtual, mesAtual, anoAtual] = vencimento.innerText.match(regexLocaleDate)[0].split("/")
                                const vencimentoAtual = new Date(anoAtual, mesAtual, diaAtual) */
    
                                const datepicker = document.querySelector("div.cdk-overlay-pane.mat-datepicker-popup")
            
                                if (datepicker) {
                                    const elementDateText = document.querySelector("label.mat-calendar-hidden-label")
                                    
                                    if (elementDateText) {
                                        const datesFromTask = Array.from(elements).map(element => {
                                            const dateString = element.innerText.match(regexLocaleDate)

                                            if(dateString) {
                                                const [dia, mes, ano] = dateString[0].split("/")

                                                return new Date(ano, mes, dia)
                                            }

                                            if(element.innerText.includes("Vence amanhã")) {
                                                const resultDate =  new Date()
                                                resultDate.setDate(resultDate.getDate() + 1)

                                                return resultDate
                                            }

                                            return dateString
                                        })

                                        console.log(contarDatas(datesFromTask))
                                    }
                                }
                            })
                        }
                    
                    }
                }

            }

            //observer.disconnect()
        }
    })

    observer.observe(document.body, { attributes: true, childList: true, subtree: true })
}

Kentro()