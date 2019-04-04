export default class Movimientos{
    constructor(tableMovimiento, tableInfo){
        this._tableMovimiento = tableMovimiento;
        this._tableInfo = tableInfo;

        
        this._numDeposito = 0;
        this._totalDeposito = 0;
        this._numRetiro = 0;
        this._totalRetiro = 0;
        this._numMovimientos = 0;
        
    }

    addMove(client){
        let row = this._tableMovimiento.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellLastname = row.insertCell(1);
        let cellAccount = row.insertCell(2);
        let cellOpc = row.insertCell(3);
        let cellQuantity = row.insertCell(4);
        let cellBalance = row.insertCell(5);

        cellName.innerHTML = client.name;
        cellLastname.innerHTML = client.lastname;
        cellAccount.innerHTML = client.account;
        cellOpc.innerHTML = client.opc;
        cellQuantity.innerHTML = client.quantity;

        if(client.opc === "1"){
        cellBalance.innerHTML = client.getDeposito();
        this._numDeposito++;
        this._tableInfo.rows[1].cells[1].innerHTML = this._numDeposito;
        this._totalDeposito = client.getDeposito();
        this._tableInfo.rows[2].cells[1].innerHTML = this._totalDeposito;
        }
        if(client.opc === "2"){
            cellBalance.innerHTML = client.getRetiro();
            this._numRetiro++;
            this._tableInfo.rows[3].cells[1].innerHTML = this._numRetiro;
            this._totalRetiro = client.getRetiro();
            this._tableInfo.rows[4].cells[1].innerHTML = this._totalRetiro;

        }
        
        this._numMovimientos++;        
        this._tableInfo.rows[5].cells[1].innerHTML = this._numMovimientos;
        this._tableInfo.rows[6].cells[1].innerHTML = client.getMoney();

    }
}