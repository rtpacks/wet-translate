const URL = require("url").URL;
const qs = require("querystring");
const config = require("./wet.config.json");

console.log(config.servicer);
console.log(qs.stringify({ q: ["lisi", "zs"] }));

const url = new URL("http://api.fanyi.baidu.com/api/trans/vip/translate");
url.search =
  "q=apple&from=auto&to=auto&appid=20210921000952000&salt=azin-cn&sign=3a8736c54facc924ce09292957b78757";

// console.log(url)

const l1 =
  "http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&salt=azin-cn&appid=20210921000952000&sign=3a8736c54facc924ce09292957b78757";
const l2 =
  "http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&salt=azin-cn&appid=20210921000952000&sign=3a8736c54facc924ce09292957b78757";

console.log(l1 == l2);

// console.log(encodeURI(`${1+"\n"}`))
console.log(
  ["Hello", "World"].reduce((words, word) => {
    return words + "\n" + word;
  }, "")
);

const s = "Hello";

console.log(`%c${s}`, "color: red;");
console.log("\033[41;30m DONE \033[40;32m .json build success\033[0m");

console.log("\x1B[43m 原文 " + "\x1B[40;33m " + l1 + "\033[0m");
