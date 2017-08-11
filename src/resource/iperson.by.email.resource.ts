import { Person } from '../model';

export interface IPersonByEmailResource {
    find(email: String): Promise<Person>;
}
