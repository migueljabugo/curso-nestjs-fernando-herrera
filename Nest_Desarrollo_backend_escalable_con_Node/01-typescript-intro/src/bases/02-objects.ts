export const pokemonIds = [2,3,4,5,6,7,8,9,10,11,12];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
};

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
};

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
};

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, charmander);



