define("github-timeline/app",["exports","ember","ember/resolver","ember/load-initializers","github-timeline/config/environment"],function(e,t,a,r,n){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](i,n["default"].modulePrefix),e["default"]=i}),define("github-timeline/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("github-timeline/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("github-timeline/initializers/app-version",["exports","github-timeline/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!n){var d=r(i.toString());a["default"].libraries.register(d,t["default"].APP.version),n=!0}}}}),define("github-timeline/initializers/export-application-global",["exports","ember","github-timeline/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("github-timeline/models/github-timeline",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({})}),define("github-timeline/models/timeline-item",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({type:t["default"].attr("stirng"),actor_login:t["default"].attr("string"),action:t["default"].attr("string"),actor_url:t["default"].attr("string"),actor_avatar_url:t["default"].attr("string"),repo_name:t["default"].attr("string"),repo_url:t["default"].attr("string"),created_at:t["default"].attr("date")})}),define("github-timeline/router",["exports","ember","github-timeline/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});r.map(function(){this.resource("github-timeline",{path:"/"})}),e["default"]=r}),define("github-timeline/routes/github-timeline",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return $.getJSON("https://api.github.com/users/Orthocenter/events")}})}),define("github-timeline/routes/timeline-item",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("github-timeline/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"id","header");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h1"),n=e.createTextNode("timeline");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var l=r.createMorphAt(d,2,2,a);return i(t,l,e,"outlet"),d}}}())}),define("github-timeline/templates/github-timeline",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","card");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","card-header");var n=e.createTextNode("\n          ");e.appendChild(r,n);var n=e.createElement("img");e.setAttribute(n,"class","avatar"),e.appendChild(r,n);var n=e.createTextNode("\n          ");e.appendChild(r,n);var n=e.createElement("h3");e.setAttribute(n,"class","login");var i=e.createComment("");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n        ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","card-content");var n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("ul"),i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("li"),d=e.createTextNode("Type: ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("li"),d=e.createTextNode("Action: ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("li"),d=e.createTextNode("Repo: ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n                ");e.appendChild(n,i);var i=e.createElement("li"),d=e.createTextNode("Created at: ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode(" ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n            ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n        ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.inline,l=n.attribute,c=n.content;r.detectNamespace(a);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var u=r.childAt(o,[3]),h=r.childAt(u,[1]),s=r.childAt(h,[1]),p=r.childAt(u,[3,1]),m=r.createMorphAt(o,1,1,a),f=r.createAttrMorph(s,"src"),v=r.createMorphAt(r.childAt(h,[3]),0,0),g=r.createMorphAt(r.childAt(p,[1]),1,1),b=r.createMorphAt(r.childAt(p,[3]),1,1),C=r.createMorphAt(r.childAt(p,[5]),1,1),x=r.createMorphAt(r.childAt(p,[7]),1,1);return d(t,m,e,"log",[i(t,e,"item")],{}),l(t,f,s,"src",i(t,e,"item.actor.avatar_url")),c(t,v,e,"item.actor.login"),c(t,g,e,"item.type"),c(t,b,e,"item.payload.action"),c(t,C,e,"item.repo.name"),c(t,x,e,"item.created_at"),o}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"id","container");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,l=i.block;n.detectNamespace(r);var c;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(c=this.build(n),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=n.cloneNode(this.cachedFragment,!0))):c=this.build(n);var o=n.createMorphAt(n.childAt(c,[0]),1,1);return l(a,o,t,"each",[d(a,t,"model")],{keyword:"item"},e,null),c}}}())}),define("github-timeline/templates/timeline-item",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var l=r.createMorphAt(d,0,0,a);return r.insertBoundary(d,0),i(t,l,e,"outlet"),d}}}())}),define("github-timeline/config/environment",["ember"],function(e){var t="github-timeline";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("github-timeline/tests/test-helper"):require("github-timeline/app")["default"].create({name:"github-timeline",version:"0.0.0.bf40ad4a"});