(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[630],{35:function(t,e,n){var r=9007199254740991,o="[object Arguments]",u="[object Map]",i="[object Promise]",a="[object Set]",c="[object WeakMap]",s="[object DataView]",f=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,p="\\u0300-\\u036f\\ufe20-\\ufe23",h="[\\ud800-\\udfff]",v="["+p+"\\u20d0-\\u20f0]",y="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+v+"|"+y+")"+"?",j="[\\ufe0e\\ufe0f]?",_=j+m+("(?:\\u200d(?:"+[d,g,b].join("|")+")"+j+m+")*"),O="(?:"+[d+v+"?",v,g,b,h].join("|")+")",w=RegExp(y+"(?="+y+")|"+O+_,"g"),k=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),P="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,S="object"==typeof self&&self&&self.Object===Object&&self,M=P||S||Function("return this")();function E(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}function x(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function I(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function T(t){return function(t){return k.test(t)}(t)?function(t){return t.match(w)||[]}(t):function(t){return t.split("")}(t)}var A,D,$,C=Function.prototype,F=Object.prototype,z=M["__core-js_shared__"],L=(A=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",R=C.toString,W=F.hasOwnProperty,V=F.toString,B=RegExp("^"+R.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=M.Symbol,N=G?G.iterator:void 0,U=F.propertyIsEnumerable,q=(D=Object.keys,$=Object,function(t){return D($(t))}),H=it(M,"DataView"),J=it(M,"Map"),K=it(M,"Promise"),Q=it(M,"Set"),X=it(M,"WeakMap"),Y=st(H),Z=st(J),tt=st(K),et=st(Q),nt=st(X);function rt(t,e){var n=ft(t)||function(t){return function(t){return vt(t)&&lt(t)}(t)&&W.call(t,"callee")&&(!U.call(t,"callee")||V.call(t)==o)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,u=!!r;for(var i in t)!e&&!W.call(t,i)||u&&("length"==i||ct(i,r))||n.push(i);return n}function ot(t){if(!ht(t)||function(t){return!!L&&L in t}(t))return!1;var e=pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?B:f;return e.test(st(t))}function ut(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||F,e!==r)return q(t);var e,n,r,o=[];for(var u in Object(t))W.call(t,u)&&"constructor"!=u&&o.push(u);return o}function it(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ot(n)?n:void 0}var at=function(t){return V.call(t)};function ct(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function st(t){if(null!=t){try{return R.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(H&&at(new H(new ArrayBuffer(1)))!=s||J&&at(new J)!=u||K&&at(K.resolve())!=i||Q&&at(new Q)!=a||X&&at(new X)!=c)&&(at=function(t){var e=V.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?st(n):void 0;if(r)switch(r){case Y:return s;case Z:return u;case tt:return i;case et:return a;case nt:return c}return e});var ft=Array.isArray;function lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!pt(t)}function pt(t){var e=ht(t)?V.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function vt(t){return!!t&&"object"==typeof t}function yt(t){return t?E(t,function(t){return lt(t)?rt(t):ut(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(lt(t))return function(t){return"string"==typeof t||!ft(t)&&vt(t)&&"[object String]"==V.call(t)}(t)?T(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(N&&t[N])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[N]());var e=at(t);return(e==u?x:e==a?I:yt)(t)}},8746:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var u=n(7294),i=n(35),a=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,n){for(var r=!0;r;){var o=t,u=e,i=n;r=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var c=a.get;if(void 0===c)return;return c.call(i)}var s=Object.getPrototypeOf(o);if(null===s)return;t=s,e=u,n=i,r=!0,a=s=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var n=this.props,r=n.items,o=n.random;this.state={index:o?Math.floor(Math.random()*Math.floor(r.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map((function(t){return clearTimeout(t)}))}},{key:"_loop",value:function(t,e){var n=setTimeout(t,e);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(t,e){var n=this.state.output,r=this.props.typingInterval,o=this._type.bind(this,t,e),u=i(t);this.setState({output:u.slice(0,i(n).length+1).join("")}),n.length<u.length?this._loop(o,r):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),e())}},{key:"_erase",value:function(t){var e=this.state.output,n=this.props.deletingInterval,r=this._erase.bind(this,t),o=i(e);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:o.slice(0,o.length-1).join("")}),0!==o.length?this._loop(r,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),t())}},{key:"_overwrite",value:function(t,e){var n=this.state,r=n.output,o=n.substrLength,u=this.props.deletingInterval,a=this._overwrite.bind(this,t,e),c=i(t),s=i(r);this.setState({output:c.slice(0,o).concat(s.slice(o)),substrLength:o+1}),c.length!==o?this._loop(a,u):(this.setState({output:t,substrLength:0}),e())}},{key:"_animate",value:function(){var t=this,e=this.state.index,n=this.props,r=n.items,o=n.pause,u=n.emptyPause,i=n.eraseMode,a=n.random,c=this._type,s=this._erase,f=this._overwrite,l=this._animate.bind(this),p=void 0;p=a?Math.floor(Math.random()*Math.floor(r.length)):e===r.length-1?0:e+1;var h=function(){t.setState({index:p}),t._loop(l,u)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),c.bind(this)(r[e],(function(){"overwrite"===i?t._loop(f.bind(t,r[p],h),o):t._loop(s.bind(t,h),o)}))}},{key:"render",value:function(){var t=this.props,e=t.color,n=t.cursor,o=(t.deletingInterval,t.emptyPause,t.items,t.pause,t.eraseMode,t.typingInterval,t.random,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return u.createElement("span",r({style:{color:e}},o),this.state.output,n?u.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),e}(u.Component);a.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=a,t.exports=e.default},8256:function(t,e,n){"use strict";n(7294),n(8746),n(5285),n(2778)},5285:function(t,e,n){"use strict";n(7294)},2778:function(t,e,n){"use strict";n(7294),n(748)}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-d37379b92f007f0838b4.js.map