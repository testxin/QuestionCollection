题集前端code


```bash
git clone https://github.com/testxin/QuestionCollection.git QuestionCollection
cd QuestionCollection
npm install
npm run gulp
```

## connect-history-api-fallback 伪静态化映射
   <font color="red">需要过滤SourceMap因为他的header中没有accept导致判断进入错误
   在回调headers下加入判断if (!req.url.toString().match(/\.map$/g)) 不走过滤</font>

## 介绍
   
   用于练手的demo使用了es6+webpack+gulp+redux+react+materialUI  
   src/api/为测试数据包,并没有用gulp构建,如果测试请把api拷贝到生成的public下面
   <font color="red" size=7 >browser-sync需要用**'connect-history-api-fallback'**实现SPA应用映射</font>

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 6.1+ ✔ |
