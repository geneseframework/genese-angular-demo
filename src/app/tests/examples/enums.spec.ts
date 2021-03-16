import { TestMapper } from '../engine/test-mapper.model';

export enum ColorSpec {
    WHITE = 'White',
    BLACK = 'Black',
    RED = 'Red'
}

export class ColorClassSpec {
    color: ColorSpec;
}

export class ColorsClassSpec {
    colors: ColorSpec[];
}

// TODO : other cases with enums

export const enumTestMappers: TestMapper[] = [];
enumTestMappers.push(new TestMapper(`{color: 'White'} / ColorClassSpec`, ColorClassSpec, {color: 'White'}, {isolate: false}));
enumTestMappers.push(new TestMapper(`{color: ColorSpec.WHITE} / ColorClassSpec`, ColorClassSpec, {color: ColorSpec.WHITE}));
enumTestMappers.push(new TestMapper(`{color: 'Blue'} / ColorClassSpec / {}`, ColorClassSpec, {color: 'Blue'}, {expectedValue: {color: undefined}}));


enumTestMappers.push(new TestMapper(`{colors: ['White']} / ColorClassSpec`, ColorsClassSpec, {colors: ['White']}));
enumTestMappers.push(new TestMapper(`{colors: []} / ColorClassSpec / { colors: []}`, ColorsClassSpec, {colors: []}));
enumTestMappers.push(new TestMapper(`{colors: ['Blue']} / ColorClassSpec / {colors: [undefined]}`, ColorsClassSpec, {colors: ['Blue']}, {expectedValue: {colors: [undefined]}}));
enumTestMappers.push(new TestMapper(`{colors: [ColorSpec.WHITE]} / ColorClassSpec`, ColorsClassSpec, {colors: [ColorSpec.WHITE]}, {isolate: false}));
enumTestMappers.push(new TestMapper(`{colors: [ColorSpec.WHITE, ColorSpec.BLACK]} / ColorClassSpec`, ColorsClassSpec, {colors: [ColorSpec.WHITE, ColorSpec.BLACK]}, {isolate: false}));


enumTestMappers.push(new TestMapper(`'White' / ColorSpec`, 'ColorSpec', 'White'));
enumTestMappers.push(new TestMapper(`'Blue' / ColorSpec / undefined`, 'ColorSpec', 'Blue', {expectedValue: undefined}));
enumTestMappers.push(new TestMapper(`['White'] / ColorSpec[]`, 'ColorSpec[]', ['White']));
enumTestMappers.push(new TestMapper(`[] / ColorSpec[]`, 'ColorSpec[]', []));
enumTestMappers.push(new TestMapper(`['Blue'] / ColorSpec / undefined`, 'ColorSpec', ['Blue'], {expectedValue: undefined}));
enumTestMappers.push(new TestMapper(`[ColorSpec.WHITE, ColorSpec.BLACK] / ColorSpec`, 'ColorSpec[]', [ColorSpec.WHITE, ColorSpec.BLACK]));
