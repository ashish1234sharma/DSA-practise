var arr=[5,-4,-2,6,-1]
var n= arr.length


var max=0
var sum=arr[0]

for(var i=0; i<n; i++){
    sum=sum+arr[i]
    if(sum>max){
        max=sum
    }else if(sum<0){
        sum=0
    }
}
console.log(max)

