var arr=[1,2,3]
var n= arr.length

function subarray(arr,n){
   for(var i=0; i<n; i++){
    var bag="";
       for(var j=i; j<n; j++){
            bag+= arr[j]
            console.log(bag);
           }
       }
   }
   
    

subarray(arr,n)