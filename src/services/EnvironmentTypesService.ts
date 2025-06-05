/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvTypeResponse } from '../models/EnvTypeResponse';
import type { EnvTypesResponse } from '../models/EnvTypesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Environment Types
     * Retrieve all environment types for the organization
     * @returns EnvTypesResponse Environment types retrieved successfully
     * @throws ApiError
     */
    public getEnvTypes(): CancelablePromise<EnvTypesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/env_type',
            errors: {
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get Environment Type
     * Retrieve a specific environment type
     * @param id
     * @returns EnvTypeResponse Environment type retrieved successfully
     * @throws ApiError
     */
    public getEnvType(
        id: string,
    ): CancelablePromise<EnvTypeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/env_type/{id}',
            path: {
                'id': id,
            },
            errors: {
                500: `Internal server error`,
            },
        });
    }
}
