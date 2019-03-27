// This file is the "globalSetup" file.
// FIXME: make this global somehow
module.exports = () => {
    const execa = require("execa");
    const fs = require("fs");
    const path = require("path");

    const command = "echo { 'key': 'value }";
    const output = execa.shellSync(command);
    const testEnvironmentOutput = JSON.parse(output.stdout);

    if (!fs.existsSync("./tmp")) {
        fs.mkdirSync("./tmp");
    }

    fs.writeFileSync('./tmp/test-manifest.json', JSON.stringify(testEnvironmentOutput));
};
