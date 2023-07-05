export const indice = 2.5; // Índice utilizado para calcular montos basados en valores preestablecidos
export const porcentajePreferencial = 500; // Porcentaje preferencial

/*----- Módulos -----*/

// 1.1) Por estudio de mensura, considerado como número de parcelas la suma de parcelas de origen más resultante
export const modulos = [
  { rango: [0, 5], valor: 750 * indice },
  { rango: [6, 20], valor: 625 * indice },
  { rango: [21, 50], valor: 550 * indice },
  { rango: [51, Infinity], valor: 500 * indice },
];

// 1.2.a) Unidad Funcional y/o Unidad Complementaria -> M500
const montoUfuncional = 500 * indice;

// Declaración jurada individual formato papel -> M200
const montoDdjj = 200 * indice;

// 1.4)
const montoCementerio = 100 * indice;

// 1.8) Verificación de estado parcelario
// 1.8.1) Por estudios de parcela/undad funcional.
const montoEstadoParcelario = 1500 * indice;

// 1.9) Solicitud estudio de título y antecedente dominial (por parcelas) -> M700
const montoSolicitudEstudio = 700 * indice;

// 3.3) Por certificación de valores fiscales de inmueble, por cada parcela -> M600
const montoValorFiscal = 600 * indice;

// 3.4) Por pedido de reconsideración de valuación fiscal -> M500
const montoValuacionFiscal = 500 * indice;

// 3.5) Por pedido de reconsideración de receptividad ganadera -> M500
const montoGanadera = 500 * indice;

// 3.6) Por pedido de reconsideración de VIR -> M700
const montoVir = 700 * indice;

// extra representa el indice de los valores de entra, tener en cuenta que incia en 0
export const montosMensura = [
  { monto: montoUfuncional },
  { monto: montoDdjj },
  { monto: montoCementerio },
  { monto: montoEstadoParcelario, parcelas: true, extra: 2 },
  { monto: montoSolicitudEstudio, parcelas: true },
];

export const montosValuaciones = [
  { monto: montoDdjj },
  { monto: montoValorFiscal, parcelas: true },
  { monto: montoValuacionFiscal },
  { monto: montoGanadera },
  { monto: montoVir },
];
