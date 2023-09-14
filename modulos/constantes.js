export const indice = 5; // Índice utilizado para calcular montos basados en valores preestablecidos
export const preferencial = 500; // Porcentaje Preferencial

/*----- Módulos -----*/

// 1.1) Por estudio de mensura, considerado como número de parcelas la suma de parcelas de origen más resultante
export const modulos = [
  { rango: [0, 5], valor: 900 },
  { rango: [6, 20], valor: 740 },
  { rango: [21, 50], valor: 660 },
  { rango: [51, Infinity], valor: 600 },
].map((modulo) => ({ ...modulo, valor: modulo.valor * indice }));

// Montos con índice aplicado
export const montosMensura = [
  { monto: 600 }, // 1.2) Unidad Funcional y/o Unidad Complementaria.
  { monto: 240 }, // Declaración jurada individual formato papel.
  { monto: 120, parcelas: true }, // 1.3) Cementerio.
  { monto: 2400 }, // 1.4) Rectificacion de cada plano de mensura registrado.
  { monto: 2250 }, // 1.6.1) Por estudios de parcelas.
  { monto: 1500 }, // 1.6.2) Por estudio de la Unidad Funcional/Complementaria.
  { monto: 1500, parcelas: true }, // 1.7) Solicitud estudio de título y antecedente dominial (por parcelas).
  { porcentaje: 40 }, // 1.7) Presentaciones previas sucesivas y/o definitivas, se aplicara a partir de la cuarta presentacion
  { porcentaje: preferencial }, // Porcentaje preferencial
].map((monto) => (monto.monto ? { ...monto, monto: monto.monto * indice } : monto));

export const montosValuaciones = [
  { monto: 240 }, // Declaración jurada individual formato papel
  { monto: 720 }, // 3.3) Por certificación de valores fiscales de inmueble, por cada parcela
  { monto: 600 }, // 3.4) Por pedido de reconsideración de valuación fiscal
  { monto: 600 }, // 3.5) Por pedido de reconsideración de receptividad ganadera
  { monto: 840 }, // 3.6) Por pedido de reconsideración
  { porcentaje: preferencial }, // Porcentaje preferencial
].map((monto) => (monto.monto ? { ...monto, monto: monto.monto * indice } : monto));
