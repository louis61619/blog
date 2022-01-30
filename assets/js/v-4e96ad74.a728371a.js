"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[789],{6449:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-4e96ad74",path:"/front-end/javascript/how-browsers-work.html",title:"瀏覽器運作原理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"瀏覽器內核",slug:"瀏覽器內核",children:[]},{level:2,title:"V8引擎",slug:"v8引擎",children:[]},{level:2,title:"關鍵名詞",slug:"關鍵名詞",children:[{level:3,title:"執行環境堆疊 (Execution Context Stack, ECStack)",slug:"執行環境堆疊-execution-context-stack-ecstack",children:[]},{level:3,title:"全局物件(Global Object，GO)",slug:"全局物件-global-object-go",children:[]},{level:3,title:"活躍物件(Activation Object，AO)",slug:"活躍物件-activation-object-ao",children:[]},{level:3,title:"變數",slug:"變數",children:[]},{level:3,title:"函數",slug:"函數",children:[]},{level:3,title:"ECMA 標準",slug:"ecma-標準",children:[]}]}],filePathRelative:"front-end/javascript/how-browsers-work.md",git:{updatedTime:1643546758e3,contributors:[{name:"louis",email:"louis61619@gmail.com",commits:2}]}}},5386:(n,a,e)=>{e.r(a),e.d(a,{default:()=>N});var s=e(6252);const t=(0,s.uE)('<h1 id="瀏覽器運作原理" tabindex="-1"><a class="header-anchor" href="#瀏覽器運作原理" aria-hidden="true">#</a> 瀏覽器運作原理</h1><p>語言的發展分為三個階段：</p><p>機器語言：10000110111這類機器指令。</p><p>彙編語言： 或稱組合語言，mov %ebx, [%esp+12] 這類彙編指令。</p><p>而前端工程師學習的 js 是一門高級語言，高級語言有更接近於人類思維方式的語法，不過最終還是要被轉換為機器語言，而在瀏覽器中網頁是被如何執行的呢？</p><h2 id="瀏覽器內核" tabindex="-1"><a class="header-anchor" href="#瀏覽器內核" aria-hidden="true">#</a> 瀏覽器內核</h2><p>當我們在瀏覽器中輸入域名，域名會被dns服務器進行解析，然後我們會獲取ip地址，一開始會返回html，如果解析html的過程中遇到css會再去服務器對css文件進行下載，當遇到script標籤時會再請求js文件，如下圖：</p><p><img src="https://i.imgur.com/wnEWS6W.png" alt="e37361431fc3c95707613f0305f080ca089b09ed"></p><p>而瀏覽器中是由browser engine(瀏覽器內核)解析這些html、css這些文件，主要的內核有以下這些：</p><p><img src="https://i.imgur.com/1CoMGPF.png" alt="0_IL4lYLlHboGssAVX"></p><p>html在透過browser engine(瀏覽器內核)解析後會形成一顆dom樹，而css這些規則會被附加在上面，最後透過布局引擎(layout)將這顆dom樹生成最終的render tree繪製在頁面上。</p><p>如果有Javascript程式碼會透過另外的Javascript引擎來執行，透過Javascript引擎程式碼會被轉譯成相應的cpu認識的機器指令，最後由cpu來執行。</p><p>所以瀏覽器核心分成兩個部分，一個部分是browser engine(瀏覽器內核)負責html解析、布局、渲染等等相關工作，一個部分是Javascript引擎，負責解析並執行Javascript程式碼。</p><h2 id="v8引擎" tabindex="-1"><a class="header-anchor" href="#v8引擎" aria-hidden="true">#</a> V8引擎</h2><p>Javascript引擎中最著名的就是google所開發的V8引擎了，nodejs的執行環境也是基於V8。</p>',15),o=(0,s.Uk)("V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements "),p={href:"https://tc39.es/ecma262/",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("ECMAScript"),r=(0,s.Uk)(" and "),c={href:"https://webassembly.github.io/spec/core/",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("WebAssembly"),u=(0,s.Uk)(", and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application."),d=(0,s._)("p",null,"官方提到：",-1),b=(0,s._)("li",null,"V8 是 Google用 C++ 編寫的開源的高性能 JavaScript 和 WebAssembly 引擎，它用於 Chrome 和 Node.js 。",-1),k=(0,s.Uk)("它實現了"),m={href:"https://tc39.es/ecma262/",target:"_blank",rel:"noopener noreferrer"},h=(0,s.Uk)("ECMAScript"),g=(0,s.Uk)("和"),v={href:"https://webassembly.github.io/spec/core/",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("WebAssembly"),x=(0,s.Uk)("，並在 x64、IA-32、ARM 或 MIPS 處理器的 Windows 7 或更高版本、macOS 10.12+ 和 Linux 系統上運行。"),j=(0,s._)("li",null,"V8 可以獨立運行，也可以嵌入到任何 C++ 應用程序中。",-1),E=(0,s.uE)('<p>以下是官方對於v8引擎處理 JavaScript 的流程圖：</p><p><img src="https://i.imgur.com/yYNJ2JV.png" alt="Basics of understanding Chrome&#39;s V8 Engine | by Kevin Duarte | Medium"></p><p>一般流程如下：</p><ol><li><p>Parser 對 JavaScript 程式碼進行解析；</p></li><li><p>轉為 AST 抽象語法樹(透過 https://astexplorer.net 這個網站能看到抽象語法樹的樣子)；</p></li><li><p>透過 ignition 轉換為 Bytecode(字節碼)；</p></li><li><p>最後轉換為機器碼。</p></li></ol><p>TurboFan 會標記多次執行的函數直接轉換為 Machine Code(機器碼)。</p><p>不過如果有函數的參數突然被轉換類型，會再次從 Ignition的部分走，如果多次執行再被 TurboFan 標記。</p><h2 id="關鍵名詞" tabindex="-1"><a class="header-anchor" href="#關鍵名詞" aria-hidden="true">#</a> 關鍵名詞</h2><h3 id="執行環境堆疊-execution-context-stack-ecstack" tabindex="-1"><a class="header-anchor" href="#執行環境堆疊-execution-context-stack-ecstack" aria-hidden="true">#</a> 執行環境堆疊 (Execution Context Stack, ECStack)</h3><p>當Javascript首次執行時，會運行一個執行環境堆疊(Execution Context Stack, ECStack)，它是一種先進後出的結構，被用於儲存所有創建過的執行環境。</p><p><img src="https://i.imgur.com/0cu2axe.jpg" alt="What is the Execution Context &amp; Stack in JavaScript? | by Madhavan  Nagarajan | Medium"></p><h3 id="全局物件-global-object-go" tabindex="-1"><a class="header-anchor" href="#全局物件-global-object-go" aria-hidden="true">#</a> 全局物件(Global Object，GO)</h3><p>程式碼在解析的過程中會創造全局物件(Global Object，GO)，window 指向這個全局物件，GO會在程式碼解析階段時將所有的全局變數作為屬性放入其中。</p><p>所以類似下面這種程式碼是window物件還是可以被打印出來。</p><p><img src="https://i.imgur.com/n4qYV0G.png" alt="image-20210909195831752"></p><h3 id="活躍物件-activation-object-ao" tabindex="-1"><a class="header-anchor" href="#活躍物件-activation-object-ao" aria-hidden="true">#</a> 活躍物件(Activation Object，AO)</h3><p>程式碼在執行函數時會創造活躍物件(Activation Object，AO)，在創建階段時也會解析內部所有變數作為屬性放入其中，並在函數執行完畢時銷毀。</p><h3 id="變數" tabindex="-1"><a class="header-anchor" href="#變數" aria-hidden="true">#</a> 變數</h3><p>執行一段變數：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello Message&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>程式碼的運行過程如下:</p><ul><li>代碼被解析時，v8引擎會幫助我們創造一個物件(Global Object-&gt; GO)</li><li>v8引擎為了執行程式碼，會運行一個執行上下文棧(Execution Context Stack, ECStack)</li><li>全局變數執行時會被創建的全局執行上下文(Global Execution Context，GC)會被放入ECStack中</li><li>GC內部有Variable Object(VO)指向全局物件(GO)，如果有變數執行，GO中的對應變數的屬性會被賦值</li></ul><p>運行以下的程式碼：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">&quot;484646&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代碼被解析的階段時，v8引擎會幫助我們創造一個物件(Global Object)，</p><p>如果透過var來定義變數，Global Object中的屬性會被賦值，但是在上面這段程式碼中使用console打印string這個變數時，該變數還沒有被執行，所以GO中的屬性會看起來是以下這樣的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> globalObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 內部還存在setTimeout Object等全局類或函數 其中window指向globalObject本身</span>\n  window<span class="token operator">:</span> globalObject<span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n  string<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>理所當然地 string 打印出來的才會是 undefiend。</p><h3 id="函數" tabindex="-1"><a class="header-anchor" href="#函數" aria-hidden="true">#</a> 函數</h3><p>執行一段函數：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello Message&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>程式碼的運行過程如下：</p><ul><li>在解析階段時，Javascript引擎會分配一塊內存給函數，這塊內存保留函數的作用域(scope)以及函數體本身並作為屬性保存在GO中</li><li>Javascript引擎為了執行程式碼，會運行一個執行上下文棧(Execution Context Stack, ECStack)</li><li>函數執行上下文(Functional Execution Contex，FEC)會被放入ECStack中</li><li>在函數執行上下文(Functional Execution Contex，FEC)中也是存在Variable Object(VO)，這個VO指向的是活躍物件(Activation Object，AO)</li></ul><p>所以像這樣運行以下的程式碼，foo在解析階段就確定了父級作用域，所以打印出來會是Hello Message，而非從調用foo函數的位置查找父級作用域的變數。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello Message&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello function&quot;</span><span class="token punctuation">;</span>\n  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="ecma-標準" tabindex="-1"><a class="header-anchor" href="#ecma-標準" aria-hidden="true">#</a> ECMA 標準</h3><p>以下是ECMA早期的官方定義：</p><blockquote><p>Every execution context has associated with it a variable object.Variables and functions declared in the source text are added as properties of the variable object.For function, anonymous, and implementation-supplied code, parameters are added as properties of the variable object.</p><p>每一個執行環境(execution context)會被關聯到一個變數物件(variable object，VO)，在程式碼中聲明的變數或函數會作為屬性被添加到VO中。</p><p>對於函數來說，參數也會被添加到VO中。</p></blockquote>',37),O=(0,s.Uk)("不過在"),w={href:"https://262.ecma-international.org/5.1/#sec-10.5",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("更新的版本"),_=(0,s.Uk)("中ECMA 做了更加精確的定義和解釋"),V=(0,s.Uk)("Every execution context has an associated "),y={href:"https://262.ecma-international.org/5.1/#sec-10.3",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("VariableEnvironment"),U=(0,s.Uk)(". Variables and functions declared in ECMAScript code evaluated in an execution context are added as bindings in that "),A={href:"https://262.ecma-international.org/5.1/#sec-10.3",target:"_blank",rel:"noopener noreferrer"},G=(0,s.Uk)("VariableEnvironment"),M=(0,s.Uk)("’s "),W={href:"https://262.ecma-international.org/5.1/#sec-10.2.1",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("Environment Record"),q=(0,s.Uk)(". For function code, parameters are also added as bindings to that "),F={href:"https://262.ecma-international.org/5.1/#sec-10.2.1",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("Environment Record"),I=(0,s.Uk)("."),H=(0,s._)("p",null,[(0,s.Uk)("每一個執行上下文(execution context)會被關聯到一個"),(0,s._)("strong",null,"環境變數(VariableEnvironment，VE)"),(0,s.Uk)("，在"),(0,s._)("strong",null,"執行代碼"),(0,s.Uk)("中聲明的或函數會作為**環境紀錄(Environment Record，ER)**被添加到VE中。")],-1),L=(0,s._)("p",null,"對於函數來說，參數也會被添加到VE中。",-1),P=(0,s._)("p",null,"也就是說在最新的官方標準的變數物件(variable object，VO)被替換成環境變數(VariableEnvironment，VE)，環境紀錄(Environment Record，ER)的概念也出現了。",-1),T={},N=(0,e(3744).Z)(T,[["render",function(n,a){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("blockquote",null,[(0,s._)("p",null,[o,(0,s._)("a",p,[l,(0,s.Wm)(e)]),r,(0,s._)("a",c,[i,(0,s.Wm)(e)]),u])]),d,(0,s._)("ul",null,[b,(0,s._)("li",null,[k,(0,s._)("a",m,[h,(0,s.Wm)(e)]),g,(0,s._)("a",v,[f,(0,s.Wm)(e)]),x]),j]),E,(0,s._)("p",null,[O,(0,s._)("a",w,[C,(0,s.Wm)(e)]),_]),(0,s._)("blockquote",null,[(0,s._)("p",null,[V,(0,s._)("a",y,[S,(0,s.Wm)(e)]),U,(0,s._)("a",A,[G,(0,s.Wm)(e)]),M,(0,s._)("a",W,[J,(0,s.Wm)(e)]),q,(0,s._)("a",F,[R,(0,s.Wm)(e)]),I]),H,L]),P],64)}]])}}]);