import {  provideSingleton, inject } from '../../binding';
import { Person, Page } from '../../model';
import { IPersonAllByNameFacade } from '../../facade';
import { PersonAllByNameResource, IPersonAllByNameResource } from '../../resource';

@provideSingleton(PersonAllByNameFacade)
export class PersonAllByNameFacade implements IPersonAllByNameFacade {

    public constructor(
        @inject(PersonAllByNameResource) private personAllByNameResource: IPersonAllByNameResource
    ) {}

    public async findAllByName(page: Page, name: String): Promise<[Person]> {
        return this.personAllByNameResource.findAllByName(page, name);
    }

}
