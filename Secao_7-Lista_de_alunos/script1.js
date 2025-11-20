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
		{nome: "Daniel", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Maria", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Joao", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Joana", n1: 1, n2: 3, n3: 9, n4: 1.5},
		{nome: "Jose", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Arnaldo", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Lucas", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Luana", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Beatriz", n1: 10, n2: 3, n3: 7.5, n4: 3},
		{nome: "Sergio", n1: 10, n2: 3, n3: 7.5, n4: 3}
	];

	// 3. Itera sobre o array 'alunos' usando forEach
	alunos.forEach(aluno => {
		// 4. Calcula a media das notas do aluno
		aluno.media = average(aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4);		
	})

	const html = alunos.map(aluno => `
		<tr>
			<td>${aluno.nome}</td>
			<td>${aluno.n1}</td>
			<td>${aluno.n2}</td>
			<td>${aluno.n3}</td>
			<td>${aluno.n4}</td>
			<td>${aluno.media.toFixed(2)}</td>
		</tr>
	`).join("");

	document.querySelector("tbody").innerHTML = html;

	// 5. Exibe uma mensagem no console indicando que a lista de alunos foi processada
	console.log(alunos);
})();