
const btnEnviar = document.querySelector('#enviar');
const resultado = document.querySelector('#resultado');

//Ejercicio Uno
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    const numeroTabla = document.querySelector('#numeroTabla');
    tablaMultiplicar(Number(numeroTabla.value))
});

function tablaMultiplicar(numero) {
    limpiarHTML(resultado);
    for (let i = 1; i <= 10; i++) {
        const p = document.createElement('p');
        p.innerText = `${numero} * ${i} = ${numero*i}`;
        resultado.appendChild(p);
    }
}

function limpiarHTML(resultado) {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Ejercicio Dos
const resultadoDos = document.querySelector('#resultado2');
const palabrasArray = ['Lenguaje', 'Programacion', 'CSS', 'HTML', 'JavaScript'];
function invertirArray(array) {
    const arrayInvertido = [];
    const parrafo = document.createElement('p');
    for (let i = array.length-1; i >= 0; i--) {
        arrayInvertido.push(array[i]); 
        const span = document.createElement('span');
        span.innerHTML = `${array[i]} `;
        parrafo.appendChild(span);
    }
    resultadoDos.appendChild(parrafo);
    return arrayInvertido;
}
const nuevoArray = invertirArray(palabrasArray);

//Ejercicio Tres
const btnEnviarDos = document.querySelector('#enviarDos');

btnEnviarDos.addEventListener('click', (e) => {
    e.preventDefault();
    const numeroBorde = document.querySelector('#numeroBorde');
    const numeroCentro = document.querySelector('#numeroCentro');
    crearTable(numeroBorde, numeroCentro);
});

function crearTable(borde, centro) {
    const tabla = document.querySelector('#tabla')
    const tbody = document.createElement('tbody');
    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const th = document.createElement('th');
            if(i !== 0 && i !== 3 && j !== 0 && j !== 2) {
                th.innerText = centro.value;
            } else {
                th.innerText = borde.value;
            }
            tr.appendChild(th);     
        }
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
}

//Ejercicio Cuatro
const resultadoCuatro = document.querySelector('#resultado4');
const btnEnviarCuatro = document.querySelector('#enviarCuatro');

btnEnviarCuatro.addEventListener('click', e => {
    e.preventDefault();
    const numeroInicio = document.querySelector('#numeroInicio').value;
    const numeroFinal = document.querySelector('#numeroFin').value;
    cantidadNumeroImpares(numeroInicio, numeroFinal);
});

function cantidadNumeroImpares(inicio, fin) {
    limpiarHTML(resultadoCuatro);
    const parrafo = document.createElement('p');
    for(let i = inicio; i <= fin; i++) {
        if(i % 2 !== 0) {
            const span = document.createElement('span');
            span.innerText = `${i} `;
            parrafo.appendChild(span);
        }
    }
    resultadoCuatro.appendChild(parrafo);
}

//Ejercicio Cinco
const resultadoCinco = document.querySelector('#resultado5');
const arrayUno = [3,5,6,7,8];
const arrayDos = [1,5,8,9,6,10];

const parrafoCinco = document.createElement('p');
for (let i = 0; i < arrayUno.length; i++) {
    for (let j = 0; j < arrayDos.length; j++) {
        if(arrayUno[i] === arrayDos[j]){
            const span = document.createElement('span');
            span.innerText = `${arrayDos[j]} `;
            parrafoCinco.appendChild(span);
        }
    } 
}
resultadoCinco.appendChild(parrafoCinco);

//Ejercicio Seis
const btnEnviarSeis = document.querySelector('#enviarSeis');
const resultadoSeis = document.querySelector('#resultado6');

btnEnviarSeis.addEventListener('click', e => {
    e.preventDefault();
    const precioProducto = document.querySelector('#precioProducto').value;
    const selectOption = document.querySelector('#products').value;
    calcular(precioProducto, selectOption)
});

function calcular(precio, incremento) {
    limpiarHTML(resultadoSeis);
    const parrafo = document.createElement('p');
    switch (incremento) {
        case 'vestuario':
            parrafo.innerText = `Precio Original: ${precio}, Incremento del 30%: ${precio*1.30}.`;
            break;
        case 'carnes':
            parrafo.innerText = `Precio Original: ${precio}, Incremento del 10%: ${precio * 1.10}.`;
            break;
        case 'aseo':
            parrafo.innerText = `Precio Original: ${precio}, Incremento del 25%: ${precio * 1.25}.`;
            break;
        case 'granos':
            parrafo.innerText = `Precio Original: ${precio}, Incremento del 15%: ${precio * 1.15}.`;
            break;
        case 'otro':
            parrafo.innerText = `Precio Original: ${precio}, Incremento del 20%: ${precio * 1.20}.`;
            break;

        default:
            parrafo.innerText = `Se debe llenar el fomulario.`;
            break;
    }
    resultadoSeis.appendChild(parrafo);
}

