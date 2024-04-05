import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "../dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Abrigo Bigo',
            shelterEmail: 'ab@gmail.com',
            shelterPhone: '19981281830',
            shelterWhatsApp: '19981281830',
            createdAt: new Date(),
            updateAt: new Date()
        }))
    }
}