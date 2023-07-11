export const indice = 2.5; // Índice utilizado para calcular montos basados en valores preestablecidos
export const preferencial = 500; // Porcentaje Preferencial

/*----- Módulos -----*/

// 1.1) Por estudio de mensura, considerado como número de parcelas la suma de parcelas de origen más resultante
export const modulos = [
  { rango: [0, 5], valor: 750 },
  { rango: [6, 20], valor: 625 },
  { rango: [21, 50], valor: 550 },
  { rango: [51, Infinity], valor: 500 },
].map((modulo) => ({ ...modulo, valor: modulo.valor * indice }));

// Montos con índice aplicado
export const montosMensura = [
  { monto: 500 }, // 1.2.a) Unidad Funcional y/o Unidad Complementaria -> M500
  { monto: 200 }, // Declaración jurada individual formato papel -> M200
  { monto: 100 }, // 1.4)
  { monto: 2000 }, // 1.5) Anulacion de registro plano -> M200
  { monto: 2000 }, // 1.6) Rectificacion de cada plano de mensura registrado -> M2000
  { monto: 1500, parcelas: true, extra: 2 }, // 1.8.1) Por estudios de parcela/undad funcional.
  { monto: 700, parcelas: true }, // 1.9) Solicitud estudio de título y antecedente dominial (por parcelas) -> M700
  { porcentaje: 30 }, // 1.7) Presentaciones previas sucesivas y/o definitivas, se aplicara a partir de la cuarta presentacion
  { porcentaje: preferencial }, // Porcentaje preferencial
].map((monto) => (monto.monto ? { ...monto, monto: monto.monto * indice } : monto));

export const montosValuaciones = [
  { monto: 200 }, // Declaración jurada individual formato papel -> M200
  { monto: 600, parcelas: true }, // 3.3) Por certificación de valores fiscales de inmueble, por cada parcela -> M600
  { monto: 500 }, // 3.4) Por pedido de reconsideración de valuación fiscal -> M500
  { monto: 500 }, // 3.5) Por pedido de reconsideración de receptividad ganadera -> M500
  { monto: 700 }, // 3.6) Por pedido de reconsideración de VIR -> M700
  { porcentaje: preferencial }, // Porcentaje preferencial
].map((monto) => (monto.monto ? { ...monto, monto: monto.monto * indice } : monto));
