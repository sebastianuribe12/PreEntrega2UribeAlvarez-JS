alert("Simulador Valor Hotel ✌️\n -----------por Sebastian Uribe Alvarez-----------");

let NumPer = parseInt(prompt("cuantas personas Se hospedaran \n ( las habitaciones se dividiran en grupos de 4 personas)"));//numero de personas 
if(Number.isNaN(NumPer) == true){
    while(Number.isNaN(NumPer) == true){
        alert("Porfavor ingrese algun valor Valido");
        NumPer = parseInt(prompt("cuantas personas se hospedaran"));
    }
}
let Regdia = parseInt(prompt("Cuantos dias se hospedaran"));//Registro de dias
if(Number.isNaN(Regdia) == true){
    while(Number.isNaN(Regdia) == true){
        alert("Porfavor ingrese algun valor Valido");
        Regdia = parseInt(prompt("cuantos dias estaran hospedados"));
    }
}

let aux; //auxiliar para las habitaciones\
let NumH;

if( NumPer >= 4){
    if(NumPer %4 == 0){
        NumH = NumPer/4;
    }
    else{
        aux = NumPer/4;
        NumH =
    }
}
    

console.log(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);
alert(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`); 