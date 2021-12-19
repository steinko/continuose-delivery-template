FROM node:latest 
COPY . ./
RUN npm install --silent
RUN npm run build 
RUN npm install -g serve

EXPOSE  80
CMD ["serve", "-s", "build", "-l" ,"80"]