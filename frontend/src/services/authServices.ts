import jwt from "jsonwebtoken";
import { AuthenticationRequest, AuthenticationResponse } from "../output";


const BASE_URL = "https://97de-181-168-133-217.ngrok-free.app/swagger-ui/index.html#/";

const SECRET_KEY = "your_secret_key"; 

const getToken = async (email: string, password: string): Promise<string> => {
  const payload = { email, password };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

const AuthenticationRequestToJSON = (
  request: AuthenticationRequest
): string => {
  return JSON.stringify(request);
};

const AuthenticationResponseFromJSON = (json: any): AuthenticationResponse => {
  return json as AuthenticationResponse;
};

export const autenticar = async (requestParameters: {
  authenticationRequest: AuthenticationRequest;
}): Promise<AuthenticationResponse> => {
  if (!requestParameters.authenticationRequest) {
    throw new Error(
      'Required parameter "authenticationRequest" was null or undefined when calling autenticar.'
    );
  }

  const { email, password } = requestParameters.authenticationRequest;
  const token = await getToken(email, password);

  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(`${BASE_URL}/auth/autenticar`, {
    method: "POST",
    headers,
    body: AuthenticationRequestToJSON(requestParameters.authenticationRequest),
  });

  if (!response.ok) {
    throw new Error("Error during authentication");
  }

  return AuthenticationResponseFromJSON(await response.json());
};
