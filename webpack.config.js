const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    const isProd = env.prod === true;
    const isExample = env.example === true;
    const isDocs = env.docs === true;
    let type = null;

    if (isExample) type = "example";
    if (isDocs) type = "docs";
    if (!type) type = "lib";

    // eslint-disable-next-line no-console
    console.log(`Compiling: ${type} in mode: ${isProd ? "production" : "dev"}`);

    const entries = {
        docs: "./docs/src/index.js",
        lib: "./src/index.js"
    };

    const outputPaths = {
        docs: path.resolve(__dirname, "docs/dist"),
        lib: path.resolve(__dirname, "dist")
    };

    const config = {
        entry: entries[type],
        output: {
            path: outputPaths[type],
            filename: "index.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.svg$/,
                    loader: "raw-loader"
                }
            ]
        }
    };

    if (!isExample) {
        return {
            ...config,
            output: {
                ...config.output,
                libraryTarget: "commonjs2"
            },
            // @see https://github.com/webpack/webpack/issues/603#issuecomment-215547651
            externals: /^[^.]/
        };
    }

    return {
        ...config,
        devtool: "cheap-module-eval-source-map",
        devServer: {
            contentBase: outputPaths.example,
            compress: true,
            port: 8080,
            historyApiFallback: { disableDotRule: true }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./docs/src/index.ejs"
            })
        ]
    };
};
