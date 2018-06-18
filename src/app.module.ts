import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ParametrosController} from './parametros.controller';
import {UsuarioService} from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from './usuario/usuario.entity';
import {FotoEntity} from "./fotos/foto.entity";
import {JwtService} from "./servicios/jwt.service";
import {AuthController} from "./auth/auth.controller";
import {JwtGuard} from "./guards/jwt.guard";
@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'web2018agr2.mysql.database.azure.com',
      port: 3306,
      username: 'profesor@web2018agr2',
      password: 'Javascript1',
      database: 'web',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
  }),
      TypeOrmModule.forFeature([UsuarioEntity]),
      FotoEntity,
  ],
  controllers: [AppController,
      ParametrosController, AuthController],
  providers: [AppService, UsuarioService, JwtService, JwtGuard],
})
export class AppModule {}
