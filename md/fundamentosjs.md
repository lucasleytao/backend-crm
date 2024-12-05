## Fundamentos de JavaScript

### 1. Declaração de Variáveis e Operações Básicas
```javascript
let a = 1; 
let b = 2;
let c = 'Lucas e '; 
let d = 'Beatriz';
let e = '1'; 
let f = '4';

console.log(a + b);
console.log(c + d);
console.log(e + f);
```

### 2. Boas-vindas com Variável
```javascript
let nome = 'Lucas';
console.log('Boas vindas, ' + nome);
```

### 3. Cálculo da Área de um Retângulo
```javascript
let base = 12; 
let altura = 15;
console.log('A área do retângulo corresponde a: ' + base * altura);
```

### 4. Verificação de Maioridade
```javascript
let idade = 17;
if (idade >= 18) {
    console.log('Maior de idade ``Liberado');
} else {
    console.log('Menor de idade ``Bloqueado');
}
```

### 5. Verificação de Número Par ou Ímpar
```javascript
let num = 2;
// let num = prompt('Digite um número inteiro qualquer: ');
if (num % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}
```

---

## Comentários

### Comentários Simples e Multilinhas
```javascript
// Este é um comentário simples.

/*
Este é um comentário
multilinha.
*/
```

---

## Alertas e Confirm

### Exemplo de `alert` e `confirm`
```javascript
alert('Isso é um alerta!');
let resposta = confirm('Seus dados estão corretos?');
```

---

## Entrada e Saída de Dados

### Entrada de Dados
```javascript
let nomen = prompt('Informe seu nome:');
let idaden = prompt('Informe sua idade:');
console.log('Seu nome é ' + nomen + ' e você tem ' + idaden + ' anos.');
```

### Saída de Dados
#### Console
```javascript
let minhaVariavel = 'Olá, mundo!';
console.log(minhaVariavel);
```

#### Documento HTML
```javascript
document.write('Saída de dados por meio de documento HTML utilizando JavaScript!');
```

---

## Tipos de Dados

### Tipos Primitivos
- ``Number``: Inteiros e ponto flutuante.
- ``String``: Cadeia de caracteres.
- ``Boolean``: `true` ou `false`.
- ``Undefined``: Variável declarada, mas sem valor definido.
- ``Null``: Ausência de valor ou valor nulo.
- ``Symbol (ES6)``: Propriedade única de objetos.

### Tipos de Referência
- ``Objeto (Object)``: Coleção de pares chave-valor.
- ``Array``: Lista de valores ordenados.
- ``Função (Function)``: Bloco de código reutilizável.
- ``Data (Date)``: Representação de datas e horários.
- ``RegExp``: Padrões de texto.

### Tipos Especiais
- ``NaN``: Valor numérico inválido.
- ``Infinity``: Valores infinitos (positivos ou negativos).

### Tipagem Dinâmica
JavaScript determina o tipo de variável em tempo de execução.

---

## Declaração e Manipulação de Variáveis

### Regras de Nomenclatura
- Começar com letra, sublinhado (_) ou cifrão ($).
- Podem conter letras, números, sublinhados e cifrões.
- Sensíveis a maiúsculas e minúsculas.
- Não usar palavras-chave reservadas.

### Exemplos
```javascript
let num = 10; // Tipo inteiro
let nums = '10'; // Tipo string

console.log(num);
console.log(num + nums);
console.log(num + 10);
console.log(num + nums + 20);
```

---

## Operadores

### Operadores Aritméticos
```javascript
console.log(a + b); // Adição
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // Divisão
console.log(a `` b); // Exponenciação
console.log(b % 2); // Resto da divisão
```

### Operadores de Comparação
```javascript
console.log(a == b); // Igualdade
console.log('5' == b); // Igualdade (ignora tipo)
console.log('5' === b); // Igualdade estrita
console.log(a != b); // Diferença
console.log('5' !== b); // Diferença estrita
```

---

## Estruturas Condicionais

### `if`, `else`, `else if`
```javascript
const idade = 18;
if (idade < 13) {
    console.log('Criança');
} else if (idade >= 13 && idade < 18) {
    console.log('Adolescente');
} else {
    console.log('Adulto');
}
```

### `switch`
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

## Estruturas de Repetição

### `for`
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### `while`
```javascript
let k = 1;
while (k <= 3) {
    console.log(k);
    k++;
}
```

### `do while`
```javascript
let j = 1;
do {
    console.log(j);
    j++;
} while (j < 4);
```

---

## Funções

### Declaração
```javascript
function saudacao() {
    console.log('Olá!');
}
saudacao();
```

### Arrow Function
```javascript
const arrowTeste = () => console.log('Arrow function funcionando!');
arrowTeste();
```

---

## Arrays

### Operações Básicas
```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.push(6); // Adiciona ao final
numeros.pop(); // Remove do final
console.log(numeros);
```

---

## Strings

### Manipulação
```javascript
const nome = 'Lucas';
console.log(nome.length); // Tamanho
console.log(nome.toUpperCase()); // Caixa alta
console.log(nome[0]); // Primeiro caractere
```

---

## Data e Hora
```javascript
const dataAtual = new Date();
console.log(dataAtual);
console.log(dataAtual.getFullYear()); // Ano atual
```

---

## Seleção de Elementos HTML

### Métodos Comuns
- `getElementById`
- `getElementsByTagName`
- `getElementsByClassName`
- `querySelector`
- `querySelectorAll`

```javascript
let elemento = document.getElementById('meuElemento');
let paragrafos = document.getElementsByTagName('p');
```