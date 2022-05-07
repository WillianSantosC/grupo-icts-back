import { Router } from 'express';
import {
  addProduct,
  createProduct,
  createPurchase,
  deleteProduct,
  deletePurchase,
  retrieveProducts,
  retrievePurchases,
  updateProduct,
  updateProductPrice,
  updatePurchase,
} from './controllers';
import { validateShape } from './middlewares';
import {
  addProductShape,
  createProductShape,
  createPurchaseShape,
  updateProductShape,
} from './schemas';

const router = Router();

// PURCHASE CRUD
router.post(
  '/purchase/create',
  validateShape(createPurchaseShape),
  createPurchase
);

router.put('/purchase/product/:id', validateShape(addProductShape), addProduct);

router.patch('/purchase/:id', updatePurchase);

router.delete('/purchase/:id', deletePurchase);

router.get('/purchase', retrievePurchases);

// PRODUCT CRUD
router.post(
  '/product/create',
  validateShape(createProductShape),
  createProduct
);

router.put(
  '/product/:id',
  validateShape(updateProductShape),
  updateProductPrice
);

router.patch('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

router.get('/product', retrieveProducts);
export default router;
