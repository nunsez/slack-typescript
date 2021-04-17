import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    output: {
        path: path.resolve() + path.join('dist', 'public'),
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
