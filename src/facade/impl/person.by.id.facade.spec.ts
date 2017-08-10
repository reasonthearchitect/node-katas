import 'reflect-metadata';
import test from 'ava';
import { PersonByIdFacade } from '../../facade';
import { IPersonByIdResource } from '../../resource';
import { Person } from '../../model';
import * as TypeMoq from 'typemoq';
const casual = require('casual');

test('Should save as input but return entity', async t => {
    let mockPersonByIdResource = TypeMoq.Mock.ofType<IPersonByIdResource>();
    mockPersonByIdResource.setup(x => x.findById(TypeMoq.It.isAny()))
        .returns(() => {
            return <any>Promise.resolve({
                id: 'id001'
            });
        });
    let facade = new PersonByIdFacade(mockPersonByIdResource.object);
    const result = await <any>Promise.resolve(facade.findById(casual.word));
    t.is(result.id, 'id001');
});