const fs = require("fs");
const path = require("path");
const { compile } = require("json-schema-to-typescript");
const schemas_directory_path = path.join(__dirname, "source/schemas");

async function lockin() {
  const schemas = fs.readdirSync(schemas_directory_path);

  const symbols = [];

  schemas
    .filter((schema_file) => schema_file.endsWith(".json"))
    .forEach(async (schema_file, index) => {
      const name = schema_file.split("-").at(0);

      symbols.push([name, schema_file]);

      const main_file_path = path.join(__dirname, "types", `${name}.d.ts`);

      if (fs.existsSync(main_file_path)) {
        fs.unlinkSync(main_file_path);
      }

      const schema_path = path.join(schemas_directory_path, schema_file);

      const schema = require(schema_path);

      try {
        const type = await compile(schema, name);
        fs.writeFileSync(main_file_path, type);
      } catch (error) {
        console.log(name, error);
      }
    });

  const index_file_path = path.join(__dirname, "source", "index.js");

  let index = symbols
    .map(([name, path]) => `const ${name} = require("./schemas/${path}")`)
    .join("\n");

  index += `\nmodule.exports = {${symbols.map(([name]) => name).join(", ")}}`;

  fs.writeFileSync(index_file_path, index);
}

lockin();
