const fs = require("fs");
const path = require("path");
const reference = require("@apidevtools/json-schema-ref-parser");
const { compile } = require("json-schema-to-typescript");
const schemas_directory_path = path.join(__dirname, "source/schemas");


async function lockin() {
  const schemas = fs.readdirSync(schemas_directory_path);

  schemas.forEach(async (schema_file, index) => {
    const name = schema_file.split("-").at(0);

    const main_file_path = path.join(__dirname, "source", name)

    if (fs.existsSync(main_file_path)) {
      fs.unlinkSync(main_file_path);
    }

    const schema_path = path.join(schemas_directory_path, schema_file);

    try {
      const type = await compile(require(schema_path), name);
      fs.appendFileSync(main_file_path, type);
    } catch (error) {
      console.log(name, error);
    }
  });
}

lockin();
