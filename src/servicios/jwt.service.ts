import {Injectable, Post} from '@nestjs/common';

const jwtPaquete = require('jsonwebtoken');
@Injectable()
export  class JwtService {
    private readonly secreto = 'el sol no esta calentando';
    private readonly jwt = jwtPaquete;
    private readonly tiempoVidaToken = '30s';

    emitirToken(payload: any) {
        return this.jwt.sign({
            payload : payload
        }, this.secreto,
            {
                expiresIn:this.tiempoVidaToken,
            });
    }

    verificarToken(token: string, callback){
        this.jwt.verify(token, this.secreto, callback);
    }

    verificarTokenSync(token: string) {
        try {
            const tokenValido = this.jwt.verify(token, this.secreto);
            if (tokenValido) {
                return true;
            }
        } catch (e) {
            return false;
        }

    }
}

