# Desafio-Backend-Node.js-REST-API

# Como testar
````
curl --request POST \
  --url http://localhost:3333/users/ \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.0' \
  --data '{
  "name": "teste",
  "email": "teste@email.com",
  "password": "123",
  "confirmPassword": "123",
	"role": "Administrador",
	
	"_comment": "Administrador / Usuário"
}'

````