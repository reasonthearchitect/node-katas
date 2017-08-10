import { Person } from '../model';

export interface IPersonByIdResource {
    findById(id: String): Promise<Person>;
}
