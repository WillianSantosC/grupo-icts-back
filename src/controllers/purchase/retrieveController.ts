import { Request, Response } from 'express';
import { PurchaseProps, PurchaseRepo } from '../../repositories';

const retrievePurchases = async (_: Request, res: Response) => {
  const purchases: PurchaseProps[] =
    await new PurchaseRepo().retrievePurchases();

  for (const purchase of purchases) {
    const total = purchase.products.reduce(
      (acc, value) => acc + value.preco,
      0
    );
    purchase.total = total;
  }

  res.status(200).json(purchases);
};

export default retrievePurchases;
