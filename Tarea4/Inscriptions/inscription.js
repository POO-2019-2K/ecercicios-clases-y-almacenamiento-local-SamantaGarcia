export default class Student{
    constructor(student){
        this._account = student.account;
        this._name = student.name;
        
    }

    get account(){
        return this._account;
    }

    get name(){
        return this._name;
    }

    
}

