import { Person, Page } from '../model';

export interface IPersonAllByNameResource {
    findAllByName(page: Page, name: String): Promise<[Person]>;
}
