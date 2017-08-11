import { Person } from '../model';

export interface IPersonByEmailFacade {
    find(email: String): Promise<Person>;
}
