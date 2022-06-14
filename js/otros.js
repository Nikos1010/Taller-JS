document.write("<h3>", 'BREAK', "</h3>");
for (const nombres in nombreMet) {
    document.write(nombreMet[nombres], "<br>");
    if(nombreMet[nombres] == "Paula") {
        break;
    }
}
document.write("<h3>", 'CONTINUE', "</h3>");
for (const nombres in nombreMet) {
    if (nombreMet[nombres] == "Paula") {
        continue;
    }
    document.write(nombreMet[nombres], "<br>");
}
document.write("<h3>", 'FUNCIONES', "</h3>");
function suma(numeroUno, numeroDos) {
    document.write("Resultado: ",numeroUno+numeroDos, " - ");
}
suma(3,4);

function sumaDos(numeroUno, numeroDos) {
    return resultado = numeroUno + numeroDos;
}

document.write("Resultado: ", sumaDos(5, 4));