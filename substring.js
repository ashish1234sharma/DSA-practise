var str="ashish"
var n= str.length

for(var i=0; i<n; i++){
    for(var j=i; j<n; j++){
        
        for(var k=i; k<j; k++){
            console.log(str[k])
        }
    }
}
