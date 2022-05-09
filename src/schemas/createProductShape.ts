import * as yup from 'yup';

const createProductShape = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  preco: yup.number().required(),
});

export default createProductShape;
