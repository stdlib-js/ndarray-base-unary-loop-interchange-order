"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=q(function(O,x){
function j(e,r){var a,i,n,s,v,t,o,p,u,c;for(n=1,s=1,c=1;c<e.length;c++){for(o=e[n],a=o<0?-o:o,p=r[s],v=n-1,t=s-1;v>=0&&(u=e[v],i=u<0?-u:u,!(i<=a));)e[v+1]=u,r[t+1]=r[t],v-=1,t-=1;e[v+1]=o,r[t+1]=p,n+=1,s+=1}}x.exports=j
});var g=q(function(T,d){
var k=require('@stdlib/array-base-zero-to/dist'),b=require('@stdlib/array-base-copy-indexed/dist'),l=require('@stdlib/array-base-take-indexed/dist'),h=f();function m(e,r,a){var i;return i=k(e.length),r=b(r),h(r,i),e=l(e,i),a=l(a,i),{sh:e,sx:r,sy:a,idx:i}}d.exports=m
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
