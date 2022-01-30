"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[714],{645:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7368e5a5",path:"/front-end/javascript/proxy&reflect.html",title:"Proxy 和 Reflect",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Proxy 基本使用",slug:"proxy-基本使用",children:[]},{level:2,title:"Reflect 基本使用",slug:"reflect-基本使用",children:[]},{level:2,title:"Proxy 中 receiver 參數",slug:"proxy-中-receiver-參數",children:[]},{level:2,title:"Reflect.construct",slug:"reflect-construct",children:[]}],filePathRelative:"front-end/javascript/proxy&reflect.md",git:{updatedTime:1641123391e3,contributors:[{name:"louis",email:"louis61619@gmail.com",commits:1}]}}},6810:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="proxy-和-reflect" tabindex="-1"><a class="header-anchor" href="#proxy-和-reflect" aria-hidden="true">#</a> Proxy 和 Reflect</h1><p>在沒有 Proxy 時，是如何監聽物件被操作的呢？可以利用 Object.defineProperty 的訪問描述器：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Louis&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">26</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 監聽多屬性</span>\nObject<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;監聽obj屬性被訪問了&#39;</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;監聽obj屬性放修改了&#39;</span><span class="token punctuation">)</span>\n      value <span class="token operator">=</span> newValue\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>不過 Object.defineProperty 在設計之初就並非是為了進行屬性監聽的，只能對物件既有的屬性做監聽，對於新增或是刪除屬性 Object.defineProperty 是無法做到的，所以 ES6 新增了 Proxy 。</p><h2 id="proxy-基本使用" tabindex="-1"><a class="header-anchor" href="#proxy-基本使用" aria-hidden="true">#</a> Proxy 基本使用</h2><p>Proxy 是一個類，是用於創建一個代理物件的，針對要監聽的原物件所有操作，都通過 Proxy 所創建的代理物件完成：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Louis&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">26</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 默認將所有操作映射到原物件</span>\n<span class="token keyword">const</span> objProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">// 獲取值時的捕獲器</span>\n  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">監聽到</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">物件的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">屬性被訪問了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 設置值時的捕獲器</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">監聽到</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">物件的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">屬性被設置了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newValue\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 監聽 in 的捕獲器</span>\n  <span class="token function-variable function">has</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">監聽到</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">物件的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">屬性的in操作</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> key <span class="token keyword">in</span> target\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 監聽刪除的捕獲器</span>\n  <span class="token function-variable function">deleteProperty</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">監聽到</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">物件的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">屬性的刪除操作</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token keyword">delete</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nobjProxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Renny&#39;</span>\n\n<span class="token comment">// 輸出：Renny</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>以上列出 4 個常用的捕獲器，實際上捕獲器總共有 13 個：</p><ul><li>Handler.getPrototypeOf：Object.getPrototypeOf 方法的捕獲器。</li><li>Handler.setPrototypeOf：Object.setPrototypeOf 方法的捕獲器。</li><li>Handler.isExtensible：Object.isExtensible 方法的捕獲器。</li><li>Handler.preventExtensible：Object.preventExtensible 方法的捕獲器。</li><li>Handler.getOwnPropertyDecriptor：Object.getOwnPropertyDecriptor方法的捕獲器。</li><li>Handler.difineProperty：Object.difineProperty 方法的捕獲器。</li><li>Handler.ownKeys：Object.getOwnPropertyName 和 Object.getOwnPropertySymbols 方法的捕獲器。</li><li>Handler.apply：函數調用操作的捕獲器。</li><li>Handler.construct：new 操作符的捕獲器。</li></ul><h2 id="reflect-基本使用" tabindex="-1"><a class="header-anchor" href="#reflect-基本使用" aria-hidden="true">#</a> Reflect 基本使用</h2><p>Reflect 也是 ES6 新增的一個 API，字面上的意思是反射，Reflect 出現的目的是替代 Object 本身的方法，目前最常見的使用場景是和 Proxy 一起使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Louis&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">26</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> objProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...設置成功</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...設置失敗</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nobjProxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Renny&#39;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="proxy-中-receiver-參數" tabindex="-1"><a class="header-anchor" href="#proxy-中-receiver-參數" aria-hidden="true">#</a> Proxy 中 receiver 參數</h2><p>如果在物件中需要攔截 getter 和 setter 中的操作，需要使用 receiver 參數：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  _name<span class="token operator">:</span> <span class="token string">&#39;Louis&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 需要讓 this 變成 proxy 物件才能攔截</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> newValue\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> objProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// receiver 是創建出來的代理物件</span>\n    <span class="token comment">// Reflect.get 的第三個參數可以改變 getter 和 setter 的 this 指向</span>\n    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objProxy<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="reflect-construct" tabindex="-1"><a class="header-anchor" href="#reflect-construct" aria-hidden="true">#</a> Reflect.construct</h2><p>執行某個構造函數中的內容，但是創建出來的是其他物件實例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 執行 Student 函數中的內容，但是創建出來 Teacher 物件</span>\n<span class="token keyword">const</span> teacher <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Louis&quot;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Teacher<span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Teacher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',18),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])}}]);