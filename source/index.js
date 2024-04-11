

    const ConfigurationDefinition = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object"
})

    /**
     * ConfigurationDefinition
     * @typedef {import('json-schema-to-ts').FromSchema<typeof ConfigurationDefinition>} ConfigurationDefinitionType
     */
    
    

    const ResourceDefinition = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
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
  "oneOf": [
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
      "patternProperties": {
        "^create|update|delete$": {
          "$ref": "#/$defs/operation"
        },
        "read": {
          "type": "boolean"
        }
      }
    },
    "properties": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "https://json-schema.org/draft/2020-12/schema"
        }
      }
    },
    "relations": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "#/$defs/relation"
        }
      }
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
      "additionalProperties": false
    },
    "operation": {
      "oneOf": [
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
          "additionalProperties": false
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
          "$ref": "#/$defs/projection"
        }
      },
      "required": [
        "relation"
      ]
    },
    "https://json-schema.org/draft/2020-12/meta/core": {
      "$id": "https://json-schema.org/draft/2020-12/meta/core",
      "title": "Core vocabulary meta-schema",
      "type": [
        "object",
        "boolean"
      ],
      "properties": {
        "$id": {
          "type": "string",
          "format": "uri-reference",
          "$comment": "Non-empty fragments not allowed.",
          "pattern": "^[^#]*#?$"
        },
        "$schema": {
          "type": "string",
          "format": "uri"
        },
        "$anchor": {
          "type": "string",
          "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        "$ref": {
          "type": "string",
          "format": "uri-reference"
        },
        "$dynamicRef": {
          "type": "string",
          "format": "uri-reference"
        },
        "$dynamicAnchor": {
          "type": "string",
          "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        "$vocabulary": {
          "type": "object",
          "propertyNames": {
            "type": "string",
            "format": "uri"
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
          },
          "default": {}
        }
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/meta/applicator": {
      "$id": "https://json-schema.org/draft/2020-12/meta/applicator",
      "title": "Applicator vocabulary meta-schema",
      "type": [
        "object",
        "boolean"
      ],
      "properties": {
        "prefixItems": {
          "$ref": "#/$defs/schemaArray"
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
          }
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
          "$ref": "#/$defs/schemaArray"
        },
        "anyOf": {
          "$ref": "#/$defs/schemaArray"
        },
        "oneOf": {
          "$ref": "#/$defs/schemaArray"
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
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/meta/unevaluated": {
      "$id": "https://json-schema.org/draft/2020-12/meta/unevaluated",
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
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/meta/validation": {
      "$id": "https://json-schema.org/draft/2020-12/meta/validation",
      "title": "Validation vocabulary meta-schema",
      "type": [
        "object",
        "boolean"
      ],
      "properties": {
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
          "$ref": "#/$defs/nonNegativeInteger"
        },
        "minLength": {
          "$ref": "#/$defs/nonNegativeIntegerDefault0"
        },
        "pattern": {
          "type": "string",
          "format": "regex"
        },
        "maxItems": {
          "$ref": "#/$defs/nonNegativeInteger"
        },
        "minItems": {
          "$ref": "#/$defs/nonNegativeIntegerDefault0"
        },
        "uniqueItems": {
          "type": "boolean",
          "default": false
        },
        "maxContains": {
          "$ref": "#/$defs/nonNegativeInteger"
        },
        "minContains": {
          "$ref": "#/$defs/nonNegativeInteger",
          "default": 1
        },
        "maxProperties": {
          "$ref": "#/$defs/nonNegativeInteger"
        },
        "minProperties": {
          "$ref": "#/$defs/nonNegativeIntegerDefault0"
        },
        "required": {
          "$ref": "#/$defs/stringArray"
        },
        "dependentRequired": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/stringArray"
          }
        },
        "const": true,
        "enum": {
          "type": "array",
          "items": true
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/simpleTypes"
            },
            {
              "type": "array",
              "items": {
                "$ref": "#/$defs/simpleTypes"
              },
              "minItems": 1,
              "uniqueItems": true
            }
          ]
        }
      },
      "$defs": {
        "nonNegativeInteger": {
          "type": "integer",
          "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
          "$ref": "#/$defs/nonNegativeInteger",
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
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/meta/meta-data": {
      "$id": "https://json-schema.org/draft/2020-12/meta/meta-data",
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
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/meta/format-annotation": {
      "$id": "https://json-schema.org/draft/2020-12/meta/format-annotation",
      "title": "Format vocabulary meta-schema for annotation results",
      "type": [
        "object",
        "boolean"
      ],
      "properties": {
        "format": {
          "type": "string"
        }
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/meta/content": {
      "$id": "https://json-schema.org/draft/2020-12/meta/content",
      "title": "Content vocabulary meta-schema",
      "type": [
        "object",
        "boolean"
      ],
      "properties": {
        "contentMediaType": {
          "type": "string"
        },
        "contentEncoding": {
          "type": "string"
        },
        "contentSchema": {
          "$dynamicRef": "#meta"
        }
      },
      "$dynamicAnchor": "meta"
    },
    "https://json-schema.org/draft/2020-12/schema": {
      "$id": "https://json-schema.org/draft/2020-12/schema",
      "title": "Core and Validation specifications meta-schema",
      "allOf": [
        {
          "$ref": "meta/core"
        },
        {
          "$ref": "meta/applicator"
        },
        {
          "$ref": "meta/unevaluated"
        },
        {
          "$ref": "meta/validation"
        },
        {
          "$ref": "meta/meta-data"
        },
        {
          "$ref": "meta/format-annotation"
        },
        {
          "$ref": "meta/content"
        }
      ],
      "type": [
        "object",
        "boolean"
      ],
      "properties": {
        "definitions": {
          "$comment": "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
          "type": "object",
          "additionalProperties": {
            "$dynamicRef": "#meta"
          },
          "default": {}
        },
        "dependencies": {
          "$comment": "\"dependencies\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \"dependentSchemas\" and \"dependentRequired\"",
          "type": "object",
          "additionalProperties": {
            "anyOf": [
              {
                "$dynamicRef": "#meta"
              },
              {
                "$ref": "meta/validation#/$defs/stringArray"
              }
            ]
          }
        }
      },
      "$dynamicAnchor": "meta"
    }
  }
})

    /**
     * ResourceDefinition
     * @typedef {import('json-schema-to-ts').FromSchema<typeof ResourceDefinition>} ResourceDefinitionType
     */
    
    
    module.exports = { ConfigurationDefinition,ResourceDefinition}
  