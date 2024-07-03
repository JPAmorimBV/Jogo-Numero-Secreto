alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
let chute;
console.log(numeroSecreto);
let tentativas = 1;

// enquanto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    } else{
        if (chute > numeroSecreto) {
            alert('O numero secreto e menor que '+ chute);
        }else {
            alert('O numero secreto e maior que '+ chute);
        }
        // tentativas = tentativas + 1;
        tentativas++; 
    };  
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`vc descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
// if(tentativas > 1 ){
    // alert(`vc descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else{ 
    // alert(`vc descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }