'use strict';

const test = require('ava');
const normalize = require('../../lib/normalize/v2');

test('should support iterable set', t => {
    const decl = new Set();

    decl.add({
        block: 'block'
    });
    decl.add({
        block: 'block1',
        elem: 'elem'
    });

    t.deepEqual(normalize(decl), [
        { entity: { block: 'block' }, tech: null },
        { entity: { block: 'block1', elem: 'elem' }, tech: null }
    ]);
});
