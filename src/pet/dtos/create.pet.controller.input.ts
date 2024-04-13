import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, MaxLength} from 'class-validator'

export default class CreatePetControllerInput {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'tamanho do pet'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'tipo do pet'})
    type: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'tamanho do pet'})
    size: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'genero do pet'})
    gender: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    @ApiProperty({description: 'Biografia do pet', maxLength: 1024})
    bio: string;
}