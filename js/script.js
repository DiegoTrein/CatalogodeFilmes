let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=ed5e5ad5&&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach((item) => {
                let filme = new Filme(
                    item.imdbID, 
                    item.Title, 
                    item.Year,
                    null, 
                    null, 
                    null, 
                    item.Poster, 
                    null, 
                    null, 
                    null, 
                    null, 
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}

    
    let detalhesFilme = async (id) => {
        fetch("https://www.omdbapi.com/?apikey=ed5e5ad5&&i="+id)
        .then((resp) => resp.json())
        .then((resp) => {

            
            let filme = new Filme(
                resp.imdbID, 
                resp.Title, 
                resp.Year, 
                resp.Genre.split(","), 
                resp.Runtime, 
                resp.Plot,
                resp.Poster, 
                resp.Director, 
                resp.Actors.split(","), 
                resp.Awards, 
                resp.imdbRatings, 
            )

            document.querySelector("#mostrar-filmes").appendChild(filme.getCardDetalhesFilme());
            document.querySelector("#lista-filmes").style.display="none";
            document.querySelector("#mostrar-filmes").style.display="flex";

        });
    }
