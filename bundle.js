const fs = require("fs");
const path = require("path");

const ref = require("@apidevtools/json-schema-ref-parser");

const schemas_directory_path = path.join(__dirname, "source/schemas");

async function bundle() {
  const schemas = fs
    .readdirSync(schemas_directory_path)
    .filter(
      (file) => file.endsWith(".json") && !file.endsWith(".bundled.json")
    );
  schemas.forEach(async (schema_file) => {
    const schema_path = path.join(schemas_directory_path, schema_file);

    const schema = require(schema_path);

    const bundled = await ref.bundle(schema);

    const bundled_schema_path = path.join(
      schemas_directory_path,
      schema_file.replace(".json", ".bundled.json")
    );

    fs.writeFileSync(bundled_schema_path, JSON.stringify(bundled, null, 2));
  });
}

bundle();
