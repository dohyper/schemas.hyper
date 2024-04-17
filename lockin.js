const fs = require("fs");
const path = require("path");

const schemas_directory_path = path.join(__dirname, "source/schemas");
const main_file_path = path.join(__dirname, "source/index.js");

async function lockin() {
  const schemas = fs
    .readdirSync(schemas_directory_path)

  const symbols = [];

  fs.unlinkSync(main_file_path);

  schemas.forEach(async (schema_file, index) => {
    const name = schema_file.split("-").at(0)

    const schema_path = path.join(schemas_directory_path, schema_file);

    const schema = require(schema_path);

    const type = `

    const ${name} = /** @type {const} @satisfies {import('json-schema-to-ts').JSONSchema} */(${JSON.stringify(
      schema,
      null,
      2
    )})

    /**
     * ${name}
     * @typedef {import('json-schema-to-ts').FromSchema<typeof ${name}>} ${name}Type
     */

    `;

    fs.appendFileSync(main_file_path, type);

    symbols.push(name);
  });

  const exports = `
    module.exports = { ${symbols.join(",")}}
  `;

  fs.appendFileSync(main_file_path, exports);
}

lockin();
