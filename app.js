document.addEventListener('DOMContentLoaded', () => {
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const textarea = document.getElementById('miTextarea');
    const resultTitle = document.querySelector('.result__title');
    const resultText = document.querySelector('.result__text');
    const btnCopiar = document.querySelector('.btn__copiar');
    const resultContainer = document.querySelector('.result__container');
    const resultImage = document.querySelector('.result__img');

    const encriptarTexto = (texto) => {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const desencriptarTexto = (texto) => {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    const actualizarResultado = (texto) => {
        if (texto) {
            resultTitle.textContent = 'Mensaje encontrado';
            resultText.textContent = texto;
            btnCopiar.classList.remove('hidden');
            resultImage.classList.add('hidden');
        } else {
            resultTitle.textContent = 'Ningún mensaje fue encontrado';
            resultText.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
            btnCopiar.classList.add('hidden');
            resultImage.classList.remove('hidden');
        }
    };

    btnEncriptar.addEventListener('click', (e) => {
        e.preventDefault();
        const textoEncriptado = encriptarTexto(textarea.value);
        actualizarResultado(textoEncriptado);
    });

    btnDesencriptar.addEventListener('click', (e) => {
        e.preventDefault();
        const textoDesencriptado = desencriptarTexto(textarea.value);
        actualizarResultado(textoDesencriptado);
    });

    btnCopiar.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el refresco de la página
        const textoACopiar = resultText.textContent;

        // Copia el texto al portapapeles
        navigator.clipboard.writeText(textoACopiar)
            .then(() => {
                alert('Texto copiado al portapapeles');
                // Recargar la página después de copiar el texto
                location.reload(); // Recarga la página automáticamente
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    });
});
