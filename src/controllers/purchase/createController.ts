import { Request, Response } from 'express';
import { PurchaseProps, PurchaseRepo } from '../../repositories';
const createPurchase = async (req: Request, res: Response) => {
  const newPurchase: PurchaseProps = new PurchaseRepo().createPurchase(
    req.validated
  );

  const savePurchase: PurchaseProps = await new PurchaseRepo().savePurchase(
    newPurchase
  );

  res.status(201).json(savePurchase);
};

export default createPurchase;
