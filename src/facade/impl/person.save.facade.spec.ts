import 'reflect-metadata';
import test from 'ava';
import { PersonSaveFacade } from '../../facade';
import { IPersonSaveResource } from '../../resource';
import {Person} from '../../model';
import * as TypeMoq from 'typemoq';
const casual = require('casual');

test('Should save as input but return entity', async t => {

    let mockPersonSaveResource = TypeMoq.Mock.ofType<IPersonSaveResource>();
    mockPersonSaveResource.setup(x => x.save(TypeMoq.It.isAny()))
        .returns(() => {
            return <any>Promise.resolve({
                id: 'id001'
            });
        });
    let facade = new PersonSaveFacade(mockPersonSaveResource.object);
    const taco = await <any>Promise.resolve(facade.save({
                id: 'id001',
                name: casual.word,
                email: casual.word,
            }));
    t.is(taco.id, 'id001');
});