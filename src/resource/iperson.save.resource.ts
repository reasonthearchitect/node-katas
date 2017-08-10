import { Person, PersonInput } from '../model';

export interface IPersonSaveResource {
    save(input: PersonInput): Promise<Person>;
}
