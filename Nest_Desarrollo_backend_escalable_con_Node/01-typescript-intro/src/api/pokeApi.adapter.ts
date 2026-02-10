import axios from 'axios';


export class PokeApiAdapter {

    private readonly axios = axios;


    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url);
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