
var arr = [1,2,3,4,5,6]
var n = arr.length 
var k = 3

function rotate(arr,n,k){

    for(var i=0; i< k; i++){
        let temp = arr[0]
        for(var j=0; j<n; j++){
            arr[j] = arr[j+1]
        }
        arr[n-1] =temp 
    }
    return arr

}

console.log(rotate(arr,n,k))