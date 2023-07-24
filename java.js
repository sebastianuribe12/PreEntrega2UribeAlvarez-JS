alert("Simulador Valor Hotel ✌️\n -----------por Sebastian Uribe Alvarez-----------");

let NumPer = parseInt(prompt("cuantas personas Se hospedaran \n ( las habitaciones se dividiran en grupos de 4 personas)"));//numero de personas 
if(Number.isNaN(NumPer) == true){
    while(Number.isNaN(NumPer) == true){
        alert("Porfavor ingrese algun valor Valido");
        NumPer = parseInt(prompt("cuantas personas se hospedaran"));
    }
}
let Regdia;//Registro de dias
let n;//ciclo


    AcumEd = AcumEd+RegEd;
    RegEd = NaN;
    
}
console.log(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);
alert(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);