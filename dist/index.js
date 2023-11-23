"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=q(function(O,f){
function j(e,r){var i,a,n,s,v,t,o,p,u,c;for(n=1,s=1,c=1;c<e.length;c++){for(o=e[n],i=o<0?-o:o,p=r[s],v=n-1,t=s-1;v>=0&&(u=e[v],a=u<0?-u:u,!(a<=i));)e[v+1]=u,r[t+1]=r[t],v-=1,t-=1;e[v+1]=o,r[t+1]=p,n+=1,s+=1}}f.exports=j
});var g=q(function(T,d){
var k=require('@stdlib/array-base-zero-to/dist'),b=require('@stdlib/array-base-copy-indexed/dist'),x=require('@stdlib/array-base-take-indexed/dist'),h=l();function m(e,r,i){var a;return a=k(e.length),r=b(r),h(r,a),e=x(e,a),i=x(i,a),{sh:e,sx:r,sy:i}}d.exports=m
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
