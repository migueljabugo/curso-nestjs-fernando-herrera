import type { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, type HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    public id: number;
    public name: string;
    private readonly http: HttpAdapter;

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor( 
        id: number, 
        name: string,
        //Injección de dependencias
        http: HttpAdapter
    ) {

        this.id = id;
        this.name = name;
        this.http = http;
    }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        //const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }

}

const pokeApi = new PokeApiAdapter();
const pokeFetchApi = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApi);
export const pika = new Pokemon(4, 'Charmander', pokeFetchApi);

charmander.scream();
charmander.speak();

await charmander.getMoves();
await pika.getMoves();