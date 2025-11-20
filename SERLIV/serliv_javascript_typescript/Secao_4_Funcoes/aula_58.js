// Parametros para funcoes auto-invocaveis:
(function (n1, n2, n3) {
    let isValid = false;
    console.log("menu", isValid, n1, n2, n3);

    function init() {
        console.log("init do menu");
    }
    init();
}) (1, 2, 3);