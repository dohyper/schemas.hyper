/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ResourceHyper_1 = {
  [k: string]: unknown;
} & {
  $id?: string;
  $schema: string;
  name: string;
  idable?: ClientGeneratedIdsSupport;
  applicability?: Applicability;
  properties?: Properties;
  relations?: Relations;
  controllers?: Controllers;
  /**
   * @minItems 1
   */
  required?: [string, ...string[]];
  [k: string]: unknown;
};
/**
 * this property specifies whether the resource implementation support client-generated ids.
 */
export type ClientGeneratedIdsSupport = "false";
export type Operation =
  | boolean
  | {
      transactional: boolean;
      [k: string]: unknown;
    };
/**
 * This interface was referenced by `Properties`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_]+$".
 */
export type CoreAndValidationSpecificationsMetaSchema = CoreAndValidationSpecificationsMetaSchema1 &
  CoreAndValidationSpecificationsMetaSchema2 &
  CoreAndValidationSpecificationsMetaSchema3;
export type CoreAndValidationSpecificationsMetaSchema1 = CoreVocabularyMetaSchema &
  ApplicatorVocabularyMetaSchema &
  UnevaluatedApplicatorVocabularyMetaSchema &
  ValidationVocabularyMetaSchema &
  MetaDataVocabularyMetaSchema &
  FormatVocabularyMetaSchemaForAnnotationResults &
  ContentVocabularyMetaSchema;
export type CoreVocabularyMetaSchema = CoreVocabularyMetaSchema1 & CoreVocabularyMetaSchema2;
export type CoreVocabularyMetaSchema2 =
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $anchor?: string;
      $dynamicRef?: string;
      $dynamicAnchor?: string;
      $vocabulary?: {
        [k: string]: boolean;
      };
      $comment?: string;
      $defs?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      [k: string]: unknown;
    }
  | boolean;
