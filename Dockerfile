FROM node:slim
LABEL Name=BP Version=1.0.0
RUN npm install webpack -g
RUN npm install http-server -g
RUN mkdir -p /home/boilerplate
WORKDIR /home/boilerplate
COPY . /home/boilerplate
RUN npm install
RUN npm run prod
CMD http-server /home/boilerplate/dist
EXPOSE 8080