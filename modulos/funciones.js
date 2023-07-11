import { indice, modulos } from "./constantes.js"; // Constantes de uso general

/**
 * Formatea un monto de tipo numérico en una cadena con el formato de moneda argentina
 * @param {Number} monto - El monto a formatear
 * @returns {String} - El monto formateado como cadena con el formato de moneda argentina => $ 1.234,56
 */
function formatoMoneda(monto) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  }).format(monto);
}

/**
 * Obtiene los valores de un formulario a partir de su ID.
 * @param {string} formularioId - El ID del formulario.
 * @returns {any[]} - Un array con los valores obtenidos del formulario.
 */
function obtenerValoresFormulario(formularioId) {
  const formulario = document.getElementById(formularioId);
  const inputs = formulario.getElementsByTagName("input");

  let valores = Array.from(inputs).map((input) =>
    input.type === "checkbox" ? input.checked : +input.value
  );

  return valores;
}

/**
 * Actualiza el contenido de las celdas existentes o agrega nuevas celdas a una fila específica de una tabla.
 * @param {string} tablaId - El ID de la tabla.
 * @param {number} filaIndex - El índice de la fila.
 * @param {number|boolean} cantidad - El valor de la celda de cantidad. Si es un booleano, muestra "SI" si es verdadero y "NO" si es falso. Si es un número muestra el valor directamente.
 * @param {number} importe - El valor numérico de la celda de importe.
 * @param {number} total - El valor numérico de la celda de total.
 */
function actualizarCeldas(parametros) {
  const { tablaId, filaIndex, cantidad, importe, total } = parametros;
  const tabla = document.getElementById(tablaId);
  const fila = tabla.rows[filaIndex + 1];

  // Si no hay suficientes celdas, agregar nuevas celdas
  const celdasFaltantes = 4 - fila.cells.length;
  for (let i = 0; i < celdasFaltantes; i++) {
    fila.insertCell();
  }

  // Actualizar el contenido de las celdas
  const cantidadTexto = typeof cantidad === "boolean" ? (cantidad ? "SI" : "NO") : cantidad;
  fila.cells[1].textContent = cantidadTexto;
  fila.cells[2].textContent =
    typeof cantidad === "boolean" ? `${importe}%` : formatoMoneda(importe);
  fila.cells[3].textContent = formatoMoneda(total);
}

/**
 * Carga una tabla con datos calculados a partir de los valores de entrada y montos.
 * @param {string} tipo - El tipo de formulario y tabla a cargar. (mensura/valuaciones)
 * @param {number[]} montos - Los montos correspondientes a cada valor de entrada.
 * @param {number} parcelas - El número de parcelas (opcional).
 */
export function cargarTabla(tipo, montos, parcelas) {
  const entrada = obtenerValoresFormulario(`form-${tipo}`);
  let abonar = 0;
  const totales = [];

  entrada.forEach((valor, indice) => {
    let total = 0;
    const monto = montos[indice].monto;
    const porcentaje = montos[indice].porcentaje;

    if (monto) {
      total = monto * valor;

      if (parcelas && montos[indice].parcelas) {
        total *= parcelas;
      }

      const extraIndex = montos[indice].extra;
      if (extraIndex !== undefined && entrada[extraIndex] !== 0) {
        total *= entrada[extraIndex];
      }
    }

    if (porcentaje) {
      total = valor ? abonar * (porcentaje / 100) : 0;
    }

    abonar += total;
    totales.push(total);

    actualizarCeldas({
      tablaId: `table-${tipo}`,
      filaIndex: indice,
      cantidad: valor,
      importe: monto || porcentaje,
      total,
    });
  });

  const totalAbonar = document.getElementById(`abonar-${tipo}`);
  totalAbonar.textContent = formatoMoneda(abonar);
}

/**
 * Retorna el valor modular correspondiente a la cantidad de parcelas recibidas
 * @param {Number} parcelas - La cantidad de parcelas a considerar
 * @returns {Number} - El valor modular correspondiente a la cantidad de parcelas recibidas
 */
export function parcelasValorModular(parcelas) {
  const moduloEncontrado = modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
  return moduloEncontrado.valor;
}
