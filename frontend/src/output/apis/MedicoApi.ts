import * as runtime from "../runtime";
import type { MedicoRequest, PasswordRequest } from "../models/index";
import {
  MedicoRequestFromJSON,
  MedicoRequestToJSON,
  PasswordRequestFromJSON,
  PasswordRequestToJSON,
} from "../models/index";

export interface CrearMedicoRequest {
  medicoRequest: MedicoRequest;
}

export interface ModificarContraseniaMedicoRequest {
  passwordRequest: PasswordRequest;
}

export interface ModificarMedicoRequest {
  medicoRequest: MedicoRequest;
}

/**
 *
 */
export class MedicoApi extends runtime.BaseAPI {
  /**
   */
  async crearMedicoRaw(
    requestParameters: CrearMedicoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters["medicoRequest"] == null) {
      throw new runtime.RequiredError(
        "medicoRequest",
        'Required parameter "medicoRequest" was null or undefined when calling crearMedico().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("bearerAuth", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/medico/crear-medico`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: MedicoRequestToJSON(requestParameters["medicoRequest"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async crearMedico(
    requestParameters: CrearMedicoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<object> {
    const response = await this.crearMedicoRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async modificarContraseniaMedicoRaw(
    requestParameters: ModificarContraseniaMedicoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters["passwordRequest"] == null) {
      throw new runtime.RequiredError(
        "passwordRequest",
        'Required parameter "passwordRequest" was null or undefined when calling modificarContraseniaMedico().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("bearerAuth", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/medico/modificar-contrasenia-medico`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: PasswordRequestToJSON(requestParameters["passwordRequest"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async modificarContraseniaMedico(
    requestParameters: ModificarContraseniaMedicoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<object> {
    const response = await this.modificarContraseniaMedicoRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async modificarMedicoRaw(
    requestParameters: ModificarMedicoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters["medicoRequest"] == null) {
      throw new runtime.RequiredError(
        "medicoRequest",
        'Required parameter "medicoRequest" was null or undefined when calling modificarMedico().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("bearerAuth", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/medico/modificar-medico`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: MedicoRequestToJSON(requestParameters["medicoRequest"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async modificarMedico(
    requestParameters: ModificarMedicoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<object> {
    const response = await this.modificarMedicoRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
