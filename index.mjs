// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@v0.0.6-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.0.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take@esm/index.mjs";function r(r,n,d){var i;return i=s(r.length),function(s,e){var t,r,n,d,i,a,o,m,h;for(r=1,n=1,h=1;h<s.length;h++){for(t=(a=s[r])<0?-a:a,o=e[n],d=r-1,i=n-1;d>=0&&!(((m=s[d])<0?-m:m)<=t);)s[d+1]=m,e[i+1]=e[i],d-=1,i-=1;s[d+1]=a,e[i+1]=o,r+=1,n+=1}}(n=e(n),i),{sh:r=t(r,i),sx:n,sy:d=t(d,i)}}export{r as default};
//# sourceMappingURL=index.mjs.map
