import{_ as t,r as e,o,c,a as n,b as l,e as a,d as s}from"./app.c8609cc4.js";const i={},u=a(`<ul><li><strong>\u6784\u9020\u51FD\u6570\u8BED\u6CD5</strong>\uFF1A\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u51FD\u6570</li><li>\u521B\u5EFA\u6784\u9020\u51FD\u6570 <img src="https://img-blog.csdnimg.cn/0134f47bf2dd4b0793a84531d3d40cd8.png"></li></ul><h3 id="\u5B9E\u4F8B\u6210\u5458-\u9759\u6001\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u6210\u5458-\u9759\u6001\u6210\u5458" aria-hidden="true">#</a> \u5B9E\u4F8B\u6210\u5458&amp;\u9759\u6001\u6210\u5458</h3><p><strong>\u5B9E\u4F8B\u6210\u5458</strong></p><p>\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\u79F0\u4E3A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u79F0\u4E3A\u5B9E\u4F8B\u6210\u5458\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6784\u9020\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684 this \u5C31\u662F\u5B9E\u4F8B\u5BF9\u8C61</span>
<span class="token comment">//\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u52A8\u6001\u6DFB\u52A0\u5C5E\u6027</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u5764\u5764&#39;</span>
<span class="token comment">//\u5B9E\u4F8B\u5BF9\u8C61\u52A8\u6001\u6DFB\u52A0\u65B9\u6CD5</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u9E21\u4F60\u592A\u7F8E&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u5B9E\u4F8B\u5316 ikun \u662F\u5B9E\u4F8B\u5BF9\u8C61 \u4E5F\u5C31\u662F\u6784\u9020\u51FD\u6570\u7684<span class="token keyword">this</span>
<span class="token keyword">const</span> ikun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ikun.name&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u8BBF\u95EE\u5B9E\u4F8B\u5C5E\u6027</span>
ikun<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u8BF4\u660E</em>\uFF1A</p><ul><li>\u5B9E\u4F8B\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5373\u4E3A\u5B9E\u4F8B\u6210\u5458</li><li>\u4E3A\u6784\u9020\u51FD\u6570\u4F20\u5165\u53C2\u6570\uFF0C\u52A8\u6001\u521B\u5EFA\u7ED3\u6784\u76F8\u540C\u4F46\u503C\u4E0D\u540C\u7684\u5BF9\u8C61</li><li>\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u5B9E\u4F8B\u5BF9\u8C61\u5F7C\u6B64\u72EC\u7ACB\u4E92\u4E0D\u5F71\u54CD\u3002</li></ul><p><strong>\u9759\u6001\u6210\u5458</strong></p><p>\u6784\u9020\u51FD\u6570\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u88AB\u79F0\u4E3A\u9759\u6001\u6210\u5458</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6784\u9020\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
<span class="token punctuation">}</span>
<span class="token comment">//\u9759\u6001\u5C5E\u6027</span>
Person<span class="token punctuation">.</span>eyes <span class="token operator">=</span> <span class="token number">2</span>
Person<span class="token punctuation">.</span>hand <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">//\u9759\u6001\u65B9\u6CD5</span>
Person<span class="token punctuation">.</span><span class="token function-variable function">walk</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5764\u5764\u4F1A\u9E21\u53EB&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">this</span> \u6307\u5411 person
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.eyes&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u8BF4\u660E</em>\uFF1A</p><ul><li>\u6784\u9020\u51FD\u6570\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u88AB\u79F0\u4E3A\u9759\u6001\u6210\u5458</li><li>\u4E00\u822C\u516C\u5171\u7279\u5F81\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u9759\u6001\u6210\u5458\u8BBE\u7F6E\u4E3A\u9759\u6001\u6210\u5458</li><li>\u9759\u6001\u6210\u5458\u65B9\u6CD5\u4E2D\u7684 this \u6307\u5411\u6784\u9020\u51FD\u6570\u672C\u8EAB</li></ul><h3 id="\u5185\u7F6E\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u5185\u7F6E\u6784\u9020\u51FD\u6570</h3><p><strong>Object</strong></p><ul><li><p>Object \u662F\u5185\u7F6E\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA\u666E\u901A\u5BF9\u8C61\u3002</p></li><li><p>\u5E38\u7528\u7684\u4E09\u4E2A\u9759\u6001\u65B9\u6CD5\uFF08\u9759\u6001\u65B9\u6CD5\u5C31\u662F\u53EA\u6709\u6784\u9020\u51FD\u6570Object\u53EF\u4EE5\u8C03\u7528\u7684\uFF09</p></li></ul><blockquote><p>Object.keys() // \u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u952E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4</p><p>Object.values() // \u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4</p><p>Object.assign() //\u62F7\u8D1D\u5BF9\u8C61</p></blockquote><p><em>Object.keys()</em> \u9759\u6001\u65B9\u6CD5\u83B7\u53D6\u5BF9\u8C61\u4E2D\u6240\u6709\u5C5E\u6027\uFF08\u952E\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;\u5764\u5764&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
\u83B7\u5F97\u5BF9\u8C61\u7684\u6240\u6709\u952E<span class="token punctuation">,</span>\u5E76\u4E14\u8FD4\u56DE\u662F\u4E00\u4E2A\u6570\u7EC4
<span class="token keyword">const</span> arr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [&#39;name&#39;,&#39;age&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u6CE8\u610F</em>\uFF1A\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u6570\u7EC4</p><p><em>Object.values</em> \u9759\u6001\u65B9\u6CD5\u83B7\u53D6\u5BF9\u8C61\u4E2D\u6240\u6709\u5C5E\u6027\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;\u5764\u5764&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
\u83B7\u5F97\u5BF9\u8C61\u7684\u6240\u6709\u952E<span class="token punctuation">,</span>\u5E76\u4E14\u8FD4\u56DE\u662F\u4E00\u4E2A\u6570\u7EC4
<span class="token keyword">const</span> arr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [&#39;\u5764\u5764&#39;,&#39;18&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u6CE8\u610F</em>\uFF1A\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u6570\u7EC4</p><p><em>Object. assign</em> \u9759\u6001\u65B9\u6CD5\u5E38\u7528\u4E8E\u5BF9\u8C61\u62F7\u8D1D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7ED9 o \u65B0\u589E\u5C5E\u6027</span>
<span class="token keyword">const</span> o <span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;\u5764\u5764&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// {name:&#39;\u4F69\u5947&#39;,age:6,gender:&#39;\u5973&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),r=n("strong",null,"Array",-1),k=s(),d=n("strong",null,"String",-1),m=s(),v=n("strong",null,"Number",-1),b=s("\u7684\u65B9\u6CD5\u8FD9\u91CC\u5C31\u4E0D\u5199\u4E86,\u9700\u8981\u53EF\u4EE5\u53BB\u770B\u6587\u6863 "),g={href:"https://developer.mozilla.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},h=s("MDN"),y=a(`<h3 id="\u7F16\u7A0B\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u601D\u60F3" aria-hidden="true">#</a> \u7F16\u7A0B\u601D\u60F3</h3><p><strong>\u9762\u5411\u8FC7\u7A0B\u7F16\u7A0B</strong></p><ul><li><em>\u4F18\u70B9</em>\uFF1A\u6027\u80FD\u6BD4\u9762\u5411\u5BF9\u8C61\u9AD8\uFF0C\u9002\u5408\u8DDF\u786C\u4EF6\u8054\u7CFB\u5F88\u7D27\u5BC6\u7684\u4E1C\u897F\uFF0C\u4F8B\u5982\u5355\u7247\u673A\u5C31\u91C7\u7528\u7684\u9762\u5411\u8FC7\u7A0B\u7F16\u7A0B\u3002</li><li><em>\u7F3A\u70B9</em>\uFF1A\u6CA1\u6709\u9762\u5411\u5BF9\u8C61\u6613\u7EF4\u62A4\u3001\u6613\u590D\u7528\u3001\u6613\u6269\u5C55</li></ul><p><strong>\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</strong></p><ul><li><em>\u4F18\u70B9</em>\uFF1A\u6613\u7EF4\u62A4\u3001\u6613\u590D\u7528\u3001\u6613\u6269\u5C55\uFF0C\u7531\u4E8E\u9762\u5411\u5BF9\u8C61\u6709\u5C01\u88C5\u3001\u7EE7\u627F\u3001\u591A\u6001\u6027\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u8BBE\u8BA1\u51FA\u4F4E\u8026\u5408\u7684\u7CFB\u7EDF\uFF0C\u4F7F\u7CFB\u7EDF \u66F4\u52A0\u7075\u6D3B\u3001\u66F4\u52A0\u6613\u4E8E\u7EF4\u62A4</li><li><em>\u7F3A\u70B9</em>\uFF1A\u6027\u80FD\u6BD4\u9762\u5411\u8FC7\u7A0B\u4F4E</li></ul><p><em>\u603B\u7ED3</em>\uFF1A\u751F\u6D3B\u79BB\u4E0D\u5F00\u86CB\u7092\u996D\uFF0C\u4E5F\u79BB\u4E0D\u5F00\u76D6\u6D47\u996D\uFF0C\u9009\u62E9\u4E0D\u540C\u800C\u5DF2\uFF0C\u53EA\u4E0D\u8FC7\u524D\u7AEF\u4E0D\u540C\u4E8E\u5176\u4ED6\u8BED\u8A00\uFF0C\u9762\u5411\u8FC7\u7A0B\u66F4\u591A</p><h3 id="\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B" aria-hidden="true">#</a> \u539F\u578B</h3><ul><li>\u6784\u9020\u51FD\u6570\u901A\u8FC7\u539F\u578B\u5206\u914D\u7684\u51FD\u6570\u662F\u6240\u6709\u5BF9\u8C61\u6240 \u5171\u4EAB\u7684\u3002</li><li>JavaScript \u89C4\u5B9A\uFF0C\u6BCF\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2A prototype \u5C5E\u6027\uFF0C\u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u79F0\u4E3A\u539F\u578B\u5BF9\u8C61</li><li>\u8FD9\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u6302\u8F7D\u51FD\u6570\uFF0C\u5BF9\u8C61\u5B9E\u4F8B\u5316\u4E0D\u4F1A\u591A\u6B21\u521B\u5EFA\u539F\u578B\u4E0A\u51FD\u6570\uFF0C\u8282\u7EA6\u5185\u5B58</li><li>\u6211\u4EEC\u53EF\u4EE5\u628A\u90A3\u4E9B\u4E0D\u53D8\u7684\u65B9\u6CD5\uFF0C\u76F4\u63A5\u5B9A\u4E49\u5728 prototype \u5BF9\u8C61\u4E0A\uFF0C\u8FD9\u6837\u6240\u6709\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5C31\u53EF\u4EE5\u5171\u4EAB\u8FD9\u4E9B\u65B9\u6CD5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname
<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u79F0\u4E3A\u539F\u578B\u5BF9\u8C61</span>
\u5C06\u65B9\u6CD5\u6302\u8F7D\u5230\u539F\u578B\u4E0A<span class="token punctuation">,</span>\u8BE5\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u80FD\u8BBF\u95EE\u5230
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sing</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u4F1A\u5531\u6B4C&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;\u5218\u5FB7\u534E&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> zxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u5B66\u53CB&#39;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span>sing<span class="token operator">===</span>zxy<span class="token punctuation">.</span>sing<span class="token punctuation">)</span>
<span class="token comment">//\u7ED3\u679Ctrue \u8BF4\u660E\u5B9E\u4F8B\u5BF9\u8C61\u8C03\u7528\u7684\u662F\u540C\u4E00\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u9020\u6210\u5185\u5B58\u6D6A\u8D39</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constructor\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#constructor\u5C5E\u6027" aria-hidden="true">#</a> constructor\u5C5E\u6027</h3><p>\u6BCF\u4E2A\u539F\u578B\u5BF9\u8C61\u91CC\u9762\u90FD\u6709\u4E2Aconstructor \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u8BE5\u539F\u578B\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570</p><p><em>\u4F7F\u7528\u573A\u666F</em></p><ul><li>\u5982\u679C\u6709\u591A\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u539F\u578B\u5BF9\u8C61\u91C7\u53D6\u5BF9\u8C61\u5F62\u5F0F\u8D4B\u503C.</li><li>\u4F46\u662F\u8FD9\u6837\u5C31\u4F1A\u8986\u76D6\u6784\u9020\u51FD\u6570\u539F\u578B\u5BF9\u8C61\u539F\u6765\u7684\u5185\u5BB9\uFF0C\u8FD9\u6837\u4FEE\u6539\u540E\u7684\u539F\u578B\u5BF9\u8C61 constructor \u5C31\u4E0D\u518D\u6307\u5411\u5F53\u524D\u6784\u9020\u51FD\u6570\u4E86</li><li>\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4FEE\u6539\u540E\u7684\u539F\u578B\u5BF9\u8C61\u4E2D\uFF0C\u6DFB\u52A0\u4E00\u4E2A constructor \u6307\u5411\u539F\u6765\u7684\u6784\u9020\u51FD\u6570\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
\u624B\u52A8\u8BA9\u4FEE\u6539\u540E\u7684\u539F\u578B\u5BF9\u8C61\u5229\u7528 constructor \u91CD\u65B0\u6307\u5411star\u6784\u9020\u51FD\u6570
<span class="token literal-property property">constructor</span><span class="token operator">:</span>Star
<span class="token function-variable function">sing</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5531\u6B4C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span> <span class="token comment">//\u6307\u5411Star</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u8C61\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u539F\u578B" aria-hidden="true">#</a> \u5BF9\u8C61\u539F\u578B</h3><p>\u5BF9\u8C61\u90FD\u4F1A\u6709\u4E00\u4E2A\u5C5E\u6027<code> __proto__</code> \u6307\u5411\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u539F\u578B\u5BF9\u8C61\uFF0C\u4E4B\u6240\u4EE5\u6211\u4EEC\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528\u6784\u9020\u51FD\u6570 prototype \u539F\u578B\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5C31\u662F\u56E0\u4E3A\u5BF9\u8C61\u6709<code>__proto__</code>\u539F\u578B\u7684\u5B58\u5728</p><img src="https://img-blog.csdnimg.cn/907a1529b6ed4c2086e0499a3c1eda1f.png"><h3 id="\u539F\u578B\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u7EE7\u627F" aria-hidden="true">#</a> \u539F\u578B\u7EE7\u627F</h3><p>\u7EE7\u627F\u662F\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u53E6\u4E00\u4E2A\u7279\u5F81\uFF0C\u901A\u8FC7\u7EE7\u627F\u8FDB\u4E00\u6B65\u63D0\u5347\u4EE3\u7801\u5C01\u88C5\u7684\u7A0B\u5EA6\uFF0CJavaScript \u4E2D\u5927\u591A\u662F\u501F\u52A9\u539F\u578B\u5BF9\u8C61\u5B9E\u73B0\u7EE7\u627F \u7684\u7279\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token comment">// \u5B9E\u4F8B\u5171\u540C\u7684\u7236\u4EB2\u5FC5\u987B\u662F\u6784\u9020\u51FD\u6570\u56E0\u4E3Aconsole.log(p1===p2) \u7ED3\u679C\u4E3Afalse</span>
<span class="token comment">//\u8FD9\u6837\u7684\u8BDD man\u548Cwoman\u4E24\u4E2A\u5B50\u6784\u9020\u51FD\u6570\u5C31\u4E0D\u4F1A\u4E92\u76F8\u9020\u6210\u5F71\u54CD\u4E86</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>eays<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">=</span><span class="token number">1</span>
 <span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u901A\u8FC7\u8D4B\u503C\u8BA9\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u6307\u5411 person\u8FD9\u4E2A\u5BF9\u8C61 \u4F46\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u6CA1\u6709countrutor</span>
<span class="token keyword">const</span> pink <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>countructor <span class="token operator">=</span> Man <span class="token comment">//\u8BA9\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u7684countructor\u6307\u56DE \u6784\u9020\u51FD\u6570</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">baby</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hollw&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pink<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>countructor<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
pink<span class="token punctuation">.</span><span class="token function">baby</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">Woman</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token class-name">Woman</span><span class="token punctuation">.</span>prototype<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Woman</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>countructor<span class="token operator">=</span>Woman
<span class="token keyword">const</span> red <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Woman</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h3><p>\u57FA\u4E8E\u539F\u578B\u5BF9\u8C61\u7684\u7EE7\u627F\u4F7F\u5F97\u4E0D\u540C\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u5173\u8054\u5728\u4E00\u8D77\uFF0C\u5E76\u4E14\u8FD9\u79CD\u5173\u8054\u7684\u5173\u7CFB\u662F\u4E00\u79CD\u94FE\u72B6\u7684\u7ED3\u6784\uFF0C\u6211\u4EEC\u5C06\u539F\u578B\u5BF9\u8C61\u7684\u94FE\u72B6\u7ED3\u6784\u5173\u7CFB\u79F0\u4E3A\u539F\u578B\u94FE</p><img src="https://img-blog.csdnimg.cn/04d65274f8b747e8b9553398da1bb51c.png"><p><strong>\u539F\u578B\u94FE-\u67E5\u627E\u89C4\u5219</strong></p><ul><li>\u2460 \u5F53\u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u5305\u62EC\u65B9\u6CD5\uFF09\u65F6\uFF0C\u9996\u5148\u67E5\u627E\u8FD9\u4E2A\u5BF9\u8C61\u81EA\u8EAB\u6709\u6CA1\u6709\u8BE5\u5C5E\u6027\u3002</li><li>\u2461 \u5982\u679C\u6CA1\u6709\u5C31\u67E5\u627E\u5B83\u7684\u539F\u578B\uFF08\u4E5F\u5C31\u662F __proto__\u6307\u5411\u7684 prototype \u539F\u578B\u5BF9\u8C61\uFF09</li><li>\u2462 \u5982\u679C\u8FD8\u6CA1\u6709\u5C31\u67E5\u627E\u539F\u578B\u5BF9\u8C61\u7684\u539F\u578B\uFF08Object\u7684\u539F\u578B\u5BF9\u8C61\uFF09</li><li>\u2463 \u4F9D\u6B64\u7C7B\u63A8\u4E00\u76F4\u627E\u5230 Object \u4E3A\u6B62\uFF08null\uFF09</li><li>\u2464 __proto__\u5BF9\u8C61\u539F\u578B\u7684\u610F\u4E49\u5C31\u5728\u4E8E\u4E3A\u5BF9\u8C61\u6210\u5458\u67E5\u627E\u673A\u5236\u63D0\u4F9B\u4E00\u4E2A\u65B9\u5411\uFF0C\u6216\u8005\u8BF4\u4E00\u6761\u8DEF\u7EBF</li></ul>`,25);function f(w,_){const p=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,k,d,m,v,b,n("a",g,[h,l(p)])]),y])}var x=t(i,[["render",f],["__file","Function.html.vue"]]);export{x as default};
