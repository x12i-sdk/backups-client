# @x12i/backups-client usage example

Client SDK for @x12i/backups-agent: download a backup zip, unzip and decompress it, and reassemble JSON on the caller side.

This consuming application demonstrates **read a small stored zip archive without a backup server** using the published npm package, pinned to `0.7.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Download and read a supported backup archive in a consuming application.
- Reassemble compressed backup parts into caller-side JSON for inspection.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/backups-client)
- [Implementation monorepo](https://github.com/x12i/backups-agent)
- [Reviewed package source](https://github.com/x12i/backups-agent/tree/42bc256e7e036d80406120eaf57ee2b5adb37e0b/packages/client)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
