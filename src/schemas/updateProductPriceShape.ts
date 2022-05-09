import * as yup from 'yup';

const updateProductShape = yup.object().shape({
  preco: yup.number().required(),
});

export default updateProductShape;
