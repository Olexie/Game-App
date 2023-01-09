const pokemonRepository = (function(){
let pokemonList = [
    {name:'Charmander', height: 2, category: 'lizard', type:'fire'},
    {name: 'Squirtle', height: 1.8, category:'turtle', type:'water'},
    {name: 'Zubat', height: 2.7, category:'bat', type:['poison','fly']},
    {name:'Vulpix', height: 2, category:'fox', type:'fire'}
];
 function getAll (){
    return pokemonList;
 } 
 function add (pokemon) {
   if(
    typeof pokemon === "object" && JSON.stringify(Object.keys(pokemon)) ===
    JSON.stringify(['name', 'height', 'category', 'type'])
   ) { pokemonList.push(pokemon);
   } else {
    alert ('object error');
   }
 }
  function findByName (name){
    return pokemonList.find (function(pokemon){
    return pokemon.name === name;
  });
}

 return {
    add: add,
    getAll: getAll,
    findByName: findByName,
 };
})();

//adding extra pokemon

pokemonRepository.add ({name:'Raichu', height: 2.07, category: 'mouse', type:'electric'});

//iterating through objects in array creatong a loop

pokemonRepository.getAll().forEach (function(pokemon) {
    if (pokemon.height >2 ) {
        document.write(pokemon.name + ' '+ pokemon.height + ' meters tall' + ' You caught the big one!' + '<br>')

    } else if (pokemon.height > 1 && pokemon.height < 2.1) {
        document.write(pokemon.name + ' '+ pokemon.height + ' meters tall' + '<br>')
    } else {
        document.write (pokemon.name + ' '+ pokemon.height + ' meters tall' + 'that is small pokemon' + '<br>')
    }  
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
