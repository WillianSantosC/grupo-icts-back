import { Request, Response } from 'express';
import { ProductProps, ProductRepo } from '../../repositories';

const createProduct = async (req: Request, res: Response) => {
  const newProduct: ProductProps = new ProductRepo().createProduct(
    req.validated
  );

  const saveProduct: ProductProps = await new ProductRepo().saveProduct(
    newProduct
  );

  res.status(201).json(saveProduct);
};

export default createProduct;
