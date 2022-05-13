var str="mada"

// var newstr=""
// for(i=str.length-1; i>=0; i--){
    
// newstr=newstr+str[i]
// }
// if(str==newstr){
//     console.log("yes")
// }else{
//     console.log("No")
// }

var start=0
var count=0
var end=str.length-1
while(start<end){
    if(str[start]==str[end]){
        start++
        end--
        

    }else{
        console.log("No");
        count++
        break
    }
}
if(count==0){
    console.log("Yes")
}

