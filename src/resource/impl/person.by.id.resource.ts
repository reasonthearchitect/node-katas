import {  provideSingleton, inject } from '../../binding';
import { Person} from '../../model';
import { IPersonByIdResource } from '../../resource';

@provideSingleton(PersonByIdResource)
export class PersonByIdResource implements IPersonByIdResource {

    public constructor(
        
    ) {}

    public async findById(id: String): Promise<Person> {  
       return new Promise < Person > ((resolve, reject) => {
            Person
            .findOne({
                    where: { id: id }
            })
            .then(
                (result) => resolve(<Person>result)
            )
        });
    }
}
