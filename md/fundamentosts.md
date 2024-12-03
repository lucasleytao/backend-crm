## Fundamentos de TypeScript

### 1. Declaração de Variáveis e Operações Básicas
```typescript
let a: number = 1;
let b: number = 2;
let c: string = 'Lucas e ';
let d: string = 'Beatriz';
let e: string = '1';
let f: string = '4';

console.log(a + b);
console.log(c + d);
console.log(e + f);
```

### 2. Boas-vindas com Variável
```typescript
let nome: string = 'Lucas';
console.log('Boas vindas, ' + nome);
```

### 3. Cálculo da Área de um Retângulo
```typescript
let base: number = 12;
let altura: number = 15;
console.log('A área do retângulo corresponde a: ' + base * altura);
```

### 4. Verificação de Maioridade
```typescript
let idade: number = 17;
if (idade >= 18) {
    console.log('Maior de idade **Liberado');
} else {
    console.log('Menor de idade **Bloqueado');
}
```

### 5. Verificação de Número Par ou Ímpar
```typescript
let num: number = 2;
// let num = parseInt(prompt('Digite um número inteiro qualquer: ') || '0');
if (num % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}
```

---

## Tipos de Dados

### Tipos Primitivos e Referências
```typescript
let numero: number = 123; // Tipo Number
let texto: string = 'Olá!'; // Tipo String
let verdadeiro: boolean = true; // Tipo Boolean
let indefinido: undefined = undefined; // Tipo Undefined
let nulo: null = null; // Tipo Null
```

---

## Declaração e Manipulação de Variáveis

### Exemplos
```typescript
let inteiro: number = 10;
let textoNum: string = '10';

console.log(inteiro);
console.log(inteiro + textoNum); // Concatenação
console.log(inteiro + 10); // Soma
```

### Reatribuição de Variáveis
```typescript
let x: number = 10;
x = 5;
console.log(x);

// Constantes não podem ser reatribuídas
const constante: number = 100;
// constante = 200; // Erro
```

---

## Operadores

### Operadores Aritméticos
```typescript
let a: number = 5;
let b: number = 2;

console.log(a + b); // Adição
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // Divisão
console.log(a ** b); // Exponenciação
console.log(a % b); // Resto da Divisão
```

### Operadores de Comparação
```typescript
console.log(a == b); // Igualdade
console.log('5' == b); // Igualdade (ignora tipo)
console.log('5' === b); // Igualdade estrita
console.log(a != b); // Diferença
console.log('5' !== b); // Diferença estrita
```

---

## Estruturas Condicionais

### `if`, `else`, `else if`
```typescript
const idade: number = 18;
if (idade < 13) {
    console.log('Criança');
} else if (idade >= 13 && idade < 18) {
    console.log('Adolescente');
} else {
    console.log('Adulto');
}
```

### `switch`
```typescript
const fruta: string = 'banana';
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
```typescript
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}
```

### `while`
```typescript
let k: number = 1;
while (k <= 3) {
    console.log(k);
    k++;
}
```

### `do while`
```typescript
let j: number = 1;
do {
    console.log(j);
    j++;
} while (j < 4);
```

---

## Funções

### Declaração de Funções
```typescript
function saudacao(): void {
    console.log('Olá!');
}
saudacao();

function cumprimento(nome: string): void {
    console.log('Olá, ' + nome);
}
cumprimento('Lucas');
```

### Função com Retorno
```typescript
function soma(a: number, b: number): number {
    return a + b;
}

let resultado: number = soma(100, 5);
console.log(resultado);
```

### Arrow Function
```typescript
const arrowTeste = (): void => console.log('Arrow function funcionando!');
arrowTeste();
```

---

## Arrays

### Operações Básicas
```typescript
const numeros: (number | string)[] = [1, 2, 3, 4, 5];
numeros.push('maçã', 6); // Adiciona ao final
numeros.pop(); // Remove do final
console.log(numeros);

console.log(numeros[1]); // Acessa o segundo elemento
```

---

## Strings

### Manipulação
```typescript
const nome: string = 'Lucas';
console.log(nome.length); // Tamanho
console.log(nome.toUpperCase()); // Caixa alta
console.log(nome[0]); // Primeiro caractere
```

---

## Data e Hora
```typescript
const dataAtual: Date = new Date();
console.log(dataAtual);
console.log(dataAtual.getFullYear()); // Ano atual
```

---

## Seleção de Elementos HTML

### Métodos Comuns
```typescript
let elemento = document.getElementById('meuElemento') as HTMLElement;
let paragrafos = document.getElementsByTagName('p');
let classes = document.getElementsByClassName('minhaClasse');
let seletor = document.querySelector('#meuElemento') as HTMLElement;
let todos = document.querySelectorAll('p');
```

```typescript
// Navegação no DOM
let paragrafo = document.getElementById('meuParagrafo') as HTMLElement;
let paiParagrafo = paragrafo.parentNode;
```