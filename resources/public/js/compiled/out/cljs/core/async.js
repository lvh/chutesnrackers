// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t27357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27357 = (function (f,fn_handler,meta27358){
this.f = f;
this.fn_handler = fn_handler;
this.meta27358 = meta27358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27357.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27359){
var self__ = this;
var _27359__$1 = this;
return self__.meta27358;
});

cljs.core.async.t27357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27359,meta27358__$1){
var self__ = this;
var _27359__$1 = this;
return (new cljs.core.async.t27357(self__.f,self__.fn_handler,meta27358__$1));
});

cljs.core.async.t27357.cljs$lang$type = true;

cljs.core.async.t27357.cljs$lang$ctorStr = "cljs.core.async/t27357";

cljs.core.async.t27357.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t27357");
});

cljs.core.async.__GT_t27357 = (function __GT_t27357(f__$1,fn_handler__$1,meta27358){
return (new cljs.core.async.t27357(f__$1,fn_handler__$1,meta27358));
});

}

return (new cljs.core.async.t27357(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__27361 = buff;
if(G__27361){
var bit__13324__auto__ = null;
if(cljs.core.truth_((function (){var or__12643__auto__ = bit__13324__auto__;
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return G__27361.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27361.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27361);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27361);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27362 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27362);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27362,ret){
return (function (){
return fn1.call(null,val_27362);
});})(val_27362,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13530__auto___27363 = n;
var x_27364 = (0);
while(true){
if((x_27364 < n__13530__auto___27363)){
(a[x_27364] = (0));

var G__27365 = (x_27364 + (1));
x_27364 = G__27365;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27366 = (i + (1));
i = G__27366;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27370 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27370 = (function (flag,alt_flag,meta27371){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27371 = meta27371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27370.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27372){
var self__ = this;
var _27372__$1 = this;
return self__.meta27371;
});})(flag))
;

cljs.core.async.t27370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27372,meta27371__$1){
var self__ = this;
var _27372__$1 = this;
return (new cljs.core.async.t27370(self__.flag,self__.alt_flag,meta27371__$1));
});})(flag))
;

cljs.core.async.t27370.cljs$lang$type = true;

cljs.core.async.t27370.cljs$lang$ctorStr = "cljs.core.async/t27370";

cljs.core.async.t27370.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t27370");
});})(flag))
;

cljs.core.async.__GT_t27370 = ((function (flag){
return (function __GT_t27370(flag__$1,alt_flag__$1,meta27371){
return (new cljs.core.async.t27370(flag__$1,alt_flag__$1,meta27371));
});})(flag))
;

}

return (new cljs.core.async.t27370(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27376 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27376 = (function (cb,flag,alt_handler,meta27377){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27377 = meta27377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27378){
var self__ = this;
var _27378__$1 = this;
return self__.meta27377;
});

cljs.core.async.t27376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27378,meta27377__$1){
var self__ = this;
var _27378__$1 = this;
return (new cljs.core.async.t27376(self__.cb,self__.flag,self__.alt_handler,meta27377__$1));
});

cljs.core.async.t27376.cljs$lang$type = true;

cljs.core.async.t27376.cljs$lang$ctorStr = "cljs.core.async/t27376";

cljs.core.async.t27376.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t27376");
});

cljs.core.async.__GT_t27376 = (function __GT_t27376(cb__$1,flag__$1,alt_handler__$1,meta27377){
return (new cljs.core.async.t27376(cb__$1,flag__$1,alt_handler__$1,meta27377));
});

}

