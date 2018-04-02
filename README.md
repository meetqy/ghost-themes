# ghost博客主题
预览地址：[meetqy-themes](https://www.meetqy.com)

根据[caffeine-theme](https://github.com/kelyvin/caffeine-theme)修改而来。

### 预览图

![15217092335ab370b148a8a](https://www.meetqy.com/content/images/2018/03/15217092335ab370b148a8a.png)

### 主要修改内容

* 处理页面国内加载慢（可能原开发者是国外的原因）
* 简化文件打包(gulp)
* 英文翻译
* 增加代码显示行号
* 增加畅言评论系统
* 将mip,amp集合到amp.hbs文件（百度熊掌号直接提交pc页面地址+amp/）
* 增加设置并显示友情链接功能
* 增加文章详情页面底部显示标签云

### 使用

* 设置并显示友情链接：进入后台管理“code injection”设置ghost_foot。
![2](https://www.meetqy.com/content/images/2018/03/2.png)
预览图：
![1](https://www.meetqy.com/content/images/2018/03/2-1.png)

* 增加作品展示页面：在后台管理界面新增一个独立页面。页面链接:你的网站地址 + /works-show/，页面标题随便取。
![QQ--20180322171037](https://www.meetqy.com/content/images/2018/03/QQ--20180322171037.png)

### 注意事项
clone到本地之后：
* 需要将畅言的评论换成你的,或删除掉。
* 谷歌站长文件、标签换成你的，或删除掉（可能会影响加载速度）。
* 百度站长文件、标签、mip返回你的，或删除掉（可能影响加载速度）。

### 最近更新
2018-04-02
* 优化首页加载（Google统计影响加载速度）

2018-03-*
* 增加设置并显示友情链接功能
* 优化代码显示
* 优化百度mip(amp.hbs)
* 访问地址：链接后面加上/amp/   (注意：amp后面一定要有"/"，不然页面会重定向，熊掌号会提示页面重定向错误)
* 增加mip(partials/headscript.hbs)
* 移动端增加百度熊掌号关注(/post.hbs)
* 优化文章详情页面显示代码行号，复制时不会复制到行号(/assets/js/src/other.js)
* 文章内容h标签优化

***

2018-01-*
* 增加畅言评论系统（/assets/js/src/other.js）
