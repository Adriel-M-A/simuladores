import { calcular, recalcular, limpiar } from "./modulos/acciones.js";
import { cargarTabla } from "./modulos/funciones.js";
import { montosValuaciones } from "./modulos/constantes.js";

const calcularButton = document.getElementById("calcular-valuaciones");
calcularButton.addEventListener("click", () => {
  calcular("valuaciones");
  cargarTabla("valuaciones", montosValuaciones);
});

const recalcularButton = document.getElementById("recalcular-valuaciones");
recalcularButton.addEventListener("click", () => {
  recalcular("valuaciones");
});

const limpiarButton = document.getElementById("limpiar-valuaciones");
limpiarButton.addEventListener("click", () => {
  limpiar("valuaciones");
});
