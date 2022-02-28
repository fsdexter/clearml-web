/**
 * workers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.11
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface WorkersSetRuntimePropertiesResponse {
    /**
     * keys of runtime properties added to redis
     */
    added?: Array<string>;
    /**
     * keys of runtime properties removed from redis
     */
    removed?: Array<string>;
    /**
     * errors for keys failed to be added to redis
     */
    errors?: Array<string>;
}
