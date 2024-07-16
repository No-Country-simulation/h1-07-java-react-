

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthenticationResponse
 */
export interface AuthenticationResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    token?: string;
}

/**
 * Check if a given object implements the AuthenticationResponse interface.
 */
export function instanceOfAuthenticationResponse(value: object): value is AuthenticationResponse {
    return true;
}

export function AuthenticationResponseFromJSON(json: any): AuthenticationResponse {
    return AuthenticationResponseFromJSONTyped(json, false);
}

export function AuthenticationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function AuthenticationResponseToJSON(value?: AuthenticationResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

