let pokemonList = [
    {name:'Charmander', height: 2, category: 'lizard', type:'fire'},
    {name: 'Squirtle', height: 1.8, category:'turtle', type:'water'},
    {name: 'Zubat', height: 2.7, category:'bat', type:['poison','fly']},
    {name:'Vulpix', height: 2, category:'fox', type:'fire'}
];

//iterating through objects in array creatong a loop

for (let i= 0; i< pokemonList.length; i++) {
    if (pokemonList[i].height >2 ) {
        document.write(pokemonList[i].name + pokemonList[i].height + ' meters tall' + ' You caught the big one!' + '<br>')

    } else if (pokemonList[i].height > 1 && pokemonList[i].height < 2.1) {
        document.write(pokemonList[i].name +  pokemonList[i].height + ' meters tall' + '<br>')
    } else {
        document.write (pokemonList[i].name +  pokemonList[i].height + ' meters tall' + 'that is small pokemon' + '<br>')
    }  
}