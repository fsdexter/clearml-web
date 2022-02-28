/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.13
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface ViewEntry {
    /**
     * Version id of a version belonging to the dataset
     */
    version?: string;
    /**
     * Existing Dataset id
     */
    dataset?: string;
    /**
     * Version ID to merge with
     */
    merge_with?: string;
}
