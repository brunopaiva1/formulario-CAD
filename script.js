function gerarPDF() {
    var camposEditaveis = document.querySelectorAll('.editable');
    camposEditaveis.forEach(function(campo) {
        campo.style.color = 'black';
    });

    const { jsPDF } = window.jspdf;
    html2canvas(document.querySelector('.container')).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4'
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("formulario_avaliacao.pdf");
    });
}
