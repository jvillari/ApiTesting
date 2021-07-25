import axios from 'axios';
import { Typicode } from '../Utilitites/Typicode';
import { Verify } from '../Utilitites/Verify';

describe('GET /posts: ', () => {
 
    it('Should return expected contract and response status for all posts', async() => {

        const response = await Typicode.GetPosts('');

        // Since we are for looping through data, it's important to ensure there is data to for loop through
        // Otherwise, testing data in a for loop will give potential false positives 
        expect(response.data).not.toHaveLength(0);
        // Testing that each item in the array matches the expected contract
        for (const resource of response.data) {
            Verify.contract(resource, Typicode.APISpec.getPosts)
        }
    })

    // Data Driven test: Check for each userId
    it.each([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    (`Should return only data with user ID being %i`, async(userId) => {
        const response = await Typicode.GetPosts(`?userId=${userId}`);

        expect(response.data).not.toHaveLength(0);

        for (const resource of response.data) {
            expect(resource.userId).toBe(userId);
        }
    })
})


describe('Negative', () => {
    it('Should return empty if userId is not valid', async() => {
        const response = await Typicode.GetPosts('?userId=1000000000');

        expect(response.data).toHaveLength(0);
    })
})