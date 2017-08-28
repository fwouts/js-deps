# JS deps

Generates a graph of dependencies between JS/JSX/TS/TSX files.

This works by launching a local server which will parse your codebase and analyze dependencies. Obviously, no code is transmitted to any third-party server.

Under the hood, it uses the TypeScript library to parse `import` and `require` statements. Note that currently, only top-level statements are taken into account (a conditional `require` will be ignored).

## [Demo](https://cdn.rawgit.com/fwouts/js-deps/demo/dist/viz/index.html)

[![Visualisation of dependencies](../master/example.png)](https://cdn.rawgit.com/fwouts/js-deps/demo/dist/viz/index.html)

## How to use:

```
git clone https://github.com/fwouts/js-deps.git ~/js-deps
cd ~/js-deps
yarn install
yarn start
```
