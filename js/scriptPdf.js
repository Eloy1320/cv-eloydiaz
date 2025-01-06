// Ejecutar en un servidor local para que funciones
document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.querySelector("#pdf"); // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 0,
                filename: 'CV-EloyDiazDelCastillo.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2.5, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});

