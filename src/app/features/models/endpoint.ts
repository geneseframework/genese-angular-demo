import { TConstructor } from 'genese-angular';

export class Endpoint {
    path: string;
    restAction: RestAction;
    dataType: TConstructor<any>;

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

