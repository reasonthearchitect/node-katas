import {tester} from 'graphql-tester';
import test from 'ava';
import { MockData } from '../src/binding';

const testURL = tester({
    url: 'http://localhost:3010/graphql'
});

test('findAllByName', async t => {
    await testURL('{personAllByName(page: 0, size: 1, name: "' + new MockData().getMockData().name + '") { id } }')
        .then((response) => {
            t.is(response.success, true);
            t.is(response.status, 200);
            t.true(response.data.personAllByName.length > 0);
        });
});
