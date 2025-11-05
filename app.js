const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Gaudi</title>
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
                background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
                color: #fff;
                text-align: center;
                padding-top: 15%;
                height: 100vh;
                margin: 0;
            }
            h1 {
                font-size: 3em;
                margin-bottom: 0.3em;
                color: #00c6ff;
                text-shadow: 0px 0px 10px #00c6ff;
            }
            p {
                font-size: 1.3em;
                color: #c2e9fb;
            }
            footer {
                position: absolute;
                bottom: 10px;
                width: 100%;
                font-size: 0.9em;
                color: #aaa;
            }
        </style>
    </head>
    <body>
        <h1>Hola Gaudi 👋</h1>
        <p>Tu aplicación Node.js se está ejecutando correctamente en Render 🚀</p>
        <footer>Desarrollado por Gaudi Valera - Práctica Entrega Continua</footer>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
