// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@v0.1.0-esm/index.mjs";function r(r,n,d){var i;return i=e(r.length),function(e,s){var t,r,n,d,i,a,o,m,h;for(r=1,n=1,h=1;h<e.length;h++){for(t=(a=e[r])<0?-a:a,o=s[n],d=r-1,i=n-1;d>=0&&!(((m=e[d])<0?-m:m)<=t);)e[d+1]=m,s[i+1]=s[i],d-=1,i-=1;e[d+1]=a,s[i+1]=o,r+=1,n+=1}}(n=s(n),i),{sh:r=t(r,i),sx:n,sy:d=t(d,i)}}export{r as default};
//# sourceMappingURL=index.mjs.map
