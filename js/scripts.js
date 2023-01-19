//adding APIs to pokemon repository
const pokemonRepository = (function(){
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'


 function getAll (){
    return pokemonList;
 } 
 function add (pokemon) {
   pokemonList.push(pokemon);
 }
  function findByName (name){
    return pokemonList.find (function(pokemon){
    return pokemon.name === name;
  });
}
function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add ('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

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
              //  height: item.height,
                detailsUrl: item.url
            };
            add (pokemon);
        });
    }).catch (function (e){
        console.error(e);
    })
  }

  function loadDetails (item) {
    let url = item.detailsUrl;
    return fetch (url). then (function(response) {
        return response.json();
    }).then(function(details){
        item.imageUrl = details.sprites.front_default;
        item.height = deteils.height;
        item.types = details.types;
    }).catch (function (e) {
        console.error (e);
    });


  }

function showDetails (item) {
    pokemonRepository.loadDetails(item).then (function(){
     console.log(item);
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
    /*if (pokemon.height >2 ) {
        document.write(pokemon.name + ' '+ pokemon.height + ' meters tall' + ' You caught the big one!' + '<br>')

    } else if (pokemon.height > 1 && pokemon.height < 2.1) {
        document.write(pokemon.name + ' '+ pokemon.height + ' meters tall' + '<br>')
    } else {
        document.write (pokemon.name + ' '+ pokemon.height + ' meters tall' + 'that is small pokemon' + '<br>')
    }  */
});

console.log(pokemonRepository.findByName('Raichu'));

/*for (let {height, name} of pokemonList) {
if (height>2) {
    document.write ('<p class="large-pokemon"> ${name} ${height} meters tall. You caught the big one! </p>')
} else if (height>1 && height < 2.1) {
    document.write ('<p class="medium-pokemon"> ${name} ${height} meters tall </p>')
}
 else {
    document.write ('<p class="small-pokemon"> ${name} ${height} meters tall. That is the small one </p>')

}
}*/
