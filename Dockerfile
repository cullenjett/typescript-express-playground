# build =====================
FROM node:9 as build

WORKDIR /typescript-express-playground

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD npm start
