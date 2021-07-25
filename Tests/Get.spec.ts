import { Typicode, PostRequest } from "../Utilitites/Typicode";
import ListOfUserIds from './UserIds.json';

describe('GET /post/{postId}', () => {

    // Data Driven: Tests every id listed that returns from getall (stored in Json)
    // We can easily verify the data (if it was constant), which it technically seems to be
    it.each(ListOfUserIds.ListOfUserIds)
    ('Should return information based on User=%s', async(user) => {
        const response = await Typicode.Get(user.id);  

        expect(response.data).toEqual(user);
    })
})