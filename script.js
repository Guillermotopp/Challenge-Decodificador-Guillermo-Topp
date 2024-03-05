/*alert("Hola Mundo");
const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
console.log(campo_mensaje,campo_texto)
const matriz_code = [
    ["e","enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"],   // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    console.log(texto);
}
function encriptar(fraseEncriptada){
    for(let i=0; i<matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
        console.log(matriz_code[i][0]);

    }
    return fraseEncriptada;
}

console.log([1,2,3].length);*/

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const textArea=document.querySelector(".campo-texto"); /*almaceno lo que el usuairo ingresa en la clase HTML*/
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
    const btnCopiar1 = document.querySelector('.copiar');
    btnCopiar1.style.display = 'block';
    // Ocultar el mensaje de inicio
    const mensajeInicio = document.querySelector('.mensajeInicio');
    mensajeInicio.style.display = 'none';
    // hacer aparecer el mensaje desenriptado luego de borrar el mensaje de inicio
   
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
    const btnCopiar2 = document.querySelector('.copiar');
    btnCopiar2.style.display = 'block';
    // Ocultar el mensaje de inicio
    const mensajeInicio = document.querySelector('.mensajeInicio');
    mensajeInicio.style.display = 'none';
}

function encriptar(cadenaEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada=cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        } 
    }
    return cadenaEncriptada;
}
function desencriptar(cadenaDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])){
            cadenaDesencriptada=cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        } 
    }
    return cadenaDesencriptada;
}
/*
function copiar() {
    // Seleccionar el texto del área de texto
    const textArea = document.querySelector("textarea.campo-texto");
    
    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            console.log('Texto copiado al portapapeles: ' + textArea.value);
            // Aquí puedes agregar cualquier lógica adicional después de copiar el texto
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
            // Manejar cualquier error que ocurra durante la copia al portapapeles
        });
}
*/

/*function copiar() {
    const textArea = document.querySelector("textarea.campo-texto");
    
    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            console.log('Texto copiado al portapapeles: ' + textArea.value);
            // Aquí puedes agregar cualquier lógica adicional después de copiar el texto
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
            // Manejar cualquier error que ocurra durante la copia al portapapeles
        });
}
*/
/*function copiar() {
    var texto = document.getElementById("texto-encriptado").value;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles!");
  }*/

function copiar() {
    // Get the text field
    var copyText = mensaje;
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }