import test from 'ava';
import * as sinon from 'sinon';
import { Person } from '../../model';
import { PersonSaveResource, PersonByIdResource } from '../';

let sandbox = null;

test.beforeEach(() => {
    sandbox = sinon.sandbox.create();
});

test.afterEach.always(() => {
    sandbox.restore();
});

test.serial('make sure that create is called on the resource', async t => {
        sandbox
            .stub(Person , 'create')
            .returns(Promise.resolve({id: 'id001'}));
        const person = await Promise.resolve(new PersonSaveResource().save(<any>{}));
        t.is(person.id, 'id001');
});

test.serial('make sure that update is called on the resource', async t => {
        sandbox
            .stub(PersonByIdResource, 'findById')
            .returns(Promise.resolve({id: 'id001'}));
        sandbox
            .stub(Person, 'update')
            .returns(Promise.resolve({id: 'id001'}));
         sandbox
            .stub(Person, 'findOne')
            .returns(Promise.resolve({id: 'id001'}));
        const person = await Promise.resolve(new PersonSaveResource().save(<any>{id: 'id001'}));
        t.is(person.id, 'id001');
});