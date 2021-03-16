import { TESTS } from './tests.const';
import { expect } from './test-algo.service';
import { logg } from '../../utils/logger.util';


export async function startTests(): Promise<void> {
    const start = Date.now();
    logg('START TESTS');
    await expect(TESTS.list);
    logFailedTests();
    const duration: number = Date.now() - start;
    logg('\nTests passed : ', TESTS.testsPassed, 'green');
    logg('\nTests failed : ', TESTS.testsFailed, 'red');
    logg('\nDuration : ', `${duration} ms`, 'green');
}


function logFailedTests(): void {
    for (const failed of TESTS.failed) {
        logg('Failed => ', failed, 'red');
    }
}
