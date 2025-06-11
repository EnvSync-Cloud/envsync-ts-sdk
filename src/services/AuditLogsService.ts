/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAuditLogsResponse } from '../models/GetAuditLogsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuditLogsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Audit Logs
     * Retrieve audit logs for the organization with pagination
     * @param page
     * @param perPage
     * @returns GetAuditLogsResponse Audit logs retrieved successfully
     * @throws ApiError
     */
    public getAuditLogs(
        page: string = '1',
        perPage: string = '20',
    ): CancelablePromise<GetAuditLogsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/audit_log',
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                500: `Internal server error`,
            },
        });
    }
}
