let pokemonRepository = (function () {
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ")")
});
