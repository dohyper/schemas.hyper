/**
 * ConfigurationDefinition
 */
export type ConfigurationDefinition = import('json-schema-to-ts').FromSchema<typeof ConfigurationDefinition>;
/**
 * ResourceDefinition
 */
export type ResourceDefinition = import('json-schema-to-ts').FromSchema<typeof ResourceDefinition>;
export namespace ConfigurationDefinition {
    let $schema: "https://json-schema.org/draft/2020-12/schema";
    let type: "object";
}
export namespace ResourceDefinition {
    let $schema_1: "https://json-schema.org/draft/2020-12/schema";
    export { $schema_1 as $schema };
    let type_1: "object";
    export { type_1 as type };
    export namespace properties {
        export namespace name {
            let type_2: "string";
            export { type_2 as type };
        }
        export namespace applicability {
            let $ref: "#/$defs/applicability";
        }
        export namespace properties_1 {
            let $ref_1: "#/$defs/properties";
            export { $ref_1 as $ref };
        }
        export { properties_1 as properties };
        export namespace relations {
            let $ref_2: "#/$defs/relations";
            export { $ref_2 as $ref };
        }
        export namespace required {
            let type_3: "array";
            export { type_3 as type };
            export namespace items {
                let type_4: "string";
                export { type_4 as type };
            }
        }
    }
    let required_1: readonly ["name"];
    export { required_1 as required };
    export let oneOf: readonly [{
        readonly required: readonly ["properties"];
    }, {
        readonly required: readonly ["relations"];
    }];
    export let $defs: {
        readonly applicability: {
            readonly type: "object";
            readonly patternProperties: {
                readonly "^create|update|delete$": {
                    readonly $ref: "#/$defs/operation";
                };
                readonly read: {
                    readonly type: "boolean";
                };
            };
        };
        readonly properties: {
            readonly type: "object";
            readonly patternProperties: {
                readonly "^[a-zA-Z0-9_]+$": {
                    readonly $ref: "https://json-schema.org/draft/2020-12/schema";
                };
            };
        };
        readonly relations: {
            readonly type: "object";
            readonly patternProperties: {
                readonly "^[a-zA-Z0-9_]+$": {
                    readonly $ref: "#/$defs/relation";
                };
            };
        };
        readonly relation: {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                };
                readonly cardinality: {
                    readonly $ref: "#/$defs/cardinality";
                };
                readonly bidirectionality: {
                    readonly $ref: "#/$defs/bidirectionality";
                };
                readonly constraints: {
                    readonly $ref: "#/$defs/constraints";
                };
            };
            readonly required: readonly ["resource", "cardinality"];
        };
        readonly cardinality: {
            readonly type: "string";
            readonly enum: readonly ["to-one", "to-many"];
        };
        readonly constraints: {
            readonly type: "object";
            readonly properties: {
                readonly unique: {
                    readonly type: "boolean";
                };
            };
            readonly additionalProperties: false;
        };
        readonly operation: {
            readonly oneOf: readonly [{
                readonly type: "boolean";
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly transactional: {
                        readonly type: "boolean";
                    };
                };
                readonly additionalProperties: false;
            }];
        };
        readonly projection: {
            readonly $ref: "#/$defs/relation";
        };
        readonly bidirectionality: {
            readonly type: "object";
            readonly properties: {
                readonly relation: {
                    readonly type: "string";
                };
                readonly projection: {
                    readonly $ref: "#/$defs/projection";
                };
            };
            readonly required: readonly ["relation"];
        };
        readonly "https://json-schema.org/draft/2020-12/meta/core": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/core";
            readonly title: "Core vocabulary meta-schema";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly $id: {
                    readonly type: "string";
                    readonly format: "uri-reference";
                    readonly $comment: "Non-empty fragments not allowed.";
                    readonly pattern: "^[^#]*#?$";
                };
                readonly $schema: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly $anchor: {
                    readonly type: "string";
                    readonly pattern: "^[A-Za-z_][-A-Za-z0-9._]*$";
                };
                readonly $ref: {
                    readonly type: "string";
                    readonly format: "uri-reference";
                };
                readonly $dynamicRef: {
                    readonly type: "string";
                    readonly format: "uri-reference";
                };
                readonly $dynamicAnchor: {
                    readonly type: "string";
                    readonly pattern: "^[A-Za-z_][-A-Za-z0-9._]*$";
                };
                readonly $vocabulary: {
                    readonly type: "object";
                    readonly propertyNames: {
                        readonly type: "string";
                        readonly format: "uri";
                    };
                    readonly additionalProperties: {
                        readonly type: "boolean";
                    };
                };
                readonly $comment: {
                    readonly type: "string";
                };
                readonly $defs: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $dynamicRef: "#meta";
                    };
                    readonly default: {};
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/meta/applicator": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/applicator";
            readonly title: "Applicator vocabulary meta-schema";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly prefixItems: {
                    readonly $ref: "#/$defs/schemaArray";
                };
                readonly items: {
                    readonly $dynamicRef: "#meta";
                };
                readonly contains: {
                    readonly $dynamicRef: "#meta";
                };
                readonly additionalProperties: {
                    readonly $dynamicRef: "#meta";
                };
                readonly properties: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $dynamicRef: "#meta";
                    };
                    readonly default: {};
                };
                readonly patternProperties: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $dynamicRef: "#meta";
                    };
                    readonly propertyNames: {
                        readonly format: "regex";
                    };
                    readonly default: {};
                };
                readonly dependentSchemas: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $dynamicRef: "#meta";
                    };
                };
                readonly propertyNames: {
                    readonly $dynamicRef: "#meta";
                };
                readonly if: {
                    readonly $dynamicRef: "#meta";
                };
                readonly then: {
                    readonly $dynamicRef: "#meta";
                };
                readonly else: {
                    readonly $dynamicRef: "#meta";
                };
                readonly allOf: {
                    readonly $ref: "#/$defs/schemaArray";
                };
                readonly anyOf: {
                    readonly $ref: "#/$defs/schemaArray";
                };
                readonly oneOf: {
                    readonly $ref: "#/$defs/schemaArray";
                };
                readonly not: {
                    readonly $dynamicRef: "#meta";
                };
            };
            readonly $defs: {
                readonly schemaArray: {
                    readonly type: "array";
                    readonly minItems: 1;
                    readonly items: {
                        readonly $dynamicRef: "#meta";
                    };
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/meta/unevaluated": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/unevaluated";
            readonly title: "Unevaluated applicator vocabulary meta-schema";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly unevaluatedItems: {
                    readonly $dynamicRef: "#meta";
                };
                readonly unevaluatedProperties: {
                    readonly $dynamicRef: "#meta";
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/meta/validation": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/validation";
            readonly title: "Validation vocabulary meta-schema";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly multipleOf: {
                    readonly type: "number";
                    readonly exclusiveMinimum: 0;
                };
                readonly maximum: {
                    readonly type: "number";
                };
                readonly exclusiveMaximum: {
                    readonly type: "number";
                };
                readonly minimum: {
                    readonly type: "number";
                };
                readonly exclusiveMinimum: {
                    readonly type: "number";
                };
                readonly maxLength: {
                    readonly $ref: "#/$defs/nonNegativeInteger";
                };
                readonly minLength: {
                    readonly $ref: "#/$defs/nonNegativeIntegerDefault0";
                };
                readonly pattern: {
                    readonly type: "string";
                    readonly format: "regex";
                };
                readonly maxItems: {
                    readonly $ref: "#/$defs/nonNegativeInteger";
                };
                readonly minItems: {
                    readonly $ref: "#/$defs/nonNegativeIntegerDefault0";
                };
                readonly uniqueItems: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly maxContains: {
                    readonly $ref: "#/$defs/nonNegativeInteger";
                };
                readonly minContains: {
                    readonly $ref: "#/$defs/nonNegativeInteger";
                    readonly default: 1;
                };
                readonly maxProperties: {
                    readonly $ref: "#/$defs/nonNegativeInteger";
                };
                readonly minProperties: {
                    readonly $ref: "#/$defs/nonNegativeIntegerDefault0";
                };
                readonly required: {
                    readonly $ref: "#/$defs/stringArray";
                };
                readonly dependentRequired: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $ref: "#/$defs/stringArray";
                    };
                };
                readonly const: true;
                readonly enum: {
                    readonly type: "array";
                    readonly items: true;
                };
                readonly type: {
                    readonly anyOf: readonly [{
                        readonly $ref: "#/$defs/simpleTypes";
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly $ref: "#/$defs/simpleTypes";
                        };
                        readonly minItems: 1;
                        readonly uniqueItems: true;
                    }];
                };
            };
            readonly $defs: {
                readonly nonNegativeInteger: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly nonNegativeIntegerDefault0: {
                    readonly $ref: "#/$defs/nonNegativeInteger";
                    readonly default: 0;
                };
                readonly simpleTypes: {
                    readonly enum: readonly ["array", "boolean", "integer", "null", "number", "object", "string"];
                };
                readonly stringArray: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly uniqueItems: true;
                    readonly default: readonly [];
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/meta/meta-data": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/meta-data";
            readonly title: "Meta-data vocabulary meta-schema";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly default: true;
                readonly deprecated: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly readOnly: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly writeOnly: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly examples: {
                    readonly type: "array";
                    readonly items: true;
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/meta/format-annotation": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/format-annotation";
            readonly title: "Format vocabulary meta-schema for annotation results";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly format: {
                    readonly type: "string";
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/meta/content": {
            readonly $id: "https://json-schema.org/draft/2020-12/meta/content";
            readonly title: "Content vocabulary meta-schema";
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly contentMediaType: {
                    readonly type: "string";
                };
                readonly contentEncoding: {
                    readonly type: "string";
                };
                readonly contentSchema: {
                    readonly $dynamicRef: "#meta";
                };
            };
            readonly $dynamicAnchor: "meta";
        };
        readonly "https://json-schema.org/draft/2020-12/schema": {
            readonly $id: "https://json-schema.org/draft/2020-12/schema";
            readonly title: "Core and Validation specifications meta-schema";
            readonly allOf: readonly [{
                readonly $ref: "meta/core";
            }, {
                readonly $ref: "meta/applicator";
            }, {
                readonly $ref: "meta/unevaluated";
            }, {
                readonly $ref: "meta/validation";
            }, {
                readonly $ref: "meta/meta-data";
            }, {
                readonly $ref: "meta/format-annotation";
            }, {
                readonly $ref: "meta/content";
            }];
            readonly type: readonly ["object", "boolean"];
            readonly properties: {
                readonly definitions: {
                    readonly $comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.";
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $dynamicRef: "#meta";
                    };
                    readonly default: {};
                };
                readonly dependencies: {
                    readonly $comment: "\"dependencies\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \"dependentSchemas\" and \"dependentRequired\"";
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly $dynamicRef: "#meta";
                        }, {
                            readonly $ref: "meta/validation#/$defs/stringArray";
                        }];
                    };
                };
            };
            readonly $dynamicAnchor: "meta";
        };
    };
}
//# sourceMappingURL=index.d.ts.map