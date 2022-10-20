import{_ as l,r as c,o as i,c as p,a as n,b as t,d as a,e}from"./app.c8609cc4.js";const o={},u={href:"https://gitee.com/link?target=https%3A%2F%2Fcli.vuejs.org%2Fzh%2F",target:"_blank",rel:"noopener noreferrer"},d=a("\u5B98\u7F51\u4F20\u9001\u95E8"),r=e(`<h2 id="\u521B\u5EFA-vue-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-vue-\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA Vue \u9879\u76EE</h2><ul><li>\u5168\u5C40\u5B89\u88C5 vue \u811A\u624B\u67B6\uFF1A<code>npm i -g @vue/cli</code></li><li>\u521B\u5EFA\u9879\u76EE\uFF1A<code>vue create project-name</code></li><li>\u8FD0\u884C\u9879\u76EE\uFF1A<code>npm run serve</code></li><li>\u6253\u5305\u9879\u76EE\uFF1A<code>npm run build</code></li></ul><h2 id="vue-\u811A\u624B\u67B6\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#vue-\u811A\u624B\u67B6\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> Vue \u811A\u624B\u67B6\u9879\u76EE\u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 node_modules
\u251C\u2500\u2500 public
\u2502 \u251C\u2500\u2500 favicon.ico: \u9875\u7B7E\u56FE\u6807
\u2502 \u2514\u2500\u2500 index.html: \u4E3B\u9875\u9762
\u251C\u2500\u2500 src
\u2502 \u251C\u2500\u2500 assets: \u5B58\u653E\u9759\u6001\u8D44\u6E90
\u2502 \u2502 \u2514\u2500\u2500 logo.png
\u2502 \u2502\u2500\u2500 component: \u5B58\u653E\u7EC4\u4EF6
\u2502 \u2502 \u2514\u2500\u2500 HelloWorld.vue
\u2502 \u2502\u2500\u2500 App.vue: \u6C47\u603B\u6240\u6709\u7EC4\u4EF6
\u2502 \u2502\u2500\u2500 main.js: \u5165\u53E3\u6587\u4EF6
\u251C\u2500\u2500 .gitignore: git \u7248\u672C\u7BA1\u5236\u5FFD\u7565\u7684\u914D\u7F6E
\u251C\u2500\u2500 babel.config.js: babel \u7684\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 package.json: \u5E94\u7528\u5305\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 README.md: \u5E94\u7528\u63CF\u8FF0\u6587\u4EF6
\u251C\u2500\u2500 package-lock.json\uFF1A\u5305\u7248\u672C\u63A7\u5236\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.html</code> \u4EE3\u7801\u5206\u6790\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- \u9488\u5BF9IE\u6D4F\u89C8\u5668\u7684\u4E00\u4E2A\u7279\u6B8A\u914D\u7F6E\uFF0C\u542B\u4E49\u662F\u8BA9IE\u6D4F\u89C8\u5668\u4EE5\u6700\u9AD8\u7684\u6E32\u67D3\u7EA7\u522B\u6E32\u67D3\u9875\u9762 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- \u5F00\u542F\u79FB\u52A8\u7AEF\u7684\u7406\u60F3\u89C6\u53E3 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;%= BASE_URL %&gt; \u8868\u793A public \u6587\u4EF6\u5939\u8DEF\u5F84 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- \u62FF package-lock.json \u7684 name \u4F5C\u4E3A\u6807\u9898 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>&lt;%= htmlWebpackPlugin.options.title %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u5F53\u6D4F\u89C8\u5668\u4E0D\u652F\u6301js\u65F6noscript\u4E2D\u7684\u5143\u7D20\u5C31\u4F1A\u88AB\u6E32\u67D3 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>We&#39;re sorry but &lt;%= htmlWebpackPlugin.options.title %&gt; doesn&#39;t work properly without JavaScript enabled. Please enable it to continue.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u5BB9\u5668 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- built files will be auto injected --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u914D\u7F6E\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u914D\u7F6E\u811A\u624B\u67B6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u914D\u7F6E\u811A\u624B\u67B6</h3><ul><li>\u9009\u9879</li></ul><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>Vue CLI v5.0.4
? Please pick a preset: (Use arrow keys)
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
&gt; Manually select features      \u9009\u81EA\u5B9A\u4E49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u624B\u52A8\u9009\u62E9\u529F\u80FD</li></ul><img src="https://img-blog.csdnimg.cn/5d54c63f08eb48ff87d979f4adcc75dc.png"><ul><li>\u9009\u62E9vue\u7684\u7248\u672C</li></ul><div class="language-React ext-React line-numbers-mode"><pre class="language-React"><code>  3.x
&gt; 2.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u662F\u5426\u4F7F\u7528history\u6A21\u5F0F</li></ul><img src="https://img-blog.csdnimg.cn/19682e290f3742c090c760024299cd36.png"><ul><li>\u9009\u62E9css\u9884\u5904\u7406</li></ul><img src="https://img-blog.csdnimg.cn/b0414cac76a149828cad6aec361a0b08.png"><ul><li>\u9009\u62E9eslint\u7684\u98CE\u683C \uFF08eslint \u4EE3\u7801\u89C4\u8303\u7684\u68C0\u9A8C\u5DE5\u5177\uFF0C\u68C0\u9A8C\u4EE3\u7801\u662F\u5426\u7B26\u5408\u89C4\u8303\uFF09</li><li>\u6BD4\u5982\uFF1Aconst age = 18; =&gt; \u62A5\u9519\uFF01\u591A\u52A0\u4E86\u5206\u53F7\uFF01\u540E\u9762\u6709\u5DE5\u5177\uFF0C\u4E00\u4FDD\u5B58\uFF0C\u5168\u90E8\u683C\u5F0F\u5316\u6210\u6700\u89C4\u8303\u7684\u6837\u5B50</li></ul><img src="https://img-blog.csdnimg.cn/c7d1bdc974754a4aa4a1ad5b927fc8a5.png"><ul><li>\u9009\u62E9\u6821\u9A8C\u7684\u65F6\u673A \uFF08\u76F4\u63A5\u56DE\u8F66\uFF09</li></ul><img src="https://img-blog.csdnimg.cn/8507ca3e6b454869be8bed0f4efde4cd.png"><ul><li>\u9009\u62E9\u914D\u7F6E\u6587\u4EF6\u7684\u751F\u6210\u65B9\u5F0F \uFF08\u76F4\u63A5\u56DE\u8F66\uFF09</li></ul><img src="https://img-blog.csdnimg.cn/91112fcce41a465fb37ae956f5b9ec4e.png"><ul><li>\u662F\u5426\u4FDD\u5B58\u9884\u8BBE\uFF0C\u4E0B\u6B21\u76F4\u63A5\u4F7F\u7528\uFF1F =&gt; \u4E0D\u4FDD\u5B58\uFF0C\u8F93\u5165 N</li></ul><img src="https://img-blog.csdnimg.cn/14597838756247d4b3b049f97e103117.png"><ul><li>\u7B49\u5F85\u5B89\u88C5\uFF0C\u9879\u76EE\u521D\u59CB\u5316\u5B8C\u6210</li></ul><img src="">`,27),g={id:"\u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762","aria-hidden":"true"},"#",-1),k=a(" \u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762"),m={href:"https://cli.vuejs.org/zh/guide/creating-a-project.html#%E4%BD%BF%E7%94%A8%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%95%8C%E9%9D%A2",target:"_blank",rel:"noopener noreferrer"},b=a("#"),h=e(`<p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>vue ui</code> \u547D\u4EE4\u4EE5\u56FE\u5F62\u5316\u754C\u9762\u521B\u5EFA\u548C\u7BA1\u7406\u9879\u76EE\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://img-blog.csdnimg.cn/beab9f30eb874938862da3889615ee18.png">`,3);function f(_,q){const s=c("ExternalLinkIcon");return i(),p("div",null,[n("p",null,[n("a",u,[d,t(s)])]),r,n("h2",g,[v,k,n("a",m,[b,t(s)])]),h])}var E=l(o,[["render",f],["__file","Scaffolding.html.vue"]]);export{E as default};
