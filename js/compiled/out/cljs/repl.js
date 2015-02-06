// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31085_31089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31086_31090 = null;
var count__31087_31091 = (0);
var i__31088_31092 = (0);
while(true){
if((i__31088_31092 < count__31087_31091)){
var f_31093 = cljs.core._nth.call(null,chunk__31086_31090,i__31088_31092);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31093);

var G__31094 = seq__31085_31089;
var G__31095 = chunk__31086_31090;
var G__31096 = count__31087_31091;
var G__31097 = (i__31088_31092 + (1));
seq__31085_31089 = G__31094;
chunk__31086_31090 = G__31095;
count__31087_31091 = G__31096;
i__31088_31092 = G__31097;
continue;
} else {
var temp__4126__auto___31098 = cljs.core.seq.call(null,seq__31085_31089);
if(temp__4126__auto___31098){
var seq__31085_31099__$1 = temp__4126__auto___31098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31085_31099__$1)){
var c__13430__auto___31100 = cljs.core.chunk_first.call(null,seq__31085_31099__$1);
var G__31101 = cljs.core.chunk_rest.call(null,seq__31085_31099__$1);
var G__31102 = c__13430__auto___31100;
var G__31103 = cljs.core.count.call(null,c__13430__auto___31100);
var G__31104 = (0);
seq__31085_31089 = G__31101;
chunk__31086_31090 = G__31102;
count__31087_31091 = G__31103;
i__31088_31092 = G__31104;
continue;
} else {
var f_31105 = cljs.core.first.call(null,seq__31085_31099__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31105);

var G__31106 = cljs.core.next.call(null,seq__31085_31099__$1);
var G__31107 = null;
var G__31108 = (0);
var G__31109 = (0);
seq__31085_31089 = G__31106;
chunk__31086_31090 = G__31107;
count__31087_31091 = G__31108;
i__31088_31092 = G__31109;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1422998176201