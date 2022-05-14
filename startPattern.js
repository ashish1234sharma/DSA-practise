

var n=5

// for(var i=1; i<=n; i++){
//     var bag=""
//     for(var j=n; j>=i; j--){
//         bag=bag+" "+"*"
        
//     }
//     console.log(bag)
// 

function fun(n){
    for(var i=0;i<n;i++){
        let bag=""
        for(j=0;j<n;j++){
            if(j==n-1){
                 if(j<n-i){
                bag=bag+"*"
            }
            else{
                bag=bag+" "
            }
            }
            else if(j<n-i){
                bag=bag+"*"+" "
            }
            else{
                bag=bag+" "+" "
            }
            
            
        }
        console.log(bag)
    }
  }