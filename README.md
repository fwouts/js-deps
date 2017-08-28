# JS deps

This generates a graph of dependencies between JS files.

Under the hood, it uses the TypeScript library to parse `import` and `require` statements. Note that currently, only top-level statements considered (e.g. a conditional `require` will be ignored).

## [Demo](https://cdn.rawgit.com/fwouts/js-deps/demo/dist/viz/index.html)

![Visualisation of dependencies](../master/example.png)

## How to use:

```
git clone https://github.com/fwouts/js-deps.git ~/js-deps
cd ~/js-deps
yarn install
yarn start
```
