
function calcularImc(){

    let kg = document.getElementById("quilos").value;
    let mts= document.getElementById("metros").value;

    let imc= kg/(mts**2);

   
document.getElementById("resultado").textContent= "IMC: "+imc


}