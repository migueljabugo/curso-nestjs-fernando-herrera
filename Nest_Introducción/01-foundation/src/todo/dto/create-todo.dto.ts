import { IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

export class CreateTodoDto {

    @IsString()
    @IsNotEmpty()
    description: string;
}
