#!/usr/bin/env node
const os = require("os");
const pkg = require("./package.json");

const { username } = os.userInfo();

console.log(`
❤️ Hello ${username}!
❤️
❤️ This is a demonstration of how to typosquat popular
❤️ scoped NPM packages ("${pkg.name}") by taking control of
❤️ similar GitHub repos ("github.com/${pkg.name.slice(1)}").
❤️
❤️ Don't worry, this is completely harmless. But at this point
❤️ a malicious party could run whatever code.
❤️
❤️ You probably wanted to run \`npx ${pkg.name} ...\`.
`);
process.exit(1);
