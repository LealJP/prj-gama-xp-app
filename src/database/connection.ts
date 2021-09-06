//dados da conexão com o banco de dados

import knex from 'knex'; //importa tudo do módulo knex
import knexFile from '../../knexfile'; //importa os dados de configuração do bd (esta no arquivo knexfile.ts)


export default knex(knexFile['development']); //esse knex deverá ser importados nas controllers para estabelecer a conexão e interações com o bd  
console.log('Conexão realizada com sucesso!');
