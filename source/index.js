

    const ConfigurationDefinition = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object"
})

    /**
     * ConfigurationDefinition
     * @typedef {import('json-schema-to-ts').FromSchema<typeof ConfigurationDefinition>} ConfigurationDefinitionType
     */
    
    

    const ResourceDefinition = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "applicability": {
      "$ref": "#/definitions/applicability"
    },
    "properties": {
      "$ref": "#/definitions/properties"
    },
    "relations": {
      "$ref": "#/definitions/relations"
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
  "definitions": {
    "applicability": {
      "type": "object",
      "patternProperties": {
        "^create|update|delete$": {
          "$ref": "#/definitions/operation"
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
          "$schema": "http://json-schema.org/draft-07/schema#",
          "$id": "http://json-schema.org/draft-07/schema#",
          "title": "Core schema meta-schema",
          "definitions": {
            "schemaArray": {
              "type": "array",
              "minItems": 1,
              "items": {
                "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
              }
            },
            "nonNegativeInteger": {
              "type": "integer",
              "minimum": 0
            },
            "nonNegativeIntegerDefault0": {
              "allOf": [
                {
                  "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger"
                },
                {
                  "default": 0
                }
              ]
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
          "type": [
            "object",
            "boolean"
          ],
          "properties": {
            "$id": {
              "type": "string",
              "format": "uri-reference"
            },
            "$schema": {
              "type": "string",
              "format": "uri"
            },
            "$ref": {
              "type": "string",
              "format": "uri-reference"
            },
            "$comment": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": true,
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
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger"
            },
            "minLength": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeIntegerDefault0"
            },
            "pattern": {
              "type": "string",
              "format": "regex"
            },
            "additionalItems": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "items": {
              "anyOf": [
                {
                  "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
                },
                {
                  "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray"
                }
              ],
              "default": true
            },
            "maxItems": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger"
            },
            "minItems": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeIntegerDefault0"
            },
            "uniqueItems": {
              "type": "boolean",
              "default": false
            },
            "contains": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "maxProperties": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeInteger"
            },
            "minProperties": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/nonNegativeIntegerDefault0"
            },
            "required": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/stringArray"
            },
            "additionalProperties": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "definitions": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
              },
              "default": {}
            },
            "properties": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
              },
              "default": {}
            },
            "patternProperties": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
              },
              "propertyNames": {
                "format": "regex"
              },
              "default": {}
            },
            "dependencies": {
              "type": "object",
              "additionalProperties": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
                  },
                  {
                    "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/stringArray"
                  }
                ]
              }
            },
            "propertyNames": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "const": true,
            "enum": {
              "type": "array",
              "items": true,
              "minItems": 1,
              "uniqueItems": true
            },
            "type": {
              "anyOf": [
                {
                  "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/simpleTypes"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/simpleTypes"
                  },
                  "minItems": 1,
                  "uniqueItems": true
                }
              ]
            },
            "format": {
              "type": "string"
            },
            "contentMediaType": {
              "type": "string"
            },
            "contentEncoding": {
              "type": "string"
            },
            "if": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "then": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "else": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            },
            "allOf": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray"
            },
            "anyOf": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray"
            },
            "oneOf": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24/definitions/schemaArray"
            },
            "not": {
              "$ref": "#/definitions/properties/patternProperties/%5E%5Ba-zA-Z0-9_%5D%2B%24"
            }
          },
          "default": true
        }
      }
    },
    "relations": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "#/definitions/relation"
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
          "$ref": "#/definitions/cardinality"
        },
        "bidirectionality": {
          "$ref": "#/definitions/bidirectionality"
        },
        "constraints": {
          "$ref": "#/definitions/constraints"
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
      "$ref": "#/definitions/relation"
    },
    "bidirectionality": {
      "type": "object",
      "properties": {
        "relation": {
          "type": "string"
        },
        "projection": {
          "$ref": "#/definitions/relation"
        }
      },
      "required": [
        "relation"
      ]
    }
  }
})

    /**
     * ResourceDefinition
     * @typedef {import('json-schema-to-ts').FromSchema<typeof ResourceDefinition>} ResourceDefinitionType
     */
    
    
    module.exports = { ConfigurationDefinition,ResourceDefinition}
  