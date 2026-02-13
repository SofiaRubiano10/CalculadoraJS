const pantalla = document.getElementById('pantalla')

function agregar(valor){
    pantalla.value += valor;
}

function limpiar(){
    pantalla.value = ''; 
}

function borrarUno(){
    pantalla.value = pantalla.value.slice(0,-1)
}

function calcular(){
    try{
        pantalla.value = eval(pantalla.value)
    }
    catch{
        pantalla.value = 'Error';
        setTimeout(() => {
            pantalla.value = '';
        },1000

        )
    }
}

function raiz() {
    pantalla.value = Math.sqrt(eval(pantalla.value));
    
}

function potencia() {
    pantalla.value = Math.pow(eval(pantalla.value), 2);
   
}


function porcentaje() {
    pantalla.value = eval(pantalla.value) / 100;
   
}

// Escuchar eventos del teclado
document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    if (/[0-9\+\-\*\/\.]/.test(tecla)) {
        agregar(tecla);
    }

    if (tecla === 'Enter') {
        event.preventDefault(); 
        calcular();
    }

    if (tecla === 'Escape') {
        limpiar();
    }

    if (tecla === 'Backspace') {
        borrarUno();
    }
});