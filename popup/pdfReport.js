const genReport = document.querySelector('#genReport')

async function clearReportSaved() {
    await setReport(null)
}

function setNamePDF() {
    const date = new Date()
    const dia = date.getDate(), mes = date.getMonth()+1, ano = date.getFullYear()
    return `PJE ${dia}${mes < 10 ? '0' + mes : mes}${ano}.pdf`
}

genReport.addEventListener('click', async () => {
    const report = await getReport()

    if (report) {
        PDFGen(report)
        clearReportSaved()
    } else {
        alert('Não há registros de intimações.')
    }
})