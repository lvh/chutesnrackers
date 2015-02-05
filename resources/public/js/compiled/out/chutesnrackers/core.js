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
chutesnrackers.core.gutter_width = (110);
chutesnrackers.core.rows = (5);
chutesnrackers.core.cols = (8);
chutesnrackers.core.grid_squares = (chutesnrackers.core.rows * chutesnrackers.core.cols);
chutesnrackers.core.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","teal","blue","purple"], null);
chutesnrackers.core.values = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fanatical Support\u00AE in all we do.","Results first, substance over flash.","Committed to Greatness","Full Disclosure and Transparency","Passion for our Work","Treat fellow Rackers like Friends and Family"], null);
chutesnrackers.core.values_by_color = cljs.core.zipmap.call(null,chutesnrackers.core.colors,chutesnrackers.core.values);
chutesnrackers.core.faces = cljs.core.map.call(null,(function (p1__33165_SHARP_){
return [cljs.core.str("img/face-"),cljs.core.str(p1__33165_SHARP_),cljs.core.str(".png")].join('');
}),cljs.core.range.call(null,(5)));
/**
* Square types, frequency weighted by probability.
*/
chutesnrackers.core.square_types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,new cljs.core.Keyword(null,"chute","chute",800304440),new cljs.core.Keyword(null,"chute","chute",800304440),new cljs.core.Keyword(null,"racker","racker",-59629234)], null);
chutesnrackers.core.img_attrs = (function img_attrs(square_type){
var pred__33169 = cljs.core._EQ_;
var expr__33170 = square_type;
if(cljs.core.truth_(pred__33169.call(null,new cljs.core.Keyword(null,"chute","chute",800304440),expr__33170))){
return {"style": {"left": "5px", "top": "45px"}, "src": "img/hole.png"};
} else {
if(cljs.core.truth_(pred__33169.call(null,new cljs.core.Keyword(null,"racker","racker",-59629234),expr__33170))){
return {"style": {"left": "18px", "top": "30px"}, "src": "img/rackspace.png"};
} else {
if(cljs.core.truth_(pred__33169.call(null,null,expr__33170))){
return null;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33170)].join('')));
}
}
}
});
chutesnrackers.core.initial_state = (function initial_state(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"i","i",-1386841315),(chutesnrackers.core.grid_squares - (1)),new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"peon-img","peon-img",-583792621),cljs.core.rand_nth.call(null,chutesnrackers.core.faces),new cljs.core.Keyword(null,"squares","squares",-888257629),(function (){var iter__13399__auto__ = (function iter__33176(s__33177){
return (new cljs.core.LazySeq(null,(function (){
var s__33177__$1 = s__33177;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33177__$1);
if(temp__4126__auto__){
var s__33177__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33177__$2)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,s__33177__$2);
var size__13398__auto__ = cljs.core.count.call(null,c__13397__auto__);
var b__33179 = cljs.core.chunk_buffer.call(null,size__13398__auto__);
if((function (){var i__33178 = (0);
while(true){
if((i__33178 < size__13398__auto__)){
var i = cljs.core._nth.call(null,c__13397__auto__,i__33178);
cljs.core.chunk_append.call(null,b__33179,(function (){var color = cljs.core.rand_nth.call(null,chutesnrackers.core.colors);
var square_type = (cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([(0),(chutesnrackers.core.grid_squares - (1))], true).call(null,i))?null:cljs.core.rand_nth.call(null,chutesnrackers.core.square_types));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"value","value",305978217),chutesnrackers.core.values_by_color.call(null,color),new cljs.core.Keyword(null,"square-type","square-type",827941939),square_type,new cljs.core.Keyword(null,"img-attrs","img-attrs",-1020067177),chutesnrackers.core.img_attrs.call(null,square_type)], null);
})());

var G__33180 = (i__33178 + (1));
i__33178 = G__33180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33179),iter__33176.call(null,cljs.core.chunk_rest.call(null,s__33177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33179),null);
}
} else {
var i = cljs.core.first.call(null,s__33177__$2);
return cljs.core.cons.call(null,(function (){var color = cljs.core.rand_nth.call(null,chutesnrackers.core.colors);
var square_type = (cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([(0),(chutesnrackers.core.grid_squares - (1))], true).call(null,i))?null:cljs.core.rand_nth.call(null,chutesnrackers.core.square_types));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"value","value",305978217),chutesnrackers.core.values_by_color.call(null,color),new cljs.core.Keyword(null,"square-type","square-type",827941939),square_type,new cljs.core.Keyword(null,"img-attrs","img-attrs",-1020067177),chutesnrackers.core.img_attrs.call(null,square_type)], null);
})(),iter__33176.call(null,cljs.core.rest.call(null,s__33177__$2)));
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
chutesnrackers.core.pixel_loc = (function pixel_loc(p__33181){
var vec__33183 = p__33181;
var col = cljs.core.nth.call(null,vec__33183,(0),null);
var row = cljs.core.nth.call(null,vec__33183,(1),null);
var x = (col * chutesnrackers.core.square_px);
var y = ((row * chutesnrackers.core.square_px) + (row * chutesnrackers.core.gutter_width));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
chutesnrackers.core.position_style = (function position_style(i){
var vec__33185 = chutesnrackers.core.pixel_loc.call(null,chutesnrackers.core.grid_loc.call(null,i));
var x = cljs.core.nth.call(null,vec__33185,(0),null);
var y = cljs.core.nth.call(null,vec__33185,(1),null);
return {"top": y, "left": x};
});
/**
* @param {...*} var_args
*/
chutesnrackers.core.in_between_style = (function() { 
var in_between_style__delegate = function (below_row,center){
var col = (cljs.core.truth_(center)?(chutesnrackers.core.cols / (2)):((cljs.core._EQ_.call(null,cljs.core.mod.call(null,below_row,(2)),(0)))?(chutesnrackers.core.cols - (1)):(0)));
var vec__33187 = chutesnrackers.core.pixel_loc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,below_row], null));
var x = cljs.core.nth.call(null,vec__33187,(0),null);
var y = cljs.core.nth.call(null,vec__33187,(1),null);
var y__$1 = (y + chutesnrackers.core.square_px);
return {"top": y__$1, "left": x};
};
var in_between_style = function (below_row,var_args){
var center = null;
if (arguments.length > 1) {
var G__33188__i = 0, G__33188__a = new Array(arguments.length -  1);
while (G__33188__i < G__33188__a.length) {G__33188__a[G__33188__i] = arguments[G__33188__i + 1]; ++G__33188__i;}
  center = new cljs.core.IndexedSeq(G__33188__a,0);
} 
return in_between_style__delegate.call(this,below_row,center);};
in_between_style.cljs$lang$maxFixedArity = 1;
in_between_style.cljs$lang$applyTo = (function (arglist__33189){
var below_row = cljs.core.first(arglist__33189);
var center = cljs.core.rest(arglist__33189);
return in_between_style__delegate(below_row,center);
});
in_between_style.cljs$core$IFn$_invoke$arity$variadic = in_between_style__delegate;
return in_between_style;
})()
;
chutesnrackers.core.grid_square = (function grid_square(p__33190){
var map__33192 = p__33190;
var map__33192__$1 = ((cljs.core.seq_QMARK_.call(null,map__33192))?cljs.core.apply.call(null,cljs.core.hash_map,map__33192):map__33192);
var i = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var color = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var square_type = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"square-type","square-type",827941939));
var img_attrs = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"img-attrs","img-attrs",-1020067177));
return React.DOM.div({"id": [cljs.core.str("grid-square-"),cljs.core.str(i)].join(''), "style": chutesnrackers.core.position_style.call(null,i), "className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grid-square",color], null))},React.DOM.div({"style": {"left": "12px", "top": "1px", "color": "#888"}},((cljs.core._EQ_.call(null,i,(0)))?"Goal":[cljs.core.str(i)].join(''))),(cljs.core.truth_(img_attrs)?React.DOM.img(img_attrs):null));
});
chutesnrackers.core.peon = (function peon(i,img){
return React.DOM.img({"style": chutesnrackers.core.position_style.call(null,i), "src": img, "className": "peon"});
});
chutesnrackers.core.happy_customer = React.DOM.img({"style": chutesnrackers.core.position_style.call(null,(0)), "src": "img/happy-customer.png", "className": "happy-customer"});
chutesnrackers.core.in_between_decoration = (function in_between_decoration(n,img_name){
return React.DOM.img({"style": chutesnrackers.core.in_between_style.call(null,n), "src": [cljs.core.str("img/"),cljs.core.str(img_name),cljs.core.str(".png")].join('')});
});
chutesnrackers.core.arrow = (function arrow(){
return null;
});
chutesnrackers.core.grid = (function grid(app){
return cljs.core.apply.call(null,om.dom.div,{"className": "grid"},cljs.core.concat.call(null,cljs.core.map.call(null,chutesnrackers.core.grid_square,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chutesnrackers.core.peon.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"peon-img","peon-img",-583792621).cljs$core$IFn$_invoke$arity$1(app)),chutesnrackers.core.happy_customer], null),cljs.core.map_indexed.call(null,chutesnrackers.core.in_between_decoration,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["walk","restroom","lunch","coffee"], null))));
});
chutesnrackers.core.values_list = (function values_list(app){
return cljs.core.apply.call(null,om.dom.ul,null,(function (){var iter__13399__auto__ = (function iter__33201(s__33202){
return (new cljs.core.LazySeq(null,(function (){
var s__33202__$1 = s__33202;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33202__$1);
if(temp__4126__auto__){
var s__33202__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33202__$2)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,s__33202__$2);
var size__13398__auto__ = cljs.core.count.call(null,c__13397__auto__);
var b__33204 = cljs.core.chunk_buffer.call(null,size__13398__auto__);
if((function (){var i__33203 = (0);
while(true){
if((i__33203 < size__13398__auto__)){
var vec__33207 = cljs.core._nth.call(null,c__13397__auto__,i__33203);
var color = cljs.core.nth.call(null,vec__33207,(0),null);
var value = cljs.core.nth.call(null,vec__33207,(1),null);
cljs.core.chunk_append.call(null,b__33204,(function (){var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(app),value))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,"highlight"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color], null));
return React.DOM.li({"className": clojure.string.join.call(null," ",classes)},React.DOM.span(null,value));
})());

var G__33209 = (i__33203 + (1));
i__33203 = G__33209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33204),iter__33201.call(null,cljs.core.chunk_rest.call(null,s__33202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33204),null);
}
} else {
var vec__33208 = cljs.core.first.call(null,s__33202__$2);
var color = cljs.core.nth.call(null,vec__33208,(0),null);
var value = cljs.core.nth.call(null,vec__33208,(1),null);
return cljs.core.cons.call(null,(function (){var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(app),value))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,"highlight"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color], null));
return React.DOM.li({"className": clojure.string.join.call(null," ",classes)},React.DOM.span(null,value));
})(),iter__33201.call(null,cljs.core.rest.call(null,s__33202__$2)));
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
chutesnrackers.core.teleport = (function teleport(p__33210){
var map__33216 = p__33210;
var map__33216__$1 = ((cljs.core.seq_QMARK_.call(null,map__33216))?cljs.core.apply.call(null,cljs.core.hash_map,map__33216):map__33216);
var state = map__33216__$1;
var curr_i = cljs.core.get.call(null,map__33216__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var squares = cljs.core.get.call(null,map__33216__$1,new cljs.core.Keyword(null,"squares","squares",-888257629));
var square_type = new cljs.core.Keyword(null,"square-type","square-type",827941939).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,squares,curr_i));
var _ = cljs.core.println.call(null,square_type);
if(cljs.core.truth_(square_type)){
var vec__33217 = (function (){var pred__33218 = cljs.core._EQ_;
var expr__33219 = square_type;
if(cljs.core.truth_(pred__33218.call(null,new cljs.core.Keyword(null,"chute","chute",800304440),expr__33219))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(chutesnrackers.core.grid_squares - curr_i)) + curr_i),"You fall down."], null);
} else {
if(cljs.core.truth_(pred__33218.call(null,new cljs.core.Keyword(null,"racker","racker",-59629234),expr__33219))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,curr_i),"You get helped up."], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33219)].join('')));
}
}
})();
var i = cljs.core.nth.call(null,vec__33217,(0),null);
var msg = cljs.core.nth.call(null,vec__33217,(1),null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"i","i",-1386841315),i),new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,msg);
} else {
return state;
}
});
chutesnrackers.core.roll = (function roll(state){
var curr_i = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state);
var new_value = cljs.core.rand_nth.call(null,chutesnrackers.core.values);
var squares_to_go = cljs.core.reverse.call(null,cljs.core.take.call(null,curr_i,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state)));
var next_square = cljs.core.first.call(null,cljs.core.filter.call(null,((function (curr_i,new_value,squares_to_go){
return (function (p1__33221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__33221_SHARP_),new_value);
});})(curr_i,new_value,squares_to_go))
,squares_to_go));
var next_i = (function (){var or__12643__auto__ = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(next_square);
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return curr_i;
}
})();
var msg = ((cljs.core._EQ_.call(null,next_i,(0)))?"The customer is amazed by your fanatical support! Way to go!":[cljs.core.str("You go from square "),cljs.core.str(curr_i),cljs.core.str(" to square "),cljs.core.str(next_i),cljs.core.str(".")].join(''));
return chutesnrackers.core.teleport.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"value","value",305978217),new_value),new cljs.core.Keyword(null,"i","i",-1386841315),next_i),new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,msg));
});
chutesnrackers.core.messages_list = (function messages_list(app){
return cljs.core.apply.call(null,om.dom.ul,null,(function (){var iter__13399__auto__ = (function iter__33226(s__33227){
return (new cljs.core.LazySeq(null,(function (){
var s__33227__$1 = s__33227;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33227__$1);
if(temp__4126__auto__){
var s__33227__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33227__$2)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,s__33227__$2);
var size__13398__auto__ = cljs.core.count.call(null,c__13397__auto__);
var b__33229 = cljs.core.chunk_buffer.call(null,size__13398__auto__);
if((function (){var i__33228 = (0);
while(true){
if((i__33228 < size__13398__auto__)){
var m = cljs.core._nth.call(null,c__13397__auto__,i__33228);
cljs.core.chunk_append.call(null,b__33229,React.DOM.li(null,m));

var G__33230 = (i__33228 + (1));
i__33228 = G__33230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33229),iter__33226.call(null,cljs.core.chunk_rest.call(null,s__33227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33229),null);
}
} else {
var m = cljs.core.first.call(null,s__33227__$2);
return cljs.core.cons.call(null,React.DOM.li(null,m),iter__33226.call(null,cljs.core.rest.call(null,s__33227__$2)));
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
chutesnrackers.core.steps_to_go_msg = (function steps_to_go_msg(i){
if(cljs.core._EQ_.call(null,i,(0))){
return [cljs.core.str("Awesome! \u263A")].join('');
} else {
var motivational = (function (){var pred__33234 = cljs.core._LT__EQ_;
var expr__33235 = (i / chutesnrackers.core.grid_squares);
if(cljs.core.truth_(pred__33234.call(null,.8,expr__33235))){
return "Just warming up!";
} else {
if(cljs.core.truth_(pred__33234.call(null,.5,expr__33235))){
return "Keep it up!";
} else {
if(cljs.core.truth_(pred__33234.call(null,.3,expr__33235))){
return "You're doing great!";
} else {
if(cljs.core.truth_(pred__33234.call(null,(0),expr__33235))){
return "Almost there!";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33235)].join('')));
}
}
}
}
})();
return [cljs.core.str(i),cljs.core.str(" steps to go. "),cljs.core.str(motivational)].join('');
}
});
chutesnrackers.core.hud = (function hud(app){
return React.DOM.div({"className": "hud"},React.DOM.span(null,chutesnrackers.core.steps_to_go_msg.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(app))),chutesnrackers.core.values_list.call(null,app),React.DOM.button({"onClick": (function (){
return om.core.transact_BANG_.call(null,app,chutesnrackers.core.roll);
}), "disabled": cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(app),(0))},"Let's go!"),React.DOM.button({"onClick": (function (){
return om.core.update_BANG_.call(null,app,chutesnrackers.core.initial_state.call(null));
})},"Try again tomorrow"),chutesnrackers.core.messages_list.call(null,app));
});
om.core.root.call(null,(function (app,owner){
if(typeof chutesnrackers.core.t33237 !== 'undefined'){
} else {

/**
* @constructor
*/
chutesnrackers.core.t33237 = (function (owner,app,meta33238){
this.owner = owner;
this.app = app;
this.meta33238 = meta33238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chutesnrackers.core.t33237.prototype.om$core$IRender$ = true;

chutesnrackers.core.t33237.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "container"},chutesnrackers.core.grid.call(null,self__.app),chutesnrackers.core.hud.call(null,self__.app));
});

chutesnrackers.core.t33237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33239){
var self__ = this;
var _33239__$1 = this;
return self__.meta33238;
});

chutesnrackers.core.t33237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33239,meta33238__$1){
var self__ = this;
var _33239__$1 = this;
return (new chutesnrackers.core.t33237(self__.owner,self__.app,meta33238__$1));
});

chutesnrackers.core.t33237.cljs$lang$type = true;

chutesnrackers.core.t33237.cljs$lang$ctorStr = "chutesnrackers.core/t33237";

chutesnrackers.core.t33237.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"chutesnrackers.core/t33237");
});

chutesnrackers.core.__GT_t33237 = (function __GT_t33237(owner__$1,app__$1,meta33238){
return (new chutesnrackers.core.t33237(owner__$1,app__$1,meta33238));
});

}

return (new chutesnrackers.core.t33237(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),214,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),210,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/src/chutesnrackers/core.cljs"], null)));
}),chutesnrackers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return null;
})], null));

//# sourceMappingURL=core.js.map?rel=1423105899222