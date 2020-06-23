module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var a=f(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(c,t);var e,n,o,s=l(c);function c(t){var e,n,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),e=s.call(this,t),n=u(e),a=function(t,n){setTimeout((function(){var n=(new Date).getTime()-e.state.lastTime;t&&n>t&&e.props.hide&&e.props.open&&e.setState({classList:"fadeOutFast",hide:!1},(function(){setTimeout((function(){e.setState({open:!1}),e.props.onClose()}),600)}))}),t)},(o="autoHide")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,e.state={qbs:t.qbs,open:t.open,title:t.title,message:t.message,type:t.type,hide:t.hide,justTitle:t.justTitle,duration:t.duration,classList:"",lastTime:null,lastTimeClose:"",titleStyle:t.titleStyle,msgStyle:t.msgStyle,iconColor:t.iconColor,style:t.style,contentStyle:t.contentStyle,contentClass:t.contentClass},e}return e=c,o=[{key:"getDerivedStateFromProps",value:function(t,e){if(e.qbs!==t.qbs){if(t.open)return{qbs:t.qbs,open:!0,title:t.title,message:t.message,type:t.type,justTitle:!t.message,classList:"fadein ".concat(t.className?t.className:""),lastTime:(new Date).getTime(),hide:void 0===t.hide||t.hide,duration:t.duration?t.duration:4e3,titleStyle:t.titleStyle,msgStyle:t.msgStyle,iconColor:t.iconColor,style:t.style};if(!t.open)return{qbs:t.qbs,title:t.title,message:t.message,type:t.type,justTitle:!t.message,classList:"fadeout ".concat(t.className?t.className:""),lastTimeClose:(new Date).getTime(),hide:!1,titleStyle:t.titleStyle,msgStyle:t.msgStyle,iconColor:t.iconColor,style:t.style}}return{}}}],(n=[{key:"componentDidUpdate",value:function(t,e,n){var o=this;if(this.props.qbs!==t.qbs&&(this.props.open&&this.autoHide(this.state.duration),!this.props.open)){var a="error"===this.state.type?4500:1200;setTimeout((function(){(new Date).getTime()-o.state.lastTime>=a&&(o.setState({open:!1}),o.props.onClose())}),a)}}},{key:"render",value:function(){return this.state.open&&a.a.createElement("div",{id:"reactjs-snackbar",className:this.state.type},a.a.createElement("div",{className:"mainLoadingDiv "+this.state.classList,style:this.state.style},a.a.createElement("div",{className:"f-modal-alert"},"process"===this.state.type&&a.a.createElement("div",{className:"lds-ring"},a.a.createElement("div",{style:{borderColor:"".concat(this.state.iconColor," transparent transparent transparent")}}),a.a.createElement("div",{style:{borderColor:"".concat(this.state.iconColor," transparent transparent transparent")}}),a.a.createElement("div",{style:{borderColor:"".concat(this.state.iconColor," transparent transparent transparent")}}),a.a.createElement("div",{style:{borderColor:"".concat(this.state.iconColor," transparent transparent transparent")}})),"error"===this.state.type&&a.a.createElement("div",{className:"f-modal-icon f-modal-error animate"},a.a.createElement("span",{className:"f-modal-x-mark"},a.a.createElement("span",{className:"f-modal-line f-modal-left animateXLeft",style:this.state.iconColor?{backgroundColor:this.state.iconColor}:{}}),a.a.createElement("span",{className:"f-modal-line f-modal-right animateXRight",style:this.state.iconColor?{backgroundColor:this.state.iconColor}:{}})),a.a.createElement("div",{className:"f-modal-placeholder",style:this.state.iconColor?{borderColor:this.state.iconColor}:{}}),a.a.createElement("div",{className:"f-modal-fix"})),"success"===this.state.type&&a.a.createElement("div",{className:"f-modal-icon f-modal-success animate"},a.a.createElement("span",{className:"f-modal-line f-modal-tip animateSuccessTip",style:this.state.iconColor?{backgroundColor:this.state.iconColor}:{}}),a.a.createElement("span",{className:"f-modal-line f-modal-long animateSuccessLong",style:this.state.iconColor?{backgroundColor:this.state.iconColor}:{}}),a.a.createElement("div",{className:"f-modal-placeholder",style:this.state.iconColor?{borderColor:this.state.iconColor}:{}}),a.a.createElement("div",{className:"f-modal-fix"}))),this.state.justTitle?a.a.createElement("div",{className:"loadingDiv ".concat(this.state.contentClass?this.state.contentClass:""),style:this.state.contentStyle},a.a.createElement("h1",{className:"loadingText",style:this.state.titleStyle},this.state.title)):a.a.createElement("div",{className:"loadingDiv ".concat(this.state.contentClass?this.state.contentClass:""),style:this.state.contentStyle},a.a.createElement("p",{style:this.state.titleStyle},this.state.title),a.a.createElement("p",{style:this.state.msgStyle},this.state.message))))}}])&&r(e.prototype,n),o&&r(e,o),c}(o.Component);e.default=function(t){return a.a.createElement(m,t)}}]);