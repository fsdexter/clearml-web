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

import { MultiFieldPatternData } from './multiFieldPatternData';
import { TaskStatusEnum } from './taskStatusEnum';


export interface TasksGetAllRequest {
    /**
     * List of IDs to filter by
     */
    id?: Array<string>;
    /**
     * Get only tasks whose name matches this pattern (python regular expression   syntax)
     */
    name?: string;
    /**
     * List of user IDs used to filter results by the task\'s creating user
     */
    user?: Array<string>;
    /**
     * List of project IDs
     */
    project?: Array<string>;
    /**
     * Page number, returns a specific page out of the resulting list of tasks
     */
    page?: number;
    /**
     * Page size, specifies the number of results returned in each page (last page may   contain fewer results)
     */
    page_size?: number;
    /**
     * List of field names to order by. When search_text is used, \'@text_score\' can be   used as a field representing the text score of returned documents. Use \'-\'   prefix to specify descending order. Optional, recommended when using page
     */
    order_by?: Array<string>;
    /**
     * List of task types. One or more of: \'import\', \'annotation\', \'training\' or   \'testing\' (case insensitive)
     */
    type?: Array<string>;
    /**
     * List of task user-defined tags. Use \'-\' prefix to exclude tags
     */
    tags?: Array<string>;
    /**
     * List of task system tags. Use \'-\' prefix to exclude system tags
     */
    system_tags?: Array<string>;
    /**
     * List of task status.
     */
    status?: Array<TaskStatusEnum>;
    /**
     * List of task field names (nesting is supported using \'.\', e.g.   execution.model_labels). If provided, this list defines the query\'s projection   (only these fields will be returned for each result entry)
     */
    only_fields?: Array<string>;
    /**
     * Parent ID
     */
    parent?: string;
    /**
     * List of status changed constraint strings (utcformat, epoch) with an optional   prefix modifier (>, >=, <, <=)
     */
    status_changed?: Array<string>;
    /**
     * Free text search query
     */
    search_text?: string;
    _all_?: MultiFieldPatternData;
    _any_?: MultiFieldPatternData;
    /**
     * List of input dataset IDs
     */
    input_view_entries_dataset?: Array<string>;
    /**
     * List of input dataset version IDs
     */
    input_view_entries_version?: Array<string>;
}
