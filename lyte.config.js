let path = require("path");
module.exports = function(options) {
    return {
        initialFileToLoad : path.join(options.root, "app-init.js"),

        entry : {
            "app-bundle" : "./app.js"
        }
    }
}
