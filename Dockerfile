FROM node:11.15.0

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3333

CMD ["npm", "run", "dev"]