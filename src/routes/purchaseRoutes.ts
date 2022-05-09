import { Router } from 'express';
import {
  addProduct,
  createPurchase,
  deletePurchase,
  retrievePurchases,
  updatePurchase,
} from '../controllers';
import { validateShape } from '../middlewares';
import { addProductShape, createPurchaseShape } from '../schemas';

const routerPurchase = Router();

// PURCHASE CRUD
routerPurchase.post(
  '/purchase/create',
  validateShape(createPurchaseShape),
  createPurchase
);

routerPurchase.put(
  '/purchase/product/:id',
  validateShape(addProductShape),
  addProduct
);

routerPurchase.patch('/purchase/:id', updatePurchase);

routerPurchase.delete('/purchase/:id', deletePurchase);

routerPurchase.get('/purchase', retrievePurchases);

export default routerPurchase;
