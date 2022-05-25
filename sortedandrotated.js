
var arr =[3 ,6 ,7 ,8 ,9 ,10 ,11 ,13 ,14 ,15 ,16 ,17 ,20 ,22 ,23 ,24 ,25 ,26 ,27 ,28, -9, -8, -7, -6, -5, -4, -3, -1, 1, 2]

var n = arr.length

function sorted(arr,n){
    if(arr[0]<arr[n-1]){
        return false
    }
    var start=0
    var end=n-1
    while(start<=end){
        var mid=Math.floor(start+((end-start)/2))

        if(arr[mid]>arr[mid-1] && arr[mid] >arr[mid+1]){
            return true
        }

        if(arr[mid] < arr[mid-1]){
            end=mid-1 ;
        }else if(arr[mid]<arr[mid+1]){
            start=mid+1
        }
        
        }
        return false  
    }
   


console.log(sorted(arr,n))