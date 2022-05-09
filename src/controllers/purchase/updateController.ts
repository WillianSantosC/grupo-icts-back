import { Request, Response } from 'express';
import { PurchaseRepo } from '../../repositories';

const updatePurchase = async (req: Request, res: Response) => {
  const { id } = req.params;

  for (const [key, value] of Object.entries(req.body)) {
    if (key === 'tipo_pagamento' || key === 'status') {
      await new PurchaseRepo().updatePurchase(id, {
        [key]: value,
      });
    }
  }

  res.status(204).json('');
};

export default updatePurchase;
