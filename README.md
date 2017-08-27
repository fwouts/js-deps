# JS deps

This generates a graph of dependencies between JS files.

Under the hood, it uses the TypeScript library to parse import statements. Note that currently, only ES6 `import` statements are supported.

## Demo

[Try it out](https://cdn.rawgit.com/fwouts/js-deps/master/dist/viz/index.html)

## How to use:

```
git clone https://github.com/fwouts/js-deps.git ~/js-deps
cd ~/js-deps
yarn install
JS_DIR=./src yarn serve
# Try replacing JS_DIR with your own project
```
