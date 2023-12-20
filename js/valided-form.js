let myForm = document.getElementById('myForm')
let email = document.getElementById('email')
let desc = document.getElementById('desc')
let myError = document.getElementById('myError')
let myRegexEmail = /^[a-zA-Z-@.]+$/


myForm.addEventListener ('submit', (event)=>{

    if(email.value.trim() == ""){

        myError.innerHTML= "le champs email ne doit pas être vide!"
        myError.style.color="red"
        event.preventDefault()

    }

    if(desc.value.trim() == ""){

        myError.innerHTML= "le champs description ne doit pas être vide!"
        myError.style.color="red"
        event.preventDefault()

    }

    if(desc.value.trim() == "" && email.value.trim() == ""){

        myError.innerHTML= "les champs ne doivent pas être vide!"
        myError.style.color="red"
        event.preventDefault()

    }

})