import { GeneseService, TConstructor } from 'genese-angular';
import { Observable, of } from 'rxjs';
import { RequestOptions } from './request-options.model';
import { BookSchema } from './book.model';

export class Endpoint<T> {
    path: string;
    restAction: RestAction;
    dataType: TConstructor<T>;

    instance: (geneseService: GeneseService) => () => TConstructor<T>;
    // constructor(private geneseService: GeneseService) {
    // }

    // get(idOrPath: string, requestOptions?: RequestOptions): Observable<T> {
    // let response: Observable<T>;
    // if (!idOrPath || typeof idOrPath !== 'string') {
    //     console.error('No path : impossible to get elements');
    //     return of(undefined);
    // }
    // if (this.isPath(idOrPath)) {
    //     response = this.getOneCustom(idOrPath, requestOptions);
    // } else {
    //     response = this.getOne(idOrPath, requestOptions);
    // }
    // return this.geneseService.instance(this.dataType).get(idOrPath, requestOptions);
    // return response;
    // }

    // getOne(id: string, requestOptions?: RequestOptions): Observable<T> {
    //     this.checkId(id);
    // const url = this.apiRoot(this.getStandardPath(), id);
    // return this.http.get(url)
    //     .pipe(
    //         map((data: any) => {
    //             return this.geneseMapperServiceT.map(data);
    //         })
    //     );
    // }
    // apiRoot(path?: string, id?: string): string {
    //     const url = path ? this.geneseEnvironmentService.api + path : this.geneseEnvironmentService.api;
    //     return id ? `${url}/${id}` : url;
    // }

}

export enum RestAction {
    DELETE = 'delete',
    GET = 'get',
    PATCH = 'patch',
    POST = 'post',
    PUT = 'put'
}


export class OpenApiSchema {

    $ref?: string;
    additionalProperties?: boolean | OpenApiSchema;
    allOf?: OpenApiSchema[];
    anyOf?: OpenApiSchema[];
    default?: any;
    description?: string;
    enum?: any[];
    example?: any;
    exclusiveMaximum?: number;
    exclusiveMinimum?: number;
    format?: string;
    items?: OpenApiSchema;
    maximum?: number;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    minimum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    multipleOf?: number;
    not?: OpenApiSchema;
    oneOf?: OpenApiSchema[];
    pattern?: string;
    properties?: { [key: string]: OpenApiSchema};
    required?: string[];
    title?: string;
    type?: string;
    uniqueItems?: boolean;
}

