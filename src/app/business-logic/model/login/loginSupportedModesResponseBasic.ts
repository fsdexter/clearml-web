/**
 * login
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { LoginSupportedModesResponseBasicGuest } from '././loginSupportedModesResponseBasicGuest';


export interface LoginSupportedModesResponseBasic {
    /**
     * Basic aothentication (fixed users mode) mode enabled
     */
    enabled?: boolean;
    guest?: LoginSupportedModesResponseBasicGuest;
}
