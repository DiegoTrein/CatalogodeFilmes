let ator = new Ator (1, "JONH WAYNE");
console.log (ator);


let diretor = new Diretor (1, "Alfred Hitchcook");
console.log (diretor);

let direcao =[
    new Diretor(1, "Lana Wachowski"),
    new Diretor(2, "Lilly Wachowski")
]

let elenco=[
    new Ator(1, "Keanu Reeves"),
    new Ator(2, "Carrie-Anne Moss"),
    new Ator(3, "Laurence Fishburne"),
    new Ator(4, "Joe Pantolino"),
    new Ator(5, "Hugo Weaving"),
    new Ator(6, "Antony Ray Parker"),
]


let sinopse = "Um jovem programador (Keanu Reeves) é atormentado por estranhos pesadelos ";

let cartaz = "https://jardimdasamericas.com.br/uploads/2023/02/capa-filme-gato-de-botas-2-o-ultimo-pedido-1f766-large.jpg";

let genero = new Genero(1, "ação");

let filme = new Filme (
    1,
    "matrix",
    1999,
    genero,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
    );

    console.log(filme);

    let inputBuscarFilme = document.querySelector("#input-buscar-filme");
    let btnBuscarFilme = document.querySelector("btn-buscar-filme");
    
    btnBuscarFilme.onclick = () =>{
        if( inputBuscarFilme.value.length > 0){
            console.log( inputBuscarFilme.value);
            fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s="+inputBuscarFilme.value)
            .then((resp)=> resp.json())
            .then((resp)=>{
                console.log(resp);
            })
        }
        return false;
    }