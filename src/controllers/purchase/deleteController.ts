import { Request, Response } from 'express';
import { PurchaseRepo } from '../../repositories';
const deletePurchase = async (req: Request, res: Response) => {
  const { id } = req.params;

  await new PurchaseRepo().deletePurchase(id);

  res.status(204).json('');
};

export default deletePurchase;
