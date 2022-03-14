const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//Para criar um evento de clique e iterar na lista adicioando o envento de clique em todos eles mas de uma vez só:

listaSelecaoPokemons.forEach(pokemon =>{
    //evento de clique
    pokemon.addEventListener('click', ()=>{
        //descobrir qual e remover a classe do cartão que está aberto

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual o cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        //buscar o cartao referente ao id:
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //para remover a classe ativo que marca o pokemon selecionado:
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('.ativo')

        //adicionar a classe ativo na lista selecionada:
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('.ativo')
    })
})