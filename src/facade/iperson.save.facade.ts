import { Person, PersonInput } from '../model';

export interface IPersonSaveFacade {
    save(input: PersonInput): Promise<Person>;
}
