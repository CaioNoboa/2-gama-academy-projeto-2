const listaProdutos = require('./data')

// Resoluções dos exercícios
// Exercício 1
function exercicio1(){
    var totalEmEstoque = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];        
        totalEmEstoque += produto.qtdEstoque;
    }
    console.log("O total de itens em estoque é " + totalEmEstoque)
}

// Exercício 2
function exercicio2(){
    var totalDestaque = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.emDestaque == "sim"){
            totalDestaque += produto.qtdEstoque;
        }        
    }
    console.log("O total de itens em destaque é " + totalDestaque)
}

// Exercício 3
function exercicio3(){
    var totalDisponivel = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.disponivel == "sim"){
            totalDisponivel += produto.qtdEstoque;            
        }
    }
    console.log("O total de itens disponíveis é " + totalDisponivel)
}

// Exercício 4
function exercicio4(){
    var produtosDisponiveisDestaque = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if ((produto.disponivel == "sim") && (produto.emDestaque == "sim")){
            produtosDisponiveisDestaque += produto.qtdEstoque;
            // produtosDisponiveisDestaque ++ //seria para ver a quantidade de produtos (nao itens)
        }       
    }
    console.log("O total de itens disponíveis e em destaque é " + produtosDisponiveisDestaque)
}

// Exercício 5
function exercicio5(){
    var inventarioEmpresa = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.qtdEstoque > 0){
            inventarioEmpresa += produto.preco * produto.qtdEstoque
        }
    }
    console.log("O inventário total da empresa é R$" + inventarioEmpresa)
}

// Exercício 6
function exercicio6(){
    // Para saber se um produto é o mais caro ou o mais barato, precisa sempre de um valor de referência, em geral, o primeiro valor da lista
    let produtoMaisCaro = listaProdutos[0];
    for (let i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.preco > produtoMaisCaro.preco){
            produtoMaisCaro = produto
        }
    }
    console.log("O produto mais caro da empresa é:")
    console.log(produtoMaisCaro)
}

// Exercício 7
function exercicio7(){
    let produtoMaisBarato = listaProdutos[0];
    for (let i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.preco < produtoMaisBarato.preco){
            produtoMaisBarato = produto
        }
    }
    console.log("O produto mais barato da empresa é:")
    console.log(produtoMaisBarato)
}

// Exercício 8
function exercicio8(){
    let estoqueMaisValioso = listaProdutos[0];
    for (let i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.disponivel == "sim"){
            if (produto.preco * produto.qtdEstoque > estoqueMaisValioso.preco * estoqueMaisValioso.qtdEstoque){
                estoqueMaisValioso = produto
            }
        }
    }
    console.log("O estoque mais valioso da empresa é do produto " + estoqueMaisValioso.descricao + "cujo valor de estoque é R$" + estoqueMaisValioso.preco*estoqueMaisValioso.qtdEstoque)
}

// Exercício 9
function exercicio9(){
    let estoqueMaisBarato = listaProdutos[0];
    for (let i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.disponivel == "sim"){
            if (produto.preco * produto.qtdEstoque < estoqueMaisBarato.preco * estoqueMaisBarato.qtdEstoque){
                estoqueMaisBarato = produto
            }
        }
    }
    console.log("O estoque mais barato da empresa é do produto " + estoqueMaisBarato.descricao + "cujo valor de estoque é R$" + estoqueMaisBarato.preco*estoqueMaisBarato.qtdEstoque)
}

// Exercício 10
function exercicio10(){
    var inventarioEmpresa = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.qtdEstoque > 0){
            inventarioEmpresa += produto.preco * produto.qtdEstoque
        }
    }
    console.log("Valor do ticket médio dos produtos da empresa é R$ " + (inventarioEmpresa/listaProdutos.length))
}

// Exercício 11
function exercicio11(){
    var listaDeptos = [];
    // Para saber quais departamentos tem:    
    let codDepto = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        if (produto.departamento.idDepto != codDepto){           
            codDepto = produto.departamento.idDepto;
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0
            };
            listaDeptos.push(itemLista);
        }
    }    
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        for(j = 0; j < listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                break;
            }
        }
    }
    for(j = 0; j < listaDeptos.length; j++){
        console.log(`O total de itens do departamento "${listaDeptos[j].nomeDepto}" é ${listaDeptos[j].somatoriaItens}`)
    }
}
console.log("A resposta do exercício 11 é:")
console.log(exercicio11())
// listaProdutos.map (produto => console.log(produto.departamento.nomeDepto))

