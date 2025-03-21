//Classe Parquímetro
class Parquímetro {
    constructor() {
        this.tabelaPreços = [
            { valor: 1.00, tempo: 30},
            { valor: 1.75, tempo: 60},
            { valor: 3.00, tempo: 120}
        ];
    }
calcular(valorPago) {
    //Ordenar preços do maior para o menor
    this.tabelaPreços.sort((a,b) => b.valor = a.valor);

    //Encontrar o maior tempo possível com o valor pago
    let tempoPermitido = 0;
    let valorUtilizado = 0;

    for (let opção of this.tabelaPreços) {
        if (valorPago >= opção.valor) {
            tempoPermitido = opção.tempo;
            valorUtilizado = opção.valor;
            break;
        }
    }

    //Verificar se o valor é suficiente
    if (tempoPermitido === 0) {
        return { mensagem: "valor insuficiente", troco: 0, tempo: 0};
    }

    //Calcular troco
    let troco = (valorPago - valorUtilizado).toFixed(2);
    return { mensagem: `tempo permitido: ${tempoPermitido} minutos`, troco, tempo: tempoPermitido};

        return { mensagem: `tempo permitido: ${tempoPermitido} minutos`, troco, tempo: tempoPermitido};
    }
}

// Função calcularEstacionamento fora da classe
function calcularEstacionamento() {
    let valorinput = parseFloat(document.getElementById("valor").value);
    let parquímetro = new Parquímetro();
    let resultado = parquímetro.calcular(valorinput);

    let mensagem =  `${resultado.mensagem} `;
    if (resultado.troco > 0) {
        mensagem += `<br>troco: R$ ${resultado.troco}`;
    }

    document.getElementById("mensagem").innerHTML = mensagem;
}
