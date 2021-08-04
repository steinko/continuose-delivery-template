FROM node:latest 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm install -g npm --silent
RUN npm install --silent
RUN npm run build 
RUN npm install -g serve

EXPOSE  5000
CMD ["serve", "-s", "build"]