import { Request, Response } from 'express';
import { PurchaseProps, PurchaseRepo } from '../../repositories';

const retrievePurchases = async (_: Request, res: Response) => {
  const purchases: PurchaseProps[] =
    await new PurchaseRepo().retrievePurchases();

  const purchasesWithProducts = [];

  purchases.forEach((purchase) =>
    purchasesWithProducts.push({ products: purchase?.products })
  );

  res.status(200).json(purchasesWithProducts);
};

export default retrievePurchases;
