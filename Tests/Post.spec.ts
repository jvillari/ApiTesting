import axios from "axios";
import { Typicode } from "../Utilitites/Typicode"

describe('POST /posts: ', () => {

    let TypicodePost: Typicode;
    it('Should return expected contract and response status when creating post', async() =>{
        TypicodePost = await Typicode.createPost({
            title: 'Post',
            body: 'Malone',
            userId: 1,
        })
    })
})