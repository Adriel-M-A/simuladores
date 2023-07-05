/**
 * Visualiza los resultados en una tabla, ocultando el formulario y mostrando los botones de recálculo y limpiar.
 * @param {string} tipo - Puede ser "mensura", "valuaciones" o "certificaciones".
 */
export function calcular(tipo) {
  // Ocultar el botón de calcular y limpiar, y muestra el botón de recalcular
  document.getElementById(`calcular-${tipo}`).style.display = "none";
  document.getElementById(`limpiar-${tipo}`).style.display = "none";
  document.getElementById(`recalcular-${tipo}`).style.display = "inline-block";

  // Ocultar el formulario y mostrar la tabla
  document.getElementById(`form-${tipo}`).style.display = "none";
  document.getElementById(`table-${tipo}`).style.display = "table";
}

/**
 * Realiza el proceso de recálculo: restablece la visualización del formulario y los botones.
 * @param {string} tipo - Puede ser "mensura", "valuaciones" o "certificaciones".
 */
export function recalcular(tipo) {
  // Mostrar el botón de calcular, limpiar y ocultar el botón de recalcular
  document.getElementById(`calcular-${tipo}`).style.display = "inline-block";
  document.getElementById(`limpiar-${tipo}`).style.display = "inline-block";
  document.getElementById(`recalcular-${tipo}`).style.display = "none";

  // Mostrar el formulario y ocultar la tabla
  document.getElementById(`form-${tipo}`).style.display = "block";
  document.getElementById(`table-${tipo}`).style.display = "none";
}

/**
 * Limpia los campos de un formulario según el tipo especificado.
 * @param {string} tipo - Puede ser "mensura", "valuaciones" o "certificaciones".
 */
export function limpiar(tipo) {
  var form = document.getElementById(`form-${tipo}`);
  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // Limpiar campos de tipo número
    if (element.type === "number") {
      element.value = 0;
    }

    // Limpiar campos de tipo checkbox
    if (element.type === "checkbox") {
      element.checked = false;
    }
  }
}

/**
 * Cierra el popup del tipo especificado.
 * @param {string} tipo - Puede ser "mensura", "valuaciones" o "certificaciones".
 */
export function cerrar(tipo) {
  const tabla = document.getElementById(`table-${tipo}`);
  const style = getComputedStyle(tabla);
  // Si la tabla está visible, recalcular
  if (style.display !== "none") Recalcular(tipo);
  Limpiar(tipo);

  // Ocultar el popup del tipo especificado
  document.getElementById(`popup-${tipo}`).style.display = "none";
}
