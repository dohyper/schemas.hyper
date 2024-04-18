

    const collection_controller_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/collection_controller_operation-v1.0.0.json"
})

    /**
     * collection_controller_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof collection_controller_operation>} collection_controller_operationType
     */

    

    const configuration = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "http://schemas.hyper.mathematikoi.co/configuration-v1.0.0.json",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "properties": {
      "$ref": "#/$defs/properties"
    },
    "relations": {
      "$ref": "#/$defs/relations"
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
    "properties": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "https://json-schema.org/draft/2020-12/schema"
        }
      },
      "minProperties": 1
    },
    "relations": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "#/$defs/relation"
        }
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
    }
  }
})

    /**
     * configuration
     * @typedef {import('json-schema-to-ts').FromSchema<typeof configuration>} configurationType
     */

    

    const create_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/create_relationship_operation-v1.0.0.json"
})

    /**
     * create_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof create_relationship_operation>} create_relationship_operationType
     */

    

    const create_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/create_resource_object_operation-v1.0.0.json"
})

    /**
     * create_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof create_resource_object_operation>} create_resource_object_operationType
     */

    

    const delete_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/delete_relationship_operation-v1.0.0.json"
})

    /**
     * delete_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof delete_relationship_operation>} delete_relationship_operationType
     */

    

    const delete_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/delete_resource_object_operation-v1.0.0.json"
})

    /**
     * delete_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof delete_resource_object_operation>} delete_resource_object_operationType
     */

    

    const object_controller_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/object_controller_operation-v1.0.0.json"
})

    /**
     * object_controller_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof object_controller_operation>} object_controller_operationType
     */

    

    const read_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/read_relationship_operation-v1.0.0.json"
})

    /**
     * read_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof read_relationship_operation>} read_relationship_operationType
     */

    

    const read_resource_collection_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/read_resource_collection_operation-v1.0.0"
})

    /**
     * read_resource_collection_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof read_resource_collection_operation>} read_resource_collection_operationType
     */

    

    const read_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/read_resource_object_operation-v1.0.0.json"
})

    /**
     * read_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof read_resource_object_operation>} read_resource_object_operationType
     */

    

    const resource = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
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
    "controllers": {
      "$ref": "#/$defs/controllers"
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
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "https://json-schema.org/draft/2020-12/schema"
        }
      },
      "minProperties": 1
    },
    "relations": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "#/$defs/relation"
        }
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
          "$ref": "#/$defs/projection"
        }
      },
      "required": [
        "relation"
      ]
    },
    "controllers": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9_]+$": {
          "$ref": "#/$defs/controller"
        }
      }
    },
    "controller": {
      "type": "object",
      "properties": {
        "method": {
          "type": "string",
          "enum": [
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "PATCH"
          ],
          "default": "POST"
        },
        "type": {
          "type": "string",
          "enum": [
            "collection",
            "object"
          ]
        },
        "input": {
          "$ref": "https://json-schema.org/draft/2020-12/schema"
        },
        "transactional": {
          "type": "boolean"
        }
      },
      "required": [
        "type",
        "input"
      ]
    }
  }
})

    /**
     * resource
     * @typedef {import('json-schema-to-ts').FromSchema<typeof resource>} resourceType
     */

    

    const undo_collection_controller_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_collection_controller_operation-v1.0.0"
})

    /**
     * undo_collection_controller_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_collection_controller_operation>} undo_collection_controller_operationType
     */

    

    const undo_create_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_create_relationship_operation-v1.0.0.json"
})

    /**
     * undo_create_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_create_relationship_operation>} undo_create_relationship_operationType
     */

    

    const undo_create_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_create_resource_object_operation-v1.0.0.json"
})

    /**
     * undo_create_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_create_resource_object_operation>} undo_create_resource_object_operationType
     */

    

    const undo_delete_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_delete_relationship_operation-v1.0.0.json"
})

    /**
     * undo_delete_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_delete_relationship_operation>} undo_delete_relationship_operationType
     */

    

    const undo_delete_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_delete_resource_object_operation-v1.0.0.json"
})

    /**
     * undo_delete_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_delete_resource_object_operation>} undo_delete_resource_object_operationType
     */

    

    const undo_object_controller_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_object_controller_operation-v1.0.0.json"
})

    /**
     * undo_object_controller_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_object_controller_operation>} undo_object_controller_operationType
     */

    

    const undo_update_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_update_relationship_operation-v1.0.0.json"
})

    /**
     * undo_update_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_update_relationship_operation>} undo_update_relationship_operationType
     */

    

    const undo_update_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/undo_update_resource_object_operation-v1.0.0.json"
})

    /**
     * undo_update_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof undo_update_resource_object_operation>} undo_update_resource_object_operationType
     */

    

    const update_relationship_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/update_relationship_operation-v1.0.0.json"
})

    /**
     * update_relationship_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof update_relationship_operation>} update_relationship_operationType
     */

    

    const update_resource_object_operation = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */({
  "$id": "http://schemas.hyper.mathematikoi.co/update_resource_object_operation-v1.0.0.json"
})

    /**
     * update_resource_object_operation
     * @typedef {import('json-schema-to-ts').FromSchema<typeof update_resource_object_operation>} update_resource_object_operationType
     */

    
    module.exports = { collection_controller_operation,configuration,create_relationship_operation,create_resource_object_operation,delete_relationship_operation,delete_resource_object_operation,object_controller_operation,read_relationship_operation,read_resource_collection_operation,read_resource_object_operation,resource,undo_collection_controller_operation,undo_create_relationship_operation,undo_create_resource_object_operation,undo_delete_relationship_operation,undo_delete_resource_object_operation,undo_object_controller_operation,undo_update_relationship_operation,undo_update_resource_object_operation,update_relationship_operation,update_resource_object_operation}
  