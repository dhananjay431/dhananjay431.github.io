(function(){
this.$$ = {
 get:async function(url){
  return  fetch(url).then(json => json.json())
 },
 post:function(url,data){
 	return fetch(url,{
    method: 'POST', // or 'PUT'
  	body: JSON.stringify(data), // data can be `string` or {object}!
  	headers:{
    	'Content-Type': 'application/json'
  	}
  }).then(json => json.json()) 
 },
 at:function(o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    }
}
}())
