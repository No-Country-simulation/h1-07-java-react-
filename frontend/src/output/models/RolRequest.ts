/* tslint:disable */
/* eslint-disable */
/**
 * Justina Io
 * OpenApi documentaciÃ³n para app de justina
 *
 * The version of the OpenAPI document: 1.0
 * Contact: justina@ejemplo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RolRequest
 */
export interface RolRequest {
    /**
     * 
     * @type {string}
     * @memberof RolRequest
     */
    nombre: string;
}

/**
 * Check if a given object implements the RolRequest interface.
 */
export function instanceOfRolRequest(value: object): value is RolRequest {
    if (!('nombre' in value) || value['nombre'] === undefined) return false;
    return true;
}

export function RolRequestFromJSON(json: any): RolRequest {
    return RolRequestFromJSONTyped(json, false);
}

export function RolRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RolRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'nombre': json['nombre'],
    };
}

export function RolRequestToJSON(value?: RolRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nombre': value['nombre'],
    };
}

