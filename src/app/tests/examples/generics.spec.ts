import { TestMapper } from '../engine/test-mapper.model';

export const genericTestMappers: TestMapper[] = [];


// -------------------------------------------   Class with Generic   -----------------------------------------------------


export class TClass<T> {
    name: string;
}

genericTestMappers.push(new TestMapper(`{name: 'a'} / TClass<T>`, 'TClass<T>', {name: 'a'}, {isolate: false}));
genericTestMappers.push(new TestMapper(`'a' / TClass<T> / undefined`, 'TClass<T>', 'a', {expectedValue: undefined, isolate: false}));


// -----------------------------------------   Interface with Generic   ---------------------------------------------------


export class TInterface<T> {
    name: string;
}

genericTestMappers.push(new TestMapper(`{name: 'a'} / TInterface<T>`, 'TInterface<T>', {name: 'a'}, {isolate: false}));
genericTestMappers.push(new TestMapper(`'a' / TInterface<T> / undefined`, 'TInterface<T>', 'a', {expectedValue: undefined, isolate: false}));



// ---------------------------------------   Type with Generic extends   --------------------------------------------------


export type TExtends<T extends string> = T extends string ? string : boolean;

// primitiveTestMappers.push(new TestMapper(`'a' / TExtends<string>`, 'TExtends<string>', 'a', {isolate: false}));
// primitiveTestMappers.push(new TestMapper(`2 / TExtends<string> / undefined`, 'TExtends<string>', 2, {expectedValue: undefined, isolate: false}));

