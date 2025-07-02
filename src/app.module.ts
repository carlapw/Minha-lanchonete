import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigModule global para que possa ser usado em todo o aplicativo
    }),

     TypeOrmModule.forRoot({
      type: 'postgres',                   // define qual banco de dados eu vou usar
      host: 'localhost',                 // endereço do banco de dados
      port: 5432,                       // porta padrão do banco de dados postgres
      username: 'postgres',            // usuário padrão do banco de dados
      password: '1234',               // senha do usuário do banco de dados
      database: 'Produtos',          // nome do aruqivo sqlite que sera criado
      entities: [Product],           // Lista de entidades ou tabelas
      synchronize: true            // Cria as tabelas automaticamente e sincroniza com o banco de dados.
     }),
    ProductModule, // Importa o módulo de produtos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