// Exercício 12
function exercicio12(){
    var listaDeptos = [];    
    // Para saber quais departamentos tem:    
    let codDepto = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        if (produto.departamento.idDepto != codDepto){
            // console.log(produto.departamento.nomeDepto);
            codDepto = produto.departamento.idDepto;

            // Encontrei os departamentos, agora definirei uma pequena estrutura para armazenar na lista, contendo o nome do dpto e inicialmente a qtd zerada
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                inventarioDepto: 0
            };
            listaDeptos.push(itemLista);
        }
    }
    // Agora percorro novamente a lista e, para cada produto, percorro os departamentos e somo o estoque
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        let inventarioProduto = produto.preco * produto.qtdEstoque
        
        // Para cada produto na lista, eu preciso encontrar seu respectivo departamento na outra lista e somar ao seu estoque
        // Tenho que percorrer a lista de departamentos     
        for (j = 0; j < listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){ // o dpto do produto corresponde ao dpto da lista?
                listaDeptos[j].inventarioDepto += inventarioProduto;
                break;
            }         
        }        
    }
    for (j = 0; j < listaDeptos.length; j++){
        console.log(`O inventário do departamento "${listaDeptos[j].nomeDepto}" é R$${listaDeptos[j].inventarioDepto}`)
    }
}
console.log(`A resposta do exercício 12 é:`)
console.log(exercicio12())

// Exercício 13
function exercicio13(){
    // Ticket = valor total dos produtos / qtd itens
    var listaDeptos = [];
    let codDepto = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        if (produto.departamento.idDepto != codDepto){

            codDepto = produto.departamento.idDepto;

            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                ticketMedio: 0,
                somatoriaItens: 0,
                inventarioProduto: 0,                
            };
            listaDeptos.push(itemLista);
        }
    }
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];        
        for(j = 0; j < listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                listaDeptos[j].inventarioProduto += produto.preco * produto.qtdEstoque;                
                break;
            }
        }
    }
    for(j = 0; j < listaDeptos.length; j++){
        listaDeptos[j].ticketMedio = listaDeptos[j].inventarioProduto / listaDeptos[j].somatoriaItens;
        console.log(`O ticket médio do departamento "${listaDeptos[j].nomeDepto}" é R$${listaDeptos[j].ticketMedio}`)
    }
}
console.log(`A resposta do exercício 13 é:`)
console.log(exercicio13())

// Exercício 14
function exercicio14(){
    // preciso do inventario por departamento e depois ver o mais valioso
    var listaDeptos = [];
    let codDepto = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        if (produto.departamento.idDepto != codDepto){
            codDepto = produto.departamento.idDepto;
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                inventarioProduto: 0,
            };
            listaDeptos.push(itemLista);
        }
    }
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];        
        for(j = 0; j < listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){                
                listaDeptos[j].inventarioProduto += produto.preco * produto.qtdEstoque;                
                break;
            }
        }
    }
    let deptoMaisValioso = listaDeptos[0];
    for(j = 1; j < listaDeptos.length; j++){
        if (listaDeptos[j].inventarioProduto > deptoMaisValioso.inventarioProduto) {
            deptoMaisValioso = listaDeptos[j]
        }
    }
    console.log(`Resposta exercício 14: o departamento mais valioso é o "${deptoMaisValioso.nomeDepto}"`)
}
console.log(exercicio14())

// Exercício 15
function exercicio15(){
    var listaDeptos = [];
    let codDepto = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];
        if (produto.departamento.idDepto != codDepto){
            codDepto = produto.departamento.idDepto;
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                inventarioProduto: 0,
            };
            listaDeptos.push(itemLista);
        }
    }
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos [i];        
        for(j = 0; j < listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){                
                listaDeptos[j].inventarioProduto += produto.preco * produto.qtdEstoque;                
                break;
            }
        }
    }
    // console.log(listaDeptos)

    let deptoMenosValioso = listaDeptos [0];
    for(j = 1; j < listaDeptos.length; j++){
        let depto = listaDeptos[j];
        if (depto.inventarioProduto < deptoMenosValioso.inventarioProduto) {
            deptoMenosValioso = depto
        }
    }
    console.log(`Resposta exercício 15: o departamento menos valioso é o "${deptoMenosValioso.nomeDepto}"`)
}
console.log(exercicio15())