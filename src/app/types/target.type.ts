import { ConstructorArray } from './constructor-array.type';
import { TConstructor } from './t-constructor.type';

export type Target<T> = TConstructor<T> | ConstructorArray | DateConstructor| string ;
