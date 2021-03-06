'use strict';

const test = require('ava');
const normalize = require('../../lib/normalize/v2');

test('should support mod and mods without block, elem', t => {
    const decl = [
        { mod: 'mod', val: 'val' },
        { mods: { mod1: 'val1' } }
    ];

    t.deepEqual(normalize(decl), [
        { entity: { block: null, modName: 'mod', modVal: true }, tech: null },
        { entity: { block: null, modName: 'mod', modVal: 'val' }, tech: null },
        { entity: { block: null }, tech: null },
        { entity: { block: null, modName: 'mod1', modVal: true }, tech: null },
        { entity: { block: null, modName: 'mod1', modVal: 'val1' }, tech: null }
    ]);
});

test('should support mod without block & elem', t => {
    const decl = { mod: 'mod', val: 'val' };

    t.deepEqual(normalize(decl), [
        { entity: { block: null, modName: 'mod', modVal: true }, tech: null },
        { entity: { block: null, modName: 'mod', modVal: 'val' }, tech: null }
    ]);
});

test('should support mods without block & elem', t => {
    const decl = { mods: { mod: 'val' } };

    t.deepEqual(normalize(decl), [
        { entity: { block: null }, tech: null },
        { entity: { block: null, modName: 'mod', modVal: true }, tech: null },
        { entity: { block: null, modName: 'mod', modVal: 'val' }, tech: null }
    ]);
});

test('should support only vals', t => {
    const decl = { val: 'val' };

    t.deepEqual(normalize(decl), [
        { entity: { block: null, modName: null, modVal: true }, tech: null },
        { entity: { block: null, modName: null, modVal: 'val' }, tech: null }
    ]);
});
