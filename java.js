alert("Simulador Valor Hotel 🏨✌️\n -----------por Sebastian Uribe Alvarez-----------");

let NumPer = parseInt(prompt("cuantas personas Se hospedaran  \n ( las habitaciones se dividiran en grupos de 4 personas👨‍👩‍👧‍👦)"));//numero de personas 
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
let cost;
let aux; //auxiliar para las habitaciones\
let NumH;
cost = 40; //valor en usd por habitacion cada dia
if( NumPer >= 4){
    if(NumPer %4 == 0){
        NumH = NumPer/4;
    }
    else{
        aux = NumPer/4;
        NumH = (aux)-((NumPer%4)/4);
        NumH = NumH+1;
    }
}
else{
    NumH =1;
}    

console.log(`El valor de hospedaje para ${NumPer} personas en ${NumH} Habitaciones  en ${Regdia} dias es : ${(NumH*Regdia)*cost} usd`);
alert(`El valor de hospedaje para ${NumPer} personas en ${NumH} Habitaciones  en ${Regdia} dias es : ${(NumH*Regdia)*cost} usd`);  