/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(drupalSettings.path.currentPath);
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push($(this).attr('data-contextual-id'));
      });

      var uncachedIDs = _.filter(ids, function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID + '"]'), html);
          });
          return false;
        }
        return true;
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], { model: Drupal.contextual.StateModel });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.$el.attr('role', 'form');

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
 * @file
 * Extends methods from core/misc/progress.js.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div class="progress-wrapper" aria-live="polite">' +
             '<div class="message"></div>'+
             '<div id ="' + id + '" class="progress progress-striped active">' +
               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
                 '<span class="percentage"></span>' +
               '</div>' +
             '</div>' +
             '<div class="progress-label"></div>' +
           '</div>';
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     * @param {string} message
     * @param {string} label
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', percentage);
        $(this.element).find('.percentage').html(percentage + '%');
      }
      if (message) {
        // Remove the unnecessary whitespace at the end of the message.
        message = message.replace(/<br\/>&nbsp;|\s*$/, '');

        $('.message', this.element).html(message);
      }
      if (label) {
        $('.progress-label', this.element).html(label);
      }
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     */
    displayError: function (string) {
      var error = $('<div class="alert alert-block alert-error"><button class="close" data-dismiss="alert">&times;</button><h4>' + Drupal.t('Error message') + '</h4></div>').append(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', { '!statusText': $.trim(xmlhttp.statusText) });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', { '!responseText': $.trim(xmlhttp.responseText) });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', { '!readyState': xmlhttp.readyState }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', { '!customMessage': customMessage }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', { '!url': ajax.url }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response, status) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = void 0;

      var $newContentWrapped = $('<div></div>').html(response.data);
      var $newContent = $newContentWrapped.contents();

      if ($newContent.length !== 1 || $newContent.get(0).nodeType !== 1) {
        $newContent = $newContentWrapped;
      }

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      if ($newContent.find('.ajax-new-content').length > 0) {
        $newContent.find('.ajax-new-content').hide();
        $newContent.show();
        $newContent.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length > 0) {
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($newContent.get(0), settings);
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
 * @file
 * Extends methods from core/misc/ajax.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Attempts to find the closest glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   *
   * @returns {jQuery}
   *   A jQuery object.
   */
  Drupal.Ajax.prototype.findGlyphicon = function (element) {
    return $(element).closest('.form-item').find('.ajax-progress.glyphicon')
  };

  /**
   * Starts the spinning of the glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   * @param {string} [message]
   *   An optional message to display (tooltip) for the progress.
   *
   * @returns {jQuery}
   *   A jQuery object.
   */
  Drupal.Ajax.prototype.glyphiconStart = function (element, message) {
    var $glyphicon = this.findGlyphicon(element);
    if ($glyphicon[0]) {
      $glyphicon.addClass('glyphicon-spin');

      // Add any message as a tooltip to the glyphicon.
      if (drupalSettings.bootstrap.tooltip_enabled) {
        $glyphicon
          .removeAttr('data-toggle')
          .removeAttr('data-original-title')
          .removeAttr('title')
          .tooltip('destroy')
        ;

        if (message) {
          $glyphicon.attr('data-toggle', 'tooltip').attr('title', message).tooltip();
        }
      }

      // Append a message for screen readers.
      if (message) {
        $glyphicon.parent().append('<div class="sr-only message">' + message + '</div>');
      }
    }
    return $glyphicon;
  };

  /**
   * Stop the spinning of a glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   */
  Drupal.Ajax.prototype.glyphiconStop = function (element) {
    var $glyphicon = this.findGlyphicon(element);
    if ($glyphicon[0]) {
      $glyphicon.removeClass('glyphicon-spin');
      if (drupalSettings.bootstrap.tooltip_enabled) {
        $glyphicon
          .removeAttr('data-toggle')
          .removeAttr('data-original-title')
          .removeAttr('title')
          .tooltip('destroy')
        ;
      }
    }
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    var $element = $(this.element);

    // Find an existing glyphicon progress indicator.
    var $glyphicon = this.glyphiconStart($element, this.progress.message);
    if ($glyphicon[0]) {
      this.progress.element = $glyphicon.parent();
      this.progress.glyphicon = true;
      return;
    }

    // Otherwise, add a glyphicon throbber after the element.
    if (!this.progress.element) {
      this.progress.element = $(Drupal.theme('ajaxThrobber'));
    }
    if (this.progress.message) {
      this.progress.element.after('<div class="message">' + this.progress.message + '</div>');
    }

    // If element is an input DOM element type (not :input), append after.
    if ($element.is('input')) {
      $element.after(this.progress.element);
    }
    // Otherwise append the throbber inside the element.
    else {
      $element.append(this.progress.element);
    }
  };


  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   * @param {number} status
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    if (this.progress.element) {

      // Stop a glyphicon throbber.
      if (this.progress.glyphicon) {
        this.glyphiconStop(this.progress.element);
      }
      // Remove the progress element.
      else {
        this.progress.element.remove();
      }

      // Remove any message set.
      this.progress.element.parent().find('.message').remove();
    }

    // --------------------------------------------------------
    // Everything below is from core/misc/ajax.js.
    // --------------------------------------------------------

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

})(jQuery, this, Drupal, drupalSettings);
;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @namespace
 */
