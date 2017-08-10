import { Person } from '../model';

export interface IPersonByEmailResource {
    findByEmail(email: String): Promise<Person>;
}