return (new cljs.core.async.t27376(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27379_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27379_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27380_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27380_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12643__auto__ = wport;
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27381 = (i + (1));
i = G__27381;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12643__auto__ = ret;
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12631__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12631__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12631__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__27382){
var map__27384 = p__27382;
var map__27384__$1 = ((cljs.core.seq_QMARK_.call(null,map__27384))?cljs.core.apply.call(null,cljs.core.hash_map,map__27384):map__27384);
var opts = map__27384__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27382 = null;
if (arguments.length > 1) {
var G__27385__i = 0, G__27385__a = new Array(arguments.length -  1);
while (G__27385__i < G__27385__a.length) {G__27385__a[G__27385__i] = arguments[G__27385__i + 1]; ++G__27385__i;}
  p__27382 = new cljs.core.IndexedSeq(G__27385__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27382);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27386){
var ports = cljs.core.first(arglist__27386);
var p__27382 = cljs.core.rest(arglist__27386);
return alts_BANG___delegate(ports,p__27382);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__15752__auto___27481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___27481){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___27481){
return (function (state_27457){
var state_val_27458 = (state_27457[(1)]);
if((state_val_27458 === (7))){
var inst_27453 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27459_27482 = state_27457__$1;
(statearr_27459_27482[(2)] = inst_27453);

(statearr_27459_27482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (1))){
var state_27457__$1 = state_27457;
var statearr_27460_27483 = state_27457__$1;
(statearr_27460_27483[(2)] = null);

(statearr_27460_27483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (4))){
var inst_27436 = (state_27457[(7)]);
var inst_27436__$1 = (state_27457[(2)]);
var inst_27437 = (inst_27436__$1 == null);
var state_27457__$1 = (function (){var statearr_27461 = state_27457;
(statearr_27461[(7)] = inst_27436__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27437)){
var statearr_27462_27484 = state_27457__$1;
(statearr_27462_27484[(1)] = (5));

} else {
var statearr_27463_27485 = state_27457__$1;
(statearr_27463_27485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (13))){
var state_27457__$1 = state_27457;
var statearr_27464_27486 = state_27457__$1;
(statearr_27464_27486[(2)] = null);

(statearr_27464_27486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (6))){
var inst_27436 = (state_27457[(7)]);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27457__$1,(11),to,inst_27436);
} else {
if((state_val_27458 === (3))){
var inst_27455 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27457__$1,inst_27455);
} else {
if((state_val_27458 === (12))){
var state_27457__$1 = state_27457;
var statearr_27465_27487 = state_27457__$1;
(statearr_27465_27487[(2)] = null);

(statearr_27465_27487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (2))){
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27457__$1,(4),from);
} else {
if((state_val_27458 === (11))){
var inst_27446 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
if(cljs.core.truth_(inst_27446)){
var statearr_27466_27488 = state_27457__$1;
(statearr_27466_27488[(1)] = (12));

} else {
var statearr_27467_27489 = state_27457__$1;
(statearr_27467_27489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (9))){
var state_27457__$1 = state_27457;
var statearr_27468_27490 = state_27457__$1;
(statearr_27468_27490[(2)] = null);

(statearr_27468_27490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (5))){
var state_27457__$1 = state_27457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27469_27491 = state_27457__$1;
(statearr_27469_27491[(1)] = (8));

} else {
var statearr_27470_27492 = state_27457__$1;
(statearr_27470_27492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (14))){
var inst_27451 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27471_27493 = state_27457__$1;
(statearr_27471_27493[(2)] = inst_27451);

(statearr_27471_27493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (10))){
var inst_27443 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27472_27494 = state_27457__$1;
(statearr_27472_27494[(2)] = inst_27443);

(statearr_27472_27494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (8))){
var inst_27440 = cljs.core.async.close_BANG_.call(null,to);
var state_27457__$1 = state_27457;
var statearr_27473_27495 = state_27457__$1;
(statearr_27473_27495[(2)] = inst_27440);

(statearr_27473_27495[(1)] = (10));


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
});})(c__15752__auto___27481))
;
return ((function (switch__15696__auto__,c__15752__auto___27481){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27477 = [null,null,null,null,null,null,null,null];
(statearr_27477[(0)] = state_machine__15697__auto__);

(statearr_27477[(1)] = (1));

return statearr_27477;
});
var state_machine__15697__auto____1 = (function (state_27457){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27478){if((e27478 instanceof Object)){
var ex__15700__auto__ = e27478;
var statearr_27479_27496 = state_27457;
(statearr_27479_27496[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27497 = state_27457;
state_27457 = G__27497;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27457){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___27481))
})();
var state__15754__auto__ = (function (){var statearr_27480 = f__15753__auto__.call(null);
(statearr_27480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___27481);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___27481))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27681){
var vec__27682 = p__27681;
var v = cljs.core.nth.call(null,vec__27682,(0),null);
var p = cljs.core.nth.call(null,vec__27682,(1),null);
var job = vec__27682;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15752__auto___27864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___27864,res,vec__27682,v,p,job,jobs,results){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___27864,res,vec__27682,v,p,job,jobs,results){
return (function (state_27687){
var state_val_27688 = (state_27687[(1)]);
if((state_val_27688 === (2))){
var inst_27684 = (state_27687[(2)]);
var inst_27685 = cljs.core.async.close_BANG_.call(null,res);
var state_27687__$1 = (function (){var statearr_27689 = state_27687;
(statearr_27689[(7)] = inst_27684);

return statearr_27689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27687__$1,inst_27685);
} else {
if((state_val_27688 === (1))){
var state_27687__$1 = state_27687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27687__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15752__auto___27864,res,vec__27682,v,p,job,jobs,results))
;
return ((function (switch__15696__auto__,c__15752__auto___27864,res,vec__27682,v,p,job,jobs,results){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27693 = [null,null,null,null,null,null,null,null];
(statearr_27693[(0)] = state_machine__15697__auto__);

(statearr_27693[(1)] = (1));

return statearr_27693;
});
var state_machine__15697__auto____1 = (function (state_27687){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27694){if((e27694 instanceof Object)){
var ex__15700__auto__ = e27694;
var statearr_27695_27865 = state_27687;
(statearr_27695_27865[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27866 = state_27687;
state_27687 = G__27866;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27687){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___27864,res,vec__27682,v,p,job,jobs,results))
})();
var state__15754__auto__ = (function (){var statearr_27696 = f__15753__auto__.call(null);
(statearr_27696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___27864);

return statearr_27696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___27864,res,vec__27682,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27697){
var vec__27698 = p__27697;
var v = cljs.core.nth.call(null,vec__27698,(0),null);
var p = cljs.core.nth.call(null,vec__27698,(1),null);
var job = vec__27698;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13530__auto___27867 = n;
var __27868 = (0);
while(true){
if((__27868 < n__13530__auto___27867)){
var G__27699_27869 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27699_27869) {
case "async":
var c__15752__auto___27871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27868,c__15752__auto___27871,G__27699_27869,n__13530__auto___27867,jobs,results,process,async){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (__27868,c__15752__auto___27871,G__27699_27869,n__13530__auto___27867,jobs,results,process,async){
return (function (state_27712){
var state_val_27713 = (state_27712[(1)]);
if((state_val_27713 === (7))){
var inst_27708 = (state_27712[(2)]);
var state_27712__$1 = state_27712;
var statearr_27714_27872 = state_27712__$1;
(statearr_27714_27872[(2)] = inst_27708);

(statearr_27714_27872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (6))){
var state_27712__$1 = state_27712;
var statearr_27715_27873 = state_27712__$1;
(statearr_27715_27873[(2)] = null);

(statearr_27715_27873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (5))){
var state_27712__$1 = state_27712;
var statearr_27716_27874 = state_27712__$1;
(statearr_27716_27874[(2)] = null);

(statearr_27716_27874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (4))){
var inst_27702 = (state_27712[(2)]);
var inst_27703 = async.call(null,inst_27702);
var state_27712__$1 = state_27712;
if(cljs.core.truth_(inst_27703)){
var statearr_27717_27875 = state_27712__$1;
(statearr_27717_27875[(1)] = (5));

} else {
var statearr_27718_27876 = state_27712__$1;
(statearr_27718_27876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (3))){
var inst_27710 = (state_27712[(2)]);
var state_27712__$1 = state_27712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27712__$1,inst_27710);
} else {
if((state_val_27713 === (2))){
var state_27712__$1 = state_27712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27712__$1,(4),jobs);
} else {
if((state_val_27713 === (1))){
var state_27712__$1 = state_27712;
var statearr_27719_27877 = state_27712__$1;
(statearr_27719_27877[(2)] = null);

(statearr_27719_27877[(1)] = (2));


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
});})(__27868,c__15752__auto___27871,G__27699_27869,n__13530__auto___27867,jobs,results,process,async))
;
return ((function (__27868,switch__15696__auto__,c__15752__auto___27871,G__27699_27869,n__13530__auto___27867,jobs,results,process,async){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null];
(statearr_27723[(0)] = state_machine__15697__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var state_machine__15697__auto____1 = (function (state_27712){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__15700__auto__ = e27724;
var statearr_27725_27878 = state_27712;
(statearr_27725_27878[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27879 = state_27712;
state_27712 = G__27879;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27712){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(__27868,switch__15696__auto__,c__15752__auto___27871,G__27699_27869,n__13530__auto___27867,jobs,results,process,async))
})();
var state__15754__auto__ = (function (){var statearr_27726 = f__15753__auto__.call(null);
(statearr_27726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___27871);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(__27868,c__15752__auto___27871,G__27699_27869,n__13530__auto___27867,jobs,results,process,async))
);


break;
case "compute":
var c__15752__auto___27880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27868,c__15752__auto___27880,G__27699_27869,n__13530__auto___27867,jobs,results,process,async){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (__27868,c__15752__auto___27880,G__27699_27869,n__13530__auto___27867,jobs,results,process,async){
return (function (state_27739){
var state_val_27740 = (state_27739[(1)]);
if((state_val_27740 === (7))){
var inst_27735 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
var statearr_27741_27881 = state_27739__$1;
(statearr_27741_27881[(2)] = inst_27735);

(statearr_27741_27881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (6))){
var state_27739__$1 = state_27739;
var statearr_27742_27882 = state_27739__$1;
(statearr_27742_27882[(2)] = null);

(statearr_27742_27882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (5))){
var state_27739__$1 = state_27739;
var statearr_27743_27883 = state_27739__$1;
(statearr_27743_27883[(2)] = null);

(statearr_27743_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (4))){
var inst_27729 = (state_27739[(2)]);
var inst_27730 = process.call(null,inst_27729);
var state_27739__$1 = state_27739;
if(cljs.core.truth_(inst_27730)){
var statearr_27744_27884 = state_27739__$1;
(statearr_27744_27884[(1)] = (5));

} else {
var statearr_27745_27885 = state_27739__$1;
(statearr_27745_27885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (3))){
var inst_27737 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27739__$1,inst_27737);
} else {
if((state_val_27740 === (2))){
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27739__$1,(4),jobs);
} else {
if((state_val_27740 === (1))){
var state_27739__$1 = state_27739;
var statearr_27746_27886 = state_27739__$1;
(statearr_27746_27886[(2)] = null);

(statearr_27746_27886[(1)] = (2));


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
});})(__27868,c__15752__auto___27880,G__27699_27869,n__13530__auto___27867,jobs,results,process,async))
;
return ((function (__27868,switch__15696__auto__,c__15752__auto___27880,G__27699_27869,n__13530__auto___27867,jobs,results,process,async){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27750 = [null,null,null,null,null,null,null];
(statearr_27750[(0)] = state_machine__15697__auto__);

(statearr_27750[(1)] = (1));

return statearr_27750;
});
var state_machine__15697__auto____1 = (function (state_27739){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27751){if((e27751 instanceof Object)){
var ex__15700__auto__ = e27751;
var statearr_27752_27887 = state_27739;
(statearr_27752_27887[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27888 = state_27739;
state_27739 = G__27888;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27739){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(__27868,switch__15696__auto__,c__15752__auto___27880,G__27699_27869,n__13530__auto___27867,jobs,results,process,async))
})();
var state__15754__auto__ = (function (){var statearr_27753 = f__15753__auto__.call(null);
(statearr_27753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___27880);

return statearr_27753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(__27868,c__15752__auto___27880,G__27699_27869,n__13530__auto___27867,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27889 = (__27868 + (1));
__27868 = G__27889;
continue;
} else {
}
break;
}

var c__15752__auto___27890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___27890,jobs,results,process,async){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___27890,jobs,results,process,async){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (9))){
var inst_27768 = (state_27775[(2)]);
var state_27775__$1 = (function (){var statearr_27777 = state_27775;
(statearr_27777[(7)] = inst_27768);

return statearr_27777;
})();
var statearr_27778_27891 = state_27775__$1;
(statearr_27778_27891[(2)] = null);

(statearr_27778_27891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (8))){
var inst_27761 = (state_27775[(8)]);
var inst_27766 = (state_27775[(2)]);
var state_27775__$1 = (function (){var statearr_27779 = state_27775;
(statearr_27779[(9)] = inst_27766);

return statearr_27779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27775__$1,(9),results,inst_27761);
} else {
if((state_val_27776 === (7))){
var inst_27771 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27780_27892 = state_27775__$1;
(statearr_27780_27892[(2)] = inst_27771);

(statearr_27780_27892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (6))){
var inst_27756 = (state_27775[(10)]);
var inst_27761 = (state_27775[(8)]);
var inst_27761__$1 = cljs.core.async.chan.call(null,(1));
var inst_27762 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27763 = [inst_27756,inst_27761__$1];
var inst_27764 = (new cljs.core.PersistentVector(null,2,(5),inst_27762,inst_27763,null));
var state_27775__$1 = (function (){var statearr_27781 = state_27775;
(statearr_27781[(8)] = inst_27761__$1);

return statearr_27781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27775__$1,(8),jobs,inst_27764);
} else {
if((state_val_27776 === (5))){
var inst_27759 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27775__$1 = state_27775;
var statearr_27782_27893 = state_27775__$1;
(statearr_27782_27893[(2)] = inst_27759);

(statearr_27782_27893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (4))){
var inst_27756 = (state_27775[(10)]);
var inst_27756__$1 = (state_27775[(2)]);
var inst_27757 = (inst_27756__$1 == null);
var state_27775__$1 = (function (){var statearr_27783 = state_27775;
(statearr_27783[(10)] = inst_27756__$1);

return statearr_27783;
})();
if(cljs.core.truth_(inst_27757)){
var statearr_27784_27894 = state_27775__$1;
(statearr_27784_27894[(1)] = (5));

} else {
var statearr_27785_27895 = state_27775__$1;
(statearr_27785_27895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (3))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (2))){
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(4),from);
} else {
if((state_val_27776 === (1))){
var state_27775__$1 = state_27775;
var statearr_27786_27896 = state_27775__$1;
(statearr_27786_27896[(2)] = null);

(statearr_27786_27896[(1)] = (2));


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
});})(c__15752__auto___27890,jobs,results,process,async))
;
return ((function (switch__15696__auto__,c__15752__auto___27890,jobs,results,process,async){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27790[(0)] = state_machine__15697__auto__);

(statearr_27790[(1)] = (1));

return statearr_27790;
});
var state_machine__15697__auto____1 = (function (state_27775){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27791){if((e27791 instanceof Object)){
var ex__15700__auto__ = e27791;
var statearr_27792_27897 = state_27775;
(statearr_27792_27897[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27898 = state_27775;
state_27775 = G__27898;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___27890,jobs,results,process,async))
})();
var state__15754__auto__ = (function (){var statearr_27793 = f__15753__auto__.call(null);
(statearr_27793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___27890);

return statearr_27793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___27890,jobs,results,process,async))
);


var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__,jobs,results,process,async){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__,jobs,results,process,async){
return (function (state_27831){
var state_val_27832 = (state_27831[(1)]);
if((state_val_27832 === (7))){
var inst_27827 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27833_27899 = state_27831__$1;
(statearr_27833_27899[(2)] = inst_27827);

(statearr_27833_27899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (20))){
var state_27831__$1 = state_27831;
var statearr_27834_27900 = state_27831__$1;
(statearr_27834_27900[(2)] = null);

(statearr_27834_27900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (1))){
var state_27831__$1 = state_27831;
var statearr_27835_27901 = state_27831__$1;
(statearr_27835_27901[(2)] = null);

(statearr_27835_27901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (4))){
var inst_27796 = (state_27831[(7)]);
var inst_27796__$1 = (state_27831[(2)]);
var inst_27797 = (inst_27796__$1 == null);
var state_27831__$1 = (function (){var statearr_27836 = state_27831;
(statearr_27836[(7)] = inst_27796__$1);

return statearr_27836;
})();
if(cljs.core.truth_(inst_27797)){
var statearr_27837_27902 = state_27831__$1;
(statearr_27837_27902[(1)] = (5));

} else {
var statearr_27838_27903 = state_27831__$1;
(statearr_27838_27903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (15))){
var inst_27809 = (state_27831[(8)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27831__$1,(18),to,inst_27809);
} else {
if((state_val_27832 === (21))){
var inst_27822 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27839_27904 = state_27831__$1;
(statearr_27839_27904[(2)] = inst_27822);

(statearr_27839_27904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (13))){
var inst_27824 = (state_27831[(2)]);
var state_27831__$1 = (function (){var statearr_27840 = state_27831;
(statearr_27840[(9)] = inst_27824);

return statearr_27840;
})();
var statearr_27841_27905 = state_27831__$1;
(statearr_27841_27905[(2)] = null);

(statearr_27841_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (6))){
var inst_27796 = (state_27831[(7)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(11),inst_27796);
} else {
if((state_val_27832 === (17))){
var inst_27817 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27817)){
var statearr_27842_27906 = state_27831__$1;
(statearr_27842_27906[(1)] = (19));

} else {
var statearr_27843_27907 = state_27831__$1;
(statearr_27843_27907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (3))){
var inst_27829 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else {
if((state_val_27832 === (12))){
var inst_27806 = (state_27831[(10)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(14),inst_27806);
} else {
if((state_val_27832 === (2))){
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(4),results);
} else {
if((state_val_27832 === (19))){
var state_27831__$1 = state_27831;
var statearr_27844_27908 = state_27831__$1;
(statearr_27844_27908[(2)] = null);

(statearr_27844_27908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (11))){
var inst_27806 = (state_27831[(2)]);
var state_27831__$1 = (function (){var statearr_27845 = state_27831;
(statearr_27845[(10)] = inst_27806);

return statearr_27845;
})();
var statearr_27846_27909 = state_27831__$1;
(statearr_27846_27909[(2)] = null);

(statearr_27846_27909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (9))){
var state_27831__$1 = state_27831;
var statearr_27847_27910 = state_27831__$1;
(statearr_27847_27910[(2)] = null);

(statearr_27847_27910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (5))){
var state_27831__$1 = state_27831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27848_27911 = state_27831__$1;
(statearr_27848_27911[(1)] = (8));

} else {
var statearr_27849_27912 = state_27831__$1;
(statearr_27849_27912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (14))){
var inst_27811 = (state_27831[(11)]);
var inst_27809 = (state_27831[(8)]);
var inst_27809__$1 = (state_27831[(2)]);
var inst_27810 = (inst_27809__$1 == null);
var inst_27811__$1 = cljs.core.not.call(null,inst_27810);
var state_27831__$1 = (function (){var statearr_27850 = state_27831;
(statearr_27850[(11)] = inst_27811__$1);

(statearr_27850[(8)] = inst_27809__$1);

return statearr_27850;
})();
if(inst_27811__$1){
var statearr_27851_27913 = state_27831__$1;
(statearr_27851_27913[(1)] = (15));

} else {
var statearr_27852_27914 = state_27831__$1;
(statearr_27852_27914[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (16))){
var inst_27811 = (state_27831[(11)]);
var state_27831__$1 = state_27831;
var statearr_27853_27915 = state_27831__$1;
(statearr_27853_27915[(2)] = inst_27811);

(statearr_27853_27915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (10))){
var inst_27803 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27854_27916 = state_27831__$1;
(statearr_27854_27916[(2)] = inst_27803);

(statearr_27854_27916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (18))){
var inst_27814 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27855_27917 = state_27831__$1;
(statearr_27855_27917[(2)] = inst_27814);

(statearr_27855_27917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (8))){
var inst_27800 = cljs.core.async.close_BANG_.call(null,to);
var state_27831__$1 = state_27831;
var statearr_27856_27918 = state_27831__$1;
(statearr_27856_27918[(2)] = inst_27800);

(statearr_27856_27918[(1)] = (10));


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
});})(c__15752__auto__,jobs,results,process,async))
;
return ((function (switch__15696__auto__,c__15752__auto__,jobs,results,process,async){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_27860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27860[(0)] = state_machine__15697__auto__);

(statearr_27860[(1)] = (1));

return statearr_27860;
});
var state_machine__15697__auto____1 = (function (state_27831){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e27861){if((e27861 instanceof Object)){
var ex__15700__auto__ = e27861;
var statearr_27862_27919 = state_27831;
(statearr_27862_27919[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27920 = state_27831;
state_27831 = G__27920;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__,jobs,results,process,async))
})();
var state__15754__auto__ = (function (){var statearr_27863 = f__15753__auto__.call(null);
(statearr_27863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_27863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__,jobs,results,process,async))
);

return c__15752__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15752__auto___28021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___28021,tc,fc){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___28021,tc,fc){
return (function (state_27996){
var state_val_27997 = (state_27996[(1)]);
if((state_val_27997 === (7))){
var inst_27992 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_27998_28022 = state_27996__$1;
(statearr_27998_28022[(2)] = inst_27992);

(statearr_27998_28022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (1))){
var state_27996__$1 = state_27996;
var statearr_27999_28023 = state_27996__$1;
(statearr_27999_28023[(2)] = null);

(statearr_27999_28023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (4))){
var inst_27973 = (state_27996[(7)]);
var inst_27973__$1 = (state_27996[(2)]);
var inst_27974 = (inst_27973__$1 == null);
var state_27996__$1 = (function (){var statearr_28000 = state_27996;
(statearr_28000[(7)] = inst_27973__$1);

return statearr_28000;
})();
if(cljs.core.truth_(inst_27974)){
var statearr_28001_28024 = state_27996__$1;
(statearr_28001_28024[(1)] = (5));

} else {
var statearr_28002_28025 = state_27996__$1;
(statearr_28002_28025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (13))){
var state_27996__$1 = state_27996;
var statearr_28003_28026 = state_27996__$1;
(statearr_28003_28026[(2)] = null);

(statearr_28003_28026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (6))){
var inst_27973 = (state_27996[(7)]);
var inst_27979 = p.call(null,inst_27973);
var state_27996__$1 = state_27996;
if(cljs.core.truth_(inst_27979)){
var statearr_28004_28027 = state_27996__$1;
(statearr_28004_28027[(1)] = (9));

} else {
var statearr_28005_28028 = state_27996__$1;
(statearr_28005_28028[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (3))){
var inst_27994 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27996__$1,inst_27994);
} else {
if((state_val_27997 === (12))){
var state_27996__$1 = state_27996;
var statearr_28006_28029 = state_27996__$1;
(statearr_28006_28029[(2)] = null);

(statearr_28006_28029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (2))){
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,(4),ch);
} else {
if((state_val_27997 === (11))){
var inst_27973 = (state_27996[(7)]);
var inst_27983 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27996__$1,(8),inst_27983,inst_27973);
} else {
if((state_val_27997 === (9))){
var state_27996__$1 = state_27996;
var statearr_28007_28030 = state_27996__$1;
(statearr_28007_28030[(2)] = tc);

(statearr_28007_28030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (5))){
var inst_27976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27977 = cljs.core.async.close_BANG_.call(null,fc);
var state_27996__$1 = (function (){var statearr_28008 = state_27996;
(statearr_28008[(8)] = inst_27976);

return statearr_28008;
})();
var statearr_28009_28031 = state_27996__$1;
(statearr_28009_28031[(2)] = inst_27977);

(statearr_28009_28031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (14))){
var inst_27990 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28010_28032 = state_27996__$1;
(statearr_28010_28032[(2)] = inst_27990);

(statearr_28010_28032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (10))){
var state_27996__$1 = state_27996;
var statearr_28011_28033 = state_27996__$1;
(statearr_28011_28033[(2)] = fc);

(statearr_28011_28033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (8))){
var inst_27985 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
if(cljs.core.truth_(inst_27985)){
var statearr_28012_28034 = state_27996__$1;
(statearr_28012_28034[(1)] = (12));

} else {
var statearr_28013_28035 = state_27996__$1;
(statearr_28013_28035[(1)] = (13));

}

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
});})(c__15752__auto___28021,tc,fc))
;
return ((function (switch__15696__auto__,c__15752__auto___28021,tc,fc){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_28017 = [null,null,null,null,null,null,null,null,null];
(statearr_28017[(0)] = state_machine__15697__auto__);

(statearr_28017[(1)] = (1));

return statearr_28017;
});
var state_machine__15697__auto____1 = (function (state_27996){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_27996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e28018){if((e28018 instanceof Object)){
var ex__15700__auto__ = e28018;
var statearr_28019_28036 = state_27996;
(statearr_28019_28036[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28037 = state_27996;
state_27996 = G__28037;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_27996){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_27996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___28021,tc,fc))
})();
var state__15754__auto__ = (function (){var statearr_28020 = f__15753__auto__.call(null);
(statearr_28020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___28021);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___28021,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__){
return (function (state_28084){
var state_val_28085 = (state_28084[(1)]);
if((state_val_28085 === (7))){
var inst_28080 = (state_28084[(2)]);
var state_28084__$1 = state_28084;
var statearr_28086_28102 = state_28084__$1;
(statearr_28086_28102[(2)] = inst_28080);

(statearr_28086_28102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (6))){
var inst_28073 = (state_28084[(7)]);
var inst_28070 = (state_28084[(8)]);
var inst_28077 = f.call(null,inst_28070,inst_28073);
var inst_28070__$1 = inst_28077;
var state_28084__$1 = (function (){var statearr_28087 = state_28084;
(statearr_28087[(8)] = inst_28070__$1);

return statearr_28087;
})();
var statearr_28088_28103 = state_28084__$1;
(statearr_28088_28103[(2)] = null);

(statearr_28088_28103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (5))){
var inst_28070 = (state_28084[(8)]);
var state_28084__$1 = state_28084;
var statearr_28089_28104 = state_28084__$1;
(statearr_28089_28104[(2)] = inst_28070);

(statearr_28089_28104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (4))){
var inst_28073 = (state_28084[(7)]);
var inst_28073__$1 = (state_28084[(2)]);
var inst_28074 = (inst_28073__$1 == null);
var state_28084__$1 = (function (){var statearr_28090 = state_28084;
(statearr_28090[(7)] = inst_28073__$1);

return statearr_28090;
})();
if(cljs.core.truth_(inst_28074)){
var statearr_28091_28105 = state_28084__$1;
(statearr_28091_28105[(1)] = (5));

} else {
var statearr_28092_28106 = state_28084__$1;
(statearr_28092_28106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (3))){
var inst_28082 = (state_28084[(2)]);
var state_28084__$1 = state_28084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28084__$1,inst_28082);
} else {
if((state_val_28085 === (2))){
var state_28084__$1 = state_28084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28084__$1,(4),ch);
} else {
if((state_val_28085 === (1))){
var inst_28070 = init;
var state_28084__$1 = (function (){var statearr_28093 = state_28084;
(statearr_28093[(8)] = inst_28070);

return statearr_28093;
})();
var statearr_28094_28107 = state_28084__$1;
(statearr_28094_28107[(2)] = null);

(statearr_28094_28107[(1)] = (2));


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
});})(c__15752__auto__))
;
return ((function (switch__15696__auto__,c__15752__auto__){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_28098 = [null,null,null,null,null,null,null,null,null];
(statearr_28098[(0)] = state_machine__15697__auto__);

(statearr_28098[(1)] = (1));

return statearr_28098;
});
var state_machine__15697__auto____1 = (function (state_28084){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_28084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e28099){if((e28099 instanceof Object)){
var ex__15700__auto__ = e28099;
var statearr_28100_28108 = state_28084;
(statearr_28100_28108[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_28084;
state_28084 = G__28109;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_28084){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_28084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__))
})();
var state__15754__auto__ = (function (){var statearr_28101 = f__15753__auto__.call(null);
(statearr_28101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_28101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__))
);

return c__15752__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__){
return (function (state_28183){
var state_val_28184 = (state_28183[(1)]);
if((state_val_28184 === (7))){
var inst_28165 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28185_28208 = state_28183__$1;
(statearr_28185_28208[(2)] = inst_28165);

(statearr_28185_28208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (1))){
var inst_28159 = cljs.core.seq.call(null,coll);
var inst_28160 = inst_28159;
var state_28183__$1 = (function (){var statearr_28186 = state_28183;
(statearr_28186[(7)] = inst_28160);

return statearr_28186;
})();
var statearr_28187_28209 = state_28183__$1;
(statearr_28187_28209[(2)] = null);

(statearr_28187_28209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (4))){
var inst_28160 = (state_28183[(7)]);
var inst_28163 = cljs.core.first.call(null,inst_28160);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28183__$1,(7),ch,inst_28163);
} else {
if((state_val_28184 === (13))){
var inst_28177 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28188_28210 = state_28183__$1;
(statearr_28188_28210[(2)] = inst_28177);

(statearr_28188_28210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (6))){
var inst_28168 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
if(cljs.core.truth_(inst_28168)){
var statearr_28189_28211 = state_28183__$1;
(statearr_28189_28211[(1)] = (8));

} else {
var statearr_28190_28212 = state_28183__$1;
(statearr_28190_28212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (3))){
var inst_28181 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28183__$1,inst_28181);
} else {
if((state_val_28184 === (12))){
var state_28183__$1 = state_28183;
var statearr_28191_28213 = state_28183__$1;
(statearr_28191_28213[(2)] = null);

(statearr_28191_28213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (2))){
var inst_28160 = (state_28183[(7)]);
var state_28183__$1 = state_28183;
if(cljs.core.truth_(inst_28160)){
var statearr_28192_28214 = state_28183__$1;
(statearr_28192_28214[(1)] = (4));

} else {
var statearr_28193_28215 = state_28183__$1;
(statearr_28193_28215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (11))){
var inst_28174 = cljs.core.async.close_BANG_.call(null,ch);
var state_28183__$1 = state_28183;
var statearr_28194_28216 = state_28183__$1;
(statearr_28194_28216[(2)] = inst_28174);

(statearr_28194_28216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (9))){
var state_28183__$1 = state_28183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28195_28217 = state_28183__$1;
(statearr_28195_28217[(1)] = (11));

} else {
var statearr_28196_28218 = state_28183__$1;
(statearr_28196_28218[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (5))){
var inst_28160 = (state_28183[(7)]);
var state_28183__$1 = state_28183;
var statearr_28197_28219 = state_28183__$1;
(statearr_28197_28219[(2)] = inst_28160);

(statearr_28197_28219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (10))){
var inst_28179 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28198_28220 = state_28183__$1;
(statearr_28198_28220[(2)] = inst_28179);

(statearr_28198_28220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (8))){
var inst_28160 = (state_28183[(7)]);
var inst_28170 = cljs.core.next.call(null,inst_28160);
var inst_28160__$1 = inst_28170;
var state_28183__$1 = (function (){var statearr_28199 = state_28183;
(statearr_28199[(7)] = inst_28160__$1);

return statearr_28199;
})();
var statearr_28200_28221 = state_28183__$1;
(statearr_28200_28221[(2)] = null);

(statearr_28200_28221[(1)] = (2));


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
});})(c__15752__auto__))
;
return ((function (switch__15696__auto__,c__15752__auto__){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_28204 = [null,null,null,null,null,null,null,null];
(statearr_28204[(0)] = state_machine__15697__auto__);

(statearr_28204[(1)] = (1));

return statearr_28204;
});
var state_machine__15697__auto____1 = (function (state_28183){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_28183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object)){
var ex__15700__auto__ = e28205;
var statearr_28206_28222 = state_28183;
(statearr_28206_28222[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28223 = state_28183;
state_28183 = G__28223;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_28183){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_28183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__))
})();
var state__15754__auto__ = (function (){var statearr_28207 = f__15753__auto__.call(null);
(statearr_28207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__))
);

return c__15752__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28225 = {};
return obj28225;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12631__auto__ = _;
if(and__12631__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12631__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13287__auto__ = (((_ == null))?null:_);
return (function (){var or__12643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28227 = {};
return obj28227;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28449 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28449 = (function (cs,ch,mult,meta28450){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28450 = meta28450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28449.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28449.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28449.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28449.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28449.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28451){
var self__ = this;
var _28451__$1 = this;
return self__.meta28450;
});})(cs))
;

cljs.core.async.t28449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28451,meta28450__$1){
var self__ = this;
var _28451__$1 = this;
return (new cljs.core.async.t28449(self__.cs,self__.ch,self__.mult,meta28450__$1));
});})(cs))
;

cljs.core.async.t28449.cljs$lang$type = true;

cljs.core.async.t28449.cljs$lang$ctorStr = "cljs.core.async/t28449";

cljs.core.async.t28449.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t28449");
});})(cs))
;

cljs.core.async.__GT_t28449 = ((function (cs){
return (function __GT_t28449(cs__$1,ch__$1,mult__$1,meta28450){
return (new cljs.core.async.t28449(cs__$1,ch__$1,mult__$1,meta28450));
});})(cs))
;

}

return (new cljs.core.async.t28449(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15752__auto___28670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___28670,cs,m,dchan,dctr,done){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___28670,cs,m,dchan,dctr,done){
return (function (state_28582){
var state_val_28583 = (state_28582[(1)]);
if((state_val_28583 === (7))){
var inst_28578 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28584_28671 = state_28582__$1;
(statearr_28584_28671[(2)] = inst_28578);

(statearr_28584_28671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (20))){
var inst_28483 = (state_28582[(7)]);
var inst_28493 = cljs.core.first.call(null,inst_28483);
var inst_28494 = cljs.core.nth.call(null,inst_28493,(0),null);
var inst_28495 = cljs.core.nth.call(null,inst_28493,(1),null);
var state_28582__$1 = (function (){var statearr_28585 = state_28582;
(statearr_28585[(8)] = inst_28494);

return statearr_28585;
})();
if(cljs.core.truth_(inst_28495)){
var statearr_28586_28672 = state_28582__$1;
(statearr_28586_28672[(1)] = (22));

} else {
var statearr_28587_28673 = state_28582__$1;
(statearr_28587_28673[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (27))){
var inst_28530 = (state_28582[(9)]);
var inst_28454 = (state_28582[(10)]);
var inst_28525 = (state_28582[(11)]);
var inst_28523 = (state_28582[(12)]);
var inst_28530__$1 = cljs.core._nth.call(null,inst_28523,inst_28525);
var inst_28531 = cljs.core.async.put_BANG_.call(null,inst_28530__$1,inst_28454,done);
var state_28582__$1 = (function (){var statearr_28588 = state_28582;
(statearr_28588[(9)] = inst_28530__$1);

return statearr_28588;
})();
if(cljs.core.truth_(inst_28531)){
var statearr_28589_28674 = state_28582__$1;
(statearr_28589_28674[(1)] = (30));

} else {
var statearr_28590_28675 = state_28582__$1;
(statearr_28590_28675[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (1))){
var state_28582__$1 = state_28582;
var statearr_28591_28676 = state_28582__$1;
(statearr_28591_28676[(2)] = null);

(statearr_28591_28676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (24))){
var inst_28483 = (state_28582[(7)]);
var inst_28500 = (state_28582[(2)]);
var inst_28501 = cljs.core.next.call(null,inst_28483);
var inst_28463 = inst_28501;
var inst_28464 = null;
var inst_28465 = (0);
var inst_28466 = (0);
var state_28582__$1 = (function (){var statearr_28592 = state_28582;
(statearr_28592[(13)] = inst_28463);

(statearr_28592[(14)] = inst_28464);

(statearr_28592[(15)] = inst_28465);

(statearr_28592[(16)] = inst_28500);

(statearr_28592[(17)] = inst_28466);

return statearr_28592;
})();
var statearr_28593_28677 = state_28582__$1;
(statearr_28593_28677[(2)] = null);

(statearr_28593_28677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (39))){
var state_28582__$1 = state_28582;
var statearr_28597_28678 = state_28582__$1;
(statearr_28597_28678[(2)] = null);

(statearr_28597_28678[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (4))){
var inst_28454 = (state_28582[(10)]);
var inst_28454__$1 = (state_28582[(2)]);
var inst_28455 = (inst_28454__$1 == null);
var state_28582__$1 = (function (){var statearr_28598 = state_28582;
(statearr_28598[(10)] = inst_28454__$1);

return statearr_28598;
})();
if(cljs.core.truth_(inst_28455)){
var statearr_28599_28679 = state_28582__$1;
(statearr_28599_28679[(1)] = (5));

} else {
var statearr_28600_28680 = state_28582__$1;
(statearr_28600_28680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (15))){
var inst_28463 = (state_28582[(13)]);
var inst_28464 = (state_28582[(14)]);
var inst_28465 = (state_28582[(15)]);
var inst_28466 = (state_28582[(17)]);
var inst_28479 = (state_28582[(2)]);
var inst_28480 = (inst_28466 + (1));
var tmp28594 = inst_28463;
var tmp28595 = inst_28464;
var tmp28596 = inst_28465;
var inst_28463__$1 = tmp28594;
var inst_28464__$1 = tmp28595;
var inst_28465__$1 = tmp28596;
var inst_28466__$1 = inst_28480;
var state_28582__$1 = (function (){var statearr_28601 = state_28582;
(statearr_28601[(13)] = inst_28463__$1);

(statearr_28601[(14)] = inst_28464__$1);

(statearr_28601[(15)] = inst_28465__$1);

(statearr_28601[(18)] = inst_28479);

(statearr_28601[(17)] = inst_28466__$1);

return statearr_28601;
})();
var statearr_28602_28681 = state_28582__$1;
(statearr_28602_28681[(2)] = null);

(statearr_28602_28681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (21))){
var inst_28504 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28606_28682 = state_28582__$1;
(statearr_28606_28682[(2)] = inst_28504);

(statearr_28606_28682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (31))){
var inst_28530 = (state_28582[(9)]);
var inst_28534 = done.call(null,null);
var inst_28535 = cljs.core.async.untap_STAR_.call(null,m,inst_28530);
var state_28582__$1 = (function (){var statearr_28607 = state_28582;
(statearr_28607[(19)] = inst_28534);

return statearr_28607;
})();
var statearr_28608_28683 = state_28582__$1;
(statearr_28608_28683[(2)] = inst_28535);

(statearr_28608_28683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (32))){
var inst_28522 = (state_28582[(20)]);
var inst_28525 = (state_28582[(11)]);
var inst_28524 = (state_28582[(21)]);
var inst_28523 = (state_28582[(12)]);
var inst_28537 = (state_28582[(2)]);
var inst_28538 = (inst_28525 + (1));
var tmp28603 = inst_28522;
var tmp28604 = inst_28524;
var tmp28605 = inst_28523;
var inst_28522__$1 = tmp28603;
var inst_28523__$1 = tmp28605;
var inst_28524__$1 = tmp28604;
var inst_28525__$1 = inst_28538;
var state_28582__$1 = (function (){var statearr_28609 = state_28582;
(statearr_28609[(20)] = inst_28522__$1);

(statearr_28609[(11)] = inst_28525__$1);

(statearr_28609[(22)] = inst_28537);

(statearr_28609[(21)] = inst_28524__$1);

(statearr_28609[(12)] = inst_28523__$1);

return statearr_28609;
})();
var statearr_28610_28684 = state_28582__$1;
(statearr_28610_28684[(2)] = null);

(statearr_28610_28684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (40))){
var inst_28550 = (state_28582[(23)]);
var inst_28554 = done.call(null,null);
var inst_28555 = cljs.core.async.untap_STAR_.call(null,m,inst_28550);
var state_28582__$1 = (function (){var statearr_28611 = state_28582;
(statearr_28611[(24)] = inst_28554);

return statearr_28611;
})();
var statearr_28612_28685 = state_28582__$1;
(statearr_28612_28685[(2)] = inst_28555);

(statearr_28612_28685[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (33))){
var inst_28541 = (state_28582[(25)]);
var inst_28543 = cljs.core.chunked_seq_QMARK_.call(null,inst_28541);
var state_28582__$1 = state_28582;
if(inst_28543){
var statearr_28613_28686 = state_28582__$1;
(statearr_28613_28686[(1)] = (36));

} else {
var statearr_28614_28687 = state_28582__$1;
(statearr_28614_28687[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (13))){
var inst_28473 = (state_28582[(26)]);
var inst_28476 = cljs.core.async.close_BANG_.call(null,inst_28473);
var state_28582__$1 = state_28582;
var statearr_28615_28688 = state_28582__$1;
(statearr_28615_28688[(2)] = inst_28476);

(statearr_28615_28688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (22))){
var inst_28494 = (state_28582[(8)]);
var inst_28497 = cljs.core.async.close_BANG_.call(null,inst_28494);
var state_28582__$1 = state_28582;
var statearr_28616_28689 = state_28582__$1;
(statearr_28616_28689[(2)] = inst_28497);

(statearr_28616_28689[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (36))){
var inst_28541 = (state_28582[(25)]);
var inst_28545 = cljs.core.chunk_first.call(null,inst_28541);
var inst_28546 = cljs.core.chunk_rest.call(null,inst_28541);
var inst_28547 = cljs.core.count.call(null,inst_28545);
var inst_28522 = inst_28546;
var inst_28523 = inst_28545;
var inst_28524 = inst_28547;
var inst_28525 = (0);
var state_28582__$1 = (function (){var statearr_28617 = state_28582;
(statearr_28617[(20)] = inst_28522);

(statearr_28617[(11)] = inst_28525);

(statearr_28617[(21)] = inst_28524);

(statearr_28617[(12)] = inst_28523);

return statearr_28617;
})();
var statearr_28618_28690 = state_28582__$1;
(statearr_28618_28690[(2)] = null);

(statearr_28618_28690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (41))){
var inst_28541 = (state_28582[(25)]);
var inst_28557 = (state_28582[(2)]);
var inst_28558 = cljs.core.next.call(null,inst_28541);
var inst_28522 = inst_28558;
var inst_28523 = null;
var inst_28524 = (0);
var inst_28525 = (0);
var state_28582__$1 = (function (){var statearr_28619 = state_28582;
(statearr_28619[(20)] = inst_28522);

(statearr_28619[(27)] = inst_28557);

(statearr_28619[(11)] = inst_28525);

(statearr_28619[(21)] = inst_28524);

(statearr_28619[(12)] = inst_28523);

return statearr_28619;
})();
var statearr_28620_28691 = state_28582__$1;
(statearr_28620_28691[(2)] = null);

(statearr_28620_28691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (43))){
var state_28582__$1 = state_28582;
var statearr_28621_28692 = state_28582__$1;
(statearr_28621_28692[(2)] = null);

(statearr_28621_28692[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (29))){
var inst_28566 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28622_28693 = state_28582__$1;
(statearr_28622_28693[(2)] = inst_28566);

(statearr_28622_28693[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (44))){
var inst_28575 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28623 = state_28582;
(statearr_28623[(28)] = inst_28575);

return statearr_28623;
})();
var statearr_28624_28694 = state_28582__$1;
(statearr_28624_28694[(2)] = null);

(statearr_28624_28694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (6))){
var inst_28514 = (state_28582[(29)]);
var inst_28513 = cljs.core.deref.call(null,cs);
var inst_28514__$1 = cljs.core.keys.call(null,inst_28513);
var inst_28515 = cljs.core.count.call(null,inst_28514__$1);
var inst_28516 = cljs.core.reset_BANG_.call(null,dctr,inst_28515);
var inst_28521 = cljs.core.seq.call(null,inst_28514__$1);
var inst_28522 = inst_28521;
var inst_28523 = null;
var inst_28524 = (0);
var inst_28525 = (0);
var state_28582__$1 = (function (){var statearr_28625 = state_28582;
(statearr_28625[(20)] = inst_28522);

(statearr_28625[(29)] = inst_28514__$1);

(statearr_28625[(11)] = inst_28525);

(statearr_28625[(21)] = inst_28524);

(statearr_28625[(12)] = inst_28523);

(statearr_28625[(30)] = inst_28516);

return statearr_28625;
})();
var statearr_28626_28695 = state_28582__$1;
(statearr_28626_28695[(2)] = null);

(statearr_28626_28695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (28))){
var inst_28522 = (state_28582[(20)]);
var inst_28541 = (state_28582[(25)]);
var inst_28541__$1 = cljs.core.seq.call(null,inst_28522);
var state_28582__$1 = (function (){var statearr_28627 = state_28582;
(statearr_28627[(25)] = inst_28541__$1);

return statearr_28627;
})();
if(inst_28541__$1){
var statearr_28628_28696 = state_28582__$1;
(statearr_28628_28696[(1)] = (33));

} else {
var statearr_28629_28697 = state_28582__$1;
(statearr_28629_28697[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (25))){
var inst_28525 = (state_28582[(11)]);
var inst_28524 = (state_28582[(21)]);
var inst_28527 = (inst_28525 < inst_28524);
var inst_28528 = inst_28527;
var state_28582__$1 = state_28582;
if(cljs.core.truth_(inst_28528)){
var statearr_28630_28698 = state_28582__$1;
(statearr_28630_28698[(1)] = (27));

} else {
var statearr_28631_28699 = state_28582__$1;
(statearr_28631_28699[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (34))){
var state_28582__$1 = state_28582;
var statearr_28632_28700 = state_28582__$1;
(statearr_28632_28700[(2)] = null);

(statearr_28632_28700[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (17))){
var state_28582__$1 = state_28582;
var statearr_28633_28701 = state_28582__$1;
(statearr_28633_28701[(2)] = null);

(statearr_28633_28701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (3))){
var inst_28580 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28582__$1,inst_28580);
} else {
if((state_val_28583 === (12))){
var inst_28509 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28634_28702 = state_28582__$1;
(statearr_28634_28702[(2)] = inst_28509);

(statearr_28634_28702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (2))){
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28582__$1,(4),ch);
} else {
if((state_val_28583 === (23))){
var state_28582__$1 = state_28582;
var statearr_28635_28703 = state_28582__$1;
(statearr_28635_28703[(2)] = null);

(statearr_28635_28703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (35))){
var inst_28564 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28636_28704 = state_28582__$1;
(statearr_28636_28704[(2)] = inst_28564);

(statearr_28636_28704[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (19))){
var inst_28483 = (state_28582[(7)]);
var inst_28487 = cljs.core.chunk_first.call(null,inst_28483);
var inst_28488 = cljs.core.chunk_rest.call(null,inst_28483);
var inst_28489 = cljs.core.count.call(null,inst_28487);
var inst_28463 = inst_28488;
var inst_28464 = inst_28487;
var inst_28465 = inst_28489;
var inst_28466 = (0);
var state_28582__$1 = (function (){var statearr_28637 = state_28582;
(statearr_28637[(13)] = inst_28463);

(statearr_28637[(14)] = inst_28464);

(statearr_28637[(15)] = inst_28465);

(statearr_28637[(17)] = inst_28466);

return statearr_28637;
})();
var statearr_28638_28705 = state_28582__$1;
(statearr_28638_28705[(2)] = null);

(statearr_28638_28705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (11))){
var inst_28463 = (state_28582[(13)]);
var inst_28483 = (state_28582[(7)]);
var inst_28483__$1 = cljs.core.seq.call(null,inst_28463);
var state_28582__$1 = (function (){var statearr_28639 = state_28582;
(statearr_28639[(7)] = inst_28483__$1);

return statearr_28639;
})();
if(inst_28483__$1){
var statearr_28640_28706 = state_28582__$1;
(statearr_28640_28706[(1)] = (16));

} else {
var statearr_28641_28707 = state_28582__$1;
(statearr_28641_28707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (9))){
var inst_28511 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28642_28708 = state_28582__$1;
(statearr_28642_28708[(2)] = inst_28511);

(statearr_28642_28708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (5))){
var inst_28461 = cljs.core.deref.call(null,cs);
var inst_28462 = cljs.core.seq.call(null,inst_28461);
var inst_28463 = inst_28462;
var inst_28464 = null;
var inst_28465 = (0);
var inst_28466 = (0);
var state_28582__$1 = (function (){var statearr_28643 = state_28582;
(statearr_28643[(13)] = inst_28463);

(statearr_28643[(14)] = inst_28464);

(statearr_28643[(15)] = inst_28465);

(statearr_28643[(17)] = inst_28466);

return statearr_28643;
})();
var statearr_28644_28709 = state_28582__$1;
(statearr_28644_28709[(2)] = null);

(statearr_28644_28709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (14))){
var state_28582__$1 = state_28582;
var statearr_28645_28710 = state_28582__$1;
(statearr_28645_28710[(2)] = null);

(statearr_28645_28710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (45))){
var inst_28572 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28646_28711 = state_28582__$1;
(statearr_28646_28711[(2)] = inst_28572);

(statearr_28646_28711[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (26))){
var inst_28514 = (state_28582[(29)]);
var inst_28568 = (state_28582[(2)]);
var inst_28569 = cljs.core.seq.call(null,inst_28514);
var state_28582__$1 = (function (){var statearr_28647 = state_28582;
(statearr_28647[(31)] = inst_28568);

return statearr_28647;
})();
if(inst_28569){
var statearr_28648_28712 = state_28582__$1;
(statearr_28648_28712[(1)] = (42));

} else {
var statearr_28649_28713 = state_28582__$1;
(statearr_28649_28713[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (16))){
var inst_28483 = (state_28582[(7)]);
var inst_28485 = cljs.core.chunked_seq_QMARK_.call(null,inst_28483);
var state_28582__$1 = state_28582;
if(inst_28485){
var statearr_28650_28714 = state_28582__$1;
(statearr_28650_28714[(1)] = (19));

} else {
var statearr_28651_28715 = state_28582__$1;
(statearr_28651_28715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (38))){
var inst_28561 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28652_28716 = state_28582__$1;
(statearr_28652_28716[(2)] = inst_28561);

(statearr_28652_28716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (30))){
var state_28582__$1 = state_28582;
var statearr_28653_28717 = state_28582__$1;
(statearr_28653_28717[(2)] = null);

(statearr_28653_28717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (10))){
var inst_28464 = (state_28582[(14)]);
var inst_28466 = (state_28582[(17)]);
var inst_28472 = cljs.core._nth.call(null,inst_28464,inst_28466);
var inst_28473 = cljs.core.nth.call(null,inst_28472,(0),null);
var inst_28474 = cljs.core.nth.call(null,inst_28472,(1),null);
var state_28582__$1 = (function (){var statearr_28654 = state_28582;
(statearr_28654[(26)] = inst_28473);

return statearr_28654;
})();
if(cljs.core.truth_(inst_28474)){
var statearr_28655_28718 = state_28582__$1;
(statearr_28655_28718[(1)] = (13));

} else {
var statearr_28656_28719 = state_28582__$1;
(statearr_28656_28719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (18))){
var inst_28507 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28657_28720 = state_28582__$1;
(statearr_28657_28720[(2)] = inst_28507);

(statearr_28657_28720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (42))){
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28582__$1,(45),dchan);
} else {
if((state_val_28583 === (37))){
var inst_28550 = (state_28582[(23)]);
var inst_28454 = (state_28582[(10)]);
var inst_28541 = (state_28582[(25)]);
var inst_28550__$1 = cljs.core.first.call(null,inst_28541);
var inst_28551 = cljs.core.async.put_BANG_.call(null,inst_28550__$1,inst_28454,done);
var state_28582__$1 = (function (){var statearr_28658 = state_28582;
(statearr_28658[(23)] = inst_28550__$1);

return statearr_28658;
})();
if(cljs.core.truth_(inst_28551)){
var statearr_28659_28721 = state_28582__$1;
(statearr_28659_28721[(1)] = (39));

} else {
var statearr_28660_28722 = state_28582__$1;
(statearr_28660_28722[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (8))){
var inst_28465 = (state_28582[(15)]);
var inst_28466 = (state_28582[(17)]);
var inst_28468 = (inst_28466 < inst_28465);
var inst_28469 = inst_28468;
var state_28582__$1 = state_28582;
if(cljs.core.truth_(inst_28469)){
var statearr_28661_28723 = state_28582__$1;
(statearr_28661_28723[(1)] = (10));

} else {
var statearr_28662_28724 = state_28582__$1;
(statearr_28662_28724[(1)] = (11));

}

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
});})(c__15752__auto___28670,cs,m,dchan,dctr,done))
;
return ((function (switch__15696__auto__,c__15752__auto___28670,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_28666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28666[(0)] = state_machine__15697__auto__);

(statearr_28666[(1)] = (1));

return statearr_28666;
});
var state_machine__15697__auto____1 = (function (state_28582){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_28582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e28667){if((e28667 instanceof Object)){
var ex__15700__auto__ = e28667;
var statearr_28668_28725 = state_28582;
(statearr_28668_28725[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28726 = state_28582;
state_28582 = G__28726;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_28582){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_28582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___28670,cs,m,dchan,dctr,done))
})();
var state__15754__auto__ = (function (){var statearr_28669 = f__15753__auto__.call(null);
(statearr_28669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___28670);

return statearr_28669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___28670,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28728 = {};
return obj28728;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12631__auto__ = m;
if(and__12631__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12631__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13287__auto__ = (((m == null))?null:m);
return (function (){var or__12643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28729){
var map__28734 = p__28729;
var map__28734__$1 = ((cljs.core.seq_QMARK_.call(null,map__28734))?cljs.core.apply.call(null,cljs.core.hash_map,map__28734):map__28734);
var opts = map__28734__$1;
var statearr_28735_28738 = state;
(statearr_28735_28738[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28734,map__28734__$1,opts){
return (function (val){
var statearr_28736_28739 = state;
(statearr_28736_28739[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28734,map__28734__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28737_28740 = state;
(statearr_28737_28740[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28729 = null;
if (arguments.length > 3) {
var G__28741__i = 0, G__28741__a = new Array(arguments.length -  3);
while (G__28741__i < G__28741__a.length) {G__28741__a[G__28741__i] = arguments[G__28741__i + 3]; ++G__28741__i;}
  p__28729 = new cljs.core.IndexedSeq(G__28741__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28729);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28742){
var state = cljs.core.first(arglist__28742);
arglist__28742 = cljs.core.next(arglist__28742);
var cont_block = cljs.core.first(arglist__28742);
arglist__28742 = cljs.core.next(arglist__28742);
var ports = cljs.core.first(arglist__28742);
var p__28729 = cljs.core.rest(arglist__28742);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28729);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28862 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28863){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28863 = meta28863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28862.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28862.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28864){
var self__ = this;
var _28864__$1 = this;
return self__.meta28863;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28864,meta28863__$1){
var self__ = this;
var _28864__$1 = this;
return (new cljs.core.async.t28862(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28863__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28862.cljs$lang$type = true;

cljs.core.async.t28862.cljs$lang$ctorStr = "cljs.core.async/t28862";

cljs.core.async.t28862.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t28862");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28862 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28862(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28863){
return (new cljs.core.async.t28862(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28863));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28862(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__15752__auto___28981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___28981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___28981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28934){
var state_val_28935 = (state_28934[(1)]);
if((state_val_28935 === (7))){
var inst_28878 = (state_28934[(7)]);
var inst_28883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28878);
var state_28934__$1 = state_28934;
var statearr_28936_28982 = state_28934__$1;
(statearr_28936_28982[(2)] = inst_28883);

(statearr_28936_28982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (20))){
var inst_28893 = (state_28934[(8)]);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28934__$1,(23),out,inst_28893);
} else {
if((state_val_28935 === (1))){
var inst_28868 = (state_28934[(9)]);
var inst_28868__$1 = calc_state.call(null);
var inst_28869 = cljs.core.seq_QMARK_.call(null,inst_28868__$1);
var state_28934__$1 = (function (){var statearr_28937 = state_28934;
(statearr_28937[(9)] = inst_28868__$1);

return statearr_28937;
})();
if(inst_28869){
var statearr_28938_28983 = state_28934__$1;
(statearr_28938_28983[(1)] = (2));

} else {
var statearr_28939_28984 = state_28934__$1;
(statearr_28939_28984[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (24))){
var inst_28886 = (state_28934[(10)]);
var inst_28878 = inst_28886;
var state_28934__$1 = (function (){var statearr_28940 = state_28934;
(statearr_28940[(7)] = inst_28878);

return statearr_28940;
})();
var statearr_28941_28985 = state_28934__$1;
(statearr_28941_28985[(2)] = null);

(statearr_28941_28985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (4))){
var inst_28868 = (state_28934[(9)]);
var inst_28874 = (state_28934[(2)]);
var inst_28875 = cljs.core.get.call(null,inst_28874,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28876 = cljs.core.get.call(null,inst_28874,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28877 = cljs.core.get.call(null,inst_28874,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28878 = inst_28868;
var state_28934__$1 = (function (){var statearr_28942 = state_28934;
(statearr_28942[(11)] = inst_28877);

(statearr_28942[(12)] = inst_28876);

(statearr_28942[(13)] = inst_28875);

(statearr_28942[(7)] = inst_28878);

return statearr_28942;
})();
var statearr_28943_28986 = state_28934__$1;
(statearr_28943_28986[(2)] = null);

(statearr_28943_28986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (15))){
var state_28934__$1 = state_28934;
var statearr_28944_28987 = state_28934__$1;
(statearr_28944_28987[(2)] = null);

(statearr_28944_28987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (21))){
var inst_28886 = (state_28934[(10)]);
var inst_28878 = inst_28886;
var state_28934__$1 = (function (){var statearr_28945 = state_28934;
(statearr_28945[(7)] = inst_28878);

return statearr_28945;
})();
var statearr_28946_28988 = state_28934__$1;
(statearr_28946_28988[(2)] = null);

(statearr_28946_28988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (13))){
var inst_28930 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28947_28989 = state_28934__$1;
(statearr_28947_28989[(2)] = inst_28930);

(statearr_28947_28989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (22))){
var inst_28928 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28948_28990 = state_28934__$1;
(statearr_28948_28990[(2)] = inst_28928);

(statearr_28948_28990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (6))){
var inst_28932 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28934__$1,inst_28932);
} else {
if((state_val_28935 === (25))){
var state_28934__$1 = state_28934;
var statearr_28949_28991 = state_28934__$1;
(statearr_28949_28991[(2)] = null);

(statearr_28949_28991[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (17))){
var inst_28908 = (state_28934[(14)]);
var state_28934__$1 = state_28934;
var statearr_28950_28992 = state_28934__$1;
(statearr_28950_28992[(2)] = inst_28908);

(statearr_28950_28992[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (3))){
var inst_28868 = (state_28934[(9)]);
var state_28934__$1 = state_28934;
var statearr_28951_28993 = state_28934__$1;
(statearr_28951_28993[(2)] = inst_28868);

(statearr_28951_28993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (12))){
var inst_28908 = (state_28934[(14)]);
var inst_28889 = (state_28934[(15)]);
var inst_28894 = (state_28934[(16)]);
var inst_28908__$1 = inst_28889.call(null,inst_28894);
var state_28934__$1 = (function (){var statearr_28952 = state_28934;
(statearr_28952[(14)] = inst_28908__$1);

return statearr_28952;
})();
if(cljs.core.truth_(inst_28908__$1)){
var statearr_28953_28994 = state_28934__$1;
(statearr_28953_28994[(1)] = (17));

} else {
var statearr_28954_28995 = state_28934__$1;
(statearr_28954_28995[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (2))){
var inst_28868 = (state_28934[(9)]);
var inst_28871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28868);
var state_28934__$1 = state_28934;
var statearr_28955_28996 = state_28934__$1;
(statearr_28955_28996[(2)] = inst_28871);

(statearr_28955_28996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (23))){
var inst_28919 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28919)){
var statearr_28956_28997 = state_28934__$1;
(statearr_28956_28997[(1)] = (24));

} else {
var statearr_28957_28998 = state_28934__$1;
(statearr_28957_28998[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (19))){
var inst_28916 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28916)){
var statearr_28958_28999 = state_28934__$1;
(statearr_28958_28999[(1)] = (20));

} else {
var statearr_28959_29000 = state_28934__$1;
(statearr_28959_29000[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (11))){
var inst_28893 = (state_28934[(8)]);
var inst_28899 = (inst_28893 == null);
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28899)){
var statearr_28960_29001 = state_28934__$1;
(statearr_28960_29001[(1)] = (14));

} else {
var statearr_28961_29002 = state_28934__$1;
(statearr_28961_29002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (9))){
var inst_28886 = (state_28934[(10)]);
var inst_28886__$1 = (state_28934[(2)]);
var inst_28887 = cljs.core.get.call(null,inst_28886__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28888 = cljs.core.get.call(null,inst_28886__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28889 = cljs.core.get.call(null,inst_28886__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28934__$1 = (function (){var statearr_28962 = state_28934;
(statearr_28962[(17)] = inst_28888);

(statearr_28962[(10)] = inst_28886__$1);

(statearr_28962[(15)] = inst_28889);

return statearr_28962;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28934__$1,(10),inst_28887);
} else {
if((state_val_28935 === (5))){
var inst_28878 = (state_28934[(7)]);
var inst_28881 = cljs.core.seq_QMARK_.call(null,inst_28878);
var state_28934__$1 = state_28934;
if(inst_28881){
var statearr_28963_29003 = state_28934__$1;
(statearr_28963_29003[(1)] = (7));

} else {
var statearr_28964_29004 = state_28934__$1;
(statearr_28964_29004[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (14))){
var inst_28894 = (state_28934[(16)]);
var inst_28901 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28894);
var state_28934__$1 = state_28934;
var statearr_28965_29005 = state_28934__$1;
(statearr_28965_29005[(2)] = inst_28901);

(statearr_28965_29005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (26))){
var inst_28924 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28966_29006 = state_28934__$1;
(statearr_28966_29006[(2)] = inst_28924);

(statearr_28966_29006[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (16))){
var inst_28904 = (state_28934[(2)]);
var inst_28905 = calc_state.call(null);
var inst_28878 = inst_28905;
var state_28934__$1 = (function (){var statearr_28967 = state_28934;
(statearr_28967[(18)] = inst_28904);

(statearr_28967[(7)] = inst_28878);

return statearr_28967;
})();
var statearr_28968_29007 = state_28934__$1;
(statearr_28968_29007[(2)] = null);

(statearr_28968_29007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (10))){
var inst_28894 = (state_28934[(16)]);
var inst_28893 = (state_28934[(8)]);
var inst_28892 = (state_28934[(2)]);
var inst_28893__$1 = cljs.core.nth.call(null,inst_28892,(0),null);
var inst_28894__$1 = cljs.core.nth.call(null,inst_28892,(1),null);
var inst_28895 = (inst_28893__$1 == null);
var inst_28896 = cljs.core._EQ_.call(null,inst_28894__$1,change);
var inst_28897 = (inst_28895) || (inst_28896);
var state_28934__$1 = (function (){var statearr_28969 = state_28934;
(statearr_28969[(16)] = inst_28894__$1);

(statearr_28969[(8)] = inst_28893__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28897)){
var statearr_28970_29008 = state_28934__$1;
(statearr_28970_29008[(1)] = (11));

} else {
var statearr_28971_29009 = state_28934__$1;
(statearr_28971_29009[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (18))){
var inst_28888 = (state_28934[(17)]);
var inst_28889 = (state_28934[(15)]);
var inst_28894 = (state_28934[(16)]);
var inst_28911 = cljs.core.empty_QMARK_.call(null,inst_28889);
var inst_28912 = inst_28888.call(null,inst_28894);
var inst_28913 = cljs.core.not.call(null,inst_28912);
var inst_28914 = (inst_28911) && (inst_28913);
var state_28934__$1 = state_28934;
var statearr_28972_29010 = state_28934__$1;
(statearr_28972_29010[(2)] = inst_28914);

(statearr_28972_29010[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (8))){
var inst_28878 = (state_28934[(7)]);
var state_28934__$1 = state_28934;
var statearr_28973_29011 = state_28934__$1;
(statearr_28973_29011[(2)] = inst_28878);

(statearr_28973_29011[(1)] = (9));


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
});})(c__15752__auto___28981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15696__auto__,c__15752__auto___28981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = state_machine__15697__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var state_machine__15697__auto____1 = (function (state_28934){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_28934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e28978){if((e28978 instanceof Object)){
var ex__15700__auto__ = e28978;
var statearr_28979_29012 = state_28934;
(statearr_28979_29012[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29013 = state_28934;
state_28934 = G__29013;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_28934){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_28934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___28981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15754__auto__ = (function (){var statearr_28980 = f__15753__auto__.call(null);
(statearr_28980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___28981);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___28981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29015 = {};
return obj29015;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12631__auto__ = p;
if(and__12631__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12631__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13287__auto__ = (((p == null))?null:p);
return (function (){var or__12643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12631__auto__ = p;
if(and__12631__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12631__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13287__auto__ = (((p == null))?null:p);
return (function (){var or__12643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12631__auto__ = p;
if(and__12631__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12631__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13287__auto__ = (((p == null))?null:p);
return (function (){var or__12643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12631__auto__ = p;
if(and__12631__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12631__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13287__auto__ = (((p == null))?null:p);
return (function (){var or__12643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13287__auto__)]);
if(or__12643__auto__){
return or__12643__auto__;
} else {
var or__12643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12643__auto____$1){
return or__12643__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12643__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12643__auto__)){
return or__12643__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12643__auto__,mults){
return (function (p1__29016_SHARP_){
if(cljs.core.truth_(p1__29016_SHARP_.call(null,topic))){
return p1__29016_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29016_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12643__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29139 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29139 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29140){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29140 = meta29140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29139.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29139.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29139.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29139.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29139.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29139.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29141){
var self__ = this;
var _29141__$1 = this;
return self__.meta29140;
});})(mults,ensure_mult))
;

cljs.core.async.t29139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29141,meta29140__$1){
var self__ = this;
var _29141__$1 = this;
return (new cljs.core.async.t29139(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29140__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29139.cljs$lang$type = true;

cljs.core.async.t29139.cljs$lang$ctorStr = "cljs.core.async/t29139";

cljs.core.async.t29139.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t29139");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29139 = ((function (mults,ensure_mult){
return (function __GT_t29139(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29140){
return (new cljs.core.async.t29139(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29140));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29139(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__15752__auto___29261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___29261,mults,ensure_mult,p){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___29261,mults,ensure_mult,p){
return (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (7))){
var inst_29209 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29215_29262 = state_29213__$1;
(statearr_29215_29262[(2)] = inst_29209);

(statearr_29215_29262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (20))){
var state_29213__$1 = state_29213;
var statearr_29216_29263 = state_29213__$1;
(statearr_29216_29263[(2)] = null);

(statearr_29216_29263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (1))){
var state_29213__$1 = state_29213;
var statearr_29217_29264 = state_29213__$1;
(statearr_29217_29264[(2)] = null);

(statearr_29217_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (24))){
var inst_29192 = (state_29213[(7)]);
var inst_29201 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29192);
var state_29213__$1 = state_29213;
var statearr_29218_29265 = state_29213__$1;
(statearr_29218_29265[(2)] = inst_29201);

(statearr_29218_29265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (4))){
var inst_29144 = (state_29213[(8)]);
var inst_29144__$1 = (state_29213[(2)]);
var inst_29145 = (inst_29144__$1 == null);
var state_29213__$1 = (function (){var statearr_29219 = state_29213;
(statearr_29219[(8)] = inst_29144__$1);

return statearr_29219;
})();
if(cljs.core.truth_(inst_29145)){
var statearr_29220_29266 = state_29213__$1;
(statearr_29220_29266[(1)] = (5));

} else {
var statearr_29221_29267 = state_29213__$1;
(statearr_29221_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (15))){
var inst_29186 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29222_29268 = state_29213__$1;
(statearr_29222_29268[(2)] = inst_29186);

(statearr_29222_29268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (21))){
var inst_29206 = (state_29213[(2)]);
var state_29213__$1 = (function (){var statearr_29223 = state_29213;
(statearr_29223[(9)] = inst_29206);

return statearr_29223;
})();
var statearr_29224_29269 = state_29213__$1;
(statearr_29224_29269[(2)] = null);

(statearr_29224_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (13))){
var inst_29168 = (state_29213[(10)]);
var inst_29170 = cljs.core.chunked_seq_QMARK_.call(null,inst_29168);
var state_29213__$1 = state_29213;
if(inst_29170){
var statearr_29225_29270 = state_29213__$1;
(statearr_29225_29270[(1)] = (16));

} else {
var statearr_29226_29271 = state_29213__$1;
(statearr_29226_29271[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (22))){
var inst_29198 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
if(cljs.core.truth_(inst_29198)){
var statearr_29227_29272 = state_29213__$1;
(statearr_29227_29272[(1)] = (23));

} else {
var statearr_29228_29273 = state_29213__$1;
(statearr_29228_29273[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (6))){
var inst_29194 = (state_29213[(11)]);
var inst_29192 = (state_29213[(7)]);
var inst_29144 = (state_29213[(8)]);
var inst_29192__$1 = topic_fn.call(null,inst_29144);
var inst_29193 = cljs.core.deref.call(null,mults);
var inst_29194__$1 = cljs.core.get.call(null,inst_29193,inst_29192__$1);
var state_29213__$1 = (function (){var statearr_29229 = state_29213;
(statearr_29229[(11)] = inst_29194__$1);

(statearr_29229[(7)] = inst_29192__$1);

return statearr_29229;
})();
if(cljs.core.truth_(inst_29194__$1)){
var statearr_29230_29274 = state_29213__$1;
(statearr_29230_29274[(1)] = (19));

} else {
var statearr_29231_29275 = state_29213__$1;
(statearr_29231_29275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (25))){
var inst_29203 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29232_29276 = state_29213__$1;
(statearr_29232_29276[(2)] = inst_29203);

(statearr_29232_29276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (17))){
var inst_29168 = (state_29213[(10)]);
var inst_29177 = cljs.core.first.call(null,inst_29168);
var inst_29178 = cljs.core.async.muxch_STAR_.call(null,inst_29177);
var inst_29179 = cljs.core.async.close_BANG_.call(null,inst_29178);
var inst_29180 = cljs.core.next.call(null,inst_29168);
var inst_29154 = inst_29180;
var inst_29155 = null;
var inst_29156 = (0);
var inst_29157 = (0);
var state_29213__$1 = (function (){var statearr_29233 = state_29213;
(statearr_29233[(12)] = inst_29155);

(statearr_29233[(13)] = inst_29156);

(statearr_29233[(14)] = inst_29154);

(statearr_29233[(15)] = inst_29157);

(statearr_29233[(16)] = inst_29179);

return statearr_29233;
})();
var statearr_29234_29277 = state_29213__$1;
(statearr_29234_29277[(2)] = null);

(statearr_29234_29277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (3))){
var inst_29211 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else {
if((state_val_29214 === (12))){
var inst_29188 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29235_29278 = state_29213__$1;
(statearr_29235_29278[(2)] = inst_29188);

(statearr_29235_29278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (2))){
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(4),ch);
} else {
if((state_val_29214 === (23))){
var state_29213__$1 = state_29213;
var statearr_29236_29279 = state_29213__$1;
(statearr_29236_29279[(2)] = null);

(statearr_29236_29279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (19))){
var inst_29194 = (state_29213[(11)]);
var inst_29144 = (state_29213[(8)]);
var inst_29196 = cljs.core.async.muxch_STAR_.call(null,inst_29194);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29213__$1,(22),inst_29196,inst_29144);
} else {
if((state_val_29214 === (11))){
var inst_29154 = (state_29213[(14)]);
var inst_29168 = (state_29213[(10)]);
var inst_29168__$1 = cljs.core.seq.call(null,inst_29154);
var state_29213__$1 = (function (){var statearr_29237 = state_29213;
(statearr_29237[(10)] = inst_29168__$1);

return statearr_29237;
})();
if(inst_29168__$1){
var statearr_29238_29280 = state_29213__$1;
(statearr_29238_29280[(1)] = (13));

} else {
var statearr_29239_29281 = state_29213__$1;
(statearr_29239_29281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (9))){
var inst_29190 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29240_29282 = state_29213__$1;
(statearr_29240_29282[(2)] = inst_29190);

(statearr_29240_29282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (5))){
var inst_29151 = cljs.core.deref.call(null,mults);
var inst_29152 = cljs.core.vals.call(null,inst_29151);
var inst_29153 = cljs.core.seq.call(null,inst_29152);
var inst_29154 = inst_29153;
var inst_29155 = null;
var inst_29156 = (0);
var inst_29157 = (0);
var state_29213__$1 = (function (){var statearr_29241 = state_29213;
(statearr_29241[(12)] = inst_29155);

(statearr_29241[(13)] = inst_29156);

(statearr_29241[(14)] = inst_29154);

(statearr_29241[(15)] = inst_29157);

return statearr_29241;
})();
var statearr_29242_29283 = state_29213__$1;
(statearr_29242_29283[(2)] = null);

(statearr_29242_29283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (14))){
var state_29213__$1 = state_29213;
var statearr_29246_29284 = state_29213__$1;
(statearr_29246_29284[(2)] = null);

(statearr_29246_29284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (16))){
var inst_29168 = (state_29213[(10)]);
var inst_29172 = cljs.core.chunk_first.call(null,inst_29168);
var inst_29173 = cljs.core.chunk_rest.call(null,inst_29168);
var inst_29174 = cljs.core.count.call(null,inst_29172);
var inst_29154 = inst_29173;
var inst_29155 = inst_29172;
var inst_29156 = inst_29174;
var inst_29157 = (0);
var state_29213__$1 = (function (){var statearr_29247 = state_29213;
(statearr_29247[(12)] = inst_29155);

(statearr_29247[(13)] = inst_29156);

(statearr_29247[(14)] = inst_29154);

(statearr_29247[(15)] = inst_29157);

return statearr_29247;
})();
var statearr_29248_29285 = state_29213__$1;
(statearr_29248_29285[(2)] = null);

(statearr_29248_29285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (10))){
var inst_29155 = (state_29213[(12)]);
var inst_29156 = (state_29213[(13)]);
var inst_29154 = (state_29213[(14)]);
var inst_29157 = (state_29213[(15)]);
var inst_29162 = cljs.core._nth.call(null,inst_29155,inst_29157);
var inst_29163 = cljs.core.async.muxch_STAR_.call(null,inst_29162);
var inst_29164 = cljs.core.async.close_BANG_.call(null,inst_29163);
var inst_29165 = (inst_29157 + (1));
var tmp29243 = inst_29155;
var tmp29244 = inst_29156;
var tmp29245 = inst_29154;
var inst_29154__$1 = tmp29245;
var inst_29155__$1 = tmp29243;
var inst_29156__$1 = tmp29244;
var inst_29157__$1 = inst_29165;
var state_29213__$1 = (function (){var statearr_29249 = state_29213;
(statearr_29249[(12)] = inst_29155__$1);

(statearr_29249[(13)] = inst_29156__$1);

(statearr_29249[(14)] = inst_29154__$1);

(statearr_29249[(15)] = inst_29157__$1);

(statearr_29249[(17)] = inst_29164);

return statearr_29249;
})();
var statearr_29250_29286 = state_29213__$1;
(statearr_29250_29286[(2)] = null);

(statearr_29250_29286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (18))){
var inst_29183 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29251_29287 = state_29213__$1;
(statearr_29251_29287[(2)] = inst_29183);

(statearr_29251_29287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (8))){
var inst_29156 = (state_29213[(13)]);
var inst_29157 = (state_29213[(15)]);
var inst_29159 = (inst_29157 < inst_29156);
var inst_29160 = inst_29159;
var state_29213__$1 = state_29213;
if(cljs.core.truth_(inst_29160)){
var statearr_29252_29288 = state_29213__$1;
(statearr_29252_29288[(1)] = (10));

} else {
var statearr_29253_29289 = state_29213__$1;
(statearr_29253_29289[(1)] = (11));

}

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
});})(c__15752__auto___29261,mults,ensure_mult,p))
;
return ((function (switch__15696__auto__,c__15752__auto___29261,mults,ensure_mult,p){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29257[(0)] = state_machine__15697__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var state_machine__15697__auto____1 = (function (state_29213){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_29213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e29258){if((e29258 instanceof Object)){
var ex__15700__auto__ = e29258;
var statearr_29259_29290 = state_29213;
(statearr_29259_29290[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29291 = state_29213;
state_29213 = G__29291;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___29261,mults,ensure_mult,p))
})();
var state__15754__auto__ = (function (){var statearr_29260 = f__15753__auto__.call(null);
(statearr_29260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___29261);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___29261,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15752__auto___29428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___29428,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___29428,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29398){
var state_val_29399 = (state_29398[(1)]);
if((state_val_29399 === (7))){
var state_29398__$1 = state_29398;
var statearr_29400_29429 = state_29398__$1;
(statearr_29400_29429[(2)] = null);

(statearr_29400_29429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (1))){
var state_29398__$1 = state_29398;
var statearr_29401_29430 = state_29398__$1;
(statearr_29401_29430[(2)] = null);

(statearr_29401_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (4))){
var inst_29362 = (state_29398[(7)]);
var inst_29364 = (inst_29362 < cnt);
var state_29398__$1 = state_29398;
if(cljs.core.truth_(inst_29364)){
var statearr_29402_29431 = state_29398__$1;
(statearr_29402_29431[(1)] = (6));

} else {
var statearr_29403_29432 = state_29398__$1;
(statearr_29403_29432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (15))){
var inst_29394 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29404_29433 = state_29398__$1;
(statearr_29404_29433[(2)] = inst_29394);

(statearr_29404_29433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (13))){
var inst_29387 = cljs.core.async.close_BANG_.call(null,out);
var state_29398__$1 = state_29398;
var statearr_29405_29434 = state_29398__$1;
(statearr_29405_29434[(2)] = inst_29387);

(statearr_29405_29434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (6))){
var state_29398__$1 = state_29398;
var statearr_29406_29435 = state_29398__$1;
(statearr_29406_29435[(2)] = null);

(statearr_29406_29435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (3))){
var inst_29396 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29398__$1,inst_29396);
} else {
if((state_val_29399 === (12))){
var inst_29384 = (state_29398[(8)]);
var inst_29384__$1 = (state_29398[(2)]);
var inst_29385 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29384__$1);
var state_29398__$1 = (function (){var statearr_29407 = state_29398;
(statearr_29407[(8)] = inst_29384__$1);

return statearr_29407;
})();
if(cljs.core.truth_(inst_29385)){
var statearr_29408_29436 = state_29398__$1;
(statearr_29408_29436[(1)] = (13));

} else {
var statearr_29409_29437 = state_29398__$1;
(statearr_29409_29437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (2))){
var inst_29361 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29362 = (0);
var state_29398__$1 = (function (){var statearr_29410 = state_29398;
(statearr_29410[(7)] = inst_29362);

(statearr_29410[(9)] = inst_29361);

return statearr_29410;
})();
var statearr_29411_29438 = state_29398__$1;
(statearr_29411_29438[(2)] = null);

(statearr_29411_29438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (11))){
var inst_29362 = (state_29398[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29398,(10),Object,null,(9));
var inst_29371 = chs__$1.call(null,inst_29362);
var inst_29372 = done.call(null,inst_29362);
var inst_29373 = cljs.core.async.take_BANG_.call(null,inst_29371,inst_29372);
var state_29398__$1 = state_29398;
var statearr_29412_29439 = state_29398__$1;
(statearr_29412_29439[(2)] = inst_29373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29398__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (9))){
var inst_29362 = (state_29398[(7)]);
var inst_29375 = (state_29398[(2)]);
var inst_29376 = (inst_29362 + (1));
var inst_29362__$1 = inst_29376;
var state_29398__$1 = (function (){var statearr_29413 = state_29398;
(statearr_29413[(10)] = inst_29375);

(statearr_29413[(7)] = inst_29362__$1);

return statearr_29413;
})();
var statearr_29414_29440 = state_29398__$1;
(statearr_29414_29440[(2)] = null);

(statearr_29414_29440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (5))){
var inst_29382 = (state_29398[(2)]);
var state_29398__$1 = (function (){var statearr_29415 = state_29398;
(statearr_29415[(11)] = inst_29382);

return statearr_29415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29398__$1,(12),dchan);
} else {
if((state_val_29399 === (14))){
var inst_29384 = (state_29398[(8)]);
var inst_29389 = cljs.core.apply.call(null,f,inst_29384);
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29398__$1,(16),out,inst_29389);
} else {
if((state_val_29399 === (16))){
var inst_29391 = (state_29398[(2)]);
var state_29398__$1 = (function (){var statearr_29416 = state_29398;
(statearr_29416[(12)] = inst_29391);

return statearr_29416;
})();
var statearr_29417_29441 = state_29398__$1;
(statearr_29417_29441[(2)] = null);

(statearr_29417_29441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (10))){
var inst_29366 = (state_29398[(2)]);
var inst_29367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29398__$1 = (function (){var statearr_29418 = state_29398;
(statearr_29418[(13)] = inst_29366);

return statearr_29418;
})();
var statearr_29419_29442 = state_29398__$1;
(statearr_29419_29442[(2)] = inst_29367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29398__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (8))){
var inst_29380 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29420_29443 = state_29398__$1;
(statearr_29420_29443[(2)] = inst_29380);

(statearr_29420_29443[(1)] = (5));


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
});})(c__15752__auto___29428,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15696__auto__,c__15752__auto___29428,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_29424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29424[(0)] = state_machine__15697__auto__);

(statearr_29424[(1)] = (1));

return statearr_29424;
});
var state_machine__15697__auto____1 = (function (state_29398){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_29398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e29425){if((e29425 instanceof Object)){
var ex__15700__auto__ = e29425;
var statearr_29426_29444 = state_29398;
(statearr_29426_29444[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29445 = state_29398;
state_29398 = G__29445;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_29398){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_29398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___29428,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15754__auto__ = (function (){var statearr_29427 = f__15753__auto__.call(null);
(statearr_29427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___29428);

return statearr_29427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___29428,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15752__auto___29553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___29553,out){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___29553,out){
return (function (state_29529){
var state_val_29530 = (state_29529[(1)]);
if((state_val_29530 === (7))){
var inst_29508 = (state_29529[(7)]);
var inst_29509 = (state_29529[(8)]);
var inst_29508__$1 = (state_29529[(2)]);
var inst_29509__$1 = cljs.core.nth.call(null,inst_29508__$1,(0),null);
var inst_29510 = cljs.core.nth.call(null,inst_29508__$1,(1),null);
var inst_29511 = (inst_29509__$1 == null);
var state_29529__$1 = (function (){var statearr_29531 = state_29529;
(statearr_29531[(7)] = inst_29508__$1);

(statearr_29531[(8)] = inst_29509__$1);

(statearr_29531[(9)] = inst_29510);

return statearr_29531;
})();
if(cljs.core.truth_(inst_29511)){
var statearr_29532_29554 = state_29529__$1;
(statearr_29532_29554[(1)] = (8));

} else {
var statearr_29533_29555 = state_29529__$1;
(statearr_29533_29555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (1))){
var inst_29500 = cljs.core.vec.call(null,chs);
var inst_29501 = inst_29500;
var state_29529__$1 = (function (){var statearr_29534 = state_29529;
(statearr_29534[(10)] = inst_29501);

return statearr_29534;
})();
var statearr_29535_29556 = state_29529__$1;
(statearr_29535_29556[(2)] = null);

(statearr_29535_29556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (4))){
var inst_29501 = (state_29529[(10)]);
var state_29529__$1 = state_29529;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29529__$1,(7),inst_29501);
} else {
if((state_val_29530 === (6))){
var inst_29525 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
var statearr_29536_29557 = state_29529__$1;
(statearr_29536_29557[(2)] = inst_29525);

(statearr_29536_29557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (3))){
var inst_29527 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29529__$1,inst_29527);
} else {
if((state_val_29530 === (2))){
var inst_29501 = (state_29529[(10)]);
var inst_29503 = cljs.core.count.call(null,inst_29501);
var inst_29504 = (inst_29503 > (0));
var state_29529__$1 = state_29529;
if(cljs.core.truth_(inst_29504)){
var statearr_29538_29558 = state_29529__$1;
(statearr_29538_29558[(1)] = (4));

} else {
var statearr_29539_29559 = state_29529__$1;
(statearr_29539_29559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (11))){
var inst_29501 = (state_29529[(10)]);
var inst_29518 = (state_29529[(2)]);
var tmp29537 = inst_29501;
var inst_29501__$1 = tmp29537;
var state_29529__$1 = (function (){var statearr_29540 = state_29529;
(statearr_29540[(11)] = inst_29518);

(statearr_29540[(10)] = inst_29501__$1);

return statearr_29540;
})();
var statearr_29541_29560 = state_29529__$1;
(statearr_29541_29560[(2)] = null);

(statearr_29541_29560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (9))){
var inst_29509 = (state_29529[(8)]);
var state_29529__$1 = state_29529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29529__$1,(11),out,inst_29509);
} else {
if((state_val_29530 === (5))){
var inst_29523 = cljs.core.async.close_BANG_.call(null,out);
var state_29529__$1 = state_29529;
var statearr_29542_29561 = state_29529__$1;
(statearr_29542_29561[(2)] = inst_29523);

(statearr_29542_29561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (10))){
var inst_29521 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
var statearr_29543_29562 = state_29529__$1;
(statearr_29543_29562[(2)] = inst_29521);

(statearr_29543_29562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (8))){
var inst_29501 = (state_29529[(10)]);
var inst_29508 = (state_29529[(7)]);
var inst_29509 = (state_29529[(8)]);
var inst_29510 = (state_29529[(9)]);
var inst_29513 = (function (){var c = inst_29510;
var v = inst_29509;
var vec__29506 = inst_29508;
var cs = inst_29501;
return ((function (c,v,vec__29506,cs,inst_29501,inst_29508,inst_29509,inst_29510,state_val_29530,c__15752__auto___29553,out){
return (function (p1__29446_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29446_SHARP_);
});
;})(c,v,vec__29506,cs,inst_29501,inst_29508,inst_29509,inst_29510,state_val_29530,c__15752__auto___29553,out))
})();
var inst_29514 = cljs.core.filterv.call(null,inst_29513,inst_29501);
var inst_29501__$1 = inst_29514;
var state_29529__$1 = (function (){var statearr_29544 = state_29529;
(statearr_29544[(10)] = inst_29501__$1);

return statearr_29544;
})();
var statearr_29545_29563 = state_29529__$1;
(statearr_29545_29563[(2)] = null);

(statearr_29545_29563[(1)] = (2));


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
});})(c__15752__auto___29553,out))
;
return ((function (switch__15696__auto__,c__15752__auto___29553,out){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29549[(0)] = state_machine__15697__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var state_machine__15697__auto____1 = (function (state_29529){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_29529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__15700__auto__ = e29550;
var statearr_29551_29564 = state_29529;
(statearr_29551_29564[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29565 = state_29529;
state_29529 = G__29565;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_29529){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_29529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___29553,out))
})();
var state__15754__auto__ = (function (){var statearr_29552 = f__15753__auto__.call(null);
(statearr_29552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___29553);

return statearr_29552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___29553,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15752__auto___29658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___29658,out){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___29658,out){
return (function (state_29635){
var state_val_29636 = (state_29635[(1)]);
if((state_val_29636 === (7))){
var inst_29617 = (state_29635[(7)]);
var inst_29617__$1 = (state_29635[(2)]);
var inst_29618 = (inst_29617__$1 == null);
var inst_29619 = cljs.core.not.call(null,inst_29618);
var state_29635__$1 = (function (){var statearr_29637 = state_29635;
(statearr_29637[(7)] = inst_29617__$1);

return statearr_29637;
})();
if(inst_29619){
var statearr_29638_29659 = state_29635__$1;
(statearr_29638_29659[(1)] = (8));

} else {
var statearr_29639_29660 = state_29635__$1;
(statearr_29639_29660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (1))){
var inst_29612 = (0);
var state_29635__$1 = (function (){var statearr_29640 = state_29635;
(statearr_29640[(8)] = inst_29612);

return statearr_29640;
})();
var statearr_29641_29661 = state_29635__$1;
(statearr_29641_29661[(2)] = null);

(statearr_29641_29661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (4))){
var state_29635__$1 = state_29635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29635__$1,(7),ch);
} else {
if((state_val_29636 === (6))){
var inst_29630 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
var statearr_29642_29662 = state_29635__$1;
(statearr_29642_29662[(2)] = inst_29630);

(statearr_29642_29662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (3))){
var inst_29632 = (state_29635[(2)]);
var inst_29633 = cljs.core.async.close_BANG_.call(null,out);
var state_29635__$1 = (function (){var statearr_29643 = state_29635;
(statearr_29643[(9)] = inst_29632);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29635__$1,inst_29633);
} else {
if((state_val_29636 === (2))){
var inst_29612 = (state_29635[(8)]);
var inst_29614 = (inst_29612 < n);
var state_29635__$1 = state_29635;
if(cljs.core.truth_(inst_29614)){
var statearr_29644_29663 = state_29635__$1;
(statearr_29644_29663[(1)] = (4));

} else {
var statearr_29645_29664 = state_29635__$1;
(statearr_29645_29664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (11))){
var inst_29612 = (state_29635[(8)]);
var inst_29622 = (state_29635[(2)]);
var inst_29623 = (inst_29612 + (1));
var inst_29612__$1 = inst_29623;
var state_29635__$1 = (function (){var statearr_29646 = state_29635;
(statearr_29646[(8)] = inst_29612__$1);

(statearr_29646[(10)] = inst_29622);

return statearr_29646;
})();
var statearr_29647_29665 = state_29635__$1;
(statearr_29647_29665[(2)] = null);

(statearr_29647_29665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (9))){
var state_29635__$1 = state_29635;
var statearr_29648_29666 = state_29635__$1;
(statearr_29648_29666[(2)] = null);

(statearr_29648_29666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (5))){
var state_29635__$1 = state_29635;
var statearr_29649_29667 = state_29635__$1;
(statearr_29649_29667[(2)] = null);

(statearr_29649_29667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (10))){
var inst_29627 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
var statearr_29650_29668 = state_29635__$1;
(statearr_29650_29668[(2)] = inst_29627);

(statearr_29650_29668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (8))){
var inst_29617 = (state_29635[(7)]);
var state_29635__$1 = state_29635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29635__$1,(11),out,inst_29617);
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
});})(c__15752__auto___29658,out))
;
return ((function (switch__15696__auto__,c__15752__auto___29658,out){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_29654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29654[(0)] = state_machine__15697__auto__);

(statearr_29654[(1)] = (1));

return statearr_29654;
});
var state_machine__15697__auto____1 = (function (state_29635){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_29635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e29655){if((e29655 instanceof Object)){
var ex__15700__auto__ = e29655;
var statearr_29656_29669 = state_29635;
(statearr_29656_29669[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29670 = state_29635;
state_29635 = G__29670;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_29635){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_29635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___29658,out))
})();
var state__15754__auto__ = (function (){var statearr_29657 = f__15753__auto__.call(null);
(statearr_29657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___29658);

return statearr_29657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___29658,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t29678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29678 = (function (ch,f,map_LT_,meta29679){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29679 = meta29679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29681 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29681 = (function (fn1,_,meta29679,map_LT_,f,ch,meta29682){
this.fn1 = fn1;
this._ = _;
this.meta29679 = meta29679;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29682 = meta29682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29681.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29671_SHARP_){
return f1.call(null,(((p1__29671_SHARP_ == null))?null:self__.f.call(null,p1__29671_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29683){
var self__ = this;
var _29683__$1 = this;
return self__.meta29682;
});})(___$1))
;

cljs.core.async.t29681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29683,meta29682__$1){
var self__ = this;
var _29683__$1 = this;
return (new cljs.core.async.t29681(self__.fn1,self__._,self__.meta29679,self__.map_LT_,self__.f,self__.ch,meta29682__$1));
});})(___$1))
;

cljs.core.async.t29681.cljs$lang$type = true;

cljs.core.async.t29681.cljs$lang$ctorStr = "cljs.core.async/t29681";

cljs.core.async.t29681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t29681");
});})(___$1))
;

cljs.core.async.__GT_t29681 = ((function (___$1){
return (function __GT_t29681(fn1__$1,___$2,meta29679__$1,map_LT___$1,f__$1,ch__$1,meta29682){
return (new cljs.core.async.t29681(fn1__$1,___$2,meta29679__$1,map_LT___$1,f__$1,ch__$1,meta29682));
});})(___$1))
;

}

return (new cljs.core.async.t29681(fn1,___$1,self__.meta29679,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12631__auto__ = ret;
if(cljs.core.truth_(and__12631__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12631__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29680){
var self__ = this;
var _29680__$1 = this;
return self__.meta29679;
});

cljs.core.async.t29678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29680,meta29679__$1){
var self__ = this;
var _29680__$1 = this;
return (new cljs.core.async.t29678(self__.ch,self__.f,self__.map_LT_,meta29679__$1));
});

cljs.core.async.t29678.cljs$lang$type = true;

cljs.core.async.t29678.cljs$lang$ctorStr = "cljs.core.async/t29678";

cljs.core.async.t29678.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t29678");
});

cljs.core.async.__GT_t29678 = (function __GT_t29678(ch__$1,f__$1,map_LT___$1,meta29679){
return (new cljs.core.async.t29678(ch__$1,f__$1,map_LT___$1,meta29679));
});

}

return (new cljs.core.async.t29678(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29687 = (function (ch,f,map_GT_,meta29688){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29688 = meta29688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29687.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29689){
var self__ = this;
var _29689__$1 = this;
return self__.meta29688;
});

cljs.core.async.t29687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29689,meta29688__$1){
var self__ = this;
var _29689__$1 = this;
return (new cljs.core.async.t29687(self__.ch,self__.f,self__.map_GT_,meta29688__$1));
});

cljs.core.async.t29687.cljs$lang$type = true;

cljs.core.async.t29687.cljs$lang$ctorStr = "cljs.core.async/t29687";

cljs.core.async.t29687.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t29687");
});

cljs.core.async.__GT_t29687 = (function __GT_t29687(ch__$1,f__$1,map_GT___$1,meta29688){
return (new cljs.core.async.t29687(ch__$1,f__$1,map_GT___$1,meta29688));
});

}

return (new cljs.core.async.t29687(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29693 = (function (ch,p,filter_GT_,meta29694){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29694 = meta29694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29693.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29695){
var self__ = this;
var _29695__$1 = this;
return self__.meta29694;
});

cljs.core.async.t29693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29695,meta29694__$1){
var self__ = this;
var _29695__$1 = this;
return (new cljs.core.async.t29693(self__.ch,self__.p,self__.filter_GT_,meta29694__$1));
});

cljs.core.async.t29693.cljs$lang$type = true;

cljs.core.async.t29693.cljs$lang$ctorStr = "cljs.core.async/t29693";

cljs.core.async.t29693.cljs$lang$ctorPrWriter = (function (this__13230__auto__,writer__13231__auto__,opt__13232__auto__){
return cljs.core._write.call(null,writer__13231__auto__,"cljs.core.async/t29693");
});

cljs.core.async.__GT_t29693 = (function __GT_t29693(ch__$1,p__$1,filter_GT___$1,meta29694){
return (new cljs.core.async.t29693(ch__$1,p__$1,filter_GT___$1,meta29694));
});

}

return (new cljs.core.async.t29693(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/lvh/Projects/rackspace/chutesnrackers/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15752__auto___29778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___29778,out){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___29778,out){
return (function (state_29757){
var state_val_29758 = (state_29757[(1)]);
if((state_val_29758 === (7))){
var inst_29753 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29759_29779 = state_29757__$1;
(statearr_29759_29779[(2)] = inst_29753);

(statearr_29759_29779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (1))){
var state_29757__$1 = state_29757;
var statearr_29760_29780 = state_29757__$1;
(statearr_29760_29780[(2)] = null);

(statearr_29760_29780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (4))){
var inst_29739 = (state_29757[(7)]);
var inst_29739__$1 = (state_29757[(2)]);
var inst_29740 = (inst_29739__$1 == null);
var state_29757__$1 = (function (){var statearr_29761 = state_29757;
(statearr_29761[(7)] = inst_29739__$1);

return statearr_29761;
})();
if(cljs.core.truth_(inst_29740)){
var statearr_29762_29781 = state_29757__$1;
(statearr_29762_29781[(1)] = (5));

} else {
var statearr_29763_29782 = state_29757__$1;
(statearr_29763_29782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (6))){
var inst_29739 = (state_29757[(7)]);
var inst_29744 = p.call(null,inst_29739);
var state_29757__$1 = state_29757;
if(cljs.core.truth_(inst_29744)){
var statearr_29764_29783 = state_29757__$1;
(statearr_29764_29783[(1)] = (8));

} else {
var statearr_29765_29784 = state_29757__$1;
(statearr_29765_29784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (3))){
var inst_29755 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29757__$1,inst_29755);
} else {
if((state_val_29758 === (2))){
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29757__$1,(4),ch);
} else {
if((state_val_29758 === (11))){
var inst_29747 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29766_29785 = state_29757__$1;
(statearr_29766_29785[(2)] = inst_29747);

(statearr_29766_29785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (9))){
var state_29757__$1 = state_29757;
var statearr_29767_29786 = state_29757__$1;
(statearr_29767_29786[(2)] = null);

(statearr_29767_29786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (5))){
var inst_29742 = cljs.core.async.close_BANG_.call(null,out);
var state_29757__$1 = state_29757;
var statearr_29768_29787 = state_29757__$1;
(statearr_29768_29787[(2)] = inst_29742);

(statearr_29768_29787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (10))){
var inst_29750 = (state_29757[(2)]);
var state_29757__$1 = (function (){var statearr_29769 = state_29757;
(statearr_29769[(8)] = inst_29750);

return statearr_29769;
})();
var statearr_29770_29788 = state_29757__$1;
(statearr_29770_29788[(2)] = null);

(statearr_29770_29788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (8))){
var inst_29739 = (state_29757[(7)]);
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29757__$1,(11),out,inst_29739);
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
});})(c__15752__auto___29778,out))
;
return ((function (switch__15696__auto__,c__15752__auto___29778,out){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_29774 = [null,null,null,null,null,null,null,null,null];
(statearr_29774[(0)] = state_machine__15697__auto__);

(statearr_29774[(1)] = (1));

return statearr_29774;
});
var state_machine__15697__auto____1 = (function (state_29757){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_29757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e29775){if((e29775 instanceof Object)){
var ex__15700__auto__ = e29775;
var statearr_29776_29789 = state_29757;
(statearr_29776_29789[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29790 = state_29757;
state_29757 = G__29790;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_29757){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_29757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___29778,out))
})();
var state__15754__auto__ = (function (){var statearr_29777 = f__15753__auto__.call(null);
(statearr_29777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___29778);

return statearr_29777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___29778,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__15752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto__){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto__){
return (function (state_29956){
var state_val_29957 = (state_29956[(1)]);
if((state_val_29957 === (7))){
var inst_29952 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29958_29999 = state_29956__$1;
(statearr_29958_29999[(2)] = inst_29952);

(statearr_29958_29999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (20))){
var inst_29922 = (state_29956[(7)]);
var inst_29933 = (state_29956[(2)]);
var inst_29934 = cljs.core.next.call(null,inst_29922);
var inst_29908 = inst_29934;
var inst_29909 = null;
var inst_29910 = (0);
var inst_29911 = (0);
var state_29956__$1 = (function (){var statearr_29959 = state_29956;
(statearr_29959[(8)] = inst_29909);

(statearr_29959[(9)] = inst_29908);

(statearr_29959[(10)] = inst_29911);

(statearr_29959[(11)] = inst_29910);

(statearr_29959[(12)] = inst_29933);

return statearr_29959;
})();
var statearr_29960_30000 = state_29956__$1;
(statearr_29960_30000[(2)] = null);

(statearr_29960_30000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (1))){
var state_29956__$1 = state_29956;
var statearr_29961_30001 = state_29956__$1;
(statearr_29961_30001[(2)] = null);

(statearr_29961_30001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (4))){
var inst_29897 = (state_29956[(13)]);
var inst_29897__$1 = (state_29956[(2)]);
var inst_29898 = (inst_29897__$1 == null);
var state_29956__$1 = (function (){var statearr_29962 = state_29956;
(statearr_29962[(13)] = inst_29897__$1);

return statearr_29962;
})();
if(cljs.core.truth_(inst_29898)){
var statearr_29963_30002 = state_29956__$1;
(statearr_29963_30002[(1)] = (5));

} else {
var statearr_29964_30003 = state_29956__$1;
(statearr_29964_30003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (15))){
var state_29956__$1 = state_29956;
var statearr_29968_30004 = state_29956__$1;
(statearr_29968_30004[(2)] = null);

(statearr_29968_30004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (21))){
var state_29956__$1 = state_29956;
var statearr_29969_30005 = state_29956__$1;
(statearr_29969_30005[(2)] = null);

(statearr_29969_30005[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (13))){
var inst_29909 = (state_29956[(8)]);
var inst_29908 = (state_29956[(9)]);
var inst_29911 = (state_29956[(10)]);
var inst_29910 = (state_29956[(11)]);
var inst_29918 = (state_29956[(2)]);
var inst_29919 = (inst_29911 + (1));
var tmp29965 = inst_29909;
var tmp29966 = inst_29908;
var tmp29967 = inst_29910;
var inst_29908__$1 = tmp29966;
var inst_29909__$1 = tmp29965;
var inst_29910__$1 = tmp29967;
var inst_29911__$1 = inst_29919;
var state_29956__$1 = (function (){var statearr_29970 = state_29956;
(statearr_29970[(8)] = inst_29909__$1);

(statearr_29970[(9)] = inst_29908__$1);

(statearr_29970[(10)] = inst_29911__$1);

(statearr_29970[(14)] = inst_29918);

(statearr_29970[(11)] = inst_29910__$1);

return statearr_29970;
})();
var statearr_29971_30006 = state_29956__$1;
(statearr_29971_30006[(2)] = null);

(statearr_29971_30006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (22))){
var state_29956__$1 = state_29956;
var statearr_29972_30007 = state_29956__$1;
(statearr_29972_30007[(2)] = null);

(statearr_29972_30007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (6))){
var inst_29897 = (state_29956[(13)]);
var inst_29906 = f.call(null,inst_29897);
var inst_29907 = cljs.core.seq.call(null,inst_29906);
var inst_29908 = inst_29907;
var inst_29909 = null;
var inst_29910 = (0);
var inst_29911 = (0);
var state_29956__$1 = (function (){var statearr_29973 = state_29956;
(statearr_29973[(8)] = inst_29909);

(statearr_29973[(9)] = inst_29908);

(statearr_29973[(10)] = inst_29911);

(statearr_29973[(11)] = inst_29910);

return statearr_29973;
})();
var statearr_29974_30008 = state_29956__$1;
(statearr_29974_30008[(2)] = null);

(statearr_29974_30008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (17))){
var inst_29922 = (state_29956[(7)]);
var inst_29926 = cljs.core.chunk_first.call(null,inst_29922);
var inst_29927 = cljs.core.chunk_rest.call(null,inst_29922);
var inst_29928 = cljs.core.count.call(null,inst_29926);
var inst_29908 = inst_29927;
var inst_29909 = inst_29926;
var inst_29910 = inst_29928;
var inst_29911 = (0);
var state_29956__$1 = (function (){var statearr_29975 = state_29956;
(statearr_29975[(8)] = inst_29909);

(statearr_29975[(9)] = inst_29908);

(statearr_29975[(10)] = inst_29911);

(statearr_29975[(11)] = inst_29910);

return statearr_29975;
})();
var statearr_29976_30009 = state_29956__$1;
(statearr_29976_30009[(2)] = null);

(statearr_29976_30009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (3))){
var inst_29954 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29956__$1,inst_29954);
} else {
if((state_val_29957 === (12))){
var inst_29942 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29977_30010 = state_29956__$1;
(statearr_29977_30010[(2)] = inst_29942);

(statearr_29977_30010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (2))){
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29956__$1,(4),in$);
} else {
if((state_val_29957 === (23))){
var inst_29950 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29978_30011 = state_29956__$1;
(statearr_29978_30011[(2)] = inst_29950);

(statearr_29978_30011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (19))){
var inst_29937 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29979_30012 = state_29956__$1;
(statearr_29979_30012[(2)] = inst_29937);

(statearr_29979_30012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (11))){
var inst_29922 = (state_29956[(7)]);
var inst_29908 = (state_29956[(9)]);
var inst_29922__$1 = cljs.core.seq.call(null,inst_29908);
var state_29956__$1 = (function (){var statearr_29980 = state_29956;
(statearr_29980[(7)] = inst_29922__$1);

return statearr_29980;
})();
if(inst_29922__$1){
var statearr_29981_30013 = state_29956__$1;
(statearr_29981_30013[(1)] = (14));

} else {
var statearr_29982_30014 = state_29956__$1;
(statearr_29982_30014[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (9))){
var inst_29944 = (state_29956[(2)]);
var inst_29945 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29956__$1 = (function (){var statearr_29983 = state_29956;
(statearr_29983[(15)] = inst_29944);

return statearr_29983;
})();
if(cljs.core.truth_(inst_29945)){
var statearr_29984_30015 = state_29956__$1;
(statearr_29984_30015[(1)] = (21));

} else {
var statearr_29985_30016 = state_29956__$1;
(statearr_29985_30016[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (5))){
var inst_29900 = cljs.core.async.close_BANG_.call(null,out);
var state_29956__$1 = state_29956;
var statearr_29986_30017 = state_29956__$1;
(statearr_29986_30017[(2)] = inst_29900);

(statearr_29986_30017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (14))){
var inst_29922 = (state_29956[(7)]);
var inst_29924 = cljs.core.chunked_seq_QMARK_.call(null,inst_29922);
var state_29956__$1 = state_29956;
if(inst_29924){
var statearr_29987_30018 = state_29956__$1;
(statearr_29987_30018[(1)] = (17));

} else {
var statearr_29988_30019 = state_29956__$1;
(statearr_29988_30019[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (16))){
var inst_29940 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29989_30020 = state_29956__$1;
(statearr_29989_30020[(2)] = inst_29940);

(statearr_29989_30020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (10))){
var inst_29909 = (state_29956[(8)]);
var inst_29911 = (state_29956[(10)]);
var inst_29916 = cljs.core._nth.call(null,inst_29909,inst_29911);
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29956__$1,(13),out,inst_29916);
} else {
if((state_val_29957 === (18))){
var inst_29922 = (state_29956[(7)]);
var inst_29931 = cljs.core.first.call(null,inst_29922);
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29956__$1,(20),out,inst_29931);
} else {
if((state_val_29957 === (8))){
var inst_29911 = (state_29956[(10)]);
var inst_29910 = (state_29956[(11)]);
var inst_29913 = (inst_29911 < inst_29910);
var inst_29914 = inst_29913;
var state_29956__$1 = state_29956;
if(cljs.core.truth_(inst_29914)){
var statearr_29990_30021 = state_29956__$1;
(statearr_29990_30021[(1)] = (10));

} else {
var statearr_29991_30022 = state_29956__$1;
(statearr_29991_30022[(1)] = (11));

}

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
});})(c__15752__auto__))
;
return ((function (switch__15696__auto__,c__15752__auto__){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_29995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29995[(0)] = state_machine__15697__auto__);

(statearr_29995[(1)] = (1));

return statearr_29995;
});
var state_machine__15697__auto____1 = (function (state_29956){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_29956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e29996){if((e29996 instanceof Object)){
var ex__15700__auto__ = e29996;
var statearr_29997_30023 = state_29956;
(statearr_29997_30023[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_29956;
state_29956 = G__30024;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_29956){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_29956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto__))
})();
var state__15754__auto__ = (function (){var statearr_29998 = f__15753__auto__.call(null);
(statearr_29998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto__);

return statearr_29998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto__))
);

return c__15752__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15752__auto___30121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___30121,out){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___30121,out){
return (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30091 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30098_30122 = state_30096__$1;
(statearr_30098_30122[(2)] = inst_30091);

(statearr_30098_30122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var inst_30073 = null;
var state_30096__$1 = (function (){var statearr_30099 = state_30096;
(statearr_30099[(7)] = inst_30073);

return statearr_30099;
})();
var statearr_30100_30123 = state_30096__$1;
(statearr_30100_30123[(2)] = null);

(statearr_30100_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_30076 = (state_30096[(8)]);
var inst_30076__$1 = (state_30096[(2)]);
var inst_30077 = (inst_30076__$1 == null);
var inst_30078 = cljs.core.not.call(null,inst_30077);
var state_30096__$1 = (function (){var statearr_30101 = state_30096;
(statearr_30101[(8)] = inst_30076__$1);

return statearr_30101;
})();
if(inst_30078){
var statearr_30102_30124 = state_30096__$1;
(statearr_30102_30124[(1)] = (5));

} else {
var statearr_30103_30125 = state_30096__$1;
(statearr_30103_30125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var state_30096__$1 = state_30096;
var statearr_30104_30126 = state_30096__$1;
(statearr_30104_30126[(2)] = null);

(statearr_30104_30126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var inst_30093 = (state_30096[(2)]);
var inst_30094 = cljs.core.async.close_BANG_.call(null,out);
var state_30096__$1 = (function (){var statearr_30105 = state_30096;
(statearr_30105[(9)] = inst_30093);

return statearr_30105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else {
if((state_val_30097 === (2))){
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(4),ch);
} else {
if((state_val_30097 === (11))){
var inst_30076 = (state_30096[(8)]);
var inst_30085 = (state_30096[(2)]);
var inst_30073 = inst_30076;
var state_30096__$1 = (function (){var statearr_30106 = state_30096;
(statearr_30106[(10)] = inst_30085);

(statearr_30106[(7)] = inst_30073);

return statearr_30106;
})();
var statearr_30107_30127 = state_30096__$1;
(statearr_30107_30127[(2)] = null);

(statearr_30107_30127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (9))){
var inst_30076 = (state_30096[(8)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30096__$1,(11),out,inst_30076);
} else {
if((state_val_30097 === (5))){
var inst_30073 = (state_30096[(7)]);
var inst_30076 = (state_30096[(8)]);
var inst_30080 = cljs.core._EQ_.call(null,inst_30076,inst_30073);
var state_30096__$1 = state_30096;
if(inst_30080){
var statearr_30109_30128 = state_30096__$1;
(statearr_30109_30128[(1)] = (8));

} else {
var statearr_30110_30129 = state_30096__$1;
(statearr_30110_30129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (10))){
var inst_30088 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30111_30130 = state_30096__$1;
(statearr_30111_30130[(2)] = inst_30088);

(statearr_30111_30130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_30073 = (state_30096[(7)]);
var tmp30108 = inst_30073;
var inst_30073__$1 = tmp30108;
var state_30096__$1 = (function (){var statearr_30112 = state_30096;
(statearr_30112[(7)] = inst_30073__$1);

return statearr_30112;
})();
var statearr_30113_30131 = state_30096__$1;
(statearr_30113_30131[(2)] = null);

(statearr_30113_30131[(1)] = (2));


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
});})(c__15752__auto___30121,out))
;
return ((function (switch__15696__auto__,c__15752__auto___30121,out){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_30117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30117[(0)] = state_machine__15697__auto__);

(statearr_30117[(1)] = (1));

return statearr_30117;
});
var state_machine__15697__auto____1 = (function (state_30096){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_30096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e30118){if((e30118 instanceof Object)){
var ex__15700__auto__ = e30118;
var statearr_30119_30132 = state_30096;
(statearr_30119_30132[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_30096;
state_30096 = G__30133;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___30121,out))
})();
var state__15754__auto__ = (function (){var statearr_30120 = f__15753__auto__.call(null);
(statearr_30120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___30121);

return statearr_30120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___30121,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15752__auto___30268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___30268,out){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___30268,out){
return (function (state_30238){
var state_val_30239 = (state_30238[(1)]);
if((state_val_30239 === (7))){
var inst_30234 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30240_30269 = state_30238__$1;
(statearr_30240_30269[(2)] = inst_30234);

(statearr_30240_30269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (1))){
var inst_30201 = (new Array(n));
var inst_30202 = inst_30201;
var inst_30203 = (0);
var state_30238__$1 = (function (){var statearr_30241 = state_30238;
(statearr_30241[(7)] = inst_30202);

(statearr_30241[(8)] = inst_30203);

return statearr_30241;
})();
var statearr_30242_30270 = state_30238__$1;
(statearr_30242_30270[(2)] = null);

(statearr_30242_30270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (4))){
var inst_30206 = (state_30238[(9)]);
var inst_30206__$1 = (state_30238[(2)]);
var inst_30207 = (inst_30206__$1 == null);
var inst_30208 = cljs.core.not.call(null,inst_30207);
var state_30238__$1 = (function (){var statearr_30243 = state_30238;
(statearr_30243[(9)] = inst_30206__$1);

return statearr_30243;
})();
if(inst_30208){
var statearr_30244_30271 = state_30238__$1;
(statearr_30244_30271[(1)] = (5));

} else {
var statearr_30245_30272 = state_30238__$1;
(statearr_30245_30272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (15))){
var inst_30228 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30246_30273 = state_30238__$1;
(statearr_30246_30273[(2)] = inst_30228);

(statearr_30246_30273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (13))){
var state_30238__$1 = state_30238;
var statearr_30247_30274 = state_30238__$1;
(statearr_30247_30274[(2)] = null);

(statearr_30247_30274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (6))){
var inst_30203 = (state_30238[(8)]);
var inst_30224 = (inst_30203 > (0));
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30224)){
var statearr_30248_30275 = state_30238__$1;
(statearr_30248_30275[(1)] = (12));

} else {
var statearr_30249_30276 = state_30238__$1;
(statearr_30249_30276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (3))){
var inst_30236 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30238__$1,inst_30236);
} else {
if((state_val_30239 === (12))){
var inst_30202 = (state_30238[(7)]);
var inst_30226 = cljs.core.vec.call(null,inst_30202);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30238__$1,(15),out,inst_30226);
} else {
if((state_val_30239 === (2))){
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30238__$1,(4),ch);
} else {
if((state_val_30239 === (11))){
var inst_30218 = (state_30238[(2)]);
var inst_30219 = (new Array(n));
var inst_30202 = inst_30219;
var inst_30203 = (0);
var state_30238__$1 = (function (){var statearr_30250 = state_30238;
(statearr_30250[(10)] = inst_30218);

(statearr_30250[(7)] = inst_30202);

(statearr_30250[(8)] = inst_30203);

return statearr_30250;
})();
var statearr_30251_30277 = state_30238__$1;
(statearr_30251_30277[(2)] = null);

(statearr_30251_30277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (9))){
var inst_30202 = (state_30238[(7)]);
var inst_30216 = cljs.core.vec.call(null,inst_30202);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30238__$1,(11),out,inst_30216);
} else {
if((state_val_30239 === (5))){
var inst_30211 = (state_30238[(11)]);
var inst_30202 = (state_30238[(7)]);
var inst_30206 = (state_30238[(9)]);
var inst_30203 = (state_30238[(8)]);
var inst_30210 = (inst_30202[inst_30203] = inst_30206);
var inst_30211__$1 = (inst_30203 + (1));
var inst_30212 = (inst_30211__$1 < n);
var state_30238__$1 = (function (){var statearr_30252 = state_30238;
(statearr_30252[(11)] = inst_30211__$1);

(statearr_30252[(12)] = inst_30210);

return statearr_30252;
})();
if(cljs.core.truth_(inst_30212)){
var statearr_30253_30278 = state_30238__$1;
(statearr_30253_30278[(1)] = (8));

} else {
var statearr_30254_30279 = state_30238__$1;
(statearr_30254_30279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (14))){
var inst_30231 = (state_30238[(2)]);
var inst_30232 = cljs.core.async.close_BANG_.call(null,out);
var state_30238__$1 = (function (){var statearr_30256 = state_30238;
(statearr_30256[(13)] = inst_30231);

return statearr_30256;
})();
var statearr_30257_30280 = state_30238__$1;
(statearr_30257_30280[(2)] = inst_30232);

(statearr_30257_30280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (10))){
var inst_30222 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30258_30281 = state_30238__$1;
(statearr_30258_30281[(2)] = inst_30222);

(statearr_30258_30281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (8))){
var inst_30211 = (state_30238[(11)]);
var inst_30202 = (state_30238[(7)]);
var tmp30255 = inst_30202;
var inst_30202__$1 = tmp30255;
var inst_30203 = inst_30211;
var state_30238__$1 = (function (){var statearr_30259 = state_30238;
(statearr_30259[(7)] = inst_30202__$1);

(statearr_30259[(8)] = inst_30203);

return statearr_30259;
})();
var statearr_30260_30282 = state_30238__$1;
(statearr_30260_30282[(2)] = null);

(statearr_30260_30282[(1)] = (2));


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
});})(c__15752__auto___30268,out))
;
return ((function (switch__15696__auto__,c__15752__auto___30268,out){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = state_machine__15697__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var state_machine__15697__auto____1 = (function (state_30238){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_30238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e30265){if((e30265 instanceof Object)){
var ex__15700__auto__ = e30265;
var statearr_30266_30283 = state_30238;
(statearr_30266_30283[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30284 = state_30238;
state_30238 = G__30284;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_30238){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_30238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___30268,out))
})();
var state__15754__auto__ = (function (){var statearr_30267 = f__15753__auto__.call(null);
(statearr_30267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___30268);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___30268,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15752__auto___30427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15752__auto___30427,out){
return (function (){
var f__15753__auto__ = (function (){var switch__15696__auto__ = ((function (c__15752__auto___30427,out){
return (function (state_30397){
var state_val_30398 = (state_30397[(1)]);
if((state_val_30398 === (7))){
var inst_30393 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30399_30428 = state_30397__$1;
(statearr_30399_30428[(2)] = inst_30393);

(statearr_30399_30428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (1))){
var inst_30356 = [];
var inst_30357 = inst_30356;
var inst_30358 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30397__$1 = (function (){var statearr_30400 = state_30397;
(statearr_30400[(7)] = inst_30357);

(statearr_30400[(8)] = inst_30358);

return statearr_30400;
})();
var statearr_30401_30429 = state_30397__$1;
(statearr_30401_30429[(2)] = null);

(statearr_30401_30429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (4))){
var inst_30361 = (state_30397[(9)]);
var inst_30361__$1 = (state_30397[(2)]);
var inst_30362 = (inst_30361__$1 == null);
var inst_30363 = cljs.core.not.call(null,inst_30362);
var state_30397__$1 = (function (){var statearr_30402 = state_30397;
(statearr_30402[(9)] = inst_30361__$1);

return statearr_30402;
})();
if(inst_30363){
var statearr_30403_30430 = state_30397__$1;
(statearr_30403_30430[(1)] = (5));

} else {
var statearr_30404_30431 = state_30397__$1;
(statearr_30404_30431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (15))){
var inst_30387 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30405_30432 = state_30397__$1;
(statearr_30405_30432[(2)] = inst_30387);

(statearr_30405_30432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (13))){
var state_30397__$1 = state_30397;
var statearr_30406_30433 = state_30397__$1;
(statearr_30406_30433[(2)] = null);

(statearr_30406_30433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (6))){
var inst_30357 = (state_30397[(7)]);
var inst_30382 = inst_30357.length;
var inst_30383 = (inst_30382 > (0));
var state_30397__$1 = state_30397;
if(cljs.core.truth_(inst_30383)){
var statearr_30407_30434 = state_30397__$1;
(statearr_30407_30434[(1)] = (12));

} else {
var statearr_30408_30435 = state_30397__$1;
(statearr_30408_30435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (3))){
var inst_30395 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30397__$1,inst_30395);
} else {
if((state_val_30398 === (12))){
var inst_30357 = (state_30397[(7)]);
var inst_30385 = cljs.core.vec.call(null,inst_30357);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30397__$1,(15),out,inst_30385);
} else {
if((state_val_30398 === (2))){
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30397__$1,(4),ch);
} else {
if((state_val_30398 === (11))){
var inst_30365 = (state_30397[(10)]);
var inst_30361 = (state_30397[(9)]);
var inst_30375 = (state_30397[(2)]);
var inst_30376 = [];
var inst_30377 = inst_30376.push(inst_30361);
var inst_30357 = inst_30376;
var inst_30358 = inst_30365;
var state_30397__$1 = (function (){var statearr_30409 = state_30397;
(statearr_30409[(11)] = inst_30377);

(statearr_30409[(7)] = inst_30357);

(statearr_30409[(12)] = inst_30375);

(statearr_30409[(8)] = inst_30358);

return statearr_30409;
})();
var statearr_30410_30436 = state_30397__$1;
(statearr_30410_30436[(2)] = null);

(statearr_30410_30436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (9))){
var inst_30357 = (state_30397[(7)]);
var inst_30373 = cljs.core.vec.call(null,inst_30357);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30397__$1,(11),out,inst_30373);
} else {
if((state_val_30398 === (5))){
var inst_30365 = (state_30397[(10)]);
var inst_30358 = (state_30397[(8)]);
var inst_30361 = (state_30397[(9)]);
var inst_30365__$1 = f.call(null,inst_30361);
var inst_30366 = cljs.core._EQ_.call(null,inst_30365__$1,inst_30358);
var inst_30367 = cljs.core.keyword_identical_QMARK_.call(null,inst_30358,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30368 = (inst_30366) || (inst_30367);
var state_30397__$1 = (function (){var statearr_30411 = state_30397;
(statearr_30411[(10)] = inst_30365__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30368)){
var statearr_30412_30437 = state_30397__$1;
(statearr_30412_30437[(1)] = (8));

} else {
var statearr_30413_30438 = state_30397__$1;
(statearr_30413_30438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (14))){
var inst_30390 = (state_30397[(2)]);
var inst_30391 = cljs.core.async.close_BANG_.call(null,out);
var state_30397__$1 = (function (){var statearr_30415 = state_30397;
(statearr_30415[(13)] = inst_30390);

return statearr_30415;
})();
var statearr_30416_30439 = state_30397__$1;
(statearr_30416_30439[(2)] = inst_30391);

(statearr_30416_30439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (10))){
var inst_30380 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30417_30440 = state_30397__$1;
(statearr_30417_30440[(2)] = inst_30380);

(statearr_30417_30440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (8))){
var inst_30357 = (state_30397[(7)]);
var inst_30365 = (state_30397[(10)]);
var inst_30361 = (state_30397[(9)]);
var inst_30370 = inst_30357.push(inst_30361);
var tmp30414 = inst_30357;
var inst_30357__$1 = tmp30414;
var inst_30358 = inst_30365;
var state_30397__$1 = (function (){var statearr_30418 = state_30397;
(statearr_30418[(7)] = inst_30357__$1);

(statearr_30418[(14)] = inst_30370);

(statearr_30418[(8)] = inst_30358);

return statearr_30418;
})();
var statearr_30419_30441 = state_30397__$1;
(statearr_30419_30441[(2)] = null);

(statearr_30419_30441[(1)] = (2));


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
});})(c__15752__auto___30427,out))
;
return ((function (switch__15696__auto__,c__15752__auto___30427,out){
return (function() {
var state_machine__15697__auto__ = null;
var state_machine__15697__auto____0 = (function (){
var statearr_30423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30423[(0)] = state_machine__15697__auto__);

(statearr_30423[(1)] = (1));

return statearr_30423;
});
var state_machine__15697__auto____1 = (function (state_30397){
while(true){
var ret_value__15698__auto__ = (function (){try{while(true){
var result__15699__auto__ = switch__15696__auto__.call(null,state_30397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15699__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15699__auto__;
}
break;
}
}catch (e30424){if((e30424 instanceof Object)){
var ex__15700__auto__ = e30424;
var statearr_30425_30442 = state_30397;
(statearr_30425_30442[(5)] = ex__15700__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30443 = state_30397;
state_30397 = G__30443;
continue;
} else {
return ret_value__15698__auto__;
}
break;
}
});
state_machine__15697__auto__ = function(state_30397){
switch(arguments.length){
case 0:
return state_machine__15697__auto____0.call(this);
case 1:
return state_machine__15697__auto____1.call(this,state_30397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15697__auto____0;
state_machine__15697__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15697__auto____1;
return state_machine__15697__auto__;
})()
;})(switch__15696__auto__,c__15752__auto___30427,out))
})();
var state__15754__auto__ = (function (){var statearr_30426 = f__15753__auto__.call(null);
(statearr_30426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15752__auto___30427);

return statearr_30426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15754__auto__);
});})(c__15752__auto___30427,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1422998150642