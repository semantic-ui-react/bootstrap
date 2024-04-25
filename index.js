#!/usr/bin/env node
const os = require("os");

const { username } = os.userInfo();

const pkgname = `${__filename.split("/").slice(-3, -1).join("/")}`;

console.log(`
Hello ${username}!

This is a demonstration of how to typosquat popular
scoped NPM packages ("@${pkgname}") by taking control of
similar GitHub repos ("github.com/${pkgname}").

Don't worry, this is completely harmless. But at this point
a malicious party could run whatever code.

You probably wanted to run \`npx @${pkgname} ...\`.
`);
process.exit(1);
