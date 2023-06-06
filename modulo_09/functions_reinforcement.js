function procedimento1 (outraFuncao) {
    outraFuncao();
}

function procedimento2 () {
    console.log (' a função procedimento 2 foi executada com sucesso');
    return 'banana';
}

procedimento1 (procedimento2);

