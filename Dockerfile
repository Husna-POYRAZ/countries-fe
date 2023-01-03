#
# Build stage
#
FROM node:19.2.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./


RUN npm run build


#
# Package stage 
#
FROM nginx:stable-alpine

COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]