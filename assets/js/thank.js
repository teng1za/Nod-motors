let sent = document.getElementById("contsend");
let thank = document.getElementById("thank");
let cont = document.getElementById("cont")

sent.addEventListener('click',function(){
  thank.style.display = "block";
  if(thank.style.display == "block"){ 
    cont.style.display = "none";  }
});