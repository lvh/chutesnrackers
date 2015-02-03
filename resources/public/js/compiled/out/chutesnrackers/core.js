// Compiled by ClojureScript 0.0-2755 {}
goog.provide('chutesnrackers.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof chutesnrackers.core.app_state !== 'undefined'){
} else {
chutesnrackers.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
om.core.root.call(null,(function (app,owner){
if(typeof chutesnrackers.core.t19756 !== 'undefined'){
} else {

/**
* @constructor
*/
chutesnrackers.core.t19756 = (function (owner,app,meta19757){
this.owner = owner;
this.app = app;
this.meta19757 = meta19757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chutesnrackers.core.t19756.prototype.om$core$IRender$ = true;

chutesnrackers.core.t19756.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});

chutesnrackers.core.t19756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19758){
var self__ = this;
var _19758__$1 = this;
return self__.meta19757;
});

chutesnrackers.core.t19756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19758,meta19757__$1){
var self__ = this;
var _19758__$1 = this;
return (new chutesnrackers.core.t19756(self__.owner,self__.app,meta19757__$1));
});

chutesnrackers.core.t19756.cljs$lang$type = true;

chutesnrackers.core.t19756.cljs$lang$ctorStr = "chutesnrackers.core/t19756";

chutesnrackers.core.t19756.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"chutesnrackers.core/t19756");
});

chutesnrackers.core.__GT_t19756 = (function __GT_t19756(owner__$1,app__$1,meta19757){
return (new chutesnrackers.core.t19756(owner__$1,app__$1,meta19757));
});

}

return (new chutesnrackers.core.t19756(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),35,new cljs.core.Keyword(null,"end-line","end-line",1837326455),18,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/src/chutesnrackers/core.cljs"], null)));
}),chutesnrackers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return null;
})], null));

//# sourceMappingURL=core.js.map?rel=1422998145858