FROM node:latest as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./public /public
COPY ./src src
COPY ./package.json package.json

RUN npm install
RUN npm audit fix
RUN npm run build
RUN npm install -g serve

EXPOSE  3000
CMD ["serve", "-s", "build"]