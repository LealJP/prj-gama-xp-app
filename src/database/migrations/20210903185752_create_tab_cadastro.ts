import { Knex } from "knex";

//método up - comandos DDL para a criação/alteração de tabelas
export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_cadastro', (table) => {
        table.increments('id').unique();
        table.specificType('cpf', 'VARCHAR(11)').notNullable().unique();
        table.specificType('nome', 'VARCHAR(50)').notNullable();
    }); 
}

//método down - comando DDL de remoção de tabela e bd
export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_cadastro');
}

