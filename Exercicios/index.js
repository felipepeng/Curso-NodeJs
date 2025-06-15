const http = require('http'); //Pacote que já vem instalado com o node
const url = require('url'); //Pacote nativo do Node

http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const pathName = parsedUrl.pathname
    const queryParams = parsedUrl.query

    if(pathName === 'favicon'){
        response.writeHead(404) // writeHead informa o status
        response.end();
        return; // Para a execução da resposta
    }


    console.log(queryParams);

    if (request.method === 'GET') { // Método GET
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
        response.write('A soma é = ' + (Number(queryParams.num1) + Number(queryParams.num2)));
        response.end();
    }

}).listen(3000) //Porta 3000