const bodyElement = document.querySelector('body')


function changeMode() {

    bodyElement.classList.toggle('dark')

    console.log('Sucesso!!!')
}

// abstrair atributos do post - foto, título e texto - criar uma variável que englobe tudo

//nome da propriedade (foto) e o valor (img leão)

var novoPost = { 
    foto:'https://conteudo.imguol.com.br/c/entretenimento/d5/2021/09/23/chico-cansei-de-ser-gato---bichos-1632436739095_v2_450x1.jpg', 
    titulo:'Gato', 
    texto:'Chico, 09, ator, modelo, dançarino, escritor, influencer, podcaster, blogueiro, CEO e líder da dominação mundial felina.' }
    //a linha acima é um objeto

//como adicionar um texto pelo próprio JS - trocar H1

//var tituloPrincipalElemento = document.querySelector('h1')
    // h1 = tag .h1 = id #h1 = class

//tituloPrincipalElemento.innerHTML = 'Título trocado via JS'
    //innerHTML não é uma função é uma propriedade

//identificar a tag para poder replicar
//a crase é o template string
//para o JS entender o HTML precisa tranformar em template string
//precisa indicar onde será inserido
var containerElemento = document.querySelector('.container')

containerElemento.innerHTML += `
    <div class="item">
        <img src="${novoPost.foto}">
        <h2>${novoPost.titulo}</h2>
            <p>${novoPost.texto}</p>
    </div>
`
    //para não substituir o que existe precisa inserir antes do igual do innerHTML o símbolo de adição +
    //usa o ${} para inserir uma variável no template string

var posts = [
    {
        foto: './imagens/tiger.jpg',
        titulo: 'O tigre',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)         pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: './imagens/leon.jpg',
        titulo: 'O leão',
        texto: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero      gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África       subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'        
    },
    {
        foto:'./imagens/leopardo.jpg',
        titulo: 'O leopardo',
        texto: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).'
    },
    {
        foto: './imagens/pantera-negra.jpg',
        titulo: 'A pantera negra',
        texto: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.'
    },
    {
      foto: './imagens/jaguar.jpg',
      titulo: 'O jaguar',
      texto: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).'
    },
    {
      foto:'./imagens/chita.jpg',
      titulo: 'O guepardo',
      texto: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
    }

]

for (let post of posts) {
    containerElemento.innerHTML += `
    <div class="item">
        <img src="${post.foto}">
        <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
    </div>
`  
}