import {  provideSingleton, inject } from '../../binding';
import { Person, PersonInput} from '../../model';
import { IPersonSaveFacade } from '../../facade';
import { IPersonSaveResource, PersonSaveResource } from '../../resource';

@provideSingleton(PersonSaveFacade)
export class PersonSaveFacade implements IPersonSaveFacade {

    public constructor(
        @inject(PersonSaveResource) private personSaveResource: IPersonSaveResource
    ) {}

    public async save(input: PersonInput): Promise<Person> {
        return this.personSaveResource.save(input);
    }
}
