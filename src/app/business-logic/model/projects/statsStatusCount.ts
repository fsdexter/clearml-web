/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { StatsStatusCountStatusCount } from '././statsStatusCountStatusCount';


export interface StatsStatusCount {
    /**
     * Total run time of all tasks in project (in seconds)
     */
    completed_tasks?: number;
    running_tasks?: number;
    total_tasks?: number;
    total_runtime?: number;
    status_count?: StatsStatusCountStatusCount;
}
