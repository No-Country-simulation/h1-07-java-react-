import { AuthenticationRequest, AuthenticationResponse } from "../Interfaces/interfaces";

const BASE_URL = "https://97de-181-168-133-217.ngrok-free.app/api";

const getToken = async (email: string, password: string): Promise<string> => {
  const payload = { email, password };
  const response = await fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Error obtaining token");
  }

  const data = await response.json();
  if (!data.token) {
    throw new Error("Token is undefined");
  }

  return data.token;
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
  let token: string;

  try {
    token = await getToken(email, password);
  } catch (error) {
    throw new Error("Failed to get token: " + (error as Error).message);
  }

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
