function getSaudacao() {
    const date = new Date()

    const horaAtual = date.getHours()

    if(horaAtual > '00:00' && horaAtual < '12:00') {
        return 'bom dia'
    } else if (horaAtual < '18:00') {
        return 'boa tarde'
    } else {
        return 'boa noite'
    }
}

function getScript({ username, tipoAudiencia, tipoPericia, nomeCliente, perito, reu, data, horario, local }) {
    const saudacao = getSaudacao()
    const [ localEvento, endereco ] = local.split(":")
    const scripts = {
        pericia: `	Olá, ${saudacao}! Espero que esta mensagem lhe encontre bem. Meu nome é *${username}* e faço parte da equipe Fábio Ribeiro Advogados.<br>
        <br>
        O motivo do nosso contato é para informar que foi marcada uma perícia referente ao processo em nome de *${nomeCliente}*, contra *INSS*. Seguem abaixo os detalhes da perícia:<br>
        <br>
        (*${tipoPericia}*)<br>
        * Data e Horário: ${data} às ${horario}<br>
        * Local: ${localEvento ?? ''}<br>
        * Endereço: ${endereco ?? ''}<br>
        * Perito(a): ${perito}<br>
        <br>
        *ATENÇÃO: Caso a perícia não seja realizada, por qualquer motivo alegado, orientamos que solicite um comprovante ou declaração de comparecimento, a fim de comprovar a sua presença no dia e horário marcado.*<br>
        <br>
        É de extrema importância que você compareça à perícia na data e horário agendados.<br>
        Caso haja alguma impossibilidade ou se você tiver alguma dúvida sobre a perícia, por favor, entre em contato conosco imediatamente para que possamos auxiliá-lo(a) da melhor forma possível.<br>
        <br>
        Orientamos comparecer com 30m de antecedência portando RG/CPF, usando roupas adequadas (camisa/blusa de manga e calça). Também leve seus documentos médicos (relatórios, receitas e exames).<br>
        <br>
        Por fim, solicitamos que, ao visualizar esta mensagem, por favor, confirme o seu recebimento.<br>
        <br>
        Estamos sempre atentos ao acompanhamento dos casos de nossos clientes e é importante para nós ter a certeza de que você está ciente das informações compartilhadas.<br>
        <br>
        Agradecemos a sua colaboração e permanecemos à disposição para qualquer dúvida ou esclarecimento adicional.`,
        audiencia: `Olá, ${saudacao}! Espero que esta mensagem lhe encontre bem. Meu nome é *${username}* e faço parte da equipe Fábio Ribeiro Advogados. Gostaria de trazer uma atualização importante sobre o seu caso.<br>
        <br>
        O motivo do nosso contato é para informar que foi marcada uma audiência referente ao processo em nome de *${nomeCliente}*, contra *${reu}*. Seguem abaixo os detalhes da audiência:<br>
        <br>
        (*${tipoAudiencia}*)<br>
        * Data e Horário: ${data} às ${horario}<br>
        * Local: ${localEvento ?? ''}<br>
        * Endereço: ${endereco ?? ''}<br>
        * Testemunhas: Necessário 02 (duas) testemunhas.<br>
        <br>
        É de extrema importância que você compareça à audiência designada no mínimo 01 (uma) hora de antecedência, portando RG/CPF, usando roupas adequadas (camisa/blusa de manga e calça).<br>
        <br>
        Caso haja alguma impossibilidade ou se você tiver alguma dúvida sobre a audiência, por favor, entre em contato conosco imediatamente para que possamos auxiliá-lo(a) da melhor forma possível.<br>
        <br>
        Por fim, solicitamos que, ao visualizar esta mensagem, por favor, confirme o seu recebimento. Estamos sempre atentos ao acompanhamento dos casos de nossos clientes e é importante para nós ter a certeza de que você está ciente das informações compartilhadas.<br>
        <br>
        Agradecemos a sua colaboração e permanecemos à disposição para qualquer dúvida ou esclarecimento adicional.`,
    }

    return scripts
}

const formateNameForInitialUpperCase = (name) => {
    const excecoes = ['da', 'de', 'do', 'das', 'dos', 'e']

    return name
      .toLowerCase()
      .split(" ")
      .map(palavra => {
        return excecoes.includes(palavra)
          ? palavra
          : palavra.charAt(0).toUpperCase() + palavra.slice(1)
      })
      .join(" ")
}

function getUserName() {
  
    const username = document.querySelector("#fdt-mt-header > ul.nav.navbar-nav.navbar-right.hidden-xs > li > a").textContent.trim()
  
    return formateNameForInitialUpperCase(username);
}  

