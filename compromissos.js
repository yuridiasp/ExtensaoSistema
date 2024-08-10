function createButtonRolagem () {
    if (!state.functions.abaCompromissosProcesso.mostrarBotadeRolagem) {
        return
    }
    const  arrow = document.createElement('input')

    arrow.setAttribute('type','button')
    arrow.value = 'DOWN'
    document.body.after(arrow)
    arrow.style.position = 'fixed'
    arrow.style.top = '0'
    arrow.style.right = '0'
    arrow.style.margin = '8em'
    arrow.style.background = 'dimgray'
    arrow.style.padding = '30px'
    arrow.style.width = '10em'
    arrow.style.height = '10em'
    arrow.style.borderRadius = '1em'
    arrow.style.MozBorderRadius = '1em'
    arrow.style.WebkitBorderRadius = '1em'
    arrow.style.color = 'white'
    arrow.style.fontWeight = 'bold'
    arrow.style.borderStyle = 'none'
    arrow.style.boxShadow = '10px 5px 5px black'

    arrow.addEventListener('click', () => {
        if (arrow.value == 'DOWN') {
            arrow.setAttribute('disabled','')
            window.scroll(0, document.documentElement.scrollHeight)
            arrow.value = 'UP'
            arrow.removeAttribute('disabled')
        }
        else {
            window.scroll(0,0)
            arrow.value = 'DOWN'
        }
    })
}

function createButtonPrazo() {
    if (!state.functions.cadastroCompromisso.mostrarBotoesAuxiliaresdeDias) {
        return
    }

    const createParagraph = (value) => {
        const paragraph = document.createElement('p')
        paragraph.setAttribute('id',`prazo${Number(value)}`)
        paragraph.style.color = 'gray'
        paragraph.innerHTML = `${Number(value)} DIAS`

        return paragraph
    }

    const createButton = (value) => {
        const buttonSide = "50px"
        const button = document.createElement("input")
        button.setAttribute('id', `button${Number(value)}`)
        button.setAttribute('type','button')
        button.setAttribute('class','btnPrazo')
        button.setAttribute('value', Number(value))
        button.style.width = buttonSide
        button.style.height = buttonSide

        return button
    }

    const createDivision = (value) => {
        const button = createButton(value)
        const paragraph = createParagraph(value)
        const division = document.createElement('div')
        division.style.display = 'flex'
        division.style.flexDirection = 'row'
        division.style.alignItems = 'center'

        division.appendChild(button)
        division.appendChild(paragraph)

        return division
    }

    const createArrayButtons = (prazos) => {
        return prazos.map(prazo => createDivision(prazo))
    }

    const createDivAux = (prazos) => {
        const divAuxiliar = document.createElement('div')
        divAuxiliar.style.position = 'absolute'
        divAuxiliar.style.display = 'flex'
        divAuxiliar.style.flexDirection = 'column'
        divAuxiliar.style.top = '-82px'
        divAuxiliar.style.right = '-150px'

        const buttons = createArrayButtons(prazos)

        buttons.forEach(button => {
            divAuxiliar.appendChild(button)
        })

        return divAuxiliar
    }
    
    const dataPub = document.querySelector('#dataPublicacao'),
        prazoInicial = document.querySelector("#dataPrazoInterno"),
        prazoFinal = document.querySelector("#dataPrazoFatal"),
        divDataPublicacao = document.querySelector('#fdt-form > div:nth-child(7) > div:nth-child(2)')
    
    const prazosJudicial = ['05', '08', '10', '15']
    const prazosAdministrativo = []

    const prazos = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? prazosJudicial : prazosAdministrativo
        
    const divAuxiliar = createDivAux(prazos)
    
    divDataPublicacao.appendChild(divAuxiliar)
    divDataPublicacao.style.position = 'relative'

    const btns = document.querySelectorAll('.btnPrazo')

    dataPub.addEventListener('blur', () => {

        btns.forEach(button => {
            const { value } = button
            const [ prazoInterno, prazoFatal ] = calcularPrazo(value, parametros.tarefaAdvogado)
            const paragraph = document.querySelector(`#prazo${Number(value)}`)
            paragraph.innerHTML = `${prazoInterno.slice(0,5)} - ${prazoFatal.slice(0,5)}`
        })

    })

    btns.forEach(btn => {
        btn.addEventListener('click', async event => {
            const [inicial, final] = calcularPrazo(Number(event.target.value),2)
            prazoInicial.value = inicial
            prazoFinal.value =  final
            cliente.compromisso.tarefas = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? getListaTarefasCompromissoJudicial() : getListaTarefasCompromissoAdministrativo()
            atualizarListaTarefasAbaCompromissos()
            await setCliente(cliente)
        })
        btn.style.padding = '15px'
        btn.style.borderRadius = '5px'
        btn.style.margin = '5px'
        btn.style.background = 'rgb(77, 72, 72)'
        btn.style.color = 'white'
        btn.style.border = '1px solid #ccc'
    })
}

function createDataListCompromissos () {

    if (!state.functions.cadastroCompromisso.exibirlistaDescricaoCompromisso) {
        return
    }

    const listCompromissos = state.functions.todasPaginas.tipoIntimacaoIsJudicial ? typeListCompromissos.judicial : typeListCompromissos.administrativo

    const descricaoCompromissoInput = document.querySelector('#descricao')

    const div = document.querySelector("#fdt-form > div:nth-child(7) > div:nth-child(1)")

    const datalist = document.createElement('datalist')

    datalist.id = 'typeListCompromissos'

    div.appendChild(datalist)

    datalist.innerHTML = listCompromissos.reduce((previousValue, itemList) => previousValue + `<option value="${itemList}"></option>`, '')

    descricaoCompromissoInput.setAttribute('list', 'typeListCompromissos')
}