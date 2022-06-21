var str1= "yf#c#"
var str2= "yy#k#pp##"

var count1=0
var count2=0
var count3=0
var count4=0

for(var i=0; i<str1.length; i++){
    if(str1[i]=="#"){
        count1++
    }else if(str1[i]!="#"){
        count2++
    }
}
var finalCount1=count2-count1
for(var i=0; i<str2.length; i++){
    if(str2[i]=="#"){
        count3++
    }else if(str2[i]!="#"){
        count4++
    }
}
var finalCount2=count4-count3

if(finalCount1 == finalCount2){
    console.log("1")
}else {
    console.log("0")
}

