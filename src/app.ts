import cors from 'cors';
import express from 'express';
import { routerProduct, routerPurchase } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerProduct);
app.use(routerPurchase);

export default app;
