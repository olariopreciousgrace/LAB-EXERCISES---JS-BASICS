const nameTxt = document.getElementById("name");
const email = document.getElementById("email");
const showUser = document.getElementById("info")

function submit() {
    if(!(nameTxt.value === "" || email.value === "")) {

        showUser.innerHTML ="Name: " + nameTxt.value + "<br>" + "Email: " + email.value; 
    }else{
      alert("Error! Fill up all text Field");
}
    }



   