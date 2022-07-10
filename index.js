#!/usr/bin/env -u=DEBUG node

import { Command } from "commander";
import md5 from "js-md5";

import { translate } from "./src/core";
import pack from "./package.json" assert{type: 'json'}
import {
  slat, 
  appid, 
  secret, 
  api
} from './src/lib'


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
    const sign = md5(`${appid}${words}${slat}${secret}`);
    translate(sign, words, dest);
  });

program.parse(argv);
