let listaNum = [1,30,10];
let listaStr = ['1','30','10'];

let listaNumNome = ['número um','número trinta','número dez'];
let listaStrNome = ['string um','string trinta','string dez'];

for (let i = 0; i < listaNum.length; i++) {
    if (listaNum[i] == listaStr[i]) {
        console.log(`As variáveis ${listaNumNome[i]} e ${listaStrNome[i]} tem o mesmo valor, mas tipos diferentes`)
    } else {
        console.log(`As variáveis numeroUm e stringUm não tem o mesmo valor`)
    }
}
