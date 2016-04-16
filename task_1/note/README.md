## 任务一用到的标签

任务一不关注样式，只关注文档结构，比较注重语义化

* ```<header></header>```
    * ```<header>``` 标签定义文档的页眉（介绍信息）。

* ```<nav></nav>```
    * ```<nav>``` 标签定义导航链接的部分。
    * 提示：如果文档中有“前后”按钮，则应该把它放到 ```<nav>``` 元素中。

* ```<article></article>```
    * 定义文章
    * 潜在来源：论坛帖子，报纸文章，博客条目，用户评论

* ```<timer></timer>```
    * <time> 标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。
    *该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。
```javascript
<p>我们在每天早上 <time>9:00</time> 开始营业。</p>
<p>我在 <time datetime="2008-02-14">情人节</time> 有个约会。</p>
```
* ```<section></section>```
    * ```<section>``` 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

* ```<figure></figure><figcaption></figcaption>```   [demo](http://www.w3school.com.cn/tiy/t.asp?f=html5_figcaption)
    * ```<figure>``` 标签规定独立的流内容（图像、图表、照片、代码等等）。
    * figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。
    * figcaption 元素为 figure 添加标题（caption）。
    * "figcaption" 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。

* ```<aside></aside>```
    * 定义：标签定义其所处内容之外的内容。aside 的内容应该与附近的内容相关。
    * ```<aside>``` 的内容可用作文章的侧栏。

* ```<footer></footer>```
    * ```<footer>``` 标签定义文档或节的页脚。
    * ```<footer>``` 元素应当含有其包含元素的信息。
    * 页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。
    * 您可以在一个文档中使用多个 ```<footer>``` 元素。

* ```<fieldset></fieldset>```
    * fieldset 元素可将表单内的相关元素分组。
    * legend 标签为fieldset元素定义标题