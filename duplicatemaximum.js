var arr=[21,21,23,44,56,76,76,44]

var max=0
flag=false
for(var i=0; i<arr.length; i++){
    for(var j=1; j<arr.length; j++){
        if((arr[i]==arr[j]) ){
            flag=true
            var x=j-i-1
            if(x > max){
                max = x
            }
        }

    }
}
if(flag==true){
    console.log(max)
}


