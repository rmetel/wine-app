FROM node:21-alpine3.17

WORKDIR /var/www

COPY .. ./

RUN npm install

RUN npm install -g serve

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]

# terminal
# docker build -t wine-app -f docker/wine-app/wine-app.dockerfile .
# docker run --name wine-app -dp 3000:3000 wine-app

# docker hub
# docker build -t ddrram/wine-app:1.0.0 -f docker/wine-app/wine-app.dockerfile .
# docker push ddrram/wine-app:1.0.0
# docker run --name wine-app -dp 3000:3000 ddrram/wine-app:1.0.0
