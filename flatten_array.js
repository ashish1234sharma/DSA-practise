
var arr=[1,[2,3],4,[5,6],7,8,9]

function Flatten(arr){
     
    let flatArray=[]
    arr.forEach(element => {
        if(Array.isArray(element)){
            flatArray=flatArray.concat(Flatten(element))

        }else{
            flatArray.push(element)
        }
    });
    return flatArray
}
console.log(Flatten(arr))
