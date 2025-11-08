const jugadasPosibles = ["piedra", "papel", "tijera"];

const contadorResultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");
const botonesJugada = document.querySelectorAll(".boton-jugada");

function obtenerJugadaOrdenador() {
    const jugadasPosibles = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * jugadasPosibles.length);
    return jugadasPosibles[indiceAleatorio];
}

let puntosUsuario = 0;
let puntosOrdenador = 0;

botonesJugada.forEach((boton) => {
  boton.addEventListener("click", () => {
    const eleccionUsuario = boton.dataset.jugada;
    const eleccionOrdenador = obtenerJugadaOrdenador();
    const resultado = obtenerResultado(eleccionOrdenador, eleccionUsuario);
    mostrarResultado(resultado,eleccionUsuario,eleccionOrdenador);
    actualizarPuntuacion(resultado);
    console.log("Elección", eleccionUsuario);
  });
});


function obtenerResultado(usuario, ordenador) {
  if (usuario === ordenador) {
    return "Empate";
  } else if (
    (usuario === "piedra" && ordenador === "tijera") ||
    (usuario === "papel" && ordenador === "piedra") ||
    (usuario === "tijera" && ordenador === "papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}


function mostrarResultado(resultado, eleccionUsuario, eleccionOrdenador) {
    let mensaje;
    if (resultado === 'Ganaste') {
        mensaje = `Has ganado esta ronda: ${eleccionUsuario}. Máquina: ${eleccionOrdenador}.`
    } else if (resultado === 'Perdiste') {
        mensaje = `Has perdido esta ronda: ${eleccionUsuario}. Máquina: ${eleccionOrdenador}.`
    } else {
        mensaje = `Empate ambos eligieron ${eleccionUsuario}.`
    }
    contadorResultados.innerHTML = mensaje;
}


const jugadaPC = contadorResultados;
console.log('la jugada es', jugadaPC);


// resultado
function actualizarPuntuacion(resultado) {
    if (resultado === 'Ganaste') {
        puntosUsuario++;
    } else if (resultado === 'Perdiste') {
        puntosOrdenador++;
    }
    contadorUsuario.innerHTML = puntosUsuario;
    contadorOrdenador.innerHTML = puntosOrdenador;
}

