(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(t,e,n){"use strict";n(22),n(31),n(52),n(51),n(63);var r=function(a){return Array.isArray(a)},o=function(t){return t===Object(t)&&!r(t)&&"function"!=typeof t},l=function(s){return s.replace(/([-_][a-z])/gi,(function(t){return t.toUpperCase().replace("-","").replace("_","")}))};e.a=function t(e){if(o(e)){var n={};return Object.keys(e).forEach((function(r){n[l(r)]=t(e[r])})),n}return r(e)?e.map((function(i){return t(i)})):e}},327:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("59e65080",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n(327)},344:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".summary[data-v-6b528bc2]{color:var(--title-color);background-color:var(--color)}",""]),r.locals={},t.exports=r},396:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(32),n(312)),l={scrollToTop:!0,fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("setIsDataToShowLoading",!0),e.t0=o.a,e.next=5,t.$axios.$get("v2/pages/10028");case 5:e.t1=e.sent,n=(0,e.t0)(e.t1),t.$store.commit("setHeadData",null==n?void 0:n.yoastHeadJson),t.$store.commit("setDataToShow",n),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(0);case 13:return e.prev=13,t.$store.commit("setIsDataToShowLoading",!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})))()}},c=(n(343),n(8)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutParallaxHeader",{attrs:{id:"header","active-slides-idx":[[4,5],[3]],"active-slides-classes":["img-appointment","img-appointment--light"],"slides-src":"https://hound-studio.com/wp-content/uploads/2022/06/HS-appointment-parallax-","slides-length":7}}),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col",attrs:{id:"main"}},[n("div",{staticClass:"summary w-full flex pb-10"},[n("div",{staticClass:"m-auto text-justify"},[n("div",{staticClass:"\n            uppercase\n            md:text-6xl\n            text-3xl text-left\n            font-black\n            text-white\n            mt-10\n            lg:px-12\n            px-3\n          "},[t._v("\n          Appointment\n        ")]),t._v(" "),n("p",{staticClass:"\n            max-w-screen-lg\n            tracking-wide\n            break-words\n            mt-7\n            text-lg\n            md:text-xl\n            leading-loose\n            lg:px-12\n            px-3\n          "},[t._v("\n          Book a call to find out more about our animation video creation\n          process. Let’s discuss the details of your project, your\n          requirements and the animation options that suit you best! We’ll be\n          happy to bring your idea to life! 🙂\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col max-w-screen-2xl mx-auto"},[e("div",{staticClass:"m-auto w-full h-660 lg:px-12 px-3 mt-10"},[e("iframe",{staticClass:"w-full min-h-660 h-660 max-h-full rounded",attrs:{id:"calendly-iframe",src:"https://app.harmonizely.com/meet-us"}})])])}],!1,null,"6b528bc2",null);e.default=component.exports;installComponents(component,{LayoutParallaxHeader:n(206).default})}}]);