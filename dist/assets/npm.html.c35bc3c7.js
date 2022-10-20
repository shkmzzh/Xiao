import{_ as t,r as o,o as p,c,a as n,b as i,e as s,d as a}from"./app.c8609cc4.js";const l={},r=s(`<h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><h3 id="npm\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#npm\u662F\u4EC0\u4E48" aria-hidden="true">#</a> npm\u662F\u4EC0\u4E48</h3><p><code>npm</code>\uFF08node package manage\uFF09node \u5305 \u7BA1\u7406\u5668\u3002\u7BA1\u7406node\u5305\u7684\u5DE5\u5177\u3002</p><blockquote><p><strong>npm \u662F \u7BA1\u7406\uFF08\u4E0B\u8F7D\u3001\u5378\u8F7D\u3001\u53D1\u5E03\uFF09\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u5DE5\u5177\u3002</strong></p></blockquote><p>npm\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u5728\u5B89\u88C5 node \u7684\u65F6\u5019\uFF0C\u5C31\u5DF2\u7ECF\u5B89\u88C5\u5230\u4F60\u7684\u8BA1\u7B97\u673A\u4E2D\u4E86\u3002\uFF08\u6346\u7ED1\u5B89\u88C5\uFF09</p><p>\u547D\u4EE4\u884C\u4E2D\u6267\u884C\uFF1A <code>npm -v</code> \uFF0C\u5982\u679C\u770B\u5230<strong>\u7248\u672C\u53F7</strong>\uFF0C\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u4E86\u3002</p><h3 id="npm\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#npm\u7684\u4F7F\u7528" aria-hidden="true">#</a> npm\u7684\u4F7F\u7528</h3><p>npm\u7684\u4F7F\u7528\u6574\u4F53\u5206\u4E24\u5927\u90E8\u5206\uFF1A\u521D\u59CB\u5316 \u4E0E \u4F7F\u7528</p><p><strong>\u521D\u59CB\u5316</strong></p><blockquote><p>1.<code>npm init -y</code> \u65E0\u9700\u4EBA\u5DE5\u53C2\u4E0E\uFF0C\u6240\u6709\u4FE1\u606F\u91C7\u7528\u9ED8\u8BA4\uFF0C<strong>\u7EDD\u5927\u591A\u6570\u4F7F\u7528\u8FD9\u4E2A</strong></p><p>2.<code>npm init</code> \u9700\u8981\u4EBA\u5DE5\u53C2\u4E0E\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u4FE1\u606F \u4EBA\u5DE5\u8F93\u5165\uFF0C\u9700\u8981\u63D0\u4F9B\u4EE5\u4E0B\u4FE1\u606F\uFF0C\u4E86\u89E3</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5305\u540D&quot;</span><span class="token punctuation">,</span>				<span class="token comment">// \u9ED8\u8BA4\u53D6\u6587\u4EF6\u5939\u540D</span>
<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>			<span class="token comment">// \u7248\u672C\u53F7</span>
<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span><span class="token punctuation">,</span>		<span class="token comment">// \u63CF\u8FF0</span>
<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>			<span class="token comment">// \u5305\u7684\u5165\u53E3\u6587\u4EF6</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rn&quot;</span>						<span class="token comment">// \u811A\u672C\u547D\u4EE4</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token string">&quot;getsum&quot;</span>							<span class="token comment">// \u5305\u7684\u5173\u952E\u8BCD</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dong&quot;</span><span class="token punctuation">,</span>				<span class="token comment">// \u5305\u7684\u4F5C\u8005</span>
<span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>					<span class="token comment">// \u5F00\u6E90\u534F\u8BAE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F1A\u521B\u5EFA\u6587\u4EF6(package.json)\uFF0C\u7528\u4E8E\u8BB0\u5F55\u5F55\u5165\u7684\u76F8\u5173\u4FE1\u606F \u4EE5\u53CA\u540E\u671F\u4E0B\u8F7D\u7684\u6587\u4EF6\u4FE1\u606F\u3002</p></blockquote><p><strong>\u4F7F\u7528</strong></p><h3 id="\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u6A21\u5757" aria-hidden="true">#</a> \u4E0B\u8F7D\u7B2C\u4E09\u65B9\u6A21\u5757</h3><blockquote><p><code>npm install </code> \u5B8C\u6574\u547D\u4EE4</p><p><code>npm i</code> \u7B80\u5316\u547D\u4EE4</p><p>\u4ECE\u96C6\u4E2D\u4FDD\u5B58\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u6A21\u5757\uFF0C\u5E76\u4FDD\u5B58\u5230\u56FA\u5B9A\u7684\u6587\u4EF6\u5939(node_modules)\u4E2D\u3002</p><p><code>npm i \u6A21\u5757\u540D \u6A21\u5757\u540D \u6A21\u5757\u540D</code></p><p><code>npm i \u6A21\u5757\u540D@\u7248\u672C\u53F7</code></p></blockquote><h3 id="\u5378\u8F7D\u7B2C\u4E09\u65B9\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D\u7B2C\u4E09\u65B9\u6A21\u5757" aria-hidden="true">#</a> \u5378\u8F7D\u7B2C\u4E09\u65B9\u6A21\u5757</h3><blockquote><p>1.<code>npm uninstall \u6A21\u5757\u540D</code></p><p>2.<code>npm un \u6A21\u5757\u540D</code></p><p>3.<code>npm un \u6A21\u5757\u540D \u6A21\u5757\u540D \u6A21\u5757\u540D</code></p></blockquote><h3 id="nrm\u5168\u5C40\u6A21\u5757\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#nrm\u5168\u5C40\u6A21\u5757\u4ECB\u7ECD" aria-hidden="true">#</a> nrm\u5168\u5C40\u6A21\u5757\u4ECB\u7ECD</h3><ol><li>npm\u662F\u7528\u4E8E\u4E0B\u8F7D\u9879\u76EE\u5F00\u53D1\u65F6\u9700\u8981\u7528\u5230\u7684\u6A21\u5757\u7684\uFF0Cnpm\u9ED8\u8BA4\u662F\u4ECE\u56FD\u5916\u7684\u670D\u52A1\u5668\u4E0B\u8F7D\uFF0C\u56FD\u5916\u7684\u670D\u52A1\u5668\u7531\u4E8E\u5404\u79CD\u539F\u56E0\u4E0B\u8F7D\u5F88\u6162\uFF0C\u7ECF\u5E38\u4F1A\u7531\u4E8E\u6162\u800C\u4E0B\u8F7D\u4E0D\u6210\u529F\u3002</li><li>\u8FD9\u6837\u5C31\u6709\u4E00\u4E9B\u56FD\u5185\u7684\u5927\u516C\u53F8\u5728\u56FD\u5185\u521B\u5EFA\u4E86\u670D\u52A1\u5668\uFF0C\u5C06npm\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\u4E0B\u8F7D\u5230\u56FD\u5185\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u800C\u4E14\u4F1A\u9891\u7E41\u4E0E\u56FD\u5916\u7684\u670D\u52A1\u5668\u8FDB\u884C\u66F4\u65B0\uFF0C\u4FDD\u6301\u65F6\u56FD\u5185\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6599\u6700\u65B0\uFF0C\u8FD9\u79CD\u670D\u52A1\u5668\u4E5F\u79F0\u4E4B\u4E3A <strong>\u955C\u50CF\u670D\u52A1\u5668</strong>\u3002</li></ol><ul><li><p><strong>nrm\u4F7F\u7528</strong></p><ul><li><p>\u5148\u5B89\u88C5 nrm \u5168\u5C40\u6A21\u5757</p></li><li><blockquote><p>npm i -g nrm</p></blockquote></li></ul></li></ul><p><strong>nrm\u547D\u4EE4</strong></p><blockquote><p>\u5168\u5C40\u6A21\u5757\u5B89\u88C5\u540E\u5C31\u53EF\u4EE5\u5728\u7EC8\u7AEF\u901A\u8FC7\u547D\u4EE4\u6765\u4F7F\u7528\u5168\u5C40\u6A21\u5757\u4E86</p><p>\u67E5\u770B\u53EF\u4EE5\u7528\u7684\u955C\u50CF\u670D\u52A1\u5668</p><p><code>nrm ls</code></p><p>\u6D4B\u8BD5\u955C\u50CF\u670D\u52A1\u5668\u901F\u5EA6\uFF0C\u53EF\u4EE5\u627E\u51FA\u6700\u5FEB\u7684</p><p><code>nrm test</code></p><p>\u5207\u6362\u955C\u50CF\u670D\u52A1\u5668 \u4E3A taobal</p><p><code>nrm use taobao</code></p><p>\u5207\u6362\u955C\u50CF\u670D\u52A1\u5668 \u4E3A npm</p><p><code>nrm use npm</code></p><p>\u67E5\u770B\u5F53\u524D\u955C\u50CF</p><p><code>npm get registry</code></p></blockquote><h2 id="yarn-\u5305\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#yarn-\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a> yarn \u5305\u7BA1\u7406\u5668</h2>`,23),d=a("yarn\u4E5F\u662F\u4E00\u4E2A\u6BD4\u8F83\u6D41\u884C\u7684node\u5305\u7BA1\u7406\u5DE5\u5177 "),u={href:"https://yarn.bootcss.com/docs/install/#windows-stable",target:"_blank",rel:"noopener noreferrer"},m=a("yarn\u4E0B\u8F7D\u5730\u5740"),k=s(`<ul><li><strong>\u533A\u522B</strong> \uFF1Anpm\u662Fnode\u5B98\u65B9\u7684 yarn\u662F\u7B2C\u4E09\u65B9\u5F00\u53D1\u7684</li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><ul><li>window</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token function">yarn</span> -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>mac</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> i <span class="token function">yarn</span> -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u521D\u59CB\u5316</span>
  <span class="token function">yarn</span> init  /  <span class="token function">yarn</span> init -y


<span class="token comment"># 2. \u6DFB\u52A0\u4F9D\u8D56</span>
  <span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
  <span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>


<span class="token comment"># 3. \u79FB\u9664\u5305</span>
  <span class="token function">yarn</span> remove <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
    
    
<span class="token comment"># 4. \u5B89\u88C5\u9879\u76EE\u5168\u90E8\u4F9D\u8D56            </span>
  <span class="token function">yarn</span> \u6216\u8005 <span class="token function">yarn</span> <span class="token function">install</span>


<span class="token comment"># 5. \u5168\u5C40</span>
  \u5B89\u88C5: <span class="token function">yarn</span> global <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
  \u5378\u8F7D: <span class="token function">yarn</span> global remove <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(b,h){const e=o("ExternalLinkIcon");return p(),c("div",null,[r,n("blockquote",null,[n("p",null,[d,n("a",u,[m,i(e)])])]),k])}var q=t(l,[["render",v],["__file","npm.html.vue"]]);export{q as default};
