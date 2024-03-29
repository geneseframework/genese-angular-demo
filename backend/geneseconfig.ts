import { GeneseConfig } from '@genese/mapper/dist/create/models/genese-config.model';

export const geneseConfig: GeneseConfig = {
    mapper: {
        behavior: {
            castStringsAndNumbers: true,
        },
        include: [],
        tsConfigs: [
            './tsconfig.json'
        ]
    }
}
