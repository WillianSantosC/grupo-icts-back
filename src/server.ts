import 'reflect-metadata';
import { createConnection } from 'typeorm';
import dbOptions from '../ormconfig';
import app from './app';

const PORT = process.env.PORT ?? '3001';

createConnection(dbOptions)
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((error: any) => console.log(error));
