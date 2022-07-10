## Wet

wet --》 we-translate

VSCode的翻译插件还是挺好用的，但是只能翻译方向只能是英文到中文（也许我没发现）。

想不出变量的英文名称就难受，得重新打开有道或浏览器进行翻译，而控制台/命令行是非常棒的、能提升效率的平台，所以呢就有了wet。

## 使用

**`npm install wet-tool`**

|         command命令          |     explanation解释      |
| :--------------------------: | :----------------------: |
|          wet  Hello          |        英文->中文        |
|           wet 你好           |        中文->英文        |
| wet Hello (-D \| --dest)  zh |        翻译到中文        |
|  wet hello -E2C \| --en2cn   | 指定翻译模式如英文到中文 |

- 指定翻译模式待完善
- 不指定翻译则默认为：中译英-英译中

## 输出

```sh
不指定翻译 默认 中译英 | 英译中
$ wet hi hi hi hi hi hi hi hi
 	原文  hi hi hi hi hi hi hi hi
 	de To zh  你好 你好 你好 你好 你好 你好 你好 你好
 	
指定翻译到文言文
$ wet 未来 -D wyw
 	原文  未来
 	zh To wyw  后末世
```

## 配置

因百度翻译标准版调用有限制（一秒），所以为了良好的体验最好申请个人的appid。

- 申请百度翻译

[百度翻译开放平台 (baidu.com)](https://fanyi-api.baidu.com/doc/21)

- 配置个人 `salt & appid & secret` 

```json
{
  "servicer": "BAIDU",
  "salt": "azin-cn",
  "BAIDU": {
    "appid": "20210921000952000",
    "secret": "7KIut5cwuDYzB6rC9MCj",
    "api": "https://fanyi-api.baidu.com/api/trans/vip/translate"
  }
}
```

## 项目总结

- http/https模块
  - 注意IncomingMessage与Response的区别，发送者与接收者
  - 发送者必须显式的调用end或者close函数进行关闭
  - 模块内提供的get函数默认会调用close，所以Response类型的req变量可以不用手动关闭。
  - IncomingMessage不一定是req，还可能是res，Response同理。

- qs.stringify()已经编码了，不要用encodeURL再次编码
- console.log() 五彩斑斓的黑

## Future

未来还会增加更多的翻译选项

- bing
- youdao
- google

欢迎给我提issue

## 参考

- -D | --dest 可以指定以下部分内容（引用百度）

| 名称         | 代码 | 名称       | 代码 | 名称       | 代码 |
| ------------ | ---- | ---------- | ---- | ---------- | ---- |
| 自动检测     | auto | 中文       | zh   | 英语       | en   |
| 粤语         | yue  | 文言文     | wyw  | 日语       | jp   |
| 韩语         | kor  | 法语       | fra  | 西班牙语   | spa  |
| 泰语         | th   | 阿拉伯语   | ara  | 俄语       | ru   |
| 葡萄牙语     | pt   | 德语       | de   | 意大利语   | it   |
| 希腊语       | el   | 荷兰语     | nl   | 波兰语     | pl   |
| 保加利亚语   | bul  | 爱沙尼亚语 | est  | 丹麦语     | dan  |
| 芬兰语       | fin  | 捷克语     | cs   | 罗马尼亚语 | rom  |
| 斯洛文尼亚语 | slo  | 瑞典语     | swe  | 匈牙利语   | hu   |
| 繁体中文     | cht  | 越南语     | vie  |            |      |