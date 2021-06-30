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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${s}--\x3e`,i=new RegExp(`${s}|${a}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const a=[],r=[],c=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:g,values:{length:f}}=t;for(;p<f;){const t=c.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let a=0;for(let t=0;t<s;t++)o(e[t].name,n)&&a++;for(;a-- >0;){const e=g[p],s=d.exec(e)[2],a=s.toLowerCase()+n,r=t.getAttribute(a);t.removeAttribute(a);const o=r.split(i);this.parts.push({type:"attribute",index:u,name:s,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,r=e.split(i),c=r.length-1;for(let e=0;e<c;e++){let a,i=r[e];if(""===i)a=l();else{const t=d.exec(i);null!==t&&o(t[2],n)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),a=document.createTextNode(i)}s.insertBefore(a,t),this.parts.push({type:"node",index:++u})}""===r[c]?(s.insertBefore(l(),t),a.push(t)):t.data=r[c],p+=c}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(l(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(a.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),p++}}else c.currentNode=r.pop()}for(const t of a)t.parentNode.removeChild(t)}}const o=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:s},parts:a}=t,i=document.createTreeWalker(s,133,null,!1);let n=p(a),r=a[n],o=-1,c=0;const l=[];let d=null;for(;i.nextNode();){o++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===o;)r.index=null!==d?-1:r.index-c,n=p(a,n),r=a[n]}l.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},p=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(c(e))return s}return-1};
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
const g=new WeakMap,f=t=>"function"==typeof t&&g.has(t),m={},y={};
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
class b{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],a=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,r=0,o=0,l=i.nextNode();for(;r<a.length;)if(n=a[r],c(n)){for(;o<n.index;)o++,"TEMPLATE"===l.nodeName&&(s.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=s.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$=` ${s} `;class w{constructor(t,e,s,a){this.strings=t,this.values=e,this.type=s,this.processor=a}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const c=d.exec(t);e+=null===c?t+(i?$:a):t.substr(0,c.index)+c[1]+c[2]+n+c[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
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
     */const _=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new D(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let a="";for(let i=0;i<e;i++){a+=t[i];const e=s[i];if(void 0!==e){const t=e.value;if(_(t)||!C(t))a+="string"==typeof t?t:String(t);else for(const e of t)a+="string"==typeof e?e:String(e)}}return a+=t[e],a}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class D{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||_(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const s=new b(e,t.processor,this.options),a=s._clone();s.update(t.values),this.__commitNode(a),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,a=0;for(const i of t)s=e[a],void 0===s&&(s=new S(this.options),e.push(s),0===a?s.appendIntoPart(this):s.insertAfterPart(e[a-1])),s.setValue(i),s.commit(),a++;a<e.length&&(e.length=a,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class I extends k{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends D{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),a=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=R(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const R=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function z(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let a=e.stringsArray.get(t.strings);if(void 0!==a)return a;const i=t.strings.join(s);return a=e.keyString.get(i),void 0===a&&(a=new r(t,t.getTemplateElement()),e.keyString.set(i,a)),e.stringsArray.set(t.strings,a),a}const N=new Map,M=new WeakMap,L=(t,s,a)=>{let i=M.get(s);void 0===i&&(e(s,s.firstChild),M.set(s,i=new S(Object.assign({templateFactory:z},a))),i.appendInto(s)),i.setValue(t),i.commit()};
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
     */const P=new
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
class{handleAttributeExpressions(t,e,s,a){const i=e[0];if("."===i){return new I(t,e.slice(1),s).parts}if("@"===i)return[new E(t,e.slice(1),a.eventContext)];if("?"===i)return[new x(t,e.slice(1),s)];return new k(t,e,s).parts}handleTextExpression(t){return new S(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const B=(t,...e)=>new w(t,e,"html",P)
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
     */,O=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const H=t=>e=>{const a=O(e.type,t);let i=N.get(a);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},N.set(a,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(s);if(n=i.keyString.get(o),void 0===n){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),n=new r(e,s),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},U=["html","svg"],F=new Set,V=(t,e,s)=>{F.add(t);const a=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(a,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{U.forEach((e=>{const s=N.get(O(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),h(t,s)}))}))})(t);const o=a.content;s?function(t,e,s=null){const{element:{content:a},parts:i}=t;if(null==s)return void a.appendChild(e);const n=document.createTreeWalker(a,133,null,!1);let r=p(i),o=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===s&&(o=u(e),s.parentNode.insertBefore(e,s));-1!==r&&i[r].index===c;){if(o>0){for(;-1!==r;)i[r].index+=o,r=p(i,r);return}r=p(i,r)}}(s,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(a,t);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),h(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const j={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),K={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:W},X="finalized";class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const a=this._attributeNameForProperty(s,e);void 0!==a&&(this._attributeToPropertyMap.set(a,s),t.push(a))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=K){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,a=this.getPropertyDescriptor(t,s,e);void 0!==a&&Object.defineProperty(this.prototype,t,a)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(a){const i=this[t];this[e]=a,this.requestUpdateInternal(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||K}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(X)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,a=e.converter||j,i="function"==typeof a?a:a.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,a=e.converter;return(a&&a.toAttribute||j.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=K){const a=this.constructor,i=a._attributeNameForProperty(t,s);if(void 0!==i){const t=a._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,a=s._attributeToPropertyMap.get(t);if(void 0!==a){const t=s.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let a=!0;if(void 0!==t){const i=this.constructor;s=s||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):a=!1}!this._hasRequestedUpdate&&a&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class G{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Q={};class tt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),a=[];s.forEach((t=>a.unshift(t))),this._styles=a}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Z){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new G(String(e),Y)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Q}}tt.finalized=!0,tt.render=(t,s,a)=>{if(!a||"object"!=typeof a||!a.scopeName)throw new Error("The `scopeName` option is required.");const i=a.scopeName,n=M.has(s),r=q&&11===s.nodeType&&!!s.host,o=r&&!F.has(i),c=o?document.createDocumentFragment():s;if(L(t,c,Object.assign({templateFactory:H(i)},a)),o){const t=M.get(c);M.delete(c);const a=t.value instanceof b?t.value.template:void 0;V(i,c,a),e(s,s.firstChild),s.appendChild(c),M.set(s,t)}!n&&r&&window.ShadyCSS.styleElement(s.host)},tt.shadowRootOptions={mode:"open"};
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
const et=new WeakMap,st=(at=t=>e=>{const s=et.get(e);if(void 0===t&&e instanceof D){if(void 0!==s||!et.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==s&&e.setValue(t);et.set(e,t)},(...t)=>{const e=at(...t);return g.set(e,!0),e});var at;class it{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class nt extends it{constructor(t=[],e=4*t.length){super();let s=t;if(s instanceof ArrayBuffer&&(s=new Uint8Array(s)),(s instanceof Int8Array||s instanceof Uint8ClampedArray||s instanceof Int16Array||s instanceof Uint16Array||s instanceof Int32Array||s instanceof Uint32Array||s instanceof Float32Array||s instanceof Float64Array)&&(s=new Uint8Array(s.buffer,s.byteOffset,s.byteLength)),s instanceof Uint8Array){const t=s.byteLength,e=[];for(let a=0;a<t;a+=1)e[a>>>2]|=s[a]<<24-a%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random(t){const e=[],s=t=>{let e=t,s=987654321;const a=4294967295;return()=>{s=36969*(65535&s)+(s>>16)&a,e=18e3*(65535&e)+(e>>16)&a;let t=(s<<16)+e&a;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let a,i=0;i<t;i+=4){const t=s(4294967296*(a||Math.random()));a=987654071*t(),e.push(4294967296*t()|0)}return new nt(e,t)}toString(t=rt){return t.stringify(this)}concat(t){const e=this.words,s=t.words,a=this.sigBytes,i=t.sigBytes;if(this.clamp(),a%4)for(let t=0;t<i;t+=1){const i=s[t>>>2]>>>24-t%4*8&255;e[a+t>>>2]|=i<<24-(a+t)%4*8}else for(let t=0;t<i;t+=4)e[a+t>>>2]=s[t>>>2];return this.sigBytes+=i,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const rt={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;a.push((s>>>4).toString(16)),a.push((15&s).toString(16))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=2)s[a>>>3]|=parseInt(t.substr(a,2),16)<<24-a%8*4;return new nt(s,e/2)}},ot={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;a.push(String.fromCharCode(s))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=1)s[a>>>2]|=(255&t.charCodeAt(a))<<24-a%4*8;return new nt(s,e)}},ct={stringify(t){try{return decodeURIComponent(escape(ot.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>ot.parse(unescape(encodeURIComponent(t)))};class lt extends it{constructor(){super(),this._minBufferSize=0}reset(){this._data=new nt,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=ct.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:s,blockSize:a}=this,i=s.words,n=s.sigBytes;let r=n/(4*a);r=t?Math.ceil(r):Math.max((0|r)-this._minBufferSize,0);const o=r*a,c=Math.min(4*o,n);if(o){for(let t=0;t<o;t+=a)this._doProcessBlock(i,t);e=i.splice(0,o),s.sigBytes-=c}return new nt(e,c)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class dt extends lt{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new it,t),this.reset()}static _createHelper(t){return(e,s)=>new t(s).finalize(e)}static _createHmacHelper(t){return(e,s)=>new ht(t,s).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class ht extends it{constructor(t,e){super();const s=new t;this._hasher=s;let a=e;"string"==typeof a&&(a=ct.parse(a));const i=s.blockSize,n=4*i;a.sigBytes>n&&(a=s.finalize(e)),a.clamp();const r=a.clone();this._oKey=r;const o=a.clone();this._iKey=o;const c=r.words,l=o.words;for(let t=0;t<i;t+=1)c[t]^=1549556828,l[t]^=909522486;r.sigBytes=n,o.sigBytes=n,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,s=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(s))}}const ut=nt;class pt extends it{constructor(t,e){super(),this.high=t,this.low=e}}class gt extends it{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,s=[];for(let a=0;a<e;a+=1){const e=t[a];s.push(e.high),s.push(e.low)}return ut.create(s,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,s=e.length;for(let t=0;t<s;t+=1)e[t]=e[t].clone();return t}}const ft={stringify(t){const{words:e,sigBytes:s}=t,a=this._map;t.clamp();const i=[];for(let t=0;t<s;t+=3){const n=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<s;e+=1)i.push(a.charAt(n>>>6*(3-e)&63))}const n=a.charAt(64);if(n)for(;i.length%4;)i.push(n);return i.join("")},parse(t){let e=t.length;const s=this._map;let a=this._reverseMap;if(!a){this._reverseMap=[],a=this._reverseMap;for(let t=0;t<s.length;t+=1)a[s.charCodeAt(t)]=t}const i=s.charAt(64);if(i){const s=t.indexOf(i);-1!==s&&(e=s)}return((t,e,s)=>{const a=[];let i=0;for(let n=0;n<e;n+=1)if(n%4){const e=s[t.charCodeAt(n-1)]<<n%4*2|s[t.charCodeAt(n)]>>>6-n%4*2;a[i>>>2]|=e<<24-i%4*8,i+=1}return nt.create(a,i)})(t,e,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},mt=[];for(let t=0;t<64;t+=1)mt[t]=4294967296*Math.abs(Math.sin(t+1))|0;const yt=(t,e,s,a,i,n,r)=>{const o=t+(e&s|~e&a)+i+r;return(o<<n|o>>>32-n)+e},bt=(t,e,s,a,i,n,r)=>{const o=t+(e&a|s&~a)+i+r;return(o<<n|o>>>32-n)+e},vt=(t,e,s,a,i,n,r)=>{const o=t+(e^s^a)+i+r;return(o<<n|o>>>32-n)+e},$t=(t,e,s,a,i,n,r)=>{const o=t+(s^(e|~a))+i+r;return(o<<n|o>>>32-n)+e};class wt extends dt{_doReset(){this._hash=new nt([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const s=t;for(let a=0;a<16;a+=1){const i=e+a,n=t[i];s[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const a=this._hash.words,i=s[e+0],n=s[e+1],r=s[e+2],o=s[e+3],c=s[e+4],l=s[e+5],d=s[e+6],h=s[e+7],u=s[e+8],p=s[e+9],g=s[e+10],f=s[e+11],m=s[e+12],y=s[e+13],b=s[e+14],v=s[e+15];let $=a[0],w=a[1],_=a[2],C=a[3];$=yt($,w,_,C,i,7,mt[0]),C=yt(C,$,w,_,n,12,mt[1]),_=yt(_,C,$,w,r,17,mt[2]),w=yt(w,_,C,$,o,22,mt[3]),$=yt($,w,_,C,c,7,mt[4]),C=yt(C,$,w,_,l,12,mt[5]),_=yt(_,C,$,w,d,17,mt[6]),w=yt(w,_,C,$,h,22,mt[7]),$=yt($,w,_,C,u,7,mt[8]),C=yt(C,$,w,_,p,12,mt[9]),_=yt(_,C,$,w,g,17,mt[10]),w=yt(w,_,C,$,f,22,mt[11]),$=yt($,w,_,C,m,7,mt[12]),C=yt(C,$,w,_,y,12,mt[13]),_=yt(_,C,$,w,b,17,mt[14]),w=yt(w,_,C,$,v,22,mt[15]),$=bt($,w,_,C,n,5,mt[16]),C=bt(C,$,w,_,d,9,mt[17]),_=bt(_,C,$,w,f,14,mt[18]),w=bt(w,_,C,$,i,20,mt[19]),$=bt($,w,_,C,l,5,mt[20]),C=bt(C,$,w,_,g,9,mt[21]),_=bt(_,C,$,w,v,14,mt[22]),w=bt(w,_,C,$,c,20,mt[23]),$=bt($,w,_,C,p,5,mt[24]),C=bt(C,$,w,_,b,9,mt[25]),_=bt(_,C,$,w,o,14,mt[26]),w=bt(w,_,C,$,u,20,mt[27]),$=bt($,w,_,C,y,5,mt[28]),C=bt(C,$,w,_,r,9,mt[29]),_=bt(_,C,$,w,h,14,mt[30]),w=bt(w,_,C,$,m,20,mt[31]),$=vt($,w,_,C,l,4,mt[32]),C=vt(C,$,w,_,u,11,mt[33]),_=vt(_,C,$,w,f,16,mt[34]),w=vt(w,_,C,$,b,23,mt[35]),$=vt($,w,_,C,n,4,mt[36]),C=vt(C,$,w,_,c,11,mt[37]),_=vt(_,C,$,w,h,16,mt[38]),w=vt(w,_,C,$,g,23,mt[39]),$=vt($,w,_,C,y,4,mt[40]),C=vt(C,$,w,_,i,11,mt[41]),_=vt(_,C,$,w,o,16,mt[42]),w=vt(w,_,C,$,d,23,mt[43]),$=vt($,w,_,C,p,4,mt[44]),C=vt(C,$,w,_,m,11,mt[45]),_=vt(_,C,$,w,v,16,mt[46]),w=vt(w,_,C,$,r,23,mt[47]),$=$t($,w,_,C,i,6,mt[48]),C=$t(C,$,w,_,h,10,mt[49]),_=$t(_,C,$,w,b,15,mt[50]),w=$t(w,_,C,$,l,21,mt[51]),$=$t($,w,_,C,m,6,mt[52]),C=$t(C,$,w,_,o,10,mt[53]),_=$t(_,C,$,w,g,15,mt[54]),w=$t(w,_,C,$,n,21,mt[55]),$=$t($,w,_,C,u,6,mt[56]),C=$t(C,$,w,_,v,10,mt[57]),_=$t(_,C,$,w,d,15,mt[58]),w=$t(w,_,C,$,y,21,mt[59]),$=$t($,w,_,C,c,6,mt[60]),C=$t(C,$,w,_,f,10,mt[61]),_=$t(_,C,$,w,r,15,mt[62]),w=$t(w,_,C,$,p,21,mt[63]),a[0]=a[0]+$|0,a[1]=a[1]+w|0,a[2]=a[2]+_|0,a[3]=a[3]+C|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32;const i=Math.floor(s/4294967296),n=s;e[15+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e[14+(a+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();const r=this._hash,o=r.words;for(let t=0;t<4;t+=1){const e=o[t];o[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return r}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const _t=dt._createHelper(wt),Ct=dt._createHmacHelper(wt);class kt extends it{constructor(t){super(),this.cfg=Object.assign(new it,{keySize:4,hasher:wt,iterations:1},t)}compute(t,e){let s;const{cfg:a}=this,i=a.hasher.create(),n=nt.create(),r=n.words,{keySize:o,iterations:c}=a;for(;r.length<o;){s&&i.update(s),s=i.update(t).finalize(e),i.reset();for(let t=1;t<c;t+=1)s=i.finalize(s),i.reset();n.concat(s)}return n.sigBytes=4*o,n}}class Dt extends lt{constructor(t,e,s){super(),this.cfg=Object.assign(new it,s),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?Lt:Nt;return{encrypt:(s,a,i)=>e(a).encrypt(t,s,a,i),decrypt:(s,a,i)=>e(a).decrypt(t,s,a,i)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}Dt._ENC_XFORM_MODE=1,Dt._DEC_XFORM_MODE=2,Dt.keySize=4,Dt.ivSize=4;class St extends Dt{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class xt extends it{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function It(t,e,s){const a=t;let i;const n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(let t=0;t<s;t+=1)a[e+t]^=i[t]}class At extends xt{}At.Encryptor=class extends At{processBlock(t,e){const s=this._cipher,{blockSize:a}=s;It.call(this,t,e,a),s.encryptBlock(t,e),this._prevBlock=t.slice(e,e+a)}},At.Decryptor=class extends At{processBlock(t,e){const s=this._cipher,{blockSize:a}=s,i=t.slice(e,e+a);s.decryptBlock(t,e),It.call(this,t,e,a),this._prevBlock=i}};const Tt={pad(t,e){const s=4*e,a=s-t.sigBytes%s,i=a<<24|a<<16|a<<8|a,n=[];for(let t=0;t<a;t+=4)n.push(i);const r=nt.create(n,a);t.concat(r)},unpad(t){const e=t,s=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=s}};class Et extends Dt{constructor(t,e,s){super(t,e,Object.assign({mode:At,padding:Tt},s)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:s,mode:a}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=a.createEncryptor:(t=a.createDecryptor,this._minBufferSize=1),this._mode=t.call(a,this,s&&s.words),this._mode.__creator=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class Rt extends it{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const zt={stringify(t){let e;const{ciphertext:s,salt:a}=t;return e=a?nt.create([1398893684,1701076831]).concat(a).concat(s):s,e.toString(ft)},parse(t){let e;const s=ft.parse(t),a=s.words;return 1398893684===a[0]&&1701076831===a[1]&&(e=nt.create(a.slice(2,4)),a.splice(0,4),s.sigBytes-=16),Rt.create({ciphertext:s,salt:e})}};class Nt extends it{static encrypt(t,e,s,a){const i=Object.assign(new it,this.cfg,a),n=t.createEncryptor(s,i),r=n.finalize(e),o=n.cfg;return Rt.create({ciphertext:r,key:s,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:n.blockSize,formatter:i.format})}static decrypt(t,e,s,a){let i=e;const n=Object.assign(new it,this.cfg,a);i=this._parse(i,n.format);return t.createDecryptor(s,n).finalize(i.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}Nt.cfg=Object.assign(new it,{format:zt});const Mt={execute(t,e,s,a){let i=a;i||(i=nt.random(8));const n=kt.create({keySize:e+s}).compute(t,i),r=nt.create(n.words.slice(e),4*s);return n.sigBytes=4*e,Rt.create({key:n,iv:r,salt:i})}};class Lt extends Nt{static encrypt(t,e,s,a){const i=Object.assign(new it,this.cfg,a),n=i.kdf.execute(s,t.keySize,t.ivSize);i.iv=n.iv;const r=Nt.encrypt.call(this,t,e,n.key,i);return r.mixIn(n),r}static decrypt(t,e,s,a){let i=e;const n=Object.assign(new it,this.cfg,a);i=this._parse(i,n.format);const r=n.kdf.execute(s,t.keySize,t.ivSize,i.salt);n.iv=r.iv;return Nt.decrypt.call(this,t,i,r.key,n)}}Lt.cfg=Object.assign(Nt.cfg,{kdf:Mt});const Pt=t=>t<<8&4278255360|t>>>8&16711935,Bt={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=2){const s=e[t>>>2]>>>16-t%4*8&65535;a.push(String.fromCharCode(s))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=1)s[a>>>1]|=t.charCodeAt(a)<<16-a%2*16;return nt.create(s,2*e)}},Ot=Bt,qt={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=2){const s=Pt(e[t>>>2]>>>16-t%4*8&65535);a.push(String.fromCharCode(s))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=1)s[a>>>1]|=Pt(t.charCodeAt(a)<<16-a%2*16);return nt.create(s,2*e)}},Ht=[];class Ut extends dt{_doReset(){this._hash=new nt([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const s=this._hash.words;let a=s[0],i=s[1],n=s[2],r=s[3],o=s[4];for(let s=0;s<80;s+=1){if(s<16)Ht[s]=0|t[e+s];else{const t=Ht[s-3]^Ht[s-8]^Ht[s-14]^Ht[s-16];Ht[s]=t<<1|t>>>31}let c=(a<<5|a>>>27)+o+Ht[s];c+=s<20?1518500249+(i&n|~i&r):s<40?1859775393+(i^n^r):s<60?(i&n|i&r|n&r)-1894007588:(i^n^r)-899497514,o=r,r=n,n=i<<30|i>>>2,i=a,a=c}s[0]=s[0]+a|0,s[1]=s[1]+i|0,s[2]=s[2]+n|0,s[3]=s[3]+r|0,s[4]=s[4]+o|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;return e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(a+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Ft=dt._createHelper(Ut),Vt=dt._createHmacHelper(Ut),jt=[],Wt=[],Kt=t=>{const e=Math.sqrt(t);for(let s=2;s<=e;s+=1)if(!(t%s))return!1;return!0},Xt=t=>4294967296*(t-(0|t))|0;let Jt=2,Zt=0;for(;Zt<64;)Kt(Jt)&&(Zt<8&&(jt[Zt]=Xt(Jt**.5)),Wt[Zt]=Xt(Jt**(1/3)),Zt+=1),Jt+=1;const Yt=[];class Gt extends dt{_doReset(){this._hash=new nt(jt.slice(0))}_doProcessBlock(t,e){const s=this._hash.words;let a=s[0],i=s[1],n=s[2],r=s[3],o=s[4],c=s[5],l=s[6],d=s[7];for(let s=0;s<64;s+=1){if(s<16)Yt[s]=0|t[e+s];else{const t=Yt[s-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,a=Yt[s-2],i=(a<<15|a>>>17)^(a<<13|a>>>19)^a>>>10;Yt[s]=e+Yt[s-7]+i+Yt[s-16]}const h=a&i^a&n^i&n,u=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),p=d+((o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25))+(o&c^~o&l)+Wt[s]+Yt[s];d=l,l=c,c=o,o=r+p|0,r=n,n=i,i=a,a=p+(u+h)|0}s[0]=s[0]+a|0,s[1]=s[1]+i|0,s[2]=s[2]+n|0,s[3]=s[3]+r|0,s[4]=s[4]+o|0,s[5]=s[5]+c|0,s[6]=s[6]+l|0,s[7]=s[7]+d|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;return e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(a+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Qt=dt._createHelper(Gt),te=dt._createHmacHelper(Gt);class ee extends Gt{_doReset(){this._hash=new nt([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}const se=Gt._createHelper(ee),ae=Gt._createHmacHelper(ee),ie=[new pt(1116352408,3609767458),new pt(1899447441,602891725),new pt(3049323471,3964484399),new pt(3921009573,2173295548),new pt(961987163,4081628472),new pt(1508970993,3053834265),new pt(2453635748,2937671579),new pt(2870763221,3664609560),new pt(3624381080,2734883394),new pt(310598401,1164996542),new pt(607225278,1323610764),new pt(1426881987,3590304994),new pt(1925078388,4068182383),new pt(2162078206,991336113),new pt(2614888103,633803317),new pt(3248222580,3479774868),new pt(3835390401,2666613458),new pt(4022224774,944711139),new pt(264347078,2341262773),new pt(604807628,2007800933),new pt(770255983,1495990901),new pt(1249150122,1856431235),new pt(1555081692,3175218132),new pt(1996064986,2198950837),new pt(2554220882,3999719339),new pt(2821834349,766784016),new pt(2952996808,2566594879),new pt(3210313671,3203337956),new pt(3336571891,1034457026),new pt(3584528711,2466948901),new pt(113926993,3758326383),new pt(338241895,168717936),new pt(666307205,1188179964),new pt(773529912,1546045734),new pt(1294757372,1522805485),new pt(1396182291,2643833823),new pt(1695183700,2343527390),new pt(1986661051,1014477480),new pt(2177026350,1206759142),new pt(2456956037,344077627),new pt(2730485921,1290863460),new pt(2820302411,3158454273),new pt(3259730800,3505952657),new pt(3345764771,106217008),new pt(3516065817,3606008344),new pt(3600352804,1432725776),new pt(4094571909,1467031594),new pt(275423344,851169720),new pt(430227734,3100823752),new pt(506948616,1363258195),new pt(659060556,3750685593),new pt(883997877,3785050280),new pt(958139571,3318307427),new pt(1322822218,3812723403),new pt(1537002063,2003034995),new pt(1747873779,3602036899),new pt(1955562222,1575990012),new pt(2024104815,1125592928),new pt(2227730452,2716904306),new pt(2361852424,442776044),new pt(2428436474,593698344),new pt(2756734187,3733110249),new pt(3204031479,2999351573),new pt(3329325298,3815920427),new pt(3391569614,3928383900),new pt(3515267271,566280711),new pt(3940187606,3454069534),new pt(4118630271,4000239992),new pt(116418474,1914138554),new pt(174292421,2731055270),new pt(289380356,3203993006),new pt(460393269,320620315),new pt(685471733,587496836),new pt(852142971,1086792851),new pt(1017036298,365543100),new pt(1126000580,2618297676),new pt(1288033470,3409855158),new pt(1501505948,4234509866),new pt(1607167915,987167468),new pt(1816402316,1246189591)],ne=[];for(let t=0;t<80;t+=1)ne[t]=new pt;class re extends dt{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new gt([new pt(1779033703,4089235720),new pt(3144134277,2227873595),new pt(1013904242,4271175723),new pt(2773480762,1595750129),new pt(1359893119,2917565137),new pt(2600822924,725511199),new pt(528734635,4215389547),new pt(1541459225,327033209)])}_doProcessBlock(t,e){const s=this._hash.words,a=s[0],i=s[1],n=s[2],r=s[3],o=s[4],c=s[5],l=s[6],d=s[7],h=a.high;let u=a.low;const p=i.high;let g=i.low;const f=n.high;let m=n.low;const y=r.high;let b=r.low;const v=o.high;let $=o.low;const w=c.high;let _=c.low;const C=l.high;let k=l.low;const D=d.high;let S=d.low,x=h,I=u,A=p,T=g,E=f,R=m,z=y,N=b,M=v,L=$,P=w,B=_,O=C,q=k,H=D,U=S;for(let s=0;s<80;s+=1){let a,i;const n=ne[s];if(s<16)n.high=0|t[e+2*s],i=n.high,n.low=0|t[e+2*s+1],a=n.low;else{const t=ne[s-15],e=t.high,r=t.low,o=(e>>>1|r<<31)^(e>>>8|r<<24)^e>>>7,c=(r>>>1|e<<31)^(r>>>8|e<<24)^(r>>>7|e<<25),l=ne[s-2],d=l.high,h=l.low,u=(d>>>19|h<<13)^(d<<3|h>>>29)^d>>>6,p=(h>>>19|d<<13)^(h<<3|d>>>29)^(h>>>6|d<<26),g=ne[s-7],f=g.high,m=g.low,y=ne[s-16],b=y.high,v=y.low;a=c+m,i=o+f+(a>>>0<c>>>0?1:0),a+=p,i=i+u+(a>>>0<p>>>0?1:0),a+=v,i=i+b+(a>>>0<v>>>0?1:0),n.high=i,n.low=a}const r=M&P^~M&O,o=L&B^~L&q,c=x&A^x&E^A&E,l=I&T^I&R^T&R,d=(x>>>28|I<<4)^(x<<30|I>>>2)^(x<<25|I>>>7),h=(I>>>28|x<<4)^(I<<30|x>>>2)^(I<<25|x>>>7),u=(M>>>14|L<<18)^(M>>>18|L<<14)^(M<<23|L>>>9),p=(L>>>14|M<<18)^(L>>>18|M<<14)^(L<<23|M>>>9),g=ie[s],f=g.high,m=g.low;let y=U+p,b=H+u+(y>>>0<U>>>0?1:0);y+=o,b=b+r+(y>>>0<o>>>0?1:0),y+=m,b=b+f+(y>>>0<m>>>0?1:0),y+=a,b=b+i+(y>>>0<a>>>0?1:0);const v=h+l;H=O,U=q,O=P,q=B,P=M,B=L,L=N+y|0,M=z+b+(L>>>0<N>>>0?1:0)|0,z=E,N=R,E=A,R=T,A=x,T=I,I=y+v|0,x=b+(d+c+(v>>>0<h>>>0?1:0))+(I>>>0<y>>>0?1:0)|0}a.low=u+I,u=a.low,a.high=h+x+(u>>>0<I>>>0?1:0),i.low=g+T,g=i.low,i.high=p+A+(g>>>0<T>>>0?1:0),n.low=m+R,m=n.low,n.high=f+E+(m>>>0<R>>>0?1:0),r.low=b+N,b=r.low,r.high=y+z+(b>>>0<N>>>0?1:0),o.low=$+L,$=o.low,o.high=v+M+($>>>0<L>>>0?1:0),c.low=_+B,_=c.low,c.high=w+P+(_>>>0<B>>>0?1:0),l.low=k+q,k=l.low,l.high=C+O+(k>>>0<q>>>0?1:0),d.low=S+U,S=d.low,d.high=D+H+(S>>>0<U>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32,e[30+(a+128>>>10<<5)]=Math.floor(s/4294967296),e[31+(a+128>>>10<<5)]=s,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const oe=dt._createHelper(re),ce=dt._createHmacHelper(re);class le extends re{_doReset(){this._hash=new gt([new pt(3418070365,3238371032),new pt(1654270250,914150663),new pt(2438529370,812702999),new pt(355462360,4144912697),new pt(1731405415,4290775857),new pt(2394180231,1750603025),new pt(3675008525,1694076839),new pt(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}const de=re._createHelper(le),he=re._createHmacHelper(le),ue=[],pe=[],ge=[];let fe=1,me=0;for(let t=0;t<24;t+=1){ue[fe+5*me]=(t+1)*(t+2)/2%64;const e=(2*fe+3*me)%5;fe=me%5,me=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)pe[t+5*e]=e+(2*t+3*e)%5*5;let ye=1;for(let t=0;t<24;t+=1){let e=0,s=0;for(let t=0;t<7;t+=1){if(1&ye){const a=(1<<t)-1;a<32?s^=1<<a:e^=1<<a-32}128&ye?ye=ye<<1^113:ye<<=1}ge[t]=pt.create(e,s)}const be=[];for(let t=0;t<25;t+=1)be[t]=pt.create();class ve extends dt{constructor(t){super(Object.assign({outputLength:512},t))}_doReset(){this._state=[];const t=this._state;for(let e=0;e<25;e+=1)t[e]=new pt;this.blockSize=(1600-2*this.cfg.outputLength)/32}_doProcessBlock(t,e){const s=this._state,a=this.blockSize/2;for(let i=0;i<a;i+=1){let a=t[e+2*i],n=t[e+2*i+1];a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),n=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);const r=s[i];r.high^=n,r.low^=a}for(let t=0;t<24;t+=1){for(let t=0;t<5;t+=1){let e=0,a=0;for(let i=0;i<5;i+=1){const n=s[t+5*i];e^=n.high,a^=n.low}const i=be[t];i.high=e,i.low=a}for(let t=0;t<5;t+=1){const e=be[(t+4)%5],a=be[(t+1)%5],i=a.high,n=a.low,r=e.high^(i<<1|n>>>31),o=e.low^(n<<1|i>>>31);for(let e=0;e<5;e+=1){const a=s[t+5*e];a.high^=r,a.low^=o}}for(let t=1;t<25;t+=1){let e,a;const i=s[t],n=i.high,r=i.low,o=ue[t];o<32?(e=n<<o|r>>>32-o,a=r<<o|n>>>32-o):(e=r<<o-32|n>>>64-o,a=n<<o-32|r>>>64-o);const c=be[pe[t]];c.high=e,c.low=a}const e=be[0],a=s[0];e.high=a.high,e.low=a.low;for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1){const a=t+5*e,i=s[a],n=be[a],r=be[(t+1)%5+5*e],o=be[(t+2)%5+5*e];i.high=n.high^~r.high&o.high,i.low=n.low^~r.low&o.low}const i=s[0],n=ge[t];i.high^=n.high,i.low^=n.low}}_doFinalize(){const t=this._data,e=t.words,s=8*t.sigBytes,a=32*this.blockSize;e[s>>>5]|=1<<24-s%32,e[(Math.ceil((s+1)/a)*a>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();const i=this._state,n=this.cfg.outputLength/8,r=n/8,o=[];for(let t=0;t<r;t+=1){const e=i[t];let s=e.high,a=e.low;s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o.push(a),o.push(s)}return new nt(o,n)}clone(){const t=super.clone.call(this);t._state=this._state.slice(0);const e=t._state;for(let t=0;t<25;t+=1)e[t]=e[t].clone();return t}}const $e=dt._createHelper(ve),we=dt._createHmacHelper(ve),_e=nt.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),Ce=nt.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),ke=nt.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),De=nt.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),Se=nt.create([0,1518500249,1859775393,2400959708,2840853838]),xe=nt.create([1352829926,1548603684,1836072691,2053994217,0]),Ie=(t,e,s)=>t^e^s,Ae=(t,e,s)=>t&e|~t&s,Te=(t,e,s)=>(t|~e)^s,Ee=(t,e,s)=>t&s|e&~s,Re=(t,e,s)=>t^(e|~s),ze=(t,e)=>t<<e|t>>>32-e;class Ne extends dt{_doReset(){this._hash=nt.create([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const s=t;for(let t=0;t<16;t+=1){const a=e+t,i=s[a];s[a]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}const a=this._hash.words,i=Se.words,n=xe.words,r=_e.words,o=Ce.words,c=ke.words,l=De.words;let d,h=a[0],u=a[1],p=a[2],g=a[3],f=a[4],m=a[0],y=a[1],b=a[2],v=a[3],$=a[4];for(let t=0;t<80;t+=1)d=h+s[e+r[t]]|0,d+=t<16?Ie(u,p,g)+i[0]:t<32?Ae(u,p,g)+i[1]:t<48?Te(u,p,g)+i[2]:t<64?Ee(u,p,g)+i[3]:Re(u,p,g)+i[4],d|=0,d=ze(d,c[t]),d=d+f|0,h=f,f=g,g=ze(p,10),p=u,u=d,d=m+s[e+o[t]]|0,d+=t<16?Re(y,b,v)+n[0]:t<32?Ee(y,b,v)+n[1]:t<48?Te(y,b,v)+n[2]:t<64?Ae(y,b,v)+n[3]:Ie(y,b,v)+n[4],d|=0,d=ze(d,l[t]),d=d+$|0,m=$,$=v,v=ze(b,10),b=y,y=d;d=a[1]+p+v|0,a[1]=a[2]+g+$|0,a[2]=a[3]+f+m|0,a[3]=a[4]+h+y|0,a[4]=a[0]+u+b|0,a[0]=d}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(e.length+1),this._process();const i=this._hash,n=i.words;for(let t=0;t<5;t+=1){const e=n[t];n[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return i}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Me=dt._createHelper(Ne),Le=dt._createHmacHelper(Ne);class Pe extends it{constructor(t){super(),this.cfg=Object.assign(new it,{keySize:4,hasher:Ut,iterations:1},t)}compute(t,e){const{cfg:s}=this,a=ht.create(s.hasher,t),i=nt.create(),n=nt.create([1]),r=i.words,o=n.words,{keySize:c,iterations:l}=s;for(;r.length<c;){const t=a.update(e).finalize(n);a.reset();const s=t.words,r=s.length;let c=t;for(let t=1;t<l;t+=1){c=a.finalize(c),a.reset();const t=c.words;for(let e=0;e<r;e+=1)s[e]^=t[e]}i.concat(t),o[0]+=1}return i.sigBytes=4*c,i}}const Be=[],Oe=[],qe=[],He=[],Ue=[],Fe=[],Ve=[],je=[],We=[],Ke=[],Xe=[];for(let t=0;t<256;t+=1)Xe[t]=t<128?t<<1:t<<1^283;let Je=0,Ze=0;for(let t=0;t<256;t+=1){let t=Ze^Ze<<1^Ze<<2^Ze<<3^Ze<<4;t=t>>>8^255&t^99,Be[Je]=t,Oe[t]=Je;const e=Xe[Je],s=Xe[e],a=Xe[s];let i=257*Xe[t]^16843008*t;qe[Je]=i<<24|i>>>8,He[Je]=i<<16|i>>>16,Ue[Je]=i<<8|i>>>24,Fe[Je]=i,i=16843009*a^65537*s^257*e^16843008*Je,Ve[t]=i<<24|i>>>8,je[t]=i<<16|i>>>16,We[t]=i<<8|i>>>24,Ke[t]=i,Je?(Je=e^Xe[Xe[Xe[a^e]]],Ze^=Xe[Xe[Ze]]):(Ze=1,Je=Ze)}const Ye=[0,1,2,4,8,16,32,64,128,27,54];class Ge extends Et{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,s=e.words,a=e.sigBytes/4;this._nRounds=a+6;const i=4*(this._nRounds+1);this._keySchedule=[];const n=this._keySchedule;for(let e=0;e<i;e+=1)e<a?n[e]=s[e]:(t=n[e-1],e%a?a>6&&e%a==4&&(t=Be[t>>>24]<<24|Be[t>>>16&255]<<16|Be[t>>>8&255]<<8|Be[255&t]):(t=t<<8|t>>>24,t=Be[t>>>24]<<24|Be[t>>>16&255]<<16|Be[t>>>8&255]<<8|Be[255&t],t^=Ye[e/a|0]<<24),n[e]=n[e-a]^t);this._invKeySchedule=[];const r=this._invKeySchedule;for(let e=0;e<i;e+=1){const s=i-e;t=e%4?n[s]:n[s-4],r[e]=e<4||s<=4?t:Ve[Be[t>>>24]]^je[Be[t>>>16&255]]^We[Be[t>>>8&255]]^Ke[Be[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,qe,He,Ue,Fe,Be)}decryptBlock(t,e){const s=t;let a=s[e+1];s[e+1]=s[e+3],s[e+3]=a,this._doCryptBlock(s,e,this._invKeySchedule,Ve,je,We,Ke,Oe),a=s[e+1],s[e+1]=s[e+3],s[e+3]=a}_doCryptBlock(t,e,s,a,i,n,r,o){const c=t,l=this._nRounds;let d=c[e]^s[0],h=c[e+1]^s[1],u=c[e+2]^s[2],p=c[e+3]^s[3],g=4;for(let t=1;t<l;t+=1){const t=a[d>>>24]^i[h>>>16&255]^n[u>>>8&255]^r[255&p]^s[g];g+=1;const e=a[h>>>24]^i[u>>>16&255]^n[p>>>8&255]^r[255&d]^s[g];g+=1;const o=a[u>>>24]^i[p>>>16&255]^n[d>>>8&255]^r[255&h]^s[g];g+=1;const c=a[p>>>24]^i[d>>>16&255]^n[h>>>8&255]^r[255&u]^s[g];g+=1,d=t,h=e,u=o,p=c}const f=(o[d>>>24]<<24|o[h>>>16&255]<<16|o[u>>>8&255]<<8|o[255&p])^s[g];g+=1;const m=(o[h>>>24]<<24|o[u>>>16&255]<<16|o[p>>>8&255]<<8|o[255&d])^s[g];g+=1;const y=(o[u>>>24]<<24|o[p>>>16&255]<<16|o[d>>>8&255]<<8|o[255&h])^s[g];g+=1;const b=(o[p>>>24]<<24|o[d>>>16&255]<<16|o[h>>>8&255]<<8|o[255&u])^s[g];g+=1,c[e]=f,c[e+1]=m,c[e+2]=y,c[e+3]=b}}Ge.keySize=8;const Qe=Et._createHelper(Ge),ts=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],es=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],ss=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],as=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],is=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function ns(t,e){const s=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=s,this._lBlock^=s<<t}function rs(t,e){const s=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=s,this._rBlock^=s<<t}class os extends Et{_doReset(){const t=this._key.words,e=[];for(let s=0;s<56;s+=1){const a=ts[s]-1;e[s]=t[a>>>5]>>>31-a%32&1}this._subKeys=[];const s=this._subKeys;for(let t=0;t<16;t+=1){s[t]=[];const a=s[t],i=ss[t];for(let t=0;t<24;t+=1)a[t/6|0]|=e[(es[t]-1+i)%28]<<31-t%6,a[4+(t/6|0)]|=e[28+(es[t+24]-1+i)%28]<<31-t%6;a[0]=a[0]<<1|a[0]>>>31;for(let t=1;t<7;t+=1)a[t]>>>=4*(t-1)+3;a[7]=a[7]<<5|a[7]>>>27}this._invSubKeys=[];const a=this._invSubKeys;for(let t=0;t<16;t+=1)a[t]=s[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,s){const a=t;this._lBlock=t[e],this._rBlock=t[e+1],ns.call(this,4,252645135),ns.call(this,16,65535),rs.call(this,2,858993459),rs.call(this,8,16711935),ns.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=s[t],a=this._lBlock,i=this._rBlock;let n=0;for(let t=0;t<8;t+=1)n|=as[t][((i^e[t])&is[t])>>>0];this._lBlock=i,this._rBlock=a^n}const i=this._lBlock;this._lBlock=this._rBlock,this._rBlock=i,ns.call(this,1,1431655765),rs.call(this,8,16711935),rs.call(this,2,858993459),ns.call(this,16,65535),ns.call(this,4,252645135),a[e]=this._lBlock,a[e+1]=this._rBlock}}os.keySize=2,os.ivSize=2,os.blockSize=2;const cs=Et._createHelper(os);class ls extends Et{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),s=t.length<4?t.slice(0,2):t.slice(2,4),a=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=os.createEncryptor(nt.create(e)),this._des2=os.createEncryptor(nt.create(s)),this._des3=os.createEncryptor(nt.create(a))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}ls.keySize=6,ls.ivSize=2,ls.blockSize=2;const ds=Et._createHelper(ls),hs=[],us=[],ps=[];function gs(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)us[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<us[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<us[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<us[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<us[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<us[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<us[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<us[6]>>>0?1:0)|0,this._b=e[7]>>>0<us[7]>>>0?1:0;for(let s=0;s<8;s+=1){const a=t[s]+e[s],i=65535&a,n=a>>>16,r=((i*i>>>17)+i*n>>>15)+n*n,o=((4294901760&a)*a|0)+((65535&a)*a|0);ps[s]=r^o}t[0]=ps[0]+(ps[7]<<16|ps[7]>>>16)+(ps[6]<<16|ps[6]>>>16)|0,t[1]=ps[1]+(ps[0]<<8|ps[0]>>>24)+ps[7]|0,t[2]=ps[2]+(ps[1]<<16|ps[1]>>>16)+(ps[0]<<16|ps[0]>>>16)|0,t[3]=ps[3]+(ps[2]<<8|ps[2]>>>24)+ps[1]|0,t[4]=ps[4]+(ps[3]<<16|ps[3]>>>16)+(ps[2]<<16|ps[2]>>>16)|0,t[5]=ps[5]+(ps[4]<<8|ps[4]>>>24)+ps[3]|0,t[6]=ps[6]+(ps[5]<<16|ps[5]>>>16)+(ps[4]<<16|ps[4]>>>16)|0,t[7]=ps[7]+(ps[6]<<8|ps[6]>>>24)+ps[5]|0}class fs extends St{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;for(let e=0;e<4;e+=1)t[e]=16711935&(t[e]<<8|t[e]>>>24)|4278255360&(t[e]<<24|t[e]>>>8);this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const s=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const a=this._C;this._b=0;for(let t=0;t<4;t+=1)gs.call(this);for(let t=0;t<8;t+=1)a[t]^=s[t+4&7];if(e){const t=e.words,s=t[0],i=t[1],n=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),o=n>>>16|4294901760&r,c=r<<16|65535&n;a[0]^=n,a[1]^=o,a[2]^=r,a[3]^=c,a[4]^=n,a[5]^=o,a[6]^=r,a[7]^=c;for(let t=0;t<4;t+=1)gs.call(this)}}_doProcessBlock(t,e){const s=t,a=this._X;gs.call(this),hs[0]=a[0]^a[5]>>>16^a[3]<<16,hs[1]=a[2]^a[7]>>>16^a[5]<<16,hs[2]=a[4]^a[1]>>>16^a[7]<<16,hs[3]=a[6]^a[3]>>>16^a[1]<<16;for(let t=0;t<4;t+=1)hs[t]=16711935&(hs[t]<<8|hs[t]>>>24)|4278255360&(hs[t]<<24|hs[t]>>>8),s[e+t]^=hs[t]}}const ms=St._createHelper(fs),ys=[],bs=[],vs=[];function $s(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)bs[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<bs[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<bs[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<bs[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<bs[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<bs[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<bs[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<bs[6]>>>0?1:0)|0,this._b=e[7]>>>0<bs[7]>>>0?1:0;for(let s=0;s<8;s+=1){const a=t[s]+e[s],i=65535&a,n=a>>>16,r=((i*i>>>17)+i*n>>>15)+n*n,o=((4294901760&a)*a|0)+((65535&a)*a|0);vs[s]=r^o}t[0]=vs[0]+(vs[7]<<16|vs[7]>>>16)+(vs[6]<<16|vs[6]>>>16)|0,t[1]=vs[1]+(vs[0]<<8|vs[0]>>>24)+vs[7]|0,t[2]=vs[2]+(vs[1]<<16|vs[1]>>>16)+(vs[0]<<16|vs[0]>>>16)|0,t[3]=vs[3]+(vs[2]<<8|vs[2]>>>24)+vs[1]|0,t[4]=vs[4]+(vs[3]<<16|vs[3]>>>16)+(vs[2]<<16|vs[2]>>>16)|0,t[5]=vs[5]+(vs[4]<<8|vs[4]>>>24)+vs[3]|0,t[6]=vs[6]+(vs[5]<<16|vs[5]>>>16)+(vs[4]<<16|vs[4]>>>16)|0,t[7]=vs[7]+(vs[6]<<8|vs[6]>>>24)+vs[5]|0}class ws extends St{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const s=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const a=this._C;this._b=0;for(let t=0;t<4;t+=1)$s.call(this);for(let t=0;t<8;t+=1)a[t]^=s[t+4&7];if(e){const t=e.words,s=t[0],i=t[1],n=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),o=n>>>16|4294901760&r,c=r<<16|65535&n;a[0]^=n,a[1]^=o,a[2]^=r,a[3]^=c,a[4]^=n,a[5]^=o,a[6]^=r,a[7]^=c;for(let t=0;t<4;t+=1)$s.call(this)}}_doProcessBlock(t,e){const s=t,a=this._X;$s.call(this),ys[0]=a[0]^a[5]>>>16^a[3]<<16,ys[1]=a[2]^a[7]>>>16^a[5]<<16,ys[2]=a[4]^a[1]>>>16^a[7]<<16,ys[3]=a[6]^a[3]>>>16^a[1]<<16;for(let t=0;t<4;t+=1)ys[t]=16711935&(ys[t]<<8|ys[t]>>>24)|4278255360&(ys[t]<<24|ys[t]>>>8),s[e+t]^=ys[t]}}const _s=St._createHelper(ws);function Cs(){const t=this._S;let e=this._i,s=this._j,a=0;for(let i=0;i<4;i+=1){e=(e+1)%256,s=(s+t[e])%256;const n=t[e];t[e]=t[s],t[s]=n,a|=t[(t[e]+t[s])%256]<<24-8*i}return this._i=e,this._j=s,a}class ks extends St{_doReset(){const t=this._key,e=t.words,s=t.sigBytes;this._S=[];const a=this._S;for(let t=0;t<256;t+=1)a[t]=t;for(let t=0,i=0;t<256;t+=1){const n=t%s,r=e[n>>>2]>>>24-n%4*8&255;i=(i+a[t]+r)%256;const o=a[t];a[t]=a[i],a[i]=o}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=Cs.call(this)}}ks.keySize=8,ks.ivSize=0;const Ds=St._createHelper(ks);class Ss extends ks{constructor(...t){super(...t),Object.assign(this.cfg,{drop:192})}_doReset(){super._doReset.call(this);for(let t=this.cfg.drop;t>0;t-=1)Cs.call(this)}}const xs=St._createHelper(Ss);function Is(t,e,s,a){const i=t;let n;const r=this._iv;r?(n=r.slice(0),this._iv=void 0):n=this._prevBlock,a.encryptBlock(n,0);for(let t=0;t<s;t+=1)i[e+t]^=n[t]}class As extends xt{}As.Encryptor=class extends As{processBlock(t,e){const s=this._cipher,{blockSize:a}=s;Is.call(this,t,e,a,s),this._prevBlock=t.slice(e,e+a)}},As.Decryptor=class extends As{processBlock(t,e){const s=this._cipher,{blockSize:a}=s,i=t.slice(e,e+a);Is.call(this,t,e,a,s),this._prevBlock=i}};class Ts extends xt{}Ts.Encryptor=class extends Ts{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._counter;n&&(this._counter=n.slice(0),r=this._counter,this._iv=void 0);const o=r.slice(0);a.encryptBlock(o,0),r[i-1]=r[i-1]+1|0;for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Ts.Decryptor=Ts.Encryptor;const Es=t=>{let e=t;if(255==(t>>24&255)){let s=t>>16&255,a=t>>8&255,i=255&t;255===s?(s=0,255===a?(a=0,255===i?i=0:i+=1):a+=1):s+=1,e=0,e+=s<<16,e+=a<<8,e+=i}else e+=1<<24;return e};
/** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
class Rs extends xt{}Rs.Encryptor=class extends Rs{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._counter;n&&(this._counter=n.slice(0),r=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=Es(e[0]),0===e[0]&&(e[1]=Es(e[1]))})(r);const o=r.slice(0);a.encryptBlock(o,0);for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Rs.Decryptor=Rs.Encryptor;class zs extends xt{}zs.Encryptor=class extends zs{processBlock(t,e){this._cipher.encryptBlock(t,e)}},zs.Decryptor=class extends zs{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class Ns extends xt{}Ns.Encryptor=class extends Ns{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._keystream;n&&(this._keystream=n.slice(0),r=this._keystream,this._iv=void 0),a.encryptBlock(r,0);for(let t=0;t<i;t+=1)s[e+t]^=r[t]}},Ns.Decryptor=Ns.Encryptor;const Ms={pad(t,e){const s=4*e,a=s-t.sigBytes%s;t.concat(nt.random(a-1)).concat(nt.create([a<<24],1))},unpad(t){const e=t,s=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=s}},Ls={pad(t,e){const s=t,a=4*e;s.clamp(),s.sigBytes+=a-(t.sigBytes%a||a)},unpad(t){const e=t,s=e.words;for(let t=e.sigBytes-1;t>=0;t-=1)if(s[t>>>2]>>>24-t%4*8&255){e.sigBytes=t+1;break}}},Ps={pad(t,e){t.concat(nt.create([2147483648],1)),Ls.pad(t,e)},unpad(t){const e=t;Ls.unpad(e),e.sigBytes-=1}},Bs={stringify:t=>t.ciphertext.toString(rt),parse(t){const e=rt.parse(t);return Rt.create({ciphertext:e})}};var Os={lib:{Base:it,WordArray:nt,BufferedBlockAlgorithm:lt,Hasher:dt,Cipher:Dt,StreamCipher:St,BlockCipherMode:xt,BlockCipher:Et,CipherParams:Rt,SerializableCipher:Nt,PasswordBasedCipher:Lt},x64:{Word:pt,WordArray:gt},enc:{Hex:rt,Latin1:ot,Utf8:ct,Utf16:Ot,Utf16BE:Bt,Utf16LE:qt,Base64:ft},algo:{HMAC:ht,MD5:wt,SHA1:Ut,SHA224:ee,SHA256:Gt,SHA384:le,SHA512:re,SHA3:ve,RIPEMD160:Ne,PBKDF2:Pe,EvpKDF:kt,AES:Ge,DES:os,TripleDES:ls,Rabbit:fs,RabbitLegacy:ws,RC4:ks,RC4Drop:Ss},mode:{CBC:At,CFB:As,CTR:Ts,CTRGladman:Rs,ECB:zs,OFB:Ns},pad:{Pkcs7:Tt,AnsiX923:{pad(t,e){const s=t,a=s.sigBytes,i=4*e,n=i-a%i,r=a+n-1;s.clamp(),s.words[r>>>2]|=n<<24-r%4*8,s.sigBytes+=n},unpad(t){const e=t,s=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=s}},Iso10126:Ms,Iso97971:Ps,NoPadding:{pad(){},unpad(){}},ZeroPadding:Ls},format:{OpenSSL:zt,Hex:Bs},kdf:{OpenSSL:Mt},MD5:_t,HmacMD5:Ct,SHA1:Ft,HmacSHA1:Vt,SHA224:se,HmacSHA224:ae,SHA256:Qt,HmacSHA256:te,SHA384:de,HmacSHA384:he,SHA512:oe,HmacSHA512:ce,SHA3:$e,HmacSHA3:we,RIPEMD160:Me,HmacRIPEMD160:Le,PBKDF2:(t,e,s)=>Pe.create(s).compute(t,e),EvpKDF:(t,e,s)=>kt.create(s).compute(t,e),AES:Qe,DES:cs,TripleDES:ds,Rabbit:ms,RabbitLegacy:_s,RC4:Ds,RC4Drop:xs};const qs=t=>`0${t}`.slice(-2),Hs=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},Us=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",Fs=(t,e,s,a,i)=>{if("string"!=typeof e)return;if(a){const t=js(a,e);if(t===i||`${t}`==`${i}`||null===t&&""===i)return}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=i);if(!s)return void Vs(t,e,i);const r={};let o=e.substring(0,n);r[e.substring(n+1)]=i;const c=o.indexOf("(");if(-1===c)s.push({instruction:"UPDATE",target:o,content:r});else{const t=o.substring(c+1,o.length-1);o=o.substring(0,c),s.push({instruction:"UPDATE",target:o,listIndex:parseInt(t,10),content:r})}},Vs=(t,e,s)=>{if("string"!=typeof e)return;const a=e.split(".");let i=t;for(const t in a){let e=a[t];const n=e.indexOf("(");if(-1===n)t<a.length-1?void 0===i[e]&&(i[e]={}):i[e]=s,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let s=i[e].length;s<t;s++)i[e].push({});i=i[e][t-1]}}},js=(t,e)=>{if("string"!=typeof e)return null;let s=t;const a=e.split(".");for(const t in a){const e=a[t],i=e.indexOf("(");if(-1===i){if(void 0===s[e])return null;s=s[e]}else{const t=e.substring(i+1,e.length-1),a=s[e.substring(0,i)];if(!(a&&Array.isArray(a)&&a.length>=t))return null;s=a[t-1]}}return s},Ws=t=>{for(const e in t)"object"==typeof t[e]?Ws(t[e]):"string"==typeof t[e]&&(t[e]="")},Ks=(t,e)=>{for(const s in t)if("fieldID"===s)e.push(t.fieldID);else{const a=t[s];a.fieldID?e.push(a.fieldID):"object"==typeof a&&Ks(a,e)}},Xs=(t,e,s)=>{let a=js(t,e);if(null===a&&(a=[],Vs(t,e,a)),!Array.isArray(a))return null;if(s&&"string"==typeof s){const t={},i=s.split(",");for(const e in i)t[i[e]]="";return a.push(t),{instruction:"APPEND",target:e,content:t}}if(0===a.length)return null;const i={...a[0]};return Ws(i),a.push(i),{instruction:"APPEND",target:e,content:i}},Js=(t,e)=>{let s,a=e;-1!==e.indexOf(").pyTemplate")&&(s=parseInt(a.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),a=a.substring(0,e.lastIndexOf("(")));const i=js(t,a);if(!Array.isArray(i))return null;if(1===i.length){for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="");return null}return s?i.length<s?null:(i.splice(s-1,1),{instruction:"DELETE",target:a,listIndex:s}):(i.length-=1,{instruction:"DELETE",target:a,listIndex:i.length})},Zs=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return!(!s||"postValue"!==s&&0!==s.indexOf("refresh"))},Ys=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return s&&0===s.indexOf("refresh")?s.replace("refresh-",""):""};function Gs(t,e,s){try{switch(e){case">":return parseInt(t,10)>parseInt(s,10);case"<":return parseInt(t,10)<parseInt(s,10);case">=":return parseInt(t,10)>=parseInt(s,10);case"<=":return parseInt(t,10)<=parseInt(s,10);case"==":return`${t}`==`${s}`;case"!=":return`${t}`!=`${s}`}}catch(t){}return!1}const Qs=(t,e)=>{const s=t.replace("@E ","").split("&&");for(const t in s){const a=s[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===a.length){const t=e[a[0].substring(1)];if(void 0!==t&&!Gs(t,a[1],a[2].replace(/^'|'$/g,"")))return!1}}return!0},ta=(t,e,s,a)=>{for(const n of t.elements)if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName){const t=n.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===n.tagName){const r=n.getAttribute("type");if(n.classList.contains("input-date-day")||n.classList.contains("input-date-month")||n.classList.contains("input-date-year")){if(n.classList.contains("input-date-day")){const r=n.closest(".input-date").parentNode,o=r.querySelector(".input-date-month"),c=r.querySelector(".input-date-year");if(null!==o&&null!==c&&""!==n.value&&""!==o.value&&""!==c.value){const r=`${qs(o.value)}/${qs(n.value)}/${i=c.value,`0${i}`.slice(-4)}`;Fs(e,t,s,a,r)}}}else if("checkbox"===r)Fs(e,t,s,a,n.checked);else if("radio"===r)n.checked&&Fs(e,t,s,a,n.value);else if("tel"===r){let i=n.value;"SELECT"===n.parentNode.firstElementChild.tagName&&"field-countrycode"===n.parentNode.firstElementChild.className&&(i=n.parentNode.firstElementChild.value+i),Fs(e,t,s,a,i)}else if("date"===r){let i;n.valueAsDate&&(i=new Date(n.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(n.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),Fs(e,t,s,a,`${qs(i.getMonth()+1)}/${qs(i.getDate())}/${i.getFullYear()}`)):Fs(e,t,s,a,n.value)}else Fs(e,t,s,a,n.value)}else Fs(e,t,s,a,n.value)}var i,n;if(t&&t.querySelectorAll){const i=t.querySelectorAll("[contenteditable]");for(let t=0;t<i.length;t++){const r=i[t],o=r.getAttribute("data-ref");Fs(e,o,s,a,(n=r.innerHTML)&&"string"==typeof n?n.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}},ea=(t,e,s)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=`.${a.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){s.setInlineError(a,e[i].ValidationMessage);break}if(e[i].erroneousInputOutputFieldInPage===t){s.setInlineError(a,e[i].localizedValue);break}}}},sa=(t,e)=>{const s=e||[],a={};for(const[e,i]of Object.entries(t))if("string"==typeof i||"boolean"==typeof i)a[e]=i;else if("object"==typeof i&&Array.isArray(i))for(const t in i){const a={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:i[t]};s.push(a)}return{pageInstructions:s,pageupdate:a}},aa=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,ia=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,na=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,ra=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,oa=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,ca=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const s of t.control.actionSets)if(s.events.length>0&&s.actions.length>0&&s.events[0].event===e){let t=s.actions[0].action;return"refresh"===t&&""!==s.actions[0].refreshFor&&(t+=`-${s.actions[0].refreshFor}`),t}},la=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,da=(t,e,s)=>{if(void 0===e)return null;const a=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===s?""!==t.label||!0===t.showLabel?B`<div class="field-caption dataLabelForWrite ${a}">${Us(t.label)}</div>`:null:"field-text"===s&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?B`<label class="field-caption dataLabelForWrite">${Us(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?B`<label class="field-caption dataLabelForWrite ${a}" for="${st(e)}">${Us(t.label)}</label>`:null},ha=(t,e,s,a)=>void 0===e?B`
      ${a}
    `:"field-button"!==s||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===s?B`
    <div class="flex content-item field-item ${s}"><fieldset><legend>${da(t,e,s)}</legend>${a}</fielset></div>
  `:"field-checkbox"===s?B`
    <div class="flex content-item field-item ${s}">${a}</div>
  `:B`
    <div class="flex content-item field-item ${s}">${da(t,e,s)}${a}</div>
  `:null,ua=(t,e,s)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===s||!0===t.readOnly||"pxHidden"===t.control.type)return ha(t,e,"field-text",pa(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return ha(t,e,"field-textinput",ga(t,e));case"pxInteger":case"pxNumber":return ha(t,e,"field-numberinput",ma(t,e));case"pxCurrency":return ha(t,e,"field-currencyinput",ya(t,e));case"pxEmail":return ha(t,e,"field-emailinput",ba(t,e));case"pxTextArea":return ha(t,e,"field-textarea",va(t,e));case"pxRadioButtons":return ha(t,e,"field-radiogroup",xa(t,e));case"pxCheckbox":return ha(t,e,"field-checkbox",Ia(t,e));case"pxDropdown":return ha(t,e,"field-dropdown",Aa(t,e));case"pxDisplayText":return ha(t,e,"field-text",pa(t,e));case"pxIcon":return ha(t,e,"field-icon",$a(t,e));case"pxLink":case"pxURL":return ha(t,e,"field-url",wa(t,e));case"pxIconDeleteItem":return ha(t,e,"field-button",Ca(t,e));case"pxButton":return ha(t,e,"field-button",_a(t,e));case"pxDateTime":return"TimeOfDay"===t.type?ha(t,e,"field-time",Sa(t,e)):"Date"===t.type?ha(t,e,"field-date",Da(t,e)):ha(t,e,"field-datetime",ka(t,e));case"pxAutoComplete":return ha(t,e,"field-combobox",Ta(t,e));case"pxSlider":return ha(t,e,"field-slider",fa(t,e));default:return null}},pa=(t,e)=>{if("pxDate"===t.control.type){let s=Hs(t.value);if(s)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}s=new Intl.DateTimeFormat([],e).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return B`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${s}</span>
    `}if("pxDateTime"===t.control.type){let s=Hs(t.value);if(s)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateTimeFormat){case"DateTime-Short-YYYY":e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};break;default:e={}}s=new Intl.DateTimeFormat([],e).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return B`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${s}</span>
    `}if("pxTime"===t.control.type){let s=Hs(t.value);if(s)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],t).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return B`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${s}</span>
    `}if("pxHidden"===t.control.type)return B`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${st(e)}" value="${Us(t.value)}"/>
    `;let s=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===s&&(s=e.value);return"pxCurrency"===t.control.type&&(s=`$${s}`),B`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${Us(s)}</span>
  `},ga=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${st(e)}"
    value="${Us(t.value)}"
    data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
  />
`,fa=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${st(e)}"
    value="${Us(t.value)}"
    data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
  />
`,ma=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
  />
`,ya=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
  />
`,ba=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
  />
`,va=(t,e)=>B`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${st(e)}"
    data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
  >
${Us(t.value)}</textarea
  >
`,$a=(t,e)=>B`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${st(e)}"
    value="${t.value}"
  />
`,wa=(t,e)=>B`
  <a id="${st(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,_a=(t,e)=>{const s=ca(t,"click");return"deleteRow"===s?Ca(t,e):B`
  <button
  type='button' 
    class="${st(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${st(e)}"
    data-ref="${st(la(t))}"
    data-action-click="${st(s)}"
  >${t.control.label}</button>`},Ca=(t,e)=>B`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${st(e)}"
    data-ref="${st(la(t))}"
    data-action-click="deleteRow"
  >${na()}</button>
`,ka=(t,e)=>{let s=t.value;if(""!==s){let e=Hs(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${qs(e.getMonth()+1)}-${qs(e.getDate())}T${qs(e.getHours())}:${qs(e.getMinutes())}`):8===t.value.length&&(s=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${st(e)}"
      value="${s}"
      data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
    />
  `},Da=(t,e)=>{let s=t.value;if(""!==s){let e=Hs(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${qs(e.getMonth()+1)}-${qs(e.getDate())}`):8===t.value.length&&(s=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${st(e)}"
      value="${s}"
      data-action-change="${st(ca(t,"change"))}"
    data-action-click="${st(ca(t,"click"))}"
    />
  `},Sa=(t,e)=>{let s=t.value;if(""!==s){let e=Hs(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${qs(e.getHours())}-${qs(e.getMinutes())}-${qs(e.getSeconds())}`):8===t.value.length&&(s=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${st(e)}"
      value="${s}"
      data-action-change="${st(ca(t,"change"))}"
      data-action-click="${st(ca(t,"click"))}"
    />
  `},xa=(t,e)=>{let s;return t.control&&t.control.modes&&t.control.modes[0].options?s=t.control.modes[0].options:"True-False"===t.type&&(s=[{value:"true"},{value:"false"}]),void 0===s?null:B`
    ${s.map(((s,a)=>{const i=`rb-${e}-${a}`;return B`
        <div>
          <input
            data-ref="${t.reference}"
            name=${st(e)}
            id="${i}"
            type="radio"
            value="${s.key}"
            ?required="${!0===t.required}"
            ?checked="${s.key===t.value}"
            data-action-change="${st(ca(t,"change"))}"
          />
          <label for="${i}">${s.value}</label>
        </div>
      `}))}
  `},Ia=(t,e)=>B`
  <input
  data-ref="${t.reference}" 
  id="${st(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${st(ca(t,"change"))}"
  data-action-click="${st(ca(t,"click"))}"
  />
  <label for="${st(e)}">${t.control.label}</label>
`,Aa=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?B`<select
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(ca(t,"change"))}"
      data-action-click="${st(ca(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>B`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:B`<input
      type='text'
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(ca(t,"change"))}"
      data-action-click="${st(ca(t,"click"))}">
      </input>`,Ta=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return B`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${st(e)}"
        value="${Us(t.value)}"
        data-action-change="${st(ca(t,"change"))}"
        data-action-click="${st(ca(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>B`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let s="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(s=t.control.modes[0].dataPageID),B`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${s}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${st(e)}"
      value="${t.value}"
      data-action-change="${st(ca(t,"change"))}"
      data-action-click="${st(ca(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},Ea=t=>""!==t.title?B`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Ra=(t,e)=>{let s=t.fieldListID;if(void 0!==t.reference&&(s=t.reference),"."===s.charAt(0)&&(s=s.substring(1)),t.newRow&&!0!==e){const e=[];return Ks(t.newRow,e),B`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${st(e.join())}"
        data-ref=${s} data-action-click="addRow">${aa()}Add item</button>
      </div>
    `}return null},za=t=>B`
  ${t.map((t=>B`
    <th scope='col'>${t.caption?B`${t.caption.value}`:""}</th>`))}
`,Na=t=>B`
  ${t.map((t=>B`
    <tr>
      ${t.groups.map((t=>B`
      <td>${ua(t.field)}</td>`))}
    </tr>`))}
`,Ma=()=>B`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,La=(t,e,s,a,i)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const r=document.createElement("div");n.appendChild(r);const o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',c=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",d),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove()),i&&i()},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}c()}},d=t=>{if("Escape"===t.key)return void l(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=n.querySelectorAll(o),s=e[e.length-1],a=e[0];t.shiftKey?document.activeElement===a&&(s.focus(),t.preventDefault()):document.activeElement===s&&(a.focus(),t.preventDefault())};return B`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)c();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),a(r);n.querySelectorAll(o)[0].focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",d),n.offsetHeight,n.style=""}else c()}}" class="pzhc pzbutton ${s}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`},Pa=(t,e,s,a,i)=>{if(null==a)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",l),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(a(t),c())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&a(t),c()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(a(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),L(s(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",l)):c()};return B`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${i||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},Ba=(t,e,s,a)=>La(t,e,s,(t=>{L(Oa(t,[]),t),a(t)})),Oa=(t,e,s,a,i)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let s=e[n].fileName;if(void 0===s&&(s=e[n].name),void 0===s&&(s=e[n].pyAttachName),!s)return;const a=window.document.createElement("a");if("Correspondence"===e[n].category){s=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});a.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),s=e.length,a=new Uint8Array(s);for(let t=0;t<s;t++){const s=e.charCodeAt(t);a[t]=s}return a}(t),s=new Blob([e],{type:"octet/stream"});a.href=window.URL.createObjectURL(s)}a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)},o=t=>{t.stopPropagation();const s=t.target;n=s.getAttribute("data-id"),a.fetchData.call(a,"attachment",{id:e[n].ID,target:r})},c=s=>{s.preventDefault(),s.stopPropagation();const i=s.target.closest("button");n=i.getAttribute("data-id"),a.sendData.call(a,"deleteattachment",{id:e[n].ID,target:t})},l=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),i.splice(n,1),L(Oa(t,e,s,a,i),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},h=e=>{e.preventDefault();const s=e.target,a=e.relatedTarget,i=null===s?null:s.closest(".attach-files"),n=null===a?null:a.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const a=e.dataTransfer.files;t||(t=s.closest(".attach-files")),p(s,a)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<i.length;n++){const r=i[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),a.sendData.call(a,"attachments",{id:s,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),a.sendData.call(a,"uploadattachment",{actionid:r,target:t}))}L(Oa(t,e,s,a),t)},p=(i,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let s=e.name.lastIndexOf(".");-1===s&&(s=e.name.length),e.displayName=e.name.substring(0,s),e.extension=e.name.substring(s+1),e.editing=!0,e.category="File",r.push(e)}L(Oa(t,e,s,a,r),t)},g=e=>{e.stopPropagation();let s=e.target;if("BUTTON"===s.tagName)return s=e.target.parentNode.parentNode.firstElementChild,void s.click();t||(t=s.closest(".attach-files")),p(s,s.files)},f=i=>{i.stopPropagation();L(Oa(t,e,s,a,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=i=>{i.stopPropagation(),L(Oa(t,e,s,a),t)},y=(t,e)=>{let s=new Date(e.createTime);return s=s.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),B`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":B`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${s}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},b=()=>B`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=i=>{let o=i.target;if(i.path&&i.path.length>0?o=i.path[0]:i.originalTarget&&(o=i.originalTarget),o){const i=o.getAttribute("data-value"),c=e[n].pzInsKey||e[n].ID;"Download"===i?a.fetchData.call(a,"attachment",{id:c,target:r}):"Delete"===i&&(a.sendData.call(a,"deleteattachment",{id:c,target:t}),L(Oa(void 0,[],s,a,[]),t))}},$=t=>B`<div class='row-item'>
    <span class='doc-icon'>${oa()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${Pa(B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",b,v,"button-action")}
  </div>`,w=(t,e)=>e.loading?B`${y(t,e)}${Ma()}`:e.editing?"URL"===e.type?B`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:B`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}" 
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>B`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${a.attachmentcategories.map((t=>B`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' 
      aria-label=${i18n.t("Delete")}>${na()}</button>`:B`${y(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' 
    aria-label=${i18n.t("Delete")}>${na()}</button>`,_=t=>{if(!s)return Ma();const e=[];if(void 0!==t){const s=Object.entries(t);for(const t of s){let s=t[1].extension;void 0===s&&(s=t[1].type),s||(s=""),s.length>5&&(s=s.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(B`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${w(t[0],t[1])}
            </div>`):e.push(B`<div class='row-item'>
              <span class='doc-icon'>${oa()}<span>${s}</span></span>
              ${w(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:B`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),$(e[0])}return B`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${ra()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return a.sendData.call(a,"uploadattachment",{actionid:i[0],target:t}),C=i[0],k=!0,B`<div class='row-item'>
    <span class='doc-icon'>${oa()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${k?B`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return $(e[0])}var C,k;let D="Attachments";return void 0!==i&&i.length>0&&(D="URL"===i[0].type?"Attach a link":"Attach files"),B`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(D)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${ia()}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?B`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${_(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:B`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${ra()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")} 
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${_(e)}
      </form>
    `}
  `},qa=(t,e)=>B`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${ia()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`,Ha=(t,e,s,a)=>B`
  ${t.map(((t,i)=>{const n=`${e}-${i}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),i=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return B`
          <div class="${i}">${Ha(t.layout.view.groups,n,s,a)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=B`<h2>${t.layout.title}</h2>`;break;case"h3":e=B`<h3>${t.layout.title}</h3>`;break;case"h4":e=B`<h4>${t.layout.title}</h4>`;break;default:e=B`<h2>${t.layout.title}</h2>`}return B`
        ${e}<div class="${i}">${Ha(t.layout.groups,n,s,a)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,s)=>B`
  ${Ea(t.layout)}
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${za(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Na(t.layout.rows)}
    </tbody>
  </table>
  ${Ra(t.layout,s)}
`)(t,0,s):Ua(t,n,s):null}if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return Ba("Upload file","Upload file","",a.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=a.actionID;return((t,e,s)=>{const a=t.control.actionSets[0].actions[0].actionProcess.localAction,i=t.control.actionSets[0].actions[0].actionProcess.target,n=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===i){const i=s=>{L(qa(t.control.label,Ma()),s),e(a,s)};return La(a,t.control.label,n,i,s)}return B`<div><button type="button" @click="${()=>{e(a)}}" class="pzhc pzbutton ${n}">${i18n.t(t.control.label)}</button></<div>`})(t.field,a.displayLocalAction,(()=>{a.reloadAssignment(e)}))}return ua(t.field,n,s)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?Ba("Upload file","Upload file","",a.displayAttachments):Ha(t.view.groups,n,s,a):null}))}
`,Ua=(t,e,s)=>B`
  ${Ea(t.layout)}
  <div class="rdl">
    ${Fa(t.layout.rows,e,s)}
  </div>
  ${Ra(t.layout,s)}
`,Fa=(t,e,s)=>B`
  ${t.map(((t,a)=>{const i=`${e}-row${a}`;return t.groups?B`
        <div>
          ${Ha(t.groups,i,s)}
        </div>
      `:null}))}
`,Va=(t,e,s,a,i,n,r,o,c)=>{const l=B`${ra()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&s.content)return B`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${s.content.pyLabel} <span>(${s.content.pyID})</span></h2>
      ${""!==a?B`<span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?Ba("Attachments",l,"Simple",c):""}
        ${s.actions&&s.actions.length>0?B`
          ${Pa("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?B`
  <h3>
    Assignments
  </h3>
  <table>
      <caption class='sr-only'>List of assignments</caption>
      <thead>
      <tr>
        <th span='col'>Priority</th>
        <th span='col'>Task</th>
        <th span='col'>Assigned to</th>
        <th span='col' class="right-aligned">Action</th>
      </tr>
      </thead>
      <tbody>
        ${t.map((t=>B`
        <tr>
          <td>${t.urgency}</td>
          <td>${""!==t.instructions?t.instructions:t.name}</td>
          <td>${t.routedTo}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(s.assignments,o)}
    ${((t,e)=>t&&0!==t.length?B`
  <h3>
    ${i18n.t("Related cases")}
  </h3>
  <table>
    <thead>
      <tr>
        <th span='col'>${i18n.t("ID")}</th>
        <th span='col' class="right-aligned">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>B`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(s.childCases,o)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} <span>(${d})</span></h2>
    ${""!==a?B`<span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?Ba("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?B`
        ${Pa("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},ja=(t,e,s,a,i)=>B`
  <div class="flex layout-content-stacked">${Ha(t,e,!1,i)}</div>
  ${((t,e)=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?B`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(s,a)}
`,Wa=(t,e,s,a)=>B`
  <div class="flex layout-content-stacked">${Ha(t,e,!0,a)}</div>
  ${(t=>null===t?null:B`
  <div class="action-button-area">
  ${null!==t?B`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(s)}
`,Ka=(t,e,s,a,i)=>B`
  <div class="flex layout-content-stacked">${Ha(t,e,!1,i)}</div>
  ${((t,e)=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(s,a)}
`,Xa=(t,e,s,a)=>B`
  <div class="flex layout-content-stacked">${Ha(t,e,!1,a)}</div>
  ${(t=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(s)}
`,Ja=t=>t.errorDetails?B`
    <ul>
      ${t.errorDetails.map((t=>B`<li>${t.localizedValue}</li>`))}
    </ul>`:B`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?B`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:B`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`,Za=(t,e)=>{const s=[],a=Object.entries(e.actions);for(const e of a)e[1].name!==t&&s.push(B`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return B`
    ${s}
  `},Ya=t=>B`
${t.pxResults.map((t=>B`
    <option>
      ${t.pyUserName}
    </option>`))}`;class Ga extends tt{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let s=e;if(0===s.indexOf("@L ")&&(s=s.substring(3)),s=s.replace(/^"|"$/g,"").trim(),s=Us(s),"object"!=typeof t.langTokens)return s;const a=t.langTokens[s];return a&&""!==a?a.trim():(console.log(s),s)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&L(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{msg:t}}))}}class Qa extends Ga{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:s,actionid:a,target:i,element:n}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${s}`;break;case"assignment":c+=`assignments/${s}`;break;case"case":c+=`cases/${s}`;break;case"data":c+=`data/${s}`;break;case"page":c+=`cases/${s}/pages/${a}`;break;case"view":c+=`cases/${s}/views/${a}`;break;case"assignmentaction":c+=`assignments/${s}/actions/${a}`;break;case"caseaction":c+=`cases/${s}/actions/${a}`;break;case"attachment":c+=`attachments/${s}`;break;case"attachments":c+=`cases/${s}/attachments`;break;case"attachmentcategories":c+=`cases/${s}/attachment_categories`}fetch(c,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),i&&(i.disabled=!1,i.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:s,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[s]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}L(Ya(e),n.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();L(Ka(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();i?(this.actionID=a,L(qa(e.name,ja(e.view.groups,"Obj",this.actionAreaCancel,null,this)),i),i.focus()):(this.name=e.name,this.requestUpdate(),L(ja(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus());break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}L(ja(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===a?(this.name=e.name,L(Wa(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,L(ja(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!r){console.error("Error: case data are not present when retrieving the newwork");break}L(Xa(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const a=e[t];if("object"==typeof a)"radio"===s.type?s.value===a.value&&(s.checked=!0):"checkbox"===s.type?!0!==a.value&&"true"!==a.value||(s.checked=!0):a.value&&(s.value=a.value),a.disabled&&(s.disabled=!0);else if("datetime-local"===s.type)24===a.length?s.value=a.substring(0,23):s.value=a;else if("date"===s.type){let a;s.valueAsDate&&(a=new Date(s.valueAsDate)),a&&a instanceof Date&&a.getTime()==a.getTime()||(a=new Date(s.value)),a&&a instanceof Date&&a.getTime()==a.getTime()?(a=new Date(a.getTime()+6e4*a.getTimezoneOffset()),Vs(e,t,`${qs(a.getMonth()+1)}/${qs(a.getDate())}/${a.getFullYear()}`)):Vs(e,t,s.value)}else"string"==typeof a?"radio"===s.type?s.value===a&&(s.checked=!0):"checkbox"===s.type?"true"===a&&(s.checked=!0):s.value=a:"boolean"==typeof a&&"checkbox"===s.type?!0===a&&(s.checked=!0):s.value=a}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&L(Oa(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,s){const{id:a,actionid:i,target:n,refreshFor:r}=e;let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const c={"Content-Type":"application/json;charset=UTF-8",Authorization:o},l={method:"POST",headers:c,mode:"cors"},{pageInstructions:d,pageupdate:h}=sa(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",l.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:a});break;case"submitassignment":l.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${a}?actionID=${i}`;break;case"savecase":u+=`cases/${a}`,i&&""!==i&&(u+=`?actionID=${i}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${a}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${a}/actions/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${a}/actions/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete c["Content-Type"];const t=new FormData;t.append("File",i,i.name),l.body=t;break;case"attachments":u+=`cases/${a}/attachments`,l.body=JSON.stringify({attachments:i});break;case"deleteattachment":u+=`attachments/${a}`,l.method="DELETE"}fetch(u,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(n&&"modalcontent"===n.id)ea(n,e.errors[0].ValidationMessages,this),L(Ja(e),n.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");ea(t,e.errors[0].ValidationMessages,this),this.validationMsg=Ja(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&"BUTTON"===n.tagName&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const a=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!a)return void console.error("Error: case data are not present");L("refreshnew"===t?Xa(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):ja(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),a)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:n}),s)return void s()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const s=i.name.substring(t+1),a=[{type:"File",category:i.category,fileType:s,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:a,target:n})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(a&&(L(Ma(),a),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(a&&(L(Ma(),a),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const ti=(t,e,s,a)=>B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(t)} <span>(${e})</span></h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>
    ${a?B`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Ba("Attachments",ra(),"Simple",a)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <h3>${i18n.t("Case information")}</h3>
  <div id="case-data">${Ma()}</div>`,ei=(t,e)=>B`
  <div class="error">${t}
  ${null!=e?B`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${ia()}</button>`:""}
  </div>`,si=(t,e,s,a,i,n)=>B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
      ${e.length>0?B`<span>(${e.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${a}">${i18n.t("Refresh")}</button>
      ${Pa("Create","Create a new case",s,i)}
    </div>
  </div>
  ${e.length>0?B`
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t("My worklist")}</caption>
          <thead>
            <tr>
              <th span='col'>${i18n.t("Name")}</th>
              <th span='col'>${i18n.t("Case ID")}</th>
              <th span='col' class="right-aligned">${i18n.t("Urgency")}</th>
              <th span='col' class="right-aligned">${i18n.t("Action")}</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>B`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:B`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`;class ai extends Qa{displayContent(){return""!==this.errorMsg?ei(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?ti(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?B`
        ${Va(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Ma()}</form>
      `:"workList"===this.action?si(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("worklist"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(ta(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",ta(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],s=Object.entries(t);for(const t of s)"true"===t[1].canCreate&&e.push(B`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return B`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?Za(this.name,this.data):this.casedata.actions?Za(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");if(s&&(ta(s,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const s=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,s.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");ta(e,this.content,this.pageInstructions,this.casedata.content),e.checkValidity()?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):e.reportValidity()}else{const t=this.getRenderRoot().querySelector("#case-data");ta(t,this.content,this.pageInstructions,this.casedata.content),t.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):t.reportValidity()}return!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const s=this.getRenderRoot().querySelector("#case-data");null!=s&&L(Ma(),s)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(Ma(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?L(Ya(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};setInlineError=(t,e)=>{t.setCustomValidity(Us(e)),t.classList.add("error-field"),t.reportValidity()};refreshAssignment=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");let a=t;if(s){if(ta(s,this.content,this.pageInstructions,this.casedata.content),a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=Xs(this.casedata.content,e,a.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=Js(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const s=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Zs(e,"click")?(this.refreshAssignment(e,Ys(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===s||"deleteRow"===s)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Zs(e,"change")&&this.refreshAssignment(e,Ys(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-light",class extends ai{createRenderRoot(){return this}getRenderRoot(){return this}render(){return B`
      ${this.displayContent()}
    `}});const ii=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`,ni=(t,e)=>{const{urlparam:s,verifier:a}=(()=>{const t=`${Os.lib.WordArray.random(16)}`;return{urlparam:`response_type=code&scope=openid&code_challenge=${Os.SHA256(t)}&code_challenge_method=S256&response_mode=query&authentication_service=pega`,verifier:t}})(),i=`${t}/PRRestService/oauth2/v1/authorize?client_id=${e}&redirect_uri=${encodeURIComponent(ii())}&${s}&state=${a}`,n=B`<Button class="pzhc pzbutton" onclick="window.location='${i}'; return false;">${i18n.t("Pega with full page redirect")}</Button>`,r=B`<Button class="pzhc pzbutton" onclick="n=window.open('${i}', 'foo', 'width=600,height=600');n.focus(); return false;">
  ${i18n.t("Pega with popup")}</Button>`;return B`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${r}${n}</div></div>`};class ri extends Ga{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("portal"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(ta(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",ta(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");return ta(s,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(s)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(s),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const s=this.getRenderRoot().querySelector("#case-data");null!=s&&L(this.genLoadingIndicator(),s)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?L(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let s=t;if(e){if(s){"path"===s.tagName&&(s=s.parentNode),"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=Xs(this.data.data.caseInfo.content,e,s.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=Js(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}ta(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:s,actionid:a,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${s}`;break;case"view":o+=`cases/${s}/views/${a}`;break;case"caseaction":o+=`cases/${s}/actions/${a}`;break;case"attachment":o+=`attachments/${s}`;break;case"attachments":o+=`cases/${s}/attachments`;break;case"attachmentcategories":o+=`cases/${s}/attachment_categories`}fetch(o,r).then((s=>{if("assignment"===t)this.etag=s.headers.get("etag");else if("attachment"===t)return s.text();return s.ok||404===s.status?s.json():401===s.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),s.json()):Promise.reject(s)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=s;for(const t of this.casedata.assignments)if(s===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const r=this.getRenderRoot().querySelector("#case-data");r&&ta(r,this.casedata.content),this.content={},L(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,L(this.renderReviewLayout(e.uiResources.resources.views[a],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},L(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&L(Oa(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:s,actionid:a,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"},{pageInstructions:c,pageupdate:l}=sa(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(o.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(ii())}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:s,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${s}/actions/${a}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`cases/${s}/actions/${a}?viewType=form`;break;case"refreshassignment":d+=`assignments/${s}/actions/${a}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:l,pageInstructions:c,contextData:!0});break;case"dataviews":d+=`data_views/${s}`,o.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",a,a.name),o.body=t;break;case"attachments":d+=`cases/${s}/attachments`,o.body=JSON.stringify({attachments:a});break;case"deleteattachment":d+=`attachments/${s}`,o.method="DELETE"}fetch(d,o).then((s=>"deleteattachment"===t||"attachments"===t?s.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=s.headers.get("etag")),200===s.status||201===s.status||s.status>=400&&s.status<500||500===s.status?(401===s.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),s.json()):s.ok?Promise.resolve("ok"):Promise.reject(s)))).then((s=>{if(s.errors&&s.errors.length>0)return this.errorMsg=`Error: ${s.errors[0].message.trim()}`,void this.requestUpdate();if(s.access_token)this.token=s.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(s.errorDetails&&s.errorDetails.length>0){if(s.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");ea(t,s.errorDetails,this),this.validationMsg=this.genPageValidationErrors(s,t)}else this.errorMsg=`Error ${s.errorDetails[0].message}: ${s.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("newwork"===t&&s.data.caseInfo.ID&&""!==s.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:s.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&s.data.caseInfo&&s.data.caseInfo.content&&(this.data.data.caseInfo.content=s.data.caseInfo.content,this.casedata.content=s.data.caseInfo.content,L(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)i&&!i.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:i});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=a.name.lastIndexOf(".");-1===t&&(t=a.name.length);const e=a.name.substring(t+1),n=[{type:"File",category:a.category,fileType:e,name:a.displayName,ID:s.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}if(s.confirmationNote)this.bShowConfirm=!0,this.caseID=s.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(s.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=s.nextAssignmentInfo.ID,this.data=s,this.casedata=s.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=s.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=s.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=s.data.caseInfo.status,this.data.actions=s.data.caseInfo.availableActions,this.name=s.data.caseInfo.stageLabel,e&&(L(this.renderMainLayout(s.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const oi=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class ci extends tt{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,s){super(),this.content=t,this.root="";const a=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const i=document.createElement("div"),n=a.querySelector("body");i.setAttribute("contenteditable","true"),i.setAttribute("data-ref",e),i.setAttribute("id",s),i.innerHTML=n.innerHTML,this.root=i}render(){return B`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,s=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&s.push(e),t=t.parentNode}}const a=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>oi('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:s.includes("b")},{icon:()=>oi('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:s.includes("i")},{icon:()=>oi('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:s.includes("u")},{icon:()=>oi('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>oi('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>oi('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>oi('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:s.includes("ol")},{icon:()=>oi('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:s.includes("ul")},{icon:()=>oi('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>oi('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>oi('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>oi('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>oi('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>oi('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:s.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>oi('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:s.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return B`
      ${a.map((e=>B`
          ${e.values?B` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${s=>{s.preventDefault();const a=s.target.value;"--"===a?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,a)}}>
    ${e.values.map((t=>B` <option value=${t.value}>${t.name}</option>`))}
              </select>`:B` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${s=>{s.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",ci);const li=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},di=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},hi=(t,e,s,a)=>void 0===e||""===e?B`
      ${a}
    `:B`
    <div class="flex content-item field-item ${s}" ?disabled="${t.disabledstate}">
      ${((t,e,s)=>{if(void 0===e)return null;const a=t.requiredstate?"icon-required":"";return"field-checkbox"===s?t.label&&""!==t.label?B`<legend class="field-caption">${t.displaylabel}</legend>`:null:B`
    ${""!==t.label?B`<label class="field-caption dataLabelForWrite ${a}" 
    for="${st(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,s)}${a}${((t,e)=>t.helperText&&""!==t.helperText?B`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,ui=(t,e,s,a,i)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","");if(t.config.reference=void 0===i||""===i?e:`${i}.${e}`,t.config.displayvalue=js(a.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .","");let s="";a.data.context_data?s=a.data.context_data.content:a.data.uiResources.context_data&&a.data.uiResources.context_data.caseInfo&&a.data.uiResources.context_data.caseInfo.content&&(s=a.data.uiResources.context_data.caseInfo.content);const n=""===i?s:js(s,i);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(s=a.data.uiResources.resources.fields[e],s&&s.datasource))if(s.datasource.records)t.config.options=s.datasource.records;else if(s.datasource.name&&a.data.data.shared[s.datasource.name]){const e=a.data.data.shared[s.datasource.name];if(Object.keys(e).length>0){const a=Object.keys(e)[0];if(e[a].pxResults){const i=s.datasource.propertyForValue.replace("@P .",""),n=s.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const s in e[a].pxResults){const r=e[a].pxResults[s];t.config.options[s]={key:r[i],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(a.data.data[e]&&a.data.data[e].pxResults)t.config.options=a.data.data[e].pxResults;else if(a.data.uiResources.context_data&&a.data.uiResources.context_data.caseInfo&&a.data.uiResources.context_data.caseInfo.content){const s=a.data.uiResources.context_data.caseInfo.content;if(s[i]&&s[i].summary_of_lists__[e]&&s[i].summary_of_lists__[e].pxResults){const n=s[i].summary_of_lists__[e].pxResults.replace(".pxResults","");if(a.data.data[n]&&a.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),s=t.config.datasource.fields.text.replace("@P .","");for(const i in a.data.data[n].pxResults){const r=a.data.data[n].pxResults[i];t.config.options[i]={key:r[e],value:r[s]}}}}}}t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",a.data.uiResources&&a.data.uiResources.resources&&a.data.uiResources.resources.fields&&a.data.uiResources.resources.fields[e]&&a.data.uiResources.resources.fields[e].isDeclarativeTarget&&(n=!0,a.isDeclarativeTarget=!0)}if(!0===s)return hi(t.config,e,"field-text",pi(t.config,t.type,e));"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(a.refreshOnChange=!0);const r=a.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!Qs(t.config.visibility,r))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;switch(t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=Qs(t.config.readOnly,r):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=Qs(t.config.required,r):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=Qs(t.config.disabled,r):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),t.type){case"Decimal":case"TextInput":return hi(t.config,e,"field-textinput",gi(t.config,e));case"Phone":return hi(t.config,e,"field-phoneinput",fi(t.config,e));case"Email":return hi(t.config,e,"field-emailinput",vi(t.config,e));case"Integer":return hi(t.config,e,"field-numberinput",mi(t.config,e));case"Percentage":return hi(t.config,e,"field-percentage",yi(t.config,e));case"Currency":return hi(t.config,e,"field-currencyinput",bi(t.config,e));case"RadioButtons":return hi(t.config,e,"field-radiogroup",Ci(t.config,e));case"TextArea":return hi(t.config,e,"field-textarea",$i(t.config,e));case"RichText":return hi(t.config,e,"field-richtext",wi(t.config,e));case"Checkbox":return hi(t.config,e,"field-checkbox",_i(t.config,e));case"Dropdown":return hi(t.config,e,"field-dropdown",ki(t.config,e));case"DateTime":return hi(t.config,e,"field-datetime",Di(t.config,e));case"Date":return hi(t.config,e,"field-date",Si(t.config,e));case"Time":return hi(t.config,e,"field-time",xi(t.config,e));case"AutoComplete":return hi(t.config,e,"field-autocomplete",Ii(t.config,e));case"SemanticLink":return hi(t.config,e,"field-semanticlink",Ai(t.config));case"Attachment":return hi(t.config,e,"field-attachment",Ti(t.config,e,a));case"Location":return hi(t.config,e,"field-location",Ei(t.config,e));default:return null}},pi=(t,e,s)=>{let a=t.displayvalue;if(""!==a){if("Phone"===e)return B`<a data-ref="${t.reference}" id="${st(s)}" href="${`tel:${a}`}">${a}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){a=Hs(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}return B`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(s)}">${Us(a)}</span>
  `},gi=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(di(t))}"
    type="text"
    aria-describedby="${st(li(t,e))}"
    id="${st(e)}"
    value="${Us(t.displayvalue)}"
  />
`,fi=(t,e)=>{let s="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(s=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(s.length),B`
<div> 
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>B`<option ?selected=${t.pyCallingCode===s} 
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${st(di(t))}"
   type="tel"
   aria-describedby="${st(li(t,e))}"
   id="${st(e)}"
   value="${Us(t.displayvalue)}"
 />
 </div>
`},mi=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(di(t))}"
    type="number"
    aria-describedby="${st(li(t,e))}"
    id="${st(e)}"
    value="${Us(t.displayvalue)}"
  />
`,yi=(t,e)=>B`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${st(di(t))}"
   type="text"
   aria-describedby="${st(li(t,e))}"
   id="${st(e)}"
   value="${Us(t.displayvalue)}"
 />
`,bi=(t,e)=>B`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(di(t))}"
    type="number"
    aria-describedby="${st(li(t,e))}"
    id="${st(e)}"
    value="${Us(t.displayvalue)}"
  />
  </div>
`,vi=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(di(t))}"
    type="email"
    aria-describedby="${st(li(t,e))}"
    id="${st(e)}"
    value="${Us(t.displayvalue)}"
  />
`,$i=(t,e)=>B`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(di(t))}"
    type="email"
    aria-describedby="${st(li(t,e))}"
    id="${st(e)}"
  >${Us(t.displayvalue)}</textarea>
`,wi=(t,e)=>new ci(Us(t.displayvalue),t.reference,e),_i=(t,e)=>{const s=t.requiredstate?"icon-required":"";return B`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${st(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${st(li(t,e))}"
  id=${st(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${s} for=${st(e)}>
  ${t.displaycaption}
    </label>
`},Ci=(t,e)=>{let s=[{value:"true"},{value:"false"}];return t.options&&(s=t.options),B`
    ${s.map(((s,a)=>{const i=`rb-${e}-${a}`;return B`
        <div>
          <input
            data-ref="${t.reference}"
            name=${st(e)}
            id=${i}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${s.key}"
            onclick="${st(t.readonlystate?"return false;":void 0)}"
            ?checked="${s.key===t.displayvalue}"
          />
          <label for="${i}">${s.value}</label>
        </div>
      `}))}
  `},ki=(t,e)=>B`<select
  data-ref="${t.reference}"
  aria-describedby="${st(li(t,e))}"
  id=${st(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${st(di(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>B`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,Di=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Hs(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${qs(e.getMonth()+1)}-${qs(e.getDate())}T${qs(e.getHours())}:${qs(e.getMinutes())}`):8===t.displayvalue.length?s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${st(li(t,e))}"
      id="${st(e)}"
      value="${s}"
    />
  `},Si=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Hs(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${qs(e.getMonth()+1)}-${qs(e.getDate())}`):8===t.displayvalue.length&&(s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${st(li(t,e))}"
      id="${st(e)}"
      value="${s}"
    />
  `},xi=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Hs(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${qs(e.getHours())}-${qs(e.getMinutes())}-${qs(e.getSeconds())}`):8===t.displayvalue.length&&(s=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${st(li(t,e))}"
      id="${st(e)}"
      value="${s}"
    />
  `},Ii=(t,e)=>t.options?B`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${st(di(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${st(li(t,e))}"
        id="${st(e)}"
        value="${Us(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>B`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,Ai=()=>B`
 <a>semantic link</a>
`,Ti=(t,e,s)=>{let a=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(a=t.displayvalue.pxResults),Oa(void 0,a,s.caseID,s)},Ei=(t,e)=>B`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${st(di(t))}"
 type="text"
 aria-describedby="${st(li(t,e))}"
 id="${st(e)}"
 value="${Us(t.displayvalue)}"
/>`,Ri=(t,e)=>B`
  ${t.map((t=>B`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:B`<th></th>`}
`,zi=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,s)=>(e[s]=t.config.value.replace("@P .",""),null)));const s=t.config.referenceList.replace("@P .","");return B`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${s} data-action-click="addRow">${aa()}${i18n.t("Add item")}</button>
      </div>
    `}return null},Ni=(t,e,s)=>{const a=t.config.referenceList.replace("@P .",""),i=t.config.children[0].children,n=s.data.data.caseInfo.content[a];return n?B`
  ${n.map(((t,n)=>B`
    <tr>
    ${i.map((t=>{const i=t,r=i18n.t(t.config.label);return B`
    <td data-title="${r}">${ui(i,void 0,e,s,`${a}(${n+1})`)}</td>`}))}${e?null:B`<td><button type="button" class="pzhc pzbutton Simple" 
  aria-label="${i18n.t("Delete item")}" data-ref=${`${a}(${n+1}).pyTemplate`}  
  data-action-click='deleteRow'>${na()}</button></td>`}
    </tr>`))}
`:null},Mi=(t,e,s,a,i)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return B`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return Mi(t.children,`${e}-0`,!0,a,i);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value),o=a.data.uiResources.resources.views[t.config.name];if(o){const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return B`<div class='flex content-item field-item ${t}'><h4>${n}</h4>${Mi(o,r,s,a,""===i?e.substring(1):i+e)}</div>`}}return Mi(a.data.uiResources.resources.views[t.config.name],r,s,a,i&&""!==i?i+e:e.substring(1))}return ui(t,r,s,a,i)}))}`;if("SimpleTable"===t.config.template)return((t,e,s)=>{const a=e||"Editable"!==t.config.renderMode;return B`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ri(t.config.children[0].children,a)}
      </tr>
    </thead>
    <tbody>
      ${Ni(t,a,s)}
    </tbody>
  </table>
  ${zi(t,a)}`})(t,s,a);if("ListView"===t.config.template)return((t,e,s)=>(s.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),B`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ri(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${Ma()}
    </tbody>
  </table>`))(t,s,a);switch("DataReference"===t.config.template&&(a.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return B`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Mi(t.children[0].children,`${e}-0`,s,a,i)}</div>
            <div class="flex layout-content-stacked">${Mi(t.children[1].children,`${e}-1`,s,a,i)}</div>
          </div>
        `;case"DefaultForm":return B`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${Mi(t.children[0].children,`${e}-0`,s,a,i)}
          </div>
        `;case"DataReference":return B`
          <div class="flex layout-content-stacked">
            ${Mi(t.children,`${e}-0`,s,a,i)}
          </div>
        `;case"OneColumn":return B`
          <div class="flex layout-content-stacked">
            ${Mi(t.children[0].children,`${e}-0`,s,a,i)}
          </div>
        `;case"Details":return B`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Mi(t.children[0].children,`${e}-0`,!0,a,i)}
          </div>
        `;default:return null}},Li=(t,e,s,a,i,n,r,o,c)=>{const l=B`${ra()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&s.content){const t=s.content.pyID.split(" ")[1];return B`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)} <span>(${t})</span></h2>
      ${""!==a?B`<span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?Ba("Attachments",l,"Simple",c):""}
        ${s.actions&&s.actions.length>0?B`
          ${Pa("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?B`
  <h3>
  ${i18n.t("Assignments")}
  </h3>
  <table class='responsive'>
  <caption class='sr-only'>List of assignments</caption>
    <thead>
      <tr>
        <th span='col'>${i18n.t("Priority")}</th>
        <th span='col'>${i18n.t("Task")}</th>
        <th span='col'>${i18n.t("Assigned")} to</th>
        <th span='col' class="right-aligned">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>B`
        <tr>
          <td data-title='Priority'>${t.urgency}</td>
          <td data-title='Task'>${t.name}</td>
          <td data-title='Assigned'>${t.assigneeInfo.name}</td>
          <td data-title='Action' class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table> `:null)(s.assignments,o)}
    <h3>${i18n.t("Case information")}</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)} <span>(${d})</span></h2>
    ${""!==a?B`<span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?Ba("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?B`
        ${Pa("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},Pi=(t,e,s,a,i)=>B`
  <div>${Mi(t,e,!1,i,"")}</div>
  ${((t,e)=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?B`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(s,a)}
`,Bi=(t,e,s,a)=>B`
  <div>${Mi(t,e,!0,a)}</div>
  ${(t=>null===t?null:B`
  <div class="action-button-area">
  ${null!==t?B`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(s)}
`;class Oi extends ri{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return ei(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);window.history.replaceState({},"","")}if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):ni(this.url,this.clientid);if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return ti(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?B`
        ${Li(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Ma()}</form>
      `:"workList"===this.action?si(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}renderMainLayout=(t,e)=>Pi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>Bi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?B`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:B`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>Ya(t);genActionsList=(t,e)=>((t,e)=>{const s=[],a=Object.entries(e.actions);for(const e of a)e[1].name!==t&&s.push(B`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return B`
    ${s}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],s=Object.entries(t);for(const t of s)e.push(B`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return B`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>Ma();setInlineError=(t,e)=>{t.setCustomValidity(Us(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const s=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Zs(e,"click")?(this.refreshAssignment(e,Ys(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===s||"deleteRow"===s)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Zs(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,Ys(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");ta(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),L(Pi(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-light-v2",class extends Oi{createRenderRoot(){return this}getRenderRoot(){return this}render(){return B`
      ${this.displayContent()}
    `}})}();
