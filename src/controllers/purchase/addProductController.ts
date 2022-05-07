import { Request, Response } from 'express';
import {
  ProductProps,
  ProductRepo,
  PurchaseProps,
  PurchaseRepo,
} from '../../repositories';

const addProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product: ProductProps = await new ProductRepo().findProduct(id);

  const purchase: PurchaseProps = await new PurchaseRepo().findPurchase(
    req.validated
  );

  purchase.products = [product];

  await new PurchaseRepo().savePurchase(purchase);

  console.log(purchase.products);

  res.status(200).json({ msg: 'Produto adicionado a compra' });
};

export default addProduct;
