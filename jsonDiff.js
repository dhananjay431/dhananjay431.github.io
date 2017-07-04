var aik = {"id":50,"name":"AIK","description":"Hejja!","tasks":[{'foo':'bar'}]};
var dif = {"id":50,"name":"Djurgården","description":"Hejja!","tasks":[{'foo':'zaz'}]};

console.log(filter(aik, dif));

function filter(obj1, obj2) {
    var result = {};
    for(key in obj1) {
        if(obj2[key] != obj1[key]) result[key] = obj2[key];
        if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array') 
            result[key] = arguments.callee(obj1[key], obj2[key]);
        if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') 
            result[key] = arguments.callee(obj1[key], obj2[key]);
    }
    return result;
}