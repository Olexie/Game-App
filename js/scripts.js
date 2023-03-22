//adding APIs to pokemon repository
const pokemonRepository = (function(){
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
const overlay = document.querySelector('.overlay');

document.querySelector('.close').onclick = hideModal;
overlay.onclick = hideModal;

function add (pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll (){
    return pokemonList;
 } 

 function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    listPokemon.classList.add('group-list-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add ('btn');
    pokemonList.appendChild(listPokemon);
    listPokemon.appendChild(button);

    //adding an event listener to buttons which reacts on click
    button.addEventListener ('click', function(event){
        showDetails(pokemon);
    });

}

function loadList() {
    return fetch(apiUrl).then(function(response){
        return response.json();
    }).then (function(json){
        json.results.forEach(function(item){
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add (pokemon);
        });
    }).catch (function (e){
        console.error(e);
    });
  }

  function loadDetails (item) {
    let url = item.detailsUrl;
    return fetch (url). then (function(response) {
        return response.json();
    }).then(function(details){
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
    }).catch (function (e) {
        console.error (e);
    });


  }

  function showDetails (pokemon) {
    loadDetails(pokemon).then (function(){
     showModal(pokemon);
    });
};

function showModal (pokemon) {
    let modalBody =$('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $ ('.modal-header');

    modalTitle.empty();
    modalBody.empty();
   
    let pokemonName = $("<h1>" + pokemon.name + "</h1>");
    let pokemonImageFront = $ ('<img class="modal-img" style="width=50%">');
    pokemonImageFront.attr("src", pokemon.imageUrl);
    let pokemonHeight = $("<p>" + "height: " +pokemon.height + "</p>");

    modalTitle.append(pokemonName);
    modalBody.append(pokemonImageFront);
    modalBody.append(pokemonHeight);

    overlay.classList.add('is-visible')

}

function hideModal(){
    overlay.classList.remove('is-visible')
    console.log('here')
 }

 window.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && overlay.classList.contains('is-visible')){
        hideModal();
    }
 });
 //function getAll (){
  //  return pokemonList;
// } 
 //function add (pokemon) {
  // pokemonList.push(pokemon);
 //}
  function findByName (name){
    return pokemonList.find (function(pokemon){
    return pokemon.name === name;
  });
}
  
 return {
    add: add,
    getAll: getAll,
    findByName: findByName,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
 };
})();

//iterating through objects in array creating a loop

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach (function(pokemon) {
 pokemonRepository.addListItem(pokemon);
});
});

console.log(pokemonRepository.findByName('Raichu'));

