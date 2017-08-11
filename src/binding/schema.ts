/* tslint:disable */
import { iocContainer } from '../binding';
import {PersonByEmailFacade} from '../facade';

export class Schema {
    public static get definition(): string {
        return `
type Person {
    id: String!
    email: String!
}

type Query {
    personByEmail(email: String!): Person
}
`;
    }

    public static get root(): any {
        return {
            personByEmail: (args) => {
                return iocContainer.get<PersonByEmailFacade>(PersonByEmailFacade).find(args.email);
            }
        };
    }
}
