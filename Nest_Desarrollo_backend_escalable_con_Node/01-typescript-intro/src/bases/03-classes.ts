import axios from 'axios';



export class Pokemon {
    public id: number;
    public name: string;
    //public imageUrl: string;

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor( 
        id: number, 
        name: string/*, 
        imageUrl: string*/) {

        this.id = id;
        this.name = name;
        //this.imageUrl=imageUrl
    }

    /*public*/scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    /*private*/speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves() {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        
        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();

charmander.getMoves();