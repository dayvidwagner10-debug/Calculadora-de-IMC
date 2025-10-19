function calculoimc(){
//Entrada de dados
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
//Transformando em numero
peso = parseFloat(peso);
altura = parseFloat(altura);

//Formulando em itens
let imc = peso / (altura*altura);

document.getElementById("resultado").textContent= "Seu imc é : " + imc.toFixed(2);

let classificacao = "";

if (imc < 18.5){
    classificacao = "abaixo do peso";
}else if(imc < 24.9){
    classificacao = "peso normal";
}else if(imc< 29.9){
    classificacao = "sobrepeso";
}else if(imc< 34.9){
    classificacao = "Obesidade grau I";
}else if(imc < 39.9){
    classificacao = "Obesidade grau II";
}else{
    classificacao = "Obesidade Grau III (Mórbida)";
}

document.getElementById("tipoimc").textContent = classificacao;

}

