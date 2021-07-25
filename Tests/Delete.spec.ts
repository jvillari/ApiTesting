import axios from "axios"
import { Typicode } from "../Utilitites/Typicode"

describe('DELETE /post/{postId}: ', () => {

    it('Should remove post with correct status', async() => {
        const response = await axios.delete(`${Typicode.BaseApi}/posts/1`);

        expect(response.status).toBe(200);
    })
})