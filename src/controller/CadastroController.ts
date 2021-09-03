//Regras de negócio do cadastro 

import {Request, Response} from 'express';

export default {
    //método de criar
    async create(req: Request, res: Response) {
        const { nome, cpf } = req.body; //requisicição feita pelo body api sendo desestruturada
        const id = 12; //simulando inserção no banco de dados
        const data = {id, nome, cpf}; //criou novo objeto chamado data com essas informações passadas pelo body
        return res.status(201).json({ data: data}); //resposta vem em formato json com statuso de ok
    },
    //método de listar
    async list(req: Request, res: Response) {
        //simulando 2 cadastros em um banco de dados
        var result = [{id:1, cpf:"12345678900", nome:"Juci Leal"}, {id:2, cpf:"12345678911", nome:"Leia Leal"}]
        return res.status(200).json({ data: result}); //retornando os valores do vetor result como objeto json ao fazer um get
    },
    //método de atualizar
    async update(req:Request, res: Response) {
        const { nome, cpf } = req.body; //recebendo pelo body
        const dataAlteracao = '03/09/2021 06:45';
        const cadastro = { nome, cpf, dataAlteracao};
        cadastro.nome = "Juci P Leal"; //independente do que a pessoa colocar na variável nome, será alterado para o valor em cadastro.nome (simulando a alteração)
        return res.status(200).json({ data: cadastro});


    }
}