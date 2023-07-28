let pokemonList = [
    {
        name: 'Charizard',
        height: 1.7,
        types: ['fire', 'flying']
    },
    {
        name: 'Pikachu',
        height: 0.4,
        types: ['electric']
    },
    {
        name: 'Gyarados',
        height: 6.5,
        types: ['water', 'flying']
    }
];

//used for function to display Pokemon name and corresponding height
for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")");
    //conditional statement added to signify special property of Pokemon over height 2
    if (pokemonList[i].height > 2) {
        document.write(" " + "-" + " " + "Wow, that's big!");
    }
}