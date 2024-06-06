import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {User} from "./user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'userdb',
      entities: [User],
      migrations: [__dirname + '/user/migration/*{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
