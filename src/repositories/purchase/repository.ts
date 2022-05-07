import { getRepository, Repository } from 'typeorm';
import { Purchase } from '../../entities/Purchase';
import { IPurchaseRepo, NewPurchaseProps, PurchaseProps } from './interfaces';

class PurchaseRepo implements IPurchaseRepo {
  private ormRepo: Repository<Purchase>;

  constructor() {
    this.ormRepo = getRepository(Purchase);
  }

  createPurchase = (purchase: NewPurchaseProps) =>
    this.ormRepo.create(purchase);
  savePurchase = async (purchase: PurchaseProps) =>
    await this.ormRepo.save(purchase);
  retrievePurchases = async () => await this.ormRepo.find();
  findPurchase = async (id: string) => await this.ormRepo.findOne(id);
  deletePurchase = async (id: string) => await this.ormRepo.delete({ id });
  updatePurchase = async (id: string, update: { [x: string]: unknown }) =>
    await this.ormRepo.update(id, update);
}

export { PurchaseRepo, PurchaseProps };
