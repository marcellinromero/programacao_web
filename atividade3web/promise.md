Promises em JavaScript são um mecanismo fundamental para lidar com operações assíncronas de forma mais eficiente e legível. Elas foram introduzidas para resolver problemas comuns relacionados a callbacks aninhados e o chamado "callback hell". Aqui está um resumo sobre Promises em JavaScript:

Objetivo Principal:
Promises têm o objetivo de tornar o código assíncrono mais fácil de ler e manter, permitindo que você lide com operações assíncronas de maneira mais linear, em vez de usar callbacks aninhados.

Três Estados:
Uma Promise pode estar em um de três estados:

Pending: Estado inicial, a operação ainda não foi concluída.

Fulfilled (Resolvida): A operação foi bem-sucedida e o resultado está disponível.

Rejected (Rejeitada): A operação falhou e um motivo (geralmente um erro) é fornecido.
Construção de uma Promise:
Para criar uma Promise, você pode usar a classe Promise. Ela aceita uma função que possui dois parâmetros, resolve e reject, que são chamadas dependendo do resultado da operação assíncrona.

Métodos Principais:

then(): É usado para especificar o que fazer quando a Promise é bem-sucedida. Pode ser encadeado para manipular resultados sucessivos.
catch(): Utilizado para tratar erros quando a Promise é rejeitada.
finally(): Executa código independentemente de a Promise ser resolvida ou rejeitada.

Promise.all() e Promise.race():

Promise.all(): Aguarda até que todas as Promises fornecidas sejam resolvidas e retorna um array com os resultados.
Promise.race(): Retorna a primeira Promise que é resolvida ou rejeitada, independentemente de outras Promises.