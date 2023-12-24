let myForm = document.getElementById('myForm')
let title = document.getElementById('title')
let nom = document.getElementById('name')
let tel = document.getElementById('tel')
let myRegextel = new RegExp("[0-9]+")
let email = document.getElementById('email')
let desc = document.getElementById('desc')
let myError = document.getElementById('myError')
let myRegexEmail = new RegExp("[a-z0-9._@-]+")
let myEmail = "andregaudet225@gmail.com"

function validerNomValeur(){

    myError.innerHTML= "le champs nom ne doit pas être vide!"
    myError.style.color="red"

}

function validerNonLong(){

    myError.innerHTML= "Le nom doit contenir au moin deux (2) caractères!"
    myError.style.color="red"

}

function validerTitleValeur(){

    myError.innerHTML= "le champs objet ne doit pas être vide!"
    myError.style.color="red"


}

function validerTitleLong(){

    myError.innerHTML= "Le objet doit contenir au moin cinq (5) caractères!"
    myError.style.color="red"

} 




function validerEmailValeur(){

    myError.innerHTML= "le champs email ne doit pas être vide!"
    myError.style.color="red"

}

function validerEmailFormat(){

    myError.innerHTML= "l'email n'est pas au bon format!"
    myError.style.color="red"


}


function validerDesc(){

    myError.innerHTML= "le champs description ne doit pas être vide!"
    myError.style.color="red"

}


function afficherMail(myEmail, desc, title, tel){

    let mailto = `mailto:${myEmail}?subject=${title}&body=${desc}. je suis au numero ${tel}`
    location.href = mailto

}


function validerInfosForm(){

    myError.innerHTML= "les champs ne doivent pas être vide!"
    myError.style.color="red"
    
}


myForm.addEventListener ('submit', (event)=>{

    event.preventDefault()

    if(desc.value.trim() === "" && email.value.trim() === "" && nom.value.trim() === "" && title.value.trim() === ""){

        validerInfosForm()
    }else if(desc.value.trim() !== "" && email.value.trim() !== "" && nom.value.trim() !== "" && title.value.trim() !== ""){

        event.preventDefault()

        if(nom.value.trim() === ""){
            
            validerNomValeur()
            event.preventDefault()
        }
    
        if(nom.length < 2){

            validerNonLong()
            event.preventDefault()
        }
    
        if(title.value.trim() === ""){

            validerTitleValeur()
            event.preventDefault()
        }
    
        if(title.length < 5){
 
            validerTitleLong()
            event.preventDefault()
        }
    
        if(email.value.trim() === ""){

            validerEmailValeur()
            event.preventDefault()
        }
    
        if(!myRegexEmail.test(email)){
 
            validerEmailFormat()
            event.preventDefault()
        }
    
        if(desc.value.trim() === ""){

            validerDesc()
            event.preventDefault()
        }

        afficherMail(myEmail, desc, title, tel)
    }

})

