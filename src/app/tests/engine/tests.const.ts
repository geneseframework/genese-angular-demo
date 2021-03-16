import { primitiveTestMappers } from '../examples/primitives.spec';
import { classTestMappers } from '../examples/classes.spec';
import { dateTestMappers } from '../examples/dates.spec';
import { enumTestMappers } from '../examples/enums.spec';
import { genericTestMappers } from '../examples/generics.spec';
import { interfaceTestMappers } from '../examples/interfaces.spec';
import { objectTestMappers } from '../examples/objects.spec';
import { tupleTestMappers } from '../examples/tuple.spec';
import { typeTestMappers } from '../examples/types.spec';
import { warningTestMappers } from '../examples/warnings.spec';
import { flat } from '../../utils/arrays.util';

export const TESTS = {
    failed: [],
    list: flat([
        classTestMappers,
        dateTestMappers,
        enumTestMappers,
        genericTestMappers,
        interfaceTestMappers,
        objectTestMappers,
        primitiveTestMappers,
        tupleTestMappers,
        typeTestMappers,
        warningTestMappers
    ]),
    its: [],
    testMappers: [],
    testsFailed: 0,
    testsPassed: 0,
}
