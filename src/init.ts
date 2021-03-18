import { InitService } from '@genese/mapper/dist/init/services/init.service';

async function init() {
    await InitService.start();
}

init();
