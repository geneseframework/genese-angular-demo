import { TestIt } from './test-it.model';
import { TestMapper } from './test-mapper.model';

export type TestType = TestMapper | TestIt;

export function isTestIt(testType: TestType): testType is TestIt {
    return testType.constructor.name === 'TestIt';
}
