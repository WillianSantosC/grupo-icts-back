import { getRepository, Repository } from 'typeorm';
import { Product } from '../../entities/Product';
import { IProductRepo, NewProductProps, ProductProps } from './interfaces';

class ProductRepo implements IProductRepo {
  private ormRepo: Repository<Product>;

  constructor() {
    this.ormRepo = getRepository(Product);
  }

  createProduct = (product: NewProductProps) => this.ormRepo.create(product);
  saveProduct = async (product: ProductProps) =>
    await this.ormRepo.save(product);
  retrieveProducts = async () => await this.ormRepo.find();
  findProduct = async (id: string) => await this.ormRepo.findOne(id);
  deleteProduct = async (id: string) => await this.ormRepo.delete({ id });
  updateProduct = async (id: string, update: { [x: string]: unknown }) =>
    await this.ormRepo.update(id, update);
}

export { ProductRepo, ProductProps };
