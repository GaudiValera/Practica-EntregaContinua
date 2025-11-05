# Imagen base de Node.js
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copiar todo el código
COPY . .

# Exponer el puerto donde corre la app
EXPOSE 3000

CMD ["node", "app.js"]