export type ApplicatorVocabularyMetaSchema = ApplicatorVocabularyMetaSchema1 & ApplicatorVocabularyMetaSchema2;
export type ApplicatorVocabularyMetaSchema2 =
  | {
      /**
       * @minItems 1
       */
      prefixItems?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      items?: {
        [k: string]: unknown;
      };
      contains?: {
        [k: string]: unknown;
      };
      additionalProperties?: {
        [k: string]: unknown;
      };
      properties?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      patternProperties?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      dependentSchemas?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      propertyNames?: {
        [k: string]: unknown;
      };
      if?: {
        [k: string]: unknown;
      };
      then?: {
        [k: string]: unknown;
      };
      else?: {
        [k: string]: unknown;
      };
      /**
       * @minItems 1
       */
      allOf?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      /**
       * @minItems 1
       */
      anyOf?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      /**
       * @minItems 1
       */
      oneOf?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      not?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | boolean;
export type UnevaluatedApplicatorVocabularyMetaSchema = UnevaluatedApplicatorVocabularyMetaSchema1 &
  UnevaluatedApplicatorVocabularyMetaSchema2;
export type UnevaluatedApplicatorVocabularyMetaSchema2 =
  | {
      unevaluatedItems?: {
        [k: string]: unknown;
      };
      unevaluatedProperties?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | boolean;
export type ValidationVocabularyMetaSchema = ValidationVocabularyMetaSchema1 & ValidationVocabularyMetaSchema2;
export type ValidationVocabularyMetaSchema2 =
  | {
      type?:
        | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
        | [
            "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
            ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
          ];
      const?: unknown;
      enum?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number;
      pattern?: string;
      maxItems?: number;
      minItems?: number;
      uniqueItems?: boolean;
      maxContains?: number;
      minContains?: number;
      maxProperties?: number;
      minProperties?: number;
      required?: string[];
      dependentRequired?: {
        [k: string]: string[];
      };
      [k: string]: unknown;
    }
  | boolean;
export type MetaDataVocabularyMetaSchema = MetaDataVocabularyMetaSchema1 & MetaDataVocabularyMetaSchema2;
export type MetaDataVocabularyMetaSchema2 =
  | {
      title?: string;
      description?: string;
      default?: unknown;
      deprecated?: boolean;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      [k: string]: unknown;
    }
  | boolean;
export type FormatVocabularyMetaSchemaForAnnotationResults = FormatVocabularyMetaSchemaForAnnotationResults1 &
  FormatVocabularyMetaSchemaForAnnotationResults2;
export type FormatVocabularyMetaSchemaForAnnotationResults2 =
  | {
      format?: string;
      [k: string]: unknown;
    }
  | boolean;
export type ContentVocabularyMetaSchema = ContentVocabularyMetaSchema1 & ContentVocabularyMetaSchema2;
export type ContentVocabularyMetaSchema2 =
  | {
      contentEncoding?: string;
      contentMediaType?: string;
      contentSchema?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | boolean;
export type CoreAndValidationSpecificationsMetaSchema3 =
  | (CoreVocabularyMetaSchema2 &
      ApplicatorVocabularyMetaSchema2 &
      UnevaluatedApplicatorVocabularyMetaSchema2 &
      ValidationVocabularyMetaSchema2 &
      MetaDataVocabularyMetaSchema2 &
      FormatVocabularyMetaSchemaForAnnotationResults2 &
      ContentVocabularyMetaSchema2)
  | ((CoreVocabularyMetaSchema2 &
      ApplicatorVocabularyMetaSchema2 &
      UnevaluatedApplicatorVocabularyMetaSchema2 &
      ValidationVocabularyMetaSchema2 &
      MetaDataVocabularyMetaSchema2 &
      FormatVocabularyMetaSchemaForAnnotationResults2 &
      ContentVocabularyMetaSchema2) &
      boolean);
export type Cardinality = "to-one" | "to-many";

export interface Applicability {
  create?: Operation;
  read?: boolean;
  update?: Operation;
  delete?: Operation;
  [k: string]: unknown;
}
export interface Properties {
  [k: string]: CoreAndValidationSpecificationsMetaSchema;
}
export interface CoreVocabularyMetaSchema1 {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $anchor?: string;
  $dynamicRef?: string;
  $dynamicAnchor?: string;
  $vocabulary?: {
    [k: string]: boolean;
  };
  $comment?: string;
  $defs?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
}
export interface ApplicatorVocabularyMetaSchema1 {
  /**
   * @minItems 1
   */
  prefixItems?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  items?: {
    [k: string]: unknown;
  };
  contains?: {
    [k: string]: unknown;
  };
  additionalProperties?: {
    [k: string]: unknown;
  };
  properties?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  patternProperties?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  dependentSchemas?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  propertyNames?: {
    [k: string]: unknown;
  };
  if?: {
    [k: string]: unknown;
  };
  then?: {
    [k: string]: unknown;
  };
  else?: {
    [k: string]: unknown;
  };
  /**
   * @minItems 1
   */
  allOf?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  /**
   * @minItems 1
   */
  anyOf?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  /**
   * @minItems 1
   */
  oneOf?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  not?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface UnevaluatedApplicatorVocabularyMetaSchema1 {
  unevaluatedItems?: {
    [k: string]: unknown;
  };
  unevaluatedProperties?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ValidationVocabularyMetaSchema1 {
  type?:
    | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
    | [
        "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
        ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
      ];
  const?: unknown;
  enum?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: {
    [k: string]: string[];
  };
  [k: string]: unknown;
}
export interface MetaDataVocabularyMetaSchema1 {
  title?: string;
  description?: string;
  default?: unknown;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  [k: string]: unknown;
}
export interface FormatVocabularyMetaSchemaForAnnotationResults1 {
  format?: string;
  [k: string]: unknown;
}
export interface ContentVocabularyMetaSchema1 {
  contentEncoding?: string;
  contentMediaType?: string;
  contentSchema?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface CoreAndValidationSpecificationsMetaSchema2 {
  /**
   * @deprecated
   */
  definitions?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  /**
   * @deprecated
   */
  dependencies?: {
    [k: string]:
      | {
          [k: string]: unknown;
        }
      | string[];
  };
  /**
   * @deprecated
   */
  $recursiveAnchor?: string;
  /**
   * @deprecated
   */
  $recursiveRef?: string;
  [k: string]: unknown;
}
export interface Relations {
  [k: string]: Relation;
}
/**
 * This interface was referenced by `Relations`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_]+$".
 */
export interface Relation {
  resource: string;
  cardinality: Cardinality;
  bidirectionality?: Bidirectionality;
  applicability?: Applicability;
  constraints?: Constraints;
  readOnly?: boolean & string;
  [k: string]: unknown;
}
export interface Bidirectionality {
  relation: string;
  projection?: Relation;
  [k: string]: unknown;
}
export interface Constraints {
  unique?: boolean;
  [k: string]: unknown;
}
export interface Controllers {
  [k: string]: Controller;
}
/**
 * This interface was referenced by `Controllers`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_]+$".
 */
export interface Controller {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  type: "collection" | "object";
  request?: {
    [k: string]: unknown;
  };
  transactional?: boolean;
  [k: string]: unknown;
}
