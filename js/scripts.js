let pokemonList = [
    {name:'Charmander', height: 2, category: 'lizard', type:'fire'},
    {name: 'Squirtle', height: 1.8, category:'turtle', type:'water'},
    {name: 'Zubat', height: 2.7, category:'bat', type:['poison','fly']},
    {name:'Vulpix', height: 2, category:'fox', type:'fire'}
];

//iterating through objects in array creatong a loop

pokemonList.forEach (function(pokemon) {
    if (pokemon.height >2 ) {
        document.write(pokemon.name + ' '+ pokemon.height + ' meters tall' + ' You caught the big one!' + '<br>')

    } else if (pokemon.height > 1 && pokemon.height < 2.1) {
        document.write(pokemon.name + ' '+ pokemon.height + ' meters tall' + '<br>')
    } else {
        document.write (pokemon.name + ' '+ pokemon.height + ' meters tall' + 'that is small pokemon' + '<br>')
    }  
});

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
