import { Request, Response } from 'express';
import { ProductRepo } from '../../repositories';
const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  await new ProductRepo().deleteProduct(id);

  res.status(204).json('');
};

export default deleteProduct;
