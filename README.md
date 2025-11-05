# 🐳 Práctica Entrega Continua

### Autor:
**Gaudi Valera**

---

## Descripción

En esta práctica se implementó el **ciclo completo de DevOps** utilizando **Node.js** y **Docker**.  
El objetivo fue crear una aplicación web simple que muestre el mensaje **“Hola Gaudi”**, construir una imagen Docker a partir de ella y luego **publicarla en Docker Hub**.

---

### Crear la aplicación web con Node.js

**Archivo:** `app.js`

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola Gaudi</h1>');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
