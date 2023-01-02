import { IsString,  IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validator/email.validator";

// Criando um tipo que será usado nos controllers e que será validado
export class CriaUsuarioDTO {

    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined, {message: 'O email informado é inválido'})
    @EmailEhUnico({ message: "Já existe um usuário com este email"})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}