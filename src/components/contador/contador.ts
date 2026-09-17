let valor: number = 0;

const contadorEl = document.getElementById("contador") as HTMLDivElement;
const btnMas = document.getElementById("btn-mas") as HTMLButtonElement;
const btnMenos = document.getElementById("btn-menos") as HTMLButtonElement;

function actualizarPantalla(): void {
  contadorEl.textContent = valor.toString();
}

btnMas.addEventListener("click", () => {
  valor++;
  actualizarPantalla();
});

btnMenos.addEventListener("click", () => {
  valor--;
  actualizarPantalla();
}); 