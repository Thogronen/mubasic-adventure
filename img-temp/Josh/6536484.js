(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5],{312:function(t,e,n){"use strict";n(22),n(31),n(52),n(51),n(63);var r=function(a){return Array.isArray(a)},o=function(t){return t===Object(t)&&!r(t)&&"function"!=typeof t},l=function(s){return s.replace(/([-_][a-z])/gi,(function(t){return t.toUpperCase().replace("-","").replace("_","")}))};e.a=function t(e){if(o(e)){var n={};return Object.keys(e).forEach((function(r){n[l(r)]=t(e[r])})),n}return r(e)?e.map((function(i){return t(i)})):e}},313:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1554398c",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";n(313)},316:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,'html{scroll-behavior:smooth}html .header .headers-container{color:var(--title-color)}html .header .headers-container .svg-color{stroke:var(--title-color);fill:var(--title-color)}html .header .headers-container .header-links a:not(.logo){margin-left:2.5rem;display:none}@media (min-width: 1024px){html .header .headers-container .header-links a:not(.logo){display:inline}}html .header .headers-container .header-fixed:before{content:"";position:absolute;background-color:#fff;height:100%;width:100%;z-index:0}html .header .headers-container .header-fixed .header-links{color:#000}html .header .headers-container .header-fixed svg{fill:#000;stroke:#000}html .header .headers-container .color-placeholder{background-color:var(--header-color)}html .header .headers-container .title{color:var(--title-color);text-shadow:0 0 70px rgba(0,0,0,.25098039215686274);position:relative}html .header .headers-container .title-animate{-webkit-animation:titleAnimation 4s ease-in-out;animation:titleAnimation 4s ease-in-out;transform:translateY(0)}html .header .headers-container .chevron-bounce:hover{-webkit-animation:bounce .8s infinite;animation:bounce .8s infinite}@-webkit-keyframes bounce{0%,to{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}50%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}}@keyframes bounce{0%,to{transform:translateY(0);-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}50%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}}html .header .headers-container .chevron-color{filter:drop-shadow(0 0 30px rgba(0,0,0,.25098));stroke:var(--title-color)}html .header .headers-container .chevron-color:hover{stroke:var(--color)}html .header .headers-container .video-container{overflow:hidden;top:0;left:0;width:100%;height:100%;pointer-events:none}html .header .headers-container .video-container div{height:100%;width:100%}html .header .headers-container .video-container iframe{width:100vw!important;height:56.25vw!important;min-height:100vh;min-width:177.77vh;top:50%!important;left:50%!important;transform:translate(-50%,-50%)}html .header-enter-active{transition:opacity .5s}html .header-fixed-enter-active,html .header-fixed-leave-active{transition:opacity .3s}html .header-enter,html .header-fixed-enter,html .header-fixed-leave-to,html .header-leave-to,html .title-enter,html .title-leave-to{opacity:0}@-webkit-keyframes titleAnimation{0%{opacity:0}70%{opacity:1;transform:translateY(0)}}@keyframes titleAnimation{0%{opacity:0}70%{opacity:1;transform:translateY(0)}}',""]),r.locals={},t.exports=r},317:function(t,e,n){"use strict";n.r(e);n(31),n(27),n(33),n(44),n(45);var r=n(17),o=(n(22),n(34));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Header",props:{previousWork:{type:[String,void 0],default:void 0},nextWork:{type:[String,void 0],default:void 0},hideHeaderPreview:{type:[Boolean,void 0],default:!1}},data:function(){return{loading:!0,loadingVideo:!0,loadingImage:!0,isFixedHeader:!1,isVisibleMenu:!1}},computed:c(c({},Object(o.b)(["headerData"])),{},{title:function(){return this.headerData.title},loadedMedia:function(){return this.$store.getters.isColor||this.$store.getters.isVideo&&!this.loadingVideo||this.$store.getters.isImage}}),watch:{loadedMedia:function(t){t&&this.init()}},mounted:function(){this.hideHeaderPreview||(this.$store.getters.isColor&&this.init(),this.$nextTick(this.scrollHeader),window.addEventListener("scroll",this.scrollHeader))},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHeader)},methods:{scrollHeader:function(){var t=document.querySelectorAll(".media"),e=document.querySelector(".chevron-bounce"),n=window.innerHeight-200,r=window.scrollY;t.forEach((function(t){return(null==t?void 0:t.style)&&(t.style.opacity=1-r/n)})),(null==e?void 0:e.style)&&(e.style.opacity=1-r/n)},init:function(){this.loading=!1}}},h=(n(315),n(8)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"\n      flex flex-col\n      select-none\n      relative\n      overflow-hidden\n      headers-container\n    ",class:{"h-screen":!t.hideHeaderPreview}},[n("div",{staticClass:"z-50 fixed inset-x-0 top-0 header-fixed header-background flex"},[n("div",{staticClass:"flex lg:!px-12 !px-3 flex-1 h-14 justify-center"},[n("div",{staticClass:"\n            flex\n            items-center\n            justify-center\n            w-full\n            h-full\n            overflow-hidden\n            relative\n            px-3\n            content-wrapper__header\n          "},[n("HeaderLogo"),t._v(" "),n("HeaderMenu",{attrs:{menu:t.isVisibleMenu},on:{"update:menu":function(e){t.isVisibleMenu=e}}})],1)])]),t._v(" "),t.hideHeaderPreview?t._e():n("div",{staticClass:"contents"},[n("div",{staticClass:"\n          absolute\n          inset-x-0\n          bottom-0\n          top-16\n          flex\n          items-center\n          justify-center\n          z-30\n        "},[n("h1",{key:t.title,staticClass:"\n            title\n            font-black\n            leading-relaxed\n            uppercase\n            w-12/12\n            text-center\n            max-h-full\n            break-normal\n            title-animate\n            px-5\n          ",class:["xl:text-"+(t.title.length>10?"8":"10")+"xl","lg:text-"+(t.title.length>40?"8":"9")+"xl","md:text-"+(t.title.length>30?"6":"8")+"xl","text-"+(t.title.length>20||t.title.split("<")[1].length>6?"5":"7")+"xl"],domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),n("transition",{attrs:{name:"header",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.isVideo&&!t.loadingVideo,expression:"$store.getters.isVideo && !loadingVideo"}],staticClass:"\n            media\n            video-container\n            absolute\n            inset-0\n            flex\n            justify-center\n            items-center\n            z-20\n          "},[n("client-only",[t.$store.getters.isVideo&&t.headerData.srcHeader?n("vimeo-player",{attrs:{autoplay:"",loop:"",options:{autoplay:!0,loop:!0,controls:!1,dnt:!0,muted:!0,portrait:!1,responsive:!0,title:!1},"video-id":t.headerData.srcHeader},on:{playing:function(e){t.loadingVideo=!1},error:function(e){t.loadingVideo=!1},pause:function(e){t.loadingVideo=!1}}}):t._e()],1)],1)]),t._v(" "),n("transition",{attrs:{name:"header",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.isImage,expression:"$store.getters.isImage"}],staticClass:"media absolute inset-0 z-20"},[n("client-only",[t.$store.getters.isImage?n("img",{ref:"image",staticClass:"h-full w-full object-cover",attrs:{src:t.headerData.srcHeader,loading:"lazy"},on:{load:function(e){t.loadingImage=!1},error:function(e){t.loadingImage=!1}}}):t._e()])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"h-full w-full absolute inset-0 z-10 media"},[n("div",{staticClass:"h-full w-full color-placeholder opacity-10"})]),t._v(" "),n("transition",{attrs:{name:"header",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"media absolute inset-0 flex justify-center items-center"},[n("svg",{attrs:{id:"L6",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[n("rect",{staticClass:"svg-color",attrs:{fill:"none","stroke-width":"4",x:"25",y:"25",width:"50",height:"50"}},[n("animateTransform",{attrs:{id:"strokeBox",attributeName:"transform",dur:"0.5s",from:"0 50 50",to:"180 50 50",type:"rotate",attributeType:"XML",begin:"rectBox.end"}})],1),t._v(" "),n("rect",{staticClass:"svg-color",attrs:{x:"27",y:"27",width:"46",height:"50"}},[n("animate",{attrs:{id:"rectBox",attributeName:"height",dur:"1.3s",attributeType:"XML",from:"50",to:"0",fill:"freeze",begin:"0s;strokeBox.end"}})])])])]),t._v(" "),n("div",{staticClass:"\n          absolute\n          inset-0\n          flex\n          justify-between\n          items-end\n          pb-10\n          xl:px-24\n          md:px-12\n          px-3\n          z-40\n        "},[t.previousWork?n("nuxt-link",{attrs:{to:t.previousWork}},[n("svg",{staticClass:"h-8 w-8 chevron-color",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]):n("div"),t._v(" "),n("a",{attrs:{href:"#main"}},[n("svg",{staticClass:"h-10 w-10 cursor-pointer chevron-bounce chevron-color",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])]),t._v(" "),t.nextWork?n("nuxt-link",{attrs:{to:t.nextWork}},[n("svg",{staticClass:"h-8 w-8 chevron-color",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]):n("div")],1)],1)]),t._v(" "),t.isVisibleMenu?n("HeaderOverlayMenu",{attrs:{menu:t.isVisibleMenu},on:{"update:menu":function(e){t.isVisibleMenu=e}}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderLogo:n(205).default,HeaderMenu:n(203).default,HeaderOverlayMenu:n(204).default})},319:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(103);var o=n(131),l=n(77);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},324:function(t,e,n){"use strict";var r=n(319);e.a=function(t){for(var e=[],n=Object(r.a)((null==t?void 0:t.images)||[]),o=0,l=0,c=0;o<n.length;o++){var d,h,v,f,m,image=n[o],w=l>=t.patterns.length-1,x=c>=t.patterns[l].pattern.length-1,pattern=null===(d=t.patterns)||void 0===d||null===(h=d[l])||void 0===h||null===(v=h.pattern)||void 0===v?void 0:v[c],y=null===(f=t.patterns)||void 0===f||null===(m=f[l])||void 0===m?void 0:m.height;x?(c=0,w?l=0:l++):c++,e.push({image:image,pattern:pattern,height:y})}return e}},335:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("53df920d",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("722746c6",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n(335)},385:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".text-content[data-v-123d5aac]{color:var(--title-color);background-color:var(--color)}.main-color[data-v-123d5aac]{color:var(--color);stroke:var(--color);fill:var(--color)}",""]),r.locals={},t.exports=r},386:function(t,e,n){"use strict";n(336)},387:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".blog-content a{text-decoration:underline}",""]),r.locals={},t.exports=r},405:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n(7),l=(n(27),n(47),n(31),n(33),n(44),n(22),n(45),n(32),n(34)),c=n(312),d=n(324);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={scrollToTop:!0,asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.store,o=t.$axios,e.prev=1,r.commit("setIsDataToShowLoading",!0),e.t0=c.a,e.next=6,o.$get("v2/portfolio",{params:{slug:n.slug}});case 6:e.t1=e.sent[0],l=(0,e.t0)(e.t1),r.commit("setHeadData",null==l?void 0:l.yoastHeadJson),r.commit("setDataToShow",l),e.next=14;break;case 12:e.prev=12,e.t2=e.catch(1);case 14:return e.prev=14,r.commit("setIsDataToShowLoading",!1),e.finish(14);case 17:return e.abrupt("return",{});case 18:case"end":return e.stop()}}),e,null,[[1,12,14,17]])})))()},head:function(){var t,e,n,r,o,image=JSON.parse((null===(t=this.yoast)||void 0===t?void 0:t.ogImage)||'{"url": "","height": "", "width": ""}');return{title:(null===(e=this.yoast)||void 0===e?void 0:e.title)||"",meta:[{hid:"description",name:"description",content:(null===(n=this.yoast)||void 0===n?void 0:n.description)||""},{hid:"og:description",property:"og:description",content:(null===(r=this.yoast)||void 0===r?void 0:r.description)||""},{hid:"og:title",property:"og:title",content:(null===(o=this.yoast)||void 0===o?void 0:o.title)||""},{hid:"og:url",property:"og:url",content:this.yoast.url||""},{hid:"og:image",property:"og:image",content:image.url},{hid:"og:image:width",property:"og:image:width",content:image.width},{hid:"og:image:height",property:"og:image:height",content:image.height}]}},computed:v(v(v({},Object(l.d)(["isMobile"])),Object(l.b)(["blogPostContent","navigateLink","gridImages","workParams","awards","yoast"])),{},{title:function(){return this.$store.getters.headerData.title},titlePreview:function(){return this.$store.getters.headerData.titlePreview},previousWork:function(){var t,e;return this.getCorrectLink(null===(t=this.navigateLink)||void 0===t||null===(e=t.previousWork)||void 0===e?void 0:e.slug)},nextWork:function(){var t,e;return this.getCorrectLink(null===(t=this.navigateLink)||void 0===t||null===(e=t.nextWork)||void 0===e?void 0:e.slug)},parsedGrid:function(){return Object(d.a)(this.gridImages)}}),methods:{getCorrectLink:function(t){if(t)return t="/portfolio/"+t+"/"}}},m=(n(384),n(386),n(8)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("LayoutHeader",{attrs:{id:"header","previous-work":t.previousWork,"next-work":t.nextWork}}),t._v(" "),n("div",{staticClass:"flex justify-center flex-col items-center mt-20",attrs:{id:"main"}},[n("div",{staticClass:"text-content w-full"},[n("div",{staticClass:"flex py-10 gap-10 justify-between"},[n("div",{staticClass:"\n            max-w-screen-2xl\n            lg:grid\n            flex flex-col\n            mx-auto\n            w-full\n            gap-y-5 gap-x-20\n            lg:px-12\n            px-3\n          ",staticStyle:{"grid-template-columns":"1fr auto"}},[n("div",{staticClass:"\n              title-project\n              uppercase\n              md:text-6xl\n              text-3xl text-left\n              font-black\n              text-white\n            ",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"flex ml-0 mr-auto justify-evenly md:justify-end gap-7 mt-2"},[t.awards.afterAward?n("a",{staticClass:"flex bg-white h-11 w-11 rounded",attrs:{href:t.awards.afterAward,target:"_blank"}},[n("span",{staticClass:"main-color font-bold text-lg m-auto"},[t._v("Ae")])]):t._e(),t._v(" "),t.awards.motionAward?n("a",{staticClass:"flex bg-white h-11 w-11 rounded",attrs:{href:t.awards.motionAward,target:"_blank"}},[n("span",{staticClass:"main-color font-bold text-lg m-auto"},[t._v("Mo")])]):t._e(),t._v(" "),t.awards.motiondesignAward?n("a",{staticClass:"h-11 w-11 bg-white rounded",attrs:{href:t.awards.motiondesignAward,target:"_blank"}},[n("svg",{staticClass:"h-full w-full",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"13 13 75 75"}},[n("g",{attrs:{transform:"translate(28.143 32.571)"}},[n("path",{staticClass:"main-color",attrs:{d:"M19.03,34.57c0.11,0.25-5.24,5.06-13.71-3.67C9.16,29.94,16.58,29.15,19.03,34.57z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M10.22,27.16c0,0.26-6.35,2.31-10.23-8.28C3.61,19.52,10.2,21.65,10.22,27.16z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M10.36,19.53c-0.07,0.24-6.75,0.23-7.15-11.04C6.45,10.22,12.05,14.29,10.36,19.53z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M13.36,13.18c-0.2,0.17-5.83-3.41-0.16-13.16C15.02,3.21,17.58,9.64,13.36,13.18z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M26.06,34.57c-0.11,0.25,5.24,5.06,13.71-3.67C35.94,29.94,28.51,29.15,26.06,34.57z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M34.87,27.16c0,0.26,6.35,2.31,10.23-8.28C41.48,19.52,34.9,21.65,34.87,27.16z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M34.73,19.53c0.08,0.25,6.75,0.23,7.15-11.04C38.65,10.22,33.05,14.29,34.73,19.53z"}}),t._v(" "),n("path",{staticClass:"main-color",attrs:{d:"M31.74,13.18c0.19,0.17,5.83-3.41,0.15-13.16C30.08,3.21,27.52,9.64,31.74,13.18z"}})])])]):t._e()]),t._v(" "),n("div",{staticClass:"text-justify text-lg",domProps:{innerHTML:t._s(t.blogPostContent)}}),t._v(" "),n("div",{staticClass:"\n              md:text-left\n              flex flex-col\n              gap-7\n              max-w-prose\n              w-full\n              md:w-auto\n            "},[n("div",{staticClass:"flex flex-row gap-7"},[t.workParams.client?n("div",{staticClass:"w-full md:w-44 flex flex-col items-start"},[n("div",{staticClass:"font-black text-lg"},[t._v("Client")]),t._v(" "),n("div",[t._v(t._s(t.workParams.client))])]):t._e(),t._v(" "),t.workParams.length?n("div",{staticClass:"w-full md:w-44 flex flex-col items-start"},[n("div",{staticClass:"font-black text-lg"},[t._v("Length")]),t._v(" "),n("div",[t._v(t._s(t.workParams.length))])]):t._e()]),t._v(" "),n("div",{staticClass:"flex flex-row gap-7"},[t.workParams.creativeDirection?n("div",{staticClass:"w-full md:w-44 flex flex-col items-start"},[n("div",{staticClass:"font-black text-lg"},[t._v("Creative Direction")]),t._v(" "),n("div",[t._v(t._s(t.workParams.creativeDirection))])]):t._e(),t._v(" "),t.workParams.style?n("div",{staticClass:"w-full md:w-44 flex flex-col items-start"},[n("div",{staticClass:"font-black text-lg"},[t._v("Style")]),t._v(" "),n("div",[t._v(t._s(t.workParams.style))])]):t._e()])])])])]),t._v(" "),n("div",{staticClass:"\n        max-w-screen-2xl\n        flex\n        justify-center\n        flex-col\n        lg:px-12\n        px-3\n        w-full\n      "},[n("client-only",[t.workParams.mainVideo?n("vimeo-player",{staticClass:"w-full mx-auto mt-20 mb-10",attrs:{autoplay:!1,loop:!1,options:{autoplay:!1,loop:!1,controls:!0,dnt:!0,muted:!1,portrait:!1,responsive:!0,title:!1},"video-id":t.workParams.mainVideo}}):t._e()],1),t._v(" "),n("div",{staticClass:"grid grid-cols-12 gap-10 w-full"},[n("transition-group",{staticClass:"contents",attrs:{name:"project",mode:"out-in"}},t._l(t.parsedGrid,(function(e,r){var image=e.image,pattern=e.pattern,o=e.height;return n("div",{key:image.id,staticClass:"contents"},[n("div",{staticClass:"\n                rounded-sm\n                relative\n                overflow-hidden\n                select-none\n                col-span-12\n              ",class:["lg:col-span-"+pattern],style:{height:t.isMobile?"auto":o+"px"}},[image.fullImageUrl?n("img",{staticClass:"h-full w-full object-cover image",attrs:{src:image.fullImageUrl,alt:t.titlePreview+" - image №"+(r+1),loading:"lazy"}}):t._e()])])})),0)],1)],1)])],1)}),[],!1,null,"123d5aac",null);e.default=component.exports;installComponents(component,{LayoutHeader:n(317).default})}}]);