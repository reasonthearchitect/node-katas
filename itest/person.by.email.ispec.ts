import {tester} from 'graphql-tester';
import test from 'ava';
import { MockData } from '../src/binding';

const testURL = tester({
    url: 'http://localhost:3010/graphql'
});

test('findByEmail', async t => {
    await testURL('{personByEmail(email: "' + new MockData().getMockData().email + '") { id } }')
        .then((response) => {
            t.is(response.success, true);
            t.is(response.status, 200);
            t.true(response.data.personByEmail.id != null);
        });
});
