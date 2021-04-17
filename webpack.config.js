import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const mode = process.env.NODE_ENV || 'development';
const __dirname = path.resolve();

const webpackConfig = {
    mode,
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist', 'public'),
        publicPath: '/assets/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        compress: true,
        port: 8080,
        publicPath: '/assets/',
        historyApiFallback: true,
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
};

export default webpackConfig;
