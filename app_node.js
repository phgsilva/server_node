'use strict'
// JavaScript source code
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var u = url.parse(req.url, true);
    var arquivo = u.pathname.replace('/', '');

    if (!arquivo || arquivo.length === 0) {
        arquivo = "index.html";
    }

    if (arquivo.indexOf(".") === -1) {
        arquivo = arquivo + ".html";
    }
    console.log(arquivo);

    fs.readFile(arquivo, function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        let ext = arquivo.slice(arquivo.indexOf("."), arquivo.length);
        let contentType = definirCabecalho(ext);

        res.writeHead(200, contentType);
        res.write(data);
        res.end();
    }); 
}).listen(8080);


function definirCabecalho(extensao) {
    switch(extensao){
        case ".html":
            return { 'Content-Type': 'text/html' };
            break;
        case ".js":
            return { 'Content-Type': 'application/javascript' };
            break;
        case ".css":
            return { 'Content-Type': 'text/css' };
            break;
        case ".avi":
            return { 'Content-Type': 'video/x-msvideo' };
            break;
        case ".csv":
            return { 'Content-Type': 'text/csv' };
            break;
        case ".gif":
            return { 'Content-Type': 'image/gif' };
            break;
        case ".ico":
            return { 'Content-Type': 'image/x-icon' };
            break;
        case ".jpg":
            return { 'Content-Type': 'image/jpeg' };
            break;
        case ".json":
            return { 'Content-Type': 'application/json' };
            break;
        case ".png":
            return { 'Content-Type': 'image/png' };
            break;
        case ".pdf":
            return { 'Content-Type': 'application/pdf' };
            break;
        case ".svg":
            return { 'Content-Type': 'image/svg+xml' };
            break;
        case ".xml":
            return { 'Content-Type': 'application/xml' };
            break;
        case ".zip":
            return { 'Content-Type': 'application/zip' };
            break;
        default:
            return { 'Content-Type': 'application/octet-stream' };
            break;
    }  
}