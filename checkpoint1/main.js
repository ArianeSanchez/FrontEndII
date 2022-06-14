var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')
var posts = [
    {
        foto: 'https://media-exp2.licdn.com/dms/image/C4E03AQGSjdz0Y2OUbg/profile-displayphoto-shrink_800_800/0/1607649775855?e=1660780800&v=beta&t=TaonbA3bsNHv2uuZpAtlhKG6-4jLFtoveebDSGWvy5E',
        nome: 'Ariane Sanchez',
        tipo: 'Aluna do CTD',
        descricao: 'Paulixta invocada, curiosa e corinthiana. Formada em RP, apaixonada por Gaiman, board game e por comida. Começando a trilhar um caminho como Developer.',
        link: 'https://github.com/ArianeSanchez'
    },
    {
        foto: 'https://media-exp2.licdn.com/dms/image/C4D03AQHyAqhd9W2bVw/profile-displayphoto-shrink_800_800/0/1653570283711?e=1660780800&v=beta&t=r5qwPNC9OSRd6BqHZ6s-64cFV5ibrtHvQ5IZihmW5lc',
        nome: 'Erisvaldo Lessa',
        tipo: 'Tutor CTD',
        descricao: 'Doutorando em Ciências - UNIFESP. Mestre em Ensino de Ciências e Matemática - UFS. Licenciado em Matemática - IFAL. Mentor Educacional - Digital House. Professor de Matemática .',
        link: 'https://www.linkedin.com/in/jos%C3%A9-erisvaldo-lessa-vieira/'
    },
    {
        foto: 'https://lh3.googleusercontent.com/aVCdwhqzaYwKRHMS6AGwjNXBXYqydz3oUCc5HZoXOshhCMxsD_BTHe3LC8Aj1p91nyuv5MR3OvuYqbssKEvV84qTexhJsV4B6u-e2V_RmTQKovfbig-i-1kiRcMpEy7E97jEKWHAqSrsfaVp80bxmXKDcRAbV3JtlnAR8j2h5ca7HroXRveC3zoyCjkdm_-zl9CBuMwDVaEVuR7LOzL_6KetScA7IxoAy1_PBYBMBVGDDx-QEsfiGfdMV-Oy3JdX99WsSNCbzFOgak62YqTKzZviAb3a32sbekhSgLBkL4HvZSYzExaAQr-LfssTeAI5MtZyen7A1ifCil6HuYC9KYZ05EtNkP2wHHegzV3chkUeWw9uxQwHLcdTLG4Curc8vnKRbH4oO0oxJwywqCgmSofX8ApVVy7Qe873my2tF4uIp6TEo3FX_S3wP0xBkqRkkz3K4i2W7K5DQLAuYhQhxIOHhylNXvbCVbiFWoi2f646kpz_dWKtj2m5Ypibr3aLwzRQ-i12wgkmHY6nqKs767FnPCm8ASsTCVgvxz07bW7jcgpV6M4MlxwXaGH4efS_o_CW1gP1Ol8UPVrEKNxDqvPaBkUB3Nb98HrSl9pk65mwZCM1SM9h3c6gC5JJQoxMUkuFUgBtbEQVDiDS46U9Tljdr7s3wh63iJrEPr8eafQrAIr6OPvc1rT4CP9xnsoAgEB0HvFVPZPVMLvqHuadzDgWllsmOxWewyRK38YKOJvtY7f0_06XRqYuWPq-CEI=w459-h612-no?authuser=0',
        nome: 'Panqueca',
        tipo: 'Aluna honorária do CTD',
        descricao: 'Personalidade única, elegante, fanfarrona e presença marcante. Panqueca, a gata mais tech da casa.',
        link: 'Muito gata mesmo.'
    }
   
]

for(let post of posts) {

    containerElemento.innerHTML += `
        <div class="item">
            <div class="img"><img src="${post.foto}"> </div>
            <h2>${post.nome}</h2>
            <p>${post.tipo}</p>
            <p>${post.descricao}</p>
            <a href="${post.link}">Linkedin/Github</a>
        </div>
    `

}

// novaPostagemElemento.addEventListener('click', (evento) => {

//     let postagem = {
//         foto: prompt('Qual imagem deseja cadastrar?'),
//         titulo: prompt('Qual é o titulo?'),
//         texto: prompt('Qual é o texto?')
//     }

//     console.log(postagem)

// })

novaPostagemElemento.addEventListener('click', (evento) => {

    let postagem = {
        foto: document.getElementById('inputImg').value,
        nome: document.getElementById('inputNome').value,
        tipo: document.getElementById('inputTipe').value,
        descricao: document.getElementById('inputText').value,
        link: document.getElementById('inputLink').value
    }


    containerElemento.innerHTML += `
        <div class="item">
            <img src="${postagem.foto}">
            <h2>${postagem.nome}</h2>
            <p>${postagem.tipo}</p>
            <p>${postagem.descricao}</p>
            <a href="${postagem.link}">Linkedin/Github</a>
        </div>
    `
    
    document.querySelector('form').reset()

})
