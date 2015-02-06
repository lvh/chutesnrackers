// Compiled by ClojureScript 0.0-2755 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__27117){
var map__27119 = p__27117;
var map__27119__$1 = ((cljs.core.seq_QMARK_.call(null,map__27119))?cljs.core.apply.call(null,cljs.core.hash_map,map__27119):map__27119);
var websocket_url = cljs.core.get.call(null,map__27119__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__27120,callback){
var map__27122 = p__27120;
var map__27122__$1 = ((cljs.core.seq_QMARK_.call(null,map__27122))?cljs.core.apply.call(null,cljs.core.hash_map,map__27122):map__27122);
var msg = map__27122__$1;
var meta_data = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12631__auto__ = (function (){var or__12643__auto__ = dependency_file;
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (function (){var and__12631__auto__ = meta_data;
if(cljs.core.truth_(and__12631__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12631__auto__;
}
})();
if(cljs.core.truth_(or__12643__auto____$1)){
return or__12643__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12631__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12643__auto__ = meta_data;
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12631__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__27122,map__27122__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__27122,map__27122__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__27123,p__27124){
var map__27127 = p__27123;
var map__27127__$1 = ((cljs.core.seq_QMARK_.call(null,map__27127))?cljs.core.apply.call(null,cljs.core.hash_map,map__27127):map__27127);
var opts = map__27127__$1;
var url_rewriter = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27128 = p__27124;
var map__27128__$1 = ((cljs.core.seq_QMARK_.call(null,map__27128))?cljs.core.apply.call(null,cljs.core.hash_map,map__27128):map__27128);
var d = map__27128__$1;
var file = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__27130,p__27131){
var map__27185 = p__27130;
var map__27185__$1 = ((cljs.core.seq_QMARK_.call(null,map__27185))?cljs.core.apply.call(null,cljs.core.hash_map,map__27185):map__27185);
var opts = map__27185__$1;
var on_jsload = cljs.core.get.call(null,map__27185__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__27185__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__27186 = p__27131;
var map__27186__$1 = ((cljs.core.seq_QMARK_.call(null,map__27186))?cljs.core.apply.call(null,cljs.core.hash_map,map__27186):map__27186);
var msg = map__27186__$1;
var files = cljs.core.get.call(null,map__27186__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files){
return (function (state_27216){
var state_val_27217 = (state_27216[(1)]);
if((state_val_27217 === (8))){
var inst_27214 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27216__$1,inst_27214);
} else {
if((state_val_27217 === (7))){
var state_27216__$1 = state_27216;
var statearr_27218_27238 = state_27216__$1;
(statearr_27218_27238[(2)] = null);

(statearr_27218_27238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (6))){
var inst_27194 = (state_27216[(7)]);
var inst_27208 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_27209 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27194);
var inst_27210 = cljs.core.pr_str.call(null,inst_27209);
var inst_27211 = console.log("not required:",inst_27210);
var state_27216__$1 = (function (){var statearr_27219 = state_27216;
(statearr_27219[(8)] = inst_27208);

return statearr_27219;
})();
var statearr_27220_27239 = state_27216__$1;
(statearr_27220_27239[(2)] = inst_27211);

(statearr_27220_27239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (5))){
var inst_27194 = (state_27216[(7)]);
var inst_27205 = (state_27216[(2)]);
var inst_27206 = cljs.core.not_empty.call(null,inst_27194);
var state_27216__$1 = (function (){var statearr_27221 = state_27216;
(statearr_27221[(9)] = inst_27205);

return statearr_27221;
})();
if(cljs.core.truth_(inst_27206)){
var statearr_27222_27240 = state_27216__$1;
(statearr_27222_27240[(1)] = (6));

} else {
var statearr_27223_27241 = state_27216__$1;
(statearr_27223_27241[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (4))){
var state_27216__$1 = state_27216;
var statearr_27224_27242 = state_27216__$1;
(statearr_27224_27242[(2)] = null);

(statearr_27224_27242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (3))){
var inst_27192 = (state_27216[(10)]);
var inst_27191 = (state_27216[(11)]);
var inst_27188 = (state_27216[(12)]);
var inst_27194 = (state_27216[(7)]);
var inst_27197 = console.debug("Figwheel: loaded these files");
var inst_27198 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27192);
var inst_27199 = cljs.core.pr_str.call(null,inst_27198);
var inst_27200 = console.log(inst_27199);
var inst_27201 = (function (){var files_not_loaded = inst_27194;
var res = inst_27192;
var res_SINGLEQUOTE_ = inst_27191;
var files_SINGLEQUOTE_ = inst_27188;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_27192,inst_27191,inst_27188,inst_27194,inst_27197,inst_27198,inst_27199,inst_27200,state_val_27217,c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_27192,inst_27191,inst_27188,inst_27194,inst_27197,inst_27198,inst_27199,inst_27200,state_val_27217,c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files))
})();
var inst_27202 = setTimeout(inst_27201,(10));
var state_27216__$1 = (function (){var statearr_27225 = state_27216;
(statearr_27225[(13)] = inst_27197);

(statearr_27225[(14)] = inst_27200);

return statearr_27225;
})();
var statearr_27226_27243 = state_27216__$1;
(statearr_27226_27243[(2)] = inst_27202);

(statearr_27226_27243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (2))){
var inst_27192 = (state_27216[(10)]);
var inst_27191 = (state_27216[(11)]);
var inst_27188 = (state_27216[(12)]);
var inst_27191__$1 = (state_27216[(2)]);
var inst_27192__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27191__$1);
var inst_27193 = (function (){var res = inst_27192__$1;
var res_SINGLEQUOTE_ = inst_27191__$1;
var files_SINGLEQUOTE_ = inst_27188;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_27192,inst_27191,inst_27188,inst_27191__$1,inst_27192__$1,state_val_27217,c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files){
return (function (p1__27129_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27129_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_27192,inst_27191,inst_27188,inst_27191__$1,inst_27192__$1,state_val_27217,c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files))
})();
var inst_27194 = cljs.core.filter.call(null,inst_27193,inst_27191__$1);
var inst_27195 = cljs.core.not_empty.call(null,inst_27192__$1);
var state_27216__$1 = (function (){var statearr_27227 = state_27216;
(statearr_27227[(10)] = inst_27192__$1);

(statearr_27227[(11)] = inst_27191__$1);

(statearr_27227[(7)] = inst_27194);

return statearr_27227;
})();
if(cljs.core.truth_(inst_27195)){
var statearr_27228_27244 = state_27216__$1;
(statearr_27228_27244[(1)] = (3));

} else {
var statearr_27229_27245 = state_27216__$1;
(statearr_27229_27245[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (1))){
var inst_27188 = (state_27216[(12)]);
var inst_27187 = before_jsload.call(null,files);
var inst_27188__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_27189 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27188__$1);
var state_27216__$1 = (function (){var statearr_27230 = state_27216;
(statearr_27230[(12)] = inst_27188__$1);

(statearr_27230[(15)] = inst_27187);

return statearr_27230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27216__$1,(2),inst_27189);
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
});})(c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files))
;
return ((function (switch__15696__auto__,c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27234[(0)] = state_machine__15697__auto__);

(statearr_27234[(1)] = (1));

return statearr_27234;
});
var state_machine__15697__auto____1 = (function (state_27216){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27235){if((e27235 instanceof Object)){
var ex__15700__auto__ = e27235;
var statearr_27236_27246 = state_27216;
(statearr_27236_27246[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27247 = state_27216;
state_27216 = G__27247;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27216){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files))
})();
var state__15754__auto__ = (function (){var statearr_27237 = f__15753__auto__.call(null);
(statearr_27237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__,map__27185,map__27185__$1,opts,on_jsload,before_jsload,map__27186,map__27186__$1,msg,files))
);

return c__15752__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__27248,link_href){
var map__27250 = p__27248;
var map__27250__$1 = ((cljs.core.seq_QMARK_.call(null,map__27250))?cljs.core.apply.call(null,cljs.core.hash_map,map__27250):map__27250);
var request_url = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__,parent){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__,parent){
return (function (state_27271){
var state_val_27272 = (state_27271[(1)]);
if((state_val_27272 === (2))){
var inst_27268 = (state_27271[(2)]);
var inst_27269 = parent.removeChild(orig_link);
var state_27271__$1 = (function (){var statearr_27273 = state_27271;
(statearr_27273[(7)] = inst_27268);

return statearr_27273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27271__$1,inst_27269);
} else {
if((state_val_27272 === (1))){
var inst_27266 = cljs.core.async.timeout.call(null,(200));
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27271__$1,(2),inst_27266);
} else {
return null;
}
}
});})(c__15752__auto__,parent))
;
return ((function (switch__15696__auto__,c__15752__auto__,parent){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27277 = [null,null,null,null,null,null,null,null];
(statearr_27277[(0)] = state_machine__15697__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var state_machine__15697__auto____1 = (function (state_27271){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27278){if((e27278 instanceof Object)){
var ex__15700__auto__ = e27278;
var statearr_27279_27281 = state_27271;
(statearr_27279_27281[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27282 = state_27271;
state_27271 = G__27282;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27271){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__,parent))
})();
var state__15754__auto__ = (function (){var statearr_27280 = f__15753__auto__.call(null);
(statearr_27280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_27280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__,parent))
);

return c__15752__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__27283){
var map__27285 = p__27283;
var map__27285__$1 = ((cljs.core.seq_QMARK_.call(null,map__27285))?cljs.core.apply.call(null,cljs.core.hash_map,map__27285):map__27285);
var f_data = map__27285__$1;
var request_url = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__27286,files_msg){
var map__27308 = p__27286;
var map__27308__$1 = ((cljs.core.seq_QMARK_.call(null,map__27308))?cljs.core.apply.call(null,cljs.core.hash_map,map__27308):map__27308);
var opts = map__27308__$1;
var on_cssload = cljs.core.get.call(null,map__27308__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__27309_27329 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27310_27330 = null;
var count__27311_27331 = (0);
var i__27312_27332 = (0);
while(true){
if((i__27312_27332 < count__27311_27331)){
var f_27333 = cljs.core._nth.call(null,chunk__27310_27330,i__27312_27332);
figwheel.client.file_reloading.reload_css_file.call(null,f_27333);

var G__27334 = seq__27309_27329;
var G__27335 = chunk__27310_27330;
var G__27336 = count__27311_27331;
var G__27337 = (i__27312_27332 + (1));
seq__27309_27329 = G__27334;
chunk__27310_27330 = G__27335;
count__27311_27331 = G__27336;
i__27312_27332 = G__27337;
continue;
} else {
var temp__4126__auto___27338 = cljs.core.seq.call(null,seq__27309_27329);
if(temp__4126__auto___27338){
var seq__27309_27339__$1 = temp__4126__auto___27338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27309_27339__$1)){
var c__13430__auto___27340 = cljs.core.chunk_first.call(null,seq__27309_27339__$1);
var G__27341 = cljs.core.chunk_rest.call(null,seq__27309_27339__$1);
var G__27342 = c__13430__auto___27340;
var G__27343 = cljs.core.count.call(null,c__13430__auto___27340);
var G__27344 = (0);
seq__27309_27329 = G__27341;
chunk__27310_27330 = G__27342;
count__27311_27331 = G__27343;
i__27312_27332 = G__27344;
continue;
} else {
var f_27345 = cljs.core.first.call(null,seq__27309_27339__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27345);

var G__27346 = cljs.core.next.call(null,seq__27309_27339__$1);
var G__27347 = null;
var G__27348 = (0);
var G__27349 = (0);
seq__27309_27329 = G__27346;
chunk__27310_27330 = G__27347;
count__27311_27331 = G__27348;
i__27312_27332 = G__27349;
continue;
}
} else {
}
}
break;
}

var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__,map__27308,map__27308__$1,opts,on_cssload){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__,map__27308,map__27308__$1,opts,on_cssload){
return (function (state_27319){
var state_val_27320 = (state_27319[(1)]);
if((state_val_27320 === (2))){
var inst_27315 = (state_27319[(2)]);
var inst_27316 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27317 = on_cssload.call(null,inst_27316);
var state_27319__$1 = (function (){var statearr_27321 = state_27319;
(statearr_27321[(7)] = inst_27315);

return statearr_27321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27319__$1,inst_27317);
} else {
if((state_val_27320 === (1))){
var inst_27313 = cljs.core.async.timeout.call(null,(100));
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27319__$1,(2),inst_27313);
} else {
return null;
}
}
});})(c__15752__auto__,map__27308,map__27308__$1,opts,on_cssload))
;
return ((function (switch__15696__auto__,c__15752__auto__,map__27308,map__27308__$1,opts,on_cssload){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27325 = [null,null,null,null,null,null,null,null];
(statearr_27325[(0)] = state_machine__15697__auto__);

(statearr_27325[(1)] = (1));

return statearr_27325;
});
var state_machine__15697__auto____1 = (function (state_27319){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27326){if((e27326 instanceof Object)){
var ex__15700__auto__ = e27326;
var statearr_27327_27350 = state_27319;
(statearr_27327_27350[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27351 = state_27319;
state_27319 = G__27351;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27319){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__,map__27308,map__27308__$1,opts,on_cssload))
})();
var state__15754__auto__ = (function (){var statearr_27328 = f__15753__auto__.call(null);
(statearr_27328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__,map__27308,map__27308__$1,opts,on_cssload))
);

return c__15752__auto__;
});

//# sourceMappingURL=file_reloading.js.map?rel=1422998149989