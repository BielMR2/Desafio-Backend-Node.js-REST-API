# Desafio-Backend-Node.js-REST-API

## Como testar

### Baixar dependências

````
    npm i
````

### Executar migrações

````
    npm run migrate
````

### Iniciar server

````
    npm start / npm run dev
````

### Testes automatizados com Jest

````
    npm test
````

## Requests

### Sessions

#### Create
````
POST /sessions HTTP/1.1
Content-Type: application/json
User-Agent: insomnia/8.6.0
Host: localhost:3333
Content-Length: 56

{
	"email": "teste@email.com",
	"password": "123"
}
````

### Users

#### Create
````
POST /users/ HTTP/1.1
Content-Type: application/json
User-Agent: insomnia/8.6.0
Host: localhost:3333
Content-Length: 172

{
	"name": "teste",
	"email": "teste@email.com",
	"password": "123",
	"confirmPassword": "123",
	"role": "Administrador",
	
	"__tips-role": "Administrador / Usuário"
}
````
#### Delete
````
DELETE /users/2 HTTP/1.1
Content-Type: application/json
User-Agent: insomnia/8.6.0
Host: localhost:3333
````
#### Update
````
PUT /users HTTP/1.1
Content-Type: application/json
User-Agent: insomnia/8.6.0
Host: localhost:3333
Content-Length: 106

{
	"name": "",
	"email": "",
	"oldPassword": "",
	"newPassword": "",
	"confirmPassword": "",
	"role": ""
}
````
#### Index
````
GET /users/index HTTP/1.1
User-Agent: insomnia/8.6.0
Host: localhost:3333
````
#### Show
````
GET /users?id=&email=&name=&role= HTTP/1.1
User-Agent: insomnia/8.6.0
Host: localhost:3333
````

### Tasks

#### Create
````
POST /tasks HTTP/1.1
Content-Type: application/json
User-Agent: insomnia/8.6.0
Host: localhost:3333
Content-Length: 180

{
	"title": "teste",
	"priority": false,
	"completed": true,
	
	
	"__example": {
		"outherUser": "1",
		"title": "Título de uma nota",
		"priority": true,
		"completed": false
	}
}
````

#### Delete
````
DELETE /tasks/4 HTTP/1.1
User-Agent: insomnia/8.6.0
Host: localhost:3333
````

#### Update
````
PUT /tasks/5 HTTP/1.1
Content-Type: application/json
User-Agent: insomnia/8.6.0
Host: localhost:3333
Content-Length: 61

{
	"title": "teste",
	"priority": true,
	"completed": true 
}
````

#### Index
````
GET /tasks/index HTTP/1.1
User-Agent: insomnia/8.6.0
Host: localhost:3333
````

#### Show
````
GET /tasks/?note_id=5&title=&priority=&completed= HTTP/1.1
User-Agent: insomnia/8.6.0
Host: localhost:3333
````

#### Complete
````
PATCH /tasks/1/complete HTTP/1.1
User-Agent: insomnia/8.6.0
Host: localhost:3333
````
