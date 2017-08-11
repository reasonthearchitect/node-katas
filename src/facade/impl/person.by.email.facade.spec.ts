import test from 'ava';
import * as sinon from 'sinon';
import { Person  } from '../../model';

let sandbox = null;

test.beforeEach(() => {
    sandbox = sinon.sandbox.create();
});

test.afterEach.always(() => {
    sandbox.restore();
});