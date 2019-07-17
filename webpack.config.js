const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = env => {
    const isProd = env.prod === true;
    let type = "lib";

    // eslint-disable-next-line no-console
    console.log(`Compiling: ${type} in mode: ${isProd ? "production" : "dev"}`);

    const entries = {
        lib: "./src/index.js"
    };

    const outputPaths = {
        lib: path.resolve(__dirname, "dist")
    };

    const plugins = [new CopyPlugin([{ from: "public", to: "./" }])];

    const config = {
        entry: entries[type],
        output: {
            path: outputPaths[type],
            filename: "index.js"
        },
        plugins,
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

    return {
        ...config,
        output: {
            ...config.output,
            libraryTarget: "commonjs2"
        },
        // @see https://github.com/webpack/webpack/issues/603#issuecomment-215547651
        externals: /^[^.]/
    };
};
