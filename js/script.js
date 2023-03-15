

    let inputBuscarFilme = document.querySelector("#input-buscar-filme");
    let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
    
    btnBuscarFilme.onclick = () =>{
        if( inputBuscarFilme.value.length > 0){
            let filmes = new Array();
            fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s=" +inputBuscarFilme.value)
            .then((resp)=> resp.json())
            .then((resp)=>{
                resp.Search.forEach((item)=>{
                    console.log(item);
                    let filme=new Filme(
                    item.imdbID,
                    item.Title, item.Year,
                    null,
                    null, 
                    null,
                    item.Poster,
                    null,
                    
                    null, 
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}
        let listarFilmes = async (filmes) => {
            let listaFilmes = document.querySelector("#lista-filmes"); 
            listaFilmes.innerHTML = "";
            console.log(listaFilmes);
            console.log(filmes);
    
        if (filmes.length > 0) 
        {
            console.log(0);
            filmes.forEach (async (filme) => {
                console.log(1);
             listaFilmes.appendChild(await filme.getCard());
                console.log(2);
             });
        }
    }
    
    
    
    
    
