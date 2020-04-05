import { RequestMethod, TConstructor } from 'genese-angular';

export class Endpoint {
    path: string;
    restAction: RequestMethod;
    dataType: TConstructor<any>;

}

