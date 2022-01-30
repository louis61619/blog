"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[213],{3689:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-41a237b0",path:"/front-end/javascript/DOM.html",title:"DOM",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Node",slug:"node",children:[]},{level:2,title:"Document",slug:"document",children:[]},{level:2,title:"Element",slug:"element",children:[]},{level:2,title:"事件監聽",slug:"事件監聽",children:[]},{level:2,title:"事件冒泡和事件捕獲",slug:"事件冒泡和事件捕獲",children:[]},{level:2,title:"事件物件的屬性和方法",slug:"事件物件的屬性和方法",children:[]}],filePathRelative:"front-end/javascript/DOM.md",git:{updatedTime:1643546758e3,contributors:[{name:"louis",email:"louis61619@gmail.com",commits:1}]}}},6122:(n,s,a)=>{a.r(s),a.d(s,{default:()=>Q});var t=a(6252),e=a(2837),c=a(1701);const l=(0,t._)("h1",{id:"dom",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#dom","aria-hidden":"true"},"#"),(0,t.Uk)(" DOM")],-1),o=(0,t._)("p",null,"網頁中最重要的就各種標籤元素，透過這些標籤瀏覽器才將畫面正確的渲染出來，而 JavaScript 是通過 Document Object Model （DOM，文檔物件模型）來操作這些標籤。",-1),p=(0,t._)("p",null,"DOM 呈現如以下的架構：",-1),u=(0,t._)("p",null,[(0,t._)("img",{src:e,alt:"image-20220128112136455"})],-1),_=(0,t._)("p",null,"下一層級的會繼承上一層的屬性和方法，最上層的 EventTarget 是用於處理事件監聽的。",-1),i=(0,t._)("h2",{id:"node",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#node","aria-hidden":"true"},"#"),(0,t.Uk)(" Node")],-1),k=(0,t._)("p",null,"透過 Node 中內建的屬性和方法能夠輕鬆獲取 dom 元素的類型：",-1),r=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 常見的屬性"),(0,t.Uk)("\nconsole"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("divEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("nodeName"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" divEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("nodeType"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br")])],-1),m=(0,t._)("p",null,"也能夠對 dom 元素進行操作：",-1),d=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" strongEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"createElement"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'strong'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\nstrongEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("textContent "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'我是 strong 元素'"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 插入元素"),(0,t.Uk)("\ndivEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"appendChild"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("strongEl"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br")])],-1),b=(0,t._)("h2",{id:"document",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#document","aria-hidden":"true"},"#"),(0,t.Uk)(" Document")],-1),U=(0,t._)("p",null,"Document 中有常見的屬性如：title、location 等，以及創建元素和獲取元素的方法。",-1),g=(0,t._)("p",null,"創建元素：",-1),v=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" imageEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"createElement"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'img'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 相等"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// const imageEl2 = new Image()"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br")])],-1),f=(0,t._)("p",null,"獲取元素：",-1),h=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"id"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("div"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"name"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("div"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("123"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),E=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// 透過 id"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl0 "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getElementById"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 透過元素標籤，取全部"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl1 "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getElementsByTagName"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 透過 name 屬性，取全部"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl2 "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getElementsByName"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 透過選擇器，只取第一個"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl3 "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 透過選擇器，取全部"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl4 "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelectorAll"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br")])],-1),y=(0,t._)("h2",{id:"element",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#element","aria-hidden":"true"},"#"),(0,t.Uk)(" Element")],-1),j=(0,t._)("p",null,"常見的 element 屬性，如 id 、tagName、clientWidth，能夠獲取元素上的資訊，並可以用內建的方法來設置屬性和獲取屬性：",-1),x=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t.Uk)("divEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setAttribute"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'my-name'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Louis'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" divEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getAttribute"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'my-name'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// Louis"),(0,t.Uk)("\nconsole"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("value"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br")])],-1),w=(0,t._)("h2",{id:"事件監聽",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#事件監聽","aria-hidden":"true"},"#"),(0,t.Uk)(" 事件監聽")],-1),q=(0,t._)("p",null,"在 JavaScript 與瀏覽器交互，其中最重要的一個手段就是事件監聽，常見的監聽方式有幾種。",-1),D=(0,t._)("p",null,"有這樣一標籤元素：",-1),S=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("box"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),L=(0,t._)("p",null,"可以直接在標籤元素上進行事件監聽：",-1),N=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("box"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"onclick"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value javascript language-javascript"},[(0,t.Uk)("console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div被點擊'"),(0,t._)("span",{class:"token punctuation"},")")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),M=(0,t._)("p",null,"或者另外寫一函數：",-1),O=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("box"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"onclick"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value javascript language-javascript"},[(0,t._)("span",{class:"token function"},"divClick"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"divClick"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div 元素被點擊'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br")])],-1),C=(0,t._)("p",null,"透過獲取元素的方式並給予屬性監聽點擊：",-1),T=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'.box'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\ndivEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function-variable function"},"onclick"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"function"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div元素被點擊'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br")])],-1),B=(0,t._)("p",null,"添加監聽事件進行點擊監聽，這是目前最主流的方式，因為可以針對同一個元素作多次監聽：",-1),I=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'.box'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\ndivEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'div元素被點擊'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br")])],-1),A=(0,t._)("h2",{id:"事件冒泡和事件捕獲",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#事件冒泡和事件捕獲","aria-hidden":"true"},"#"),(0,t.Uk)(" 事件冒泡和事件捕獲")],-1),P=(0,t._)("p",null,"瀏覽器的事件流監聽方式默認是由內層的元素向外層發散，這個順序稱之為事件冒泡（Event Bubble），還有另一種順序是從外層到內層，這種稱為事件捕獲。",-1),J=(0,t._)("p",null,"之所以會有兩種不同的處理流是在因為在早期瀏覽器開發時，IE 和 Netscape 採取了相反的事件流設計方式。",-1),Y=(0,t._)("p",null,[(0,t._)("img",{src:c,alt:"image-20220128175020421"})],-1),H=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" spanEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'.box'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" divEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'.out'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 事件冒泡"),(0,t.Uk)("\nspanEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'事件冒泡，span 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\ndivEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'事件冒泡，div 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\ndocument"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("body"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'事件冒泡，body 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 事件捕獲"),(0,t.Uk)("\nspanEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'事件捕獲，span 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\ndivEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'事件捕獲，div 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\ndocument"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("body"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'事件捕獲，body 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"23"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"24"),(0,t._)("br")])],-1),R=(0,t._)("h2",{id:"事件物件的屬性和方法",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#事件物件的屬性和方法","aria-hidden":"true"},"#"),(0,t.Uk)(" 事件物件的屬性和方法")],-1),W=(0,t._)("p",null,"透過監聽事件能夠獲取到 event 事件物件：",-1),X=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" boxEl "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" document"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"querySelector"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'.box'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token comment"},"// 事件冒泡"),(0,t.Uk)("\nboxEl"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addEventListener"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'click'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"event"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'box 元素被點擊了'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" event"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br")])],-1),Z=(0,t._)("p",null,"常見的屬性：",-1),z=(0,t._)("ul",null,[(0,t._)("li",null,"type：事件的類型，如 click"),(0,t._)("li",null,"target：為當前觸發事件的元素"),(0,t._)("li",null,"currentTarget：為處理事件監聽的元素"),(0,t._)("li",null,"offsetX：距離當前事件元素的 x 軸"),(0,t._)("li",null,"offsetY：距離當前事件元素的 y 軸")],-1),F=(0,t._)("p",null,"常見的方法：",-1),G=(0,t._)("ul",null,[(0,t._)("li",null,"preventDefault：阻止元素的默認行為"),(0,t._)("li",null,"stopPropagation：依照先捕獲和冒泡的順序，終止事件的下一步傳遞"),(0,t._)("li",null,"stopImmediatePropagation：阻止同一個被監聽的元素響應多次")],-1),K={},Q=(0,a(3744).Z)(K,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)(t.HY,null,[l,o,p,u,_,i,k,r,m,d,b,U,g,v,f,h,E,y,j,x,w,q,D,S,L,N,M,O,C,T,B,I,A,P,J,Y,H,R,W,X,Z,z,F,G],64)}]])},2837:(n,s,a)=>{n.exports=a.p+"assets/img/image-20220128112136455.6835d783.png"},1701:(n,s,a)=>{n.exports=a.p+"assets/img/image-20220128175020421.9234c1c4.png"}}]);