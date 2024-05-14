FROM node:alpine

COPY package*.json ./
RUN npm install

CMD npm start

EXPOSE 3000