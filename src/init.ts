import { InitService } from '@genese/creator/dist/init/services/init.service';

async function init() {
    await InitService.start();
}

init();
