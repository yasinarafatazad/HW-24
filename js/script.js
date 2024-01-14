


var user = document.querySelector('#user');
var user_err = document.querySelector('#user_err');
var email = document.querySelector('#email');
var email_err = document.querySelector('#email_err');
var pass = document.querySelector('#pass');
var pass_err = document.querySelector('#pass_err');
var pass_show = document.querySelector('#pass_show');
var cpass = document.querySelector('#cpass');
var cpass_err = document.querySelector('#cpass_err');
var email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pass_regx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

function signup(){
    if (user.value == ""){
        user.style.border = '1px solid #ff0000';
        user_err.innerHTML = "Pleae enter your user name !";
        user.focus();
        return false;
    }
    if (email.value == ""){
        email.style.border = '1px solid #ff0000';
        email_err.innerHTML = "Pleae enter your email !";
        email.focus();
        return false;
    }
    if (!email_regx.test(email.value)){
        email.style.border = '0.5px solid #ff0000';
        email_err.innerHTML = "Pleae enter valid email !";
        email.focus();
        return false;
    }
    if (pass.value == ""){
        pass.style.border = '1px solid #ff0000';
        pass_err.innerHTML = "Pleae enter your password !";
        pass.focus();
        return false;
    }
    if (!pass_regx.test(pass.value)){
        pass.style.border = '0.5px solid #ff0000';
        pass_err.innerHTML = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long!";
        pass.focus();
        return false;
    }
    if (pass_regx.test(pass.value)){
        pass.style.border = '0.5px solid #547852';
        pass_err.style.color = '#547852';
        pass_err.innerHTML = "Done !";
    }
    if (cpass.value == ""){
        cpass.style.border = '1px solid #ff0000';
        cpass_err.innerHTML = "Pleae enter your confirm password !";
        cpass.focus();
        return false;
    }
    if (cpass.value != pass.value){
        cpass.style.border = '1px solid #ff0000';
        cpass_err.innerHTML = "Pleae enter same password !";
        cpass.focus();
        return false;
    }
    if (cpass.value == pass.value){
        cpass.style.border = '1px solid #547852';
        cpass_err.style.color = '#547852';
        cpass_err.innerHTML = "Done !";
    }
    
}
function valid(){
    if (user.value != ""){
        user.style.border = '1px solid #547852';
        user_err.innerHTML = "";
    }
    if (email.value != ""){
        email.style.border = '1px solid #547852';
        email_err.innerHTML = "";
    }
    if (email_regx.test(email.value)){
        email.style.border = '0.5px solid #547852';
        email_err.style.color = '#547852';
        email_err.innerHTML = "Done !";        
    }
    if (pass.value != ""){
        pass.style.border = '1px solid #547852';
        pass_err.innerHTML = "";
    }
    if (pass_regx.test(pass.value)){
        pass.style.border = '0.5px solid #547852';
        pass_err.innerHTML = "Done !";
    }
    if (cpass.value != ""){
        cpass.style.border = '1px solid #547852';
        cpass_err.innerHTML = "";
    }
}
user.addEventListener('blur', valid);
email.addEventListener('blur', valid);
// email_regx.addEventListener('blur', valid);
pass.addEventListener('blur', valid);
// pass_regx.addEventListener('blur', valid);
cpass.addEventListener('blur', valid);






function pass_sow(){
    if(pass.type == 'password'){
        pass.type = 'text';
        pass_show.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
    else{
        pass.type = 'password'
        pass_show.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}
function cpass_sow(){
    if(cpass.type == 'password'){
        cpass.type = 'text';
        cpass_show.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
    else{
        cpass.type = 'password'
        cpass_show.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}












// Loop


// for(var i=3;i<=10;i+=2){
//     document.write("<br>");
//     for(var j=0; j<=10; j++){
//         document.write(i+"X"+j+"="+i*j+"<br>");
//     }
// }

        // practise

