import 'reflect-metadata';
import test from 'ava';
import * as sinon from 'sinon';
import { PersonByEmailFacade } from '../../facade';
import { PersonByEmailResource } from '../../resource';
import { Person } from '../../model';

test('Should save as input but return entity', async t => {

    const resource = new PersonByEmailResource();
    sinon
        .stub(resource, 'find')
        .returns(Promise.resolve({id: '123'}));
    const result = await <any>Promise.resolve(new PersonByEmailFacade(resource).find("email@email.com"));
    t.is(result.id, '123');
});