//Ejercicio Siete
const btnEnviarSiete = document.querySelector('#enviarSiete');

btnEnviarSiete.addEventListener('click', e => {
    e.preventDefault();
    const numero = document.querySelector('#numeroPares').value;
    numerosPares(numero);
});

function numerosPares(numero) {
    const resultado = document.querySelector('#resultado7');
    limpiarHTML(resultado);
    const validar = validacionMenorADiez(numero);
    if(validar) {
        if(numero % 2 !== 0) {
            numero++;
        }
        const parrafo = document.createElement('p');
        for (let i = numero; i <= 50; i+=2) {
            const span = document.createElement('span');
            span.innerText = `${i} `;
            parrafo.appendChild(span);
        }
        resultado.appendChild(parrafo);
    }
}

function validacionMenorADiez(numero) {
    if(numero < 10 && numero > 0) {
        return true;
    } else {
        return false;
    }
}

//Ejercicio Ocho
const formulario = document.querySelector('#form');
const resultadoOcho = document.querySelector('#resultado8');


document.addEventListener('DOMContentLoaded', cargarDocumento);
function cargarDocumento() {
    const form = document.createElement('form');

    for (let i = 1; i < 6; i++) {
        form.innerHTML += `
            <input type="number" min="0" id="edad${i}" placeholder="Ingrese la Edad ${i}">
            <select name="genero${i}" id="genero${i}">
                <option value="" disabled selected>Seleccione un genero</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
            <br/><br/>
        `
        formulario.appendChild(form);
    }
    form.innerHTML += `<input type="submit" class="btn" id="enviarOcho" value="Enviar">`

    const enviarOcho = document.querySelector('#enviarOcho');
    enviarOcho.addEventListener('click', e => {
        e.preventDefault();
        const personasArray = []
        for (let i = 1; i < 6; i++) {
            const edad = document.querySelector(`#edad${i}`).value;
            const genero = document.querySelector(`#genero${i}`).value;
            personasArray.push([edad, genero]);
        };
        console.log(personasArray)
        calcularPersonas(personasArray);
    });
}

function calcularPersonas (array) {
    limpiarHTML(resultadoOcho);
    const parrafo = document.createElement('p');

    const personaMayor = calcularPersonaMayor(array);
    parrafo.innerHTML += `<span>La edad de la persona mayor es: ${personaMayor}</span> <br>`;

    const personaMenor = calcularPersonaMenor(array);
    parrafo.innerHTML += `<span>La edad de la persona menor es: ${personaMenor}</span> <br>`;
    
    const promedioEdadMujeres = calcularPromedioEdadMujeres(array);
    parrafo.innerHTML += `<span>La edad promedio de las mujeres es: ${promedioEdadMujeres}</span> <br>`;

    const cantidadHombres = calcularCantidadHombres(array);
    parrafo.innerHTML += `<span>La cantidad de hombres es: ${cantidadHombres}</span> <br>`;

    const mayorA25 = calcularCantidadPersonasMayorA(array);
    parrafo.innerHTML += `<span>La cantidad de personas mayor a 25 es: ${mayorA25}</span> <br>`;

    resultadoOcho.appendChild(parrafo);
}

function calcularPersonaMayor(persona) {
    
    let personaMayor = 0;
    for (let i = 0; i < persona.length; i++) {
        if (Number(persona[i][0]) > personaMayor) {
            personaMayor = Number(persona[i][0]);
        }
    }
    return personaMayor;
}

function calcularPersonaMenor(persona){
    let personaMenor = Number(persona[0][0]);
    for (let i = 0; i < persona.length; i++) {
        if (Number(persona[i][0]) < personaMenor) {
            personaMenor = Number(persona[i][0]);
        }
    }
    return personaMenor;
}

function calcularPromedioEdadMujeres(mujeres) {
    let suma = 0;
    let count = 0;
    for (let i = 0; i < mujeres.length; i++) {
        if(mujeres[i][1] === 'F'){
            count++;
            suma += Number(mujeres[i][0]);
        }  
    }
    return suma / count;
}

function calcularCantidadHombres(hombres) {
    let count = 0;
    for (let i = 0; i < hombres.length; i++) {
        if (hombres[i][1] === 'M') {
            count++;
        }
    }
    return count;
}

function calcularCantidadPersonasMayorA(personas) {
    let count = 0;
    for (let i = 0; i < personas.length; i++) {
        if (Number(personas[i][0]) > 25 ) {
            count++;
        }
    }
    return count;
}