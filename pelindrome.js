let str="aman";

function reverse(){
    let bag="";
    for(let i=str.length-1;i>=0;i--){
        bag=bag+str[i];
    }
    return bag;
}
let rev_str=reverse(str);
if(str=rev_str){
  console.log("palindrome")
}else{
  console.log("NA")
}