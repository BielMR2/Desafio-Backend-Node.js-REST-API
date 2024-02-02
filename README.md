[api-requests.json](https://github.com/BielMR2/Desafio-Backend-Node.js-REST-API/files/14141626/api-requests.json)# Desafio-Backend-Node.js-REST-API

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

## Insomnia
[Uploading{"_type":"export","__export_format":4,"__export_date":"2024-02-01T22:22:22.582Z","__export_source":"insomnia.desktop.app:v8.6.0","resources":[{"_id":"req_6a6dce45cebc4cfa8bf8107843124e78","parentId":"fld_c292447a053b447984094ad48b64fc18","modified":1706735001504,"created":1706710563816,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}","name":"Create sessions","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"email\": \"gabriel@email.com\",\n\t\"password\": \"123\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706710563816,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_c292447a053b447984094ad48b64fc18","parentId":"wrk_4156221c947b4f28885567d4beceddfb","modified":1706710534027,"created":1706710446670,"name":"sessions","description":"","environment":{"RESOURCE":"sessions"},"environmentPropertyOrder":{"&":["RESOURCE"]},"metaSortKey":-1706710446670,"_type":"request_group"},{"_id":"wrk_4156221c947b4f28885567d4beceddfb","parentId":null,"modified":1706710415160,"created":1706710415160,"name":"Desafio backend","description":"","scope":"collection","_type":"workspace"},{"_id":"req_00331a50fabc4ff4b64e267d88d29c90","parentId":"fld_4d5431839972435ab2e2e10799223ed7","modified":1706735034124,"created":1706733492029,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/5","name":"Update user","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"teste\",\n\t\"priority\": true,\n\t\"completed\": true \n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706733492029,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_4d5431839972435ab2e2e10799223ed7","parentId":"wrk_4156221c947b4f28885567d4beceddfb","modified":1706710540933,"created":1706710441818,"name":"tasks","description":"","environment":{"RESOURCE":"tasks"},"environmentPropertyOrder":{"&":["RESOURCE"]},"metaSortKey":-1706710441818,"_type":"request_group"},{"_id":"req_e012f96757dd4b44a6915f4b2a2138ab","parentId":"fld_4d5431839972435ab2e2e10799223ed7","modified":1706731169418,"created":1706728404815,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/","name":"Show tasks","description":"","method":"GET","body":{},"parameters":[{"id":"pair_4ab8f4f1bbde472794f244b604da1d55","name":"note_id","value":"5","description":""},{"id":"pair_1f9d754e695b44a19940f41e87bb3099","name":"title","value":"","description":""},{"id":"pair_a6d88093a82b44939834646e08a6b86b","name":"priority","value":"","description":""},{"id":"pair_55c723af0e694a88a35c629b77935fa3","name":"completed","value":"","description":""}],"headers":[{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706728404815,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_4e9a41e1b2694426a41ef01b03197624","parentId":"fld_4d5431839972435ab2e2e10799223ed7","modified":1706725932822,"created":1706724719781,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/index","name":"Index tasks","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706724719781,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_b9a63850ccb441a795137841bfad0b91","parentId":"fld_4d5431839972435ab2e2e10799223ed7","modified":1706731989130,"created":1706718272250,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/4","name":"Delete tasks","description":"","method":"DELETE","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706718272250,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_c2a6d801cc2042a5a905a59b280052da","parentId":"fld_4d5431839972435ab2e2e10799223ed7","modified":1706731078218,"created":1706710608938,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}","name":"Create tasks","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"teste\",\n\t\"priority\": false,\n\t\"completed\": true,\n\t\n\t\n\t\"__example\": {\n\t\t\"outherUser\": \"1\",\n\t\t\"title\": \"Título de uma nota\",\n\t\t\"priority\": true,\n\t\t\"completed\": false\n\t}\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706710608938,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_652bd221b47b49bf9fc95d3db05d7433","parentId":"fld_ef341a7a0ab945b9b5840399bbdc8537","modified":1706825174895,"created":1706711032624,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/5","name":"Delete user","description":"","method":"DELETE","body":{"mimeType":"application/json","text":""},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706711032624,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_ef341a7a0ab945b9b5840399bbdc8537","parentId":"wrk_4156221c947b4f28885567d4beceddfb","modified":1706710547278,"created":1706710429084,"name":"users","description":"","environment":{"RESOURCE":"users"},"environmentPropertyOrder":{"&":["RESOURCE"]},"metaSortKey":-1706710429084,"_type":"request_group"},{"_id":"req_15215c8856714439be5ef3b9d4279e06","parentId":"fld_ef341a7a0ab945b9b5840399bbdc8537","modified":1706711004916,"created":1706710900227,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}","name":"Update user","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"name\": \"\",\n\t\"email\": \"\",\n\t\"oldPassword\": \"\",\n\t\"newPassword\": \"\",\n\t\"confirmPassword\": \"\",\n\t\"role\": \"\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706710900227,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_cb6538e04c4444d7a9e22c9dc13bb0a5","parentId":"fld_ef341a7a0ab945b9b5840399bbdc8537","modified":1706731529919,"created":1706710815498,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}","name":"Show users","description":"","method":"GET","body":{},"parameters":[{"id":"pair_a78e433cb42a4dc28becce17edc4dfa8","name":"id","value":"","description":""},{"id":"pair_0c983421f99e4f3a822a0481461b904e","name":"email","value":"","description":""},{"id":"pair_8848155d28674ca78a50f00fb3a876e6","name":"name","value":"","description":""},{"id":"pair_9c44fdbcf3814d5b962a27358ddffeac","name":"role","value":"","description":""}],"headers":[{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706710815498,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_9d26ded974724e9aafa5a87121880762","parentId":"fld_ef341a7a0ab945b9b5840399bbdc8537","modified":1706710802844,"created":1706710775965,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/index","name":"Index users","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706710775965,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_1ef99aba5b1448aab3f26a1e109530f7","parentId":"fld_ef341a7a0ab945b9b5840399bbdc8537","modified":1706825035290,"created":1706710691982,"url":"{{ _.BASE_URL }}/{{ _.RESOURCE }}/","name":"Create user","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"name\": \"teste\",\n\t\"email\": \"teste@email.com\",\n\t\"password\": \"123\",\n\t\"confirmPassword\": \"123\",\n\t\"role\": \"Administrador\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.6.0"}],"authentication":{},"metaSortKey":-1706710691982,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_c78cd026d13128261526f005035fa27dd31a4f07","parentId":"wrk_4156221c947b4f28885567d4beceddfb","modified":1706710509555,"created":1706710415161,"name":"Base Environment","data":{"BASE_URL":"http://localhost:3333"},"dataPropertyOrder":{"&":["BASE_URL"]},"color":null,"isPrivate":false,"metaSortKey":1706710415161,"_type":"environment"},{"_id":"jar_c78cd026d13128261526f005035fa27dd31a4f07","parentId":"wrk_4156221c947b4f28885567d4beceddfb","modified":1706735002884,"created":1706710415162,"name":"Default Jar","cookies":[{"key":"token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDY3MzUwMDIsImV4cCI6MTcwNjgyMTQwMiwic3ViIjoiMiJ9.H7zKayimsUbHSv0iSKjnc6_DIhEdpzMp9bkwtS5Pqls","domain":"localhost","path":"/","secure":true,"httpOnly":true,"hostOnly":true,"creation":"2024-01-31T14:17:36.666Z","lastAccessed":"2024-01-31T21:03:22.884Z","id":"24f85e2b-d425-4823-887d-de6384ccdc0f"}],"_type":"cookie_jar"}]} api-requests.json…]()


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
