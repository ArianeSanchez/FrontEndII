
 //console.log( prompt('Qual a sua jogada? [1] Pedra [2] Papel [3] Tesoura') )

 // Jo Ken po
// 1 - Qual a jogada do jogador?

// 2 - Gerar aleatoriamente um número entre 1 ao 3

// 3 - Calcular resultados

// [1] Pedra [2] Papel [3] Tesoura

var escolhaUsuario = Number( prompt('Qual a sua jogada? [1] Pedra [2] Papel [3] Tesoura'))
var escolhaBot = Math.floor(Math.random()*3)+1
var pontuacaoUsuario = 0
var pontuacaoBot = 0

console.log(escolhaUsuario)
console.log(escolhaBot)

function jogar(escolhaUsuario) {
    if((escolhaUsuario < 1) || (escolhaUsuario > 3)){
        return alert('Jogada inválida')
    }
}

console.log (jogar(escolhaUsuario))

switch (escolhaUsuario, escolhaBot) {
    case 1, 2:
        alert ('Você perdeu!')        
        break;
    case 1, 3:
        alert ('Você ganhou!')
        break;
    case 2, 1:
        alert('Você ganhou!')
        break;
    case 2, 3:
        alert('Você perdeu!')
        break;
    case 3, 1:
        alert('Você perdeu!')
        break;
    case 3, 2:
        alert('Você ganhou!')
        break;
    case escolhaUsuario === escolhaBot:
        alert('Empatou disgrama...')
        
}





 //situação de empate, validação de jogadas
 //permitir jogar mais de uma vez

 console.log (confirm('Deseja jogar novamente?'))

 //Armazenar pontos e se um jogador chegar a 3 pontos, o jogo acaba
