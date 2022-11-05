function gerarCard(){
    const seguidores = document.querySelector(".followers");
    const seguindo = document.querySelector(".following");
    const repos = document.querySelector(".repository");
    const company = document.querySelector(".company");
    const location = document.querySelector(".location");

    var url = 'https://api.github.com/users/juliamxl'

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        if(data.message !== 'Not Found'){
            seguidores.textContent = data.followers + " seguidores"
            seguindo.textContent = data.following + " seguindo"
            repos.textContent = data.public_repos + " repositórios"
            company.textContent = data.company 
            location.textContent = data.location  
        }
    })
}
