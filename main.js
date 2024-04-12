function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length ){

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idSound = `#som_${instrumento}`;

    console.log(idSound);


    tecla.onclick = function () {
        playSound(idSound);
    }

    contador += 1;

    console.log(contador);
    
}