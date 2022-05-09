import { DeleteResult, UpdateResult } from 'typeorm';

interface NewProductProps {
  nome: string;
  descricao: string;
  preco: number;
}

interface ProductProps {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  data_criacao: string;
  data_atualizacao: string;
}

interface IProductRepo {
  createProduct: (product: NewProductProps) => ProductProps;
  saveProduct: (product: ProductProps) => Promise<ProductProps>;
  retrieveProducts: () => Promise<ProductProps[]>;
  findProduct: (id: string) => Promise<ProductProps>;
  deleteProduct: (id: string) => Promise<DeleteResult>;
  updateProduct: (
    id: string,
    update: { [x: string]: unknown }
  ) => Promise<UpdateResult>;
}

export { ProductProps, NewProductProps, IProductRepo };
