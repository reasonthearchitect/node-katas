import { Person, Page } from '../model';

export interface IPersonAllByNameFacade {
    findAllByName(page: Page, name: String): Promise<[Person]>;
}
