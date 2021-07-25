import { PostRequest as PostOrPutRequest, Typicode } from "../Utilitites/Typicode"
import ListOfUserIds from './UserIds.json';

describe('PUT /posts:', () => {
    

    it.each(ListOfUserIds.ListOfUserIds)
    (`Should return expected contract and response status when updating User=%s`, async(user) =>{

        const request: PostOrPutRequest = {
            title: '',
            body: user.body,
            userId: user.userId
        }
        const response = await Typicode.Put(request, user.id)
    })
})