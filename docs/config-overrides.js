module.exports = function override(config) {
    switch (process.env.NODE_ENV) {
        case "production":
            config.plugins = config.plugins.filter(plugin => {
                return plugin.constructor.name !== "ForkTsCheckerWebpackPlugin";
            });
            return config;
        default:
            let forkTsCheckerWebpackPlugin = config.plugins.find(plugin => {
                return plugin.constructor.name === "ForkTsCheckerWebpackPlugin";
            });
            forkTsCheckerWebpackPlugin.memoryLimit = 4096;
            return config;
    }
};
