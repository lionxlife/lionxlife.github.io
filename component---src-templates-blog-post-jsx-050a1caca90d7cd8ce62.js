(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0aNc":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(){return r.a.createElement("section",{className:"section is-p0--top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-8 is-offset-2 m-writing override"},r.a.createElement("hr",{className:"default"}),"Thanks for reading! You can leave a comment below or check out"," ",r.a.createElement("a",{href:"/"},"other writings"),". Otherwise, see you again soon?"))))}},"222w":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("W1VP"),s=function(){var e=document.getElementById(i.a).getBoundingClientRect().top-75;window.scrollTo({top:e,behavior:"smooth"})};t.a=function(){return r.a.createElement("div",{className:"m-landing__next t-absolute t-pointer","data-target":"#anchor-content",id:"fn-next",onClick:s})}},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7N1U":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=(a("9eSz"),a("dmsj")),s=a("L12J"),o=a("aIq1"),l=a("ECUp"),c=a("0aNc");t.default=function(e){var t=e.data,a=e.pageContext,d=t.markdownRemark,u=d.frontmatter.title,f=(a.prev,a.next,Object(n.useRef)(null));return r.a.createElement(s.a,{pageContext:a,refs:{contentRef:f}},r.a.createElement(i.a,{title:u}),r.a.createElement(o.a,{postInfo:d.frontmatter}),r.a.createElement(l.a,{postContent:d.html,contentRef:f}),r.a.createElement(c.a,null))};var d="3571744651"},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),s=n(a("VbXa")),o=n(a("8OQS")),l=n(a("pVnL")),c=n(a("q1tI")),d=n(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function N(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+s+o+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(C,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return n.length>1?c.default.createElement("picture",null,r(n),o):o})),C=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:n,src:r},g,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&E&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,N=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,l.default)({opacity:x?1:0,transition:O?"opacity "+b+"ms":"none"},o),k="boolean"==typeof v?"lightgray":v,q={transitionDelay:b+"ms"},V=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},O&&q),o),f),W={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:y};if(p){var j=p,P=g(p);return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&q)}),P.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:j,generateSources:L}),P.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:j,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(C,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)((0,l.default)({alt:a,title:t,loading:w},P),{},{imageVariants:j}))}}))}if(h){var T=h,H=g(h),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete M.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},k&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},O&&q)}),H.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:W,imageVariants:T,generateSources:L}),H.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:W,imageVariants:T,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,S(T),c.default.createElement(C,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)((0,l.default)({alt:a,title:t,loading:w},H),{},{imageVariants:T}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});O.propTypes={resolutions:_,sizes:k,fixed:d.default.oneOfType([_,d.default.arrayOf(_)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var q=O;t.default=q},ECUp:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.postContent,a=e.contentRef;return r.a.createElement("section",{className:"section is-sml is-p0--bot",ref:a},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-8 is-offset-2 m-writing override",id:"anchor-content"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))))}},FSeU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t,a=e.postYear,n=e.wordCount;return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("span",null,"Year ",r.a.createElement("strong",null,a)),r.a.createElement("span",{className:"is-inline-block",style:{fontSize:"0.5em",margin:"0 0.5rem"}},r.a.createElement("i",{class:"far fa-clock"})),r.a.createElement("span",null,r.a.createElement("strong",null,(t=n,Math.round(t/265)))," min read"))}},K9SN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"m-landing__loading t-absolute t-align--mid-cen has-text-centered"},r.a.createElement("div",{className:"is-inline-block"},r.a.createElement("i",{className:"fas fa-circle-notch fa-spin fa-2x "})),r.a.createElement("div",null,"Loading"))}},SGlo:function(e,t,a){"use strict";var n=a("rj/q"),r=a("N+BI").getWeak,i=a("1a8y"),s=a("BjK0"),o=a("xa9o"),l=a("yde8"),c=a("Wadk"),d=a("qDzq"),u=a("O1i0"),f=c(5),m=c(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,i){var c=e((function(e,n){o(e,c,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=n&&l(n,a,e[i],e)}));return n(c.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(u(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var n=r(i(t),!0);return!0===n?p(e).set(t,a):n[e._i]=a,e},ufstore:p}},aIq1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("K9SN"),s=a("zvU9"),o=function(e){var t=e.postInfo,a=e.setCoverLoading;return l({setCoverLoading:a,postInfo:t}),r.a.createElement("div",{className:"m-landing__cover cu-lazy t-opacity-0"})},l=function(e){var t=e.setCoverLoading,a=e.postInfo;return Object(n.useEffect)((function(){return Object(s.a)({imageUrl:a.image.childImageSharp.resize.src,bgElement:document.querySelector(".cu-lazy"),bgPosition:"center center",setCoverLoading:t})}),[t,a])},c=a("FSeU"),d=function(e){var t=e.postInfo,a=void 0===t?{}:t,n=a.title,i=a.postYear,s=a.wordCount;return r.a.createElement("div",{className:"m-landing__heading t-absolute t-align--mid has-text-centered has-text-white"},r.a.createElement("h1",{className:"m-landing__h1 f-h1 cu-text-shadow"},n),r.a.createElement("div",{className:"has-text-white m-landing__stats f-h4 is-inline-block"},r.a.createElement(c.a,{postYear:i,wordCount:s})))},u=a("cDzU"),f=a("222w");t.a=function(e){var t=e.postInfo,a=Object(n.useState)(!0),s=(a[0],a[1]);return r.a.createElement("section",{className:"m-landing no-overflow t-relative"},r.a.createElement(i.a,null),r.a.createElement(o,{postInfo:t,setCoverLoading:s}),r.a.createElement(d,{postInfo:t}),r.a.createElement(u.a,null),r.a.createElement(f.a,null))}},cDzU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"section is-p0 m-landing__bot t-absolute"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column has-text-white"},r.a.createElement("i",{className:"fas fa-caret-down fa-3x"})))))}},eMsz:function(e,t,a){"use strict";var n,r=a("emib"),i=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),l=a("k5Iv"),c=a("SGlo"),d=a("BjK0"),u=a("O1i0"),f=a("O1i0"),m=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,p=Object.isExtensible,h=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=g(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},E=e.exports=a("94Pd")("WeakMap",v,b,c,!0,!0);f&&m&&(l((n=c.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,i(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,r){if(d(t)&&!p(t)){this._f||(this._f=new n);var i=this._f[e](t,r);return"set"==e?this:i}return a.call(this,t,r)}))})))},"t+fG":function(e,t,a){var n=a("P8UN"),r=a("96qb"),i=a("ap2Z"),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),r=a("Wadk")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(i)},zvU9:function(e,t,a){"use strict";t.a=function(e){var t=e.imageUrl,a=e.bgElement,n=e.bgPosition,r=e.setCoverLoading,i=document.createElement("img");return i.src=t,i.addEventListener("load",(function(e){a.style.backgroundImage="url("+t+")",a.style.backgroundPosition=n,r(!1),a.classList.remove("t-opacity-0"),i=null}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-050a1caca90d7cd8ce62.js.map