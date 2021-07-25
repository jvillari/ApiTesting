export class Verify {

    static contract(receivedContract: any, expectedContract: any){
        expect(Object.keys(receivedContract)).toEqual(Object.keys(expectedContract));
    }
}