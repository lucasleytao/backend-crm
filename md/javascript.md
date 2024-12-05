## Estudo Avançado sobre Fundamentos de JavaScript

Este documento organiza e aprimora o conteúdo fundamental de JavaScript, aplicando boas práticas e fornecendo explicações detalhadas para uma melhor compreensão.

---

## 1. Variáveis Básicas e Operações

### Exemplo 1: Declarando Variáveis e Realizando Operações
```javascript
let a = 1, b = 2;
let c = 'Lucas e ', d = 'Beatriz';
let e = '1', f = '4';

console.log(a + b); // Soma numérica
console.log(c + d); // Concatenação de strings
console.log(e + f); // Concatenação de strings
```

---

### Exemplo 2: Mensagem de Boas-Vindas
```javascript
let nome = 'Lucas';
console.log('Boas vindas, ' + nome);
```

---

### Exemplo 3: Calculando a Área de um Retângulo
```javascript
let base = 12, altura = 15;
console.log('A área do retângulo corresponde a: ' + (base * altura));
```

---

### Exemplo 4: Verificando Maioridade (Estrutura Condicional)
```javascript
let idade = 17;
if (idade >= 18) {
    console.log('Maior de idade ``Liberado');
} else {
    console.log('Menor de idade ``Bloqueado');
}
```

---

### Exemplo 5: Verificando Número Par ou Ímpar
```javascript
let num = 2; // Substituir por `prompt()` para entrada do usuário
if (num % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}
```

---

## 2. Entrada e Saída de Dados

### Alerta e Confirmação
```javascript
alert('Isso é um alerta!');
let resposta = confirm('Seus dados estão corretos?');
```

---

### Entrada de Dados
```javascript
let nome = prompt('Informe seu nome:');
let idade = prompt('Informe sua idade:');

console.log('Seu nome é ' + nome + ' e você tem ' + idade + ' anos.');
```

---

### Saída de Dados
#### Pelo Console
```javascript
let minhaVariavel = 'Olá, mundo!';
console.log(minhaVariavel);
```

#### Por Documento HTML
```javascript
document.write('Saída de dados por meio de documento HTML utilizando JavaScript!');
```

---

## 3. Tipos de Dados

### Tipos Primitivos
- ``Number``: Números inteiros e de ponto flutuante.
- ``String``: Cadeia de caracteres.
- ``Boolean``: Valores `true` ou `false`.
- ``Undefined``: Variável declarada, mas sem valor definido.
- ``Null``: Ausência intencional de valor.
- ``Symbol (ES6)``: Identificador único.

---

### Tipos de Referência
- ``Objeto (Object)``: Coleção de pares chave-valor.
- ``Array``: Lista ordenada de valores.
- ``Função (Function)``: Blocos de código reutilizáveis.
- ``Data (Date)``: Representação de datas e horários.
- ``RegExp``: Expressões regulares para padrões de texto.

---

### Exemplos de Tipo de Dados
```javascript
let objeto = {};
let array = [];
let meuNull = null;
let meuUndefined = undefined;

console.log(typeof objeto); // "object"
console.log(typeof array); // "object"
console.log(typeof meuNull); // "object"
console.log(typeof meuUndefined); // "undefined"
```

---

## 4. Operadores Aritméticos
```javascript
let a = 10, b = 5;

console.log(a + b); // Soma
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // Divisão
console.log(a `` b); // Exponenciação
console.log(a % b); // Resto da divisão
```

---

## 5. Estruturas Condicionais

### `if`, `else if`, `else`
```javascript
let idade = 18;

if (idade < 13) {
    console.log('Criança');
} else if (idade >= 13 && idade < 18) {
    console.log('Adolescente');
} else {
    console.log('Adulto');
}
```

---

### `switch case`
```javascript
const fruta = 'banana';

switch (fruta) {
    case 'banana':
        console.log('A fruta é uma banana');
        break;
    case 'laranja':
        console.log('A fruta é uma laranja');
        break;
    default:
        console.log('A fruta não foi encontrada');
        break;
}
```

---

## 6. Estruturas de Repetição

### `for` (Para)
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

### `while` (Enquanto)
```javascript
let k = 1;

while (k <= 3) {
    console.log(k);
    k++;
}
```

---

### `do while` (Faça Enquanto)
```javascript
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 3);
```

---

## 7. Funções

### Declarando e Invocando Funções
```javascript
function saudacao() {
    console.log('Olá! Aqui estou utilizando uma função.');
}

saudacao();
```

---

### Com Argumentos e Retorno
```javascript
function soma(a, b) {
    return a + b;
}

let resultado = soma(10, 5);
console.log(resultado); // 15
```

---

### Arrow Functions
```javascript
const arrowTeste = () => console.log('Isso também funciona!');
arrowTeste();
```

---

## 8. Arrays (Listas)

### Manipulação de Arrays
```javascript
let numeros = [1, 2, 3, 4, 5];

numeros.push(6); // Adiciona no final
numeros.pop(); // Remove do final
numeros.shift(); // Remove do início

console.log(numeros.indexOf(3)); // Índice do elemento "3"
console.log(numeros.length); // Tamanho do array
```

---

## 9. Strings

### Métodos de Strings
```javascript
let texto = 'JavaScript é incrível!';
console.log(texto.length); // Comprimento
console.log(texto.toUpperCase()); // Caixa alta
console.log(texto.toLowerCase()); // Caixa baixa
```

---

## 10. Objetos e Datas

### Trabalhando com Datas
```javascript
const dataAtual = new Date();
console.log(dataAtual);
console.log(dataAtual.getFullYear()); // Ano atual
```