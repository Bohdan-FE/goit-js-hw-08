function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),m=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return f.Date.now()};function v(e,t,r){var n,a,o,i,u,c,l=0,f=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,o=a;return n=a=void 0,l=t,i=e.apply(o,r)}function S(e){return l=e,u=setTimeout(x,t),f?b(e):i}function O(e){var r=e-c;return void 0===c||r>=t||r<0||m&&e-l>=o}function x(){var e=g();if(O(e))return q(e);u=setTimeout(x,function(e){var r=t-(e-c);return m?d(r,o-(e-l)):r}(e))}function q(e){return u=void 0,v&&n?b(e):(n=a=void 0,i)}function j(){var e=g(),r=O(e);if(n=arguments,a=this,c=e,r){if(void 0===u)return S(c);if(m)return u=setTimeout(x,t),b(c)}return void 0===u&&(u=setTimeout(x,t)),i}return t=y(t)||0,p(r)&&(f=!!r.leading,o=(m="maxWait"in r)?s(y(r.maxWait)||0,t):o,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=c=a=u=void 0},j.flush=function(){return void 0===u?i:q(g())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=o.test(e);return r||i.test(e)?u(e.slice(2),r?2:8):a.test(e)?NaN:+e}t=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),v(e,t,{leading:n,maxWait:t,trailing:a})};const b=document.querySelector(".feedback-form"),S={email:"",message:""};localStorage.getItem("feedback-form-state")&&(S.email=JSON.parse(localStorage.getItem("feedback-form-state")).email,S.message=JSON.parse(localStorage.getItem("feedback-form-state")).message),b.addEventListener("input",e(t)((function(e){"email"===e.target.getAttribute("name")?S.email=e.target.value:"message"===e.target.getAttribute("name")&&(S.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),document.querySelector("input").value?document.querySelector("input").value="":document.querySelector("textarea").value&&(document.querySelector("textarea").value="");(document.querySelector("input").value||document.querySelector("textarea").value)&&(localStorage.removeItem("feedback-form-state"),document.querySelector("input").value="",document.querySelector("textarea").value="")})),JSON.parse(localStorage.getItem("feedback-form-state"))&&(document.querySelector("input").value=JSON.parse(localStorage.getItem("feedback-form-state")).email,document.querySelector("textarea").value=JSON.parse(localStorage.getItem("feedback-form-state")).message);
//# sourceMappingURL=03-feedback.03177b5e.js.map
