import { mapValues } from "../runtime";

/**
 *
 * @export
 * @interface AuthenticationRequest
 */
export interface AuthenticationRequest {
  /**
   * Email del usuario
   * @type {string}
   * @memberof AuthenticationRequest
   */
  email: string;
  /**
   * ContraseÃ±a de usuario
   * @type {string}
   * @memberof AuthenticationRequest
   */
  password: string;
}

/**
 * Check if a given object implements the AuthenticationRequest interface.
 */
export function instanceOfAuthenticationRequest(
  value: object
): value is AuthenticationRequest {
  if (!("email" in value) || value["email"] === undefined) return false;
  if (!("password" in value) || value["password"] === undefined) return false;
  return true;
}

export function AuthenticationRequestFromJSON(
  json: any
): AuthenticationRequest {
  return AuthenticationRequestFromJSONTyped(json, false);
}

export function AuthenticationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AuthenticationRequest {
  if (json == null) {
    return json;
  }
  return {
    email: json["email"],
    password: json["password"],
  };
}

export function AuthenticationRequestToJSON(
  value?: AuthenticationRequest | null
): any {
  if (value == null) {
    return value;
  }
  return {
    email: value["email"],
    password: value["password"],
  };
}
