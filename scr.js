var counter=0;
var img = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
function change(){
    var x = document.getElementById("time").value;
            document.getElementById("demo").src = img[counter];
            if (counter < img.length - 1 &&  x > 0) {
                counter++;
            } else {
                counter = 0;
            }
            setTimeout("change()", x);
}
function cal(si){
    var f=document.getElementById("first").value;
    var s=document.getElementById("second").value;
    if(isNaN(f) || isNaN(s)){
        document.getElementById("val").value="Invalid";
    }
    else{
        if(si=="+"){
            document.getElementById("val").value=parseInt(s)+parseInt(f);
        }
        else if(si=="-"){
            document.getElementById("val").value=parseInt(s)-parseInt(f);
        }
        else if(si=="/"){
            document.getElementById("val").value=parseInt(s)/parseInt(f);
        }
        else{
            document.getElementById("val").value=parseInt(s)*parseInt(f);
        }
    }

}
function myFunction() {
  var x = document.getElementById("myInput").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (x.match(emailPattern)) {
    document.getElementById("myInput").style.backgroundColor = "green";    
  }
  else{
    document.getElementById("myInput").style.backgroundColor = "red";
  }
}
