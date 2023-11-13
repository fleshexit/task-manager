(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"\n:root {\n    --background-color: #f1efed;\n    --text-color: #000;\n  \n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Neue Montreal', sans-serif;\n    background-color: var(--background-color);\n    color: var(--text-color);\n}\n\n.header,\n.footer {\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    font-weight: 400;\n}\n\n.header {\n    justify-content: space-between;\n    font-size: 1.25rem;\n    border-bottom: 1px solid #000;\n}\n\n.footer {\n    justify-content: center;\n    font-size: 1rem;\n    border-top: 1px solid #000;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.main {\n    flex: 1;\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n.sidebar {\n    border-right: 1px solid #000;\n    display: flex;\n    flex-direction: column;\n}\n\n.modal {\n    position: absolute;\n    width: 20rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 0.5rem;\n    border-color: var(--text-color);\n}\n\n.modal::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){const e=document.getElementById("content"),t=document.createElement("header");t.classList.add("header"),e.appendChild(t);const n=document.createElement("div");n.textContent="Todo List",t.appendChild(n);const o=document.createElement("button");o.classList.add("button"),o.id="add-button",o.textContent="Add +",t.appendChild(o);const r=document.createElement("main");r.classList.add("main"),e.appendChild(r);const a=document.createElement("div");a.classList.add("sidebar"),r.appendChild(a);const c=document.createElement("button");c.classList.add("tab"),c.id="inbox",c.textContent="Inbox",a.appendChild(c);const i=document.createElement("button");i.classList.add("tab"),i.id="today",i.textContent="Today",a.appendChild(i);const d=document.createElement("button");d.classList.add("tab"),d.id="upcoming",d.textContent="Upcoming",a.appendChild(d);const s=document.createElement("div");s.classList.add("main-content-container"),r.appendChild(s);const l=document.createElement("div");l.classList.add("main-content-header"),s.appendChild(l);const u=document.createElement("div");u.classList.add("main-content"),s.appendChild(u);const p=document.createElement("footer");p.classList.add("footer"),p.textContent="chrlie-w",e.appendChild(p);const m=document.createElement("dialog");m.classList.add("modal"),m.innerHTML='\n    <div class="modal-content">\n    <h2>Add New Task</h2>\n        <form class="modal-form" action="#" method="dialog">\n            <label for="title">Title</label>\n            <input type="text" name="title" id="title" placeholder="Title" maxlength="50" required>\n            <label for="description">Description</label>\n            <input type="text" name="description" id="description" placeholder="Description" maxlength="250" required>\n            <input id="submit" type="submit" value="Submit">\n        </form>\n    </div>\n    ',e.appendChild(m)}var t=n(379),o=n.n(t),r=n(795),a=n.n(r),c=n(569),i=n.n(c),d=n(565),s=n.n(d),l=n(216),u=n.n(l),p=n(589),m=n.n(p),f=n(426),h={};function v(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}function b(){v(),e(),function(){const e=document.querySelector(".main-content-header");document.querySelector(".main-content"),e.textContent="Inbox"}()}h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,e(),b(),document.addEventListener("click",(t=>{const n=t.target.innerText;"Inbox"===n&&b(),"Today"===n&&(v(),e(),function(){const e=document.querySelector(".main-content-header");document.querySelector(".main-content"),e.textContent="Today"}())}));const y=[],x=document.querySelector("#add-button"),g=document.querySelector(".modal");function C(e,t){this.title=e,this.description=t}function E(){const e=document.querySelector(".main-content");e.innerHTML="",y.forEach((t=>{const n=document.createElement("div");n.classList.add("task-card");const o=document.createElement("h3");o.textContent=t.title;const r=document.createElement("p");r.textContent=t.description;const a=document.createElement("button");a.classList.add("remove"),a.textContent="Remove",a.addEventListener("click",(()=>{y.splice(y.indexOf(t),1),E()})),n.appendChild(o),n.appendChild(r),n.appendChild(a),e.appendChild(n)}))}x.addEventListener("click",(()=>{g.showModal()})),document.querySelector(".modal-form").addEventListener("submit",(e=>{var t;e.preventDefault(),t=new C(document.querySelector("#title").value,document.querySelector("#description").value),y.push(t),E(),g.close()}))})()})();