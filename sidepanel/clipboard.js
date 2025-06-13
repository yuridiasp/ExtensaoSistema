async function copiarComFormato(html) {
  try {
    const blob = new Blob([html], { type: 'text/html' });
    const data = [new ClipboardItem({ 'text/html': blob })];
    await navigator.clipboard.write(data);
    console.log('Conteúdo HTML copiado com formatação!');
  } catch (err) {
    console.error('Erro ao copiar HTML:', err);
  }
}