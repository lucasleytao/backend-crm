## Estudo Avançado sobre Fundamentos de Python

Este documento sintetiza conceitos básicos em ``Python``, destacando sua sintaxe simples e poderosa.

---

## 1. Variáveis e Operações

### Exemplo 1: Declarando Variáveis e Realizando Operações
```python
a = 1
b = 2
c = 'Lucas e '
d = 'Beatriz'
e = '1'
f = '4'

print(a + b)  # Soma numérica
print(c + d)  # Concatenação de strings
print(e + f)  # Concatenação de strings
```

---

### Exemplo 2: Mensagem de Boas-Vindas
```python
nome = 'Lucas'
print(f'Boas-vindas, {nome}')
```

---

### Exemplo 3: Calculando a Área de um Retângulo
```python
base = 12
altura = 15
print(f'A área do retângulo corresponde a: {base * altura}')
```

---

### Exemplo 4: Verificando Maioridade (Estrutura Condicional)
```python
idade = 17
if idade >= 18:
    print('Maior de idade ``Liberado')
else:
    print('Menor de idade ``Bloqueado')
```

---

### Exemplo 5: Verificando Número Par ou Ímpar
```python
num = 2  # Substituir por input() para entrada do usuário
if num % 2 == 0:
    print('O número é par')
else:
    print('O número é ímpar')
```

---

## 2. Entrada e Saída de Dados

### Entrada de Dados com `input`
```python
nome = input('Informe seu nome: ')
idade = int(input('Informe sua idade: '))

print(f'Seu nome é {nome} e você tem {idade} anos.')
```

---

## 3. Tipos de Dados

### Tipos Básicos
```python
num = 10  # Inteiro
texto = 'Python'  # String
booleano = True  # Booleano

# Dicionários (similar a objetos em JS)
pessoa = {"nome": "Lucas", "idade": 25}
print(pessoa)
```

---

## 4. Operadores Aritméticos
```python
a = 10
b = 5

print(a + b)  # Soma
print(a - b)  # Subtração
print(a * b)  # Multiplicação
print(a / b)  # Divisão
print(a `` b)  # Exponenciação
print(a % b)  # Resto da divisão
```

---

## 5. Estruturas Condicionais

### `if`, `elif`, `else`
```python
idade = 18

if idade < 13:
    print('Criança')
elif 13 <= idade < 18:
    print('Adolescente')
else:
    print('Adulto')
```

---

### `match case` (Introduzido no Python 3.10)
```python
fruta = 'banana'

match fruta:
    case 'banana':
        print('A fruta é uma banana')
    case 'laranja':
        print('A fruta é uma laranja')
    case _:
        print('A fruta não foi encontrada')
```

---

## 6. Estruturas de Repetição

### `for` (Para)
```python
for i in range(1, 6):  # De 1 a 5
    print(i)
```

---

### `while` (Enquanto)
```python
k = 1

while k <= 3:
    print(k)
    k += 1
```

---

### `do while` Simulado
```python
j = 1

while True:
    print(j)
    j += 1
    if j > 3:
        break
```

---

## 7. Funções

### Declarando e Chamando Funções
```python
def saudacao():
    print('Olá! Aqui estou utilizando uma função.')

saudacao()
```

---

### Com Argumentos e Retorno
```python
def soma(a: int, b: int) -> int:
    return a + b

resultado = soma(10, 5)
print(resultado)  # 15
```

---

## 8. Listas (Arrays)

### Manipulação de Listas
```python
numeros = [1, 2, 3, 4, 5]

numeros.append(6)  # Adiciona no final
numeros.pop()  # Remove do final
numeros.pop(0)  # Remove do início

print(numeros.index(3))  # Índice do elemento "3"
print(len(numeros))  # Tamanho da lista
```

---

## 9. Strings

### Métodos de Strings
```python
texto = 'Python é incrível!'
print(len(texto))  # Comprimento
print(texto.upper())  # Caixa alta
print(texto.lower())  # Caixa baixa
```

---

## 10. Datas

### Trabalhando com Datas
```python
from datetime import datetime

data_atual = datetime.now()
print(data_atual)
print(data_atual.year)  # Ano atual
```