function getDataPericia(texto) {

    // Número do processo
    const numeroProcesso = texto.match(/\b\d{12,20}\b/)[0]

    // Tipo de perícia
    const tipoPericia = formateNameForInitialUpperCase(texto.match(/-\s+(PER[ÍI]CIA(?:\s+\p{L}+)+?)\s+DE/iu)[1].trim())

    // Nome do cliente
    const nomeCliente = texto.match(/DE\s+(.*?)\s+\(\d{3}\.\d{3}\.\d{3}-\d{2}\)/i)[1].trim()

    // CPF
    const cpf = texto.match(/\((\d{3}\.\d{3}\.\d{3}-\d{2})\)/)[1]

    // Data da perícia
    const data = texto.match(/NO DIA\s+(\d{2}\/\d{2}\/\d{4})/i)[1]

    // Horário
    const horario = texto.match(/ÀS\s+(\d{2}:\d{2})/i)[1]

    // Perito
    const perito = texto.match(/PERITO:\s+(.*?),\s+LOCAL/i)[1].trim()

    // Local
    const local = texto.match(/LOCAL:\s+(.+?)(?:\[|$)/i)[1].trim()  

    // Consolidado
    const dados = {
        numeroProcesso,
        tipoPericia,
        nomeCliente,
        cpf,
        data,
        horario,
        perito,
        local,
    }

    console.log(dados)


    return dados
}

function getDataAudiencia(texto) {
    
    // Número do processo
    const numeroProcesso = texto.match(/\b\d{12,20}\b/)[0];

    // Tipo de audiência (captura até o último 'DE' antes do nome)
    const tipoAudiencia = formateNameForInitialUpperCase(texto.match(/-\s+(AUDI[ÊE]NCIA(?:\s+DE)?(?:\s+\p{L}+)+?)\s+DE\s+/iu)[1].trim())

    // Nome do cliente (agora corretamente isolado do tipo de audiência)
    const nomeCliente = texto.match(/DE\s+([A-Z\s]+)\s+\(\d{3}\.\d{3}\.\d{3}-\d{2}\)/i)[1].trim()

    // CPF
    const cpf = texto.match(/\((\d{3}\.\d{3}\.\d{3}-\d{2})\)/)[1]

    // Réu
    const reu = texto.match(/\)\s+X\s+(.*?),\s+NO DIA/i)[1].trim()

    // Data
    const data = texto.match(/NO DIA\s+(\d{2}\/\d{2}\/\d{4})/i)[1]

    // Horário
    const horario = texto.match(/ÀS\s+(\d{2}:\d{2})/i)[1]

    // Local
    const local = texto.match(/LOCAL:\s+(.+?)(?:\[|$)/i)[1].trim()

    // Agrupado
    const dados = {
        numeroProcesso,
        tipoAudiencia,
        nomeCliente,
        cpf,
        reu,
        data,
        horario,
        local,
    }

    return dados
}


function matchTask(event) {
    event.preventDefault()
    const taskDescription = document.querySelector("body > section > section > div.fdt-espaco > div > div:nth-child(1) > h4").textContent
    
    //'Ficha da tarefa: 202471101895 - AUDIÊNCIA DE CONCILIAÇÃO DE JUVENAL BARBOSA DE OLIVEIRA (038.351.454-10) X BANCO BRADESCO, NO DIA 16/04/2025 ÀS 12:00, LOCAL: VIDEOCONFERÊNCIA'
    const audienciaRE = /Ficha da tarefa: \d{12,20} - AUDI[ÊE]NCIA/
    const periciaRE = /Ficha da tarefa: \d{12,20} - PER[ÍI]CIA/

    const username = getUserName()

    if (audienciaRE.test(taskDescription)) {
        const { tipoAudiencia, nomeCliente, reu, data, horario, local } = getDataAudiencia(taskDescription)
        const script = getScript({ username, tipoAudiencia, nomeCliente, reu, data, horario, local }).audiencia

        return copyAndPaste(script)
    }

    if (periciaRE.test(taskDescription)) {
        const { tipoPericia, nomeCliente, data, horario, perito, local } = getDataPericia(taskDescription)
        const script = getScript({ username, tipoPericia, nomeCliente, perito, data, horario, local }).pericia

        return copyAndPaste(script)
    }

    alert("Script não encontrado no banco de dados.")
}

function createButtonScriptForTask() {
    if (!state.functions.fichaTarefa.criarBotaoScriptGenerator) {
        return
    }

    const typeTask = document.querySelector("body > section > section > div.fdt-espaco > div > div.fdt-pg-conteudo > div:nth-child(4) > div:nth-child(2) > span").textContent
    const isWhatsappTask =  typeTask === "SMS e WhatsApp"
    
    if (!isWhatsappTask) {
        return
    }

    const container = document.querySelector("body > section > section > div.fdt-espaco > div > div:nth-child(2)")
    const button  = document.createElement("a")
    button.href = "#"
    button.classList.add("fdt-icon")
    button.dataset.toggle = "tooltip"
    button.dataset.placement = "top"
    button.dataset['originalTitle'] = "Copiar Script"
    button.title = ""
    button.innerHTML = '<i class="fa fa-clipboard fdt-cor-oliva" aria-hidden="true"></i>'
    
    container.append(button)

    button.addEventListener("click", matchTask)
}