
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            process.stdout.write(matriz[i][j] + " ");
        }
        console.log(); 
    }
}


function calcularTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    const transposta = [];

    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = matriz[i][j];
        }
    }

    return transposta;
}


const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

const matrizTransposta = calcularTransposta(matrizA);

console.log("\nMatriz Transposta de A:");
imprimirMatriz(matrizTransposta);
