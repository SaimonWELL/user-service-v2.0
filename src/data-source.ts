import { DataSource } from 'typeorm';
import {User} from "./user/user.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'userdb',
    entities: [User],
    migrations: [__dirname + '/user/migration/*{.ts,.js}'],
    synchronize: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });
