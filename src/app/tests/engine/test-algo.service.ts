import { TESTS } from './tests.const';
import { isTestIt, TestType } from './test-type.type';
import { isArray } from '../../utils/arrays.util';
import { Mapper } from '@genese/creator/dist/src/create/models/mapper';
import { logg } from '../../utils/logger.util';
import { isSameObject } from '@genese/creator/dist/src/create/utils/native/is-same-object.util';

const MAX_DURATION = 50;

export async function expect(testTypes: TestType[], logPassed: boolean, old: boolean): Promise<void>
export async function expect(testType: TestType, logPassed: boolean, old: boolean): Promise<void>
export async function expect(testTypes: TestType | TestType[], logPassed: boolean, old: boolean): Promise<void> {
    if (isArray(testTypes)) {
        for (const testMapper of includedTestTypes(testTypes)) {
            await checkTest(testMapper, logPassed, old);
        }
    } else {
        await checkTest(testTypes, logPassed, old);
    }
}


async function checkTest(testType: TestType, logPassed: boolean, old: boolean): Promise<void> {
    let result;
    const start = Date.now();
    if (isTestIt(testType)) {
        result = await testType.method(testType.data);
    } else {
        result = await Mapper.create(testType.mapParameter, testType.data, testType.options?.createOptions);
    }
    const duration: number = Date.now() - start;
    if ((isExpectedResult(testType, result) && !isTooLong(duration)) || shouldFail(testType)) {
        if (logPassed) {
            logg(`Test passed (${duration} ms) : `, testType.title);
        }
        TESTS.testsPassed++;
        if (testType.options?.log) {
            log(testType, result);
        }
    } else {
        if (isTooLong(duration)) {
            logg(`Test failed (too long time : ${duration} ms)`, testType.title);
        } else {
            logg('Test failed : ', testType.title);
        }
        TESTS.testsFailed++;
        TESTS.failed.push(`${testType.title} (${duration} ms)`);
        log(testType, result);
    }
}


function isTooLong(duration: number): boolean {
    return duration > MAX_DURATION;
}


function shouldFail(testType: TestType): boolean {
    return testType.options?.shouldFail;
}


function includedTestTypes(testTypes: TestType[]): TestType[] {
    const includedMappers: TestType[] = testTypes.filter(t => t.options?.isolate === true);
    return includedMappers.length > 0 ? includedMappers : testTypes;
}


function isExpectedResult(testType: TestType, result: any): boolean {
    const objectToCompare: any = isTestIt(testType) ? testType.expected : testType.options?.hasOwnProperty('expectedValue') ? testType.options.expectedValue : testType.data;
    return isSameObject(result, objectToCompare);
}


function log(testType: TestType, result: any): void {
    if (isTestIt(testType)) {
        logg('expected : ', testType.expected);
    } else {
        logg('data : ', testType.data);
    }
    logg('response : ', result);
    if (testType.options?.hasOwnProperty('expectedValue')) {
        logg('expected value : ', testType.options.expectedValue);
    }
}
