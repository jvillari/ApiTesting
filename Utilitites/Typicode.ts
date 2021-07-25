import axios, { AxiosResponse } from "axios";
import APISpec from './TypicodeAPISpec.json';

export class Typicode {
    static BaseApi = 'https://jsonplaceholder.typicode.com';
    static APISpec = APISpec

    static async GetPosts(query: string): Promise<AxiosResponse<any>> {

        const response = await axios.get(`${this.BaseApi}/posts${query}`);

        expect(response.status).toBe(200);
        return response;
    }

    static async Post(request: PostRequest): Promise<AxiosResponse<any>> {

        const response = await axios.post(`${this.BaseApi}/posts`, request);

        expect(response.status).toBe(201);
        expect(response.data.title).toBe(request.title);
        expect(response.data.body).toBe(request.body);
        expect(response.data.userId).toBe(request.userId);
        return response;
    }
}

export interface PostRequest {
    title: string;
    body: string,
    userId: number,
}