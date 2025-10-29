export default class User {

    constructor(userName, age){
        this.userName = userName;
        this.age = age;
    }

    getUserName() {
        return this.userName;
    }

    getAge(){
        return this.age;
    }
}
