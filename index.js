#!/usr/bin/env node

const { Command } = require("commander");

const { translate } = require("./src/core/index.js");
const pack = require("./package.json");

const program = new Command();
const version = pack.version;
const argv = process.argv;

/* ========================SERVICER============================= */
/* 名称、版本号 */
program
  .name("wet")
  .description("description: the tool for promoting efficiency")
  .version(version, "-V --version", "output the current version");

/* wet hello | wet 你好*/
program
  .argument("<words...>", "Translate words 翻译词句")
  .option("-D --dest <dest>", "翻译到指定语言 -D CN")
  .action((words, { dest }) => {
    translate(words, dest);
  });

program.parse(argv);
