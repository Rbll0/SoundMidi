function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = playSound;

let contador = 0;

while (contador < listaDeTeclas.length ){
    listaDeTeclas[contador].onclick = playSound;

    // contador = (contador + 1);

    contador += 1;

    console.log(contador);
    
}