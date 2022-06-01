const bodyElement = document.querySelector('body')

console.log('o script começou')

function trocarCor() {

    //bodyElement.style.backgroundColor = 'red'
    //bodyElement.classList.add('background-red')
    bodyElement.classList.toggle('background-red')

    console.log('A cor foi trocada')
}



