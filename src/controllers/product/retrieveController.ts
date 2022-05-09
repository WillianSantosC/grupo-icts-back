import { Request, Response } from 'express';
import { ProductProps, ProductRepo } from '../../repositories';

const retrieveProducts = async (_: Request, res: Response) => {
  const products: ProductProps[] = await new ProductRepo().retrieveProducts();

  res.status(200).json(products);
};

export default retrieveProducts;
