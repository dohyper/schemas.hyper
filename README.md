# documentation

`source/resource.json` is the source of truth for the resource definition json schema.

`source/configuration.json` is the source of truth for the configuration definition json schema.

types are inferred from the json schemas and emitted using [json-schema-to-ts](https://www.npmjs.com/package/json-schema-to-ts). due to some kind of limitation, the schemas needs to be copied to `source/index.js` so that the type declarations can work, [see](https://github.com/ThomasAribart/json-schema-to-ts/blob/HEAD/documentation/FAQs/does-json-schema-to-ts-work-on-json-file-schemas.md).

# building

the building of this package conists of the following steps:

1. `npm run build:bundle`: bundling the schemas *so that the type inference can be done*.
2. `npm run build:tweak`: injecting the bundled schemas to `source/index.js` so that the types inference can be done.
3. `npm run build:types`: emitting .d.ts with types from `sourc/index.js`, [see](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html).
