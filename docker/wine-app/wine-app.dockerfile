FROM node:21-alpine3.17

WORKDIR /var/www

COPY .. ./

RUN npm install

RUN npm install -g serve

RUN npm run build

RUN apk add nano

RUN apk add curl

EXPOSE 3002

ENTRYPOINT ["serve", "-s", "build", "-l", "3002"]

# terminal
# docker build -t wine-app -f docker/wine-app/wine-app.dockerfile .
# docker run --name wine-app -dp 3000:3000 wine-app

# docker hub
# docker build -t ddrram/wine-app:1.0.2 -f docker/wine-app/wine-app.dockerfile .
# docker push ddrram/wine-app:1.0.2
