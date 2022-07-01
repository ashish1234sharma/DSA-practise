


var number=9474
function armstrong(number){
     var sum=0
    var x=number.toString()
    for(var i=0; i <x.length; i++){
        sum=sum+x[i]**x.length
    }
    if(sum==number){
        console.log("yes")
    }else{
        console.log("no")
    }
    



}
armstrong(9474)