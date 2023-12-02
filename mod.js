// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,n){var t,u;for(t=[],u=0;u<n.length;u++)t.push(r[n[u]]);return t}function n(n,t,u){var f;return f=function(r){var n,t;if(n=[],r<=0)return n;for(t=0;t<r;t++)n.push(t);return n}(n.length),function(r,n){var t,u,f,e,o,h,a,s,i;for(u=1,f=1,i=1;i<r.length;i++){for(t=(h=r[u])<0?-h:h,a=n[f],e=u-1,o=f-1;e>=0&&!(((s=r[e])<0?-s:s)<=t);)r[e+1]=s,n[o+1]=n[o],e-=1,o-=1;r[e+1]=h,n[o+1]=a,u+=1,f+=1}}(t=function(r){var n,t,u;for(t=r.length,n=[],u=0;u<t;u++)n.push(r[u]);return n}(t),f),{sh:n=r(n,f),sx:t,sy:u=r(u,f)}}export{n as default};
//# sourceMappingURL=mod.js.map
