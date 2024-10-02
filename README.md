# Dinosaurs API

![Dinosaur](assets/dinosaur.avif)

Esta é uma API para gerenciar informações sobre dinossauros. A API permite criar, ler, atualizar e deletar (CRUD) dinossauros em um banco de dados MongoDB Atlas. A aplicação é construída usando TypeScript, Node.js e Prisma.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação utilizada para escrever a aplicação.
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Prisma**: ORM utilizado para gerenciar as interações com o banco de dados.
- **MongoDB Atlas**: Serviço de banco de dados em nuvem.

## Instalação

1. **Clone o repositório**:

```sh
 git clone https://github.com/jaobarreto/API-dinosaurs.git
 cd .\src\
```

2. **Instale as dependências**:

```sh
  npm install
```

3. **Configure as variáveis de ambiente**: Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

```sh
DATABASE_URL="sua_url_do_mongo_atlas"
JWT_SECRET="seu_segredo_jwt"
```

## Scripts

- **Iniciar o servidor em modo de desenvolvimento**:

```sh
  npm run dev
```

## Endpoints

**Autenticação**:

Login:

- **URL**: `/login`
- **Método**: `POST`
- **Exemplo de corpo da requisição**:

```json
{
  "email": "usuario@example.com",
  "password": "sua_senha",
  "role": "role_criada"
}
```

- Resposta de Sucesso:

```json
{
  "token": "seu_jwt_token"
}
```

**Usuários**

Criar um Usuário:

- **URL**: `/user`
- **Método**: `POST`
- **Exemplo de corpo da requisição**

```json
{
  "email": "usuario@example.com",
  "password": "sua_senha",
  "role": "role_criada"
}
```

**Dinossauros**:

Criar um Dinossauro:

- **URL**: `/dinosaur`
- **Método**: `POST`
- **Autenticação**: `Bearer Token`
- **Exemplo de corpo da requisição**:

```json
{
  "name": "Triceratops",
  "period": "Late Cretaceous",
  "diet": "Herbivore",
  "length": 9,
  "weight": 6000,
  "description": "Easily recognized by its three horns and large bony frill at the back of its head."
}
```

Obter todos os Dinossauros:

- **URL**: `/dinosaurs`
- **Método**: `GET`
- **Parâmetros de Consulta** (Opcionais):
  - `period` (string): Filtra dinossauros pelo período.
  - `diet` (string): Filtra dinossauros pela dieta
  - `length` (number): Filtra dinossauros pelo comprimento
  - `weight` (number): Filtra dinossauros pelo peso
  - `page` (number): Página de paginação
  - `limit` (number): Limite de dinossauros por página

**Exemplo de URL**:

```sh
/dinosaurs?period=Late+Cretaceous&diet=Herbivore&page=1&limit=10
```

Obter um Dinossauro pelo ID:

- **URL**: `/dinosaur/:id`
- **Método**: `GET`

Atualizar um Dinossauro:

- **URL**: `/dinosaur/:id`
- **Método**: `PUT`
- **Autenticação**: `Bearer Token`
- **Exemplo de corpo da requisição**:

```json
{
  "name": "Tyrannosaurus Rex",
  "period": "Late Cretaceous",
  "diet": "Carnivore",
  "length": 12.3,
  "weight": 8000,
  "description": "A large carnivorous dinosaur."
}
```

**Deletar um Dinossauro**:

- **URL**: `/dinosaur/:id`
- **Método**: `DELETE`
- **Autenticação**: `Bearer Token`

## Dinossauro em JSON

```json
{
  "name": "Stegosaurus",
  "period": "Late Jurassic",
  "diet": "Herbivore",
  "length": 9.0,
  "weight": 3100.0,
  "description": "Known for its distinctive back plates and spiked tail, used for defense against predators."
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
