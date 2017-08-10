import test from 'ava';
import * as sinon from 'sinon';
import { Person, Page  } from '../../model';
import { PersonAllByNameResource } from '../';

let sandbox = null;

test.beforeEach(() => {
    sandbox = sinon.sandbox.create();
});

test.afterEach.always(() => {
    sandbox.restore();
});

test.serial('find one object from the Repository', async t => {
        sandbox
            .stub(Person, 'findAll')
            .returns(Promise.resolve([{id: 'id001'}]));
        const persons = await Promise.resolve(new PersonAllByNameResource().findAllByName(<Page>{page: 0, size: 1}, 'id001'));
        t.is(persons.length, 1);
        
});