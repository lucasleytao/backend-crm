``Códigos de status HTTP:``

---

### ``1. Informativo (1xx)``
Esses códigos indicam que a requisição foi recebida e está sendo processada, sem ação necessária do cliente ou servidor.  
``100: Continue``: O cliente pode continuar a enviar o corpo da requisição.  
``101: Switching Protocols``: O servidor aceita mudar o protocolo (ex.: para WebSockets).  

---

### ``2. Lado do Cliente (4xx)``
Erros causados por requisições inválidas, malformadas ou não autorizadas pelo cliente.  

``400: Bad Request``: O cliente enviou uma requisição inválida (ex.: JSON malformado).  
``401: Unauthorized``: O cliente precisa autenticar para acessar o recurso.  
``403: Forbidden``: O cliente não tem permissão para acessar o recurso, mesmo autenticado.  
``404: Not Found``: O recurso solicitado não existe no servidor.  
``405: Method Not Allowed``: O método HTTP (ex.: POST) não é suportado pelo recurso.  
``429: Too Many Requests``: O cliente fez muitas requisições em pouco tempo (rate limit).

---

### ``3. Lado do Servidor (5xx)``  
Erros causados por falhas no processamento ou indisponibilidade do servidor.  

``500: Internal Server Error``: Erro genérico do servidor.  
``501: Not Implemented``: O servidor não suporta a funcionalidade requisitada.  
``502: Bad Gateway``: O servidor agiu como gateway e recebeu uma resposta inválida.  
``503: Service Unavailable``: O servidor está temporariamente indisponível.  
``504: Gateway Timeout``: O servidor agiu como gateway e não recebeu uma resposta a tempo.

---

### ``Extras: Sucesso e Redirecionamento``

#### ``2xx (Sucesso)``:  
Esses códigos indicam sucesso na requisição, geralmente tratados no cliente.  
``200: OK``: Requisição concluída com sucesso.  
``201: Created``: Recurso foi criado com sucesso (ex.: POST).  
``204: No Content``: Requisição bem-sucedida, mas sem conteúdo no corpo da resposta.  

#### ``3xx (Redirecionamento)``:  
Esses códigos instruem o cliente a realizar outra ação.  
``301: Moved Permanently``: O recurso foi movido permanentemente.  
``302: Found``: O recurso foi movido temporariamente.  
``304: Not Modified``: O recurso não foi modificado, útil para caching.

---

### ``Resumo das Categorias``  
| Categoria         | Códigos         | Exemplos                    |
|-------------------|-----------------|-----------------------------|
| Informativo       | ``1xx``         | 100, 101                   |
| Lado do Cliente   | ``4xx``         | 400, 401, 403, 404, 429    |
| Lado do Servidor  | ``5xx``         | 500, 501, 502, 503, 504    |
| Sucesso           | ``2xx``         | 200, 201, 204              |
| Redirecionamento  | ``3xx``         | 301, 302, 304              |