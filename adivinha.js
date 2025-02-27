const numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativa;

while (tentativa !== numeroCorreto) {
    tentativa = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
    
    if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        alert("Por favor, insira um número válido entre 1 e 10.");
        continue;
    }
    
    if (tentativa < numeroCorreto) {
        alert("O número é maior. Tente novamente.");
    } else if (tentativa > numeroCorreto) {
        alert("O número é menor. Tente novamente.");
    } else {
        alert("Parabéns! Você acertou o número!");
    }
}
