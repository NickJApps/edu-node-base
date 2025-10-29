export default class Person {
    
    constructor(personName, personAge){
        this.personName = personName;
        this.personAge = personAge;
    }
    
    getName(){
        return this.personName;
    }

    getAge(){
        return this.personAge;
    }
}