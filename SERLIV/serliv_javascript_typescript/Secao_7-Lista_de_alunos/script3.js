// 1. Define e executa uma função anônima imediatamente (IIFE)
// Isso cria um escopo isolado para evitar poluir o escopo global
(function () {

	// Função para calcular a média
	function average(...notas) {
		const soma = notas.reduce((acc, nota) => acc + nota, 0);
		return soma / notas.length;
	}

	// 2. Dentro da IIFE, declara um array chamado 'alunos'
	const alunos = [
		{nome: "Daniel", notas: [10,  3, 6.5, 3]},
		{nome: "Maria", notas: [10,  5, 7.5, 3]},
		{nome: "Joao", notas: [10,  7, 8.5, 3]},
		{nome: "Joana", notas: [1,  4, 9, 1.5]},
		{nome: "Jose", notas: [10,  6, 7.5, 3]},		
		{nome: "Arnaldo", notas: [10, 3, 5.5, 3]},
		{nome: "Lucas", notas: [10,  5, 4.5, 3]},
		{nome: "Luana", notas: [10,  8, 3.5, 3]},
		{nome: "Beatriz", notas: [10,  3, 7.5, 3]},
		{nome: "Sergio", notas: [10,  2, 7.5, 3]}
	];

	// 3. Itera sobre o array 'alunos' usando forEach
	alunos.forEach(aluno => {
		// 4. Calcula a media das notas do aluno
		//aluno.media = average(aluno.notas[0], aluno.notas[1], aluno.notas[2], aluno.notas[3]);
		//aluno.media = average(...aluno.notas);
		aluno.media = average.apply(null, aluno.notas);
	})

	// 4. Gera o HTML para a tabela de alunos
	const html = alunos.map(aluno => `
		<tr>
			<td>${aluno.nome}</td> 
			${aluno.notas.map(nota => `<td>${nota}</td>`).join("")}
			<td>${aluno.media.toFixed(2)}</td>
		</tr>
	`).join("");

	document.querySelector("tbody").innerHTML = html;

	// 5. Exibe uma mensagem no console indicando que a lista de alunos foi processada
	console.log(alunos);
})();