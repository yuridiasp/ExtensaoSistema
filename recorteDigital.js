
function setNameFile() {
    return "RECORTE DIGITAL_DF_GO_BA - DISP 00-00-0000.xlsx"
}

function exportToExcel(data) {
    const nome = setNameFile()
    
    const worksheet = XLSX.utils.json_to_sheet(data)

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Relatório")

    XLSX.writeFile(workbook, nome)
}

function genTableRecorte() {
    const buttonExtractReport = document.querySelector("#buttonExtractReport")

    if (buttonExtractReport)
        return

    const bar = Array.from(document.querySelectorAll("dxbl-menu ul")).find(menu => menu.innerText.includes("Home"))
    
    const items = Array.from(document.querySelectorAll("#publication-detail-item")).map(item => {
        const info = item.querySelector("#info")
        const extra = item.querySelector("#extra")
        const [ dDay, dMonth, dYear ] = info.querySelector("div:nth-child(1) > div:nth-child(1) > label.info-content")?.innerText?.match(/\d{2}\/\d{2}\/\d{4}/)[0]?.split("/")
        const [ pDay, pMonth, pYear ] = info.querySelector("div:nth-child(1) > div:nth-child(2) > label.info-content")?.innerText?.match(/\d{2}\/\d{2}\/\d{4}/)[0]?.split("/")
        const row = {
            "CÃ“DIGO WEBJUR": "-",
            ESTADO: info.querySelector("div:nth-child(1) > div:nth-child(3) > label.info-content")?.innerText,
            "DATA DISP": new Date(dYear, dMonth-1, dDay),
            "DATA PUBLIC": new Date(pYear, pMonth-1, pDay),
            COMENTARIO: "-",
            TRIBUNAL: info.querySelector("div:nth-child(1) > div:nth-child(5) > label.info-content")?.innerText,
            PAGINA: info.querySelector("div:nth-child(2) > div:nth-child(4) > label.info-content")?.innerText,
            "NRO. PROCESSO": info.querySelector("div:nth-child(2) > div:nth-child(1) > label.info-content")?.innerText,
            LOCAL: info.querySelector("div:nth-child(2) > div:nth-child(2) > label.info-content")?.innerText,
            CIDADE: "-",
            "PUBLICAÃ‡ÃƒO": extra.querySelector("div > span")?.innerText
        }
        return row
    })
    
    const li = document.createElement("li")
    li.id = "buttonExtractReport"
    li.classList.add("dxbl-menu-list-item", "dxbl-menu-item-pos-start")

    const button = document.createElement("button")
    
    button.innerHTML = "Salvar extrato"

    li.append(button)
    bar.append(li)

    button.addEventListener("click", () => exportToExcel(items))
}

function observerMutationForExtractRecorte() {
    let timeout

    const observer = new MutationObserver(() => {
        console.log("Mudou!")
        if (!document.URL.includes("https://recortedigital.oabdf.org.br/PublicationDetail")) return

        clearTimeout(timeout)

        timeout = setTimeout(() => {
            genTableRecorte()
        }, 1000) // ajustável
    })

    observer.observe(document.body, { childList: true })
}