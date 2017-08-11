import {  provideSingleton, inject } from '../../binding';
import { Person} from '../../model';
import { IPersonByEmailResource } from '../../resource';

@provideSingleton(PersonByEmailResource)
export class PersonByEmailResource implements IPersonByEmailResource {

    public constructor(
        
    ) {}

    public async find(email: String): Promise<Person> {  
       return new Promise < Person > ((resolve, reject) => { 
            Person
                .findOne({
                    where: { email: email }
                })
                .then(
                    (result) => resolve(<Person>result)
                );
            });
    }
}
