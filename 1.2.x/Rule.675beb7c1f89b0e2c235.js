(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[35],{118:function(e,n,t){"use strict";var r=t(24),a=t(5),o=t(6),s=t(8),i=t(2),l=t(7),c=t(3),u=t(0),m=t.n(u),d=t(155),p=t(39),g=t(17);n.a=function(n){return function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={active:"",headings:[]},n.setHeading=n.setHeading.bind(Object(c.a)(Object(c.a)(n))),n.handleScroll=n.handleScroll.bind(Object(c.a)(Object(c.a)(n))),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(r.a)(this.state.headings),Object(r.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var t=document.documentElement.scrollTop,e=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var r=e[0].id;e.forEach(function(e){var n=document.querySelector("#".concat(e.id));n&&n.offsetTop<=t&&(r=e.id)}),this.$willUnmount||this.setState({active:r})}}},{key:"renderNav",value:function(){var r=this,e=this.state,a=e.active,n=e.headings;return m.a.createElement(d.a,{className:Object(g.f)("sticky"),top:50},m.a.createElement("div",{className:Object(g.f)("nav")},n.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:n,className:Object(g.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}}.bind(r,e.id)},t)})))}},{key:"render",value:function(){return m.a.createElement("div",{className:Object(g.f)("_")},m.a.createElement(n,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}(m.a.Component)}},122:function(e,n,t){"use strict";function r(e){return"string"!=typeof e&&console.error(new Error("str should be a string")),e&&e[0].toUpperCase()+e.slice(1)}function a(e,t){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,n){return"\\"===e.charAt(0)?e.slice(1):null===t[n]||void 0===t[n]?"":t[n]});if("function"!=typeof e)return"";var n=e(t);return n===t&&"object"==typeof n&&(n=Object.assign({},t)),n}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},124:function(e,n,t){"use strict";var p=t(0),g=t.n(p),s=t(21),r=t(24),a=t(5),o=t(6),i=t(8),l=t(2),c=t(7),u=t(3),m=t(157),d=t.n(m),f=t(35),h=t(17),b=t(25),v=t(158),y=t.n(v),x=(t(159),t(160),function(e){var n=e.language,t=void 0===n?"lang-jsx":n,r=e.onHighLight,a=e.value,o=Object(p.useRef)(null);return Object(p.useEffect)(function(){var e=o.current;y.a.highlightElement(e,!1,function(){r&&r(e.offsetHeight)})},[]),g.a.createElement("pre",{ref:o,className:t||"lang-jsx"},g.a.createElement("code",null,a))}),j=t(144),E=t(32),O=t(27),k=t(131),w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(k.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(k.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,r=n.placeholder;return e?t:g.a.createElement("span",{ref:this.placeholderRef},r)}}]),t}(O.b),R=t(46),q=t(39),T=g.a.createElement("div",{className:Object(h.a)("placeholder")},g.a.createElement(E.a,null)),H=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).setCodeBlockHeight=function(e){n.codeHeight=e},n.bindCodeBlock=function(e){n.codeblock=e},n.state={showcode:!1},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"collapse",value:function(e,n,t){var r=this;this.codeblock.style.height="".concat(e*(n-1),"px"),1<n&&setTimeout(function(){r.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(n){var t=this,r=!this.state.showcode;this.setState({showcode:r},function(){if(r)t.codeblock.style.height="".concat(t.codeHeight,"px");else{var e=t.codeHeight%15;0<e&&t.collapse(e,1,n),t.collapse((t.codeHeight-e)/15,15,n)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return g.a.createElement("a",{href:"javascript:;",className:Object(h.a)("toggle"),onClick:this.toggleCode.bind(this,e)},g.a.createElement(R.a,{name:n?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,n=e.component,t=e.id,r=e.name,a=e.rawText,o=this.state.showcode,s=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),i=q.a.location.search,l="?example=";if(0===i.indexOf(l)&&(i=i.replace(l,""),r.indexOf(i)<0))return null;var c=this.props.title.split("\n"),u=Object(j.a)(c),m=u[0],d=u.slice(1);return m&&(m=m.trim()),g.a.createElement(p.Fragment,null,m&&g.a.createElement("h3",{key:"0",id:t},m),g.a.createElement(w,{placeholder:T},g.a.createElement("div",{className:Object(h.a)("_",o&&"showcode")},g.a.createElement("div",{className:Object(h.a)("body")},Object(p.createElement)(n)),0<this.props.title.length&&g.a.createElement("div",{className:Object(h.a)("desc")},d.map(function(e,n){return g.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),g.a.createElement("div",{ref:this.bindCodeBlock,className:Object(h.a)("code")},g.a.createElement(x,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:s}),this.renderCodeHandle(!0)))))}}]),t}(p.Component);H.defaultProps={rawText:""};var S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggle=function(){n.setState({expanded:!n.state.expanded})},n.state={expanded:!1},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children,n=this.state.expanded,t=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),r=n?"pre":"div";return g.a.createElement("div",{onClick:this.toggle,className:Object(h.e)("console")},g.a.createElement(r,null,t))}}]),t}(p.PureComponent);S.defaultProps={children:[]};var C=S,P=/^<code name="([\w|-]+)" /,N=/^<example name="([\w|-]+)"/,D=function(e){function n(e){var s;return Object(a.a)(this,n),(s=Object(i.a)(this,Object(l.a)(n).call(this,e))).renderHeading=function(e){var n=e.level,t=e.children,r="".concat(n,"-").concat(t[0]),a="h".concat(n);if("object"==typeof t[0])return g.a.createElement(a,null,t);if(!s.cache[r]){var o="heading-".concat(Object(f.b)());2!==n&&3!==n||s.appendHeading({id:o,level:n,children:t}),s.cache[r]=g.a.createElement(a,{id:o},t)}return s.cache[r]},s.headings=[],s.appendHeading=s.appendHeading.bind(Object(u.a)(Object(u.a)(s))),s.cache={},s}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?[g.a.createElement(x,{key:"cb",value:n.text})].concat(Object(r.a)(n.log.map(function(e,n){return g.a.createElement(C,{key:n},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var o=this;if(this.cache.examples)return this.cache.examples;var e=this.props.examples;if(!e)return g.a.createElement("div",null);var n=Object(b.a)("示例","Example"),t="heading-".concat(Object(f.b)());return this.appendHeading({id:t,level:2,children:[n]}),this.cache.examples=[g.a.createElement("h2",{key:"h",id:t},n)].concat(Object(r.a)(e.map(function(e,n){if(/\d+-/.test(e.name)){var t="heading-".concat(e.name),r=e.title.split("\n"),a=Object(s.a)(r,1)[0];return o.appendHeading({id:t,level:3,children:[a]}),g.a.createElement(H,Object.assign({key:n,id:t},e,{lazy:2<n}))}}))),this.cache.examples}},{key:"renderExample",value:function(n){var e="example-".concat(n);if(!this.cache[e]){var t=(this.props.examples||[]).find(function(e){return e.name===n});this.cache[e]=t?g.a.createElement(H,t):null}return this.cache[e]}},{key:"render",value:function(){var a=this,e=this.props.source;return this.headings=[],g.a.createElement(d.a,{className:Object(h.e)("_"),source:e,renderers:{code:x,heading:this.renderHeading,html:function(e){var n=e.value;if("<example />"===n)return a.renderExamples();var t=n.match(N);if(t)return a.renderExample(t[1],0<=n.indexOf("noExpand"));if("<br>"===n||"<br />"===n)return g.a.createElement("br",null);var r=n.match(P);return r?a.renderCode(r[1]):null},link:function(e){var n=e.href,t=e.children,r=n.indexOf(!1)?"_blank":void 0;return g.a.createElement("a",{href:n,target:r},t)}}})}}]),n}(p.PureComponent);D.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var I=t(45),L=t(118);t.d(n,"a",function(){return $});var B,F=((B=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={source:n.props.source},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var n=this;this.props.loader&&this.props.loader().then(function(e){n.setState({source:e.default})})}},{key:"render",value:function(){var e=this.state.source;return e?g.a.createElement(D,Object.assign({},this.props,{source:e})):g.a.createElement(I.a,{style:{minHeight:200}})}}]),t}(p.PureComponent)).defaultProps={loader:void 0,source:void 0},B);n.b=F;function $(n){return Object(L.a)(function(e){return g.a.createElement(F,Object.assign({},e,{loader:n}))})}},131:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u});var r=t(142),a=t(35),o={},s=null,i=!1,l=window.innerHeight||document.documentElement.clientHeight;function c(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>l){var t=Object(a.b)();return o[t]=e,t}return e.render(),null}function u(e){e&&delete o[e]}document.addEventListener("scroll",function(){s&&clearTimeout(s),s=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var n=o[e],t=n.element,r=n.render,a=t.getBoundingClientRect();a.bottom<0||a.top>l||(delete o[e],r())}),i=!1),s=null},80)},r.a)},156:function(e,n,t){"use strict";var s=t(31),i=t(4),r=t(122),l=t(97),c={skipUndefined:!0},u=function(e){var n="array"===e.type?"array":"string";return Object(r.b)(Object(l.a)("rules.required.".concat(n)),e)},a=t(28),o=function(t){return function(e){var n="";switch(e.type){case"integer":case"number":n="number";break;case"array":n="array";break;default:n="string"}return Object(r.b)(Object(l.a)("rules.length.".concat(t,".").concat(n)),e)}},m={skipUndefined:!0},d={max:o("max"),min:o("min")},p=function(t){var r=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).message;return function(e,n){return"number"!=typeof e?(console.error(new Error('Rule "'.concat(t,'" param expect a number, get ').concat(typeof e))),null):Object(s.b)({message:d[t]},Object(s.b)(Object(a.a)({message:r},t,e),{message:n},m),m)}},g=function(e){var n=e.title?"rules.type":"rules.reg";return Object(r.b)(Object(l.a)(n),e)},f={skipUndefined:!0},h=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.message,r=e.tip;return function(e){return Object(s.b)({type:n,message:g},Object(s.b)({message:t,tip:r},{message:e},f),f)}},b={skipUndefined:!0};t.d(n,"a",function(){return v});var v="RULE_OBJECT",y=["email","integer","number","url","json","hex","rgb","ipv4"];n.b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=function e(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!Object(i.h)(n))return console.error(new Error("rules expect an object, got ".concat(typeof options))),{};for(var t=arguments.length,r=new Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];if(0===r.length)return n;var o=r.shift();return Object.keys(o).forEach(function(e){"function"==typeof o[e]&&(o[e]={func:o[e]})}),e.apply(void 0,[Object(s.b)(n,o)].concat(r))}.apply(void 0,[{}].concat(n)),a={required:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=e.message,t=e.tip;return function(e){return Object(s.b)({required:!0,message:u},Object(s.b)({message:n,tip:t},{message:e},c),c)}}(r.required),max:p("max",r.max),min:p("min",r.min),regExp:function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).message;return function(e,n){return"string"==typeof e||e instanceof RegExp?Object(s.b)({message:Object(l.a)("rules.reg")},Object(s.b)({message:t,regExp:e},{message:n},b),b):(console.error(new Error('Rule "reg" param expect a RegExp object or a string, get '.concat(typeof e))),null)}}(r.regExp),type:function(e){return h(e,r.type)},length:function(e,n,t){return[a.min(e,t),a.max(n,t)]},range:function(e,n,t){return[a.min(e,t),a.max(n,t)]}};y.forEach(function(e){a[e]=h(e,r[e]||r.type)});var o=Object.keys(a);return Object.keys(r).forEach(function(n){o.includes(n)||(Object(i.h)(r[n])?a[n]=function(e){return Object.assign({},r[n],{args:e})}:console.error(new Error("Rule ".concat(n," is invalid, expect a function or an object."))))}),Object(s.f)(a).forEach(function(e){e.isInnerValidator=!0}),a.$$type=v,a}},197:function(e,n,t){"use strict";var r=t(5),a=t(6),o=window.console,s=function(){function e(){Object(r.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(a.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.map(function(e){return"".concat((n=e,JSON.stringify(n,function(e,n){return"function"==typeof n?"fn#fn".concat(n.toString(),"fn#fn"):n},2)));var n});this.current.push(r)}}]),e}();n.a={start:function(){window.console=new s},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=o,e}}},815:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(118),s=t(124),i=t(197),l=t(25),c=t(816),u=t.n(c),m=t(817),d=t.n(m),p=Object(l.a)(u.a,d.a),g=[{name:"locale",title:Object(l.a)("",""),component:t(818).default,rawText:t(819)}];i.a.start(),i.a.setType("custom"),t(820),i.a.setType("max"),t(821),i.a.setType("min"),t(822),i.a.setType("range"),t(823),i.a.setType("regExp"),t(824),i.a.setType("required"),t(825),i.a.setType("type"),t(826);var f=i.a.end(),h={custom:{text:t(827),log:f.custom},max:{text:t(828),log:f.max},min:{text:t(829),log:f.min},range:{text:t(830),log:f.range},regExp:{text:t(831),log:f.regExp},required:{text:t(832),log:f.required},type:{text:t(833),log:f.type}};n.default=Object(o.a)(function(e){return a.a.createElement(s.b,Object.assign({},e,{codes:h,source:p,examples:g}))})},816:function(e,n){e.exports="# Rule 表单校验规则\n\n<br />\n\n<br />\n\nShineout Form 内部定义了一套数据校验机制，在 Form 内的组件上通过 rules 属性进行配置。\n\n```\n<Input rules={[...rule]}>\n```\n\nrules 是一个数组，每一条包含一个以下格式的配置。\n\n## 规则\n\nrule 共有 5 种格式，按优先级分别为：\n\n- 函数：完全由调用者控制，理论上可以做所有校验。\n  ```\n  /**\n   value - 当前组件值\n   formdata - 表单内所有组件值 \n   callback - 结果回调\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // 或者返回 Promise，不需要处理 callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n- 必填：根据 required 属性是否为 true 判断，非必填时不需填 false。\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- 长度：根据 min 或者 max 属性判断。\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- 正则表达式：根据 regExp 来判断，可以是 RegExp 对象或 字符串。\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- 类型：内置了一些常用的正则判断，不满足需求时，可以自定义正则表达式或使用 函数校验。\n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n| 属性 | 类型 | 说明 |\n| --- | --- | --- | --- |\n| required | bool | 是否必填 |\n| min | number | 最小值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| max | number | 最大值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| regExp | string \\| RegExp | 正则表达式 |\n| type | string | 类型校验，可选值为 \\[ 'email', 'json', 'url', 'hex', 'number' ]，不支持的可以自定义 regExp 校验 |\n| message | string | 错误消息。可以使用 '{key}' 符号进行格式化。key 为当前rule的属性。如 {min: 20, message: '最小值为 {min}'}，会格式化为 '最小值为 20'。 |\n\n## Rule\n\n规则的编写比较繁琐，为了简化用户使用，定义了一个Rule函数，生成一个辅助对象，并内置了一些校验规则，供快速开发。\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 初始化\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### 参数\n\nargs 为自定义规则，可为空。\n每个参数为一个对象，key 为返回的 函数名称。每个 value 有两个参数，func 和 message。\n\n#### - func *function(value, formData, callback, props)*\n校验函数\n```\nvalue: 当前 Field 值。\nformData: 当前表单全部数据。\ncallback: 回调函数，func 返回 Promise 时可不调用，否则必须执行。\nprops: 当前 Field 的 props，用来格式化 message。\n```\n\n例：\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\n内置的规则会生成默认校验失败提示文案，如果需要覆盖默认文案，可以在初始化参数中覆盖。\n```\nmessage 为 string 时，返回 message。\nmessage 为 函数时，返回 message(props)，props 为当前 Field props。\n```\n\n例：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\n如果传入多个 args 时，会合并处理\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\n相当于\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n通过这种方式可以把自定义的校验规则和语言包分别引入。\n\n### 返回值\n返回对象包含一组函数生成校验规则。每个函数会根据参数生成一条新的规则。\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// 如果函数没有参数，可以只写函数名称\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 自定义校验\n<code name=\"custom\" />\n\n\n## 内置校验\n\n### required *function(message)*\n必填校验\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\n最小值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\n最大值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最大值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\n数值范围校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### max|integer: 必填，最大值\n#### min|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\n#### message|string: 可选\n#### 返回值：object\n内置了常用的类型校验，type可选值为 \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\n正则表达式校验\n#### reg|RegExp|string: 必填\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"regExp\" />\n\n## 内置文案\n\n当前语言内置校验文案如下，可以通过 setLocale 函数替换\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},817:function(e,n){e.exports="# Rule\n\n<br />\n\n<br />\n\nThe Form implements a set of data validation. That is configured through the rules property on the input component like 'Input, Select, Checkbox, ...'\n\n\n```\n<Input rules={[...rule]}>\n```\n\nrules is an array, each containing a rule with the following format.\n\n- Function:Completely controlled by the caller. you can theoretically do all the checking.\n  ```\n  /**\n   value - Current component value\n   formdata - All values in the form \n   callback - The result of verification\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // return a Promise，do not call callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n\n- Required:Determine whether the required attribute is true or not. false is not required when it is not required.\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- Length:Judge by the min or max property.\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- RegExp: Judge by the RegExp. It can be a RegExp object or a string.\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- Type: Some common type validation are built in. \n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n\n| Property | Type | Description |\n| --- | --- | --- | --- |\n| required | bool | whether to be required |\n| min | number | The minimum value. When type is 'number', validate the value. Otherwise, validate the value.length.  |\n| max | number | The maximum value. When type is 'number', validate the value. Otherwise, validate the value.length. |\n| regExp | string \\| RegExp | regular expression |\n| type | string | options: \\[ 'email', 'json', 'url', 'hex', 'number' ]. You can customize the regExp validation if it does not support it. |\n| message | string | The error message. You can use the '{key}' symbol to format. Key is a property of the current rule, such as {min: 20, message: 'minimum value is {min}'}, which is formatted as 'minimum value is 20'. |\n\n\n## Rule\n\nRule is a function return an object contains a set of validate function.\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Constructor\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### Arguments\n\nThe args is optional.\nEach argument is an object, key is the validate function name. Each value has 2 properties, 'func' and 'message'.\n\n#### - func *function(value, formData, callback, props)*\nvalidate function\n```\nvalue: current field's value.\nformData: all form data.\ncallback: the callback function.\nprops: the props of current field.\n```\n\nexample:\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\nBuilt-in rules use default error text, if you want change the default text, set message to overwrite.\n```\nif message type is string, return message.\nif message type is function，retrun message(props)，props is field's props.\n```\n\nexample：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\nMultiple arguments will be merged\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\nequivalent of\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n### Return\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// if the function has no argument, you can use it with out parentheses.\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Custom Validator\n<code name=\"custom\" />\n\n\n## Built-in Validator\n\n### required *function(message)*\n#### message|string: optional\n#### return: object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\nMinimum check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### retrun: object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\nMax check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### return: object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\nRange check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### min|integer: required\n#### max|integer: required\n#### message|string: optional\n#### return: array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\nType check, one of \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n#### message|string: optional\n#### return: object\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\nRegular expression check\n#### reg|RegExp|string: required\n#### message|string: optional\n#### return: object\n\n<code name=\"regExp\" />\n\n## Built-in Text\n\nThe current built-in validation text as follows, which can be replaced by the setLocale function\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},818:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(97);n.default=function(){return a.a.createElement("pre",null,JSON.stringify(Object(o.a)("rules"),null,2))}},819:function(e,n){e.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function() {\n  return <pre>{JSON.stringify(getLocale('rules'), null, 2)}</pre>\n}\n"},820:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)({isExisted:{func:function(e,n,t,r){n.list.includes(e)?t(new Error(r.message.replace("{title}",r.title))):t(!0)},message:"{title} is existed."}});console.log(a.isExisted())},821:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)();console.log(a.max(100)),console.log(a.max(100,"Nubmer must less than 100."))},822:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)();console.log(a.min(1)),console.log(a.min(1,"At least select one option."))},823:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)();console.log(a.range(1,100)),console.log(a.range(1,100,"Nubmer must between 1 - 100."))},824:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)();console.log(a.regExp("^[\\d\\s ().-]+$")),console.log(a.regExp("^[\\d\\s ().-]+$","Please enter a valid tel."))},825:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)();console.log(a.required("something wrong."));var o=Object(r.b)({required:{message:"init message."}});console.log(o.required())},826:function(e,n,t){"use strict";t.r(n);var r=t(156),a=Object(r.b)();console.log(a.email()),console.log(a.email("Email is invalid.")),console.log(a.integer("Please enter a valid age.")),console.log(a.number("Please enter a valid price.")),console.log(a.url("The url is not valid.")),console.log(a.hex("The color is not valid."))},827:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule({\n  isExisted: {\n    func: (value, formData, callback, props) => {\n      if (formData.list.includes(value)) {\n        callback(new Error(props.message.replace('{title}', props.title)))\n      } else {\n        callback(true)\n      }\n    },\n    message: '{title} is existed.',\n  },\n})\nconsole.log(rule.isExisted())\n"},828:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.max(100))\nconsole.log(rule.max(100, 'Nubmer must less than 100.'))\n"},829:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.min(1))\nconsole.log(rule.min(1, 'At least select one option.'))\n"},830:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.range(1, 100))\nconsole.log(rule.range(1, 100, 'Nubmer must between 1 - 100.'))\n"},831:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$'))\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$', 'Please enter a valid tel.'))\n"},832:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.required('something wrong.'))\n\nconst rule2 = Rule({\n  required: {\n    message: 'init message.',\n  },\n})\nconsole.log(rule2.required())\n"},833:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.email())\nconsole.log(rule.email('Email is invalid.'))\nconsole.log(rule.integer('Please enter a valid age.'))\nconsole.log(rule.number('Please enter a valid price.'))\nconsole.log(rule.url('The url is not valid.'))\nconsole.log(rule.hex('The color is not valid.'))\n"}}]);