// Funcoes auto-invocaveis
(function () {
    let isValid = false;
    console.log("menu", isValid);

    function init() {
        console.log("init do menu");
    }
    init();
}) ();