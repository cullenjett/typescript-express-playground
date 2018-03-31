# build =====================
FROM node:9 as build

WORKDIR /node-api-playground

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD npm start
