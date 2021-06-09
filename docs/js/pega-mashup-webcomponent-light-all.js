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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,a=null)=>{for(;e!==a;){const a=e.nextSibling;t.removeChild(e),e=a}},a=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${a}--\x3e`,i=new RegExp(`${a}|${s}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:g,values:{length:m}}=t;for(;p<m;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:a}=e;let s=0;for(let t=0;t<a;t++)o(e[t].name,n)&&s++;for(;s-- >0;){const e=g[p],a=d.exec(e)[2],s=a.toLowerCase()+n,r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(i);this.parts.push({type:"attribute",index:u,name:a,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const a=t.parentNode,r=e.split(i),l=r.length-1;for(let e=0;e<l;e++){let s,i=r[e];if(""===i)s=c();else{const t=d.exec(i);null!==t&&o(t[2],n)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),s=document.createTextNode(i)}a.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===r[l]?(a.insertBefore(c(),t),s.push(t)):t.data=r[l],p+=l}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(c(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const o=(t,e)=>{const a=t.length-e.length;return a>=0&&t.slice(a)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:a},parts:s}=t,i=document.createTreeWalker(a,133,null,!1);let n=p(s),r=s[n],o=-1,l=0;const c=[];let d=null;for(;i.nextNode();){o++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===o;)r.index=null!==d?-1:r.index-l,n=p(s,n),r=s[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const a=document.createTreeWalker(t,133,null,!1);for(;a.nextNode();)e++;return e},p=(t,e=-1)=>{for(let a=e+1;a<t.length;a++){const e=t[a];if(l(e))return a}return-1};
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
const g=new WeakMap,m=t=>"function"==typeof t&&g.has(t),f={},y={};
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
class b{constructor(t,e,a){this.__parts=[],this.template=t,this.processor=e,this.options=a}update(t){let e=0;for(const a of this.__parts)void 0!==a&&a.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),a=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,r=0,o=0,c=i.nextNode();for(;r<s.length;)if(n=s[r],l(n)){for(;o<n.index;)o++,"TEMPLATE"===c.nodeName&&(a.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=a.pop(),c=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$=` ${a} `;class w{constructor(t,e,a,s){this.strings=t,this.values=e,this.type=a,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const l=d.exec(t);e+=null===l?t+(i?$:s):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
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
     */const C=t=>null===t||!("object"==typeof t||"function"==typeof t),D=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=a[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!D(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=a[i];if(void 0!==e){const t=e.value;if(C(t)||!D(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||C(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(C(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):D(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const a=new b(e,t.processor,this.options),s=a._clone();a.update(t.values),this.__commitNode(s),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,s=0;for(const i of t)a=e[s],void 0===a&&(a=new k(this.options),e.push(a),0===s?a.appendIntoPart(this):a.insertAfterPart(e[s-1])),a.setValue(i),a.commit(),s++;s<e.length&&(e.length=s,this.clear(a&&a.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class I extends S{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends x{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class R{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function N(t){let e=z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},z.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return s=e.keyString.get(i),void 0===s&&(s=new r(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const z=new Map,L=new WeakMap,P=(t,a,s)=>{let i=L.get(a);void 0===i&&(e(a,a.firstChild),L.set(a,i=new k(Object.assign({templateFactory:N},s))),i.appendInto(a)),i.setValue(t),i.commit()};
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
     */const q=new
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
class{handleAttributeExpressions(t,e,a,s){const i=e[0];if("."===i){return new I(t,e.slice(1),a).parts}if("@"===i)return[new R(t,e.slice(1),s.eventContext)];if("?"===i)return[new _(t,e.slice(1),a)];return new S(t,e,a).parts}handleTextExpression(t){return new k(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const M=(t,...e)=>new w(t,e,"html",q)
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
     */,O=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const V=t=>e=>{const s=O(e.type,t);let i=z.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},z.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(a);if(n=i.keyString.get(o),void 0===n){const a=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(a,t),n=new r(e,a),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},F=["html","svg"],H=new Set,j=(t,e,a)=>{H.add(t);const s=a?a.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{F.forEach((e=>{const a=z.get(O(e,t));void 0!==a&&a.keyString.forEach((t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{a.add(t)})),h(t,a)}))}))})(t);const o=s.content;a?function(t,e,a=null){const{element:{content:s},parts:i}=t;if(null==a)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=p(i),o=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===a&&(o=u(e),a.parentNode.insertBefore(e,a));-1!==r&&i[r].index===l;){if(o>0){for(;-1!==r;)i[r].index+=o,r=p(i,r);return}r=p(i,r)}}(a,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(a){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),h(a,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:B},Z="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,a)=>{const s=this._attributeNameForProperty(a,e);void 0!==s&&(this._attributeToPropertyMap.set(s,a),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,a,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const a of e)this.createProperty(a,t[a])}}static _attributeNameForProperty(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=B){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e.type,s=e.converter||W,i="function"==typeof s?s:s.fromAttribute;return i?i(t,a):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const a=e.type,s=e.converter;return(s&&s.toAttribute||W.toAttribute)(t,a)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=J){const s=this.constructor,i=s._attributeNameForProperty(t,a);if(void 0!==i){const t=s._propertyValueToAttribute(e,a);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const a=this.constructor,s=a._attributeToPropertyMap.get(t);if(void 0!==s){const t=a.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=a._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,a){let s=!0;if(void 0!==t){const i=this.constructor;a=a||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const at={};class st extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,a)=>t.reduceRight(((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t)),a),a=e(t,new Set),s=[];a.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new et(String(e),tt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==at&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return at}}st.finalized=!0,st.render=(t,a,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=L.has(a),r=U&&11===a.nodeType&&!!a.host,o=r&&!H.has(i),l=o?document.createDocumentFragment():a;if(P(t,l,Object.assign({templateFactory:V(i)},s)),o){const t=L.get(l);L.delete(l);const s=t.value instanceof b?t.value.template:void 0;j(i,l,s),e(a,a.firstChild),a.appendChild(l),L.set(a,t)}!n&&r&&window.ShadyCSS.styleElement(a.host)},st.shadowRootOptions={mode:"open"};
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
const it=new WeakMap,nt=(rt=t=>e=>{const a=it.get(e);if(void 0===t&&e instanceof x){if(void 0!==a||!it.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==a&&e.setValue(t);it.set(e,t)},(...t)=>{const e=rt(...t);return g.set(e,!0),e});var rt;const ot=t=>`0${t}`.slice(-2),lt=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},ct=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",dt=(t,e,a)=>{if("string"!=typeof e)return;const s=e.split(".");let i=t;for(const t in s){let e=s[t];const n=e.indexOf("(");if(-1===n)t<s.length-1?void 0===i[e]&&(i[e]={}):i[e]=a,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let a=i[e].length;a<t;a++)i[e].push({});i=i[e][t-1]}}},ht=(t,e)=>{if("string"!=typeof e)return null;let a=t;const s=e.split(".");for(const t in s){const e=s[t],i=e.indexOf("(");if(-1===i){if(void 0===a[e])return null;a=a[e]}else{const t=e.substring(i+1,e.length-1),s=a[e.substring(0,i)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;a=s[t-1]}}return a},ut=t=>{for(const e in t)"object"==typeof t[e]?ut(t[e]):"string"==typeof t[e]&&(t[e]="")},pt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const s=t[a];s.fieldID?e.push(s.fieldID):"object"==typeof s&&pt(s,e)}},gt=(t,e,a)=>{let s=ht(t,e);if(null===s&&(s=[],dt(t,e,s)),Array.isArray(s))if(a&&"string"==typeof a){const t={},e=a.split(",");for(const a in e)t[e[a]]="";s.push(t)}else{if(0===s.length)return;const t={...s[0]};ut(t),s.push(t)}},mt=(t,e)=>{let a,s=e;-1!==e.indexOf(").pyTemplate")&&(a=s.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),s=s.substring(0,e.lastIndexOf("(")));const i=ht(t,s);if(Array.isArray(i))if(1!==i.length)if(a){if(i.length<a)return;i.splice(a-1,1)}else i.length-=1;else for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="")},ft=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},yt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function bt(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch(t){}return!1}const vt=(t,e)=>{const a=t.replace("@E ","").split("&&");for(const t in a){const s=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===s.length){const t=e[s[0].substring(1)];if(void 0!==t&&!bt(t,s[1],s[2].replace(/^'|'$/g,"")))return!1}}return!0},$t=(t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===a.tagName){const s=a.getAttribute("type");if("checkbox"===s)dt(e,t,a.checked);else if("radio"===s)a.checked&&dt(e,t,a.value);else if("tel"===s){let s=a.value;"SELECT"===a.parentNode.firstElementChild.tagName&&"field-countrycode"===a.parentNode.firstElementChild.className&&(s=a.parentNode.firstElementChild.value+s),dt(e,t,s)}else if("date"===s){let s;a.valueAsDate&&(s=new Date(a.valueAsDate)),s&&s instanceof Date&&s.getTime()==s.getTime()||(s=new Date(a.value)),s&&s instanceof Date&&s.getTime()==s.getTime()?(s=new Date(s.getTime()+6e4*s.getTimezoneOffset()),dt(e,t,`${ot(s.getMonth()+1)}/${ot(s.getDate())}/${s.getFullYear()}`)):dt(e,t,a.value)}else dt(e,t,a.value)}else dt(e,t,a.value)}if(t&&t.querySelectorAll){const s=t.querySelectorAll("[contenteditable]");for(let t=0;t<s.length;t++){const i=s[t],n=i.getAttribute("data-ref");dt(e,n,(a=i.innerHTML)&&"string"==typeof a?a.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var a},wt=t=>{if(void 0===t.content)return{};const e={};for(const a in t.content){const s=t.content[a];"object"!=typeof s||0===a.indexOf("px")||Array.isArray(s)||"pyWorkParty"===a||(e[a]=s)}return e},Ct=(t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=`.${a.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const s in e){if(e[s].Path===t){a.setCustomValidity(ct(e[s].ValidationMessage)),a.classList.add("error-field"),a.reportValidity();break}if(e[s].erroneousInputOutputFieldInPage===t){a.setCustomValidity(ct(e[s].localizedValue)),a.classList.add("error-field"),a.reportValidity();break}}}},Dt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},St=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,xt=(t,e,a)=>{if(void 0===e)return null;const s=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?M`<div class="field-caption dataLabelForWrite ${s}">${ct(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?M`<label class="field-caption dataLabelForWrite">${ct(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?M`<label class="field-caption dataLabelForWrite ${s}" for="${nt(e)}">${ct(t.label)}</label>`:null},kt=(t,e,a,s)=>void 0===e?M`
      ${s}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?M`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${xt(t,e,a)}</legend>${s}</fielset></div>
  `:M`
    <div class="flex content-item field-item ${a}">${xt(t,e,a)}${s}</div>
  `:null,_t=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,It=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,At=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,Tt=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,Rt=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,Et=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return kt(t,e,"field-text",Nt(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return kt(t,e,"field-textinput",zt(t,e));case"pxInteger":case"pxNumber":return kt(t,e,"field-numberinput",Pt(t,e));case"pxCurrency":return kt(t,e,"field-currencyinput",qt(t,e));case"pxEmail":return kt(t,e,"field-emailinput",Mt(t,e));case"pxTextArea":return kt(t,e,"field-textarea",Ot(t,e));case"pxRadioButtons":return kt(t,e,"field-radiogroup",Jt(t,e));case"pxCheckbox":return kt(t,e,"field-checkbox",Zt(t,e));case"pxDropdown":return kt(t,e,"field-dropdown",Yt(t,e));case"pxDisplayText":return kt(t,e,"field-text",Nt(t,e));case"pxIcon":return kt(t,e,"field-icon",Ut(t,e));case"pxLink":case"pxURL":return kt(t,e,"field-url",Vt(t,e));case"pxIconDeleteItem":return kt(t,e,"field-button",Ht(t,e));case"pxButton":return kt(t,e,"field-button",Ft(t,e));case"pxDateTime":return"TimeOfDay"===t.type?kt(t,e,"field-time",Bt(t,e)):"Date"===t.type?kt(t,e,"field-date",Wt(t,e)):kt(t,e,"field-datetime",jt(t,e));case"pxAutoComplete":return kt(t,e,"field-combobox",Kt(t,e));case"pxSlider":return kt(t,e,"field-slider",Lt(t,e));default:return null}},Nt=(t,e)=>{if("pxDate"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateTimeFormat){case"DateTime-Short-YYYY":e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return M`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${nt(e)}" value="${ct(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return"pxCurrency"===t.control.type&&(a=`$${a}`),M`
    <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${ct(a)}</span>
  `},zt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${nt(e)}"
    value="${ct(t.value)}"
    data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
  />
`,Lt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${nt(e)}"
    value="${ct(t.value)}"
    data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
  />
`,Pt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
  />
`,qt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
  />
`,Mt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
  />
`,Ot=(t,e)=>M`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${nt(e)}"
    data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
  >
${ct(t.value)}</textarea
  >
`,Ut=(t,e)=>M`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${nt(e)}"
    value="${t.value}"
  />
`,Vt=(t,e)=>M`
  <a id="${nt(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,Ft=(t,e)=>{const a=Dt(t,"click");return"deleteRow"===a?Ht(t,e):M`
  <button
  type='button' 
    class="${nt(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${nt(e)}"
    data-ref="${nt(St(t))}"
    data-action-click="${nt(a)}"
  >${t.control.label}</button>`},Ht=(t,e)=>M`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${nt(e)}"
    data-ref="${nt(St(t))}"
    data-action-click="deleteRow"
  >${At()}</button>
`,jt=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}T${ot(e.getHours())}:${ot(e.getMinutes())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${nt(e)}"
      value="${a}"
      data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
    />
  `},Wt=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${nt(e)}"
      value="${a}"
      data-action-change="${nt(Dt(t,"change"))}"
    data-action-click="${nt(Dt(t,"click"))}"
    />
  `},Bt=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${ot(e.getHours())}-${ot(e.getMinutes())}-${ot(e.getSeconds())}`):8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${nt(e)}"
      value="${a}"
      data-action-change="${nt(Dt(t,"change"))}"
      data-action-click="${nt(Dt(t,"click"))}"
    />
  `},Jt=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:M`
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
            data-action-change="${nt(Dt(t,"change"))}"
          />
          <label for="${i}">${a.value}</label>
        </div>
      `}))}
  `},Zt=(t,e)=>M`
<div>
  <input
  data-ref="${t.reference}" 
  id="${nt(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${nt(Dt(t,"change"))}"
  data-action-click="${nt(Dt(t,"click"))}"
  />
  <label for="${nt(e)}">${t.control.label}</label>
  </div>
`,Yt=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?M`<select
      data-ref="${t.reference}"
      id=${nt(e)}
      ?required="${!0===t.required}"
      data-action-change="${nt(Dt(t,"change"))}"
      data-action-click="${nt(Dt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>M`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:M`<input
      type='text'
      data-ref="${t.reference}"
      id=${nt(e)}
      ?required="${!0===t.required}"
      data-action-change="${nt(Dt(t,"change"))}"
      data-action-click="${nt(Dt(t,"click"))}">
      </input>`,Kt=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return M`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${nt(e)}"
        value="${ct(t.value)}"
        data-action-change="${nt(Dt(t,"change"))}"
        data-action-click="${nt(Dt(t,"click"))}"
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
      data-action-change="${nt(Dt(t,"change"))}"
      data-action-click="${nt(Dt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},Gt=t=>""!==t.title?M`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Xt=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return pt(t.newRow,e),M`
      <div class="table-action-area">
        ${"add-row"===t.testID?M`<button type="button" class="pzhc pzbutton Simple" data-newrow="${nt(e.join())}"
        data-ref=${a} data-action-click="addRow">${_t()}Add item</button>`:""}
      </div>
    `}return null},Qt=t=>M`
  ${t.map((t=>M`
    <th scope='col'>${t.caption?M`${t.caption.value}`:""}</th>`))}
`,te=t=>M`
  ${t.map((t=>M`
    <tr>
      ${t.groups.map((t=>M`
      <td>${Et(t.field)}</td>`))}
    </tr>`))}
`,ee=()=>M`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,ae=(t,e,a,s,i)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const r=document.createElement("div");n.appendChild(r);const o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',l=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",d),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove()),i&&i()},c=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}l()}},d=t=>{if("Escape"===t.key)return void c(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=n.querySelectorAll(o),a=e[e.length-1],s=e[0];t.shiftKey?document.activeElement===s&&(a.focus(),t.preventDefault()):document.activeElement===a&&(s.focus(),t.preventDefault())};return M`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)l();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),s(r);n.querySelectorAll(o)[0].focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",d),n.offsetHeight,n.style=""}else l()}}" class="pzhc pzbutton ${a}" title="${t}">${e}</button>
  </div>`},se=(t,e,a,s,i)=>{if(null==s)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const l=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",c),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},c=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?l():13===t.keyCode&&(s(t),l())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&s(t),l()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(s(t),l()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),P(a(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",c)):l()};return M`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${i||"action-menu"}`}" title="${e}" aria-label="${e}">${t}</button>
    </div>
  `},ie=(t,e,a,s)=>ae(t,e,a,(t=>{P(ne(t,[]),t),s(t)})),ne=(t,e,a,s,i)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;if(void 0===a&&(a=e[n].name),void 0===a&&(a=e[n].pyAttachName),!a)return;const s=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});s.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,s=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);s[t]=a}return s}(t),a=new Blob([e],{type:"octet/stream"});s.href=window.URL.createObjectURL(a)}s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)},o=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),s.fetchData.call(s,"attachment",{id:e[n].ID,target:r})},l=a=>{a.preventDefault(),a.stopPropagation();const i=a.target.closest("button");n=i.getAttribute("data-id"),s.sendData.call(s,"deleteattachment",{id:e[n].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),i.splice(n,1),P(ne(t,e,a,s,i),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},h=e=>{e.preventDefault();const a=e.target,s=e.relatedTarget,i=null===a?null:a.closest(".attach-files"),n=null===s?null:s.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const s=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,s)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<i.length;n++){const r=i[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),s.sendData.call(s,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),s.sendData.call(s,"uploadattachment",{actionid:r,target:t}))}P(ne(t,e,a,s),t)},p=(i,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}P(ne(t,e,a,s,r),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},m=i=>{i.stopPropagation();P(ne(t,e,a,s,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},f=i=>{i.stopPropagation(),P(ne(t,e,a,s),t)},y=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),M`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":M`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>category: ${e.category}</span></span>`}
    </div>`},b=()=>M`<li role="menuitem" tabindex="-1" data-value="Download">Download</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">Delete</li>`,v=i=>{let o=i.target;if(i.path&&i.path.length>0?o=i.path[0]:i.originalTarget&&(o=i.originalTarget),o){const i=o.getAttribute("data-value"),l=e[n].pzInsKey||e[n].ID;"Download"===i?s.fetchData.call(s,"attachment",{id:l,target:r}):"Delete"===i&&(s.sendData.call(s,"deleteattachment",{id:l,target:t}),P(ne(void 0,[],a,s,[]),t))}},$=t=>M`<div class='row-item'>
    <span class='doc-icon'>${Rt()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${se(M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",b,v,"button-action")}
  </div>`,w=(t,e)=>e.loading?M`${y(t,e)}${ee()}`:e.editing?"URL"===e.type?M`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}" aria-label='name'/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}" aria-label='URL'/>
      </div>`:M`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}" 
      data-id="${t}" value="${e.displayName}" aria-label='name'/>
      ${((t,e)=>M`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='category'>
    ${s.attachmentcategories.map((t=>M`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' title='Delete'>${At()}</button>`:M`${y(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' title='Delete'>${At()}</button>`,C=t=>{if(!a)return ee();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(M`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${w(t[0],t[1])}
            </div>`):e.push(M`<div class='row-item'>
              <span class='doc-icon'>${Rt()}<span>${a}</span></span>
              ${w(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:M`<div class='empty'>no attachments found</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),$(e[0])}return M`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${Tt()}<span> Drag and drop or 
        <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">choose file</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return s.sendData.call(s,"uploadattachment",{actionid:i[0],target:t}),D=i[0],S=!0,M`<div class='row-item'>
    <span class='doc-icon'>${Rt()}<span>${D.extension}</span></span>
    <div class='list-item-title'><span>${D.displayName}</span>${S?M`<span class="list-item-meta"><span>Uploading...</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return $(e[0])}var D,S;let x="Attachments";return void 0!==i&&i.length>0&&(x="URL"===i[0].type?"Attach a link":"Attach files"),M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${x}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${It()}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?M`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${C(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${f}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">Upload</button>
        </div>
      </div>`:M`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${Tt()}<span> Drag and drop files, attach 
          <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">files</button> or add a 
          <button type='button' aria-labelledby='click to add a URL link' class='Light' @click="${m}">link</button></span>
        </div>
        ${C(e)}
      </form>
    `}
  `},re=(t,e)=>M`
<div class="flex layout-content-inline_middle main-header">
  <h2>${t}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" title="Close">${It()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`,oe=(t,e,a,s)=>M`
  ${t.map(((t,i)=>{const n=`${e}-${i}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),i=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return M`
          <div class="${i}">${oe(t.layout.view.groups,n,a,s)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=M`<h2>${t.layout.title}</h2>`;break;case"h3":e=M`<h3>${t.layout.title}</h3>`;break;case"h4":e=M`<h4>${t.layout.title}</h4>`;break;default:e=M`<h2>${t.layout.title}</h2>`}return M`
        ${e}<div class="${i}">${oe(t.layout.groups,n,a,s)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>M`
  ${Gt(t.layout)}
  <table>
    <thead>
      <tr>
        ${Qt(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${te(t.layout.rows)}
    </tbody>
  </table>
  ${Xt(t.layout,a)}
`)(t,0,a):le(t,n,a):null}if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return ie("Upload file","Upload file","",s.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=s.actionID;return((t,e,a)=>{const s=t.control.actionSets[0].actions[0].actionProcess.localAction,i=t.control.actionSets[0].actions[0].actionProcess.target,n=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===i){const i=a=>{P(re(t.control.label,ee()),a),e(s,a)};return ae(s,t.control.label,n,i,a)}return M`<div><button type="button" @click="${()=>{e(s)}}" class="pzhc pzbutton ${n}">${t.control.label}</button></<div>`})(t.field,s.displayLocalAction,(()=>{s.reloadAssignment(e)}))}return Et(t.field,n,a)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?ie("Upload file","Upload file","",s.displayAttachments):oe(t.view.groups,n,a,s):null}))}
`,le=(t,e,a)=>M`
  ${Gt(t.layout)}
  <div class="rdl">
    ${ce(t.layout.rows,e,a)}
  </div>
  ${Xt(t.layout,a)}
`,ce=(t,e,a)=>M`
  ${t.map(((t,s)=>{const i=`${e}-row${s}`;return t.groups?M`
        <div>
          ${oe(t.groups,i,a)}
        </div>
      `:null}))}
`,de=(t,e,a,s,i,n,r,o,l)=>{const c=M`${Tt()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&a.content)return M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} (${a.content.pyID})</h2>
      ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?ie("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?M`
          ${se("Actions","Start a new action",n,r)}`:""}
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
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} (${d})</h2>
    ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?ie("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?M`
        ${se("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},he=(t,e,a,s,i)=>M`
  <div class="flex layout-content-stacked">${oe(t,e,!1,i)}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?M`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,s)}
`,ue=(t,e,a,s)=>M`
  <div class="flex layout-content-stacked">${oe(t,e,!0,s)}</div>
  ${(t=>null===t?null:M`
  <div class="action-button-area">
  ${null!==t?M`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,pe=(t,e,a,s,i)=>M`
  <div class="flex layout-content-stacked">${oe(t,e,!1,i)}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,s)}
`,ge=(t,e,a,s)=>M`
  <div class="flex layout-content-stacked">${oe(t,e,!1,s)}</div>
  ${(t=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,me=t=>t.errorDetails?M`
    <ul>
      ${t.errorDetails.map((t=>M`<li>${t.localizedValue}</li>`))}
    </ul>`:M`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?M`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:M`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`,fe=(t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(M`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return M`
    ${a}
  `},ye=t=>M`
${t.pxResults.map((t=>M`
    <option>
      ${t.pyUserName}
    </option>`))}`;function be(t,e,a,s){a&&Object.defineProperty(t,e,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(s):void 0})}function ve(t,e,a,s,i){var n={};return Object.keys(s).forEach((function(t){n[t]=s[t]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=a.slice().reverse().reduce((function(a,s){return s(t,e,a)||a}),n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}var $e,we,Ce,De,Se,xe,ke,_e,Ie,Ae,Te,Re,Ee,Ne,ze,Le,Pe,qe,Me,Oe,Ue,Ve,Fe,He,je,We,Be,Je,Ze,Ye,Ke,Ge,Xe,Qe,ta;let ea=($e=X({type:String}),we=X({type:String}),Ce=X({type:String}),De=X({type:String}),Se=X({type:String}),xe=X({type:String}),ke=X({type:String}),_e=X({type:String}),Ie=X({type:String}),Ae=X({type:String}),Te=X({type:String}),Re=X({type:String}),Ee=X({type:String}),Ne=X({type:Object}),ze=X({type:String}),Le=X({type:String}),Pe=X({type:String}),Me=ve((qe=class extends st{constructor(){super(),be(this,"url",Me,this),be(this,"caseID",Oe,this),be(this,"username",Ue,this),be(this,"password",Ve,this),be(this,"title",Fe,this),be(this,"bShowCreate",He,this),be(this,"bShowCancel",je,this),be(this,"bShowAttachments",We,this),be(this,"bShowSave",Be,this),be(this,"authentication",Je,this),be(this,"token",Ze,this),be(this,"clientid",Ye,this),be(this,"clientsecret",Ke,this),be(this,"initialContent",Ge,this),be(this,"action",Xe,this),be(this,"casetype",Qe,this),be(this,"portalName",ta,this),this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1}}).prototype,"url",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Oe=ve(qe.prototype,"caseID",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ue=ve(qe.prototype,"username",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ve=ve(qe.prototype,"password",[De],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Fe=ve(qe.prototype,"title",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"My worklist"}}),He=ve(qe.prototype,"bShowCreate",[xe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),je=ve(qe.prototype,"bShowCancel",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),We=ve(qe.prototype,"bShowAttachments",[_e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"false"}}),Be=ve(qe.prototype,"bShowSave",[Ie],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Je=ve(qe.prototype,"authentication",[Ae],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ze=ve(qe.prototype,"token",[Te],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ye=ve(qe.prototype,"clientid",[Re],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ke=ve(qe.prototype,"clientsecret",[Ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ge=ve(qe.prototype,"initialContent",[Ne],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Xe=ve(qe.prototype,"action",[ze],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Qe=ve(qe.prototype,"casetype",[Le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ta=ve(qe.prototype,"portalName",[Pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),qe);class aa extends ea{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&P(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i,element:n}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let l=`${this.url}/api/v1/`;switch(t){case"worklist":l+="assignments";break;case"casetypes":l+="casetypes";break;case"newwork":l+=`casetypes/${a}`;break;case"assignment":l+=`assignments/${a}`;break;case"case":l+=`cases/${a}`;break;case"data":l+=`data/${a}`;break;case"page":l+=`cases/${a}/pages/${s}`;break;case"view":l+=`cases/${a}/views/${s}`;break;case"assignmentaction":l+=`assignments/${a}/actions/${s}`;break;case"caseaction":l+=`cases/${a}/actions/${s}`;break;case"attachment":l+=`attachments/${a}`;break;case"attachments":l+=`cases/${a}/attachments`;break;case"attachmentcategories":l+=`cases/${a}/attachment_categories`}fetch(l,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),i&&(i.disabled=!1,i.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}P(ye(e),n.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}P(pe(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}i?(this.actionID=s,P(re(e.name,he(e.view.groups,"Obj",this.actionAreaCancel,null,this)),i),i.focus()):(this.name=e.name,this.requestUpdate(),P(he(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus());break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}P(he(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},"pyCaseInformation"===s?(this.name=e.name,P(ue(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,P(he(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},!r){console.error("Error: case data are not present when retrieving the newwork");break}P(ge(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const s=e[t];if("object"==typeof s)"radio"===a.type?a.value===s.value&&(a.checked=!0):"checkbox"===a.type?!0!==s.value&&"true"!==s.value||(a.checked=!0):s.value&&(a.value=s.value),s.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===s.length?a.value=s.substring(0,23):a.value=s;else if("date"===a.type){let s;a.valueAsDate&&(s=new Date(a.valueAsDate)),s&&s instanceof Date&&s.getTime()==s.getTime()||(s=new Date(a.value)),s&&s instanceof Date&&s.getTime()==s.getTime()?(s=new Date(s.getTime()+6e4*s.getTimezoneOffset()),dt(e,t,`${ot(s.getMonth()+1)}/${ot(s.getDate())}/${s.getFullYear()}`)):dt(e,t,a.value)}else"string"==typeof s?"radio"===a.type?a.value===s&&(a.checked=!0):"checkbox"===a.type?"true"===s&&(a.checked=!0):a.value=s:"boolean"==typeof s&&"checkbox"===a.type?!0===s&&(a.checked=!0):a.value=s}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&P(ne(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:s,actionid:i,target:n,refreshFor:r}=e;let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const l={"Content-Type":"application/json;charset=UTF-8",Authorization:o},c={method:"POST",headers:l,mode:"cors"};let d=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?c.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(c.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),c.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases",c.body=JSON.stringify({content:this.content,caseTypeID:s});break;case"submitassignment":c.body=JSON.stringify({content:this.content}),d+=`assignments/${s}?actionID=${i}`;break;case"savecase":d+=`cases/${s}`,i&&""!==i&&(d+=`?actionID=${i}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshnew":d+=`casetypes/${s}/refresh`,r&&""!==r&&(d+=`?refreshFor=${r}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshassignment":d+=`assignments/${s}/actions/${i}/refresh`,r&&""!==r&&(d+=`?refreshFor=${r}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshcase":d+=`cases/${s}/actions/${i}/refresh`,r&&""!==r&&(d+=`?refreshFor=${r}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"uploadattachment":d+="attachments/upload",delete l["Content-Type"];const t=new FormData;t.append("File",i,i.name),c.body=t;break;case"attachments":d+=`cases/${s}/attachments`,c.body=JSON.stringify({attachments:i});break;case"deleteattachment":d+=`attachments/${s}`,c.method="DELETE"}fetch(d,c).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(n&&"modalcontent"===n.id)Ct(n,e.errors[0].ValidationMessages),P(me(e),n.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");Ct(t,e.errors[0].ValidationMessages),this.validationMsg=me(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&"BUTTON"===n.tagName&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const s=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!s)return void console.error("Error: case data are not present");P("refreshnew"===t?ge(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):he(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),s)}else if("savecase"===t){if(this.sendExternalEvent(t),this.fetchData("case",{id:this.caseID,target:n}),a)return void a();""!==this.assignmentID&&this.fetchData("assignment",{id:this.assignmentID})}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const a=i.name.substring(t+1),s=[{type:"File",category:i.category,fileType:a,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:s,target:n})}e.ID&&(this.caseID=e.ID),e.nextAssignmentID?(s&&(P(ee(),s),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.sendExternalEvent(t),this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(s&&(P(ee(),s),this.requestUpdate()),this.sendExternalEvent(t),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const sa=(t,e,a,s)=>M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${t} (${e})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>
    ${s?M`<div class="flex layout-content-inline_middle margin-l-auto">
        ${ie("Attachments",Tt(),"Simple",s)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${ee()}</div>`,ia=(t,e)=>M`
  <div class="error">${t}
  ${null!=e?M`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${e}">
    ${It()}</button>`:""}
  </div>`,na=(t,e,a,s,i,n)=>M`
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
      ${se("Create","Create a new case",a,i)}
    </div>
  </div>
  ${e.length>0?M`
        <table class='responsive'>
          <thead>
            <tr>
              <th span='col'>Name</th>
              <th span='col'>case ID</th>
              <th span='col' class="right-aligned">Urgency</th>
              <th span='col' class="right-aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>M`
                <tr>
                  <td data-title='Name'>${t.name}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:M`
        <div class="margin-t-2x">no assignments</div>
      `}
`;class ra extends aa{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("worklist"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content=wt(this.casedata),$t(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content=wt(this.casedata),this.validationMsg="",$t(t,this.content),this.requestUpdate(),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(M`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return M`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?fe(this.name,this.data):this.casedata.actions?fe(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(this.content=wt(this.casedata),$t(a,this.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}},this.reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})},this.submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");this.content=wt(this.casedata),$t(e,this.content),e.checkValidity()?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):e.reportValidity()}else{const t=this.getRenderRoot().querySelector("#case-data");this.content=wt(this.casedata),$t(t,this.content),t.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):t.reportValidity()}return!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&P(ee(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&P(ee(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?P(ye(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let s=t;if(a){if(this.content=wt(this.casedata),$t(a,this.content),s){"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");null!==e&&null!==t&&("addRow"===t?gt(this.content,e,s.getAttribute("data-newrow")):"deleteRow"===t&&mt(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,yt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")&&this.refreshAssignment(e,yt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){return""!==this.errorMsg?ia(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?sa(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?M`
        ${de(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${ee()}</form>
      `:"workList"===this.action?na(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}var oa,la,ca,da,ha,ua,pa;K("pega-mashup-light")(class extends ra{createRenderRoot(){return this}getRenderRoot(){return this}render(){return M`
      ${this.displayContent()}
    `}});const ga=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;let ma=(oa=K("rich-text-editor"),la=X({type:String}),ca=X({type:Element}),oa((ua=ve((ha=class extends st{createRenderRoot(){return this}constructor(t,e,a){super(),be(this,"content",ua,this),be(this,"root",pa,this),this.content=t;const s=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const i=document.createElement("div"),n=s.querySelector("body");i.setAttribute("contenteditable","true"),i.setAttribute("data-ref",e),i.setAttribute("id",a),i.innerHTML=n.innerHTML,this.root=i}render(){return M`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const s=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>ga('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>ga('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>ga('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>ga('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>ga('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>ga('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>ga('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>ga('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>ga('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>ga('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>ga('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>ga('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>ga('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>ga('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>ga('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return M`
      ${s.map((e=>M`
          ${e.values?M` <select aria-label="${e.title}" tabindex=-1
        @change=${a=>{a.preventDefault();const s=a.target.value;"--"===s?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,s)}}>
    ${e.values.map((t=>M` <option value=${t.value}>${t.name}</option>`))}
              </select>`:M` <button aria-label="${e.title}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}).prototype,"content",[la],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),pa=ve(ha.prototype,"root",[ca],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),da=ha))||da);const fa=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},ya=t=>{if(t.placeholder&&""!==t.placeholder)return ct(t.placeholder).replace("@L ","")},ba=(t,e,a,s)=>void 0===e||""===e?M`
      ${s}
    `:M`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const s=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?M`<legend class="field-caption">${ct(t.label).replace("@L ","")}</legend>`:null:M`
    ${""!==t.label?M`<label class="field-caption dataLabelForWrite ${s}" 
    for="${nt(e)}">${ct(t.label).replace("@L ","")}
    </label>`:null}
  `})(t,e,a)}${s}${((t,e)=>t.helperText&&""!==t.helperText?M`<span id=${`${e}-info`} class="helper-text">${ct(t.helperText).replace("@L ","")}</span>`:null)(t,e)}
    </div>
  `,va=(t,e,a,s,i)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.value){let e=t.config.value.replace("@P .","");if(t.config.reference=void 0===i||""===i?e:`${i}.${e}`,t.config.displayvalue=ht(s.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .","");let a="";s.data.context_data?a=s.data.context_data.content:s.data.uiResources.context_data&&s.data.uiResources.context_data.caseInfo&&s.data.uiResources.context_data.caseInfo.content&&(a=s.data.uiResources.context_data.caseInfo.content);const n=""===i?a:ht(a,i);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=s.data.uiResources.resources.fields[e],a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&s.data.data.shared[a.datasource.name]){const e=s.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const s=Object.keys(e)[0];if(e[s].pxResults){const i=a.datasource.propertyForValue.replace("@P .",""),n=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[s].pxResults){const r=e[s].pxResults[a];t.config.options[a]={key:r[i],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(s.data.data[e]&&s.data.data[e].pxResults)t.config.options=s.data.data[e].pxResults;else if(s.data.uiResources.context_data&&s.data.uiResources.context_data.caseInfo&&s.data.uiResources.context_data.caseInfo.content){const a=s.data.uiResources.context_data.caseInfo.content;if(a[i]&&a[i].summary_of_lists__[e]&&a[i].summary_of_lists__[e].pxResults){const n=a[i].summary_of_lists__[e].pxResults.replace(".pxResults","");if(s.data.data[n]&&s.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const i in s.data.data[n].pxResults){const r=s.data.data[n].pxResults[i];t.config.options[i]={key:r[e],value:r[a]}}}}}}t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",s.data.uiResources&&s.data.uiResources.resources&&s.data.uiResources.resources.fields&&s.data.uiResources.resources.fields[e]&&s.data.uiResources.resources.fields[e].isDeclarativeTarget&&(n=!0,s.isDeclarativeTarget=!0)}if(!0===a)return ba(t.config,e,"field-text",$a(t.config,t.type,e));"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(s.refreshOnChange=!0);const r=s.data.data.caseInfo.content;if("string"==typeof t.config.visibility){if(!vt(t.config.visibility,r))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;switch(t.config.readonlystate=!1,"string"==typeof t.config.readOnly?t.config.readonlystate=vt(t.config.readOnly,r):(t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required?t.config.requiredstate=vt(t.config.required,r):(t.config.required||"true"===t.config.required)&&(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled?t.config.disabledstate=vt(t.config.disabled,r):(t.config.disabled||"true"===t.config.disabled)&&(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),t.type){case"Decimal":case"TextInput":return ba(t.config,e,"field-textinput",wa(t.config,e));case"Phone":return ba(t.config,e,"field-phoneinput",Ca(t.config,e));case"Email":return ba(t.config,e,"field-emailinput",ka(t.config,e));case"Integer":return ba(t.config,e,"field-numberinput",Da(t.config,e));case"Percentage":return ba(t.config,e,"field-percentage",Sa(t.config,e));case"Currency":return ba(t.config,e,"field-currencyinput",xa(t.config,e));case"RadioButtons":return ba(t.config,e,"field-radiogroup",Ta(t.config,e));case"TextArea":return ba(t.config,e,"field-textarea",_a(t.config,e));case"RichText":return ba(t.config,e,"field-richtext",Ia(t.config,e));case"Checkbox":return ba(t.config,e,"field-checkbox",Aa(t.config,e));case"Dropdown":return ba(t.config,e,"field-dropdown",Ra(t.config,e));case"DateTime":return ba(t.config,e,"field-datetime",Ea(t.config,e));case"Date":return ba(t.config,e,"field-date",Na(t.config,e));case"Time":return ba(t.config,e,"field-time",za(t.config,e));case"AutoComplete":return ba(t.config,e,"field-autocomplete",La(t.config,e));case"SemanticLink":return ba(t.config,e,"field-semanticlink",Pa(t.config));case"Attachment":return ba(t.config,e,"field-attachment",qa(t.config,e,s));default:return null}},$a=(t,e,a)=>{let s=t.displayvalue;if(""!==s){if("Phone"===e)return M`<a data-ref="${t.reference}" id="${nt(a)}" href="${`tel:${s}`}">${s}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){s=lt(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}return M`
    <span class="dataValueRead" data-ref="${t.reference}" id="${nt(a)}">${ct(s)}</span>
  `},wa=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${nt(ya(t))}"
    type="text"
    aria-describedby="${nt(fa(t,e))}"
    id="${nt(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Ca=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),M`
<div> 
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="select country code">
  ${t.options.map((t=>M`<option ?selected=${t.pyCallingCode===a} 
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${nt(ya(t))}"
   type="tel"
   aria-describedby="${nt(fa(t,e))}"
   id="${nt(e)}"
   value="${ct(t.displayvalue)}"
 />
 </div>
`},Da=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${nt(ya(t))}"
    type="number"
    aria-describedby="${nt(fa(t,e))}"
    id="${nt(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Sa=(t,e)=>M`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${nt(ya(t))}"
   type="text"
   aria-describedby="${nt(fa(t,e))}"
   id="${nt(e)}"
   value="${ct(t.displayvalue)}"
 />
`,xa=(t,e)=>M`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${nt(ya(t))}"
    type="number"
    aria-describedby="${nt(fa(t,e))}"
    id="${nt(e)}"
    value="${ct(t.displayvalue)}"
  />
  </div>
`,ka=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${nt(ya(t))}"
    type="email"
    aria-describedby="${nt(fa(t,e))}"
    id="${nt(e)}"
    value="${ct(t.displayvalue)}"
  />
`,_a=(t,e)=>M`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${nt(ya(t))}"
    type="email"
    aria-describedby="${nt(fa(t,e))}"
    id="${nt(e)}"
  >${ct(t.displayvalue)}</textarea>
`,Ia=(t,e)=>new ma(ct(t.displayvalue),t.reference,e),Aa=(t,e)=>{const a=t.requiredstate?"icon-required":"";return M`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${nt(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${nt(fa(t,e))}"
  id=${nt(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${nt(e)}>
  ${ct(t.caption).replace("@L ","")}
    </label>
`},Ta=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),M`
    ${a.map(((a,s)=>{const i=`rb-${e}-${s}`;return M`
        <div>
          <input
            data-ref="${t.reference}"
            name=${nt(e)}
            id=${i}
            type="radio"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${nt(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${i}">${a.value}</label>
        </div>
      `}))}
  `},Ra=(t,e)=>M`<select
  data-ref="${t.reference}"
  aria-describedby="${nt(fa(t,e))}"
  id=${nt(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${nt(ya(t))}"
    <option value="" title="Select...">Select...</option>
    ${t.options.map((e=>M`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,Ea=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}T${ot(e.getHours())}:${ot(e.getMinutes())}`):8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${nt(fa(t,e))}"
      id="${nt(e)}"
      value="${a}"
    />
  `},Na=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${nt(fa(t,e))}"
      id="${nt(e)}"
      value="${a}"
    />
  `},za=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${ot(e.getHours())}-${ot(e.getMinutes())}-${ot(e.getSeconds())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${nt(fa(t,e))}"
      id="${nt(e)}"
      value="${a}"
    />
  `},La=(t,e)=>t.options?M`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${nt(ya(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${nt(fa(t,e))}"
        id="${nt(e)}"
        value="${ct(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>M`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,Pa=()=>M`
 <a>semantic link</a>
`,qa=(t,e,a)=>{let s=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(s=t.displayvalue.pxResults),ne(void 0,s,a.caseID,a)},Ma=(t,e)=>M`
  ${t.map((t=>M`
    <th scope='col'>${t.config.label.replace("@L ","")}</th>`))}${e?null:M`<th></th>`}
`,Oa=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .",""),null)));const a=t.config.referenceList.replace("@P .","");return M`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="Add row" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${_t()}Add item</button>
      </div>
    `}return null},Ua=(t,e,a)=>{const s=t.config.referenceList.replace("@P .",""),i=t.config.children[0].children,n=a.data.data.caseInfo.content[s];return n?M`
  ${n.map(((t,n)=>M`
    <tr>
    ${i.map((t=>{const i=t,r=t.config.label.replace("@L ","");return M`
    <td data-title="${r}">${va(i,"",e,a,`${s}(${n+1})`)}</td>`}))}${e?null:M`<td><button type="button" class="pzhc pzbutton Simple" aria-label="Delete row" data-ref=${`${s}(${n+1}).pyTemplate`}  
  data-action-click='deleteRow'>${At()}</button></td>`}
    </tr>`))}
`:null},Va=(t,e,a,s,i)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return M`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return Va(t.children,`${e}-0`,!0,s,i);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=t.config.inheritedProps[0].value.replace("@L ",""),o=s.data.uiResources.resources.views[t.config.name];if(o){const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return M`<div class='flex content-item field-item ${t}'><h4>${n}</h4>${Va(o,r,a,s,""===i?e.substring(1):i+e)}</div>`}}return Va(s.data.uiResources.resources.views[t.config.name],r,a,s,i&&""!==i?i+e:e.substring(1))}return va(t,r,a,s,i)}))}`;if("SimpleTable"===t.config.template)return((t,e,a)=>{const s=e||"Editable"!==t.config.renderMode;return M`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ma(t.config.children[0].children,e)}
      </tr>
    </thead>
    <tbody>
      ${Ua(t,s,a)}
    </tbody>
  </table>
  ${Oa(t,s)}`})(t,a,s);if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),M`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ma(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${ee()}
    </tbody>
  </table>`))(t,a,s);switch("DataReference"===t.config.template&&(s.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return M`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Va(t.children[0].children,`${e}-0`,a,s,i)}</div>
            <div class="flex layout-content-stacked">${Va(t.children[1].children,`${e}-1`,a,s,i)}</div>
          </div>
        `;case"DefaultForm":return M`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${Va(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;case"DataReference":return M`
          <div class="flex layout-content-stacked">
            ${Va(t.children,`${e}-0`,a,s,i)}
          </div>
        `;case"OneColumn":return M`
          <div class="flex layout-content-stacked">
            ${Va(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;case"Details":return M`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Va(t.children[0].children,`${e}-0`,!0,s,i)}
          </div>
        `;default:return null}},Fa=(t,e,a,s,i,n,r,o,l)=>{const c=M`${Tt()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${e.data.caseInfo.name} (${t})</h2>
      ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?ie("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?M`
          ${se("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?M`
  <h3>
    Assignments
  </h3>
  <table class='responsive'>
    <thead>
      <tr>
        <th span='col'>Priority</th>
        <th span='col'>Task</th>
        <th span='col'>Assigned to</th>
        <th  span='col' class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>M`
        <tr>
          <td data-title='Priority'>${t.urgency}</td>
          <td data-title='Task'>${t.name}</td>
          <td data-title='Assigned'>${t.assigneeInfo.name}</td>
          <td data-title='Action' class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.assignments,o)}
    <h3>Case information</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.data.caseInfo.name} (${d})</h2>
    ${""!==s?M`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?ie("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?M`
        ${se("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},Ha=(t,e,a,s,i)=>M`
  <div>${Va(t,e,!1,i,"")}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?M`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,s)}
`,ja=(t,e,a,s)=>M`
  <div>${Va(t,e,!0,s)}</div>
  ${(t=>null===t?null:M`
  <div class="action-button-area">
  ${null!==t?M`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,Wa=(t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(M`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return M`
    ${a}
  `};class Ba extends ea{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&P(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${s}`;break;case"caseaction":o+=`cases/${a}/actions/${s}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel});this.cases=[];let r=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?r=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(r=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),r.length>0)for(const t of r)this.cases.push({name:t.pyLabel,caseID:t.pxRefObjectKey,urgency:t.pxUrgencyAssign,ID:t.pzInsKey});this.requestUpdate();break;case"assignment":this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a,this.actionID=this.casedata.content.pyViewName,this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},P(Ha(e.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,P(ja(e.uiResources.resources.views[s],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),n),this.requestUpdate(),n.focus();break;case"caseaction":this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},P(Ha(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),n),this.requestUpdate(),n.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&P(ne(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:s,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"};let l=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",l=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":l+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`assignments/${a}/actions/${s}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`cases/${a}/actions/${s}?viewType=form`;break;case"refreshassignment":l+=`assignments/${a}/actions/${s}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:this.content,contextData:!0});break;case"dataviews":l+=`data_views/${a}`,o.body=JSON.stringify(e.content);break;case"uploadattachment":l+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",s,s.name),o.body=t;break;case"attachments":l+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:s});break;case"deleteattachment":l+=`attachments/${a}`,o.method="DELETE"}fetch(l,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(!(a.errors&&a.errors.length>0)){if(a.access_token)this.token=a.access_token,e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");Ct(t,a.errorDetails),this.validationMsg=(t=>t.errorDetails?M`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message?null:M`<li>${ct(t.localizedValue)}</li>`))}
    </ul>`:null)(a)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("refreshassignment"===t)return void(e&&a.data.caseInfo&&a.data.caseInfo.content&&(this.data.data.caseInfo.content=a.data.caseInfo.content,P(Ha(this.data.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e)));if("deleteattachment"===t)i&&!i.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:i});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const e=s.name.substring(t+1),n=[{type:"File",category:s.category,fileType:e,name:s.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}a.confirmationNote?(this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):a.uiResources&&(this.bShowNew=!1,this.assignmentID=a.nextAssignmentInfo.ID,this.sendExternalEvent(t),this.data=a,this.casedata.content=a.data.caseInfo.content,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.actionID=a.uiResources.root.config.name,this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(P(Ha(a.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e),e.focus()))}this.requestUpdate()}})).catch((t=>{this.genErrorMessage(t)}))}}class Ja extends Ba{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("portal"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content={},$t(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content={},this.validationMsg="",$t(t,this.content),this.requestUpdate(),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(M`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
      `);return M`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?Wa(this.name,this.data):this.casedata.actions?Wa(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content={},$t(a,this.content),a.checkValidity()?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&P(ee(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&P(ee(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?P(ye(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let s=t;if(a){if(this.content={},$t(a,this.content),s){"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),i=s.getAttribute("data-ref");null!==i&&null!=t&&("addRow"===t?(gt(this.content,i,s.getAttribute("data-newrow")),e=a):"deleteRow"===t&&mt(this.content,i))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,yt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,yt(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data"),e=this.data.data.caseInfo.content;$t(t,e),P(Ha(this.data.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){if(this.bShowSave="false",""!==this.errorMsg)return ia(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return sa(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?M`
        ${Fa(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${ee()}</form>
      `:"workList"===this.action?na(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}K("pega-mashup-light-v2")(class extends Ja{createRenderRoot(){return this}getRenderRoot(){return this}render(){return M`
      ${this.displayContent()}
    `}})}();
