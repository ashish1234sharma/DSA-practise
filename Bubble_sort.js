var arr=[1,3,2,5,4,8,6,7]

var n= arr.length
for(var i=0; i<n; i++){
    for(var j=i+1; j<n; j++){
        if(arr[i]>arr[j]){
     [arr[i],arr[j]] = [arr[j],arr[i]]
           
        }
    }
}
console.log(arr)