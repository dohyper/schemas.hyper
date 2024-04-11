const fs = require("fs");
const path = require("path");

const schemas_directory_path = path.join(__dirname, "source/schemas");

async function bundle() {
  const registry = await import("@hyperjump/json-schema/draft-2020-12");

  const bundler = await import("@hyperjump/json-schema/bundle");

  const schemas = fs
    .readdirSync(schemas_directory_path)
    .filter((file) => file.endsWith(".json") && !file.endsWith(".bundled.json"));
  schemas.forEach(async (schema_file) => {
    const schema_path = path.join(schemas_directory_path, schema_file);

    const schema = require(schema_path);

    const uri = `https://schemas.hyper.mathematikoi.co/${schema_file}`

    registry.registerSchema(
      schema,
      uri
    );

    const bundled = await bundler.bundle(uri);

    const bundled_schema_path = path.join(
      schemas_directory_path,
      schema_file.replace(".json", ".bundled.json")
    );

    fs.writeFileSync(bundled_schema_path, JSON.stringify(bundled, null, 2));
  });
}

bundle();
