const fs = require("fs");
const path = require("path");
const { compile, compileFromFile } = require('json-schema-to-typescript');
const schemas_directory_path = path.join(__dirname, "source/schemas");
const main_file_path = path.join(__dirname, "source/index.d.ts");

async function lockin() {
  const schemas = fs
    .readdirSync(schemas_directory_path)

  const symbols = [];

  if (fs.existsSync(main_file_path)) {
  fs.unlinkSync(main_file_path);
}

  schemas.forEach(async (schema_file, index) => {
    const name = schema_file.split("-").at(0)

    const schema_path = path.join(schemas_directory_path, schema_file);

    const schema = require(schema_path);

    compileFromFile(schema_path)
    .then(type => fs.appendFileSync(main_file_path, type))
  });

}

lockin();
