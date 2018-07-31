## Webpack 4 demo
Working around webpack 4, trying available features. Steps to build projects

### Steps

1. Added an `index.js` in src directory. And try command `yarn run webpack`. Output file should be created in `dist` directory. Build as per default configurations. `yarn run webpack -p` or `npm run webpack -- -p`

2. Adding npm scripts for environment builds using `--` operator.

3. Setting up debugging for node process & webpack `npm run debugthis` and `npm run debug`. `"debug":"node --inspect --inspect-brk ./node_modules/webpack/bin/webpack.js"`

4. Webpack watch mode configured `npm run dev -- --watch`

5. ESM & Commonjs syntax used in different files i.e `export` & `exports`. Webpack still was able to bundle your files. 

6. Treeshaking / dead code elimination by statically analyzing the code

7. Creating a `webpack.config.js` and setting a mode as `none`

```js
module.exports = {
	mode: 'none'
}
```

8. Webpack bundle walkthrough using command `npm run webpack`. Go through the build file(`main.js`) to undestand how webpack runtime works.

