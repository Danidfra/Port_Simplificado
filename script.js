function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/Avatar_B.png')
        img.setAttribute('alt', 'Foto do Daniel Filemon sorrindo, com uma camisa preta e o fundo da foto é transparente')
    }
    else {
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', 'Foto do Daniel Filemon sorrindo, com uma camisa preta e o fundo da foto é da cor azul')
    }
}