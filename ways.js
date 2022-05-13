var n=5

function ways(n){
    if(n==0){
        return 1
    }
    if(n<0){
        return 0
    }
    else{
        return (ways(n-1)+ways(n-2)+ways(n-5))
    }
}
console.log(ways(n))