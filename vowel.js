
var str= "my name is ashish"

var n=str.length

function vowel(str,n){
    var bag=""
    var al=["a","e","i","o","u","A","E","I","O","U"]

    for(var i=0; i<n; i++){

        if(!al.includes(str[i])){
            bag=bag+str[i]
        }
    }
    console.log(bag)
    
}
vowel(str,n)