



let name_inp = document.getElementById("name");
let name_span = document.getElementById("namespan");
let email_inp = document.getElementById("email");
let email_span = document.getElementById("emailspan");
let age_inp = document.getElementById("age");
let age_span = document.getElementById("agespan");
let mob_inp = document.getElementById("mobile");
let mob_span = document.getElementById("mobspan");
let btn=document.getElementById("btn");


name_inp.onblur = function () {

    if (name_inp.value === "") {

        name_span.innerHTML = "this filed is required... "
        return

    } else if (name_inp.value.length < 3) {

        name_span.innerHTML = "must enter more 2 char"
        return
    }


}


name_inp.onfocus = function () {

    name_span.innerHTML = ""

}


email_inp.onblur = () => {


    if (email_inp.value === "") {

        email_span.innerHTML = "this filed is required"

        return

    } else if (email_inp.pattern == email) {

        email_span.innerHTML = "enter valid email  "

    }



}


email_inp.onfocus = function () {

    email_span.innerHTML = ""

}


age_inp.onblur = () => {

    if (age_inp.value === "") {

        age_span.innerHTML = "this filed is requierd"

    } else if (age_inp.value > 110) {

        age_span.innerHTML = "enter valid age "
    }



}


age_inp.onfocus = function () {

    age_span.innerHTML = ""

}



mob_inp.onblur = () => {

    if (mob_inp.value === "") {

        mob_span.innerHTML = "this filed is required"

    } else if (mob_inp.value.length < 10) {

        mob_span.innerHTML = "enter valid mobile no "
   
    } else if (mob_inp.value.length > 10) {

        mob_span.innerHTML = "enter valid mobile no  "

    }

}

mob_inp.onfocus = function () {

    mob_span.innerHTML = ""

}


  btn.addEventListener("click",()=>{

      if(name_inp.value===""){

        name_span.innerHTML = "this filed is required... "
        return
      
    }else if(email_inp.value===""){

        email_span.innerHTML = "this filed is required"

        return
      
    }else if(mob_inp.value===""){

        mob_span.innerHTML = "this filed is required"

        return
      
    }else if(age_inp.value===""){

        age_span.innerHTML = "this filed is requierd"

        return

      }else{

        alert(" your Registration is sucssfully")
      }

   

  })










