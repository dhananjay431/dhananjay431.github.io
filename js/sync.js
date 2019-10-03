"use strict";!function(n){n.db=function(){},n.db.sync=function(n,i,c){n.length<1?i(c):(t=n.shift(),new Promise(function(n,i){t(c,n,i)}).then(function(t){db.sync(n,i,t)},function(n){i(c)}))}}(window);
