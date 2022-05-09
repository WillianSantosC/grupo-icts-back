import { PurchaseProps } from '../repositories';

declare global {
  namespace Express {
    interface Request {
      validated: any;
      purchase: PurchaseProps;
    }
  }
}
