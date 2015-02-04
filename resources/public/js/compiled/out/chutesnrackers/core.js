// Compiled by ClojureScript 0.0-2755 {}
goog.provide('chutesnrackers.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('figwheel.client');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Let's play Chutes 'n' Rackers!");
chutesnrackers.core.square_px = (80);
chutesnrackers.core.gutter_width = (60);
chutesnrackers.core.rows = (5);
chutesnrackers.core.cols = (8);
chutesnrackers.core.grid_squares = (chutesnrackers.core.rows * chutesnrackers.core.cols);
chutesnrackers.core.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","teal","blue","purple"], null);
chutesnrackers.core.values = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fanatical Support\u00AE in all we do.","Results first, substance over flash.","Committed to Greatness","Full Disclosure and Transparency","Passion for our Work","Treat fellow Rackers like Friends and Family"], null);
chutesnrackers.core.values_by_color = cljs.core.zipmap.call(null,chutesnrackers.core.colors,chutesnrackers.core.values);
chutesnrackers.core.initial_state = (function initial_state(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"i","i",-1386841315),(chutesnrackers.core.grid_squares - (1)),new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"squares","squares",-888257629),(function (){var iter__13399__auto__ = (function iter__18829(s__18830){
return (new cljs.core.LazySeq(null,(function (){
var s__18830__$1 = s__18830;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18830__$1);
if(temp__4126__auto__){
var s__18830__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18830__$2)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,s__18830__$2);
var size__13398__auto__ = cljs.core.count.call(null,c__13397__auto__);
var b__18832 = cljs.core.chunk_buffer.call(null,size__13398__auto__);
if((function (){var i__18831 = (0);
while(true){
if((i__18831 < size__13398__auto__)){
var i = cljs.core._nth.call(null,c__13397__auto__,i__18831);
cljs.core.chunk_append.call(null,b__18832,(function (){var color = cljs.core.rand_nth.call(null,chutesnrackers.core.colors);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"value","value",305978217),chutesnrackers.core.values_by_color.call(null,color)], null);
})());

var G__18833 = (i__18831 + (1));
i__18831 = G__18833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18832),iter__18829.call(null,cljs.core.chunk_rest.call(null,s__18830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18832),null);
}
} else {
var i = cljs.core.first.call(null,s__18830__$2);
return cljs.core.cons.call(null,(function (){var color = cljs.core.rand_nth.call(null,chutesnrackers.core.colors);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"value","value",305978217),chutesnrackers.core.values_by_color.call(null,color)], null);
})(),iter__18829.call(null,cljs.core.rest.call(null,s__18830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13399__auto__.call(null,cljs.core.range.call(null,chutesnrackers.core.grid_squares));
})(),new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.list("You start your day at the Rack.")], null);
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
chutesnrackers.core.pixel_loc = (function pixel_loc(p__18834){
var vec__18836 = p__18834;
var col = cljs.core.nth.call(null,vec__18836,(0),null);
var row = cljs.core.nth.call(null,vec__18836,(1),null);
var x = (col * chutesnrackers.core.square_px);
var y = ((row * chutesnrackers.core.square_px) + (row * chutesnrackers.core.gutter_width));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
chutesnrackers.core.position_style = (function position_style(i){
var vec__18838 = chutesnrackers.core.pixel_loc.call(null,chutesnrackers.core.grid_loc.call(null,i));
var x = cljs.core.nth.call(null,vec__18838,(0),null);
var y = cljs.core.nth.call(null,vec__18838,(1),null);
return {"top": y, "left": x};
});
chutesnrackers.core.grid_square = (function grid_square(i,p__18839){
var map__18841 = p__18839;
var map__18841__$1 = ((cljs.core.seq_QMARK_.call(null,map__18841))?cljs.core.apply.call(null,cljs.core.hash_map,map__18841):map__18841);
var color = cljs.core.get.call(null,map__18841__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return React.DOM.div({"id": [cljs.core.str("grid-square-"),cljs.core.str(i)].join(''), "style": chutesnrackers.core.position_style.call(null,i), "className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grid-square",color], null))},null);
});
chutesnrackers.core.peon = (function peon(i){
return React.DOM.img({"style": chutesnrackers.core.position_style.call(null,i), "src": "img/rackspace.png", "className": "peon"});
});
chutesnrackers.core.happy_customer = React.DOM.img({"style": chutesnrackers.core.position_style.call(null,(0)), "src": "img/happy-customer.png", "className": "happy-customer"});
chutesnrackers.core.grid = (function grid(app){
return cljs.core.apply.call(null,om.dom.div,{"className": "grid"},cljs.core.conj.call(null,cljs.core.map_indexed.call(null,chutesnrackers.core.grid_square,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(app)),chutesnrackers.core.peon.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(app)),chutesnrackers.core.happy_customer));
});
chutesnrackers.core.values_list = (function values_list(app){
return cljs.core.apply.call(null,om.dom.ul,null,(function (){var iter__13399__auto__ = (function iter__18850(s__18851){
return (new cljs.core.LazySeq(null,(function (){
var s__18851__$1 = s__18851;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18851__$1);
if(temp__4126__auto__){
var s__18851__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18851__$2)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,s__18851__$2);
var size__13398__auto__ = cljs.core.count.call(null,c__13397__auto__);
var b__18853 = cljs.core.chunk_buffer.call(null,size__13398__auto__);
if((function (){var i__18852 = (0);
while(true){
if((i__18852 < size__13398__auto__)){
var vec__18856 = cljs.core._nth.call(null,c__13397__auto__,i__18852);
var color = cljs.core.nth.call(null,vec__18856,(0),null);
var value = cljs.core.nth.call(null,vec__18856,(1),null);
cljs.core.chunk_append.call(null,b__18853,(function (){var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(app),value))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,"highlight"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color], null));
return React.DOM.li({"className": clojure.string.join.call(null," ",classes)},React.DOM.span(null,value));
})());

var G__18858 = (i__18852 + (1));
i__18852 = G__18858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18853),iter__18850.call(null,cljs.core.chunk_rest.call(null,s__18851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18853),null);
}
} else {
var vec__18857 = cljs.core.first.call(null,s__18851__$2);
var color = cljs.core.nth.call(null,vec__18857,(0),null);
var value = cljs.core.nth.call(null,vec__18857,(1),null);
return cljs.core.cons.call(null,(function (){var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(app),value))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,"highlight"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color], null));
return React.DOM.li({"className": clojure.string.join.call(null," ",classes)},React.DOM.span(null,value));
})(),iter__18850.call(null,cljs.core.rest.call(null,s__18851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13399__auto__.call(null,chutesnrackers.core.values_by_color);
})());
});
/**
* Possibly get teleported by a chute or Racker.
*/
chutesnrackers.core.teleport = (function teleport(state){
return state;
});
chutesnrackers.core.roll = (function roll(state){
var prev_i = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state);
var new_value = cljs.core.rand_nth.call(null,chutesnrackers.core.values);
var squares_to_go = cljs.core.reverse.call(null,cljs.core.take.call(null,prev_i,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state)));
var next_square = cljs.core.first.call(null,cljs.core.filter.call(null,((function (prev_i,new_value,squares_to_go){
return (function (p1__18859_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18859_SHARP_),new_value);
});})(prev_i,new_value,squares_to_go))
,squares_to_go));
var next_i = (function (){var or__12643__auto__ = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(next_square);
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return prev_i;
}
})();
return cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"value","value",305978217),new_value),new cljs.core.Keyword(null,"i","i",-1386841315),next_i),new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,[cljs.core.str("You go from "),cljs.core.str(prev_i),cljs.core.str(" to "),cljs.core.str(next_i),cljs.core.str(".")].join(''));
});
chutesnrackers.core.messages_list = (function messages_list(app){
return cljs.core.apply.call(null,om.dom.ul,null,(function (){var iter__13399__auto__ = (function iter__18864(s__18865){
return (new cljs.core.LazySeq(null,(function (){
var s__18865__$1 = s__18865;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18865__$1);
if(temp__4126__auto__){
var s__18865__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18865__$2)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,s__18865__$2);
var size__13398__auto__ = cljs.core.count.call(null,c__13397__auto__);
var b__18867 = cljs.core.chunk_buffer.call(null,size__13398__auto__);
if((function (){var i__18866 = (0);
while(true){
if((i__18866 < size__13398__auto__)){
var m = cljs.core._nth.call(null,c__13397__auto__,i__18866);
cljs.core.chunk_append.call(null,b__18867,React.DOM.li(null,m));

var G__18868 = (i__18866 + (1));
i__18866 = G__18868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18867),iter__18864.call(null,cljs.core.chunk_rest.call(null,s__18865__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18867),null);
}
} else {
var m = cljs.core.first.call(null,s__18865__$2);
return cljs.core.cons.call(null,React.DOM.li(null,m),iter__18864.call(null,cljs.core.rest.call(null,s__18865__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13399__auto__.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(app));
})());
});
chutesnrackers.core.hud = (function hud(app){
return React.DOM.div({"className": "hud"},React.DOM.span(null,[cljs.core.str("Steps to go: "),cljs.core.str(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(app))].join('')),chutesnrackers.core.values_list.call(null,app),React.DOM.button({"onClick": (function (){
return om.core.transact_BANG_.call(null,app,chutesnrackers.core.roll);
})},"Let's go!"),chutesnrackers.core.messages_list.call(null,app));
});
om.core.root.call(null,(function (app,owner){
if(typeof chutesnrackers.core.t18869 !== 'undefined'){
} else {

/**
* @constructor
*/
chutesnrackers.core.t18869 = (function (owner,app,meta18870){
this.owner = owner;
this.app = app;
this.meta18870 = meta18870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chutesnrackers.core.t18869.prototype.om$core$IRender$ = true;

chutesnrackers.core.t18869.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "container"},chutesnrackers.core.grid.call(null,self__.app),chutesnrackers.core.hud.call(null,self__.app));
});

chutesnrackers.core.t18869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18871){
var self__ = this;
var _18871__$1 = this;
return self__.meta18870;
});

chutesnrackers.core.t18869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18871,meta18870__$1){
var self__ = this;
var _18871__$1 = this;
return (new chutesnrackers.core.t18869(self__.owner,self__.app,meta18870__$1));
});

chutesnrackers.core.t18869.cljs$lang$type = true;

chutesnrackers.core.t18869.cljs$lang$ctorStr = "chutesnrackers.core/t18869";

chutesnrackers.core.t18869.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"chutesnrackers.core/t18869");
});

chutesnrackers.core.__GT_t18869 = (function __GT_t18869(owner__$1,app__$1,meta18870){
return (new chutesnrackers.core.t18869(owner__$1,app__$1,meta18870));
});

}

return (new chutesnrackers.core.t18869(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),131,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/src/chutesnrackers/core.cljs"], null)));
}),chutesnrackers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return null;
})], null));

//# sourceMappingURL=core.js.map?rel=1423026190556