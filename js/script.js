const jugadasPosibles = ["piedra", "papel", "tijera"];

const contadorResultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");
const botonesJugada = document.querySelectorAll(".boton-jugada");

let puntosUsuario = 0;
let puntosOrdenador = 0;

botonesJugada.forEach((boton) => {
  boton.addEventListener("click", () => {
    const eleccionUsuario = boton.dataset.jugada;
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

function mostrarResultado(a, b, c) {

}


// resultado
function actualizarPuntuacion(a) {
    if (a === 'Ganaste') {
        puntosUsuario++;
    } else if (a === 'Perdiste') {
        puntosOrdenador++;
    }
}