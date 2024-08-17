## Resumo completo sobre funções em JavaScript, com exemplos e analogias.

Funções em JavaScript são blocos de código reutilizáveis que executam uma tarefa específica. Elas são fundamentais para organizar e estruturar o código, permitindo modularidade e evitando repetição.

## 1. Declaração de função:

```javascript
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a).`;
}

let nome = "Ana";
let nome1 = "Lucas"
console.log(saudacao(nome1)); // "Olá, Lucas! Bem-vindo(a)."
```

Analogia: Pense em uma função como uma receita de bolo. A receita (função) tem um nome, pode receber ingredientes (parâmetros) e produz um resultado (retorno).

## 2. Expressão de função:

```javascript
const dobro = function(numero) {
    return numero * 2;
};

console.log(dobro(5)); // 10
```

## 3. Arrow functions (funções de seta):

```javascript
triplo = (numero) => numero * 3;

console.log(triplo(4)); // 12

// function triplo(numero){
//     return numero * 3;
// }

// console.log(triplo(4));
```

Arrow functions são uma forma mais concisa de escrever funções, especialmente úteis para funções simples.

## 4. Parâmetros e argumentos:

```javascript
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(5, 3)); // 8
console.log(soma(5));    // 5 (b assume o valor padrão 0)
```

Analogia: Parâmetros são como slots em uma máquina de venda automática. Você pode projetar a máquina para aceitar diferentes moedas (parâmetros) e definir valores padrão para alguns slots.

## 5. Retorno de funções:

```javascript
function maiorIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(maiorIdade(20)); // "Maior de idade"
console.log(maiorIdade(16)); // "Menor de idade"

// function maiorNumero(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
```

## 6. Funções de ordem superior:

```javascript
function executarOperacao(operacao, a, b) {
    return operacao(a, b);
}

const adicao = (x, y) => x + y;
console.log(executarOperacao(adicao, 5, 3)); // 8
```

Funções de ordem superior são funções que aceitam outras funções como argumentos ou retornam funções.

## 7. Closures:

```javascript
function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const contar = criarContador();
console.log(contar()); // 1
console.log(contar()); // 2
```

Closures permitem que uma função interna acesse variáveis da função externa, mesmo após a função externa ter terminado sua execução.

Analogia: Imagine uma caixa (função externa) contendo uma máquina de contagem (função interna). A máquina pode acessar e modificar o conteúdo da caixa, mesmo depois que a caixa foi fechada.

## 8. Métodos de objeto:

```javascript
const pessoa = {
    nome: "João",
    saudacao: function() {
        return `Olá, eu sou ${this.nome}`;
    }
};

console.log(pessoa.saudacao()); // "Olá, eu sou João"
```

## 9. Funções construtoras:

```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    };
}

const joao = new Pessoa("João", 30);
console.log(joao.apresentar()); // "Meu nome é João e tenho 30 anos."
```

Funções construtoras são usadas para criar objetos com propriedades e métodos semelhantes.

## 10. Funções recursivas:

```javascript
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
```

Funções recursivas são aquelas que chamam a si mesmas para resolver um problema.

Analogia: Imagine uma boneca russa. Cada boneca contém uma versão menor de si mesma, até chegar à menor boneca. Da mesma forma, uma função recursiva chama versões menores de si mesma até atingir um caso base.

Este resumo cobre os principais aspectos das funções em JavaScript. Elas são uma parte essencial da linguagem e dominá-las é crucial para se tornar um desenvolvedor JavaScript eficiente.