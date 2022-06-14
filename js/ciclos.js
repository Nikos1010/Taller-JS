document.write("<h3>", "Ciclo FOR", "</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(i, "<br>");
}
document.write("<h3>", "Ciclo WHILE", "</h3>");
let i = 1;
while(i<=10) {
    document.write(i, "<br>");
    i++;
}
document.write("<h3>", "Ciclo DO-WHILE", "</h3>");
i = 1;
do{
    document.write(i + "<br>");
    i++;
} while (i <= 10);