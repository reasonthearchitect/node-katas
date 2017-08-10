import * as _ from 'lodash';
import uuid = require('uuid/v4.js');
import { provideSingleton } from '../../binding';
import { PersonInput, Person } from '../../model';
import { IPersonSaveResource } from '../../resource';
import { PersonByIdResource } from '../';

@provideSingleton(PersonSaveResource)
export class PersonSaveResource implements IPersonSaveResource {
    
    public async save(input: PersonInput) : Promise<Person> {
        if (input.id) {
            return this.update(input);
        } else {
            return this.create(input);
        }
    }

    public async create(input: PersonInput): Promise<Person> {
        return new Promise < Person > ((resolve, reject) => {
            Person
            .create<Person>(
                _.merge(
                    {},
                    input,
                    {
                        id: uuid()
                    }
                )
            )
            .then(
                (result) => resolve(result)
            );
        });
    }

    public async update(input: PersonInput): Promise<Person> {
        return new Promise < Person > ((resolve, reject) => {
            Person
            .update<Person>(input, { where: { id: input.id }})
            .then(
                (result) => resolve(new PersonByIdResource().findById(input.id))
            );
        });
    }
}
