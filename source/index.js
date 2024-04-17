

    const configuration_v1 = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object"
})

    /**
     * configuration_v1
     * @typedef {import('json-schema-to-ts').FromSchema<typeof configuration_v1>} configuration_v1Type
     */

    

    const resource_v1 = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "http://schemas.hyper.mathematikoi.co/resource-v1.0.0.json",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "applicability": {
      "$ref": "#/$defs/applicability"
    },
    "properties": {
      "$ref": "#/$defs/properties"
    },
    "relations": {
      "$ref": "#/$defs/relations"
    },
    "required": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "name"
  ],
  "anyOf": [
    {
      "required": [
        "properties"
      ]
    },
    {
      "required": [
        "relations"
      ]
    }
  ],
  "$defs": {
    "applicability": {
      "type": "object",
      "properties": {
        "create": {
          "$ref": "#/$defs/operation"
        },
        "read": {
          "type": "boolean"
        },
        "update": {
          "$ref": "#/$defs/operation"
        },
        "delete": {
          "$ref": "#/$defs/operation"
        }
      },
      "unevaluatedProperties": false
    },
    "properties": {
      "type": "object",
      "propertyNames": {
        "pattern": "^[a-zA-Z0-9_]+$",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://json-schema.org/draft/2020-12/schema",
        "$vocabulary": {
          "https://json-schema.org/draft/2020-12/vocab/core": true,
          "https://json-schema.org/draft/2020-12/vocab/applicator": true,
          "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
          "https://json-schema.org/draft/2020-12/vocab/validation": true,
          "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
          "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
          "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        "$dynamicAnchor": "meta",
        "title": "Core and Validation specifications meta-schema",
        "allOf": [
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/core",
            "$dynamicAnchor": "meta",
            "title": "Core vocabulary meta-schema",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "$id": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString",
                "$comment": "Non-empty fragments not allowed.",
                "pattern": "^[^#]*#?$"
              },
              "$schema": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriString"
              },
              "$ref": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString"
              },
              "$anchor": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/anchorString"
              },
              "$dynamicRef": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString"
              },
              "$dynamicAnchor": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/anchorString"
              },
              "$vocabulary": {
                "type": "object",
                "propertyNames": {
                  "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriString"
                },
                "additionalProperties": {
                  "type": "boolean"
                }
              },
              "$comment": {
                "type": "string"
              },
              "$defs": {
                "type": "object",
                "additionalProperties": {
                  "$dynamicRef": "#meta"
                }
              }
            },
            "$defs": {
              "anchorString": {
                "type": "string",
                "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
              },
              "uriString": {
                "type": "string",
                "format": "uri"
              },
              "uriReferenceString": {
                "type": "string",
                "format": "uri-reference"
              }
            }
          },
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/applicator",
            "$dynamicAnchor": "meta",
            "title": "Applicator vocabulary meta-schema",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "prefixItems": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray"
              },
              "items": {
                "$dynamicRef": "#meta"
              },
              "contains": {
                "$dynamicRef": "#meta"
              },
              "additionalProperties": {
                "$dynamicRef": "#meta"
              },
              "properties": {
                "type": "object",
                "additionalProperties": {
                  "$dynamicRef": "#meta"
                },
                "default": {}
              },
              "patternProperties": {
                "type": "object",
                "additionalProperties": {
                  "$dynamicRef": "#meta"
                },
                "propertyNames": {
                  "format": "regex"
                },
                "default": {}
              },
              "dependentSchemas": {
                "type": "object",
                "additionalProperties": {
                  "$dynamicRef": "#meta"
                },
                "default": {}
              },
              "propertyNames": {
                "$dynamicRef": "#meta"
              },
              "if": {
                "$dynamicRef": "#meta"
              },
              "then": {
                "$dynamicRef": "#meta"
              },
              "else": {
                "$dynamicRef": "#meta"
              },
              "allOf": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray"
              },
              "anyOf": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray"
              },
              "oneOf": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/1/%24defs/schemaArray"
              },
              "not": {
                "$dynamicRef": "#meta"
              }
            },
            "$defs": {
              "schemaArray": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$dynamicRef": "#meta"
                }
              }
            }
          },
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/unevaluated",
            "$dynamicAnchor": "meta",
            "title": "Unevaluated applicator vocabulary meta-schema",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "unevaluatedItems": {
                "$dynamicRef": "#meta"
              },
              "unevaluatedProperties": {
                "$dynamicRef": "#meta"
              }
            }
          },
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/validation",
            "$dynamicAnchor": "meta",
            "title": "Validation vocabulary meta-schema",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "type": {
                "anyOf": [
                  {
                    "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/simpleTypes"
                  },
                  {
                    "type": "array",
                    "items": {
                      "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/simpleTypes"
                    },
                    "minItems": 1,
                    "uniqueItems": true
                  }
                ]
              },
              "const": true,
              "enum": {
                "type": "array",
                "items": true
              },
              "multipleOf": {
                "type": "number",
                "exclusiveMinimum": 0
              },
              "maximum": {
                "type": "number"
              },
              "exclusiveMaximum": {
                "type": "number"
              },
              "minimum": {
                "type": "number"
              },
              "exclusiveMinimum": {
                "type": "number"
              },
              "maxLength": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger"
              },
              "minLength": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeIntegerDefault0"
              },
              "pattern": {
                "type": "string",
                "format": "regex"
              },
              "maxItems": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger"
              },
              "minItems": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeIntegerDefault0"
              },
              "uniqueItems": {
                "type": "boolean",
                "default": false
              },
              "maxContains": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger"
              },
              "minContains": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger",
                "default": 1
              },
              "maxProperties": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger"
              },
              "minProperties": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeIntegerDefault0"
              },
              "required": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/stringArray"
              },
              "dependentRequired": {
                "type": "object",
                "additionalProperties": {
                  "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/stringArray"
                }
              }
            },
            "$defs": {
              "nonNegativeInteger": {
                "type": "integer",
                "minimum": 0
              },
              "nonNegativeIntegerDefault0": {
                "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/nonNegativeInteger",
                "default": 0
              },
              "simpleTypes": {
                "enum": [
                  "array",
                  "boolean",
                  "integer",
                  "null",
                  "number",
                  "object",
                  "string"
                ]
              },
              "stringArray": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true,
                "default": []
              }
            }
          },
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/meta-data",
            "$dynamicAnchor": "meta",
            "title": "Meta-data vocabulary meta-schema",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "title": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "default": true,
              "deprecated": {
                "type": "boolean",
                "default": false
              },
              "readOnly": {
                "type": "boolean",
                "default": false
              },
              "writeOnly": {
                "type": "boolean",
                "default": false
              },
              "examples": {
                "type": "array",
                "items": true
              }
            }
          },
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/format-annotation",
            "$dynamicAnchor": "meta",
            "title": "Format vocabulary meta-schema for annotation results",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "format": {
                "type": "string"
              }
            }
          },
          {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://json-schema.org/draft/2020-12/meta/content",
            "$dynamicAnchor": "meta",
            "title": "Content vocabulary meta-schema",
            "type": [
              "object",
              "boolean"
            ],
            "properties": {
              "contentEncoding": {
                "type": "string"
              },
              "contentMediaType": {
                "type": "string"
              },
              "contentSchema": {
                "$dynamicRef": "#meta"
              }
            }
          }
        ],
        "type": [
          "object",
          "boolean"
        ],
        "$comment": "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
        "properties": {
          "definitions": {
            "$comment": "\"definitions\" has been replaced by \"$defs\".",
            "type": "object",
            "additionalProperties": {
              "$dynamicRef": "#meta"
            },
            "deprecated": true,
            "default": {}
          },
          "dependencies": {
            "$comment": "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
            "type": "object",
            "additionalProperties": {
              "anyOf": [
                {
                  "$dynamicRef": "#meta"
                },
                {
                  "$ref": "#/%24defs/properties/propertyNames/allOf/3/%24defs/stringArray"
                }
              ]
            },
            "deprecated": true,
            "default": {}
          },
          "$recursiveAnchor": {
            "$comment": "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
            "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/anchorString",
            "deprecated": true
          },
          "$recursiveRef": {
            "$comment": "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
            "$ref": "#/%24defs/properties/propertyNames/allOf/0/%24defs/uriReferenceString",
            "deprecated": true
          }
        }
      },
      "minProperties": 1
    },
    "relations": {
      "type": "object",
      "propertyNames": {
        "pattern": "^[a-zA-Z0-9_]+$",
        "$ref": "#/$defs/relation"
      },
      "minProperties": 1
    },
    "relation": {
      "type": "object",
      "properties": {
        "resource": {
          "type": "string"
        },
        "cardinality": {
          "$ref": "#/$defs/cardinality"
        },
        "bidirectionality": {
          "$ref": "#/$defs/bidirectionality"
        },
        "constraints": {
          "$ref": "#/$defs/constraints"
        }
      },
      "required": [
        "resource",
        "cardinality"
      ]
    },
    "cardinality": {
      "type": "string",
      "enum": [
        "to-one",
        "to-many"
      ]
    },
    "constraints": {
      "type": "object",
      "properties": {
        "unique": {
          "type": "boolean"
        }
      },
      "unevaluatedProperties": false
    },
    "operation": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "object",
          "properties": {
            "transactional": {
              "type": "boolean"
            }
          },
          "required": [
            "transactional"
          ],
          "unevaluatedProperties": false
        }
      ]
    },
    "projection": {
      "$ref": "#/$defs/relation"
    },
    "bidirectionality": {
      "type": "object",
      "properties": {
        "relation": {
          "type": "string"
        },
        "projection": {
          "$ref": "#/$defs/relation"
        }
      },
      "required": [
        "relation"
      ]
    }
  }
})

    /**
     * resource_v1
     * @typedef {import('json-schema-to-ts').FromSchema<typeof resource_v1>} resource_v1Type
     */

    
    module.exports = { configuration_v1,resource_v1}
  