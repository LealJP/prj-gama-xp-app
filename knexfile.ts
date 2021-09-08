//Configurações de conexão do db com o knex - deve ficar na raiz principal 

import  path  from 'path';

export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'db_xp'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }
};
