import {BadRequestException, Body, Controller, Post} from '@nestjs/common';
import {JwtService} from '../servicios/jwt.service';
@Controller('auth')
export  class AuthController{
    //llamar a los servicios
    constructor(private _jwtService: JwtService){}

    @Post('login')
    login(
                        //es parametro body
      @Body('username') username: string,
      @Body('password') password: string) {
        const enviaUsername = username;
        const enviaPassword = password;
        const enviarParametros = enviaPassword && enviaUsername;
        if (enviarParametros) {
            if (username === 'andreavillacis' && password === '1234') {
                const payload = {
                    username: username
                };
                const respuetsaToken = {
                    jwt: this._jwtService.emitirToken(payload)
                };
                return respuetsaToken;
            } else {
                throw new BadRequestException({
                    mensaje: 'credenciales invalida'
                })
            }
        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }
    }

    @Post('verificarJWT')
    verificarJWT(
        @Body('jwt') jwt: string,
    ) {
        const tieneParametros = jwt;
        if (tieneParametros) {
            this._jwtService
                .verificarToken(
                    jwt,
                    (error, data) => {
                        if (error) {
                            throw new BadRequestException(
                                {
                                    mensaje: 'Jwt invalido',
                                    error: error
                                }
                            )
                        } else {
                            return {
                                mensaje: 'Ok',
                                data: data
                            }
                        }
                    }
                )
        } else {
            throw new BadRequestException(
                {
                    mensaje: 'No envia jwt'
                }
            )
        }

    }
}