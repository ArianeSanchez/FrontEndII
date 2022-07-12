


const createUserButtonElement = document.querySelector('#createUserButton')
//obtenção de todos os inputs do meu html como array
const allInputsElements = document.querySelectorAll('input')

createUserButtonElement.addEventListener('click', event =>{
    event.preventDefault()
    createUser()
})

for(let input of allInputsElements) { 

    input.addEventListener('keyup', event => {

        const inputValue = input.value
        const inputId = input.id

        formData[inputId] = inputValue


  
    })
}

var formData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: ""   
}

var formDataValid = {
    nome: false,
    sobrenome: false,
    email: false,
    senha: false,
    confirmasenha: false
}

var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// Variavel que irá conter o nosso objeto de configuração da requisição
var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders
}

function createUser() {

     requestPostConfiguration.body = JSON.stringify(formData)

// O Fetch é responsável por fazer uma requisição para um back-end
 // O parametro do fetch serve justamente para especificarmos aonde ele irá fazer a requisição

fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users', requestPostConfiguration).then(

     response => {

         response.json().then(

             success => {

                 if(response.ok) {

                    location.href = './index.html'

                 } else {

                     if(success === 'El usuario ya se encuentra registrado') {

                         alert('O e-mail digitado já está cadastrado')

                     }

                 }

             }

         )


     }

 )
 }

 const erro = () => {
    
    allInputsElements.classList.add('erro');
 }


 function checkLength(input) {
    if (input.value.length < 6) {
      alert("Mínimo seis caractéres")
    }
  }

//   se type=text minlength >= 6
//   se type=password minlength >= 8

  const formControlsElements = document.querySelectorAll('.form-control')

var formValidation =  {
    userName: false,
    userSurName: false,
    userEmail: false,
    userPassword: false,
    userPasswordConfirm: false
}


for(let validarSenha of formControlsElements) {

    const controlInputElement = validarSenha.children[1] 

        userPassword = document.formValidation.userPassword.value;
        userPasswordConfirm = document.formValidation.userPasswordConfirm.value;

        if (userPassword === userPasswordConfirm) {
       
            control.classList.remove('error')
        
        }else {

            control.classList.add('error')
            
        }

    }


buttonCreateUserElement.addEventListener('click', event => {

    event.preventDefault()

    let formValid = Object.values(formValidation).every(Boolean)

    if(formValid) {

        window.location = './index.html'
    } else {
        alert('o formulário não esta preenchido corretamente.')
    }


})

for(let control of formControlsElements) {

   const controlInputElement = control.children[1]

   controlInputElement.addEventListener('keyup', event => {

        let inputValid = event.target.checkValidity()

        formValidation[event.target.id] = inputValid

        if(inputValid) {

            control.classList.remove('error')
        
        } else {

            control.classList.add('error')
            
        }

   })
}