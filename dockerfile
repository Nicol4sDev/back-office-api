#Build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}}

COPY package*.json ./

RUN npm install yarn -g

RUN yarn 

COPY . .

RUN yarn build

#Prod stage

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

COPY package*.json ./

RUN yarn --only=production

RUN rm package*.json

EXPOSE 3000

CMD ["node", "dist/main.js"]
