const InputsElements = document.querySelectorAll('input')
const loginButtonElement = document.querySelector('#loginButton')
const headersRequest = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

let from = {
    email: '',
    password: ''
}

function makeLogin() {

    let requestConfiguration = {
        method: 'POST',
        headers: headersRequest,
        body: JSON.stringify(from)
    }

    fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', requestConfiguration).then(
        response => {
            if (response.ok){
                response.json ().then(
                    info => {
                        localStorage.setItem('token', info.jwt)
                        window.location.href = './tarefas.html'
                    }
                )
            } else {
                alert('Não existe um usuário ou dados estão incorretos')
            }
        }
    )
}

loginButtonElement.addEventListener('click', event =>{
    event.preventDefault()
    makeLogin()
})

for(let input of InputsElements) {

    input.addEventListener('keyup', event =>{
        form[input.id] = input.value
    } )
}


//ivinrodridridrigues@gmail.com
//12345678