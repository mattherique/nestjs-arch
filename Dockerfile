FROM node:20.11.0-alpine3.19

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app

RUN npm install -g pnpm

RUN rm -rf node_modules \
  pnpm install --fronzen-lockfile

RUN pnpm install

COPY . /app

EXPOSE 3003

ENTRYPOINT [ "pnpm", "start dev" ]