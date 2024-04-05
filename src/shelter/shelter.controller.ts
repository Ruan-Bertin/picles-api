import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import ShelterTokens from './shelter.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import GetShelterDetailsUseCaseOutput from './dtos/get.shelter.details.usecase.output';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';

@Controller('shelter')
export class ShelterController {
    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput>
    {
        return await this.getShelterDetailsUseCase.run(null)
    }

    @Patch()
    async updateShelterDetails(@Body()input: UpdateShelterControllerInput){
        console.log(input)
    }
    
}
