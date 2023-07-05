import { calcular, recalcular, limpiar } from "./modulos/acciones.js";
import { cargarTabla, parcelasValorModular } from "./modulos/funciones.js";
import { montosMensura } from "./modulos/constantes.js";

const calcularButton = document.getElementById("calcular-mensura");
calcularButton.addEventListener("click", () => {
  const origen = parseInt(document.getElementById("origen").value);
  const resultante = parseInt(document.getElementById("resultante").value);
  const parcelas = origen + resultante;

  const montoParcelas = parcelasValorModular(parcelas);

  var montos = montosMensura;
  const monto = { monto: montoParcelas };
  montos.unshift(monto, monto);

  calcular("mensura");
  cargarTabla("mensura", montos, parcelas);
  montos.splice(0, 2);
});

const recalcularButton = document.getElementById("recalcular-mensura");
recalcularButton.addEventListener("click", () => {
  recalcular("mensura");
});

const limpiarButton = document.getElementById("limpiar-mensura");
limpiarButton.addEventListener("click", () => {
  limpiar("mensura");
});
