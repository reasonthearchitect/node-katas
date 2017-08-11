import {  provideSingleton, inject } from '../../binding';
import { Person } from '../../model';
import { IPersonByEmailFacade } from '../../facade';
import { PersonByEmailResource, IPersonByEmailResource } from '../../resource';

@provideSingleton(PersonByEmailFacade)
export class PersonByEmailFacade implements IPersonByEmailFacade {

    public constructor(
        @inject(PersonByEmailResource) private personByEmailResource: IPersonByEmailResource
    ) {}

    public async find(email: String): Promise<Person> {
        return this.personByEmailResource.find(email);
    }

}
