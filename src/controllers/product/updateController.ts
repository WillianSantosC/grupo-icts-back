import { Request, Response } from 'express';
import { ProductRepo } from '../../repositories';

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  for (const [key, value] of Object.entries(req.body)) {
    if (key === 'nome' || key === 'descricao') {
      await new ProductRepo().updateProduct(id, {
        [key]: value,
      });
    }
  }

  res.status(204).json('');
};

export default updateProduct;
