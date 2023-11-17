var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg", "https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg", "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183931_b_v8_ac.jpg", "https://bancodeseries.tv.br/images/posters/2097.jpg", "https://br.web.img3.acsta.net/pictures/14/01/23/14/12/101764.jpg"]

for (let i = 0; i < listaFilmes.length; i++) {
    document.write(`<img src="${listaFilmes[i]}">`);
}