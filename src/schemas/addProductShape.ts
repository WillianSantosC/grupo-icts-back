import * as yup from 'yup';

const addProductShape = yup.object().shape({
  id: yup.string().required(),
});

export default addProductShape;
