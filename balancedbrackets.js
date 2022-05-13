// var str= ["{","(","[","]",")","}"]
var str= ["}","(","[","]",")","}"]


var stack=[]
var bag=[]
for(var i=0; i<str.length; i++){
    if(str[i]=="{" || str[i]=="[" || str[i]=="("){
        stack.push(str[i])
    }else{
        if(str[i]=="}" && stack[stack.length-1]=="{"){
            stack.pop()
        }
       else if(str[i]=="]" && stack[stack.length-1]=="["){
            stack.pop()
        }
       else if(str[i]==")" && stack[stack.length-1]=="("){
            stack.pop()
        }
        else{
            bag.push(str[i])
        }
    }
}
if(stack.length !==0 || bag.length !== 0){
    console.log("unbalanced")
}else{
    console.log("balanced")
}