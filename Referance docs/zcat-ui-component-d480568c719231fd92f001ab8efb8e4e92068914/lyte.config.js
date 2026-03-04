let path = require("path");
module.exports = function() {
    return {
        initialFileToLoad : path.join(__dirname,"dummy-app-init.js")         
    }
}
