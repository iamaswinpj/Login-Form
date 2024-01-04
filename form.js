function handleSubmit(){
   const message = document.getElementById('message'); 
   const message2 = document.getElementById('message2');
   const message3 = document.getElementById('message3');
   const message4 = document.getElementById('message4');

   

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   message.style.display = "none";
   message2.style.display = "none";
   message3.style.display = "none";
   message4.style.display = "none";
   

   if(name.length == 0){
    message.innerHTML = "Please enter your full name";
    message.style.display = "block";
    return false;
   }
   if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    message3.innerHTML = "Please enter a valid email address";
    message3.style.display = "block";
    return false;
   }
   if(password.length < 8){
    message4.innerHTML = "Password Must be 8 characters long";
    message4.style.display = "block";
    return false;
   } 
   
   else 
    alert("Success");
    return false;
}