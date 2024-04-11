const fs = require("fs");
const path = require("path");

const schemas_directory_path = path.join(__dirname, "source/schemas");
const main_file_path = path.join(__dirname, "source/index.js")


async function tweak() {
  const schemas = fs
    .readdirSync(schemas_directory_path)
    .filter((file) => file.endsWith(".bundled.json"));
  schemas.forEach(async (schema_file, index) => {
    const name = schema_file.split(".").at(0);

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
     * @typedef {import('json-schema-to-ts').FromSchema<typeof ${name}>} ${name}
     */
    
    `;

    fs.appendFileSync(main_file_path, type, {
      flag: index ? fs.constants.O_WRONLY : fs.constants.O_TRUNC | fs.constants.O_WRONLY,
    })
  });
}

tweak();
