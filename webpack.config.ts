import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import htmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { VueLoaderPlugin } from 'vue-loader'

module.exports = {
	entry: {
		main: './src/main.ts',
	},
	output: {
		filename: '[name].[contenthash:8].js',
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: '[name].[contenthash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader',
			},
			{
				test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name][contenthash:8].[ext]',
					outputPath: 'assets/img',
					esModule: false,
				},
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:8].css',
			chunkFilename: '[name].[contenthash:8].css',
		}),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: './public/favicon.ico',
		}),
	],
	resolve: {
		alias: {
			vue: '@vue/runtime-dom',
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['*', '.js', '.ts', '.vue', '.json'],
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -10,
					chunks: 'all',
				},
			},
		},
	},
	devServer: {
		historyApiFallback: true,
	},
	stats: 'errors-only',
}
