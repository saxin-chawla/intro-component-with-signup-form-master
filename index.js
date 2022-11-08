let btn = document.getElementById("submitBtn");
btn.addEventListener("click" , validate);
let fname = document.getElementById("fName");
let lname = document.getElementById("lName");
let pass = document.getElementById("pass");
let email = document.getElementById("email");

function validate(e){
    if(fname.value===''){
        let fError = document.querySelector(".fNameError"); 
        fError.textContent="FirstName cannot be empty";
        fError.style.color="red";
        setTimeout(()=>{
            fError.textContent="";
        },2000)
    }
    else{
        console.log(fname.value);
    }
    if(lname.value===""){
        let lError = document.querySelector(".lNameError") 
        lError.textContent="LastName cannot be empty";
        lError.style.color="red";
        setTimeout(()=>{
            lError.textContent="";
        },2000)
    }
    else{
        console.log(lname.value);
    }
    
    if(pass.value===""){
        let pError = document.querySelector(".passError") 
        pError.textContent="Password cannot be empty";
        pError.style.color="red";
        setTimeout(()=>{
            pError.textContent="";
        },2000)
    }
    else{
        console.log(pass.value);
    }
    if(email.value===""){
        let eError = document.querySelector(".emailError") 
        eError.textContent="Email cannot be empty";
        eError.style.color="red";
        setTimeout(()=>{
            eError.textContent="";
        },2000)
    }
    else{
        console.log(email.value);
    }
    
    e.preventDefault();
}