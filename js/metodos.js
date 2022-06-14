const nombreMet = ['Jhon', 'Ronertino', 'Paula', 'Angelica', 'Valentina', 'Paula'];
document.write(nombreMet.length, ' / ');

//Metodo Join
document.write(nombreMet.join('-'), ' / ');

//Metodo pop y push
nombreMet.pop();
console.log(nombreMet);
nombreMet.push('Rodrigo');
console.log(nombreMet);

//Metodo shift y unshift
nombreMet.shift();
console.log(nombreMet);
nombreMet.unshift('Roberto');
console.log(nombreMet);

//Metodo concat
const ciudad = ['Ibagué', 'Medellin', 'Cali', 'Bogota'];
const todoElNombre = nombreMet.concat(ciudad);
document.write(todoElNombre, ' / ');

//Metodo Soart y Reverse
todoElNombre.sort() //Acomoda en orden alfabetico
document.write(todoElNombre, ' / ');
todoElNombre.reverse() //Acomoda en orden alfabetico pero al reves
document.write(todoElNombre, ' / ');
