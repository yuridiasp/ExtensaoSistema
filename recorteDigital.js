
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

function addItemsToTable() {    
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

    return items
}

/*
    <li>
        <dxbl-menu-item adaptive-priority="0" class="dxbl-menu-item" data-dx-style="--dxbl-menu-item-indent-count: 0" dxbl-render-guid="id49890865-f9c7-4645-8078-1cd108892c60" style="--dxbl-menu-item-indent-count: 0;" data-qa-dxbl-loaded="">
            <a class="dxbl-btn dxbl-btn-text-none" role="none">
                <div class="dxbl-menu-item-text-container">
                    <span class="dxbl-menu-item-text">Salvar extrato</span>
                </div>
            </a>
        </dxbl-menu-item>
    </li>
*/

function createButtonRecorte() {
    // Retorna o botão existente sem recriá-lo
    const existingButton = document.getElementById("extrato_save");

    if (existingButton) {
        return existingButton;
    }

    const bar = Array.from(document.querySelectorAll("dxbl-menu ul"))
        .find(menu => menu.innerText.includes("Home"));

    if (!bar) {
        console.warn("A barra de menu não foi encontrada.");
        return null;
    }

    const li = document.createElement("li");
    li.id = "buttonExtractReport";
    li.classList.add(
        "dxbl-menu-list-item",
        "dxbl-menu-item-pos-start"
    );

    li.innerHTML=`<dxbl-menu-item adaptive-priority="0" class="dxbl-menu-item" data-dx-style="--dxbl-menu-item-indent-count: 0" dxbl-render-guid="id49890865-f9c7-4645-8078-1cd108892c60" style="--dxbl-menu-item-indent-count: 0;" data-qa-dxbl-loaded="">
            <a class="dxbl-btn dxbl-btn-text-none" role="none" id="extrato_save">
                <div class="dxbl-menu-item-text-container">
                    <span class="dxbl-menu-item-text">Salvar extrato</span>
                </div>
            </a>
        </dxbl-menu-item>`

    bar.appendChild(li);

    const button = document.getElementById("extrato_save");

    return button;
}

function genTableRecorte() {
    const buttonExtractReport = document.querySelector("#buttonExtractReport")

    if (buttonExtractReport)
        return

    const button = createButtonRecorte()

    button.addEventListener("click", event => {
        event.preventDefault()
        const items = addItemsToTable()
        exportToExcel(items)
    })
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

    observer.observe(document.body, { childList: true, subtree: true })
}