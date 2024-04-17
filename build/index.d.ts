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
    export let anyOf: readonly [{
        readonly required: readonly ["properties"];
    }, {
        readonly required: readonly ["relations"];
    }];
    export namespace $defs {
        export namespace applicability_1 {
            let type_5: "object";
            export { type_5 as type };
            export namespace properties_2 {
                export namespace create {
                    let $ref_3: "#/$defs/operation";
                    export { $ref_3 as $ref };
                }
                export namespace read {
                    let type_6: "boolean";
                    export { type_6 as type };
                }
                export namespace update {
                    let $ref_4: "#/$defs/operation";
                    export { $ref_4 as $ref };
                }
                export namespace _delete {
                    let $ref_5: "#/$defs/operation";
                    export { $ref_5 as $ref };
                }
                export { _delete as delete };
            }
            export { properties_2 as properties };
            export let unevaluatedProperties: false;
        }
        export { applicability_1 as applicability };
        export namespace properties_3 {
            let type_7: "object";
            export { type_7 as type };
            export namespace propertyNames {
                export let pattern: "^[a-zA-Z0-9_]+$";
                let $schema_2: "https://json-schema.org/draft/2020-12/schema";
                export { $schema_2 as $schema };
                export let $id: "https://json-schema.org/draft/2020-12/schema";
                export let $vocabulary: {
                    readonly "https://json-schema.org/draft/2020-12/vocab/core": true;
                    readonly "https://json-schema.org/draft/2020-12/vocab/applicator": true;
                    readonly "https://json-schema.org/draft/2020-12/vocab/unevaluated": true;
                    readonly "https://json-schema.org/draft/2020-12/vocab/validation": true;
                    readonly "https://json-schema.org/draft/2020-12/vocab/meta-data": true;
                    readonly "https://json-schema.org/draft/2020-12/vocab/format-annotation": true;
                    readonly "https://json-schema.org/draft/2020-12/vocab/content": true;
                };
                export let $dynamicAnchor: "meta";
                export let title: "Core and Validation specifications meta-schema";
                export let allOf: readonly [{
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/core";
                    readonly $dynamicAnchor: "meta";
                    readonly title: "Core vocabulary meta-schema";
                    readonly type: readonly ["object", "boolean"];
                    readonly properties: {
                        readonly $id: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString";
                            readonly $comment: "Non-empty fragments not allowed.";
                            readonly pattern: "^[^#]*#?$";
                        };
                        readonly $schema: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriString";
                        };
                        readonly $ref: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString";
                        };
                        readonly $anchor: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/anchorString";
                        };
                        readonly $dynamicRef: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString";
                        };
                        readonly $dynamicAnchor: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/anchorString";
                        };
                        readonly $vocabulary: {
                            readonly type: "object";
                            readonly propertyNames: {
                                readonly $ref: "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriString";
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
                        };
                    };
                    readonly $defs: {
                        readonly anchorString: {
                            readonly type: "string";
                            readonly pattern: "^[A-Za-z_][-A-Za-z0-9._]*$";
                        };
                        readonly uriString: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly uriReferenceString: {
                            readonly type: "string";
                            readonly format: "uri-reference";
                        };
                    };
                }, {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/applicator";
                    readonly $dynamicAnchor: "meta";
                    readonly title: "Applicator vocabulary meta-schema";
                    readonly type: readonly ["object", "boolean"];
                    readonly properties: {
                        readonly prefixItems: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray";
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
                            readonly default: {};
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
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray";
                        };
                        readonly anyOf: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray";
                        };
                        readonly oneOf: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray";
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
                }, {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/unevaluated";
                    readonly $dynamicAnchor: "meta";
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
                }, {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/validation";
                    readonly $dynamicAnchor: "meta";
                    readonly title: "Validation vocabulary meta-schema";
                    readonly type: readonly ["object", "boolean"];
                    readonly properties: {
                        readonly type: {
                            readonly anyOf: readonly [{
                                readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/simpleTypes";
                            }, {
                                readonly type: "array";
                                readonly items: {
                                    readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/simpleTypes";
                                };
                                readonly minItems: 1;
                                readonly uniqueItems: true;
                            }];
                        };
                        readonly const: true;
                        readonly enum: {
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
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger";
                        };
                        readonly minLength: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeIntegerDefault0";
                        };
                        readonly pattern: {
                            readonly type: "string";
                            readonly format: "regex";
                        };
                        readonly maxItems: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger";
                        };
                        readonly minItems: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeIntegerDefault0";
                        };
                        readonly uniqueItems: {
                            readonly type: "boolean";
                            readonly default: false;
                        };
                        readonly maxContains: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger";
                        };
                        readonly minContains: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger";
                            readonly default: 1;
                        };
                        readonly maxProperties: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger";
                        };
                        readonly minProperties: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeIntegerDefault0";
                        };
                        readonly required: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/stringArray";
                        };
                        readonly dependentRequired: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/stringArray";
                            };
                        };
                    };
                    readonly $defs: {
                        readonly nonNegativeInteger: {
                            readonly type: "integer";
                            readonly minimum: 0;
                        };
                        readonly nonNegativeIntegerDefault0: {
                            readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger";
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
                }, {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/meta-data";
                    readonly $dynamicAnchor: "meta";
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
                }, {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/format-annotation";
                    readonly $dynamicAnchor: "meta";
                    readonly title: "Format vocabulary meta-schema for annotation results";
                    readonly type: readonly ["object", "boolean"];
                    readonly properties: {
                        readonly format: {
                            readonly type: "string";
                        };
                    };
                }, {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://json-schema.org/draft/2020-12/meta/content";
                    readonly $dynamicAnchor: "meta";
                    readonly title: "Content vocabulary meta-schema";
                    readonly type: readonly ["object", "boolean"];
                    readonly properties: {
                        readonly contentEncoding: {
                            readonly type: "string";
                        };
                        readonly contentMediaType: {
                            readonly type: "string";
                        };
                        readonly contentSchema: {
                            readonly $dynamicRef: "#meta";
                        };
                    };
                }];
                let type_8: readonly ["object", "boolean"];
                export { type_8 as type };
                export let $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.";
                export namespace properties_4 {
                    namespace definitions {
                        let $comment_1: "\"definitions\" has been replaced by \"$defs\".";
                        export { $comment_1 as $comment };
                        let type_9: "object";
                        export { type_9 as type };
                        export namespace additionalProperties {
                            let $dynamicRef: "#meta";
                        }
                        export let deprecated: true;
                        let _default: {};
                        export { _default as default };
                    }
                    namespace dependencies {
                        let $comment_2: "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.";
                        export { $comment_2 as $comment };
                        let type_10: "object";
                        export { type_10 as type };
                        export namespace additionalProperties_1 {
                            let anyOf_1: readonly [{
                                readonly $dynamicRef: "#meta";
                            }, {
                                readonly $ref: "#/%24defs/properties/propertyNames/allOf/3/%24defs/stringArray";
                            }];
                            export { anyOf_1 as anyOf };
                        }
                        export { additionalProperties_1 as additionalProperties };
                        let deprecated_1: true;
                        export { deprecated_1 as deprecated };
                        let _default_1: {};
                        export { _default_1 as default };
                    }
                    namespace $recursiveAnchor {
                        let $comment_3: "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".";
                        export { $comment_3 as $comment };
                        let $ref_6: "#/%24defs/properties/propertyNames/allOf/0/%24defs/anchorString";
                        export { $ref_6 as $ref };
                        let deprecated_2: true;
                        export { deprecated_2 as deprecated };
                    }
                    namespace $recursiveRef {
                        let $comment_4: "\"$recursiveRef\" has been replaced by \"$dynamicRef\".";
                        export { $comment_4 as $comment };
                        let $ref_7: "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString";
                        export { $ref_7 as $ref };
                        let deprecated_3: true;
                        export { deprecated_3 as deprecated };
                    }
                }
                export { properties_4 as properties };
            }
            export let minProperties: 1;
        }
        export { properties_3 as properties };
        export namespace relations_1 {
            let type_11: "object";
            export { type_11 as type };
            export namespace propertyNames_1 {
                let pattern_1: "^[a-zA-Z0-9_]+$";
                export { pattern_1 as pattern };
                let $ref_8: "#/$defs/relation";
                export { $ref_8 as $ref };
            }
            export { propertyNames_1 as propertyNames };
            let minProperties_1: 1;
            export { minProperties_1 as minProperties };
        }
        export { relations_1 as relations };
        export namespace relation {
            let type_12: "object";
            export { type_12 as type };
            export namespace properties_5 {
                namespace resource {
                    let type_13: "string";
                    export { type_13 as type };
                }
                namespace cardinality {
                    let $ref_9: "#/$defs/cardinality";
                    export { $ref_9 as $ref };
                }
                namespace bidirectionality {
                    let $ref_10: "#/$defs/bidirectionality";
                    export { $ref_10 as $ref };
                }
                namespace constraints {
                    let $ref_11: "#/$defs/constraints";
                    export { $ref_11 as $ref };
                }
            }
            export { properties_5 as properties };
            let required_2: readonly ["resource", "cardinality"];
            export { required_2 as required };
        }
        export namespace cardinality_1 {
            let type_14: "string";
            export { type_14 as type };
            let _enum: readonly ["to-one", "to-many"];
            export { _enum as enum };
        }
        export { cardinality_1 as cardinality };
        export namespace constraints_1 {
            let type_15: "object";
            export { type_15 as type };
            export namespace properties_6 {
                namespace unique {
                    let type_16: "boolean";
                    export { type_16 as type };
                }
            }
            export { properties_6 as properties };
            let unevaluatedProperties_1: false;
            export { unevaluatedProperties_1 as unevaluatedProperties };
        }
        export { constraints_1 as constraints };
        export namespace operation {
            let anyOf_2: readonly [{
                readonly type: "boolean";
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly transactional: {
                        readonly type: "boolean";
                    };
                };
                readonly required: readonly ["transactional"];
                readonly unevaluatedProperties: false;
            }];
            export { anyOf_2 as anyOf };
        }
        export namespace projection {
            let $ref_12: "#/$defs/relation";
            export { $ref_12 as $ref };
        }
        export namespace bidirectionality_1 {
            let type_17: "object";
            export { type_17 as type };
            export namespace properties_7 {
                export namespace relation_1 {
                    let type_18: "string";
                    export { type_18 as type };
                }
                export { relation_1 as relation };
                export namespace projection_1 {
                    let $ref_13: "#/$defs/relation";
                    export { $ref_13 as $ref };
                }
                export { projection_1 as projection };
            }
            export { properties_7 as properties };
            let required_3: readonly ["relation"];
            export { required_3 as required };
        }
        export { bidirectionality_1 as bidirectionality };
    }
}
//# sourceMappingURL=index.d.ts.map