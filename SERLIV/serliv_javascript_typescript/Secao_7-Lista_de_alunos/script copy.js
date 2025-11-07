// 1. Define e executa uma função anônima imediatamente (IIFE)
// Isso cria um escopo isolado para evitar poluir o escopo global
(function () {

	// 3. Seleciona todas as linhas do cabeçalho da tabela
	const trHeader = document.querySelectorAll("thead tr");

	// 4. Seleciona todas as células de cabeçalho (th) da primeira linha
	const thsHeader = trHeader[0].querySelectorAll("th");

	// 5. Seleciona todas as células de cabeçalho (th) da primeira linha com atributo aluno-nota
	const thsAlunoNotas = trHeader[0].querySelectorAll("[aluno-nota]");

	// 7. Define um objeto com os índices de todas as colunas de notas
    // Chama pegaIndice() para cada coluna para descobrir sua posição
    const INDICES_NOTAS = {};

	// 6. Preenche o objeto INDICES_NOTAS com os índices das colunas dinamicamente
    Array.from(thsAlunoNotas).forEach(function(th) {
        let prop = th.getAttribute("aluno-nota"); // Obtém o nome da coluna do atributo
        INDICES_NOTAS[prop] = pegaIndice(prop); // Usa pegaIndice para obter o índice e atribui ao objeto
    });

    // 2. Define a função para encontrar o índice de uma coluna pelo nome
    function pegaIndice(coluna) {     
        // 5. Procura o cabeçalho que tem o atributo correspondente ao nome da coluna
        const th = trHeader[0].querySelectorAll(`[aluno-nota="${coluna}"]`);

        // 6. Converte a NodeList para array e retorna o índice do elemento encontrado
        const i = [...thsHeader].indexOf(th[0]);
		return i;
    }

    
    // 8. Seleciona todas as linhas do corpo da tabela
    const trs = document.querySelectorAll("tbody tr");

    // 9. Inicializa variáveis de controle do loop
    let x = 0; // Contador para percorrer as linhas
    let media = 0; // Variável para armazenar a média calculada

    // 10. Inicia loop while para processar cada linha da tabela
    while (trs[x]) {
        // 11. Exibe a linha atual no console para debug
        console.log(trs[x]);

        // 12. Seleciona todas as células (td) da linha atual
        const tds = trs[x].querySelectorAll("td");

        // 13. Calcula a média das 4 notas usando a função average()
        media = average(
            // Converte o texto de cada célula para número float
            parseFloat(tds[INDICES_NOTAS.n1].textContent), // Nota 1
            parseFloat(tds[INDICES_NOTAS.n2].textContent), // Nota 2
            parseFloat(tds[INDICES_NOTAS.n3].textContent), // Nota 3
            parseFloat(tds[INDICES_NOTAS.n4].textContent) // Nota 4
        );

        // 14. Incrementa o contador para ir para a próxima linha
        x++;

        // 15. Atualiza a célula da média na tabela com o valor calculado
        tds[INDICES_NOTAS.media].textContent = media;
    }
});
