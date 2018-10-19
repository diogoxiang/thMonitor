 

# thmonitor TypeScript Configuration

 

## Links

 

## General

Shared typescript configuration used at thmonitor.

## Installation

```sh
# With Yarn:
yarn add --dev @thmonitor/typescript

# With NPM:
npm install --save-dev @thmonitor/typescript
```

## Usage

Add the following config files to your project's root directory:

**tslint.json**:

```json
{
  "extends": "@thmonitor/typescript/tslint"
}
```

**tsconfig.json**:

```json
{
  "extends": "./node_modules/@thmonitor/typescript/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "src",
    "outDir": "dist"
  }
}
```
