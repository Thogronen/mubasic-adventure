(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5],{312:function(e,t,n){"use strict";n(22),n(31),n(52),n(51),n(63);var r=function(a){return Array.isArray(a)},o=function(e){return e===Object(e)&&!r(e)&&"function"!=typeof e},l=function(s){return s.replace(/([-_][a-z])/gi,(function(e){return e.toUpperCase().replace("-","").replace("_","")}))};t.a=function e(t){if(o(t)){var n={};return Object.keys(t).forEach((function(r){n[l(r)]=e(t[r])})),n}return r(t)?t.map((function(i){return e(i)})):t}},313:function(e,t,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("1554398c",content,!0,{sourceMap:!1})},315:function(e,t,n){"use strict";n(313)},316:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,'html{scroll-behavior:smooth}html .header .headers-container{color:var(--title-color)}html .header .headers-container .svg-color{stroke:var(--title-color);fill:var(--title-color)}html .header .headers-container .header-links a:not(.logo){margin-left:2.5rem;display:none}@media (min-width: 1024px){html .header .headers-container .header-links a:not(.logo){display:inline}}html .header .headers-container .header-fixed:before{content:"";position:absolute;background-color:#fff;height:100%;width:100%;z-index:0}html .header .headers-container .header-fixed .header-links{color:#000}html .header .headers-container .header-fixed svg{fill:#000;stroke:#000}html .header .headers-container .color-placeholder{background-color:var(--header-color)}html .header .headers-container .title{color:var(--title-color);text-shadow:0 0 70px rgba(0,0,0,.25098039215686274);position:relative}html .header .headers-container .title-animate{-webkit-animation:titleAnimation 4s ease-in-out;animation:titleAnimation 4s ease-in-out;transform:translateY(0)}html .header .headers-container .chevron-bounce:hover{-webkit-animation:bounce .8s infinite;animation:bounce .8s infinite}@-webkit-keyframes bounce{0%,to{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}50%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}}@keyframes bounce{0%,to{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}50%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}}html .header .headers-container .chevron-color{filter:drop-shadow(0 0 30px rgba(0,0,0,.25098));stroke:var(--title-color)}html .header .headers-container .chevron-color:hover{stroke:var(--color)}html .header .headers-container .video-container{overflow:hidden;top:0;left:0;width:100%;height:100%;pointer-events:none}html .header .headers-container .video-container div{height:100%;width:100%}html .header .headers-container .video-container iframe{width:100vw!important;height:56.25vw!important;min-height:100vh;min-width:177.77vh;top:50%!important;left:50%!important;transform:translate(-50%,-50%)}html .header-enter-active{transition:opacity .5s}html .header-fixed-enter-active,html .header-fixed-leave-active{transition:opacity .3s}html .header-enter,html .header-fixed-enter,html .header-fixed-leave-to,html .header-leave-to,html .title-enter,html .title-leave-to{opacity:0}@-webkit-keyframes titleAnimation{0%{opacity:0}70%{opacity:1;transform:translateY(0)}}@keyframes titleAnimation{0%{opacity:0}70%{opacity:1;transform:translateY(0)}}',""]),r.locals={},e.exports=r},317:function(e,t,n){"use strict";n.r(t);n(31),n(27),n(33),n(44),n(45);var r=n(17),o=(n(22),n(34));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Header",props:{previousWork:{type:[String,void 0],default:void 0},nextWork:{type:[String,void 0],default:void 0},hideHeaderPreview:{type:[Boolean,void 0],default:!1}},data:function(){return{loading:!0,loadingVideo:!0,loadingImage:!0,isFixedHeader:!1,isVisibleMenu:!1}},computed:c(c({},Object(o.b)(["headerData"])),{},{title:function(){return this.headerData.title},loadedMedia:function(){return this.$store.getters.isColor||this.$store.getters.isVideo&&!this.loadingVideo||this.$store.getters.isImage}}),watch:{loadedMedia:function(e){e&&this.init()}},mounted:function(){this.hideHeaderPreview||(this.$store.getters.isColor&&this.init(),this.$nextTick(this.scrollHeader),window.addEventListener("scroll",this.scrollHeader))},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHeader)},methods:{scrollHeader:function(){var e=document.querySelectorAll(".media"),t=document.querySelector(".chevron-bounce"),n=window.innerHeight-200,r=window.scrollY;e.forEach((function(e){return(null==e?void 0:e.style)&&(e.style.opacity=1-r/n)})),(null==t?void 0:t.style)&&(t.style.opacity=1-r/n)},init:function(){this.loading=!1}}},h=(n(315),n(8)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"\n      flex flex-col\n      select-none\n      relative\n      overflow-hidden\n      headers-container\n    ",class:{"h-screen":!e.hideHeaderPreview}},[n("div",{staticClass:"z-50 fixed inset-x-0 top-0 header-fixed header-background flex"},[n("div",{staticClass:"flex lg:!px-12 !px-3 flex-1 h-14 justify-center"},[n("div",{staticClass:"\n            flex\n            items-center\n            justify-center\n            w-full\n            h-full\n            overflow-hidden\n            relative\n            px-3\n            content-wrapper__header\n          "},[n("HeaderLogo"),e._v(" "),n("HeaderMenu",{attrs:{menu:e.isVisibleMenu},on:{"update:menu":function(t){e.isVisibleMenu=t}}})],1)])]),e._v(" "),e.hideHeaderPreview?e._e():n("div",{staticClass:"contents"},[n("div",{staticClass:"\n          absolute\n          inset-x-0\n          bottom-0\n          top-16\n          flex\n          items-center\n          justify-center\n          z-30\n        "},[n("h1",{key:e.title,staticClass:"\n            title\n            font-black\n            leading-relaxed\n            uppercase\n            w-12/12\n            text-center\n            max-h-full\n            break-normal\n            title-animate\n            px-5\n          ",class:["xl:text-"+(e.title.length>10?"8":"10")+"xl","lg:text-"+(e.title.length>40?"8":"9")+"xl","md:text-"+(e.title.length>30?"6":"8")+"xl","text-"+(e.title.length>20||e.title.split("<")[1].length>6?"5":"7")+"xl"],domProps:{innerHTML:e._s(e.title)}})]),e._v(" "),n("transition",{attrs:{name:"header",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.getters.isVideo&&!e.loadingVideo,expression:"$store.getters.isVideo && !loadingVideo"}],staticClass:"\n            media\n            video-container\n            absolute\n            inset-0\n            flex\n            justify-center\n            items-center\n            z-20\n          "},[n("client-only",[e.$store.getters.isVideo&&e.headerData.srcHeader?n("vimeo-player",{attrs:{autoplay:"",loop:"",options:{autoplay:!0,loop:!0,controls:!1,dnt:!0,muted:!0,portrait:!1,responsive:!0,title:!1},"video-id":e.headerData.srcHeader},on:{playing:function(t){e.loadingVideo=!1},error:function(t){e.loadingVideo=!1},pause:function(t){e.loadingVideo=!1}}}):e._e()],1)],1)]),e._v(" "),n("transition",{attrs:{name:"header",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.getters.isImage,expression:"$store.getters.isImage"}],staticClass:"media absolute inset-0 z-20"},[n("client-only",[e.$store.getters.isImage?n("img",{ref:"image",staticClass:"h-full w-full object-cover",attrs:{src:e.headerData.srcHeader,loading:"lazy"},on:{load:function(t){e.loadingImage=!1},error:function(t){e.loadingImage=!1}}}):e._e()])],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"h-full w-full absolute inset-0 z-10 media"},[n("div",{staticClass:"h-full w-full color-placeholder opacity-10"})]),e._v(" "),n("transition",{attrs:{name:"header",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"media absolute inset-0 flex justify-center items-center"},[n("svg",{attrs:{id:"L6",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[n("rect",{staticClass:"svg-color",attrs:{fill:"none","stroke-width":"4",x:"25",y:"25",width:"50",height:"50"}},[n("animateTransform",{attrs:{id:"strokeBox",attributeName:"transform",dur:"0.5s",from:"0 50 50",to:"180 50 50",type:"rotate",attributeType:"XML",begin:"rectBox.end"}})],1),e._v(" "),n("rect",{staticClass:"svg-color",attrs:{x:"27",y:"27",width:"46",height:"50"}},[n("animate",{attrs:{id:"rectBox",attributeName:"height",dur:"1.3s",attributeType:"XML",from:"50",to:"0",fill:"freeze",begin:"0s;strokeBox.end"}})])])])]),e._v(" "),n("div",{staticClass:"\n          absolute\n          inset-0\n          flex\n          justify-between\n          items-end\n          pb-10\n          xl:px-24\n          md:px-12\n          px-3\n          z-40\n        "},[e.previousWork?n("nuxt-link",{attrs:{to:e.previousWork}},[n("svg",{staticClass:"h-8 w-8 chevron-color",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]):n("div"),e._v(" "),n("a",{attrs:{href:"#main"}},[n("svg",{staticClass:"h-10 w-10 cursor-pointer chevron-bounce chevron-color",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])]),e._v(" "),e.nextWork?n("nuxt-link",{attrs:{to:e.nextWork}},[n("svg",{staticClass:"h-8 w-8 chevron-color",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]):n("div")],1)],1)]),e._v(" "),e.isVisibleMenu?n("HeaderOverlayMenu",{attrs:{menu:e.isVisibleMenu},on:{"update:menu":function(t){e.isVisibleMenu=t}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderLogo:n(205).default,HeaderMenu:n(203).default,HeaderOverlayMenu:n(204).default})},331:function(e,t,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("71f89de8",content,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n(331)},353:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".highlight[data-v-2adc59ce]{color:var(--color)}",""]),r.locals={},e.exports=r},399:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(32),n(312)),l={scrollToTop:!0,fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.commit("setIsDataToShowLoading",!0),t.t0=o.a,t.next=5,e.$axios.$get("v2/pages/10601");case 5:t.t1=t.sent,n=(0,t.t0)(t.t1),e.$store.commit("setHeadData",null==n?void 0:n.yoastHeadJson),e.$store.commit("setDataToShow",n),t.next=13;break;case 11:t.prev=11,t.t2=t.catch(0);case 13:return t.prev=13,e.$store.commit("setIsDataToShowLoading",!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,11,13,16]])})))()}},c=(n(352),n(8)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("LayoutHeader",{attrs:{id:"header"}}),e._v(" "),n("div",{attrs:{id:"main"}},[n("div",{staticClass:"flex flex-col gap-y-12 animation-text"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"\n          max-w-screen-2xl\n          flex\n          mx-auto\n          justify-center\n          gap-2\n          flex-wrap\n          lg:px-12\n          px-3\n          w-full\n        "},[n("client-only",e._l(["701920359","591002011","747232135","476249461","474628322","516166252"],(function(video){return n("vimeo-player",{key:video,staticClass:"w-96",attrs:{autoplay:!1,loop:!1,options:{autoplay:!1,loop:!1,controls:!0,dnt:!0,muted:!1,portrait:!1,responsive:!0,title:!1},"video-id":video}})})),1)],1),e._v(" "),n("p",{staticClass:"w-full"},[n("a",{staticClass:"more-videos-link",attrs:{href:"https://vimeo.com/showcase/8463649",target:"_blank"}},[e._v("\n          More videos\n          "),n("svg",{staticClass:"h-8 w-8 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"}})])])])])])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summary w-full flex py-16 mb-5"},[n("p",{staticClass:"text-justify mx-auto flex flex-col gap-y-7"},[n("span",{staticClass:"\n              uppercase\n              text-left\n              md:text-6xl\n              text-3xl\n              font-black\n              text-white\n            "},[e._v("\n            Frame-by-frame animation\n          ")]),e._v(" "),n("span",{staticClass:"text-justify"},[e._v("\n            Are you looking for high-quality and affordable frame-by-frame\n            commercials, explainers, or even music videos? Then frame-by-frame\n            animation is your go-to. Working on such projects, we love to\n            experiment with styles and techniques and always look for fresh\n            ways to convey any idea. Well, frame-by-frame videos take more\n            time, but they’re worth it. We enjoy every moment of the project’s\n            creation and know how to spread your message around the world. Our\n            team is not afraid of challenges. No matter how complicated your\n            service is, we will bring your story to life in a unique and\n            emotive way. From design to delivery, our team of script-writers,\n            designers, and animators produce frame-by-frame stories exploring\n            different forms and movements to provide the best digital\n            experience for our clients. Frankly speaking, it’s amazing how\n            such videos may help your business to stand out. We’re here to\n            make your brand powerful even with the craziest ideas ever.\n          ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"mt-10"},[n("p",[n("span",{staticClass:"md:text-3xl text-xl uppercase text-left font-black"},[e._v("\n            Are you working on your marketing campaign? Start with a\n            hand-crafted frame-by-frame animation!\n          ")])])])}],!1,null,"2adc59ce",null);t.default=component.exports;installComponents(component,{LayoutHeader:n(317).default})}}]);