(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.bootstrap = {
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Extends a Bootstrap plugin constructor.
   *
   * @param {string} id
   *   A Bootstrap plugin identifier located in $.fn.
   * @param {function} [callback]
   *   A callback to extend the plugin constructor.
   *
   * @return {function|boolean}
   *   The Bootstrap plugin or FALSE if the plugin does not exist.
   */
  Drupal.bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if the plugin does not exist.
    if (!$.fn[id] || !$.fn[id].Constructor) return false;

    // Extend the plugin if a callback was provided.
    if ($.isFunction(callback)) {
      var ret = callback.apply($.fn[id].Constructor, [this.settings]);
      if ($.isPlainObject(ret)) {
        $.extend(true, $.fn[id].Constructor, ret);
      }
    }

    // Add a jQuery UI like option getter/setter method.
    if ($.fn[id].Constructor.prototype.option === void(0)) {
      $.fn[id].Constructor.prototype.option = this.option;
    }

    return $.fn[id].Constructor;
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {string} id
   *   A Bootstrap plugin identifier located in $.fn.
   * @param {function} [callback]
   *   A callback to replace the jQuery plugin definition. The callback must
   *   return a function that is used to construct a jQuery plugin.
   *
   * @return {function|boolean}
   *   The Bootstrap jQuery plugin definition or FALSE if the plugin does not
   *   exist.
   */
  Drupal.bootstrap.replacePlugin = function (id, callback) {
    // Immediately return if plugin does not exist or not a valid callback.
    if (!$.fn[id] || !$.fn[id].Constructor || !$.isFunction(callback)) return false;
    var constructor = $.fn[id].Constructor;

    var plugin = callback.apply(constructor);
    if ($.isFunction(plugin)) {
      plugin.Constructor = constructor;

      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
      $.fn[id] = plugin;
    }
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Drupal.bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a pretty complete modern implementation. If things are quite
   * working the way you intend (in older browsers), you may wish to use the
   * jQuery.simulate plugin. If it's available, this method will defer to it.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement} element
   *   A DOM element to dispatch event on.
   * @param {String} type
   *   The type of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   */
  Drupal.bootstrap.simulate = function (element, type, options) {
    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return;
    }
    var event;
    var ctor;
    for (var name in Drupal.bootstrap.eventMap) {
      if (Drupal.bootstrap.eventMap[name].test(type)) {
        ctor = name;
        break;
      }
    }
    if (!ctor) {
      throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
    }
    var opts = {bubbles: true, cancelable: true};
    if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
      $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
    }
    if (ctor === 'MouseEvent') {
      $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
    }
    if (options) {
      $.extend(opts, options);
    }
    if (typeof window[ctor] === 'function') {
      event = new window[ctor](type, opts);
      element.dispatchEvent(event);
    }
    else if (document.createEvent) {
      event = document.createEvent(ctor);
      event.initEvent(type, opts.bubbles, opts.cancelable);
      element.dispatchEvent(event);
    }
    else if (typeof element.fireEvent === 'function') {
      event = $.extend(document.createEventObject(), opts);
      element.fireEvent('on' + type, event);
    }
    else if (typeof element[type]) {
      element[type]();
    }
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   *
   * @todo This isn't fully working since Bootstrap plugins don't allow
   * methods to return values.
   */
  Drupal.bootstrap.option = function (key, value) {
    var options = key;
    var parts, curOption, i;

    // Don't return a reference to the internal hash.
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Handle a specific option.
    if (typeof key === "string") {
      // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      parts = key.split(".");
      key = parts.shift();
      if (parts.length) {
        curOption = options[key] = $.extend({}, this.options[key]);
        for (i = 0; i < parts.length - 1; i++) {
          curOption[parts[i]] = curOption[parts[i]] || {};
          curOption = curOption[parts[i]];
        }
        key = parts.pop();
        if (arguments.length === 1) {
          return curOption[key] === undefined ? null : curOption[key];
        }
        curOption[key] = value;
      }
      else {
        if (arguments.length === 1) {
          return this.options[key] === undefined ? null : this.options[key];
        }
        options[key] = value;
      }
    }

    // Set the new option(s).
    for (key in options) {
      if (!options.hasOwnProperty(key)) continue;
      this.options[key] = options[key];
    }
    return this;
  };

})(window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * Class to help modify attributes.
   *
   * @param {object} object
   *   An object to initialize attributes with.
   *
   * @constructor
   */
  var Attributes = function (object) {
    this.data = object && _.isObject(object) && _.clone(object) || {};
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @returns {string}
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    for (name in this.data) {
      if (!this.data.hasOwnProperty(name)) continue;
      value = this.data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var classes = this.getClasses();
    value = [].concat(classes, value);
    this.set('class', _.uniq(value));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @returns {Object}
   */
  Attributes.prototype.getData = function () {
    return _.clone(this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    var classes = [].concat(this.get('class', []));
    return _.uniq(classes);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} name
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (name) {
    name = [].concat(name);
    var classes = this.getClasses();
    var found = false;
    _.each(name, function (value) { if (_.indexOf(classes, value) !== -1) found = true; });
    return found;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {object} values
   *   An associative key/value array.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (values, recursive) {
    values = values instanceof Attributes ? values.getData() : values;
    if (recursive === void(0) || recursive) {
      this.data = $.extend(true, {}, this.data, values);
    }
    else {
      $.extend(this.data, values);
    }
    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (value) {
    this.set('class', _.without(this.getClasses(), [].concat(value)));
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(oldValue, classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    this.data[name] = value;
    return this;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} object
   *   An object to initialize attributes with.
   *
   * @returns {Attributes}
   *
   * @global
   *
   * @constructor
   */
  window.Attributes = function (object) {
    return object instanceof Attributes ? object : new Attributes(object);
  };

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme.bootstrapIcon('refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }
      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
 * @file
 * Extends methods from core/misc/form.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Behavior for "forms_has_error_value_toggle" theme setting.
   */
  Drupal.behaviors.bootstrapForm = {
    attach: function (context) {
      if (drupalSettings.bootstrap && drupalSettings.bootstrap.forms_has_error_value_toggle) {
        var $context = $(context);
        $context.find('.form-item.has-error:not(.form-type-password.has-feedback)').once('error').each(function () {
          var $formItem = $(this);
          var $input = $formItem.find(':input');
          $input.on('keyup focus blur', function () {
            if (this.defaultValue !== void 0) {
              $formItem[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('has-error');
              $input[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('error');
            }
          });
        });
      }
    }
  };


})(jQuery, this, Drupal, drupalSettings);
;
/**
 * @file
 * Bootstrap Modals.
 */
(function ($, Drupal, Bootstrap) {
  "use strict";

  /**
   * Extend the Bootstrap Modal plugin constructor class.
   */
  Bootstrap.extendPlugin('modal', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.modal_animation,
        backdrop: settings.modal_backdrop === 'static' ? 'static' : !!settings.modal_backdrop,
        keyboard: !!settings.modal_keyboard,
        show: !!settings.modal_show,
        size: settings.modal_size
      }
    };
  });

  /**
   * Replace the Bootstrap Modal jQuery plugin definition.
   *
   * Replacing this is needed so that the "option" method can return values.
   */
  Bootstrap.replacePlugin('modal', function () {
    var Modal = this;

    // Extract the arguments.
    var args = Array.prototype.slice.call(arguments, 1);

    // Modal jQuery Plugin Definition.
    return function (option, _relatedTarget) {
      var ret = void(0);
      this.each(function () {
        var $this   = $(this);
        var data    = $this.data('bs.modal');
        var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

        if (!data) $this.data('bs.modal', (data = new Modal(this, options)));
        if (typeof option == 'string') ret = data[option].apply(data, args);
        else if (options.show) data.show(_relatedTarget);
      });

      // If just one element and there was a result returned for the option passed,
      // then return the result. Otherwise, just return the jQuery object.
      return this.length === 1 && ret !== void(0) ? ret : this;
    }
  });

  /**
   * Extend Drupal theming functions.
   */
  $.extend(Drupal.theme, /** @lend Drupal.theme */ {
    /**
     * Theme function for a Bootstrap Modal.
     *
     * @param {object}[variables]
     *   An object with the following keys:
     *   - title: The name of the tab.
     *
     * @return {string}
     *   The HTML for the modal.
     */
    bootstrapModal: function (variables) {
      var settings = drupalSettings.bootstrap || {};
      var defaults = {
        body: '',
        closeButton: true,
        description: {
          content: null,
          position: 'before'
        },
        footer: '',
        id: 'drupal-modal',
        size: settings.modal_size ? settings.modal_size : '',
        title: Drupal.t('Loading...')
      };
      variables = $.extend(true, {}, defaults, variables);
      var output = '';

      // Build the modal wrapper.
      var classes = ['modal'];
      if (settings.modal_animation) {
        classes.push('fade');
      }
      output += '<div id="' + variables.id + '" class="' + classes.join(' ') + '" tabindex="-1" role="dialog">';

      // Build the modal-dialog wrapper.
      var dialogClasses = ['modal-dialog'];
      if (variables.size) {
        // @todo This should really be a clean CSS class method instead.
        dialogClasses.push(Drupal.checkPlain(variables.size));
      }
      output += '<div class="' + dialogClasses.join(' ') + '" role="document">';

      // Build the modal-content wrapper.
      output += '<div class="modal-content">';

      // Build the header wrapper and title.
      output += Drupal.theme.bootstrapModalHeader(variables.title, variables.closeButton);

      // Build the body.
      output += Drupal.theme.bootstrapModalBody(variables.id + '--body', variables.body, variables.description);

      // Build the footer.
      output += Drupal.theme.bootstrapModalFooter(variables.footer);

      // Close the modal-content wrapper.
      output += '</div>';

      // Close the modal-dialog wrapper.
      output += '</div>';

      // Close the modal wrapper.
      output += '</div>';

      // Return the constructed modal.
      return output;
    },

    /**
     * Theme function for a Bootstrap Modal body markup.
     *
     * @param {string} id
     *   A unique ID for the modal body div.
     * @param {string} body
     *   The HTML markup to place in the body.
     * @param {string|object} description
     *   A description to show. Can either be a string or an object with the
     *   following key/value pairs:
     *   - content: The description value.
     *   - position: (optional) A display setting that can have these values:
     *     - before: The description is displayed before the body. This is the
     *       default value.
     *     - after: The description is display after the body.
     *     - invisible: The description is displayed after the element, hidden
     *       visually but available to screen readers.
     *
     * @return {string}
     *   The HTML for the modal close button.
     */
    bootstrapModalBody: function (id, body, description) {
      var output = '';
      output += '<div id="' + id + '" class="modal-body">';
      if (!description || !$.isPlainObject(description)) {
        description = { content: description};
      }
      description = $.extend({ position: 'before' }, description);

      var descriptionClasses = ['help-block'];
      if (description.content && description.position === 'invisible') {
        descriptionClasses.push('sr-only');
      }
      if (description.content && description.position === 'before') {
        output += '<p class="' + descriptionClasses.join(' ') + '">' + description.content + '</p>';
      }
      output += body;
      if (description.content && (description.position === 'after' || description.position === 'invisible')) {
        output += '<p class="' + descriptionClasses.join(' ') + '">' + description.content + '</p>';
      }
      output += '</div>';
      return output;
    },

    /**
     * Theme function for a Bootstrap Modal close button.
     *
     * @return {string}
     *   The HTML for the modal close button.
     */
    bootstrapModalClose: function () {
      return '<button type="button" class="close" data-dismiss="modal" aria-label="' + Drupal.t('Close') + '"><span aria-hidden="true">&times;</span></button>';
    },

    /**
     * Theme function for a Bootstrap Modal footer.
     *
     * @param {string} [footer]
     *   The HTML markup to place in the footer.
     * @param {boolean} [force]
     *   Flag to force the rendering of the footer.
     *
     * @return {string}
     *   The HTML for the modal footer.
     */
    bootstrapModalFooter: function (footer, force) {
      return footer || force ? '<div class="modal-footer">' + (footer || '') + '</div>' : '';
    },

    /**
     * Theme function for a Bootstrap Modal header.
     *
     * @param {string} [title]
     *   The title for the header.
     * @param {boolean} [closeButton]
     *   Flag indicating whether or not to show the close button in the header.
     *
     * @return {string}
     *   The HTML for the modal header.
     */
    bootstrapModalHeader: function (title, closeButton) {
      var output = '';
      if (title) {
        closeButton = closeButton !== void(0) ? closeButton : true;
        output += '<div class="modal-header">';
        if (closeButton) {
          output += Drupal.theme.bootstrapModalClose();
        }
        output += '<h4 class="modal-title">' + Drupal.checkPlain(title) + '</h4>';
        output += '</div>';
      }
      return output;
    }
  })

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
 * @file
 * Dialog API inspired by HTML5 dialog element.
 *
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Default dialog options.
   *
   * @type {object}
   *
   * @prop {bool} [autoOpen=true]
   * @prop {string} [dialogClass='']
   * @prop {string} [buttonClass='button']
   * @prop {string} [buttonPrimaryClass='button--primary']
   * @prop {function} close
   */
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    // Drupal-specific extensions: see dialog.jquery-ui.js.
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    // When using this API directly (when generating dialogs on the client
    // side), you may want to override this method and do
    // `jQuery(event.target).remove()` as well, to remove the dialog on
    // closing.
    close: function (event) {
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  /**
   * @typedef {object} Drupal.dialog~dialogDefinition
   *
   * @prop {boolean} open
   *   Is the dialog open or not.
   * @prop {*} returnValue
   *   Return value of the dialog.
   * @prop {function} show
   *   Method to display the dialog on the page.
   * @prop {function} showModal
   *   Method to display the dialog as a modal on the page.
   * @prop {function} close
   *   Method to hide the dialog from the page.
   */

  /**
   * Polyfill HTML5 dialog element with jQueryUI.
   *
   * @param {HTMLElement} element
   * @param {object} options
   *   jQuery UI options to be passed to the dialog.
   *
   * @return {Drupal.dialog~dialogDefinition}
   */
  Drupal.dialog = function (element, options) {
    var $element = $(element);

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      // Trigger a global event to allow scripts to bind events to the dialog.
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element
        .modal(settings)
        .on('shown.bs.modal.drupal', function () {
          dialog.open = true;
          $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
        })
      ;
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element
        .on('hidden.bs.modal.drupal', function () {
          dialog.returnValue = value;
          dialog.open = false;
          $(window).trigger('dialog:afterclose', [dialog, $element]);
        })
        .modal('hide');
    }

    var dialog = {
      open: false,
      returnValue: void(0),
      show: function () {
        openDialog({show: false});
      },
      showModal: function () {
        openDialog({show: true});
      },
      close: closeDialog
    };

    return dialog;
  };

})(jQuery, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });

  var fieldsMetadataQueue = [];

  var fieldsAvailableQueue = [];

  var contextualLinksQueue = [];

  var entityInstancesTracker = {};

  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      $('body').once('quickedit-init').each(initQuickEdit);

      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');
      if ($fields.length === 0) {
        return;
      }

      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });

      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });

      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });

      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);

        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };

  Drupal.quickedit = {
    app: null,

    collections: {
      entities: null,

      fields: null
    },

    editors: {},

    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return 'Drupal.quickedit.metadata.' + fieldID;
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);
        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));
        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');
  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem(permissionsHashKey, permissionsHash);
  }

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }
      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };

      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });

  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();

    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');
    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }

    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);

    var entityElementSelector = '[data-quickedit-entity-id="' + entityID + '"]';
    var $entityElement = $(entityElementSelector);

    if (!$entityElement.length) {
      throw new Error('Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id="' + fieldID + '"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id="' + entityID + '"]. This is typically caused by the theme\'s template for this entity type forgetting to print the attributes.');
    }
    var entityElement = $(fieldElement).closest($entityElement);

    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }
    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');

    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }

    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    if (Drupal.quickedit.collections.entities.findWhere({ entityID: entityID, entityInstanceID: entityInstanceID })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
        fieldsAvailableQueue.push({ el: fieldElement, fieldID: fieldID, entityID: entityID, entityInstanceID: entityInstanceID });
      }
  }

  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });

    $(fieldElement).addClass('quickedit-field');

    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: fieldID + '[' + entity.get('entityInstanceID') + ']',
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });

    Drupal.quickedit.collections.fields.add(field);
  }

  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');
      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');
      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);

      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];

      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);
    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));
      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);

        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);
    if (missingEditors.length === 0) {
      callback();
      return;
    }

    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: { 'editors[]': missingEditors }
    });

    var realInsert = Drupal.AjaxCommands.prototype.insert;
    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);
      realInsert(ajax, response, status);
    };

    loadEditorsAjax.execute();
  }

  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;

    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];
        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }
      return false;
    }

    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });
    var fieldIDs = _.pluck(fields, 'fieldID');

    if (fieldIDs.length === 0) {
      return false;
    } else if (hasFieldWithPermission(fieldIDs)) {
        var entityModel = new Drupal.quickedit.EntityModel({
          el: contextualLink.region,
          entityID: contextualLink.entityID,
          entityInstanceID: contextualLink.entityInstanceID,
          id: contextualLink.entityID + '[' + contextualLink.entityInstanceID + ']',
          label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
        });
        Drupal.quickedit.collections.entities.add(entityModel);

        var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
          el: contextualLink.region,
          model: entityModel
        });
        entityModel.set('entityDecorationView', entityDecorationView);

        _.each(fields, function (field) {
          initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
        });
        fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

        var initContextualLink = _.once(function () {
          var $links = $(contextualLink.el).find('.contextual-links');
          var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
            el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
            model: entityModel,
            appModel: Drupal.quickedit.app.model
          }, options));
          entityModel.set('contextualLinkView', contextualLinkView);
        });

        loadMissingEditors(initContextualLink);

        return true;
      } else if (allMetadataExists(fieldIDs)) {
          return true;
        }

    return false;
  }

  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({ el: entityElement });
      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();

        entityModel.get('entityDecorationView').remove();

        entityModel.destroy();
      }

      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });

    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');

      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};

  Drupal.quickedit.util.constants = {};

  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $('<div>' + message + '</div>');
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },

        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;

      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', { '@field-label': fieldLabel });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);

          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });

      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };

      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },

        success: function success(response, status) {
          var _this = this;

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },

        base: $submit.attr('id'),
        element: $submit[0]
      };

      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }
          options.validate = true;
        }
      }
      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,

      activeField: null,

      activeModal: null
    }

  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,

      entityID: null,

      entityInstanceID: null,

      id: null,

      label: null,

      fields: null,

      isActive: false,

      inTempStore: false,

      isDirty: false,

      isCommitting: false,

      state: 'closed',

      fieldsInTempStore: [],

      reload: false
    },

    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());

      this.listenTo(this, 'change:state', this.stateChange);

      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);

      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;
      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          this.set('isActive', true);
          break;

        case 'committing':
          {
            var fields = this.get('fields');

            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });

            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }

        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });

            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', { confirming: true });

              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });

              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);

              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }
            break;
          }

        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');

      if (current === 'saved') {
        entityModel.set('inTempStore', true);

        fieldModel.set('inTempStore', true);

        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
          fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
        }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;

      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;

        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }
          break;

        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', { reason: 'invalid' });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }

            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };
            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, { saved: true });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);

                  entityModel.set('state', 'opened', { reason: 'networkerror' });

                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', { '@entity-title': entityModel.get('label') });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }
            break;
          }

        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });
          break;
      }
    },
    save: function save(options) {
      var entityModel = this;

      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url('quickedit/entity/' + entityModel.get('entityID')),
        error: function error() {
          options.error.call(entityModel);
        }
      });

      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        if (options.success) {
          options.success.call(entityModel);
        }
      };

      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];

      var currentState = this.get('state');
      var nextState = attrs.state;
      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return '"' + nextState + '" is an invalid state';
        }

        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        } else if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
            return 'state change not accepted because fields are not in acceptable state';
          }
      }

      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;
      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;

      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
            accept = true;
          } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
              accept = true;
            } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
                accept = true;
              }
      }

      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;

      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];

        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);

      this.stopListening();

      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],

    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });

  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,

      fieldID: null,

      id: null,

      entity: null,

      metadata: null,

      acceptStateChange: null,

      logicalFieldID: null,

      state: 'inactive',

      isChanged: false,

      inTempStore: false,

      html: null,

      htmlForOtherViewModes: null
    },

    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);

      this.get('entity').get('fields').add(this);

      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));

      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;
      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return '"' + next + '" is an invalid state';
        }

        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({ logicalFieldID: currentField.get('logicalFieldID') }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],

    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });

  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,

      currentValue: null,

      validationErrors: null
    }

  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  var reload = false;

  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];

      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);

      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);

      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);

      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);

      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView = void 0;
      switch (state) {
        case 'launching':
          reload = false;

          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;

          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });

          _.defer(function () {
            entityModel.set('state', 'opening');
          });
          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;

          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            location.reload();
          }
          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
          if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
            accept = false;

            if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
              accept = true;
            } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                accept = true;
              } else if (from === 'highlighted' && to === 'candidate') {
                  accept = true;
                } else if (from === 'saved' && to === 'candidate') {
                    accept = true;
                  } else if (from === 'invalid' && to === 'saving') {
                      accept = true;
                    } else if (from === 'invalid' && to === 'activating') {
                        accept = true;
                      }
          }

          if (accept) {
            var activeField = void 0;
            var activeFieldState = void 0;

            if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
              activeField = this.model.get('activeField');
              if (activeField && activeField !== fieldModel) {
                activeFieldState = activeField.get('state');

                if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                  activeField.set('state', 'candidate');
                } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                  activeField.set('state', 'saving');
                }

                if (from === 'invalid') {
                  this.model.set('activeField', fieldModel);
                  accept = false;
                }
              }
            } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
                if (context && context.reason === 'mouseleave') {
                  accept = false;
                }
              } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                  if (context && context.reason === 'mouseleave') {
                    accept = false;
                  } else if (context && context.confirmed) {
                      accept = true;
                    }
                }
          }
        }

      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;

      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();

      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });

      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });

      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });

      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;

      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;

      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog = void 0;

      function closeDiscardDialog(action) {
        discardDialog.close(action);

        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', { confirmed: true });
        } else {
          entityModel.set('state', 'deactivating', { confirmed: true });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $('<div>' + Drupal.t('You have unsaved changes') + '</div>');
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },

            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],

          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },

          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);

        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }
        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function renderField() {
        fieldModel.destroy();

        $fieldWrapper.replaceWith(html);

        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');

          _.defer(function () {
            fieldModel.set('state', 'inactive', { reason: 'rerender' });

            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({ logicalFieldID: updatedField.get('logicalFieldID') }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          } else if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], { propagation: true });
            }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({ isActive: true });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,

    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },

    initialize: function initialize(options) {
      this.editorView = options.editorView;

      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();
          if (from !== 'inactive') {
            this.stopHighlight();
            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }
          this._unpad();
          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }
          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }
          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', { reason: 'mouseleave' });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;

      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }

      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');

        self.$el.css({
          position: 'relative',
          top: posProp.top - 5 + 'px',
          left: posProp.left - 5 + 'px',
          'padding-top': posProp['padding-top'] + 5 + 'px',
          'padding-left': posProp['padding-left'] + 5 + 'px',
          'padding-right': posProp['padding-right'] + 5 + 'px',
          'padding-bottom': posProp['padding-bottom'] + 5 + 'px',
          'margin-bottom': posProp['margin-bottom'] - 10 + 'px'
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }

      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');

        self.$el.css({
          position: 'relative',
          top: posProp.top + 5 + 'px',
          left: posProp.left + 5 + 'px',
          'padding-top': posProp['padding-top'] - 5 + 'px',
          'padding-left': posProp['padding-left'] - 5 + 'px',
          'padding-right': posProp['padding-right'] - 5 + 'px',
          'padding-bottom': posProp['padding-bottom'] - 5 + 'px',
          'margin-bottom': posProp['margin-bottom'] + 10 + 'px'
        });
      }, 0);

      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p = void 0;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];

      var propCount = props.length;
      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }
      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }
      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, debounce) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,

    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));

      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);

      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);

      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);

      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));

      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });

      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);

      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');
        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }

        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }

        this.label();

        this.show('ops');

        this.position();
      }

      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');

      switch (this.model.get('state')) {
        case 'opened':
          $button.removeClass('action-saving icon-throbber icon-end').text(Drupal.t('Save')).removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;

        case 'committing':
          $button.addClass('action-saving icon-throbber icon-end').text(Drupal.t('Saving')).attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },
    remove: function remove() {
      this.$fence.remove();

      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');

      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);

      var that = this;

      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';

      var delay = 0;

      var check = 0;

      var horizontalPadding = 0;
      var of = void 0;
      var activeField = void 0;
      var highlightedField = void 0;

      do {
        switch (check) {
          case 0:
            of = element;
            break;

          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();
            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }
            break;

          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;

              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;
                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }
              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }

        check++;
      } while (!of);

      function refinePosition(view, suggested, info) {
        var isBelow = suggested.top > info.target.top;
        info.element.element.toggleClass('quickedit-toolbar-pointer-top', isBelow);

        if (view.$entity[0] === info.target.element[0]) {
          var $field = view.$entity.find('.quickedit-editable').eq(isBelow ? -1 : 0);
          if ($field.length > 0) {
            suggested.top = isBelow ? $field.offset().top + $field.outerHeight(true) : $field.offset().top - info.element.element.outerHeight(true);
          }
        }

        var fenceTop = view.$fence.offset().top;
        var fenceHeight = view.$fence.height();
        var toolbarHeight = info.element.element.outerHeight(true);
        if (suggested.top < fenceTop) {
          suggested.top = fenceTop;
        } else if (suggested.top + toolbarHeight > fenceTop + fenceHeight) {
          suggested.top = fenceTop + fenceHeight - toolbarHeight;
        }

        info.element.element.css({
          left: Math.floor(suggested.left),
          top: Math.floor(suggested.top)
        });
      }

      function positionToolbar() {
        that.$el.position({
          my: edge + ' bottom',

          at: edge + '+' + (1 + horizontalPadding) + ' top',
          of: of,
          collision: 'flipfit',
          using: refinePosition.bind(null, that),
          within: that.$fence
        }).css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,

          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }

      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();

      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));

      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));

      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });

      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');

      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;

      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;

      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find('.quickedit-toolbar .quickedit-toolgroup.' + toolgroup);
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').text(options.strings.quickEdit);

      this.render();

      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);

      this.$el.closest('.contextual').toggle(!isActive);

      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,

    editorView: null,

    _id: null,

    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;

      this.$root = this.$el;

      this._id = 'quickedit-toolbar-for-' + this.model.id.replace(/[/[\]]/g, '_');

      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));

      this.$el.prependTo(this.$root);

      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }
          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));

      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return 'quickedit-toolbar-for-' + this._id;
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return 'quickedit-wysiwyg-floated-toolgroup-for-' + this._id;
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return 'quickedit-wysiwyg-main-toolgroup-for-' + this._id;
    },
    _find: function _find(toolgroup) {
      return this.$el.find('.quickedit-toolgroup.' + toolgroup);
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);

      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });

      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return { padding: false, unifiedToolbar: false, fullWidthToolbar: false, popup: false };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };
            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = 'quickedit_backstage-' + this.fieldModel.id.replace(/[/[\]_\s]/g, '-');

      function fillAndSubmitForm(value) {
        var $form = $('#' + backstageId).find('form');

        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);

        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),

        reset: !this.fieldModel.get('entity').get('inTempStore')
      };

      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', { id: backstageId })).appendTo('body');

        var $form = $(form).appendTo($backstage);

        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();

          fieldModel.set('state', 'saved');

          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);

          fieldModel.set('html', response.data);
        };

        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" />';
    return html;
  };

  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit quickedit-toolbar-container clearfix">';
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label" />';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix" />';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return '<span class="field">' + Drupal.checkPlain(settings.fieldLabel) + '</span>' + Drupal.checkPlain(settings.entityLabel);
  };

  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence" />';
  };

  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return '<div id="' + settings.id + '" />';
  };

  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += '<div class="' + classes.join(' ') + '"';
    if (settings.id) {
      html += ' id="' + settings.id + '"';
    }
    html += '>';
    html += Drupal.theme('quickeditButtons', { buttons: settings.buttons });
    html += '</div>';
    return html;
  };

  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';

    var _loop = function _loop(i) {
      var button = settings.buttons[i];
      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }

      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? '="' + attrMap[attr] + '"' : ''));
      });
      html += '<button type="' + button.type + '" class="' + button.classes + '" ' + attributes.join(' ') + '>' + button.label + '</button>';
    };

    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }
    return html;
  };

  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit-form-container">';
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
 * @file
 * Bootstrap Popovers.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  /**
   * Extend the Bootstrap Popover plugin constructor class.
   */
  Bootstrap.extendPlugin('popover', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.popover_animation,
        enabled: settings.popover_enabled,
        html: !!settings.popover_html,
        placement: settings.popover_placement,
        selector: settings.popover_selector,
        trigger: settings.popover_trigger,
        triggerAutoclose: !!settings.popover_trigger_autoclose,
        title: settings.popover_title,
        content: settings.popover_content,
        delay: parseInt(settings.popover_delay, 10),
        container: settings.popover_container
      }
    };
  });

  /**
   * Bootstrap Popovers.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapPopovers = {
    attach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      // Popover autoclose.
      if ($.fn.popover.Constructor.DEFAULTS.triggerAutoclose) {
        var $currentPopover = null;
        $(document)
          .on('show.bs.popover', '[data-toggle=popover]', function () {
            var $trigger = $(this);
            var popover = $trigger.data('bs.popover');

            // Only keep track of clicked triggers that we're manually handling.
            if (popover.options.originalTrigger === 'click') {
              if ($currentPopover && !$currentPopover.is($trigger)) {
                $currentPopover.popover('hide');
              }
              $currentPopover = $trigger;
            }
          })
          .on('click', function (e) {
            var $target = $(e.target);
            var popover = $target.is('[data-toggle=popover]') && $target.data('bs.popover');
            if ($currentPopover && !$target.is('[data-toggle=popover]') && !$target.closest('.popover.in')[0]) {
              $currentPopover.popover('hide');
              $currentPopover = null;
            }
          })
        ;
      }

      var elements = $(context).find('[data-toggle=popover]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.popover.Constructor.DEFAULTS, $element.data());

        // Store the original trigger.
        options.originalTrigger = options.trigger;

        // If the trigger is "click", then we'll handle it manually here.
        if (options.trigger === 'click') {
          options.trigger = 'manual';
        }

        // Retrieve content from a target element.
        var $target = $(options.target || $element.is('a[href^="#"]') && $element.attr('href')).clone();
        if (!options.content && $target[0]) {
          $target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');
          options.content = $target.wrap('<div/>').parent()[options.html ? 'html' : 'text']() || '';
        }

        // Initialize the popover.
        $element.popover(options);

        // Handle clicks manually.
        if (options.originalTrigger === 'click') {
          // To ensure the element is bound multiple times, remove any
          // previously set event handler before adding another one.
          $element
            .off('click.drupal.bootstrap.popover')
            .on('click.drupal.bootstrap.popover', function (e) {
              $(this).popover('toggle');
              e.preventDefault();
              e.stopPropagation();
            })
          ;
        }
      }
    },
    detach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      // Destroy all popovers.
      $(context).find('[data-toggle="popover"]')
        .off('click.drupal.bootstrap.popover')
        .popover('destroy')
      ;
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
 * @file
 * Bootstrap Tooltips.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  /**
   * Extend the Bootstrap Tooltip plugin constructor class.
   */
  Bootstrap.extendPlugin('tooltip', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.tooltip_animation,
        html: !!settings.tooltip_html,
        placement: settings.tooltip_placement,
        selector: settings.tooltip_selector,
        trigger: settings.tooltip_trigger,
        delay: parseInt(settings.tooltip_delay, 10),
        container: settings.tooltip_container
      }
    };
  });

  /**
   * Bootstrap Tooltips.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapTooltips = {
    attach: function (context) {
      var elements = $(context).find('[data-toggle="tooltip"]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, $element.data());
        $element.tooltip(options);
      }
    },
    detach: function (context) {
      // Destroy all tooltips.
      $(context).find('[data-toggle="tooltip"]').tooltip('destroy');
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', { '@label': $box.find('a').text() });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span><span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent, '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href="#close" class="joyride-close-tip">&times;</a>',
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', { '!tour_item': index + 1, '!total': total });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      tabbingContext.activate();

      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;

      var $disabledSet = $(':tabbable').not($set);

      tabbingContext.$disabledElements = $disabledSet;

      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);

      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  function TabbingContext(options) {
    $.extend(this, {
      level: null,

      $tabbableElements: $(),

      $disabledElements: $(),

      released: false,

      active: false
    }, options);
  }

  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);

        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);

        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);

        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,

      isVisible: false,

      contextualCount: 0,

      tabbingContext: null
    },

    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,

    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();

        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },

        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));

      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function bigPipeProcessPlaceholderReplacement(index, placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = this.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      if (content === '') {
        $(this).removeOnce('big-pipe');
      } else {
        var response = JSON.parse(content);

        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });

        ajaxObject.success(response, 'success');
      }
    }
  }

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    $(context).find('script[data-big-pipe-replacement-for-placeholder-with-id]').once('big-pipe').each(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  var interval = drupalSettings.bigPipeInterval || 50;

  var timeoutID = void 0;

  bigPipeProcess();

  $(window).on('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(jQuery, Drupal, drupalSettings);;
