FROM node:16-alpine
WORKDIR /seeding
COPY package.json .
RUN yarn install
COPY . .
CMD [ "node", "seed.ts" ]
