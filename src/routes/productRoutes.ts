import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  retrieveProducts,
  updateProduct,
  updateProductPrice,
} from '../controllers';
import { validateShape } from '../middlewares';
import { createProductShape, updateProductShape } from '../schemas';

const routerProduct = Router();

routerProduct.post(
  '/product/create',
  validateShape(createProductShape),
  createProduct
);

routerProduct.put(
  '/product/:id',
  validateShape(updateProductShape),
  updateProductPrice
);

routerProduct.patch('/product/:id', updateProduct);

routerProduct.delete('/product/:id', deleteProduct);

routerProduct.get('/product', retrieveProducts);

export default routerProduct;
