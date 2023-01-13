
let id = (id) => document.getElementById(id);

let username = id("username");
let password = id("password");
let errorEnterUsername = id("enter-username");
let errorEnterPassword = id("enter-password");
let formUser = id("form-username");
let formPassword = id("form-password");

let form = id("login");

form.addEventListener('submit', function(e){
    e.preventDefault();
    formValidation();

});

let formValidation = () =>{

    if(username.value.trim() === ""){
        formUser.style.border = "2px solid red";
        errorEnterUsername.style.color = "red";

    }
    else{

        formUser.style.border = "2px solid green";
        errorEnterUsername.style.color = "white";
    }

    if(password.value.trim() ===""){

        formPassword.style.border = "2px solid red";
        errorEnterPassword.style.color = "red";
    }
    else{
        formPassword.style.border = "2px solid green";
        errorEnterPassword.style.color = "white";

    }

}