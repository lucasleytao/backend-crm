## Estudo Avançado sobre Fundamentos de TypeScript

Este documento organiza e aprimora o conteúdo fundamental de JavaScript, adaptando-o para **TypeScript**. O TypeScript adiciona tipagem estática, interfaces e outros recursos para facilitar o desenvolvimento escalável e seguro.

---

## 1. Variáveis e Tipagem

### Exemplo 1: Declarando Variáveis com Tipos
```typescript
let a: number = 1, b: number = 2;
let c: string = 'Lucas e ', d: string = 'Beatriz';
let e: string = '1', f: string = '4';

console.log(a + b); // Soma numérica
console.log(c + d); // Concatenação de strings
console.log(e + f); // Concatenação de strings
```
---

### Exemplo 2: Mensagem de Boas-Vindas
```typescript
let nome: string = 'Lucas';
console.log(`Boas-vindas, ${nome}`);
```

---

### Exemplo 3: Calculando a Área de um Retângulo
```typescript
let base: number = 12, altura: number = 15;
console.log(`A área do retângulo corresponde a: ${base * altura}`);
```

---

### Exemplo 4: Verificando Maioridade (Estrutura Condicional)
```typescript
let idade: number = 17;
if (idade >= 18) {
    console.log('Maior de idade **Liberado');
} else {
    console.log('Menor de idade **Bloqueado');
}
```

---

### Exemplo 5: Verificando Número Par ou Ímpar
```typescript
let num: number = 2; // Substituir por `prompt()` para entrada do usuário
if (num % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}
```

---

## 2. Entrada e Saída de Dados

### Entrada de Dados com `prompt`
```typescript
let nome: string | null = prompt('Informe seu nome:');
let idade: number | null = nome ? parseInt(prompt('Informe sua idade:') || '0') : null;

if (nome && idade !== null) {
    console.log(`Seu nome é ${nome} e você tem ${idade} anos.`);
}
```

---

## 3. Tipos de Dados

### Tipos Primitivos e Interfaces
```typescript
// Tipos Primitivos
let num: number = 10;
let texto: string = 'TypeScript';
let booleano: boolean = true;

// Definição de Interface para Objeto
interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa: Pessoa = { nome: 'Lucas', idade: 25 };
console.log(pessoa);
```

---

## 4. Operadores Aritméticos
```typescript
let a: number = 10, b: number = 5;

console.log(a + b); // Soma
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // Divisão
console.log(a ** b); // Exponenciação
console.log(a % b); // Resto da divisão
```

---

## 5. Estruturas Condicionais

### `if`, `else if`, `else`
```typescript
let idade: number = 18;

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

## 6. Estruturas de Repetição

### `for` (Para)
```typescript
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}
```

---

### `while` (Enquanto)
```typescript
let k: number = 1;

while (k <= 3) {
    console.log(k);
    k++;
}
```

---

### `do while` (Faça Enquanto)
```typescript
let j: number = 1;

do {
    console.log(j);
    j++;
} while (j <= 3);
```

---

## 7. Funções

### Declarando e Invocando Funções
```typescript
function saudacao(): void {
    console.log('Olá! Aqui estou utilizando uma função.');
}

saudacao();
```

---

### Com Argumentos e Retorno
```typescript
function soma(a: number, b: number): number {
    return a + b;
}

let resultado: number = soma(10, 5);
console.log(resultado); // 15
```

---

### Arrow Functions
```typescript
const arrowTeste = (): void => console.log('Isso também funciona!');
arrowTeste();
```

---

## 8. Arrays (Listas)

### Manipulação de Arrays
```typescript
let numeros: (number | string)[] = [1, 2, 3, 4, 5];

numeros.push(6, 'maçã'); // Adiciona no final
numeros.pop(); // Remove do final
numeros.shift(); // Remove do início

console.log(numeros.indexOf(3)); // Índice do elemento "3"
console.log(numeros.length); // Tamanho do array
```

---

## 9. Strings

### Métodos de Strings
```typescript
let texto: string = 'TypeScript é incrível!';
console.log(texto.length); // Comprimento
console.log(texto.toUpperCase()); // Caixa alta
console.log(texto.toLowerCase()); // Caixa baixa
```

---

## 10. Objetos e Datas

### Trabalhando com Datas
```typescript
const dataAtual: Date = new Date();
console.log(dataAtual);
console.log(dataAtual.getFullYear()); // Ano atual
```