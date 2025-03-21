function verificar() {
    let elementoRespueta = document.getElementById("decision");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = parseInt(elementoEdad.value);

    if (edad < 18) {
        elementoRespueta.textContent = "Tienes " + edad
        + " años, te falta " + (18 - parseInt(edad)).toString() +
        " años para ser mayor de edad";
    } else {
        if (edad >= 18 && edad < 21) {
            elementoRespueta.textContent = "Tienes " + edad
            + " años, te falta " + (21 - parseInt(edad)).toString() +
            " años para " + 21 + ", no puedes comprar licor";
        } else {
            elementoRespueta.textContent = "Ya puedes comprar licor";
        }
    }
}