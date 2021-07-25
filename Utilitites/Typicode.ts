import axios, { AxiosResponse } from "axios";
import APISpec from './TypicodeAPISpec.json';

export class Typicode {
    static BaseApi = 'https://jsonplaceholder.typicode.com';
    static APISpec = APISpec

    constructor(public data: TypicodeResponse){

    }
    static async GetPosts(query: string): Promise<AxiosResponse<any>> {

        const response = await axios.get(`${this.BaseApi}/posts${query}`);

        expect(response.status).toBe(200);
        return response;
    }

    static async createPost(request: PostRequest): Promise<Typicode> {

        const response = await axios.post(`${this.BaseApi}/posts`, request);

        expect(response.status).toBe(201);
        expect(response.data.title).toBe(request.title);
        expect(response.data.body).toBe(request.body);
        expect(response.data.userId).toBe(request.userId);
        return new Typicode(response.data);
    }

    static async Put(request: PostRequest, postId: number): Promise<AxiosResponse<any>> {

        const response = await axios.put(`${Typicode.BaseApi}/posts/${postId}`, request);

        expect(response.status).toBe(200);
        expect(response.data.title).toBe(request.title);
        expect(response.data.body).toBe(request.body);
        expect(response.data.userId).toBe(request.userId);
        return response;
    }

    static async Get(postId: number): Promise<AxiosResponse<any>> {

        const response = await axios.get(`${Typicode.BaseApi}/posts/${postId}`);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(postId);
        return response;
    }
}

export interface PostRequest {
    title: string;
    body: string,
    userId: number,
}

export interface TypicodeResponse {
    title: string,
    body: string,
    userId: number,
    id: number
  }