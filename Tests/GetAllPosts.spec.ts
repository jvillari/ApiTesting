import axios from 'axios';
import { Typicode } from '../Utilitites/Typicode';
import { Verify } from '../Utilitites/Verify';

/**
 * Notes: It doesn't appear that getting all posts returns new ones created via the Post.spec.ts tests
 */
describe('GET /posts:', () => {
 
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

    it('Should return only data with user ID being 1', async() => {
        const response = await Typicode.GetPosts('?userId=1');

        expect(response.data).not.toHaveLength(0);

        for (const resource of response.data) {
            expect(resource.userId).toBe(1);
        }
    })
})


describe('Negative', () => {
    it('Should return empty if userId is not valid', async() => {
        const response = await Typicode.GetPosts('?userId=1000000000');

        expect(response.data).toHaveLength(0);
    })
})