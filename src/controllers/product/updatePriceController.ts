import { Request, Response } from 'express';
import { ProductRepo } from '../../repositories';

const updateProductPrice = async (req: Request, res: Response) => {
  const { id } = req.params;

  for (const [key, value] of Object.entries(req.body)) {
    await new ProductRepo().updateProduct(id, {
      [key]: value,
    });
  }

  res.status(204).json('');
};

export default updateProductPrice;
