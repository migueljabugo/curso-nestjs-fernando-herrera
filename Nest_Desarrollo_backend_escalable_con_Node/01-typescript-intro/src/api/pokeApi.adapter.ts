import axios from 'axios';

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}


export class PokeApiFetchAdapter implements HttpAdapter {

    
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data:T = await resp.json();
        console.log("Fetch");
        return data;
    }

}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;


    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url);
        console.log("axios");
        return data;
    }

    async post(url: string, data: any) {
        //petición post
        return;
    }

    patch(url: string, data: any) {
        //petición patch
        return;
    }

    delete(url: string) {
        //petición delete
        return;
    
    }

}