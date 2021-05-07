const container = document.getElementById("container");

const inputFila = document.getElementById("fila");

const inputColumna = document.getElementById("columna");

const btnReiniciar = document.getElementById("btnReiniciar");

const colorFondo = document.getElementById("color-fondo");

const colorPixel = document.getElementById("color-pixel");

const lapiz = document.getElementById("lapiz");

const gomaBorrar = document.getElementById("gomaBorrar");

const tamañoPixel = document.getElementById("tamañoPixel");

const mostrarBordes = document.getElementById("mostrarBordes");

let estaPintando = true;

btnReiniciar.addEventListener("click", function () {
  const cantidadFila = inputFila.value;
  const cantidadColumna = inputColumna.value;
  const tamañoPixelModificado = document.getElementById("tamañoPixel");
  container.innerHTML = "";
  mostrarBordes.checked = true;
  container.style.gridTemplateColumns = `repeat(${cantidadColumna}, 1fr)`;
  for (let i = 0; i < cantidadFila; i++) {
    for (let j = 0; j < cantidadColumna; j++) {
      const nuevoPixel = document.createElement("div");
      nuevoPixel.classList.add("bordesActivo");
      nuevoPixel.style.backgroundColor = colorFondo.value;
      nuevoPixel.style.width = tamañoPixelModificado.value + "px";
      nuevoPixel.style.height = tamañoPixelModificado.value + "px";

      nuevoPixel.addEventListener("click", function () {
        if (estaPintando) {
          nuevoPixel.style.backgroundColor = colorPixel.value;
        } else {
          nuevoPixel.style.backgroundColor = colorFondo.value;
        }
      });

      container.appendChild(nuevoPixel);
    }
  }
});

lapiz.addEventListener("click", () => {
  estaPintando = true;
  lapiz.classList.add("botonActivo");
  gomaBorrar.classList.remove("botonActivo");
});

gomaBorrar.addEventListener("click", () => {
  estaPintando = false;
  gomaBorrar.classList.add("botonActivo");
  lapiz.classList.remove("botonActivo");
});

tamañoPixel.addEventListener("change", () => {
  cambiarTamañoBorde();
});

mostrarBordes.addEventListener("change", () => {
  cambiarTamañoBorde();
});

function cambiarTamañoBorde() {
  const pixeles = document.querySelectorAll("#container div");

  for (let index = 0; index < pixeles.length; index++) {
    pixeles[index].style.width = tamañoPixel.value + "px";
    pixeles[index].style.height = tamañoPixel.value + "px";

    if (mostrarBordes.checked) {
      pixeles[index].classList.add("bordesActivo");
    } else {
      pixeles[index].classList.remove("bordesActivo");
    }
  }
}
/*
mostrarBordes.addEventListener('change', () => {
    const pixeles = document.querySelectorAll('#container div');
    for (let index = 0; index < pixeles.length; index++) {
        pixeles[index].classList.toggle("bordesActivo");
    }
})
*/
