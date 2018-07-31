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

9. Webpack input, output & loaders configurations

Loaders
```js
module: {
	rules: [
		{test: /\.ts$/, use: 'ts-loader'},
		{test: /\.js$/, use: 'babel-loader'},
		{test: /\.css$/, use: 'css-loader'}
	]
}
```

```js
module: {
	rules: [
		{
			test: regex,
			use: (Array|String|Function),
			include: RegExp[],
			exclude: RegExp[],
			issuer: (RegExp|String)[],
			enforce: 'pre'|'post'
		}
	]
}
```

10. Chaining loaders - Tells webpack how to interpret and translate files. Transformed on a per-file basis before adding to the dependency graph.

11. Webpack plugins 
 a. objects (with and `apply` property)
 b. Allow to hook into the entire compilation lifecyle
 c. lots / varities of available plugins

12. Basic plugin example - Plugin is an ES5 'class' which implements an apply function. The compiler uses it to emit events

```js
function SamplePlugin(){}

SamplePlugin.prototype.apple = function(compiler){
	if(typeof(process) !== 'undefined'){
		compiler.plugin('done', function(stats){
			if(stats.hasErrors()){
				process.stderr.write('\x07')
			}
		});

		compiler.plugin('failed', function(err){
			process.stderr.write('\x07')
		})
	}
}

module.exports = SamplePlugin


//Usage
//require() from node_modules or webpack or local file
modules.exports = {
	//...
	plugins:[
		new SamplePlugin()
	]
	//..
}
```

13. Webpack config - `npm run prod`

```js
module.exports = ({mode}) => {
	console.log(mode)
	return {
		mode,
		output: {
			filename: 'bundle.js'
		}	
	}
}
```

14. Adding webpack plugins - Starting with `html-webpack-plugin` & `progressPlugin`

15. Adding `webpack-dev-server` for development environment. Try command `npm run dev`. You can see a button added to the browser & changes are reflecting instantly.

16. Splitting environment config files, using webpack-merge & modeConfigs `const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)`

17. Setting default preset configurations `({ mode, presets } = { mode: 'production', presets: [] })`

18. You can add a production config to override the ouput file and run `npm run prod`

19. Using css with webpack development flow. Every change reloads the browser to inject the change.

```js
"webpack-dev-server":"webpack-dev-server",
"dev":"npm run webpack-dev-server -- --env.mode development",
```

20. Hot module replacement with css using `--hot` flag

```js
"webpack-dev-server":"webpack-dev-server",
"dev":"npm run webpack-dev-server -- --env.mode development --hot"
```

21. File loader & Url loader - `url-loader` uses `file-loader` under the hood so we are installing both at the same time. And in webpack.config.js we can only see url-loader but not file-loader as of now.

22. Implementing a managable way of configuring presets. Found this to be one of the elegant way i have came across yet. Run command `npm run prod` everything working. Now we can start adding different preset / experimentation configurations those can be composed together.

23. Implementing `webpack-bundle-analyzer` preset. You can try prod analyze the build by running `npm run prod:analyze`
