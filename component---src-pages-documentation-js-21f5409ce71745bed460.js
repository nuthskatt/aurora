(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return p});n(132);var r=n(0),o=n.n(r),a=n(33),i=n.n(a),l=n(252),u=n.n(l),c=n(245),s=n(20),f=n.n(s);t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter(function(e){var t=e.node;return t.fields&&t.fields.slug.search("/documentation/")>=0}).map(function(e){var t=e.node;return{to:t.fields.slug,icon:t.frontmatter.icon,title:t.frontmatter.title,description:t.frontmatter.description||""}});return o.a.createElement(i.a,null,o.a.createElement(c.b,null,o.a.createElement("div",null,o.a.createElement("h1",null,"Documentation"),o.a.createElement("br",null))),o.a.createElement(c.b,null,o.a.createElement(u.a,{contents:t,renderContent:function(e,t){return o.a.createElement(f.a,{to:e},t)}})))};var p="3477581278"},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),a=n(238),i=n(133),l=n(89),u=n(43),c=n(87),s=u.classNamesFunction(),f=function(e){function t(t){var n=e.call(this,t)||this;return n.onImageLoadingStateChange=function(e){n.props.imageProps&&n.props.imageProps.onLoadingStateChange&&n.props.imageProps.onLoadingStateChange(e),e===l.ImageLoadState.error&&n.setState({imageLoadError:!0})},n.state={imageLoadError:!1},n}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.ariaLabel,n=e.className,l=e.styles,c=e.iconName,f=e.imageErrorAs,p="string"==typeof c&&0===c.length,d=this.props.iconType===a.IconType.image||this.props.iconType===a.IconType.Image,m=this._getIconContent(c),y=m.iconClassName,b=m.children,g=s(l,{className:n,iconClassName:y,isImage:d,isPlaceholder:p}),v=t?{"aria-label":t}:{role:"presentation","aria-hidden":!0},h=d?"div":"i",O=u.getNativeProps(this.props,u.htmlElementProperties),_=this.state.imageLoadError,P=r.__assign({},this.props.imageProps,{onLoadingStateChange:this.onImageLoadingStateChange}),j=_&&f||i.Image;return o.createElement(h,r.__assign({"data-icon-name":c},O,v,{className:g.root}),d?o.createElement(j,r.__assign({},P)):b)},t.prototype._getIconContent=function(e){var t=c.getIcon(e)||{subset:{className:void 0},code:void 0};return{children:t.code,iconClassName:t.subset.className}},t}(u.BaseComponent);t.IconBase=f},238:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.default=0]="default",e[e.image=1]="image",e[e.Default=1e5]="Default",e[e.Image=100001]="Image"}(t.IconType||(t.IconType={}))},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=(r=n(2))&&r.__esModule?r:{default:r},i=n(240);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.iconName,n=e.className,r=e.style,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["iconName","className","style"]);return o.createElement(i.Icon,u({},a,{iconName:t,className:n,style:r}))}}])&&c(n.prototype,r),a&&c(n,a),t}();t.default=m,d(m,"propTypes",{iconName:a.default.string,imageProps:a.default.object,className:a.default.string}),d(m,"defaultProps",{iconName:void 0,imageProps:void 0})},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(1).__exportStar(n(241),t)},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);r.__exportStar(n(242),t),r.__exportStar(n(237),t),r.__exportStar(n(238),t)},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),o=n(237),a=n(243);t.Icon=r.styled(o.IconBase,a.getStyles,void 0,{scope:"Icon"})},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStyles=function(e){var t=e.className,n=e.iconClassName,r=e.isPlaceholder,o=e.isImage,a=e.styles;return{root:[o&&"ms-Icon-imageContainer",r&&"ms-Icon-placeHolder",{display:"inline-block"},r&&{width:"1em"},o&&{overflow:"hidden"},n,t,a&&a.root,a&&a.imageContainer]}}},244:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},245:function(e,t,n){"use strict";n(32);var r=n(0),o=n.n(r),a=n(33),i=n.n(a),l={sm:10,smPush:1,md:10,mdPush:1,lg:10,lgPush:1,xl:3,xlPush:3,xxl:3,xxlPush:3},u=Object.assign({},l,{xl:6,xlPush:3,xxl:6,xxlPush:3}),c=function(e){var t=e.children;return o.a.createElement(i.a.Row,null,o.a.createElement(i.a.Col,u,t))},s=function(e){var t=e.children;return o.a.createElement(i.a.Row,null,o.a.Children.map(t,function(e){return!!e&&o.a.createElement(i.a.Col,l,e)}))};s.propTypes={children:function(e,t,n){if(2!==e[t].filter(function(e){return e}).length)return new Error(t+" must contain two elements")}},n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s})},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(253))&&r.__esModule?r:{default:r}},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),a=u(n(244)),i=n(254),l=u(n(239));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,y,b,g=function(e){var t=e.icon,n=e.title,o=e.description;return r.default.createElement("div",null,r.default.createElement(l.default,{iconName:t,style:{fontSize:"48px"}}),r.default.createElement("h2",null,n),r.default.createElement("p",null,o))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.default.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.contents,n=e.renderContent,o=e.className,l=(0,i.getClassNames)();return r.default.createElement("div",null,r.default.createElement("nav",{className:(0,a.default)(l.nav,o)},r.default.createElement("ul",null,t.map(function(e,t){var o=e.to,a=e.id,i=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["to","id"]);return r.default.createElement("li",{key:"".concat(o,"-").concat(t),id:a,className:l.content},n?n(o,r.default.createElement(g,i)):r.default.createElement("a",{href:o},r.default.createElement(g,i)))}))))}}])&&s(n.prototype,o),l&&s(n,l),t}();t.default=v,m=v,y="propTypes",b={renderContent:o.default.func,contents:o.default.arrayOf(o.default.shape({icon:o.default.string.isRequired,title:o.default.string.isRequired,description:o.default.string.isRequired,to:o.default.string.isRequired,id:o.default.string})).isRequired,className:o.default.string},y in m?Object.defineProperty(m,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):m[y]=b},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClassNames=void 0;var r=n(3),o=n(63);t.getClassNames=function(e){var t=(0,o.getTheme)().palette;return(0,r.mergeStyleSets)({content:{selectors:{"& i":{margin:"12px 0"},"& p":{margin:0},"& h2":{margin:0,marginBottom:"8px",color:t.skeColor.blue},"&:active, &:focus, &:hover":{selectors:{h2:{color:t.skeColor.darkBlue}}}}},nav:{selectors:{"& a":{border:"0"},"& ul":{display:"flex",flexWrap:"wrap",padding:0,justifyContent:"space-between"},"& ul li":{borderBottom:"3px solid ".concat(t.skeColor.blackAlt),textAlign:"center",position:"relative",textDecoration:"none",listStyle:"none",display:"flex",marginBottom:"32px",flexBasis:"46%"},"& ul li > a":{color:t.skeColor.blackAlt,textDecoration:"none",paddingBottom:"42px",paddingLeft:"16px",paddingRight:"16px",margin:"0 !important",width:"100%",transition:"all 0.2s ease"},"& ul li > a:active, & ul li > a:focus, & ul li > a:hover":{borderColor:t.skeColor.darkBlue,backgroundColor:t.skeColor.lightBlue,transition:"background-color 0.5s",outline:"0"},"@media (max-width: 1023px)":{selectors:{"ul li":{flexBasis:"100%"}}}}}})}}}]);
//# sourceMappingURL=component---src-pages-documentation-js-21f5409ce71745bed460.js.map