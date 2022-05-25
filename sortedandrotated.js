
var arr =[3,4,5,6,7,1,2]

var n = arr.length

function sorted(arr,n){
    if(arr[0]<arr[n-1]){
        return false
    }
    var start=0
    var end=n-1
    while(start<=end){
        var mid=Math.floor(start+((end-start)/2))
        
    }

}
console.log(sorted(arr,n))