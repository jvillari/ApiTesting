import { Typicode } from "../Utilitites/Typicode"

describe('POST /posts:', () => {

    it('Should return expected contract and response status when creating post', async() =>{
        const response = await Typicode.Post({
            title: 'Post',
            body: 'Malone',
            userId: 1,
        })
    })
})