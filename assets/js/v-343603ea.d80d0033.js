"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[905],{9745:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-343603ea",path:"/front-end/javascript/this.html",title:"this",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"this的作用",slug:"this的作用",children:[]},{level:2,title:"this在全局作用域中",slug:"this在全局作用域中",children:[]},{level:2,title:"this在函數中",slug:"this在函數中",children:[{level:3,title:"函數獨立被調用",slug:"函數獨立被調用",children:[]},{level:3,title:"綁定在物件中調用",slug:"綁定在物件中調用",children:[]},{level:3,title:"使用函數原型中的方法進行綁定",slug:"使用函數原型中的方法進行綁定",children:[]}]},{level:2,title:"this在透過構造函數(new)創建出來的物件中",slug:"this在透過構造函數-new-創建出來的物件中",children:[]},{level:2,title:"this綁定規則的優先級",slug:"this綁定規則的優先級",children:[]},{level:2,title:"this與箭頭函數",slug:"this與箭頭函數",children:[]}],filePathRelative:"front-end/javascript/this.md",git:{updatedTime:163996057e4,contributors:[{name:"louis",email:"louis61619@gmail.com",commits:2},{name:"louis61619",email:"louis61619@gmail.com",commits:1}]}}},1532:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h1><p>常見的編程語言中，幾乎都有this關鍵字，但是JavaScript中的this和常見的物件導向語言中的this不太一樣，通常在Java、C++等語言中需要有一個類才能透過this調用當前物件。</p><h2 id="this的作用" tabindex="-1"><a class="header-anchor" href="#this的作用" aria-hidden="true">#</a> this的作用</h2><p>假設我們有以下的程式碼：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;louis&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">eating</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;在吃東西&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>當我們執行這段結果後輸出會是：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>louis在吃東西\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也就是說使用this.name我們得到當前的物件的name屬性，不過沒有this也是可以編寫相對的程式碼，像是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;louis&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">eating</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;在吃東西&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>不過這樣做當我們改變物件名稱時，內部方法就要跟著進行改變，少了this會缺少很多複用程式碼的機會。</p><h2 id="this在全局作用域中" tabindex="-1"><a class="header-anchor" href="#this在全局作用域中" aria-hidden="true">#</a> this在全局作用域中</h2><p>一般來說當我們在瀏覽器中執行：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>我們會得到window物件，而在Nodejs中執行this時，會得到一個空物件，而之所以會是空物件，是Nodejs中使用Commonjs規範，將每個文件都視為一個獨立的module，而在編譯後會將這個module放到一個函數中並且進行call綁定，而這個綁定的物件是expots</p><p>所以在Nodejs中執行以下程式碼：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>會得到：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{ obj: { foo: &#39;foo&#39; } }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="this在函數中" tabindex="-1"><a class="header-anchor" href="#this在函數中" aria-hidden="true">#</a> this在函數中</h2><p>由於this並非在編譯階段中就進行綁定，而是在程式碼執行時動態綁定，所以有幾個綁定規則。</p><p>假設有以下這樣一個函數：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="函數獨立被調用" tabindex="-1"><a class="header-anchor" href="#函數獨立被調用" aria-hidden="true">#</a> 函數獨立被調用</h3><p>如果直接在函數中進行調用，在瀏覽器中的輸出結果會是window物件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>以及</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token operator">:</span> foo<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上兩種情況都是屬於獨立調用，所以輸出結果都會是全局window物件。</p><h3 id="綁定在物件中調用" tabindex="-1"><a class="header-anchor" href="#綁定在物件中調用" aria-hidden="true">#</a> 綁定在物件中調用</h3><p>如果該函數是物件中的某個方法，輸出結果會是會是該物件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token operator">:</span> foo<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// 會得obj</span>\nobj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>和前面的案例有一點類似，但是只要前面綁定有物件，輸出的結果都會是綁定在前面的物件。</p><h3 id="使用函數原型中的方法進行綁定" tabindex="-1"><a class="header-anchor" href="#使用函數原型中的方法進行綁定" aria-hidden="true">#</a> 使用函數原型中的方法進行綁定</h3><p>在物件中做為方法調用可以讓函數具有指定的this，如果不想要讓函數作為方法但是又想要指定this，可以使用call或是apply對該函數中的this進行綁定：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 會得到String {&quot;abc&quot;} 物件</span>\n<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>也可以使用bind，前面有說到只要是函數獨立調用this就會指向全局windon物件，不過bind的優先級更高可以將獨立調用的函數綁定this。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> newFoo <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">newFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>輸出的結果為String物件。</p><h2 id="this在透過構造函數-new-創建出來的物件中" tabindex="-1"><a class="header-anchor" href="#this在透過構造函數-new-創建出來的物件中" aria-hidden="true">#</a> this在透過構造函數(new)創建出來的物件中</h2><p>JavaScript可以使用new關鍵字進行函數的調用，而使用new創建出來的物件會直接將this和該物件進行綁定。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="this綁定規則的優先級" tabindex="-1"><a class="header-anchor" href="#this綁定規則的優先級" aria-hidden="true">#</a> this綁定規則的優先級</h2><p>new構造函數 &gt; call/apply/bind &gt; 作為物件中的方法調用 &gt; 直接調用函數</p><h2 id="this與箭頭函數" tabindex="-1"><a class="header-anchor" href="#this與箭頭函數" aria-hidden="true">#</a> this與箭頭函數</h2><p>箭頭函數(Arrow Function)不綁定任何this，而是從外層作用域中尋找this。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 輸出為window</span>\n<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>箭頭函數常常用在非同步函數中獲取外層的this物件，例如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">getData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 在箭頭函數之前的解決方案</span>\n    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ddd&quot;</span><span class="token punctuation">]</span>\n      _this<span class="token punctuation">.</span>data <span class="token operator">=</span> result\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nobj<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>有了箭頭函數可以直接調用外層的this：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">getData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ddd&quot;</span><span class="token punctuation">]</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> result\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nobj<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',50),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])}}]);