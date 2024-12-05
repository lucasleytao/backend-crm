# Comentários:

1. ``Importações do Firebase``:
   - Importação das funções `doc` e `getDoc` da biblioteca `firebase/firestore`
   - Importação da instância do Firestore (`db`) configurada no arquivo `firebase.js`

2. ``Declaração de Estados``:
   - Uso de `useState` para armazenar os dados obtidos do documento
   - Permite que a interface do usuário seja reativa a mudanças nos dados

3. ```useEffect```:
   - Usado para buscar os dados do Firestore quando o componente é montado
   - Também é acionado quando `props.match.params.id` muda

4. ``Função `fetchData```:
   - `doc(db, 'clientes', props.match.params.id)`: Cria uma referência ao documento específico
   - `getDoc(docRef)`: Faz a requisição ao Firestore para obter o documento
   - ``Tratamento de Erros``: Uso de bloco `try-catch` para capturar e exibir erros

5. ``Atualização dos Estados``:
   - Estados são atualizados com os dados retornados do documento
   - Uso de valores vazios se algum campo estiver ausente

6. ``Retorno do Componente``:
   - A interface exibe os valores armazenados nos estados

Esses comentários ajudam a entender o fluxo de trabalho no código e como as operações do Firebase Firestore são integradas ao React.