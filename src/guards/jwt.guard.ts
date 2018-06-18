import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Observable} from 'rxjs/index';
import {JwtService} from '../servicios/jwt.service';

@Injectable()
export class JwtGuard implements CanActivate{
    constructor(
        private readonly reflector: Reflector,
        private  readonly _jwtService: JwtService
){}
canActivate(context: ExecutionContext): boolean |Promise<boolean> | Observable<boolean> {

    const necesitaProteccion = this.reflector.get("necesita proteccion", context.getHandler());

    console.log('necesitaProteccion', necesitaProteccion);
    //const request = context.switchToHttp().getRequest();
    //const jwt = request.headers.authentication;
    if (necesitaProteccion) {
        const request = context
            .switchToHttp()
            .getRequest();

        const jwt = request.headers.auth;
        console.log('jwt', jwt);

        if (jwt) {
            this._jwtService
                .verificarTokenSync(
                    jwt);
            //(error, data) => {
            //   if (error) {
            //      return false;
        } else {
            return true;
        }
    } else {
        return true
    }
}
}