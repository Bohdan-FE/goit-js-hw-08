!function(){function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function y(e,t,r){var n,a,u,i,l,f,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var r=n,o=a;return n=a=void 0,c=t,i=e.apply(o,r)}function O(e){return c=e,l=setTimeout(q,t),d?y(e):i}function j(e){var r=e-f;return void 0===f||r>=t||r<0||m&&e-c>=u}function q(){var e=p();if(j(e))return x(e);l=setTimeout(q,function(e){var r=t-(e-f);return m?v(r,u-(e-c)):r}(e))}function x(e){return l=void 0,s&&n?y(e):(n=a=void 0,i)}function N(){var e=p(),r=j(e);if(n=arguments,a=this,f=e,r){if(void 0===l)return O(f);if(m)return l=setTimeout(q,t),y(f)}return void 0===l&&(l=setTimeout(q,t)),i}return t=S(t)||0,b(r)&&(d=!!r.leading,u=(m="maxWait"in r)?g(S(r.maxWait)||0,t):u,s="trailing"in r?!!r.trailing:s),N.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=f=a=l=void 0},N.flush=function(){return void 0===l?i:x(p())},N}function b(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=b(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=i.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(o);return b(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),y(e,t,{leading:n,maxWait:t,trailing:a})};var O=document.querySelector(".feedback-form"),j={email:"",message:""};localStorage.getItem("feedback-form-state")&&(j.email=JSON.parse(localStorage.getItem("feedback-form-state")).email,j.message=JSON.parse(localStorage.getItem("feedback-form-state")).message),O.addEventListener("input",e(t)((function(e){"email"===e.target.getAttribute("name")?j.email=e.target.value:"message"===e.target.getAttribute("name")&&(j.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),document.querySelector("input").value?document.querySelector("input").value="":document.querySelector("textarea").value&&(document.querySelector("textarea").value="");(document.querySelector("input").value||document.querySelector("textarea").value)&&(localStorage.removeItem("feedback-form-state"),document.querySelector("input").value="",document.querySelector("textarea").value="")})),JSON.parse(localStorage.getItem("feedback-form-state"))&&(document.querySelector("input").value=JSON.parse(localStorage.getItem("feedback-form-state")).email,document.querySelector("textarea").value=JSON.parse(localStorage.getItem("feedback-form-state")).message)}();
//# sourceMappingURL=03-feedback.d483038e.js.map
