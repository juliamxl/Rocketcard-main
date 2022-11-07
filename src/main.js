import IMask from 'imask';



function gerarCard() {
    const seguidores = document.querySelector(".followers");
    const seguindo = document.querySelector(".following");
    const repos = document.querySelector(".repository");
    const company = document.querySelector(".company");
    const location = document.querySelector(".location");
    const imgUser = document.querySelector(".user-img");

    var url = gerarUrl()

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message !== 'Not Found') {
                seguidores.textContent = data.followers + " Seguidores"
                seguindo.textContent = data.following + " Seguindo"
                repos.textContent = data.public_repos + " Repositórios"
                imgUser.src = data.avatar_url
                company.textContent = data.company
                location.textContent = data.location
            } else {
                window.alert("Este perfil não foi encontrado, digite um existente.")
            }
        })
}



const card = document.querySelector(".card-user");
const input = document.querySelector("input")
var i = 0;
card.addEventListener("dblclick", function () {
    var background = ['#2737a8', '#483d8b', '#3c0b61', '#3e4aa7', '#0e1218']
    card.style.background = background[i];
    input.style.background = background[i]
    i++;
    if (i == 5){
        i = 0
    }
});

function gerarUrl() {
    const input = document.querySelector(".logo-text");
    const url = 'https://api.github.com/users/'
    var user = input.value;

    return url + user;
}







