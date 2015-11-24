"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,l=n.version;e["default"]=t["default"].extend({version:l,name:r})}),define("dummy/components/ember-collection",["exports","ember-collection/components/ember-collection"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-native-scrollable",["exports","ember-collection/components/ember-native-scrollable"],function(e,t){e["default"]=t["default"]}),define("dummy/components/impagination-collection",["exports","ember-impagination/components/impagination-collection"],function(e,t){e["default"]=t["default"]}),define("dummy/components/pages-display",["exports","ember","dummy/templates/components/pages-display"],function(e,t,a){e["default"]=t["default"].Component.extend({layout:a["default"],classNames:["demo_pages_page_wrapper"],page:null,datasetState:null,isCurrentPage:t["default"].computed("datasetState.pageOffset","page.offset",function(){return this.get("datasetState.pageOffset")===this.get("page.offset")}),isLoadMin:t["default"].computed("datasetState.pageOffset","page.offset","datasetState.loadHorizon","datasetState.stats.totalPages",function(){var e=this.get("datasetState.pageOffset"),t=this.get("page.offset"),a=this.get("datasetState.loadHorizon"),n=Math.max(0,e-a);return n===t}),isLoadMax:t["default"].computed("datasetState.pageOffset","page.offset","datasetState.loadHorizon","datasetState.stats.totalPages",function(){var e=this.get("datasetState.pageOffset"),t=this.get("page.offset"),a=this.get("datasetState.loadHorizon"),n=this.get("datasetState.stats.totalPages"),r=Math.min(n,e+a-1);return t===r}),isUnloadMin:t["default"].computed("datasetState.pageOffset","page.offset","datasetState.unloadHorizon","datasetState.stats.totalPages",function(){var e=this.get("datasetState.pageOffset"),t=this.get("page.offset"),a=this.get("datasetState.unloadHorizon"),n=Math.max(0,e-a);return n===t}),isUnloadMax:t["default"].computed("datasetState.pageOffset","page.offset","datasetState.unloadHorizon","datasetState.stats.totalPages",function(){var e=this.get("datasetState.pageOffset"),t=this.get("page.offset"),a=this.get("datasetState.unloadHorizon"),n=this.get("datasetState.stats.totalPages"),r=Math.min(n,e+a-1);return t===r})})}),define("dummy/components/record-player",["exports","ember","dummy/templates/components/record-player"],function(e,t,a){e["default"]=t["default"].Component.extend({layout:a["default"],classNames:["record-player"],records:null,pages:null,datasetState:null,elementWidth:null,totalRecords:t["default"].computed.readOnly("datasetState.length"),pageWidth:t["default"].computed("incrementWidth","datasetState.pageSize",function(){return this.get("incrementWidth")*this.get("datasetState.pageSize")}),incrementWidth:t["default"].computed("elementWidth","totalRecords",function(){return this.get("elementWidth")/this.get("totalRecords")}),readHeadOffset:t["default"].computed("datasetState.readOffset","incrementWidth","pageWidth",function(){var e=this.get("incrementWidth");return this.get("datasetState.readOffset")*e}),pageStyle:t["default"].computed("pageWidth",function(){return t["default"].String.htmlSafe("width:"+this.get("pageWidth")+"px;")}),readHeadStyle:t["default"].computed("readHeadOffset",function(){return t["default"].String.htmlSafe("left:"+this.get("readHeadOffset")+"px;")}),loadHorizonStyle:t["default"].computed("datasetState.loadHorizon","pageWidth","readHeadOffset",function(){var e=this.get("readHeadOffset")-this.get("datasetState.loadHorizon")*this.get("pageWidth")/this.get("datasetState.pageSize"),a=2*this.get("datasetState.loadHorizon")*this.get("pageWidth")/this.get("datasetState.pageSize");return t["default"].String.htmlSafe("left:"+e+"px; width:"+a+"px;")}),unloadHorizonLeftStyle:t["default"].computed("elementWidth","datasetState.unloadHorizon","pageWidth","readHeadOffset",function(){var e=this.get("elementWidth")-this.get("readHeadOffset")+this.get("datasetState.unloadHorizon")*this.get("pageWidth");return t["default"].String.htmlSafe("right:"+e+"px;")}),unloadHorizonRightStyle:t["default"].computed("datasetState.unloadHorizon","pageWidth","readHeadOffset",function(){var e=this.get("readHeadOffset")+this.get("datasetState.unloadHorizon")*this.get("pageWidth");return t["default"].String.htmlSafe("left:"+e+"px;")}),_adjustWidth:function(){this.set("elementWidth",this.$().width())},didInsertElement:function(){this._adjustWidth()}})}),define("dummy/components/virtual-each",["exports","virtual-each/components/virtual-each"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/index",["exports","ember"],function(e,t){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();e["default"]=t["default"].Controller.extend({emberCollection:!1,fetch:function(e,a,n){var l=new r(300).colors,o=200;return new t["default"].RSVP.Promise(function(t){setTimeout(function(){n.totalPages=Math.ceil(l.length/a);var r=e*a;t(l.slice(r,r+a))},o)})},initialReadOffset:0,loadHorizon:30,unloadHorizon:40,pageSize:10});var r=function(){function e(t){a(this,e),this.colorCount=t}return n(e,[{key:"step",get:function(){return 300/this.colorCount}},{key:"colors",get:function(){var e=this;return new Array(this.colorCount).fill(0).map(function(t,a){return{hsl:"hsl("+e.step*a+", 100%, 50%)"}})}}]),e}()}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/color-block",["exports","ember"],function(e,t){function a(e){return t["default"].String.htmlSafe("background-color:"+e+"; width:600px; height:70px")}e.colorBlock=a,e["default"]=t["default"].Helper.helper(a)}),define("dummy/helpers/fixed-grid-layout",["exports","ember","ember-collection/layouts/grid"],function(e,t,a){e["default"]=t["default"].Helper.helper(function(e,t){return new a["default"](e[0],e[1])})}),define("dummy/helpers/mixed-grid-layout",["exports","ember","ember-collection/layouts/mixed-grid"],function(e,t,a){e["default"]=t["default"].Helper.helper(function(e,t){return new a["default"](e[0])})}),define("dummy/helpers/page-state",["exports","ember"],function(e,t){function a(e){var t=e[0];return t.isPending?"pending":t.isResolved?"resolved":t.isRejected?"rejected":"unrequested"}e.pageState=a,e["default"]=t["default"].Helper.helper(a)}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,l=n.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/models/page",["exports","ember"],function(e,t){e["default"]=t["default"].Object.extend({isRequested:null,isPending:null,isResolved:null,isRejected:null,isSettled:null,offset:null,size:null,readOffset:null,loadHorizon:null,unloadHorizon:null,totalPages:null,isCurrentPage:t["default"].computed(function(){}),isLoadMin:t["default"].computed(function(){}),isLoadMax:t["default"].computed(function(){}),isUnloadMin:t["default"].computed(function(){}),isUnloadMax:t["default"].computed(function(){})})}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("index",{path:"/index"})}),e["default"]=n}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({actions:{objectReadAt:function(e){this.dataset.setReadOffset(e)}}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/record-player",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:6,column:33},end:{line:6,column:142}},moduleName:"dummy/templates/components/record-player.hbs"},arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0]),r=new Array(2);return r[0]=e.createAttrMorph(n,"class"),r[1]=e.createAttrMorph(n,"style"),r},statements:[["attribute","class",["concat",["record-player_page ",["subexpr","page-state",[["get","page",["loc",[null,[6,108],[6,112]]]]],[],["loc",[null,[6,95],[6,114]]]]]]],["attribute","style",["get","pageStyle",["loc",[null,[6,124],[6,133]]]]]],locals:["page","index"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"dummy/templates/components/record-player.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","record-player_read-head"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","record-player_load-horizon"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","record-player_unload-horizon-left"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","record-player_unload-horizon-right"),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","record-player_pages");var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0]),r=e.childAt(t,[2]),l=e.childAt(t,[4]),o=e.childAt(t,[6]),d=new Array(5);return d[0]=e.createAttrMorph(n,"style"),d[1]=e.createAttrMorph(r,"style"),d[2]=e.createAttrMorph(l,"style"),d[3]=e.createAttrMorph(o,"style"),d[4]=e.createMorphAt(e.childAt(t,[8]),0,0),d},statements:[["attribute","style",["get","readHeadStyle",["loc",[null,[1,45],[1,58]]]]],["attribute","style",["get","loadHorizonStyle",["loc",[null,[2,48],[2,64]]]]],["attribute","style",["get","unloadHorizonLeftStyle",["loc",[null,[3,55],[3,77]]]]],["attribute","style",["get","unloadHorizonRightStyle",["loc",[null,[4,56],[4,79]]]]],["block","each",[["get","pages",["loc",[null,[6,41],[6,46]]]]],[],0,null,["loc",[null,[6,33],[6,151]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:18,column:10},end:{line:20,column:10}},moduleName:"dummy/templates/index.hbs"},arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo_record");var n=e.createTextNode("Record ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(n,"style"),r[1]=e.createMorphAt(n,1,1),r},statements:[["attribute","style",["subexpr","color-block",[["get","record.content.hsl",["loc",[null,[19,57],[19,75]]]]],[],["loc",[null,[19,43],[19,77]]]]],["content","index",["loc",[null,[19,85],[19,94]]]]],locals:["record","index"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:17,column:8},end:{line:21,column:8}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","ember-collection",[],["items",["subexpr","@mut",[["get","records",["loc",[null,[18,36],[18,43]]]]],[],[]],"estimated-height",["subexpr","@mut",[["get","500px",["loc",[null,[18,61],[18,66]]]]],[],[]],"estimated-width",["subexpr","@mut",[["get","600px",["loc",[null,[18,84],[18,89]]]]],[],[]],"cell-layout",["subexpr","fixed-grid-layout",[600,70],[],["loc",[null,[18,102],[18,128]]]]],0,null,["loc",[null,[18,10],[20,31]]]]],locals:[],templates:[e]}}(),t=function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:22,column:10},end:{line:28,column:10}},moduleName:"dummy/templates/index.hbs"},arity:3,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo_record");var n=e.createTextNode("Record ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(n,"style"),r[1]=e.createMorphAt(n,1,1),r},statements:[["attribute","style",["subexpr","color-block",[["get","record.content.hsl",["loc",[null,[27,57],[27,75]]]]],[],["loc",[null,[27,43],[27,77]]]]],["content","index",["loc",[null,[27,85],[27,94]]]]],locals:["record","index","virtualIndex"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:21,column:8},end:{line:29,column:8}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","virtual-each",[],["height",500,"itemHeight",70,"items",["subexpr","@mut",[["get","records",["loc",[null,[25,19],[25,26]]]]],[],[]]],0,null,["loc",[null,[22,10],[28,27]]]]],locals:[],templates:[e]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:12,column:2},end:{line:32,column:2}},moduleName:"dummy/templates/index.hbs"},arity:3,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo_read-offset");var n=e.createTextNode("Current Read Offset: ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode(" ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo_records-wrapper");var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","demo_records-list-container"),e.setAttribute(n,"style","height: 500px; width: 600px;");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(3);return n[0]=e.createMorphAt(t,1,1,a),n[1]=e.createMorphAt(e.childAt(t,[3]),1,1),n[2]=e.createMorphAt(e.childAt(t,[5,1]),1,1),n},statements:[["inline","record-player",[],["pages",["subexpr","@mut",[["get","records.pages",["loc",[null,[13,27],[13,40]]]]],[],[]],"datasetState",["subexpr","@mut",[["get","datasetState",["loc",[null,[13,54],[13,66]]]]],[],[]],"records",["subexpr","@mut",[["get","records",["loc",[null,[13,75],[13,82]]]]],[],[]]],["loc",[null,[13,4],[13,84]]]],["content","datasetState.readOffset",["loc",[null,[14,55],[14,82]]]],["block","if",[["get","emberCollection",["loc",[null,[17,14],[17,29]]]]],[],0,1,["loc",[null,[17,8],[29,15]]]]],locals:["records","datasetState","pages"],templates:[e,t]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:34,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","demo_inputs");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("label");e.setAttribute(n,"for","ro");var r=e.createTextNode("Initial Read Offset:");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("label");e.setAttribute(n,"for","lh");var r=e.createTextNode("Load Horizon:");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("label");e.setAttribute(n,"for","uh");var r=e.createTextNode("Unload Horizon:");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("label");e.setAttribute(n,"for","ps");var r=e.createTextNode("Page Size:");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo_dataset-wrapper");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0]),r=new Array(5);return r[0]=e.createMorphAt(n,3,3),r[1]=e.createMorphAt(n,7,7),r[2]=e.createMorphAt(n,11,11),r[3]=e.createMorphAt(n,15,15),r[4]=e.createMorphAt(e.childAt(t,[2]),1,1),r},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","initialReadOffset",["loc",[null,[3,16],[3,33]]]]],[],[]],"type",["subexpr","@mut",[["get","number",["loc",[null,[3,39],[3,45]]]]],[],[]],"id","ro"],["loc",[null,[3,2],[3,55]]]],["inline","input",[],["value",["subexpr","@mut",[["get","loadHorizon",["loc",[null,[5,16],[5,27]]]]],[],[]],"type",["subexpr","@mut",[["get","number",["loc",[null,[5,33],[5,39]]]]],[],[]],"id","lh"],["loc",[null,[5,2],[5,49]]]],["inline","input",[],["value",["subexpr","@mut",[["get","unloadHorizon",["loc",[null,[7,16],[7,29]]]]],[],[]],"type",["subexpr","@mut",[["get","number",["loc",[null,[7,35],[7,41]]]]],[],[]],"id","uh"],["loc",[null,[7,2],[7,51]]]],["inline","input",[],["value",["subexpr","@mut",[["get","pageSize",["loc",[null,[9,16],[9,24]]]]],[],[]],"type",["subexpr","@mut",[["get","number",["loc",[null,[9,30],[9,36]]]]],[],[]],"id","ps"],["loc",[null,[9,2],[9,46]]]],["block","impagination-collection",[],["fetch",["subexpr","@mut",[["get","fetch",["loc",[null,[12,35],[12,40]]]]],[],[]],"initial-read-offset",["subexpr","@mut",[["get","initialReadOffset",["loc",[null,[12,61],[12,78]]]]],[],[]],"load-horizon",["subexpr","@mut",[["get","loadHorizon",["loc",[null,[12,92],[12,103]]]]],[],[]],"unload-horizon",["subexpr","@mut",[["get","unloadHorizon",["loc",[null,[12,119],[12,132]]]]],[],[]],"page-size",["subexpr","@mut",[["get","pageSize",["loc",[null,[12,143],[12,151]]]]],[],[]]],0,null,["loc",[null,[12,2],[32,30]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-impagination",version:"0.0.0+5278722f"});