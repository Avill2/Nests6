import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class UsuarioPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata){
        const schema = Joi.object().keys({
            nombre: Joi.string().alphanum().min(3).max(30).required(),
            apellido: Joi.string().alphanum().min(3).max(30).required(),
            edad: Joi.number.integer().number.greater(0).number.less(150),
        }).with('username', 'birthyear').without('password', 'access_token');
}
}
