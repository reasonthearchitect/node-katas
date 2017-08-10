import {  provideSingleton, inject } from '../../binding';
import { Person, Page} from '../../model';
import { IPersonAllByNameResource } from '../../resource';

@provideSingleton(PersonAllByNameResource)
export class PersonAllByNameResource implements IPersonAllByNameResource {

    public constructor(
        
    ) {}

    public async findAllByName(page: Page, name: String): Promise<[Person]> {  
       return new Promise<any> ((resolve, reject) => {   
            Person
                .findAll({
                    offset: page.page, 
                    limit: page.size,
                    where: { name: name }
                })
                .then(
                    (result) => resolve(<Person[]>result)
                );
        });
    }
}
