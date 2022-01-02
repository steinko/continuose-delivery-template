FROM node:latest 
COPY . ./
RUN npm install --silent
RUN npm run build 
RUN npm install -g serve
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
EXPOSE  80
CMD ["serve", "-s", "build", "-l" ,"80"]