async function contarTarefasParaHoje() {
    if (!state.functions.todasPaginas.contadorTarefas) {
        return
    }
    
    const aUser = document.querySelector("#fdt-mt-header > ul.nav.navbar-nav.navbar-right.hidden-xs > li > a")
    let contagemTarefasHoje = await getContagemTarefas()
    const user = /\w+\s\w+/.exec(aUser.innerText)

    let regex = new RegExp(user),
        novasTarefas = 0,
        id,
        date,
        novoTotalTarefas,
        novoArrayIdTarefas,
        novaDate
    
    for (const colaborador of ADM) {
        if (regex.test(colaborador.nome)) {
            id = colaborador.id
            const qtdDias = 2
            const { datas } = getArrayDate(qtdDias)
            date = datas[1].toLocaleDateString()
            const tarefas = await getTarefasSemanal(id, datas)
            const key = (datas[1].toISOString().split('T'))[0]
            novoTotalTarefas = tarefas[key].Total
            novoArrayIdTarefas = tarefas.idTarefas
            novaDate = key
            
            if (contagemTarefasHoje && (key == contagemTarefasHoje.data)) {
                tarefas.idTarefas.forEach(id => {
                    if (!contagemTarefasHoje.tarefas.includes(id))
                        novasTarefas++
                })
            } else {
                await setContagemTarefas(key, tarefas[key].Total, tarefas.idTarefas)
            }
        }
    }

    const { URL } = document
    const urlTarefasHoje = `http://fabioribeiro.eastus.cloudapp.azure.com/adv/tarefas/default.asp?bsAdvTarefas=s&bsAdvTarefasStatus=p&bsAdvTarefasExecutor=${id}&bsAdvTarefasDe=${date}&bsAdvTarefasAte=${date}`

    if (URL == urlTarefasHoje) {
        const tarefas = document.querySelectorAll("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div.table-responsive > table > tbody > tr")

        if (tarefas.length > 0) {
            tarefas.forEach(tarefa => {
                const idTarefa = tarefa.querySelector("td.fdt-acao > div > div > a:nth-child(1)").href.split("=")[1]
                
                if (!contagemTarefasHoje.tarefas.includes(idTarefa)) {
                    tarefa.style.background = "#ffa4a46b"
                }
            })
        }
    }
    
    const painelBar = document.querySelector("#fdt-mt-header > ul:nth-child(1)")
    const html = `<a href="#" title="Tarefas recebidas para hoje" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span data-toggle="tooltip" data-placement="bottom" title="Tarefas recebidas para hoje"" data-original-title="Tarefas recebidas para hoje">
                        <i class="fa fa-fw fa-tasks fdt-cor-preto"></i>
                        &nbsp;
                        <span class="fdt-label-show label label-danger" id="contagemTarefasHoje">
                            ${novasTarefas}
                        </span>
                    </span>
                </a>
                <ul class="dropdown-menu fdt-menu-user">
                        <li>
                            <a href="${urlTarefasHoje}" class="fdt-cor-black">
                                <i class="fa fa-fw fa-tasks"></i>
                                &nbsp;
                                Visualizar Tarefas
                            </a>
                        </li>
                        <li id="limparNotification">
                            <a href="#" class="fdt-cor-black">
                                <i class="fa fa-fw fa-exclamation-triangle"></i>
                                &nbsp;
                                Limpar Notificações
                            </a>
                        </li>
                </ul>`
    const contadorTarefasHoje = document.createElement('li')
    contadorTarefasHoje.classList.add("dropdown")
    contadorTarefasHoje.innerHTML = html
    painelBar.append(contadorTarefasHoje)

    const limparNotification = document.querySelector("#limparNotification")

    limparNotification.addEventListener('click', async () => {
        await setContagemTarefas(novaDate, novoTotalTarefas, novoArrayIdTarefas)
        window.location.reload()
    })
}