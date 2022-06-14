const edad = 16;
document.write("<h3>", 'If Común', "</h3>");
if(edad > 18) {
    document.write('Es mayor de edad', "<br>");
} else {
    document.write('Es menor de edad', "<br>");
}
//If anidado
const ciudadIf = 'Ibagué';
document.write("<h3>", 'If Anidado', "</h3>");
if(ciudadIf === 'Ibagué') {
    document.write('Eres Ibaguereño', "<br>");
} else if(ciudadIf === 'Cali') {
    document.write('Eres Caleño', "<br>");
} else {
    document.write('Eres de otra ciudad', "<br>");
}
//Switch
document.write("<h3>", 'Switch', "</h3>");
switch (ciudadIf) {
    case 'Ibagué': document.write('Eres Ibaguereño', "<br>"); 
        break;
    case 'Cali': document.write('Eres Caleño', "<br>");
        break;

    default:
        document.write('Eres de otra ciudad', "<br>");
        break;
}
