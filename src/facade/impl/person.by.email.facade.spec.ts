import 'reflect-metadata';
import test from 'ava';
import { PersonByEmailFacade } from '../../facade';
import { IPersonByEmailResource } from '../../resource';
import { Person } from '../../model';
import * as TypeMoq from 'typemoq';
const casual = require('casual');

test('Should save as input but return entity', async t => {
    let mockPersonByEmailResource = TypeMoq.Mock.ofType<IPersonByEmailResource>();
    mockPersonByEmailResource.setup(x => x.findByEmail(TypeMoq.It.isAny()))
        .returns(() => {
            return <any>Promise.resolve({
                id: 'id001'
            });
        });
    let facade = new PersonByEmailFacade(mockPersonByEmailResource.object);
    const result = await <any>Promise.resolve(facade.findByEmail(casual.word));
    t.is(result.id, 'id001');
});