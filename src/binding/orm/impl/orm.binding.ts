import { provideSingleton } from '../../ioc';
import { Sequelize } from 'sequelize-typescript';
import { Person } from '../../../model';
import { IORMBinding } from '../iorm.binding';
import { ORM_CONFIG } from '../orm.config';
import uuid = require('uuid/v4.js');
import casual = require ('casual');
import * as _ from 'lodash';
import { MockData } from '../../../binding';

@provideSingleton(ORMBinding)
export class ORMBinding implements IORMBinding {
    connection: Sequelize;

    public constructor() {
        this.connection = new Sequelize(ORM_CONFIG as any);
        this.connection.addModels([Person]);
    }

    public getConnection(): Sequelize {
        return this.connection;
    }

    public loadData() {
        Person
            .create<Person>(
                _.merge(
                    {},
                    new MockData().getMockData(),
                    {
                        id: uuid()
                    }
                )
            );
    }
}
