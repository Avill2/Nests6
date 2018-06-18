import {Get, Controller, UseGuards, ReflectMetadata, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {JwtGuard} from './guards/jwt.guard';

@Controller()
@UseGuards(JwtGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get()
    @ReflectMetadata("necesitaProteccion", false)
    root(@Req(), @Res()) {
        res.set('x-frame-options','SAMEORIGIN');
        return res.send('hello world');
    }

    @Get('hola')
    @ReflectMetadata("necesitaProteccion", true)
    hola(): string {
        return 'Hola amigos';
    }
}
