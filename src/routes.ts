//Responsável por conter todas as rotas configuradas

import { Router } from 'express';

import CadastroController from './controller/CadastroController';

const routes = Router(); //routes terá a função gerenciadora de rotas Router do módulo express

routes.post('/cadastros', CadastroController.create); //rota de post, faz o que esta no método create do CadastroController
routes.put('/cadastros/:id', CadastroController.update);
routes.get('/cadastros', CadastroController.list); //rota de get, faz o que esta no método list do CadastroController
routes.get('/cadastros/:id', CadastroController.find);
routes.delete('/cadastros/:id', CadastroController.delete);

export default routes; //exportando o gerenciador de rotas routes para ser usado nos constrollers e server.ts


