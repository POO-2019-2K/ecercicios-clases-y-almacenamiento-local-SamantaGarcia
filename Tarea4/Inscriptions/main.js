import Student from "./inscription.js"

class Main{
    constructor(){
        var a = document.querySelector("#account");
        var n = document.querySelector("#name");
        var list = [];
        var local;
        
        document.querySelector("#btn1").addEventListener("click", () =>{
            
                let account = Number(a.value);
                let name = n.value;
                
                let objStudent = {
                    account : account,
                    name : name,

                }    
                
               
                let students = new Student(objStudent);
                let found = -1;

                list.forEach((e, index) => {
                    if (e.account === account) {
                      found = index;
                     
                    }
                  });
                        if (found >= 0) {
                        Swal.fire({
                            type: "error",
                            title: "Error",
                            text: "Esta cuenta ya existe" 
                        });
                        
                        }else{
                
                local = JSON.parse(localStorage.getItem("student"));
                
                
                    if (local != null){
                        list = local;
                    }
                    
                list.push(students);
                // guardar estudiante:
                localStorage.setItem("student", JSON.stringify(list));
                //imprimir estudiante guardado:
                localStorage.setItem("students", JSON.stringify(students));

                Swal.fire({
                    type: "success",
                    title: "Success",
                    text: "Student added" 
                });

                localStorage.clear();
                console.log(list);

            }
            
        });
        
    }
   
}

let m = new Main();