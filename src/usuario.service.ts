import {Controller,Injectable} from '@nestjs/common';

@Controller()
@Injectable()
export class UsuarioService {
    usuarios: Usuario[] = [];

    crearUsuario(usuario: Usuario): Usuario[] {
        this.usuarios.push(usuario)
        return this.usuarios;
    }

    mostrarUusuarios(): Usuario[] {
        return this.usuarios;
    }
}
export interface Usuario{
        nombre:String;
        apellido:String;
        edad:Number;
}