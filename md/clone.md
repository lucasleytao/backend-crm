### Configurar Nova Máquina (Git Bash)

### Configurar Credenciais do GitHub
```bash
git config --global user.name "nome"
git config --global user.email "email"
```

### Listar Credenciais
```bash
git config --global --list
```

---

## Gerar e Configurar Chave SSH
### Verificar se já existe uma chave SSH
```bash
ls -al ~/.ssh
```

### Gerar nova chave SSH
```bash
ssh-keygen -t ed25519 -C "email"
```
- Pressione ``Enter`` para aceitar o local padrão de armazenamento.
- Se solicitado, defina uma senha ou deixe em branco para não proteger a chave com senha.

### Adicionar chave ao agente SSH
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Gerar chave pública
```bash
cat ~/.ssh/id_ed25519.pub
```
- ``Copie a chave pública gerada.``

### Configurar chave SSH no GitHub
1. Acesse o GitHub e clique no ícone do seu perfil no canto superior direito.
2. Vá em ``Settings``.
3. No menu lateral, clique em ``SSH and GPG keys``.
4. Clique em ``New SSH key``.
5. Preencha os campos:
   - ``Title:`` Nome para identificar esta chave (ex.: "Meu novo notebook").
   - ``Key:`` Cole a chave pública copiada anteriormente.
6. Clique em ``Add SSH key``.
   - Pode ser solicitado que você insira sua senha do GitHub para confirmar.

---

### Testar Conexão SSH no Terminal
```bash
ssh -T git@github.com
```
- ``Mensagem esperada de sucesso:``
  ```
  Hi username! You've successfully authenticated, but GitHub does not provide shell access.
  ```

### Resolver erro "Connection timed out"
1. Abra o arquivo de configuração SSH:
   ```bash
   nano ~/.ssh/config
   ```
2. Adicione as seguintes linhas:
   ```plaintext
   Host github.com
       Hostname ssh.github.com
       Port 443
   ```
3. Salve e feche:
   - ``CTRL + O:`` Salvar
   - ``ENTER:`` Confirmar
   - ``CTRL + X:`` Sair

4. Teste novamente a conexão:
   ```bash
   ssh -T git@github.com
   ```

### Primeira conexão - mensagem de confiança
Se surgir a mensagem:
```plaintext
The authenticity of host '[ssh.github.com]:443 ([20.201.28.152]:443)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
- Digite `yes` e pressione ``Enter``.

- ``Mensagem de sucesso:``
  ```
  Hi username! You've successfully authenticated, but GitHub does not provide shell access.
  ```

---

## Clonar Repositório

### No GitHub
- Copie o SSH do repositório:
  ```plaintext
  git@github.com:lucasleytao/backend-crm.git
  ```

### No Git Bash (pasta de destino)
- Clone o repositório:
  ```bash
  git clone git@github.com:lucasleytao/backend-crm.git
  ```

---

### Instalar Dependências do Projeto
```bash
npm install
```

---

### Configurar Variáveis de Ambiente (se necessário)
### Verifique arquivos de exemplo no repositório:
- `.env.example`
- `config.example.json`
- Ou arquivos similares.

### Crie um arquivo de configuração local:
```bash
cp .env.example .env
```

### Preencha as variáveis de ambiente:
- Abra o arquivo criado (ex.: `.env`) e insira as variáveis necessárias, como:
  - Chaves de API.
  - URLs de banco de dados.
  - Outras informações específicas.

### Teste o projeto:
```bash
npm start
```

---

### Configurar Controle de Versão (Contribuir com o Desenvolvimento)
### Verificar alterações:
```bash
git status
```

### Criar uma nova branch:
```bash
git checkout -b nome-da-branch
```

### Adicionar e commitar alterações:
```bash
git add .
git commit -m "mensagem"
```

### Enviar alterações para o repositório remoto:
```bash
git push origin nome-da-branch
```