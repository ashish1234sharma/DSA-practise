const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function count(A){
    var obj={}
    for(var i=0; i<A.length; i++){
        if(A[i]["productName"] in obj){
            obj[A[i]["productName"]]++
        }else{
            obj[A[i]["productName"]]=1
        }
    }
    return obj
}
let productlist=count(listOfProducts)
console.log(productlist)

function unique(A){
    var arr=[]
    for(key in productlist){
        var obj={
            key:"productName",
            quantity:0
        }
        for(var i=0; i<A.length; i++){
            if(key == A[i]["productName"]){
                obj["productName"]=key
                obj["description"] = A[i]["description"]
                obj["quantity"]+=A[i]["quantity"]
            }
        }
        arr.push(obj)
    }
    return arr
}
console.log(unique(listOfProducts))