import Person from "./Person.js";

export default class User extends Person{
    
    constructor(personName, personAge, id){
        super(personName, personAge);
        this.id = id;
    }

    getUserId(){
        return this.id;
    }
}
