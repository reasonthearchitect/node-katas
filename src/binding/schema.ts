/* tslint:disable */
import { iocContainer } from '../binding';
import {PersonSaveFacade } from '../facade';
import {PersonByIdFacade} from '../facade';
import {PersonAllByNameFacade} from '../facade';
import {PersonByEmailFacade} from '../facade';

export class Schema {
    public static get definition(): string {
        return `
input PersonInput {
    id: String
    name: String!
    email: String
}

type Person {
    id: String!
    name: String!,
    email: String
}

type Query {
    personById(id: String!): Person
    personAllByName(page: Int!, size: Int!, name: String!): [Person]
    personByEmail(email: String!): Person
}

type Mutation {
    savePerson(input: PersonInput): Person
}
`;
    }

    public static get root(): any {
        return {
            personById: (args) => {
                return iocContainer.get<PersonByIdFacade>(PersonByIdFacade).findById(args.id);
            },
            personAllByName: (args) => {
                return iocContainer.get<PersonAllByNameFacade>(PersonAllByNameFacade).findAllByName({page: args.page, size: args.size}, args.name);
            },
            personByEmail: (args) => {
                return iocContainer.get<PersonByEmailFacade>(PersonByEmailFacade).findByEmail(args.email);
            },
            savePerson: function ({input}) {
                return iocContainer.get<PersonSaveFacade>(PersonSaveFacade).save(input);
            }
        };
    }
}
