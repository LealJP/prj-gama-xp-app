import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json()); //informa para usar requisições e responses em formato Json

app.use(routes); //aplicativo irá usar as rotas que esta em routes

app.listen(3000, () => console.log("Servidor inicializado na porta 3000"));