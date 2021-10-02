    window.alert("Seja bem vindo ao Recomenda Flix")
    window.prompt("Qual é o seu nome?");

function adicionarFilme() {
    var campoFilmeFavorito = document.getElementById("filme").value;
    var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    
  }
  