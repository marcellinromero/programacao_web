function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        return "Não é possível calcular. As dimensões não são compatíveis.";
    }

    const matrizC = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        matrizC[i] = new Array(colunasB).fill(0);
    }
 
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizC;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12],
];

const resultado = multiplicarMatrizes(matrizA, matrizB);

if (typeof resultado === "string") {
    console.log(resultado);
} else {
    console.log("Resultado da multiplicação:");
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i]);
    }
}
