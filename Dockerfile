FROM node:17-alpine as aepp-aepp-base-build
WORKDIR /app
RUN apk add make git gcc g++ python3
COPY  . .

RUN npm install
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

FROM nginx:1.20.2-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=aepp-aepp-base-build /app/dist /usr/share/nginx/html
