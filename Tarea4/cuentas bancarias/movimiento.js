export default class Movimiento{
    constructor(name, lastname, account, opc, quantity){
        this._name = name;
        this._lastname = lastname;
        this._account = account;
        this._opc = opc;
        this._quantity = quantity;
        this._balance = 0;
        
    }
    

    get name(){
        return this._name;
    }
    get lastname(){
        return this._lastname;
    }
    get account(){
        return this._account;
    }
    get quantity(){
        return this._quantity;
    }

    get opc(){
        return this._opc;
    }

    getDeposito(){
            this._balance = Number(this._balance) + Number(this._quantity);
            return this._balance;
    }

    getRetiro(){
        this._balance = Number(this._balance) - Number(this._quantity);
        return this._balance;
    }

    getMoney(){
        return this._balance;
    }



   

}