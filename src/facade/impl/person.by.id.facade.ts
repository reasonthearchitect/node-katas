import {  provideSingleton, inject } from '../../binding';
import { Person } from '../../model';
import { IPersonByIdFacade } from '../../facade';
import { PersonByIdResource, IPersonByIdResource } from '../../resource';

@provideSingleton(PersonByIdFacade)
export class PersonByIdFacade implements IPersonByIdFacade {

    public constructor(
        @inject(PersonByIdResource) private personByIdResource: IPersonByIdResource
    ) {}

    public async findById(id: String): Promise<Person> {
        return this.personByIdResource.findById(id);
    }

}
