# JS deps

This generates a graph of dependencies between JS files.

Under the hood, it uses the TypeScript library to parse import statements. Note that currently, only ES6 import are supported.

## How to use:

```
git clone https://github.com/fwouts/js-deps.git ~/js-deps
cd ~/js-deps
yarn install
JS_DIR=/your/js/project/src yarn serve
```
