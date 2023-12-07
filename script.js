let contrasenia = document.getElementById('contrasena');
let btngenerar = document.getElementById('btngenerar');
let dificultad = document.getElementById('dificultad');

let digitos = document.getElementsByClassName('digitos');
let rangoLongitud = document.getElementsByClassName('rangoLongitud');
let Colordificultad = document.getElementsByClassName('Colordificultad');

// Caracteres válidos para la contraseña
const caracteres = "0123456789aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ!@#$%^&*";

function generarContrasenia(){
    let contrasenaFinal = '';
    let caracteresUsados = [];

    for (i= 0; i<parseInt((rangoLongitud[0]).value); i++){

        let caracter;
        
        do {
            const caracterAleatorio = Math.floor(Math.random() * caracteres.length);
            caracter = caracteres[caracterAleatorio];

        } while (caracteresUsados.includes(caracter));

        caracteresUsados.push(caracter);
        contrasenaFinal += caracter;
        
    }
    
    contrasenia.innerHTML = contrasenaFinal;
    
    let LongitudContrasena = (rangoLongitud[0]).value;
    
    if((LongitudContrasena > 0 ) && (LongitudContrasena <= 4)){
        Colordificultad[0].style.backgroundColor = '#D33636';
        dificultad.innerHTML='Debil';
    }
    if((LongitudContrasena > 4 ) && (LongitudContrasena <= 8)) {
        Colordificultad[0].style.backgroundColor = '#E1962D';
        dificultad.innerHTML='Medio debil';
    
    }
    if((LongitudContrasena > 8 ) && (LongitudContrasena <= 12)) {
        Colordificultad[0].style.backgroundColor = '#E1D22D';
        dificultad.innerHTML='Medio Fuerte';
    
    }
    if((LongitudContrasena > 12 ) && (LongitudContrasena <= 16)) {
        Colordificultad[0].style.backgroundColor = '#188656';
        dificultad.innerHTML='Fuerte';
    
    }
}

btngenerar.addEventListener('click', generarContrasenia);

function longitud_de_contraseña(){
    rangoLongitud = document.getElementsByClassName('rangoLongitud');

    digitos[0].innerHTML=(rangoLongitud[0]).value;

    setTimeout(longitud_de_contraseña, 1)
}

longitud_de_contraseña();
