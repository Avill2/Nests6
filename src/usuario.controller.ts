import {Body, Controller, Get, HttpCode, Post, Req, Res} from '@nestjs/common';
import Status = jest.Status;
import {UsuarioService} from './usuario.service';
import {UsuarioPipe} from './pipes/usuario.pipe';
import {UsuarioEsquema} from './usuario/usuario.schema';

// decorator
@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Wilson',
        apellido: 'Ramos',
        edad: 21,
    };

    usuarios = [];
    constructor(private _usuarioService: UsuarioService){
    }

    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario() {
        return this.usuario;
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response,
    ) {
        return response
            .status(200)
            .send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(
        @Req() request,
        @Res() response,
    ) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad,
        };

        this.usuarios.push(nuevoUsuario);

        return response
            .status(201)
            .send(nuevoUsuario);
    }

    @Post('crearUsuario1')
    crearUsuario1(
        @Body(new  UsuarioPipe(UsuarioEsquema)) nuevoUsuario)
    {
        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);
        return nuevoUsuario;
    }
}