let var1=document.getElementById("v1");
let operation=document.getElementsByName("sami");

let var2=document.getElementById("V2");
let res=document.getElementById("Res");
let butt=document.getElementById("Butt");


butt.onclick = function() {
   const checkedOperation =  [...operation].find(v => v.checked === true);
   const result =  eval(var1.value + checkedOperation.value + var2.value)
   document.getElementById("Res").value =  result
}
