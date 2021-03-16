import { TestMapper } from '../engine/test-mapper.model';

export const warningTestMappers: TestMapper[] = [];


// ----------------------------------------------   Warnings   ----------------------------------------------------


warningTestMappers.push(new TestMapper(`'blue' / ThrowWarning`,`throw warning`, 'blue', {isolate: false}));
warningTestMappers.push(new TestMapper(`'blue' / ThrowWarning & setToUndefined`,`throw warning`, 'blue', {expectedValue: undefined, createOptions: {throwTarget: {setToUndefined: true}}, isolate: false}));

export type NonReadableType<T> = T extends string ? number : boolean;

export class WarningSpec {
    name: NonReadableType<any>;
}

// primitiveTestMappers.push(new TestMapper(`'blue' / WarningSpec`, WarningSpec, {name: 'a'}, {expectedValue: undefined, createOptions: {throwTarget: {setToUndefined: true}}, isolate: false}));

