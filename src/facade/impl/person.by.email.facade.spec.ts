import 'reflect-metadata';
import test from 'ava';
import { PersonByEmailFacade } from '../../facade';
import { IPersonByEmailResource } from '../../resource';
import { Person } from '../../model';
import * as TypeMoq from 'typemoq';

test('Should save as input but return entity', async t => {
    let mockPersonByEmailResource = TypeMoq.Mock.ofType<IPersonByEmailResource>();
    mockPersonByEmailResource.setup(x => x.find(TypeMoq.It.isAny()))
        .returns(() => {
            return <any>Promise.resolve({
                id: 'id001'
            });
        });
    let facade = new PersonByEmailFacade(mockPersonByEmailResource.object);
    const result = await <any>Promise.resolve(facade.find("email@email.com"));
    t.is(result.id, 'id001');
});