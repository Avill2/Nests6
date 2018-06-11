import {Injectable, Post} from '@nestjs/common';

const jwtPaquete = require('jsonwebtoken');
@Injectable()
export  class JwtService {
    private readonly secreto = 'el sol no esta calentando';
    private readonly jwt = jwtPaquete;
    private readonly tiempoVidaToken = Math.floor(Date.now() / 1000) + (60);

    emitirToken(payload: any) {
        return this.jwt.sign({
            exp: this.tiempoVidaToken,
            data: payload,
        }, this.secreto);
    }

    verificarToken(token: string, callback){
        this.jwt.verify(token, this.secreto, callback);
    }
}

