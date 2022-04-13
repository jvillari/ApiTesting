
export class Urls {
    Typicode = 'https://typicode.com'
    constructor(environment: string){
        if(environment = "dev"){
            this.Typicode = 'dev.com';
        }
    }
}
export class Getter extends Urls {
    constructor(){
        super('dev');
        
        
    }
}