var x=document.getElementById("login");
        var y=document.getElementById("register");
        var z=document.getElementById("btn");

function register(){
    x.style.left="150px";
    y.style.left="600px";
    z.style.left="110px";
}
function login(){
    x.style.left="590px";
    y.style.left="950px";
    z.style.left="0px";
}
function loginValidate()
{
let name_pattern=/[a-zA-Z\s]/g;
// let psw_pattern=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
let psw_pattern=/[a-zA_Z]/g;
  
var input_name=document.getElementById('name').value;
var input_psw=document.getElementById('psw').value;

if(input_name.match(name_pattern)==null){
   
    alert("Enter a valid Username")
    
}
else if(input_psw.match(psw_pattern)==null){
    alert("Enter a valid password")
    
}
else{


    alert("login successfully!!");

}
}

function registerValidate()
{
    let name_pattern1=/[a-zA-Z\s]/g;
    // let psw_pattern1=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    let email_pattern=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/g;
    let psw_pattern1=/[a-zA_Z]/g;

    var input_name1=document.getElementById('name1').value;
    var input_psw1=document.getElementById('psw1').value;
    var input_email=document.getElementById('email').value;

    if(input_name1.match(name_pattern1)==null){
   
        alert("Enter a valid Username")
       
    }
    else if(input_psw1.match(psw_pattern1)==null){
        alert("Enter a valid password")
       
    }
    else if(input_email.match(email_pattern)==null){
        alert("Enter a valid E-mail Id")
       

    }
    else{
    
  
        alert("registered  successfully!!");
    
}
}