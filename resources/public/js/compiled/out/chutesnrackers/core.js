// Compiled by ClojureScript 0.0-2755 {}
goog.provide('chutesnrackers.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('figwheel.client');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Let's play Chutes 'n' Rackers!");
chutesnrackers.core.square_px = (100);
chutesnrackers.core.gutter_width = (100);
chutesnrackers.core.rows = (5);
chutesnrackers.core.cols = (8);
chutesnrackers.core.grid_squares = (chutesnrackers.core.rows * chutesnrackers.core.cols);
chutesnrackers.core.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","teal","blue","purple"], null);
chutesnrackers.core.initial_state = (function initial_state(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),(chutesnrackers.core.grid_squares - (1))], null);
});
if(typeof chutesnrackers.core.app_state !== 'undefined'){
} else {
chutesnrackers.core.app_state = cljs.core.atom.call(null,chutesnrackers.core.initial_state.call(null));
}
chutesnrackers.core.grid_loc = (function grid_loc(i){
var col = cljs.core.mod.call(null,i,chutesnrackers.core.cols);
var row = ((i / chutesnrackers.core.cols) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null);
});
chutesnrackers.core.pixel_loc = (function pixel_loc(p__15842){
var vec__15844 = p__15842;
var col = cljs.core.nth.call(null,vec__15844,(0),null);
var row = cljs.core.nth.call(null,vec__15844,(1),null);
var x = (col * chutesnrackers.core.square_px);
var y = ((row * chutesnrackers.core.square_px) + (row * chutesnrackers.core.gutter_width));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
chutesnrackers.core.position_style = (function position_style(i){
var vec__15846 = chutesnrackers.core.pixel_loc.call(null,chutesnrackers.core.grid_loc.call(null,i));
var x = cljs.core.nth.call(null,vec__15846,(0),null);
var y = cljs.core.nth.call(null,vec__15846,(1),null);
return {"top": y, "left": x};
});
chutesnrackers.core.grid_square = (function grid_square(i,color){
return React.DOM.div({"id": [cljs.core.str("grid-square-"),cljs.core.str(i)].join(''), "style": chutesnrackers.core.position_style.call(null,i), "className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grid-square",color], null))},[cljs.core.str(i),cljs.core.str(" "),cljs.core.str(chutesnrackers.core.grid_loc.call(null,i))].join(''));
});
chutesnrackers.core.peon = (function peon(i){
return React.DOM.img({"style": chutesnrackers.core.position_style.call(null,i), "src": "img/rackspace.png", "className": "peon"});
});
chutesnrackers.core.grid = (function grid(app){
return cljs.core.apply.call(null,om.dom.div,{"className": "grid"},cljs.core.conj.call(null,cljs.core.map.call(null,chutesnrackers.core.grid_square,cljs.core.range.call(null,chutesnrackers.core.grid_squares),cljs.core.cycle.call(null,chutesnrackers.core.colors)),chutesnrackers.core.peon.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(app))));
});
om.core.root.call(null,(function (app,owner){
if(typeof chutesnrackers.core.t15847 !== 'undefined'){
} else {

/**
* @constructor
*/
chutesnrackers.core.t15847 = (function (owner,app,meta15848){
this.owner = owner;
this.app = app;
this.meta15848 = meta15848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chutesnrackers.core.t15847.prototype.om$core$IRender$ = true;

chutesnrackers.core.t15847.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "container"},chutesnrackers.core.grid.call(null,self__.app));
});

chutesnrackers.core.t15847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15849){
var self__ = this;
var _15849__$1 = this;
return self__.meta15848;
});

chutesnrackers.core.t15847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15849,meta15848__$1){
var self__ = this;
var _15849__$1 = this;
return (new chutesnrackers.core.t15847(self__.owner,self__.app,meta15848__$1));
});

chutesnrackers.core.t15847.cljs$lang$type = true;

chutesnrackers.core.t15847.cljs$lang$ctorStr = "chutesnrackers.core/t15847";

chutesnrackers.core.t15847.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"chutesnrackers.core/t15847");
});

chutesnrackers.core.__GT_t15847 = (function __GT_t15847(owner__$1,app__$1,meta15848){
return (new chutesnrackers.core.t15847(owner__$1,app__$1,meta15848));
});

}

return (new chutesnrackers.core.t15847(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),31,new cljs.core.Keyword(null,"end-line","end-line",1837326455),72,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),69,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/src/chutesnrackers/core.cljs"], null)));
}),chutesnrackers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return null;
})], null));

//# sourceMappingURL=core.js.map?rel=1423012444400