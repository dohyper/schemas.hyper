/**
 * ConfigurationDefinition
 */
export type ConfigurationDefinitionType = import('json-schema-to-ts').FromSchema<typeof ConfigurationDefinition>;
/**
 * ResourceDefinition
 */
export type ResourceDefinitionType = import('json-schema-to-ts').FromSchema<typeof ResourceDefinition>;
export namespace ConfigurationDefinition {
    let $schema: "http://json-schema.org/draft-07/schema";
    let type: "object";
}
export namespace ResourceDefinition {
    let $schema_1: "http://json-schema.org/draft-07/schema";
    export { $schema_1 as $schema };
    let type_1: "object";
    export { type_1 as type };
    export namespace properties {
        export namespace name {
            let type_2: "string";
            export { type_2 as type };
        }
        export namespace applicability {
            let $ref: "#/definitions/applicability";
        }
        export namespace properties_1 {
            let $ref_1: "#/definitions/properties";
            export { $ref_1 as $ref };
        }
        export { properties_1 as properties };
        export namespace relations {
            let $ref_2: "#/definitions/relations";
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
    export namespace definitions {
        export namespace applicability_1 {
            let type_5: "object";
            export { type_5 as type };
            export let patternProperties: {
                readonly "^create|update|delete$": {
                    readonly $ref: "#/definitions/operation";
                };
                readonly read: {
                    readonly type: "boolean";
                };
            };
        }
        export { applicability_1 as applicability };
        export namespace properties_2 {
            let type_6: "object";
            export { type_6 as type };
            let patternProperties_1: {
                readonly "^[a-zA-Z0-9_]+$": {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly $id: "http://json-schema.org/draft-07/schema#";
                    readonly title: "Core schema meta-schema";
                    readonly definitions: {
                        readonly schemaArray: {
                            readonly type: "array";
                            readonly minItems: 1;
                            readonly items: {
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                            };
                        };
                        readonly nonNegativeInteger: {
                            readonly type: "integer";
                            readonly minimum: 0;
                        };
                        readonly nonNegativeIntegerDefault0: {
                            readonly allOf: readonly [{
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger";
                            }, {
                                readonly default: 0;
                            }];
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
                    readonly type: readonly ["object", "boolean"];
                    readonly properties: {
                        readonly $id: {
                            readonly type: "string";
                            readonly format: "uri-reference";
                        };
                        readonly $schema: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly $ref: {
                            readonly type: "string";
                            readonly format: "uri-reference";
                        };
                        readonly $comment: {
                            readonly type: "string";
                        };
                        readonly title: {
                            readonly type: "string";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly default: true;
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
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger";
                        };
                        readonly minLength: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeIntegerDefault0";
                        };
                        readonly pattern: {
                            readonly type: "string";
                            readonly format: "regex";
                        };
                        readonly additionalItems: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly items: {
                            readonly anyOf: readonly [{
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                            }, {
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray";
                            }];
                            readonly default: true;
                        };
                        readonly maxItems: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger";
                        };
                        readonly minItems: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeIntegerDefault0";
                        };
                        readonly uniqueItems: {
                            readonly type: "boolean";
                            readonly default: false;
                        };
                        readonly contains: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly maxProperties: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger";
                        };
                        readonly minProperties: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeIntegerDefault0";
                        };
                        readonly required: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/stringArray";
                        };
                        readonly additionalProperties: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly definitions: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                            };
                            readonly default: {};
                        };
                        readonly properties: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                            };
                            readonly default: {};
                        };
                        readonly patternProperties: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                            };
                            readonly propertyNames: {
                                readonly format: "regex";
                            };
                            readonly default: {};
                        };
                        readonly dependencies: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly anyOf: readonly [{
                                    readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                                }, {
                                    readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/stringArray";
                                }];
                            };
                        };
                        readonly propertyNames: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly const: true;
                        readonly enum: {
                            readonly type: "array";
                            readonly items: true;
                            readonly minItems: 1;
                            readonly uniqueItems: true;
                        };
                        readonly type: {
                            readonly anyOf: readonly [{
                                readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/simpleTypes";
                            }, {
                                readonly type: "array";
                                readonly items: {
                                    readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/simpleTypes";
                                };
                                readonly minItems: 1;
                                readonly uniqueItems: true;
                            }];
                        };
                        readonly format: {
                            readonly type: "string";
                        };
                        readonly contentMediaType: {
                            readonly type: "string";
                        };
                        readonly contentEncoding: {
                            readonly type: "string";
                        };
                        readonly if: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly then: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly else: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                        readonly allOf: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray";
                        };
                        readonly anyOf: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray";
                        };
                        readonly oneOf: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray";
                        };
                        readonly not: {
                            readonly $ref: "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24";
                        };
                    };
                    readonly default: true;
                };
            };
            export { patternProperties_1 as patternProperties };
        }
        export { properties_2 as properties };
        export namespace relations_1 {
            let type_7: "object";
            export { type_7 as type };
            let patternProperties_2: {
                readonly "^[a-zA-Z0-9_]+$": {
                    readonly $ref: "#/definitions/relation";
                };
            };
            export { patternProperties_2 as patternProperties };
        }
        export { relations_1 as relations };
        export namespace relation {
            let type_8: "object";
            export { type_8 as type };
            export namespace properties_3 {
                namespace resource {
                    let type_9: "string";
                    export { type_9 as type };
                }
                namespace cardinality {
                    let $ref_3: "#/definitions/cardinality";
                    export { $ref_3 as $ref };
                }
                namespace bidirectionality {
                    let $ref_4: "#/definitions/bidirectionality";
                    export { $ref_4 as $ref };
                }
                namespace constraints {
                    let $ref_5: "#/definitions/constraints";
                    export { $ref_5 as $ref };
                }
            }
            export { properties_3 as properties };
            let required_2: readonly ["resource", "cardinality"];
            export { required_2 as required };
        }
        export namespace cardinality_1 {
            let type_10: "string";
            export { type_10 as type };
            let _enum: readonly ["to-one", "to-many"];
            export { _enum as enum };
        }
        export { cardinality_1 as cardinality };
        export namespace constraints_1 {
            let type_11: "object";
            export { type_11 as type };
            export namespace properties_4 {
                namespace unique {
                    let type_12: "boolean";
                    export { type_12 as type };
                }
            }
            export { properties_4 as properties };
            export let additionalProperties: false;
        }
        export { constraints_1 as constraints };
        export namespace operation {
            let oneOf_1: readonly [{
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
            export { oneOf_1 as oneOf };
        }
        export namespace projection {
            let $ref_6: "#/definitions/relation";
            export { $ref_6 as $ref };
        }
        export namespace bidirectionality_1 {
            let type_13: "object";
            export { type_13 as type };
            export namespace properties_5 {
                export namespace relation_1 {
                    let type_14: "string";
                    export { type_14 as type };
                }
                export { relation_1 as relation };
                export namespace projection_1 {
                    let $ref_7: "#/definitions/relation";
                    export { $ref_7 as $ref };
                }
                export { projection_1 as projection };
            }
            export { properties_5 as properties };
            let required_3: readonly ["relation"];
            export { required_3 as required };
        }
        export { bidirectionality_1 as bidirectionality };
    }
}
//# sourceMappingURL=index.d.ts.map