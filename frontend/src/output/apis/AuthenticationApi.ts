import { AuthenticationResponse } from "../models/index";

import {
  AuthenticationRequestToJSON,
  AuthenticationResponseFromJSON,
  RegistrationRequestToJSON,
} from "../models/index";

import {
  AutenticarRequest,
  ConfirmarMailRequest,
  RegistrarRequest,
} from "../../Interfaces/interfaces";

const BASE_URL = "https://inventario-nocontry-s12-23.onrender.com/api/auth";

export class AuthenticationApi {
  async autenticar(
    requestParameters: AutenticarRequest
  ): Promise<AuthenticationResponse> {
    if (!requestParameters.authenticationRequest) {
      throw new Error(
        'Required parameter "authenticationRequest" was null or undefined when calling autenticar.'
      );
    }

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${await this.getToken()}`,
    });

    const response = await fetch(`${BASE_URL}/autenticar`, {
      method: "POST",
      headers,
      body: JSON.stringify(
        AuthenticationRequestToJSON(requestParameters.authenticationRequest)
      ),
    });

    if (!response.ok) {
      throw new Error("Error during authentication");
    }

    return AuthenticationResponseFromJSON(await response.json());
  }

  async confirmarMail(requestParameters: ConfirmarMailRequest): Promise<void> {
    if (!requestParameters.token) {
      throw new Error(
        'Required parameter "token" was null or undefined when calling confirmarMail.'
      );
    }

    const headers = new Headers({
      Authorization: `Bearer ${await this.getToken()}`,
    });

    const response = await fetch(
      `${BASE_URL}/activar-cuenta?token=${requestParameters.token}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error("Error during email confirmation");
    }
  }

  async registrar(requestParameters: RegistrarRequest): Promise<object> {
    if (!requestParameters.registrationRequest) {
      throw new Error(
        'Required parameter "registrationRequest" was null or undefined when calling registrar.'
      );
    }

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${await this.getToken()}`,
    });

    const response = await fetch(`${BASE_URL}/registrar`, {
      method: "POST",
      headers,
      body: JSON.stringify(
        RegistrationRequestToJSON(requestParameters.registrationRequest)
      ),
    });

    if (!response.ok) {
      throw new Error("Error during registration");
    }

    return await response.json();
  }

  private async getToken(): Promise<string> {
    // Aquí deberías obtener el token de alguna manera, por ejemplo desde el almacenamiento local o un contexto de React.
    return "your-access-token"; // Reemplaza con tu lógica para obtener el token.
  }
}
