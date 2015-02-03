// Compiled by ClojureScript 0.0-2755 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26128__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26129__i = 0, G__26129__a = new Array(arguments.length -  0);
while (G__26129__i < G__26129__a.length) {G__26129__a[G__26129__i] = arguments[G__26129__i + 0]; ++G__26129__i;}
  args = new cljs.core.IndexedSeq(G__26129__a,0);
} 
return G__26128__delegate.call(this,args);};
G__26128.cljs$lang$maxFixedArity = 0;
G__26128.cljs$lang$applyTo = (function (arglist__26130){
var args = cljs.core.seq(arglist__26130);
return G__26128__delegate(args);
});
G__26128.cljs$core$IFn$_invoke$arity$variadic = G__26128__delegate;
return G__26128;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__26131){
var map__26133 = p__26131;
var map__26133__$1 = ((cljs.core.seq_QMARK_.call(null,map__26133))?cljs.core.apply.call(null,cljs.core.hash_map,map__26133):map__26133);
var class$ = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12643__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12631__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12631__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12631__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__15752__auto___26262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___26262,ch){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___26262,ch){
return (function (state_26236){
var state_val_26237 = (state_26236[(1)]);
if((state_val_26237 === (7))){
var inst_26232 = (state_26236[(2)]);
var state_26236__$1 = state_26236;
var statearr_26238_26263 = state_26236__$1;
(statearr_26238_26263[(2)] = inst_26232);

(statearr_26238_26263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (1))){
var state_26236__$1 = state_26236;
var statearr_26239_26264 = state_26236__$1;
(statearr_26239_26264[(2)] = null);

(statearr_26239_26264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (4))){
var inst_26200 = (state_26236[(7)]);
var inst_26200__$1 = (state_26236[(2)]);
var state_26236__$1 = (function (){var statearr_26240 = state_26236;
(statearr_26240[(7)] = inst_26200__$1);

return statearr_26240;
})();
if(cljs.core.truth_(inst_26200__$1)){
var statearr_26241_26265 = state_26236__$1;
(statearr_26241_26265[(1)] = (5));

} else {
var statearr_26242_26266 = state_26236__$1;
(statearr_26242_26266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (13))){
var state_26236__$1 = state_26236;
var statearr_26243_26267 = state_26236__$1;
(statearr_26243_26267[(2)] = null);

(statearr_26243_26267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (6))){
var state_26236__$1 = state_26236;
var statearr_26244_26268 = state_26236__$1;
(statearr_26244_26268[(2)] = null);

(statearr_26244_26268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (3))){
var inst_26234 = (state_26236[(2)]);
var state_26236__$1 = state_26236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26236__$1,inst_26234);
} else {
if((state_val_26237 === (12))){
var inst_26207 = (state_26236[(8)]);
var inst_26220 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26207);
var inst_26221 = cljs.core.first.call(null,inst_26220);
var inst_26222 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26221);
var inst_26223 = console.warn("Figwheel: Not loading code with warnings - ",inst_26222);
var state_26236__$1 = state_26236;
var statearr_26245_26269 = state_26236__$1;
(statearr_26245_26269[(2)] = inst_26223);

(statearr_26245_26269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (2))){
var state_26236__$1 = state_26236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26236__$1,(4),ch);
} else {
if((state_val_26237 === (11))){
var inst_26216 = (state_26236[(2)]);
var state_26236__$1 = state_26236;
var statearr_26246_26270 = state_26236__$1;
(statearr_26246_26270[(2)] = inst_26216);

(statearr_26246_26270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (9))){
var inst_26206 = (state_26236[(9)]);
var inst_26218 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26206,opts);
var state_26236__$1 = state_26236;
if(inst_26218){
var statearr_26247_26271 = state_26236__$1;
(statearr_26247_26271[(1)] = (12));

} else {
var statearr_26248_26272 = state_26236__$1;
(statearr_26248_26272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (5))){
var inst_26200 = (state_26236[(7)]);
var inst_26206 = (state_26236[(9)]);
var inst_26202 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26203 = (new cljs.core.PersistentArrayMap(null,2,inst_26202,null));
var inst_26204 = (new cljs.core.PersistentHashSet(null,inst_26203,null));
var inst_26205 = figwheel.client.focus_msgs.call(null,inst_26204,inst_26200);
var inst_26206__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26205);
var inst_26207 = cljs.core.first.call(null,inst_26205);
var inst_26208 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26206__$1,opts);
var state_26236__$1 = (function (){var statearr_26249 = state_26236;
(statearr_26249[(8)] = inst_26207);

(statearr_26249[(9)] = inst_26206__$1);

return statearr_26249;
})();
if(cljs.core.truth_(inst_26208)){
var statearr_26250_26273 = state_26236__$1;
(statearr_26250_26273[(1)] = (8));

} else {
var statearr_26251_26274 = state_26236__$1;
(statearr_26251_26274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (14))){
var inst_26226 = (state_26236[(2)]);
var state_26236__$1 = state_26236;
var statearr_26252_26275 = state_26236__$1;
(statearr_26252_26275[(2)] = inst_26226);

(statearr_26252_26275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (10))){
var inst_26228 = (state_26236[(2)]);
var state_26236__$1 = (function (){var statearr_26253 = state_26236;
(statearr_26253[(10)] = inst_26228);

return statearr_26253;
})();
var statearr_26254_26276 = state_26236__$1;
(statearr_26254_26276[(2)] = null);

(statearr_26254_26276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26237 === (8))){
var inst_26207 = (state_26236[(8)]);
var inst_26210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26211 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26207);
var inst_26212 = cljs.core.async.timeout.call(null,(1000));
var inst_26213 = [inst_26211,inst_26212];
var inst_26214 = (new cljs.core.PersistentVector(null,2,(5),inst_26210,inst_26213,null));
var state_26236__$1 = state_26236;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26236__$1,(11),inst_26214);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15752__auto___26262,ch))
;
return ((function (switch__15696__auto__,c__15752__auto___26262,ch){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_26258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26258[(0)] = state_machine__15697__auto__);

(statearr_26258[(1)] = (1));

return statearr_26258;
});
var state_machine__15697__auto____1 = (function (state_26236){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_26236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e26259){if((e26259 instanceof Object)){
var ex__15700__auto__ = e26259;
var statearr_26260_26277 = state_26236;
(statearr_26260_26277[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26278 = state_26236;
state_26236 = G__26278;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_26236){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_26236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___26262,ch))
})();
var state__15754__auto__ = (function (){var statearr_26261 = f__15753__auto__.call(null);
(statearr_26261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___26262);

return statearr_26261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___26262,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__26279_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26279_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26283 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26283){
return (function() { 
var G__26284__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26285__i = 0, G__26285__a = new Array(arguments.length -  0);
while (G__26285__i < G__26285__a.length) {G__26285__a[G__26285__i] = arguments[G__26285__i + 0]; ++G__26285__i;}
  args = new cljs.core.IndexedSeq(G__26285__a,0);
} 
return G__26284__delegate.call(this,args);};
G__26284.cljs$lang$maxFixedArity = 0;
G__26284.cljs$lang$applyTo = (function (arglist__26286){
var args = cljs.core.seq(arglist__26286);
return G__26284__delegate(args);
});
G__26284.cljs$core$IFn$_invoke$arity$variadic = G__26284__delegate;
return G__26284;
})()
;})(_STAR_print_fn_STAR_26283))
;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26283;
}}catch (e26282){if((e26282 instanceof Error)){
var e = e26282;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e26282;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__26290){
var vec__26291 = p__26290;
var map__26292 = cljs.core.nth.call(null,vec__26291,(0),null);
var map__26292__$1 = ((cljs.core.seq_QMARK_.call(null,map__26292))?cljs.core.apply.call(null,cljs.core.hash_map,map__26292):map__26292);
var msg = map__26292__$1;
var msg_name = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26291,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26291,map__26292,map__26292__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26291,map__26292,map__26292__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__26296){
var vec__26297 = p__26296;
var map__26298 = cljs.core.nth.call(null,vec__26297,(0),null);
var map__26298__$1 = ((cljs.core.seq_QMARK_.call(null,map__26298))?cljs.core.apply.call(null,cljs.core.hash_map,map__26298):map__26298);
var msg = map__26298__$1;
var msg_name = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26297,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__26299){
var map__26307 = p__26299;
var map__26307__$1 = ((cljs.core.seq_QMARK_.call(null,map__26307))?cljs.core.apply.call(null,cljs.core.hash_map,map__26307):map__26307);
var on_compile_fail = cljs.core.get.call(null,map__26307__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__26307__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__26307,map__26307__$1,on_compile_fail,on_compile_warning){
return (function (p__26308){
var vec__26309 = p__26308;
var map__26310 = cljs.core.nth.call(null,vec__26309,(0),null);
var map__26310__$1 = ((cljs.core.seq_QMARK_.call(null,map__26310))?cljs.core.apply.call(null,cljs.core.hash_map,map__26310):map__26310);
var msg = map__26310__$1;
var msg_name = cljs.core.get.call(null,map__26310__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26309,(1));
var pred__26311 = cljs.core._EQ_;
var expr__26312 = msg_name;
if(cljs.core.truth_(pred__26311.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26312))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26311.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26312))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26307,map__26307__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__,msg_hist,msg_names,msg){
return (function (state_26489){
var state_val_26490 = (state_26489[(1)]);
if((state_val_26490 === (7))){
var inst_26438 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26489__$1 = state_26489;
if(inst_26438){
var statearr_26491_26528 = state_26489__$1;
(statearr_26491_26528[(1)] = (11));

} else {
var statearr_26492_26529 = state_26489__$1;
(statearr_26492_26529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (20))){
var inst_26479 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26493_26530 = state_26489__$1;
(statearr_26493_26530[(2)] = inst_26479);

(statearr_26493_26530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (27))){
var inst_26470 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(30),inst_26470);
} else {
if((state_val_26490 === (1))){
var inst_26421 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26489__$1 = state_26489;
if(cljs.core.truth_(inst_26421)){
var statearr_26494_26531 = state_26489__$1;
(statearr_26494_26531[(1)] = (2));

} else {
var statearr_26495_26532 = state_26489__$1;
(statearr_26495_26532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (24))){
var inst_26468 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26489__$1 = state_26489;
if(inst_26468){
var statearr_26496_26533 = state_26489__$1;
(statearr_26496_26533[(1)] = (27));

} else {
var statearr_26497_26534 = state_26489__$1;
(statearr_26497_26534[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (4))){
var inst_26487 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26489__$1,inst_26487);
} else {
if((state_val_26490 === (15))){
var inst_26448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26449 = figwheel.client.heads_up.append_message.call(null,inst_26448);
var state_26489__$1 = state_26489;
var statearr_26498_26535 = state_26489__$1;
(statearr_26498_26535[(2)] = inst_26449);

(statearr_26498_26535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (21))){
var inst_26455 = (state_26489[(2)]);
var inst_26456 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26457 = figwheel.client.heads_up.display_warning.call(null,inst_26456);
var state_26489__$1 = (function (){var statearr_26499 = state_26489;
(statearr_26499[(7)] = inst_26455);

return statearr_26499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(22),inst_26457);
} else {
if((state_val_26490 === (13))){
var inst_26483 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26500_26536 = state_26489__$1;
(statearr_26500_26536[(2)] = inst_26483);

(statearr_26500_26536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (22))){
var inst_26459 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26501_26537 = state_26489__$1;
(statearr_26501_26537[(2)] = inst_26459);

(statearr_26501_26537[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (29))){
var inst_26475 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26502_26538 = state_26489__$1;
(statearr_26502_26538[(2)] = inst_26475);

(statearr_26502_26538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (6))){
var inst_26429 = figwheel.client.heads_up.clear.call(null);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(9),inst_26429);
} else {
if((state_val_26490 === (28))){
var state_26489__$1 = state_26489;
var statearr_26503_26539 = state_26489__$1;
(statearr_26503_26539[(2)] = null);

(statearr_26503_26539[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (25))){
var inst_26477 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26504_26540 = state_26489__$1;
(statearr_26504_26540[(2)] = inst_26477);

(statearr_26504_26540[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (17))){
var inst_26481 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26505_26541 = state_26489__$1;
(statearr_26505_26541[(2)] = inst_26481);

(statearr_26505_26541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (3))){
var inst_26427 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26489__$1 = state_26489;
if(inst_26427){
var statearr_26506_26542 = state_26489__$1;
(statearr_26506_26542[(1)] = (6));

} else {
var statearr_26507_26543 = state_26489__$1;
(statearr_26507_26543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (12))){
var inst_26446 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26489__$1 = state_26489;
if(inst_26446){
var statearr_26508_26544 = state_26489__$1;
(statearr_26508_26544[(1)] = (15));

} else {
var statearr_26509_26545 = state_26489__$1;
(statearr_26509_26545[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (2))){
var inst_26423 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(5),inst_26423);
} else {
if((state_val_26490 === (23))){
var inst_26463 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26464 = figwheel.client.heads_up.display_warning.call(null,inst_26463);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(26),inst_26464);
} else {
if((state_val_26490 === (19))){
var inst_26461 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26489__$1 = state_26489;
if(inst_26461){
var statearr_26510_26546 = state_26489__$1;
(statearr_26510_26546[(1)] = (23));

} else {
var statearr_26511_26547 = state_26489__$1;
(statearr_26511_26547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (11))){
var inst_26440 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26441 = figwheel.client.format_messages.call(null,inst_26440);
var inst_26442 = figwheel.client.heads_up.display_error.call(null,inst_26441);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(14),inst_26442);
} else {
if((state_val_26490 === (9))){
var inst_26431 = (state_26489[(2)]);
var inst_26432 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26433 = figwheel.client.format_messages.call(null,inst_26432);
var inst_26434 = figwheel.client.heads_up.display_error.call(null,inst_26433);
var state_26489__$1 = (function (){var statearr_26512 = state_26489;
(statearr_26512[(8)] = inst_26431);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(10),inst_26434);
} else {
if((state_val_26490 === (5))){
var inst_26425 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26513_26548 = state_26489__$1;
(statearr_26513_26548[(2)] = inst_26425);

(statearr_26513_26548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (14))){
var inst_26444 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26514_26549 = state_26489__$1;
(statearr_26514_26549[(2)] = inst_26444);

(statearr_26514_26549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (26))){
var inst_26466 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26515_26550 = state_26489__$1;
(statearr_26515_26550[(2)] = inst_26466);

(statearr_26515_26550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (16))){
var inst_26451 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26489__$1 = state_26489;
if(inst_26451){
var statearr_26516_26551 = state_26489__$1;
(statearr_26516_26551[(1)] = (18));

} else {
var statearr_26517_26552 = state_26489__$1;
(statearr_26517_26552[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (30))){
var inst_26472 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26518_26553 = state_26489__$1;
(statearr_26518_26553[(2)] = inst_26472);

(statearr_26518_26553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (10))){
var inst_26436 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26519_26554 = state_26489__$1;
(statearr_26519_26554[(2)] = inst_26436);

(statearr_26519_26554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (18))){
var inst_26453 = figwheel.client.heads_up.clear.call(null);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(21),inst_26453);
} else {
if((state_val_26490 === (8))){
var inst_26485 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26520_26555 = state_26489__$1;
(statearr_26520_26555[(2)] = inst_26485);

(statearr_26520_26555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15752__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15696__auto__,c__15752__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_26524 = [null,null,null,null,null,null,null,null,null];
(statearr_26524[(0)] = state_machine__15697__auto__);

(statearr_26524[(1)] = (1));

return statearr_26524;
});
var state_machine__15697__auto____1 = (function (state_26489){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_26489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e26525){if((e26525 instanceof Object)){
var ex__15700__auto__ = e26525;
var statearr_26526_26556 = state_26489;
(statearr_26526_26556[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26557 = state_26489;
state_26489 = G__26557;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_26489){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_26489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__,msg_hist,msg_names,msg))
})();
var state__15754__auto__ = (function (){var statearr_26527 = f__15753__auto__.call(null);
(statearr_26527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_26527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__,msg_hist,msg_names,msg))
);

return c__15752__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15752__auto___26620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___26620,ch){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___26620,ch){
return (function (state_26603){
var state_val_26604 = (state_26603[(1)]);
if((state_val_26604 === (8))){
var inst_26595 = (state_26603[(2)]);
var state_26603__$1 = (function (){var statearr_26605 = state_26603;
(statearr_26605[(7)] = inst_26595);

return statearr_26605;
})();
var statearr_26606_26621 = state_26603__$1;
(statearr_26606_26621[(2)] = null);

(statearr_26606_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (7))){
var inst_26599 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26607_26622 = state_26603__$1;
(statearr_26607_26622[(2)] = inst_26599);

(statearr_26607_26622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (6))){
var state_26603__$1 = state_26603;
var statearr_26608_26623 = state_26603__$1;
(statearr_26608_26623[(2)] = null);

(statearr_26608_26623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (5))){
var inst_26591 = (state_26603[(8)]);
var inst_26593 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26591);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26603__$1,(8),inst_26593);
} else {
if((state_val_26604 === (4))){
var inst_26591 = (state_26603[(8)]);
var inst_26591__$1 = (state_26603[(2)]);
var state_26603__$1 = (function (){var statearr_26609 = state_26603;
(statearr_26609[(8)] = inst_26591__$1);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26591__$1)){
var statearr_26610_26624 = state_26603__$1;
(statearr_26610_26624[(1)] = (5));

} else {
var statearr_26611_26625 = state_26603__$1;
(statearr_26611_26625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (3))){
var inst_26601 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26603__$1,inst_26601);
} else {
if((state_val_26604 === (2))){
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26603__$1,(4),ch);
} else {
if((state_val_26604 === (1))){
var state_26603__$1 = state_26603;
var statearr_26612_26626 = state_26603__$1;
(statearr_26612_26626[(2)] = null);

(statearr_26612_26626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15752__auto___26620,ch))
;
return ((function (switch__15696__auto__,c__15752__auto___26620,ch){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_26616 = [null,null,null,null,null,null,null,null,null];
(statearr_26616[(0)] = state_machine__15697__auto__);

(statearr_26616[(1)] = (1));

return statearr_26616;
});
var state_machine__15697__auto____1 = (function (state_26603){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_26603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e26617){if((e26617 instanceof Object)){
var ex__15700__auto__ = e26617;
var statearr_26618_26627 = state_26603;
(statearr_26618_26627[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26628 = state_26603;
state_26603 = G__26628;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___26620,ch))
})();
var state__15754__auto__ = (function (){var statearr_26619 = f__15753__auto__.call(null);
(statearr_26619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___26620);

return statearr_26619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___26620,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__){
return (function (state_26649){
var state_val_26650 = (state_26649[(1)]);
if((state_val_26650 === (2))){
var inst_26646 = (state_26649[(2)]);
var inst_26647 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26649__$1 = (function (){var statearr_26651 = state_26649;
(statearr_26651[(7)] = inst_26646);

return statearr_26651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26649__$1,inst_26647);
} else {
if((state_val_26650 === (1))){
var inst_26644 = cljs.core.async.timeout.call(null,(3000));
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26649__$1,(2),inst_26644);
} else {
return null;
}
}
});})(c__15752__auto__))
;
return ((function (switch__15696__auto__,c__15752__auto__){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_26655 = [null,null,null,null,null,null,null,null];
(statearr_26655[(0)] = state_machine__15697__auto__);

(statearr_26655[(1)] = (1));

return statearr_26655;
});
var state_machine__15697__auto____1 = (function (state_26649){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_26649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e26656){if((e26656 instanceof Object)){
var ex__15700__auto__ = e26656;
var statearr_26657_26659 = state_26649;
(statearr_26657_26659[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26660 = state_26649;
state_26649 = G__26660;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_26649){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_26649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__))
})();
var state__15754__auto__ = (function (){var statearr_26658 = f__15753__auto__.call(null);
(statearr_26658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_26658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__))
);

return c__15752__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj26664 = {"detail":url};
return obj26664;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__26665){
var map__26671 = p__26665;
var map__26671__$1 = ((cljs.core.seq_QMARK_.call(null,map__26671))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);
var ed = map__26671__$1;
var exception_data = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__26672_26676 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26673_26677 = null;
var count__26674_26678 = (0);
var i__26675_26679 = (0);
while(true){
if((i__26675_26679 < count__26674_26678)){
var msg_26680 = cljs.core._nth.call(null,chunk__26673_26677,i__26675_26679);
console.log(msg_26680);

var G__26681 = seq__26672_26676;
var G__26682 = chunk__26673_26677;
var G__26683 = count__26674_26678;
var G__26684 = (i__26675_26679 + (1));
seq__26672_26676 = G__26681;
chunk__26673_26677 = G__26682;
count__26674_26678 = G__26683;
i__26675_26679 = G__26684;
continue;
} else {
var temp__4126__auto___26685 = cljs.core.seq.call(null,seq__26672_26676);
if(temp__4126__auto___26685){
var seq__26672_26686__$1 = temp__4126__auto___26685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26672_26686__$1)){
var c__13430__auto___26687 = cljs.core.chunk_first.call(null,seq__26672_26686__$1);
var G__26688 = cljs.core.chunk_rest.call(null,seq__26672_26686__$1);
var G__26689 = c__13430__auto___26687;
var G__26690 = cljs.core.count.call(null,c__13430__auto___26687);
var G__26691 = (0);
seq__26672_26676 = G__26688;
chunk__26673_26677 = G__26689;
count__26674_26678 = G__26690;
i__26675_26679 = G__26691;
continue;
} else {
var msg_26692 = cljs.core.first.call(null,seq__26672_26686__$1);
console.log(msg_26692);

var G__26693 = cljs.core.next.call(null,seq__26672_26686__$1);
var G__26694 = null;
var G__26695 = (0);
var G__26696 = (0);
seq__26672_26676 = G__26693;
chunk__26673_26677 = G__26694;
count__26674_26678 = G__26695;
i__26675_26679 = G__26696;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__26697){
var map__26699 = p__26697;
var map__26699__$1 = ((cljs.core.seq_QMARK_.call(null,map__26699))?cljs.core.apply.call(null,cljs.core.hash_map,map__26699):map__26699);
var w = map__26699__$1;
var message = cljs.core.get.call(null,map__26699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__26706 = cljs.core.seq.call(null,plugins);
var chunk__26707 = null;
var count__26708 = (0);
var i__26709 = (0);
while(true){
if((i__26709 < count__26708)){
var vec__26710 = cljs.core._nth.call(null,chunk__26707,i__26709);
var k = cljs.core.nth.call(null,vec__26710,(0),null);
var plugin = cljs.core.nth.call(null,vec__26710,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26712 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26706,chunk__26707,count__26708,i__26709,pl_26712,vec__26710,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26712.call(null,msg_hist);
});})(seq__26706,chunk__26707,count__26708,i__26709,pl_26712,vec__26710,k,plugin))
);
} else {
}

var G__26713 = seq__26706;
var G__26714 = chunk__26707;
var G__26715 = count__26708;
var G__26716 = (i__26709 + (1));
seq__26706 = G__26713;
chunk__26707 = G__26714;
count__26708 = G__26715;
i__26709 = G__26716;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26706);
if(temp__4126__auto__){
var seq__26706__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26706__$1)){
var c__13430__auto__ = cljs.core.chunk_first.call(null,seq__26706__$1);
var G__26717 = cljs.core.chunk_rest.call(null,seq__26706__$1);
var G__26718 = c__13430__auto__;
var G__26719 = cljs.core.count.call(null,c__13430__auto__);
var G__26720 = (0);
seq__26706 = G__26717;
chunk__26707 = G__26718;
count__26708 = G__26719;
i__26709 = G__26720;
continue;
} else {
var vec__26711 = cljs.core.first.call(null,seq__26706__$1);
var k = cljs.core.nth.call(null,vec__26711,(0),null);
var plugin = cljs.core.nth.call(null,vec__26711,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26706,chunk__26707,count__26708,i__26709,pl_26721,vec__26711,k,plugin,seq__26706__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26721.call(null,msg_hist);
});})(seq__26706,chunk__26707,count__26708,i__26709,pl_26721,vec__26711,k,plugin,seq__26706__$1,temp__4126__auto__))
);
} else {
}

var G__26722 = cljs.core.next.call(null,seq__26706__$1);
var G__26723 = null;
var G__26724 = (0);
var G__26725 = (0);
seq__26706 = G__26722;
chunk__26707 = G__26723;
count__26708 = G__26724;
i__26709 = G__26725;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__26726){
var map__26728 = p__26726;
var map__26728__$1 = ((cljs.core.seq_QMARK_.call(null,map__26728))?cljs.core.apply.call(null,cljs.core.hash_map,map__26728):map__26728);
var opts = map__26728__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__26726 = null;
if (arguments.length > 0) {
var G__26729__i = 0, G__26729__a = new Array(arguments.length -  0);
while (G__26729__i < G__26729__a.length) {G__26729__a[G__26729__i] = arguments[G__26729__i + 0]; ++G__26729__i;}
  p__26726 = new cljs.core.IndexedSeq(G__26729__a,0);
} 
return watch_and_reload__delegate.call(this,p__26726);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__26730){
var p__26726 = cljs.core.seq(arglist__26730);
return watch_and_reload__delegate(p__26726);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1422998149618