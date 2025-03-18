function getValues() {
    let value1 = parseFloat(document.getElementById("input_1").value) || 0;
    let value2 = parseFloat(document.getElementById("input_2").value) || 0;
    return [value1, value2];
}

function plus() {
    let value = getValues();
    ShowResult(value[0] + value[1]);
}

function minus() {
    let value = getValues();
    ShowResult(value[0] - value[1]);
}

function times() {
    let value = getValues();
    ShowResult(value[0] * value[1]);
}

function divide() {
    let value = getValues();
    if (value[1] !== 0) {
        ShowResult(value[0] / value[1]);
    }
}

function raiz() {
    let value = getValues();
    ShowResult(Math.sqrt(value[0]));
}

function potencia() {
    let value = getValues();
    ShowResult(Math.pow(value[0], value[1]));
}

function absoluto() {
    let value = getValues();
    ShowResult(Math.abs(value[0]));
}

function randomNum() {
    ShowResult(Math.random());
}

function Round() {
    let value = getValues();
    ShowResult(Math.round(value[0]));
}

function Floor() {
    let value = getValues();
    ShowResult(Math.floor(value[0]));
}

function Ceil() {
    let value = getValues();
    ShowResult(Math.ceil(value[0]));
}

function ShowResult(result) {
    document.getElementById("result_input").value = result;
}