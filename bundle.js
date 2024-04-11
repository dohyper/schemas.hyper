const fs = require("fs");
const path = require("path");

const schemas_directory_path = path.join(__dirname, "source/schemas");

async function bundle() {
  const dialect = await import("@hyperjump/json-schema/draft-07");

  const bundler = await import("@hyperjump/json-schema/bundle");

  const schemas = fs
    .readdirSync(schemas_directory_path)
    .filter(
      (file) => file.endsWith(".json") && !file.endsWith(".bundled.json")
    );
  schemas.forEach(async (schema_file) => {
    const schema_path = path.join(schemas_directory_path, schema_file);

    const schema = require(schema_path);

    const uri = `https://schemas.hyper.mathematikoi.co/${schema_file}`;

    dialect.registerSchema(schema, uri);

    try {
      const output = await dialect.validate(uri);
      console.log({ output });
    } catch (error) {
      console.log(error.output);
    }

    const bundled = await bundler.bundle(uri);

    const bundled_schema_path = path.join(
      schemas_directory_path,
      schema_file.replace(".json", ".bundled.json")
    );

    fs.writeFileSync(bundled_schema_path, JSON.stringify(bundled, null, 2));
  });
}

bundle();
