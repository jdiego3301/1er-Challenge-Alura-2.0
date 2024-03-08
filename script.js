const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const resultado = document.querySelector(".texto-resultado");
const mensajeNoTexto = document.getElementById("mensajeNoTexto");

botonEncriptar.addEventListener("click", () => {
    const texto = recuperarTexto();
    if (validarTexto(texto)) {
        resultado.textContent = encriptarTexto(texto);
        mensajeNoTexto.style.display = "none"; // Oculta el mensaje de "Ningun mensaje fue encontrado"
    } else {
        alert("El texto ingresado no cumple con los requisitos.");
    }
});

botonDesencriptar.addEventListener("click", () => {
    const texto = recuperarTexto();
    if (validarTexto(texto)) {
        resultado.textContent = desencriptarTexto(texto);
        mensajeNoTexto.style.display = "none"; // Oculta el mensaje de "Ningun mensaje fue encontrado"
    } else {
        alert("El texto ingresado no cumple con los requisitos.");
    }
});

function recuperarTexto() {
    const cajaTexto = document.querySelector(".cajatexto");
    return cajaTexto.value.toLowerCase(); // Convertir a minúsculas
}

function validarTexto(texto) {
    // Expresión regular que valida que el texto solo contenga letras minúsculas sin acentos y espacios
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptarTexto(texto) {
    const encriptaciones = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (letra in encriptaciones) {
            textoEncriptado += encriptaciones[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    return texto.replace(/ai/g, "a")
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}
const btnCopiar = document.querySelector(".boton-copiar");
btnCopiar.addEventListener("click", () => {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
});
