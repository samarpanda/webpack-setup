## Webpack 4 demo
Working around webpack 4, trying available features. Steps to build projects

### Steps

1. Added an `index.js` in src directory. And try command `yarn run webpack`. Output file should be created in `dist` directory. Build as per default configurations. `yarn run webpack -p` or `npm run webpack -- -p`

2. Adding npm scripts for environment builds using `--` operator.

3. Setting up debugging for node process & webpack `npm run debugthis` and `npm run debug`. `"debug":"node --inspect --inspect-brk ./node_modules/webpack/bin/webpack.js"`