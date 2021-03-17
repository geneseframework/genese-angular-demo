import { TestMapper } from '../engine/test-mapper.model';

export const primitiveTestMappers: TestMapper[] = [];


// ----------------------------------------------   Strings Literals   ----------------------------------------------------


primitiveTestMappers.push(new TestMapper(`'blue' / 'blue'`,`'blue'`, 'blue', {isolate: false}));
primitiveTestMappers.push(new TestMapper(`'blue' / 'red'`,`'blue'`, 'red', {expectedValue: undefined}));


// --------------------------------------------------   Strings   ---------------------------------------------------------


primitiveTestMappers.push(new TestMapper(`'blue' / string`, 'string','blue', {isolate: false}));
primitiveTestMappers.push(new TestMapper(`undefined / string`, 'string',undefined));
primitiveTestMappers.push(new TestMapper(`null / string`, 'string',null));
primitiveTestMappers.push(new TestMapper(`2 / string / undefined`, 'string',2, {expectedValue: undefined, isolate: false}));
primitiveTestMappers.push(new TestMapper(`2 / string & !differentiate / '2'`, 'string',2, {expectedValue: '2', createOptions: {differentiateStringsAndNumbers: true}}));

primitiveTestMappers.push(new TestMapper(`'blue' / string`, String,'blue'));


// --------------------------------------------------   Numbers   ---------------------------------------------------------


primitiveTestMappers.push(new TestMapper(`2 / number`, 'number',2));
primitiveTestMappers.push(new TestMapper(`'2' / number / undefined`, 'number','2', {expectedValue: undefined}));
primitiveTestMappers.push(new TestMapper(`'2' / number & !differentiate / 2`, 'number','2', {expectedValue: 2, createOptions: {differentiateStringsAndNumbers: false}}));
primitiveTestMappers.push(new TestMapper(`'a' / number & !differentiate / NaN`, 'number','a', {expectedValue: NaN, createOptions: {differentiateStringsAndNumbers: false}}));
primitiveTestMappers.push(new TestMapper(`undefined / number`, 'number',undefined));
primitiveTestMappers.push(new TestMapper(`2 / number / undefined`, 'number','blue', {expectedValue: undefined}));

primitiveTestMappers.push(new TestMapper(`2 / Number`, Number,2));

// -------------------------------------------------   Booleans   ---------------------------------------------------------

primitiveTestMappers.push(new TestMapper(`true / boolean`, 'boolean',true));
primitiveTestMappers.push(new TestMapper(`undefined / boolean`, 'boolean',undefined));
primitiveTestMappers.push(new TestMapper(`2 / boolean / undefined`, 'boolean','blue', {expectedValue: undefined}));

// ------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------   Arrays   ---------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------


// --------------------------------------------------   Strings   ---------------------------------------------------------


primitiveTestMappers.push(new TestMapper(`['blue'] / string[]`, 'string[]',['blue']));
primitiveTestMappers.push(new TestMapper(`['blue', 'white'] / string[]`, 'string[]',['blue', 'white']));
primitiveTestMappers.push(new TestMapper(`['blue', 2] / string[] / ['blue']`, 'string[]',['blue', 2], {expectedValue: ['blue', undefined], isolate: false}));
primitiveTestMappers.push(new TestMapper(`undefined / string[]`, 'string[]',undefined));
primitiveTestMappers.push(new TestMapper(`'blue' / string[] / undefined`, 'string[]','blue', {expectedValue: undefined}));
primitiveTestMappers.push(new TestMapper(`[2] / string[] / []`, 'string[]',[2], {expectedValue: [undefined]}));
primitiveTestMappers.push(new TestMapper(`[2] / string[] && !differentiate / ['2']`, 'string[]',[2], {expectedValue: ['2'], createOptions: {differentiateStringsAndNumbers: false}}));
primitiveTestMappers.push(new TestMapper(`[] / string[] / []`, 'string[]',[]));
primitiveTestMappers.push(new TestMapper(`[{}] / string[] / [{}]`, 'string[]',[{}], {expectedValue: [undefined]}));
primitiveTestMappers.push(new TestMapper(`[{}] / string[] / [['a']]`, 'string[]',[['a']], {expectedValue: [undefined]}));
primitiveTestMappers.push(new TestMapper(`[undefined] / string[] / [undefined]`, 'string[]',[undefined], {expectedValue: [undefined]}));
primitiveTestMappers.push(new TestMapper(`[null] / string[] / [null]`, 'string[]',[null], {expectedValue: [null]}));


// --------------------------------------------------   Numbers   ---------------------------------------------------------


primitiveTestMappers.push(new TestMapper(`[2] / number[]`, 'number[]',[2]));
primitiveTestMappers.push(new TestMapper(`['2'] / number[] && !differentiate / [2]`, 'number[]',['2'], {expectedValue: [2], createOptions: {differentiateStringsAndNumbers: false}}));
primitiveTestMappers.push(new TestMapper(`['2'] / [Number] && !differentiate / [2]`, [Number],['2'], {expectedValue: [2], createOptions: {differentiateStringsAndNumbers: false}}));


// --------------------------------------------------   Booleans   ---------------------------------------------------------


primitiveTestMappers.push(new TestMapper(`[true] / boolean[]`, 'boolean[]',[true]));
primitiveTestMappers.push(new TestMapper(`['true'] / boolean[] / [true]`, 'boolean[]',['true'], {expectedValue: [undefined]}));
