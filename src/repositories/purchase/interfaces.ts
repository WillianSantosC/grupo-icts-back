import { DeleteResult, UpdateResult } from 'typeorm';

interface PurchaseProps {
  id: string;
  total: number;
  data_criacao: string;
  tipo_pagamento: string;
  status: string;
  products?: {
    id?: string;
    nome?: string;
    descricao?: string;
    preco?: number;
    data_criacao?: string;
    data_atualizacao?: string;
  }[];
}

interface NewPurchaseProps {
  total: number;
  tipo_pagamento: string;
  status: string;
}

interface IPurchaseRepo {
  createPurchase: (purchase: NewPurchaseProps) => PurchaseProps;
  savePurchase: (purchase: PurchaseProps) => Promise<PurchaseProps>;
  retrievePurchases: () => Promise<PurchaseProps[]>;
  findPurchase: (id: string) => Promise<PurchaseProps>;
  deletePurchase: (id: string) => Promise<DeleteResult>;
  updatePurchase: (
    id: string,
    update: { [x: string]: unknown }
  ) => Promise<UpdateResult>;
}

export { PurchaseProps, NewPurchaseProps, IPurchaseRepo };
