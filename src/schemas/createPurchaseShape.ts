import * as yup from 'yup';

const createPurchaseShape = yup.object().shape({
  total: yup.number().default(() => 0),
  tipo_pagamento: yup.string().default('Cartão'),
  status: yup.string().default('Em andamento'),
});

export default createPurchaseShape;
