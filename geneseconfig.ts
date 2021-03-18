import { GeneseConfig } from '@genese/mapper/dist/create/models/genese-config.model';

export const geneseConfig: GeneseConfig = {
    mapper: {
        behavior: {
            differentiateStringsAndNumbers: true,
        },
        include: [
            "./backend/src/app/enums/category.ts"
        ],
        tsConfigs: [
            './tsconfig.old.json'
        ]
    }
}
