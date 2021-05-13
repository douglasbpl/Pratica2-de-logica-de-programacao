let idade = 27
const name = "Douglas"
const nascimento = true
const maiord = "Você é maior de idade"
const menord = "Você é menor de idade"
const mes = "Maio"
const initialletter = "R"
const sobrenome = "6"


if (idade > 18)
{console.log(`Você tem mais que 18`)} 
else {console.log(`Você tem 18 ou menos`)}

if (idade >= 18 && nascimento ) console.log(maiord )
else {console.log(menord)}


if(mes == "Janeiro" || mes == "Dezembro")
{console.log(`${name} faz aniversário`)}
else {console.log(`Não é seu aniversário`)}


if(initialletter == "R") console.log(`Seu nome começa com R`)
else{ console.log(`Seu nome não começa com R`)}

if((sobrenome > "6") || (initialletter == "E")) {console.log(` Você foi o escolhido`)}
else {console.log(`Você não foi o escolhido`)}




