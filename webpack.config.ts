import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

const styledComponentsTransformer = createStyledComponentsTransformer();

const webpackConfig = (env): Configuration => ({
	entry: './src/index.tsx',
	...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
					transpileOnly: true
				},
				exclude: /dist/
			}
		]
	},

	devServer: {
		contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true,
		compress: true,
		port: 8000
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		// errors in config, workaround ref: https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		plugins: [new TsconfigPathsPlugin()]
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'build.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.PRODUCTION': env.production || !env.development,
			'process.env.NAME': JSON.stringify(require('./package.json').name),
			'process.env.VERSION': JSON.stringify(require('./package.json').version),
			'process.env.AUTHOR': JSON.stringify(require('./package.json').author)
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: { files: './src/**/*.{ts,tsx,js,jsx}' }
		})
	]
});

export default webpackConfig;
