import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


  @Module({
    imports: [
      TypeOrmModule.forRoot({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": null,
            "database": "PROJECT-NAME",
            "entities": ["src/**/**.entity{.ts,.js}"],
            "synchronize": true,
            "autoLoadEntities": true,
        
        //"timeout"         : 60 * 60 * 1000,
      }),
      UsersModule
    ],
  })
export class AppModule {}