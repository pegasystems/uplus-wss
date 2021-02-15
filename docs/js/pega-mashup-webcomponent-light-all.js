!function(){"use strict";
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,a=null)=>{for(;e!==a;){const a=e.nextSibling;t.removeChild(e),e=a}},a=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${a}--\x3e`,i=new RegExp(`${a}|${s}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],c=document.createTreeWalker(e.content,133,null,!1);let d=0,u=-1,p=0;const{strings:g,values:{length:m}}=t;for(;p<m;){const t=c.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:a}=e;let s=0;for(let t=0;t<a;t++)o(e[t].name,n)&&s++;for(;s-- >0;){const e=g[p],a=h.exec(e)[2],s=a.toLowerCase()+n,r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(i);this.parts.push({type:"attribute",index:u,name:a,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const a=t.parentNode,r=e.split(i),c=r.length-1;for(let e=0;e<c;e++){let s,i=r[e];if(""===i)s=l();else{const t=h.exec(i);null!==t&&o(t[2],n)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),s=document.createTextNode(i)}a.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===r[c]?(a.insertBefore(l(),t),s.push(t)):t.data=r[c],p+=c}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==d||(u++,e.insertBefore(l(),t)),d=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else c.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const o=(t,e)=>{const a=t.length-e.length;return a>=0&&t.slice(a)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:a},parts:s}=t,i=document.createTreeWalker(a,133,null,!1);let n=p(s),r=s[n],o=-1,c=0;const l=[];let h=null;for(;i.nextNode();){o++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==r&&r.index===o;)r.index=null!==h?-1:r.index-c,n=p(s,n),r=s[n]}l.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const a=document.createTreeWalker(t,133,null,!1);for(;a.nextNode();)e++;return e},p=(t,e=-1)=>{for(let a=e+1;a<t.length;a++){const e=t[a];if(c(e))return a}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const g=new WeakMap,m=t=>"function"==typeof t&&g.has(t),f={},b={};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class y{constructor(t,e,a){this.__parts=[],this.template=t,this.processor=e,this.options=a}update(t){let e=0;for(const a of this.__parts)void 0!==a&&a.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),a=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,r=0,o=0,l=i.nextNode();for(;r<s.length;)if(n=s[r],c(n)){for(;o<n.index;)o++,"TEMPLATE"===l.nodeName&&(a.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=a.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$=` ${a} `;class w{constructor(t,e,a,s){this.strings=t,this.values=e,this.type=a,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const c=h.exec(t);e+=null===c?t+(i?$:s):t.substr(0,c.index)+c[1]+c[2]+n+c[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const C=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class D{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=a[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=a[i];if(void 0!==e){const t=e.value;if(C(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||C(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(C(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const a=new y(e,t.processor,this.options),s=a._clone();a.update(t.values),this.__commitNode(s),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,s=0;for(const i of t)a=e[s],void 0===a&&(a=new x(this.options),e.push(a),0===s?a.appendIntoPart(this):a.insertAfterPart(e[s-1])),a.setValue(i),a.commit(),s++;s<e.length&&(e.length=s,this.clear(a&&a.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class I extends D{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends k{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;function R(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return s=e.keyString.get(i),void 0===s&&(s=new r(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const P=new Map,L=new WeakMap,q=(t,a,s)=>{let i=L.get(a);void 0===i&&(e(a,a.firstChild),L.set(a,i=new x(Object.assign({templateFactory:R},s))),i.appendInto(a)),i.setValue(t),i.commit()};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const z=new
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class{handleAttributeExpressions(t,e,a,s){const i=e[0];if("."===i){return new I(t,e.slice(1),a).parts}if("@"===i)return[new E(t,e.slice(1),s.eventContext)];if("?"===i)return[new _(t,e.slice(1),a)];return new D(t,e,a).parts}handleTextExpression(t){return new x(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const M=(t,...e)=>new w(t,e,"html",z)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */,O=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const V=t=>e=>{const s=O(e.type,t);let i=P.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},P.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(a);if(n=i.keyString.get(o),void 0===n){const a=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(a,t),n=new r(e,a),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},F=["html","svg"],j=new Set,W=(t,e,a)=>{j.add(t);const s=a?a.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{F.forEach((e=>{const a=P.get(O(e,t));void 0!==a&&a.keyString.forEach((t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{a.add(t)})),d(t,a)}))}))})(t);const o=s.content;a?function(t,e,a=null){const{element:{content:s},parts:i}=t;if(null==a)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=p(i),o=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===a&&(o=u(e),a.parentNode.insertBefore(e,a));-1!==r&&i[r].index===c;){if(o>0){for(;-1!==r;)i[r].index+=o,r=p(i,r);return}r=p(i,r)}}(a,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(a){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),d(a,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:B},Z="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,a)=>{const s=this._attributeNameForProperty(a,e);void 0!==s&&(this._attributeToPropertyMap.set(s,a),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,a,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const a of e)this.createProperty(a,t[a])}}static _attributeNameForProperty(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=B){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e.type,s=e.converter||H,i="function"==typeof s?s:s.fromAttribute;return i?i(t,a):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const a=e.type,s=e.converter;return(s&&s.toAttribute||H.toAttribute)(t,a)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=J){const s=this.constructor,i=s._attributeNameForProperty(t,a);if(void 0!==i){const t=s._propertyValueToAttribute(e,a);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const a=this.constructor,s=a._attributeToPropertyMap.get(t);if(void 0!==s){const t=a.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=a._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,a){let s=!0;if(void 0!==t){const i=this.constructor;a=a||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const K=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:a,elements:s}=e;return{kind:a,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),G=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(a){a.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}};function X(t){return(e,a)=>void 0!==a?((t,e,a)=>{e.constructor.createProperty(a,t)})(t,e,a):G(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const at={};class st extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,a)=>t.reduceRight(((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t)),a),a=e(t,new Set),s=[];a.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new et(String(e),tt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==at&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return at}}st.finalized=!0,st.render=(t,a,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=L.has(a),r=U&&11===a.nodeType&&!!a.host,o=r&&!j.has(i),c=o?document.createDocumentFragment():a;if(q(t,c,Object.assign({templateFactory:V(i)},s)),o){const t=L.get(c);L.delete(c);const s=t.value instanceof y?t.value.template:void 0;W(i,c,s),e(a,a.firstChild),a.appendChild(c),L.set(a,t)}!n&&r&&window.ShadyCSS.styleElement(a.host)};
/**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const it=new WeakMap,nt=(rt=t=>e=>{const a=it.get(e);if(void 0===t&&e instanceof k){if(void 0!==a||!it.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==a&&e.setValue(t);it.set(e,t)},(...t)=>{const e=rt(...t);return g.set(e,!0),e});var rt;const ot=t=>`0${t}`.slice(-2),ct=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},lt=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))),ht=(t,e,a)=>{if("string"!=typeof e)return;const s=e.split(".");let i=t;for(const t in s){let e=s[t];const n=e.indexOf("(");if(-1===n)t<s.length-1?void 0===i[e]&&(i[e]={}):i[e]=a,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let a=i[e].length;a<t;a++)i[e].push({});i=i[e][t-1]}}},dt=(t,e)=>{if("string"!=typeof e)return null;let a=t;const s=e.split(".");for(const t in s){const e=s[t],i=e.indexOf("(");if(-1===i){if(!a[e])return null;a=a[e]}else{const t=e.substring(i+1,e.length-1),s=a[e.substring(0,i)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;a=s[t-1]}}return a},ut=t=>{for(const e in t)"object"==typeof t[e]?ut(t[e]):"string"==typeof t[e]&&(t[e]="")},pt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const s=t[a];s.fieldID?e.push(s.fieldID):"object"==typeof s&&pt(s,e)}},gt=(t,e,a)=>{let s=dt(t,e);if(null===s&&(s=[],ht(t,e,s)),Array.isArray(s))if(a&&"string"==typeof a){const t={},e=a.split(",");for(const a in e)t[e[a]]="";s.push(t)}else{if(0===s.length)return;const t={...s[0]};ut(t),s.push(t)}},mt=(t,e)=>{let a,s=e;-1!==e.indexOf(").pyTemplate")&&(a=s.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),s=s.substring(0,e.lastIndexOf("(")));const i=dt(t,s);if(Array.isArray(i))if(1!==i.length)if(a){if(i.length<a)return;i.splice(a-1,1)}else i.length-=1;else for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="")},ft=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},bt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""},yt=(t,e)=>{for(const a in t.elements){const s=t.elements[a];if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===s.tagName){const a=s.getAttribute("type");if("checkbox"===a)ht(e,t,s.checked);else if("radio"===a)s.checked&&ht(e,t,s.value);else if("date"===a){let a;s.valueAsDate&&(a=new Date(s.valueAsDate)),a&&a instanceof Date&&a.getTime()==a.getTime()||(a=new Date(s.value)),a&&a instanceof Date&&a.getTime()==a.getTime()?(a=new Date(a.getTime()+6e4*a.getTimezoneOffset()),ht(e,t,`${ot(a.getMonth()+1)}/${ot(a.getDate())}/${a.getFullYear()}`)):ht(e,t,s.value)}else ht(e,t,s.value)}else ht(e,t,s.value)}}},vt=t=>{if(void 0===t.content)return{};const e={};for(const a in t.content){const s=t.content[a];"object"!=typeof s||0===a.indexOf("px")||Array.isArray(s)||"pyWorkParty"===a||(e[a]=s)}return e},$t=(t,e)=>{for(const a in t.elements){const s=t.elements[a];if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=`.${s.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const a in e){if(e[a].Path===t){s.setCustomValidity(e[a].ValidationMessage),s.classList.add("error-field"),s.reportValidity();break}if(e[a].erroneousInputOutputFieldInPage===t){s.setCustomValidity(e[a].localizedValue),s.classList.add("error-field"),s.reportValidity();break}}}}},wt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a in t.control.actionSets){const s=t.control.actionSets[a];if(s.events.length>0&&s.actions.length>0&&s.events[0].event===e){let t=s.actions[0].action;return"refresh"===t&&""!==s.actions[0].refreshFor&&(t+=`-${s.actions[0].refreshFor}`),t}}},Ct=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,St=(t,e,a)=>{if(void 0===e)return null;const s=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?M`<div class="field-caption dataLabelForWrite ${s}">${lt(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?M`<label>${lt(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?M`<label class="field-caption dataLabelForWrite ${s}" for="${nt(e)}">${lt(t.label)}</label>`:null},Dt=(t,e,a,s)=>void 0===e?M`
      ${s}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?M`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${St(t,e,a)}</legend>${s}</fielset></div>
  `:M`
    <div class="flex content-item field-item ${a}">${St(t,e,a)}${s}</div>
  `:null,kt=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,xt=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,_t=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,It=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return Dt(t,e,"field-text",At(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return Dt(t,e,"field-textinput",Tt(t,e));case"pxInteger":case"pxNumber":return Dt(t,e,"field-numberinput",Nt(t,e));case"pxCurrency":return Dt(t,e,"field-currencyinput",Rt(t,e));case"pxEmail":return Dt(t,e,"field-emailinput",Pt(t,e));case"pxTextArea":return Dt(t,e,"field-textarea",Lt(t,e));case"pxRadioButtons":return Dt(t,e,"field-radiogroup",Vt(t,e));case"pxCheckbox":return Dt(t,e,"field-checkbox",Ft(t,e));case"pxDropdown":return Dt(t,e,"field-dropdown",jt(t,e));case"pxDisplayText":return Dt(t,e,"field-text",At(t,e));case"pxIcon":return Dt(t,e,"field-icon",qt(t,e));case"pxLink":case"pxURL":return Dt(t,e,"field-url",zt(t,e));case"pxIconDeleteItem":return Dt(t,e,"field-button",Ot(t,e));case"pxButton":return Dt(t,e,"field-button",Mt(t,e));case"pxDate":case"pxDateTime":return Dt(t,e,"field-datetime",Ut(t,e));case"pxAutoComplete":return Dt(t,e,"field-combobox",Wt(t,e));case"pxSlider":return Dt(t,e,"field-slider",Et(t,e));default:return null}},At=(t,e)=>{if("pxDate"===t.control.type||"pxDateTime"===t.control.type){let a=ct(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=a.toLocaleDateString(void 0,e)}else a=a.toLocaleDateString();else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return M`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${nt(e)}" value="${lt(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e in t.control.modes[0].options){const s=t.control.modes[0].options[e];s.key===a&&(a=s.value)}return"pxCurrency"===t.control.type&&(a=`$${a}`),M`
    <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${lt(a)}</span>
  `},Tt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${nt(e)}"
    value="${lt(t.value)}"
    data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
  />
`,Et=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${nt(e)}"
    value="${lt(t.value)}"
    data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
  />
`,Nt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
  />
`,Rt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
  />
`,Pt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
  />
`,Lt=(t,e)=>M`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${nt(e)}"
    data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
  >
${lt(t.value)}</textarea
  >
`,qt=(t,e)=>M`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${nt(e)}"
    value="${t.value}"
  />
`,zt=(t,e)=>M`
  <a id="${nt(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,Mt=(t,e)=>{const a=wt(t,"click");return"deleteRow"===a?Ot(t,e):M`
  <button
  type='button' 
    class="${nt(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${nt(e)}"
    data-ref="${nt(Ct(t))}"
    data-action-click="${nt(a)}"
  >${t.control.label}</button>`},Ot=(t,e)=>M`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${nt(e)}"
    data-ref="${nt(Ct(t))}"
    data-action-click="deleteRow"
  >${xt()}</button>
`,Ut=(t,e)=>{let a=t.value;if(""!==a){let e=new Date(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${nt(e)}"
      value="${a}"
      data-action-change="${nt(wt(t,"change"))}"
    data-action-click="${nt(wt(t,"click"))}"
    />
  `},Vt=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:M`
    ${a.map(((a,s)=>{const i=`rb-${e}-${s}`;return M`
        <div>
          <input
            data-ref="${t.reference}"
            name=${nt(e)}
            id="${i}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?checked="${a.key===t.value}"
            data-action-change="${nt(wt(t,"change"))}"
          />
          <label for="${i}">${a.value}</label>
        </div>
      `}))}
  `},Ft=(t,e)=>M`
<div>
  <input
  data-ref="${t.reference}" 
  id="${nt(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${nt(wt(t,"change"))}"
  data-action-click="${nt(wt(t,"click"))}"
  />
  <label for="${nt(e)}">${t.control.label}</label>
  </div>
`,jt=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?M`<select
      data-ref="${t.reference}"
      id=${nt(e)}
      ?required="${!0===t.required}"
      data-action-change="${nt(wt(t,"change"))}"
      data-action-click="${nt(wt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>M`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:M`<input
      type='text'
      data-ref="${t.reference}"
      id=${nt(e)}
      ?required="${!0===t.required}"
      data-action-change="${nt(wt(t,"change"))}"
      data-action-click="${nt(wt(t,"click"))}">
      </input>`,Wt=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return M`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${nt(e)}"
        value="${lt(t.value)}"
        data-action-change="${nt(wt(t,"change"))}"
        data-action-click="${nt(wt(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>M`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),M`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${nt(e)}"
      value="${t.value}"
      data-action-change="${nt(wt(t,"change"))}"
      data-action-click="${nt(wt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},Ht=t=>""!==t.title?M`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Bt=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return pt(t.newRow,e),M`
      <div class="table-action-area">
        ${"add-row"===t.testID?M`<button type="button" class="pzhc pzbutton Simple" data-newrow="${nt(e.join())}"
        data-ref=${a} data-action-click="addRow">${M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`}Add item</button>`:""}
      </div>
    `}return null},Jt=t=>M`
  ${t.map((t=>M`
    <th>${t.caption?M`${t.caption.value}`:""}</th>`))}
`,Zt=t=>M`
  ${t.map((t=>M`
    <tr>
      ${t.groups.map((t=>M`
      <td>${It(t.field)}</td>`))}
    </tr>`))}
`,Yt=()=>M`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Kt=(t,e,a,s)=>((t,e,a,s)=>{const i=document.createElement("div");i.setAttribute("role","alertdialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-labelledby",t),i.setAttribute("aria-describedby",""),i.setAttribute("class","mashup-modal");const n=document.createElement("div");i.appendChild(n);const r=()=>{document.body.removeEventListener("click",o),i&&(i.previousElementSibling&&(i.previousElementSibling.removeAttribute("aria-hidden"),i.previousElementSibling.focus()),i.remove())},o=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}r()}};return M`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");null===e?r():1===e.children.length?(e.firstElementChild.setAttribute("aria-hidden","true"),i.style.opacity=0,e.appendChild(i),s(n),document.body.addEventListener("click",o),i.offsetHeight,i.style=""):r()}}" class="pzhc pzbutton ${a}" title="${t}">${e}</button>
  </div>`})(t,e,a,(t=>{q(Gt(t,[]),t),s(t)})),Gt=(t,e,a,s,i)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;void 0===a&&(a=e[n].name);const s=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});s.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,s=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);s[t]=a}return s}(t),a=new Blob([e],{type:"octet/stream"});s.href=window.URL.createObjectURL(a)}s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)},o=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),s.fetchData.call(s,"attachment",{id:e[n].ID,target:r})},c=a=>{a.preventDefault(),a.stopPropagation();const i=a.target.closest("button");n=i.getAttribute("data-id"),s.sendData.call(s,"deleteattachment",{id:e[n].ID,target:t})},l=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),i.splice(n,1),q(Gt(t,e,a,s,i),t)},h=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},d=t=>{t.preventDefault();const e=t.target,a=t.relatedTarget,s=null===e?null:e.closest(".attach-files"),i=null===a?null:a.closest(".attach-files");if("dragenter"===t.type||"dragover"===t.type?null!=s&&s.classList.add("drop-file-hover"):"dragleave"!==t.type&&"drop"!==t.type||null===i&&null!==s&&s.classList.remove("drop-file-hover"),"drop"===t.type){const a=t.dataTransfer.files;p(e,a)}},u=n=>{n.stopPropagation(),n.preventDefault();for(let n=0;n<i.length;n++){const r=i[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),s.sendData.call(s,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),s.sendData.call(s,"uploadattachment",{actionid:r,target:t}))}q(Gt(t,e,a,s),t)},p=(i,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}q(Gt(t,e,a,s,r),t)},g=t=>{t.stopPropagation();let e=t.target;if("BUTTON"===e.tagName)return e=t.target.parentNode.parentNode.firstElementChild,void e.click();p(e,e.files)},m=i=>{i.stopPropagation();q(Gt(t,e,a,s,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},f=i=>{i.stopPropagation(),q(Gt(t,e,a,s),t)},b=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),M`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":M`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>category: ${e.category}</span></span>`}
    </div>`},y=(t,e)=>e.loading?M`${b(t,e)}${Yt()}`:e.editing?"URL"===e.type?M`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${h}" data-id="${t}" value="${e.name}" aria-label='name'/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${h}" data-id="${t}" value="${e.url}" aria-label='URL'/>
      </div>`:M`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${h}" 
      data-id="${t}" value="${e.displayName}" aria-label='name'/>
      ${((t,e)=>M`
    <select data-id="${t}" @change="${h}" class='flex-all' aria-label='category'>
    ${s.attachmentcategories.map((t=>M`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' title='Delete'>${xt()}</button>`:M`${b(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' title='Delete'>${xt()}</button>`,v=t=>{if(!a)return Yt();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),"URL"===t[1].type&&t[1].editing?e.push(M`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${y(t[0],t[1])}
            </div>`):e.push(M`<div class='row-item'>
              <span class='doc-icon'>${M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`}<span>${a.substring(0,5)}</span></span>
              ${y(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:M`<div class='empty'>no attachments found</div>`};let $="Attachments";return void 0!==i&&i.length>0&&($="URL"===i[0].type?"Attach a link":"Attach files"),M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${$}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${kt()}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?M`
      <div class='attach-files list-items'>
        <div class='upload-content'>${v(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${f}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">Upload</button>
        </div>
      </div>`:M`
      <form id="modalcontent" @dragenter="${d}" @dragover="${d}" @dragleave="${d}"  
      @drop="${d}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${_t()}<span> Drag and drop files, attach 
          <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">files</button> or add a 
          <button type='button' aria-labelledby='click to add a URL link' class='Light' @click="${m}">link</button></span>
        </div>
        ${v(e)}
      </form>
    `}
  `},Xt=(t,e,a,s)=>M`
  ${t.map(((t,i)=>{const n=`${e}-${i}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),i=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return M`
          <div class="${i}">${Xt(t.layout.view.groups,n,a,s)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=M`<h2>${t.layout.title}</h2>`;break;case"h3":e=M`<h3>${t.layout.title}</h3>`;break;case"h4":e=M`<h4>${t.layout.title}</h4>`;break;default:e=M`<h2>${t.layout.title}</h2>`}return M`
        ${e}<div class="${i}">${Xt(t.layout.groups,n,a,s)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>M`
  ${Ht(t.layout)}
  <table>
    <thead>
      <tr>
        ${Jt(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Zt(t.layout.rows)}
    </tbody>
  </table>
  ${Bt(t.layout,a)}
`)(t,0,a):Qt(t,n,a):null}return t.field?t.field.control&&"pxAttachContent"===t.field.control.type?Kt("Upload file","Upload file","",s.displayAttachments):It(t.field,n,a):t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?Kt("Upload file","Upload file","",s.displayAttachments):Xt(t.view.groups,n,a,s):null}))}
`,Qt=(t,e,a)=>M`
  ${Ht(t.layout)}
  <div class="rdl">
    ${te(t.layout.rows,e,a)}
  </div>
  ${Bt(t.layout,a)}
`,te=(t,e,a)=>M`
  ${t.map(((t,s)=>{const i=`${e}-row${s}`;return t.groups?M`
        <div>
          ${Xt(t.groups,i,a)}
        </div>
      `:null}))}
`,ee=(t,e,a,s)=>{if(null==s)return null;let i;const n=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${n}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${n}`),r.setAttribute("tabindex","-1");const o=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",c),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},c=t=>{38===t.keyCode?(i=i.previousElementSibling,null===i&&(i=r.lastElementChild),i.focus()):40===t.keyCode?(i=i.nextElementSibling,null===i&&(i=r.firstElementChild),i.focus()):27===t.keyCode||9===t.keyCode?o():13===t.keyCode&&(s(t),o())},l=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&s(t),o()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),"blur"===t.type)return void l(t);const e=t.target;"BUTTON"!==e.tagName?(s(t),o()):null===e.nextElementSibling?(t.target.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),q(a(),r),i=e.nextElementSibling.firstElementChild,i.focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",c)):o()};return M`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${n}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${n}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="pzhc pzbutton Simple action-menu" title="${e}" aria-label="${e}">${t}</button>
    </div>
  `},ae=(t,e,a,s,i,n,r,o,c)=>{const l=M`${_t()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&a.content)return M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} (${a.content.pyID})</h2>
      ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?Kt("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?M`
          ${ee("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?M`
  <h3>
    Assignments
  </h3>
  <table>
    <thead>
      <tr>
        <th>Priority</th>
        <th>Task</th>
        <th>Assigned to</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>M`
        <tr>
          <td>${t.urgency}</td>
          <td>${""!==t.instructions?t.instructions:t.name}</td>
          <td>${t.routedTo}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.assignments,o)}
    ${((t,e)=>t&&0!==t.length?M`
  <h3>
    Related cases
  </h3>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>M`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.childCases,o)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const h=e.caseID.split(" ")[1];return M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} (${h})</h2>
    ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?Kt("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?M`
        ${ee("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},se=(t,e,a,s,i)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!1,i)}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?M`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,s)}
`,ie=(t,e,a,s)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!0,s)}</div>
  ${(t=>null===t?null:M`
  <div class="action-button-area">
  ${null!==t?M`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,ne=(t,e,a,s,i)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!1,i)}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,s)}
`,re=(t,e,a,s)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!1,s)}</div>
  ${(t=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,oe=(t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(M`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return M`
    ${a}
  `},ce=t=>M`
${t.pxResults.map((t=>M`
    <option>
      ${t.pyUserName}
    </option>`))}`;function le(t,e,a,s){a&&Object.defineProperty(t,e,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(s):void 0})}function he(t,e,a,s,i){var n={};return Object.keys(s).forEach((function(t){n[t]=s[t]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=a.slice().reverse().reduce((function(a,s){return s(t,e,a)||a}),n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}var de,ue,pe,ge,me,fe,be,ye,ve,$e,we,Ce,Se,De,ke,xe,_e,Ie,Ae,Te,Ee,Ne,Re,Pe,Le,qe,ze,Me,Oe,Ue,Ve,Fe,je,We,He;let Be=(de=X({type:String}),ue=X({type:String}),pe=X({type:String}),ge=X({type:String}),me=X({type:String}),fe=X({type:String}),be=X({type:String}),ye=X({type:String}),ve=X({type:String}),$e=X({type:String}),we=X({type:String}),Ce=X({type:String}),Se=X({type:String}),De=X({type:Object}),ke=X({type:String}),xe=X({type:String}),_e=X({type:String}),Ae=he((Ie=class extends st{constructor(){super(),le(this,"url",Ae,this),le(this,"caseID",Te,this),le(this,"username",Ee,this),le(this,"password",Ne,this),le(this,"title",Re,this),le(this,"bShowCreate",Pe,this),le(this,"bShowCancel",Le,this),le(this,"bShowAttachments",qe,this),le(this,"bShowSave",ze,this),le(this,"authentication",Me,this),le(this,"token",Oe,this),le(this,"clientid",Ue,this),le(this,"clientsecret",Ve,this),le(this,"initialContent",Fe,this),le(this,"action",je,this),le(this,"casetype",We,this),le(this,"portalName",He,this),this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1}}).prototype,"url",[de],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Te=he(Ie.prototype,"caseID",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ee=he(Ie.prototype,"username",[pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ne=he(Ie.prototype,"password",[ge],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Re=he(Ie.prototype,"title",[me],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"My worklist"}}),Pe=he(Ie.prototype,"bShowCreate",[fe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Le=he(Ie.prototype,"bShowCancel",[be],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),qe=he(Ie.prototype,"bShowAttachments",[ye],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"false"}}),ze=he(Ie.prototype,"bShowSave",[ve],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Me=he(Ie.prototype,"authentication",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Oe=he(Ie.prototype,"token",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ue=he(Ie.prototype,"clientid",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ve=he(Ie.prototype,"clientsecret",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Fe=he(Ie.prototype,"initialContent",[De],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),je=he(Ie.prototype,"action",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),We=he(Ie.prototype,"casetype",[xe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),He=he(Ie.prototype,"portalName",[_e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ie);class Je extends Be{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&q(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i,element:n}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${a}`;break;case"assignment":c+=`assignments/${a}`;break;case"case":c+=`cases/${a}`;break;case"data":c+=`data/${a}`;break;case"page":c+=`cases/${a}/pages/${s}`;break;case"view":c+=`cases/${a}/views/${s}`;break;case"assignmentaction":c+=`assignments/${a}/actions/${s}`;break;case"caseaction":c+=`cases/${a}/actions/${s}`;break;case"attachment":c+=`attachments/${a}`;break;case"attachments":c+=`cases/${a}/attachments`;break;case"attachmentcategories":c+=`cases/${a}/attachment_categories`}fetch(c,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),i&&(i.disabled=!1,i.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t in e.caseTypes){const a=e.caseTypes[t];"workList"===this.action&&""!==this.casetype&&this.casetype!==a.ID||(this.casetypes[a.ID]={canCreate:a.CanCreate,name:a.name,requiresFieldsToCreate:!1})}"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}q(ce(e),n.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}q(ne(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(this.name=e.name,!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}this.requestUpdate(),q(se(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus();break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}q(se(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},"pyCaseInformation"===s?(this.name=e.name,q(ie(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,q(se(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},!r){console.error("Error: case data are not present when retrieving the newwork");break}q(re(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a in t.elements){const s=t.elements[a];if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const a=e[t];"object"==typeof a?("radio"===s.type?s.value===a.value&&(s.checked=!0):"checkbox"===s.type?!0!==a.value&&"true"!==a.value||(s.checked=!0):a.value&&(s.value=a.value),a.disabled&&(s.disabled=!0)):"string"==typeof a?"radio"===s.type?s.value===a&&(s.checked=!0):"checkbox"===s.type?"true"===a&&(s.checked=!0):s.value=a:"boolean"==typeof a&&"checkbox"===s.type&&!0===a&&(s.checked=!0)}}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&q(Gt(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:s,target:i,refreshFor:n}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:r},c={method:"POST",headers:o,mode:"cors"};let l=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?c.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(c.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),c.headers["Content-Type"]="application/x-www-form-urlencoded",l=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":l+="cases",c.body=JSON.stringify({content:this.content,caseTypeID:a});break;case"submitassignment":c.body=JSON.stringify({content:this.content}),l+=`assignments/${a}?actionID=${s}`;break;case"savecase":l+=`cases/${a}`,s&&""!==s&&(l+=`?actionID=${s}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshnew":l+=`casetypes/${a}/refresh`,n&&""!==n&&(l+=`?refreshFor=${n}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshassignment":l+=`assignments/${a}/actions/${s}/refresh`,n&&""!==n&&(l+=`?refreshFor=${n}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshcase":l+=`cases/${a}/actions/${s}/refresh`,n&&""!==n&&(l+=`?refreshFor=${n}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"uploadattachment":l+="attachments/upload",delete o["Content-Type"];const t=new FormData;t.append("File",s,s.name),c.body=t;break;case"attachments":l+=`cases/${a}/attachments`,c.body=JSON.stringify({attachments:s});break;case"deleteattachment":l+=`attachments/${a}`,c.method="DELETE"}fetch(l,c).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages){const t=this.getRenderRoot().querySelector("#case-data");$t(t,e.errors[0].ValidationMessages),this.validationMsg=(t=>t.errorDetails?M`
    <ul>
      ${t.errorDetails.map((t=>M`<li>${t.localizedValue}</li>`))}
    </ul>`:M`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?M`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:M`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const a=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!a)return void console.error("Error: case data are not present");q("refreshnew"===t?re(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):se(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),a)}else if("savecase"===t)this.sendExternalEvent(t),this.fetchData("case",{id:this.caseID,target:i}),""!==this.assignmentID&&this.fetchData("assignment",{id:this.assignmentID});else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const a=s.name.substring(t+1),n=[{type:"File",category:s.category,fileType:a,name:s.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}e.ID&&(this.caseID=e.ID),e.nextAssignmentID?(a&&(q(Yt(),a),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.sendExternalEvent(t),this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(a&&(q(Yt(),a),this.requestUpdate()),this.sendExternalEvent(t),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Ze=(t,e,a,s)=>M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${t} (${e})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>
    ${s?M`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Kt("Attachments",_t(),"Simple",s)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${Yt()}</div>`,Ye=(t,e)=>M`
  <div class="error">${t}
  ${null!=e?M`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${e}">
    ${kt()}</button>`:""}
  </div>`,Ke=(t,e,a,s,i,n)=>M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
      ${t}
      ${e.length>0?M`
            (${e.length})
          `:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple" arial-label='Click to refresh the worklist'
      title='Click to refresh the worklist' @click="${s}">Refresh</button>
      ${ee("Create","Create a new case",a,i)}
    </div>
  </div>
  ${e.length>0?M`
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>case ID</th>
              <th class="right-aligned">Urgency</th>
              <th class="right-aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>M`
                <tr>
                  <td>${t.name}</td>
                  <td>${t.caseID}</td>
                  <td class="right-aligned">${t.urgency}</td>
                  <td class="right-aligned">
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:M`
        <div class="margin-t-2x">no assignments</div>
      `}
`;class Ge extends Je{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("worklist"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content=vt(this.casedata),yt(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content=vt(this.casedata),this.validationMsg="",yt(t,this.content),this.requestUpdate(),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(M`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return M`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?oe(this.name,this.data):this.casedata.actions?oe(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content=vt(this.casedata),yt(a,this.content),a.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&q(Yt(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&q(Yt(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?q(ce(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let s=t;if(a){if(this.content=vt(this.casedata),yt(a,this.content),s){"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");null!==e&&null!=t&&("addRow"===t?gt(this.content,e,s.getAttribute("data-newrow")):"deleteRow"===t&&mt(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,bt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")&&this.refreshAssignment(e,bt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){return console.log("displayContent v1"),""!==this.errorMsg?Ye(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?Ze(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?M`
        ${ae(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Yt()}</form>
      `:"workList"===this.action?Ke(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}firstUpdated(){console.log("Initialization of the Web Component v1");const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}K("pega-mashup-light")(class extends Ge{createRenderRoot(){return this}getRenderRoot(){return this}render(){return M`
      ${this.displayContent()}
    `}});const Xe=(t,e,a,s)=>void 0===e?M`
      ${s}
    `:M`
    <div class="flex content-item field-item ${a}">
      ${((t,e,a)=>{if(void 0===e)return null;const s=t.required?"icon-required":"";return"field-checkbox"===a?M`
    ${""!==t.label?M`<div class="field-caption dataLabelForWrite ${s}" >${lt(t.label?t.label:t.caption).replace("@L ","")}
    </div>`:null}
  `:M`
    ${""!==t.label?M`<label class="field-caption dataLabelForWrite ${s}" 
    for="${nt(e)}">${lt(t.label?t.label:t.caption).replace("@L ","")}
    </label>`:null}
  `})(t,e,a)}${s}
    </div>
  `,Qe=(t,e)=>M`
    <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${lt(t.value)}</span>
  `,ta=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="text"
    id="${nt(e)}"
    value="${lt(t.value)}"
  />
`,ea=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="number"
    id="${nt(e)}"
    value="${lt(t.value)}"
  />
`,aa=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="number"
    id="${nt(e)}"
    value="${lt(t.value)}"
  />
`,sa=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="email"
    id="${nt(e)}"
    value="${lt(t.value)}"
  />
`,ia=(t,e)=>M`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="email"
    id="${nt(e)}"
  >${lt(t.value)}</textarea>
`,na=(t,e)=>M`
  <input
  data-ref="${t.reference}"
  id=${nt(e)}
  type="checkbox" ?checked=${"true"===t.value}
  />
`,ra=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),M`
    ${a.map(((a,s)=>{const i=`rb-${e}-${s}`;return M`
        <div>
          <input
            data-ref="${t.reference}"
            name=${nt(e)}
            id=${i}
            type="radio"
            value="${a.key}"
            ?checked="${a.key===t.value}"
          />
          <label for="${i}">${a.value}</label>
        </div>
      `}))}
  `},oa=(t,e)=>M`<select
  data-ref="${t.reference}"
  id=${nt(e)}
  ?required="${"true"===t.required}">
    <option value="" title="Select...">Select...</option>
    ${t.options.map((e=>M`<option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>`))}
  </select>`,ca=(t,e)=>{let a=t.value;if(""!==a){let e=ct(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${nt(e)}"
      value="${a}"
    />
  `},la=(t,e)=>{let a=t.value;if(""!==a){let e=ct(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${nt(e)}"
      value="${a}"
    />
  `},ha=(t,e)=>{let a=t.value;if(""!==a){let t=ct(a);t instanceof Date&&t.getTime()==t.getTime()&&(t=new Date(t.getTime()+6e4*t.getTimezoneOffset()),a=`${t.getFullYear()}-${ot(t.getMonth()+1)}-${ot(t.getDate())}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      placeholder="HH:MM"
      type="time"
      id="${nt(e)}"
      value="${a}"
    />
  `},da=(t,e,a,s,i)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return M`${t.map(((t,n)=>{const r=`${e}-${n}`;if("reference"===t.type&&"view"===t.config.type){let e="";return t.config.context&&(e=t.config.context),da(s.data.uiResources.resources.views[t.config.name],r,a,s,""===i?e.substring(1):i+e)}return((t,e,a,s,i)=>{const n=t.config.value.replace("@P .","");if(t.config.reference=void 0===i||""===i?n:`${i}.${n}`,t.config.value=dt(s.casedata.content,t.config.reference),t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){const e=s.data.context_data?s.data.context_data.content:s.data.uiResources.context_data.caseInfo.content,a=""===i?e:dt(e,i);a&&(t.config.options=a.summary_of_associated_lists__[n])}if(t.config.options||(t.config.options=[]),t.config.value?t.config.value=`${t.config.value}`:t.config.value="",!0===a||"true"===t.config.readOnly)return Xe(t.config,e,"field-text",Qe(t.config,e));switch(t.type){case"Decimal":case"TextInput":return Xe(t.config,e,"field-textinput",ta(t.config,e));case"Email":return Xe(t.config,e,"field-emailinput",sa(t.config,e));case"Integer":return Xe(t.config,e,"field-numberinput",ea(t.config,e));case"Currency":return Xe(t.config,e,"field-currencyinput",aa(t.config,e));case"RadioButtons":return Xe(t.config,e,"field-radiogroup",ra(t.config,e));case"TextArea":return Xe(t.config,e,"field-textarea",ia(t.config,e));case"Checkbox":return Xe(t.config,e,"field-checkbox",na(t.config,e));case"Dropdown":return Xe(t.config,e,"field-dropdown",oa(t.config,e));case"DateTime":return Xe(t.config,e,"field-datetime",ca(t.config,e));case"Date":return Xe(t.config,e,"field-datetime",la(t.config,e));case"Time":return Xe(t.config,e,"field-datetime",ha(t.config,e));default:return null}})(t,r,a,s,i)}))}`;switch("TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return M`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${da(t.children[0].children,`${e}-0`,a,s,i)}</div>
            <div class="flex layout-content-stacked">${da(t.children[1].children,`${e}-1`,a,s,i)}</div>
          </div>
        `;case"OneColumn":return M`
          <div class="flex layout-content-stacked">
            ${da(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;case"Details":return M`
          <div class="flex layout-content-stacked_with_labels_left">
            ${da(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;default:return null}},ua=(t,e,a,s,i,n,r,o,c)=>{const l=M`${_t()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${e.data.caseInfo.name} (${t})</h2>
      ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?Kt("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?M`
          ${ee("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?M`
  <h3>
    Assignments
  </h3>
  <table>
    <thead>
      <tr>
        <th>Priority</th>
        <th>Task</th>
        <th>Assigned to</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>M`
        <tr>
          <td>${t.urgency}</td>
          <td>${t.name}</td>
          <td>${t.assigneeInfo.name}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.assignments,o)}
    <h3>Case information</h3>`}if(""===t||void 0===e.caseID)return"";const h=e.caseID.split(" ")[1];return M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.data.caseInfo.name} (${h})</h2>
    ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?Kt("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?M`
        ${ee("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},pa=(t,e,a,s,i)=>M`
  <div>${da(t,e,!1,i,"")}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?M`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,s)}
`,ga=(t,e,a,s)=>M`
  <div>${da(t,e,!0,s)}</div>
  ${(t=>null===t?null:M`
  <div class="action-button-area">
  ${null!==t?M`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,ma=(t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(M`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return M`
    ${a}
  `};class fa extends Be{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&q(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${s}`;break;case"caseaction":o+=`cases/${a}/actions/${s}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":this.casetypes={};for(const t in e.data.D_pzCasesAvailableToCreateForPortal.pxResults){const a=e.data.D_pzCasesAvailableToCreateForPortal.pxResults[t];"workList"===this.action&&""!==this.casetype&&this.casetype!==a.pyClassName||(this.casetypes[a.pyClassName]={canCreate:!0,name:a.pyLabel})}if(this.cases=[],e.data.D_pyUserWorkList.pxResults.length>0)for(const t in e.data.D_pyUserWorkList.pxResults){const a=e.data.D_pyUserWorkList.pxResults[t];this.cases.push({name:a.pyLabel,caseID:a.pxRefObjectKey,urgency:a.pxUrgencyAssign,ID:a.pzInsKey})}this.requestUpdate();break;case"assignment":this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=this.caseID,this.data.ID=a,this.actionID=this.casedata.content.pyViewName,this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,q(pa(e.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,q(ga(e.uiResources.resources.views[s],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),n),this.requestUpdate(),n.focus();break;case"caseaction":q(pa(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),n),this.requestUpdate(),n.focus();break;case"attachments":let t=e.attachments;t||(t=[]),this.numAttachments=t.length,i&&q(Gt(i,t,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:s,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"};let c=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",c=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":c+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,c+=`assignments/${a}/actions/${s}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,c+=`cases/${a}/actions/${s}?viewType=form`;break;case"uploadattachment":c+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",s,s.name),o.body=t;break;case"attachments":c+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:s});break;case"deleteattachment":c+=`attachments/${a}`,o.method="DELETE"}fetch(c,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(!(a.errors&&a.errors.length>0)){if(a.access_token)this.token=a.access_token,e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");$t(t,a.errorDetails),this.validationMsg=(t=>t.errorDetails?M`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message?null:M`<li>${t.localizedValue}</li>`))}
    </ul>`:null)(a)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const e=s.name.substring(t+1),n=[{type:"File",category:s.category,fileType:e,name:s.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}a.confirmationNote?(this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):a.uiResources&&(this.bShowNew=!1,this.assignmentID=a.nextAssignmentInfo.ID,this.sendExternalEvent(t),this.data=a,this.casedata.content=a.data.caseInfo.content,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.actionID=a.uiResources.root.config.name,this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(q(pa(a.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e),e.focus()))}this.requestUpdate()}})).catch((t=>{this.genErrorMessage(t)}))}}class ba extends fa{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("portal"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content={},yt(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content={},this.validationMsg="",yt(t,this.content),this.requestUpdate(),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(M`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
      `);return M`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?ma(this.name,this.data):this.casedata.actions?ma(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content={},yt(a,this.content),a.checkValidity()?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&q(Yt(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&q(Yt(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?q(ce(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let s=t;if(a){if(this.content={},yt(a,this.content),s){"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");null!==e&&null!=t&&("addRow"===t?gt(this.content,e,s.getAttribute("data-newrow")):"deleteRow"===t&&mt(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,bt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")&&this.refreshAssignment(e,bt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){if(console.log("displayContent v2"),this.bShowSave="false",""!==this.errorMsg)return Ye(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return Ze(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?M`
        ${ua(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Yt()}</form>
      `:"workList"===this.action?Ke(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}firstUpdated(){console.log("Initialization of the Web Component v2");const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}K("pega-mashup-light-v2")(class extends ba{createRenderRoot(){return this}getRenderRoot(){return this}render(){return M`
      ${this.displayContent()}
    `}})}();
