import 'reflect-metadata';
import test from 'ava';
import { PersonAllByNameFacade } from '../../facade';
import { IPersonAllByNameResource } from '../../resource';
import { Person, Page } from '../../model';
import * as TypeMoq from 'typemoq';
const casual = require('casual');

test('Should save as input but return entity', async t => {
    let mockPersonAllByNameResource = TypeMoq.Mock.ofType<IPersonAllByNameResource>();
    mockPersonAllByNameResource.setup(x => x.findAllByName(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
        .returns(() => {
            return <any>Promise.resolve([{
                id: 'id001'
            }]);
        });
    let facade = new PersonAllByNameFacade(mockPersonAllByNameResource.object);
    const result = await <any>Promise.resolve(facade.findAllByName({page:0, size: 1}, casual.word));
    t.is(result[0].id, 'id001');
});