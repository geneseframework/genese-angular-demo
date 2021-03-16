import { TestMapper } from '../engine/test-mapper.model';

export const objectTestMappers: TestMapper[] = [];

// --------------------------------------------   Objects (not arrays)   --------------------------------------------------

objectTestMappers.push(new TestMapper(`{color: 'blue'} / object`, 'object',{color: 'blue'}, {isolate: false}));
objectTestMappers.push(new TestMapper(`{color: 'blue'} / 'Object'`, 'Object',{color: 'blue'}, {isolate: false}));
objectTestMappers.push(new TestMapper(`{color: null} / 'Object'`, 'Object',{color: null}, {isolate: false}));
objectTestMappers.push(new TestMapper(`{color: undefined} / 'Object'`, 'Object',{color: undefined}, {isolate: false}));
objectTestMappers.push(new TestMapper(`'blue' / object / undefined`, 'object','blue', {expectedValue: undefined, isolate: false}));
objectTestMappers.push(new TestMapper(`[{color: 'blue'}] / object / undefined`, 'object',[{color: 'blue'}], {isolate: false}));
objectTestMappers.push(new TestMapper(`null / object / null`, 'object',null, {isolate: false}));
objectTestMappers.push(new TestMapper(`undefined / object / undefined`, 'object',undefined, {expectedValue: undefined, isolate: false}));


// --------------------------------------------   ObjectConstructor   --------------------------------------------------


objectTestMappers.push(new TestMapper(`{color: 'blue'} / ObjectConstructor`, Object,{color: 'blue'}, {isolate: false}));


// ---------------------------------------------   Arrays of objects   ----------------------------------------------------


objectTestMappers.push(new TestMapper(`{color: 'blue'} / object[]`, 'object[]',[{color: 'blue'}], {isolate: false}));
objectTestMappers.push(new TestMapper(`[{}] / object[]`, 'object[]',[{}], {isolate: false}));
objectTestMappers.push(new TestMapper(`[[{}]] / object[]`, 'object[]',[[{}]], {isolate: false}));

objectTestMappers.push(new TestMapper(`[{color: 'blue'}] / [Object]`, [Object],[{color: 'blue'}], {isolate: false}));
objectTestMappers.push(new TestMapper(`'a' / [Object]`, [Object],'a', {expectedValue: undefined, isolate: false}));
objectTestMappers.push(new TestMapper(`['a'] / [Object]`, [Object],['a'], {expectedValue: [undefined], isolate: false}));
objectTestMappers.push(new TestMapper(`{element: ['a']} / [Object]`, [Object],{element: ['a']}, {expectedValue: undefined, isolate: false}));

