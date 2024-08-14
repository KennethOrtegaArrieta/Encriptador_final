function encriptar(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}
function encriptarTexto() {
    const inputText = document.getElementById("inputText").value;
    const outputText = encriptar(inputText);
    document.getElementById("outputText").value = outputText;
}

function descencriptar(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
function desencriptarTexto() {
    const inputText = document.getElementById("inputText").value;
    const outputText = descencriptar(inputText);
    document.getElementById("outputText").value = outputText;
}
function limpiarTablero() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}
function copiartexto() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);}