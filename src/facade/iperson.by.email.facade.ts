import { Person } from '../model';

export interface IPersonByEmailFacade {
    findByEmail(email: String): Promise<Person>;
}
