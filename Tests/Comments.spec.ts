import axios from "axios"
import { Typicode } from "../Utilitites/Typicode"

describe('Create and GET comments', () => {

    it('Should create a comment for post', async() => {
        const request = {
            postId: "1",
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          };
        const response = await axios.post(`${Typicode.BaseApi}/posts/1/comments`, request);
        expect(response.data.postId).toBe(request.postId);
        expect(response.data.name).toBe(request.name)
        expect(response.data.email).toBe(request.email)
        expect(response.data.body).toBe(request.body)
    })

    it('Should get a comment for post', async() => {
        const response = await axios.get(`${Typicode.BaseApi}/comments?postId=1`);
        
    })
})