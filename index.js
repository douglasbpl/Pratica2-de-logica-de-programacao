let idade = 27
const name = "Douglas"
const isHuman  = true
const maiord = "Você é maior de idade"
const menord = "Você é menor de idade"
const mes = "Maio"
const sobrenome = "Brasil"


// 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

if (idade > 18)
{console.log(`Você tem mais que 18`)} 
else {console.log(`Você tem 18 ou menos`)}

// 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

if ((idade >= 18) && (isHuman == true))
{console.log(maiord )}
else {console.log(menord)}

// 3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

if((mes === "Janeiro") || (mes === "Dezembro"))
{console.log(`${name} faz aniversário`)}
else {console.log(`Não é seu aniversário`)}

// 4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R


if(name.substring(0, 1) === "R") {console.log(`Seu nome começa com "R"`)}
else{console.log(`Seu nome não começa com "R"`)}

// 5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E


if((sobrenome.length >= 6) || (name.substring(0, 1) === "E"))
{console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com a letra 'E'")}







