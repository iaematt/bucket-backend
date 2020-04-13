# Bucket 🧺

Aplicação completa para upload de imagens no host local ou na Amazon S3. O frontend foi desenvolvido em ReactJS e o backend em Node.js.

Para visualizar o código do projeto no GitHub: [Backend](https://github.com/iaematt/bucket-backend), [Frontend](https://github.com/iaematt/bucket-frontend)

## Instalações e usos
### API ⚙

Clone ou faça o downlod [desse repositório](https://github.com/iaematt/bucket-backend), acesse a pasta: *bucket-backend* e faça a instalação:

```
# Clone o repositório
$ git clone https://github.com/iaematt/bucket-backend

# Acesse a pasta do backend
$ cd bucket-backend/

# Instale as dependencias
$ yarn
```

Crie um arquivo **.env** com as seguintes configurações:

```
# URL da aplicação
APP_URL=

# Informações de login s3 da Amazon
AWS_ACCESS_KEY_ID=
AWS_DEFAULT_REGION=
AWS_SECRET_ACCESS_KEY=
BUCKET_NAME=

# Conexão com banco de dados MongoDB
MONGO_URL=

# Tipo do storage: s3 ou local
STORAGE_TYPE=
```

Execute a API: 

```
$ yarn dev
```

O servidor estará rodando na porta 3001, *localhost:3001*.

## Meta

[Portfólio](http://devbsb.com.br) – [E-Mail](mailto:matheusbastos@outlook.com) – [Instagram](https://instagram.com/iaematt_)  – [GitHub](https://github.com/iaematt)

*Distribuído sob a licença MIT.*

