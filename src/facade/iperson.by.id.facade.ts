import { Person } from '../model';

export interface IPersonByIdFacade {
    findById(id: String): Promise<Person>;
}
