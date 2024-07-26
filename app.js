
function encriptarTexto () {
    let textoEncriptado = '';
    let textoDeUsuario = document.getElementById('textoInput').value;
    for (let caracter of textoDeUsuario) {
        if (caracter == 'a'){
            caracter = 'ai';
        }
        else if (caracter == 'e'){
            caracter = 'enter';
        }
        else  if (caracter == 'i'){
            caracter = 'imes';
        }
        else if (caracter == 'o'){
            caracter = 'ober';
        }
        else if (caracter == 'u'){
            caracter = 'ufat';
        }
        textoEncriptado += caracter;
    }

    let elementoHTML = document.getElementById('textoResultado');
    elementoHTML.innerHTML = textoEncriptado;

    let imagenVacio = document.getElementById('Vacio0');
    if (textoEncriptado == '') {
        imagenVacio.classList.remove('hidden');
    } else {
        imagenVacio.classList.add('hidden');
    }
    
    let textoVacio2 = document.getElementById('Vacio1');
    if (textoEncriptado == '') {
        textoVacio2.classList.remove('hidden');
    } else {
        textoVacio2.classList.add('hidden');
    }

    let textoVacio = document.getElementById('Vacio2');
    if (textoEncriptado == '') {
        textoVacio.classList.remove('hidden');
    } else {
        textoVacio.classList.add('hidden');
    }


    let textoLleno = document.getElementById('textoResultado');
    if (textoEncriptado == '') {
        textoLleno.classList.remove('resultados__lleno');
    } else {
        textoLleno.classList.add('resultados__lleno');
    }

    let textoBoton = document.getElementById('BotonCopiar');
    if (textoEncriptado != '') {
        textoBoton.classList.remove('hidden');
    } else {
        textoBoton.classList.add('hidden');
    }
    
    
    return;
}

function desencriptarTexto () {
    let textoEncriptado = '';
    let textoDeUsuario = document.getElementById('textoInput').value;
    textoEncriptado = textoDeUsuario.replace(/ai/g, 'a');
    textoEncriptado = textoEncriptado.replace(/enter/g, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
    textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');

    let elementoHTML = document.getElementById('textoResultado');
    elementoHTML.innerHTML = textoEncriptado;
    return;
}

function validarCampo() {
    let campo = ''
    campo = document.getElementById('textoInput');
    let campoInicial = campo.value;
    let cadenaFinal = campo.value.replace(/[^a-z\s]/g, "");
    let final = document.getElementById('textoInput');
    final.value = cadenaFinal;

    if (campoInicial != cadenaFinal){
        textoNoValido();
    }
}

function textoNoValido() {
    console.log('Error');
    const text = document.getElementById('ingresosAlerta');
    text.classList.add('shake');
    text.addEventListener('animationend', function() {
    text.classList.remove('shake');
  }, { once: true });
}

function copiarTexto(){
    let elementoHTML = document.getElementById('textoResultado').innerText;
    navigator.clipboard.writeText(elementoHTML).then(function() {
        console.log("Texto copiado: " + elementoHTML    );
    }).catch(function(error) {
        console.log("Error al copiar el texto: ", error);
    });
}