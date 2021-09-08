//Regras de negócio do cadastro 

import {Request, Response} from 'express';
import knex from '../database/connection';

export default {
    //método de criar
    async create(req: Request, res: Response) {
        const { nome, cpf } = req.body; //requisicição feita pelo body api sendo desestruturada
       
        const  data  = {nome, cpf}; //criou um objeto data, com base na desestruturação da requisição do body

        await knex('tab_cadastro').insert(data); 
       // const id = 12; //simulando inserção no banco de dados
      //  const data = {id, nome, cpf}; //criou novo objeto chamado data com essas informações passadas pelo body
       
        return res.status(201).json({ data: data}); //resposta vem em formato json com statuso de ok
    },
    //método de listar
    async list(req: Request, res: Response) {
        //simulando 2 cadastros em um banco de dados
        //var result = [{id:1, cpf:"12345678900", nome:"Juci Leal"}, {id:2, cpf:"12345678911", nome:"Leia Leal"}]

        //buscando da tabela cadastro todos os resultados e ordenando pelo nome
        var result = await knex('tab_cadastro').orderBy('nome');

        return res.status(200).json({ data: result}); //retornando os valores do vetor result como objeto json ao fazer um get
    },
    //método find by id passado por parametro
    async find(req: Request, res: Response){
        const { id } = req.params;
        const user = await knex('tab_cadastro').where({ id });
        return res.status(200).json(user);
    },
    //método de atualizar
    async update(req:Request, res: Response) {
        const { nome, cpf } = req.body; //recebendo pelo body

        const { id } = req.params;

        const data = {cpf, nome};

        await knex('tab_cadastro').update(data).where({ id });

        const cadastro = await knex('tab_cadastro').where({ id });

        return res.status(200).json({ data:cadastro }); //retorna o cadastro atualizado

        
        /*simulando alteração de dados
        const dataAlteracao = '03/09/2021 06:45';
        const cadastro = { nome, cpf, dataAlteracao};
        cadastro.nome = "Juci P Leal"; //independente do que a pessoa colocar na variável nome, será alterado para o valor em cadastro.nome (simulando a alteração)
        return res.status(200).json({ data: cadastro});*/
    },

    //método deletar usuário
    async delete(req: Request, res:Response){
        const { id } = req.params;

        await knex('tab_cadastro').delete().where({ id });
        return res.status(200).json({ message: 'Registro excluído com sucesso!'});
        
    }
}