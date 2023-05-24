FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install npm@latest -g
RUN npm install

COPY . .

RUN cat index.js

CMD [ "npm", "start" ]
#ENTRYPOINT ["/app/entrypoint.sh"]