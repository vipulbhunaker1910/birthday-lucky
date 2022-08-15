var b_date=document.querySelector("#input-date");
var lucky_number=document.querySelector("#input-lucky");
var check=document.querySelector("#btn-check");
var result=document.querySelector("#output");
function checklucky(){
 if((b_date.value)==0){
  alert("Please Enter your Data of Birth")
 }
 else{
 var totalsum=sum(b_date.value);
 if((lucky_number.value)==0){
    alert("Please Enter your lucky number");
 }
 else{
 if(totalsum%lucky_number.value===0){
   result.innerHTML="Yayyyyy! your birthday is lucky"
 }
 else{
    result.innerHTML="oh nooooo! your birthday is not lucky"
 }
}
}
}
function sum(input){
    input=input.replaceAll("-","");
    console.log(input);
    var resultsum=0;
    for(var i=0;i<input.length;i++){
        resultsum=resultsum+Number(input.charAt(i));
    }
    console.log(resultsum);
    return resultsum;
}

check.addEventListener("click",checklucky);