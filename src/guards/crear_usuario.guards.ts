import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs/index';
import {IncomingMessage} from "http";

@Injectable()
export class CrearUsuarioGuards implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('contexto:', context);
        console.log('cabeceras:', context[0].IncomingMessage.headers);
        return false;
    }
}