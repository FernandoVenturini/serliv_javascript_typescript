const INDICES_NOTAS = {
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
    media: 5,
}(function () {
    const trs = document.querySelectorAll("tbody tr");

    let x = 0;
    let media = 0;

    while (trs[x]) {
        console.log(trs[x]);

        const tds = trs[x].querySelectorAll("td");
        console.log(tds);

        media = avarege(
            parseFloat(tds[INDICES_NOTAS.n1].textContent),
            parseFloat(tds[INDICES_NOTAS.n2].textContent),
            parseFloat(tds[INDICES_NOTAS.n3].textContent),
            parseFloat(tds[INDICES_NOTAS.n4].textContent)
        );
        x++;

        tds[INDICES_NOTAS.media].textContent = media;
    }
});
