import { Typicode, PostRequest } from "../Utilitites/Typicode";
import ListOfUserIds from './UserIds.json';

describe('GET /post/{postId}: ', () => {

    // Data Driven: Tests every id listed that returns from getall (stored in Json)
    // We can easily verify the data (if it was constant), which it technically seems to be
    it.each(ListOfUserIds.ListOfUserIds)
    ('Should return information based on User=%s', async(user) => {
        const response = await Typicode.Get(user.id);  

        // This will ensure every detail matches the user we are getting
        expect(response.data).toEqual(user);
    })

    it('Negative: Should return 404 for id that does not exist', async() => {
        // Ensuring that only one assertion is called is important because
        // if there is more than one assertion (or zero), we know the catch
        // statement wasn't hit. 
        expect.assertions(1);
        try {
            await Typicode.Get(12343534343);
        } catch (err){
            expect(err.response.status).toBe(404);
        }
    })
})