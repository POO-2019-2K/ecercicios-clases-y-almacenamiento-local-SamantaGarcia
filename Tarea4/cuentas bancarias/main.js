import Movimiento from "./movimiento.js"
import Movimientos from "./movimientos.js"

class Main{
    constructor(){
    this._list = new Movimientos(document.querySelector("#list"), document.querySelector('#info'));

    document.querySelector("#btn1").addEventListener("click", () => {
        let name = document.querySelector("#name").value;
        let lastname = document.querySelector("#lName").value;
        let account = document.querySelector("#account").value;
        let opc = document.querySelector("#select").value;
        let quantity = document.querySelector("#quantity").value;

        let client = new Movimiento(name, lastname, account, opc, quantity);
        this._list.addMove(client);
    });

}
}

let m = new Main();