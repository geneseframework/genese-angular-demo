import { PrimitiveConstructor, PrimitiveType } from './primitives.type';
import { TConstructor } from './t-constructor.type';

export type ConstructorArray = (TConstructor<any> | PrimitiveConstructor | PrimitiveType | DateConstructor | 'Date')[];
