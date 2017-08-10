import test from 'ava';
import * as sinon from 'sinon';
import { Person  } from '../../model';
import { PersonByIdResource } from '../';

let sandbox = null;

test.beforeEach(() => {
    sandbox = sinon.sandbox.create();
});

test.afterEach.always(() => {
    sandbox.restore();
});

test.serial('find one object from the Repository', async t => {
        sandbox
            .stub(Person, 'findOne')
            .returns(Promise.resolve({id: 'id001'}));
        const person = await Promise.resolve(new PersonByIdResource().findById('id001'));
        t.is(person.id, 'id001'); 
});