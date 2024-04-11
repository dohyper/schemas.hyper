/**
 * ConfigurationDefinition
 */
export type ConfigurationDefinitionType = import('json-schema-to-ts').FromSchema<typeof ConfigurationDefinition>;
/**
 * ResourceDefinition
 */
export type ResourceDefinitionType = import('json-schema-to-ts').FromSchema<typeof ResourceDefinition>;
export namespace ConfigurationDefinition {
    let $schema: "http://json-schema.org/draft-07/schema#";
    let type: "object";
}
export namespace ResourceDefinition {
    let $schema_1: "http://json-schema.org/draft-07/schema#";
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
    export let definitions: {
        readonly applicability: {
            readonly type: "object";
            readonly patternProperties: {
                readonly "^create|update|delete$": {
                    readonly $ref: "#/definitions/operation";
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
                    readonly $ref: "http://json-schema.org/draft-07/schema";
                };
            };
        };
        readonly relations: {
            readonly type: "object";
            readonly patternProperties: {
                readonly "^[a-zA-Z0-9_]+$": {
                    readonly $ref: "#/definitions/relation";
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
                    readonly $ref: "#/definitions/cardinality";
                };
                readonly bidirectionality: {
                    readonly $ref: "#/definitions/bidirectionality";
                };
                readonly constraints: {
                    readonly $ref: "#/definitions/constraints";
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
            readonly $ref: "#/definitions/relation";
        };
        readonly bidirectionality: {
            readonly type: "object";
            readonly properties: {
                readonly relation: {
                    readonly type: "string";
                };
                readonly projection: {
                    readonly $ref: "#/definitions/projection";
                };
            };
            readonly required: readonly ["relation"];
        };
        readonly "http://json-schema.org/draft-07/schema": {
            readonly $id: "http://json-schema.org/draft-07/schema";
            readonly title: "Core schema meta-schema";
            readonly definitions: {
                readonly schemaArray: {
                    readonly type: "array";
                    readonly minItems: 1;
                    readonly items: {
                        readonly $ref: "#";
                    };
                };
                readonly nonNegativeInteger: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly nonNegativeIntegerDefault0: {
                    readonly allOf: readonly [{
                        readonly $ref: "#/definitions/nonNegativeInteger";
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
                    readonly $ref: "#/definitions/nonNegativeInteger";
                };
                readonly minLength: {
                    readonly $ref: "#/definitions/nonNegativeIntegerDefault0";
                };
                readonly pattern: {
                    readonly type: "string";
                    readonly format: "regex";
                };
                readonly additionalItems: {
                    readonly $ref: "#";
                };
                readonly items: {
                    readonly anyOf: readonly [{
                        readonly $ref: "#";
                    }, {
                        readonly $ref: "#/definitions/schemaArray";
                    }];
                    readonly default: true;
                };
                readonly maxItems: {
                    readonly $ref: "#/definitions/nonNegativeInteger";
                };
                readonly minItems: {
                    readonly $ref: "#/definitions/nonNegativeIntegerDefault0";
                };
                readonly uniqueItems: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly contains: {
                    readonly $ref: "#";
                };
                readonly maxProperties: {
                    readonly $ref: "#/definitions/nonNegativeInteger";
                };
                readonly minProperties: {
                    readonly $ref: "#/definitions/nonNegativeIntegerDefault0";
                };
                readonly required: {
                    readonly $ref: "#/definitions/stringArray";
                };
                readonly additionalProperties: {
                    readonly $ref: "#";
                };
                readonly definitions: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $ref: "#";
                    };
                    readonly default: {};
                };
                readonly properties: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $ref: "#";
                    };
                    readonly default: {};
                };
                readonly patternProperties: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly $ref: "#";
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
                            readonly $ref: "#";
                        }, {
                            readonly $ref: "#/definitions/stringArray";
                        }];
                    };
                };
                readonly propertyNames: {
                    readonly $ref: "#";
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
                        readonly $ref: "#/definitions/simpleTypes";
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly $ref: "#/definitions/simpleTypes";
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
                    readonly $ref: "#";
                };
                readonly then: {
                    readonly $ref: "#";
                };
                readonly else: {
                    readonly $ref: "#";
                };
                readonly allOf: {
                    readonly $ref: "#/definitions/schemaArray";
                };
                readonly anyOf: {
                    readonly $ref: "#/definitions/schemaArray";
                };
                readonly oneOf: {
                    readonly $ref: "#/definitions/schemaArray";
                };
                readonly not: {
                    readonly $ref: "#";
                };
            };
            readonly default: true;
        };
    };
}
//# sourceMappingURL=index.d.ts.map