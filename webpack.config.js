const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = env => {
    const isProd = env.prod === true
    let type = 'lib'

    // eslint-disable-next-line no-console
    console.log(`Compiling: ${type} in mode: ${isProd ? 'production' : 'development'}`)

    const entries = {
        lib: './src/index.ts',
    }

    const outputPaths = {
        lib: path.resolve(__dirname, 'dist'),
    }

    const plugins = [new CopyPlugin([{ from: 'types', to: './' }])]

    const config = {
        mode: "production",
        entry: entries[type],
        output: {
            path: outputPaths[type],
            filename: 'index.js',
        },
        devtool: 'source-map',
        plugins,
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
                { test: /\.js$/, use: 'source-map-loader' },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: 'raw-loader',
                },
            ],
        },
    }

    return {
        ...config,
        output: {
            ...config.output,
            libraryTarget: 'commonjs2',
        },
        // @see https://github.com/webpack/webpack/issues/603#issuecomment-215547651
        externals: /^[^.]/,
    }
}