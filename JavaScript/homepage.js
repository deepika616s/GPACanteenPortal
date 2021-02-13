var box = document.querySelector(".box");
var signin = document.getElementById("sign-in");
var signup = document.getElementById("sign-up");
var banner = document.querySelector(".banner");
var signUp = document.getElementById("signUp");
// var signInForm = document.querySelector(".newSignin");


signin.onclick = signInFormCreate;
signup.onclick =signUpFormCreate;
signUp.onclick= alertMsg;
function alertMsg(){
    alert("You have Signed up Successfully... \nClick on the Sign in button to Contiinue... ");
}

function signInFormCreate(){
    signin.style.backgroundColor ="black";
    signup.style.backgroundColor = "orange";
    // console.log(box);

    box.parentNode.removeChild(box);

    var newSignin = document.createElement("div");
    newSignin.classList.add("newSignin");
    

    var newUser = document.createElement("label");
    newUser.classList.add("newUser");
    newUser.innerHTML = "UserName";
    newSignin.appendChild(newUser);

    var newUserBox = document.createElement("input");
    newUserBox.classList.add("newUserBox");
    newUserBox.setAttribute("type","username");
    newUserBox.setAttribute("placeholder","Enter UserName");
    newUserBox.required=true;
    newSignin.appendChild(newUserBox);

    var newPassword = document.createElement("label");
    newPassword.classList.add("newPassword");
    newPassword.innerHTML = "Password";
    newSignin.appendChild(newPassword);

    var newPasswordBox = document.createElement("input");
    newPasswordBox.classList.add("newPasswordBox");
    newPasswordBox.setAttribute("type","password");
    newPasswordBox.setAttribute("placeholder","Enter Password");
    newPasswordBox.required=true;
    newSignin.appendChild(newPasswordBox);

    var chkbox = document.createElement("input");
    chkbox.classList.add("chkbox");
    chkbox.setAttribute("type","checkbox");
    chkbox.required=true;
    newSignin.appendChild(chkbox);

    var para = document.createElement("p");
    para.classList.add("para");
    para.innerHTML="Save UserName & Password.";
    newSignin.appendChild(para);

    var newButton = document.createElement("a");
    newButton.classList.add("newButton");
    newButton.innerHTML ="SIGN-IN";
    newButton.setAttribute("href","HTML/AfterSignIn.html")
    newSignin.appendChild(newButton);

    banner.appendChild(newSignin);
    

}
function signUpFormCreate(){
    signup.style.backgroundColor ="black";
    signin.style.backgroundColor = "orange";

    location.reload();

    // signInForm.parentNode.removeChild(signInForm);
    

    

    // var box = document.createElement("div");
    // box.classList.add("box");
    
    // var username = document.createElement("label");
    // username.classList.add("username");
    // username.innerHTML = "UserName";
    // box.appendChild(username);

    // var userbox = document.createElement("input");
    // userbox.classList.add("userbox");
    // userbox.setAttribute("type","username");
    // userbox.setAttribute("placeholder","Enter UserName");
    // box.appendChild(userbox);

    // var email = document.createElement("label");
    // email.classList.add("email");
    // email.innerHTML = "Email";
    // box.appendChild(email);

    // var emailbox = document.createElement("input");
    // emailbox.classList.add("emailbox");
    // emailbox.setAttribute("type","email");
    // emailbox.setAttribute("placeholder","Enter Email");
    // box.appendChild(emailbox);

    // var password = document.createElement("label");
    // password.classList.add("password");
    // password.innerHTML = "Password";
    // box.appendChild(password);

    // var passwordbox = document.createElement("input");
    // passwordbox.classList.add("passwordbox");
    // passwordbox.setAttribute("type","password");
    // passwordbox.setAttribute("placeholder","Enter Password");
    // box.appendChild(passwordbox);

    // var confirm_password = document.createElement("label");
    // confirm_password.classList.add("confirm-password");
    // confirm_password.innerHTML = "Confirm-Password";
    // box.appendChild(confirm_password);

    // var confirm_passwordbox = document.createElement("input");
    // confirm_passwordbox.classList.add("confirm-passwordbox");
    // confirm_passwordbox.setAttribute("type","password");
    // confirm_passwordbox.setAttribute("placeholder","Confirm Password");
    // box.appendChild(confirm_passwordbox);

    // var signup_Button = document.createElement("a");
    // signup_Button.classList.add("signUpButton");
    // signup_Button.innerHTML ="SIGN-IN";
    // box.appendChild(signup_Button);

    // banner.appendChild(box);


}