var e={892:(e,t,s)=>{const n=s(452),r=s(904),a=s(946),i=s(398),o=s(882);e.exports.un=n,e.exports._V=a,e.exports.gg=i,e.exports.Mb=o,e.exports.qT=r},452:(e,t,s)=>{const n=s(957),r=s(882);class a extends Error{constructor(e){super(`Argument 'arg' of getArgumentDefaultValue(arg) has invalid type - ${e}. Argument type must be a string.`)}}class i extends Error{constructor(){super("Argument 'arg' is an empty string.")}}e.exports=function(e){const t=r(e);if("string"!==t)throw new a(t);if(""===e)throw new i;const s=e.split("=");return{name:s[0].trim(),value:s.length>1?n(s[1].trim()):void 0}}},904:(e,t,s)=>{const n=s(882);class r extends Error{constructor(e){super(`Argument 'cls' of getBaseClass(cls) has invalid type - ${e}. Argument type must be a class or a function.`)}}e.exports=e=>{const t=n(e);if("class"!==t&&"function"!==t)throw new r(t);return"class"===t?e.prototype.__proto__.constructor:e.prototype}},946:(e,t,s)=>{const{findCloseBraceIndex:n,splitArgsStrByCommas:r}=s(398),a=s(882);class i extends Error{constructor(){super("DI object has no one constructor. Need one or more.")}}class o extends Error{constructor(e){super(`Argument cls with invalid type - ${e}. Argument value type must be a class.`)}}e.exports=e=>{const t=a(e);if("class"!==t)throw new o(t);const s=e.toString(),c=s.indexOf("constructor",0);if(-1===c)throw new i;const l=s.indexOf("(",c);let d=n(s,l);const u=s.slice(l+1,d);return{startPosition:c,args:r(u).map((e=>e.trim())).filter((e=>""!==e))}}},398:(e,t,s)=>{const n=s(882);class r extends Error{constructor(e){super(`Argument func with invalid type - ${e}. Argument value type must be a function.`)}}const a=(e,t)=>{const s=e.indexOf("(",t);let n=e.indexOf(")",s);const r=t=>e.split("").slice(s,t).map(((e,t)=>({char:e,index:t}))).filter((e=>"("===e.char)).length;let a=r(n),i=0;for(;a>1;)i++,n=e.indexOf(")",n+1),a=r(n)-i;return n},i=e=>{const t=e.split("").map(((e,t)=>({char:e,index:t}))).filter((e=>","===e.char));let s=0;return t.filter((t=>{const n=e.slice(s,t.index).split("").filter((e=>"("===e)).length,r=e.slice(s,t.index).split("").filter((e=>")"===e)).length,a=e.slice(s,t.index).split("").filter((e=>"{"===e)).length,i=e.slice(s,t.index).split("").filter((e=>"}"===e)).length;return n===r&&a===i&&(s=t.index,!0)})).map((e=>e.index))},o=e=>{const t=[-1,...i(e),null];return t.slice(1).map(((s,n)=>null===s?e.slice(t[n]+1):e.slice(t[n]+1,s)))};e.exports=e=>{const t=n(e);if("function"!==t&&"function class"!==t)throw new r(t);const s=e.toString(),i=s.indexOf("(",0),c=a(s,i),l=s.indexOf("=");let d;d=-1!==l&&(-1===i||l<i)?s.slice(0,l):i+1===c?"":s.slice(i+1,c);return{startPosition:-1===i?0:i,args:o(d).map((e=>e.trim())).filter((e=>""!==e))}},e.exports.findCloseBraceIndex=a,e.exports.splitArgsStrByCommas=o},957:(e,t,s)=>{const n=s(882);class r extends Error{constructor(e,t){super(`getStringifiedEntityName argument type is invalid (${e} - ${t}). 'entityStr' must be a string.`)}}class a extends Error{constructor(){super("getStringifiedEntityName argument is an empty string.")}}e.exports=e=>{const t=n(e);if("string"!==t)throw new r(e,t);if(""===e)throw new a;if(e.includes("WEBPACK_IMPORTED_MODULE")){const t=e.indexOf("_")+1,s=e.indexOf("_",t+1);return e.slice(t,s)}return e}},882:e=>{e.exports=function(e){const t=typeof e;if("function"!==t)return"object"===t&&null===e?"null":t;const s=e.toString();return s.startsWith("class")?"class":s.includes("_classCallCheck")?"function class":"function"}}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{s.d(n,{LH:()=>xe,R8:()=>Ee,hl:()=>De,zg:()=>ve,CC:()=>ke,f0:()=>Te,a6:()=>Ae,TN:()=>Ne,tf:()=>Le,vL:()=>$e,v0:()=>Pe,vp:()=>ze,s2:()=>_e,vj:()=>Me,qf:()=>Oe,Bx:()=>Se,KE:()=>je,Tq:()=>Fe,Ay:()=>Ke});var e=s(892);class t extends Error{constructor(){this.message="Not implemented error",super(this.message)}}const r=class{constructor(e){this.id=e}beforeCreate(){throw new t}afterCreate(){throw new t}};const a=class{constructor(t,s,n,a,i,o){if("undefined"===(0,e.Mb)(t)||"null"===(0,e.Mb)(t)||"boolean"===(0,e.Mb)(t))throw new Error("DIClazz constructor argument 'key' is invalid. Argument 'key' must not be an undefined, null or boolean.");if("string"!==(0,e.Mb)(s))throw new Error("DIClazz constructor argument 'name' is invalid. Argument 'name' type must be a string.");if("class"!==(0,e.Mb)(n)&&"function"!==(0,e.Mb)(n)&&"function class"!==(0,e.Mb)(n))throw new Error("DIClazz constructor argument 'type' is invalid. Argument 'type' must be a class or a function.");if("boolean"!==(0,e.Mb)(a))throw new Error("DIClazz constructor argument 'isClass' is invalid. Argument 'isClass' must be a boolean.");if(!(i instanceof r))throw new Error("DIClazz constructor argument 'lifecycle' is invalid. Argument 'lifecycle' must be an instance of Lifecycle.");this.key=t,this.name=s,this.type=n,this.isClass=a,this.lifecycle=i,this.constructor=o}},i={Persistent:0,Session:1,Singletone:2,Demanded:3};const o=class extends r{constructor(e=(()=>{}),t=(()=>{})){super(i.Demanded),this.beforeCreate=e,this.afterCreate=t}};const c=class extends r{constructor(e=(()=>{}),t=(()=>{})){super(i.Session),this.beforeCreate=e,this.afterCreate=t}};const l=class extends r{constructor(e=(()=>{}),t=(()=>{})){super(i.Singletone),this.beforeCreate=e,this.afterCreate=t}};class d extends Error{constructor(e){super(`DI object name { ${e} } is invalid. Name must be a not empty string`),this.name="InvalidDIObjectName"}}Error;class u extends Error{constructor(e){super(`There is no registered lifecycle with id = ${e.id}.`),this.name="UnregisteredDIObjectLifecycle"}}class h extends Error{constructor(e){super(`Invalid lifecycle { ${e} }. lifecycle prop must be an instance of Lifecycle or it's derived class.`),this.name="InvalidDIObjectLifecycle"}}class f extends Error{constructor(e){super(`DI object type { ${e} } is invalid. type prop must be a class or a function`),this.name="InvalidDIObjectType"}}class y{constructor(t,s,n){if("string"!=typeof t&&"symbol"!=typeof t||!0==!t)throw new d(t);if("class"!==(0,e.Mb)(s)&&"function"!==(0,e.Mb)(s)&&"function class"!==(0,e.Mb)(s))throw new f(s);if(!(n instanceof r))throw new h(n);this.name=t,this.type=s,this.lifecycle=n}}class p extends Error{constructor(t){super(`DIObjectKey constructor argument ('key' = ${t?t.toString():t} (type - ${(0,e.Mb)(t)})) is invalid.\nArgument 'key' must be a string like '@{parentName}/{DIObjectName}/{lifecycleId}/{isClass}'`)}}const m=class{constructor(e){if("string"!=typeof e)throw new p(e);if(!/@[\w\s]+\/[\w\s]+\/[\d]+\/true/.test(e)&&!/@[\w\s]+\/[\w\s]+\/[\d]+\/false/.test(e))throw new p(e);this.key=e}parseKey(){const e=this.key.split("/");return{parent:{name:e[0].length>1?e[0].slice(1):""},name:e[1],lifecycle:Number(e[2]),isClass:Boolean(e[3])}}};class g extends Error{constructor(e,t){super(`${e} requires ${t}. And ${t} requires ${e}.`),this.name="Dependency loop error."}}const b=g;class w extends Error{constructor(){super("Invalid context config. Config must be an array of DIObjectConfig instances")}}const C=w;class I extends Error{constructor(e,t,s){super(`Invalid argument { ${t} } default value in ${e}. There is no { ${s} } in DI Container.`),this.name="Invalid DI Object arg default value error."}}const x=I;class D extends Error{constructor(e,t){super(`Invalid argument name { ${t} } in ${e}. There is no object with name { ${t} } in DI Container.`),this.name="Invalid DI Object arg name error."}}const v=D;class E extends Error{constructor(e){super(`Not allowed DI object type of ${e.__proto__.prototype.name}. DI object must be class or function.`),this.name="Invalid DI Object type."}}const N=E;const z=class{constructor(){}hasInstance(){}getInstance(){}filterInstances(){}getParent(){}typeMatch(e,t){}};class S extends a{constructor(t,s,n){if(!(t instanceof a))throw new Error("DependencyTreeNode 'baseClazz' is invalid. Constructor argument 'baseClazz' must be a DIClazz instance.");if("number"!==(0,e.Mb)(s))throw new Error(`DependencyTreeNode 'height' is invalid (type - ${(0,e.Mb)(s)}). Constructor argument 'height' must be a number`);if(!Array.isArray(n)||n.length&&n.find((e=>!(e instanceof S))))throw new Error("DependencyTreeNode 'deps' is invalid. Constructor argument 'deps' must be an array of DependencyTreeNode instances.");const{key:r,name:i,type:o,isClass:c,lifecycle:l,constructor:d}=t;super(r,i,o,c,l,d),this.height=s,this.deps=n}}const T=S;class k extends Error{constructor(){super("DependencyTree baseNode arg is invalid. Constructor argument 'baseNode' must be an instance of DependencyTreeNode")}}const A=class{constructor(e){if(!(e instanceof T))throw new k;this.baseNode=e}#e(e,t=this.baseNode){const s=[];return t.height<e?t.deps.forEach((t=>{s.push(...this.#e(e,t))})):t.height===e&&s.push(t),s}getDepsByHeight(t){if("number"!==(0,e.Mb)(t))throw new Error("getDepsByHeight arg 'height' is undefined. Argument 'height' value must be a positive number");if(t<0)throw new Error("getDepsByHeight arg 'height' is a negative number. Argument 'height' value must be a positive number");return this.#e(t)}groupByHeight(){let e=0;const t=[];let s=this.getDepsByHeight(e);for(;s&&s.length>0;)t.push({height:e,deps:s}),e++,s=this.getDepsByHeight(e);return t}};class j extends Error{constructor(){super("Invalid di parent. Parent must be an instance of AbstractDIContainer or it's derived class, null or undefined.")}}class O extends Error{constructor(){super("DIContainer constructor's argument 'classTreeList' is invalid. Argument 'classTreeList' must be an array of DependencyTree instances")}}class L extends z{constructor(e,t=[]){if(null!=e&&!(e instanceof L))throw new j;if(!Array.isArray(t)||t.length&&t.find((e=>!(e instanceof A))))throw new O;super(),this.classTreeList=t}}const _=L;class $ extends Error{constructor({parent:e,name:t,lifecycle:s,isClass:n}){super(`DI key with description {\n            parent: ${e?e.name:"null"},\n            name: ${t},\n            lifecycle: ${s.id},\n            isClass: ${n}\n        } isn't unique. There is another DI object with this key.`),this.name="NotUniqueDIKey"}}const F=class{constructor(e=new Map){this.#t=e}#t;createKey(e,t,s,n){this.#s(e,t,s,n);const r={parent:e,name:t,lifecycle:s,isClass:n},a=this.#n(r);if(this.#t.has(a))throw new $(r);const i=new m(a);return this.#t.set(a,i),i}#n({parent:e,name:t,lifecycle:s,isClass:n}){return console.log(e),`@${e?.name}/${t}/${s.id}/${n}`}#s(t,s,n,a){if(!(t instanceof V))throw new Error("DIObjectKeyFactory.create() 'parent' arg is invalid. 'parent' must be an instance of AbstractContextContainer");if("string"!==(0,e.Mb)(s))throw new Error("DIObjectKeyFactory.create() 'name' arg is invalid. 'name' must be a string.");if(""===s)throw new Error("DIObjectKeyFactory.create() 'name' arg is empty.");if(!(n instanceof r))throw new Error("DIObjectKeyFactory.create() 'lifecycle' arg is invalid. 'lifecycle' must be an instance of Lifecycle");if(!Object.values(i).find((e=>e===n.id)))throw new u(n);if("boolean"!==(0,e.Mb)(a))throw new Error("DIObjectKeyFactory.create() 'isClass' arg type is invalid. 'isClass' type must be boolean");return!0}};class M extends Error{constructor(){super("Argument 'baseClazz' is invalid. 'baseClazz' must be an instance of DIClazz"),this.name="DependencyTreeFactory.createDependencyTree() Error"}}class P extends Error{constructor(){super("Argument 'allClasses' is invalid. 'allClasses' must be a not empty array of DIClazz instances"),this.name="DependencyTreeFactory.createDependencyTree() Error"}}class K{static createDependencyTree(e,t){if(!(e instanceof a))throw new M;if(!Array.isArray(t)||t.length&&-1!==t.findIndex((e=>!(e instanceof a)))||!t.length)throw new P;const s=new T(e,0,[]);return K.#r(s,t),new A(s)}static#a(e,t){e.deps.push(t)}static#r(e,t){if(!(e.constructor.args.length>0))return e;e.constructor.args.forEach((s=>{const n=t.find((e=>e.name===s)),r=new T(n,e.height+1,[]);K.#a(e,r),K.#r(r,t)}))}}const B=K;class H extends Error{constructor(e,t){super(`The number of constructor arguments in the derived class ${e} must be >= than the number of\n            constructor arguments of its base class ${t}.`),this.name="Derived class constructor args count error"}}class q extends Error{constructor(){super("Invalid context child. Child must be an instance of AbstractContextContainer or it's derived class, null or undefined.")}}class R extends _{constructor(e=[],t="",s=null,n=new F){super(s,[]),this.config=e,this.name=t,this.#i=n}#o=!1;#c;#i;#l=[];#d=new Map;classTreeList=[];scopes=new Map;init(){this.#o||(this.classTreeList=[],this.#u(),this.#h(),this.#f(),this.#y(),this.classTreeList.sort(((e,t)=>e.baseNode.constructor.args.length-t.baseNode.constructor.args.length)),this._createScopes(),this._initScopes(),this.#d.forEach((e=>{e.init&&e.init()})),this.#o=!0)}#u(){this.#l=this.config.map(this.#p.bind(this))}#p(t){const s="symbol"==typeof t.name?Symbol.keyFor(t.name):t.name,n=(0,e.Mb)(t.type);if("class"!==n&&"function"!==n&&"function class"!==n)throw new N(t.type);const r="class"===n||"function class"===n,i="class"===n?{args:(0,e._V)(t.type).args}:{args:(0,e.gg)(t.type).args},o={...i,args:i.args.map((s=>{const n=(0,e.un)(s);if(n&&n.value){const e=this.config.find((e=>e.type.name===n.value));if(!e)throw new x(t.name,n.name,n.value);return"symbol"==typeof e.name?Symbol.keyFor(e.name):e.name}return s}))};return new a(this.#i.createKey(this,s,t.lifecycle,r),s,t.type,r,t.lifecycle,o)}addDIObject(e){if(!(e instanceof DIObjectConfig))throw new C;const t=this.#p(e);return this.classTreeList.push(B.createDependencyTree(t,this.#l)),!0}#y(){this.classTreeList=this.#l.map((e=>B.createDependencyTree(e,this.#l)))}_createScopes(){}_initScopes(){}hasInstance(e){}getInstance(e,t){}_findClassTree(e,t){let s,n;switch(typeof e){case"string":s=t=>t.baseNode.name===e;break;case"symbol":s=t=>t.baseNode.name===Symbol.keyFor(e);break;default:s=t=>t.baseNode.type.name===e.name}if(n=void 0!==t?[...this.classTreeList].filter((e=>e.baseNode.lifecycle.id===t)).find(s):[...this.classTreeList].sort(((e,t)=>e.baseNode.lifecycle.id-t.baseNode.lifecycle.id)).find(s),n)return n}typeMatch(e,t){}getParent(){return this.#c}setParent(e){if(e instanceof R){if(e.getChildren().has(this.name))throw new Error("Parent already has this context as a child.");this.#c=e,e.addChild(this)}}_removeParent(){this.#c=null}_getChildInstance(e,t){let s;return[...this.#d.values()].find((n=>(s=n.getInstance(e,t),void 0!==s)))?s:void 0}getChildren(){return this.#d}addChild(e){if(!(e instanceof R))throw new q;this.#d.set(e.name,e)}deleteChild(e){this.#d.has(e)&&(this.#d.get(e)._removeParent(),this.#d.delete(e))}getScope(e){}filterClassesByLifecycle(e){return this.classTreeList.filter((t=>t.baseNode.lifecycle.id===e))}#m(e){}#h(){const e=new Set;this.#l.forEach((t=>t.constructor.args.forEach((s=>e.add({name:s,place:t.name}))))),e.forEach((e=>{if(void 0===this.#l.find((t=>t.name===e.name)))throw new v(e.place,e.name)}))}#g(t){if("class"!==(0,e.Mb)(t))return!0;const s=(0,e.qT)(t),n=-1!==this.config.findIndex((e=>e.type.name===s.name));if("Object"!==s.name){if(n){const n=(0,e._V)(t).args,r=(0,e._V)(s).args;if(n.length<r.length)throw new H(t.name,s.name)}return this.#g(s)}return!0}#f(){return this.#l.forEach((e=>{e.constructor.args.forEach((t=>{this.#b([e.name,t],t)}))})),!0}#b(e=[],t){if(0===this.#l.length)return;void 0===t&&(t=this.#l[0].name);const s=this.#l.find((e=>e.name===t));s.constructor.args.forEach((t=>{if(e.includes(t))throw new b(t,s.name);this.#b([...e,t],t)}))}}const V=R;class U extends Error{constructor(e,t){super(`${e}Container's classTreeList arg has class { ${t.name} } with another lifecycle.`),this.name="DI Container has class with invalid lifecycle type"}}const G=U;const W=class{constructor(e,t){this.func=e,this.args=t}call(){return this.func(...this.args)}};const J=class{static createInstance(e,t){return e.isClass?new e.type(...t):new W(e.type,t)}};class Q extends Error{constructor(){super("Invalid simple container parent. Parent must be an instance of AbstractContextContainer or it's derived class, null or undefined.")}}const X=class extends _{constructor(e,t=[]){if(!(e instanceof V))throw new Q;super(e,t)}_buildInstance(e){const t=[];e.baseNode.constructor.args.length>0&&e.baseNode.constructor.args.forEach((e=>{const s=this.getParent().classTreeList.find((t=>t.baseNode.name===e)),n=this.getInstance(s.baseNode.key)||this.getParent().getInstance(s.baseNode.name,s.baseNode.lifecycle.id,!0);if(n)return t.push(n);t.push(this._buildInstance(s))}));const s=J.createInstance(e.baseNode,t);return this.addInstance(e.baseNode.key,s),s}addInstance(){}},Y=function(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let s in e){if(!t.hasOwnProperty(s))return!1;if(!Y(e[s],t[s]))return!1}return!0}return!1},Z=Y;class ee extends Map{constructor(){super()}getBySymbol(e){let t;return this.forEach(((s,n)=>{Z(Symbol.keyFor(n),Symbol.keyFor(e))&&(t=s)})),t}hasBySymbol(e){let t=!1;return this.forEach(((s,n)=>{Z(Symbol.keyFor(n),Symbol.keyFor(e))&&(t=!0)})),t}}const te=ee;const se=class extends X{constructor(e,t=[]){super(e,t);const s=t.find((e=>e.baseNode.lifecycle.id!==i.Session));if(s)throw new G("Session",s);this.#c=e}#w=!1;#c;#C=new te;init(){this.#w||(this.classTreeList.forEach((e=>{this.#C.has(e.baseNode.key.key)||this.#I(e)})),this.#w=!0)}#I(e){e.baseNode.lifecycle.beforeCreate();const t=this._buildInstance(e);return e.baseNode.lifecycle.afterCreate.bind(t)(),t}addInstance(e,t){if(!(e instanceof m))throw new Error("Invalid key type. Argument 'key' must be an instance of DIObjectKey class.");this.#C.set(e.key,t)}hasInstance(e){if(!this.#w)return!1;if(!(e instanceof m))throw new Error("Invalid argument 'key'. Argument 'key' must be an instance of DIObjectKey.");return this.#C.has(e.key)}getInstance(e){if(this.#w)return this.#C.get(e.key)}getParent(){return this.#c}};const ne=class extends X{constructor(e,t=[]){super(e,t);const s=t.find((e=>e.baseNode.lifecycle.id!==i.Singletone));if(s)throw new G("Singletone",s);this.#c=e}#c;#C=new te;#I(e){e.baseNode.lifecycle.beforeCreate();const t=this._buildInstance(e);return e.baseNode.lifecycle.afterCreate.bind(t)(),t}addInstance(e,t){if(!(e instanceof m))throw new Error("Invalid key type. Argument 'key' must be an instance of DIObjectKey class.");this.#C.set(e.key,t)}hasInstance(e){return this.#C.has(e.key)}getInstance(e){const t=this.#C.get(e.key);if(t)return t;const s=this.classTreeList.find((t=>t.baseNode.key.key===e.key));return s?this.#I(s):void 0}getParent(){return this.#c}};class re extends Error{constructor(){super("Invalid demanded factory parent. Parent must be an instance of AbstractContextContainer or it's derived class, null or undefined.")}}class ae extends Error{constructor(){super("DemandedFactory constructor's argument 'classTreeList' is invalid. Argument 'classTreeList' must be an array of DependencyTree instances")}}const ie=class{constructor(e,t=[]){if(!(e instanceof V))throw new re;if(!Array.isArray(t)||t.length&&t.find((e=>!(e instanceof A))))throw new ae;const s=t.find((e=>e.baseNode.lifecycle.id!==i.Demanded));if(s)throw new G("Demanded",s);this.classTreeList=t,this.#c=e}#c;#I(e){const t=[];e.baseNode.constructor.args.length>0&&e.baseNode.constructor.args.forEach((e=>{const s=this.getParent().classTreeList.find((t=>t.baseNode.name===e)),n=s.baseNode.lifecycle.id!==i.Demanded?this.getParent().getInstance(s.baseNode.name,s.baseNode.lifecycle.id,!0):void 0;if(n)return t.push(n);t.push(this.createInstance(s.baseNode.key))})),e.baseNode.lifecycle.beforeCreate();const s=J.createInstance(e.baseNode,t);return e.baseNode.lifecycle.afterCreate.bind(s)(),s}createInstance(e){const t=this.classTreeList.find((t=>t.baseNode.key.key===e.key));if(t)return this.#I(t)}getParent(){return this.#c}};const oe=class extends V{constructor(e=[],t="",s=null,n=new F){super(e,t,s,n)}scopes=new Map;_createScopes(){new Set(this.classTreeList.map((e=>e.baseNode.lifecycle)).sort(((e,t)=>t.id-e.id))).forEach((e=>{switch(e.id){case i.Session:this.scopes.set(e.id,new se(this,this.filterClassesByLifecycle(i.Session)));break;case i.Singletone:this.scopes.set(e.id,new ne(this,this.filterClassesByLifecycle(i.Singletone)));break;case i.Demanded:this.scopes.set(e.id,new ie(this,this.filterClassesByLifecycle(i.Demanded)))}}))}_initScopes(){this.scopes.forEach((e=>{e.init&&e.init()}))}hasDIObject(e){return void 0!==this._findClassTree(e)}hasInstance(e){const t=this._findClassTree(e);if(void 0===t)return!1;const s=this.getScope(t.baseNode.lifecycle.id);return t.baseNode.lifecycle.id!==i.Demanded&&s.hasInstance(t.baseNode.key)}getInstance(e,t,s){const n=this._findClassTree(e,t);if(void 0===n){if(s)return;return this._getChildInstance(e,t)}const r=n.baseNode.key,a=this.getScope(n.baseNode.lifecycle.id);if(!a){if(s)return;return this._getChildInstance(e,t)}return a instanceof ie?a.createInstance(r):s?a.getInstance(r):a.getInstance(r)??this._getChildInstance(e,t)}typeMatch(e,t){const s=this._findClassTree(e);if(void 0===s)throw new Error("There is no di object with this name.");return s.baseNode.type===t}getScope(e){return"number"==typeof e&&Object.values(i).find((t=>t===e))?this.scopes.get(e):null}};class ce extends Error{constructor(){super("Invalid context parent. Parent must be an instance of AbstractContextContainer or it's derived class, null or undefined.")}}const le=ce;class de extends Error{constructor(){super("Invalid context keyFactory. KeyFactory must be an instance of DIObjectKeyFactory or it's derived class")}}const ue=de;class he{createContainer(e=[],t="",s=null,n=new F){if(he.validateContainerParams(e,t,s,n)){const r=new V(e,t,s,n);return r.setParent(s),r}}static validateContainerParams(e,t,s,n){if(!Array.isArray(e)||e.find((e=>!(e instanceof y))))throw new C;if(null!=s&&!(s instanceof V))throw new le;if(!t)throw new Error("Name of Context must be a non empty string.");if(!(n instanceof F))throw new ue;return!0}}const fe=he,ye=e=>{let t="";for(let s=0;s<e;s++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*e));return t};class pe extends Error{constructor(){super("Invalid context name type. Type of context name must be a string.")}}const me=pe;class ge extends Error{constructor(e){super(`Context name '${e}' is not unique. Context name must be unique string.`)}}const be=ge;class we extends fe{static#x=new Set;static#D(e){if("string"!=typeof e)throw new me;if(we.#x.has(e))throw new be(e);we.#x.add(e)}static createContainer(e=[],t="",s=null,n=new F){if(""===t&&(t=ye(7)),super.validateContainerParams(e,t,s,n)){const r=new oe(e,t,s,n);return r.setParent(s),we.#D(t),r}return null}}const Ce=we,Ie={ContextContainer:oe,AbstractContextContainer:V,DemandedFactory:ie,SimpleContainer:X,SessionContainer:se,SingletoneContainer:ne,DIObjectKey:m,DemandedConfig:class extends y{constructor(e="",t={},s=(()=>{}),n=(()=>{})){super(e,t,new o(s,n))}},SessionConfig:class extends y{constructor(e="",t={},s=(()=>{}),n=(()=>{})){super(e,t,new c(s,n))}},SingletoneConfig:class extends y{constructor(e="",t={},s=(()=>{}),n=(()=>{})){super(e,t,new l(s,n))}},DIObjectConfig:y,DIClazz:a,DemandedLifecycle:o,SingletoneLifecycle:l,SessionLifecycle:c,Lifecycle:r,ContextContainerFactory:Ce,AbstractContextContainerFactory:fe},xe=Ie.AbstractContextContainer,De=Ie.ContextContainer,ve=Ie.ContextContainerFactory,Ee=Ie.AbstractContextContainerFactory,Ne=Ie.DemandedConfig,ze=Ie.SessionConfig,Se=Ie.SingletoneConfig,Te=Ie.DIObjectConfig,ke=Ie.DIClazz,Ae=Ie.DIObjectKey,je=Ie.SingletoneContainer,Oe=Ie.SimpleContainer,Le=Ie.DemandedFactory,_e=Ie.SessionContainer,$e=Ie.DemandedLifecycle,Fe=Ie.SingletoneLifecycle,Me=Ie.SessionLifecycle,Pe=Ie.Lifecycle,Ke=Ie})();var r=n.LH,a=n.R8,i=n.hl,o=n.zg,c=n.CC,l=n.f0,d=n.a6,u=n.TN,h=n.tf,f=n.vL,y=n.v0,p=n.vp,m=n.s2,g=n.vj,b=n.qf,w=n.Bx,C=n.KE,I=n.Tq,x=n.Ay;export{r as AbstractContextContainer,a as AbstractContextContainerFactory,i as ContextContainer,o as ContextContainerFactory,c as DIClazz,l as DIObjectConfig,d as DIObjectKey,u as DemandedConfig,h as DemandedFactory,f as DemandedLifecycle,y as Lifecycle,p as SessionConfig,m as SessionContainer,g as SessionLifecycle,b as SimpleContainer,w as SingletoneConfig,C as SingletoneContainer,I as SingletoneLifecycle,x as default};
//# sourceMappingURL=dizy-esm.js.map