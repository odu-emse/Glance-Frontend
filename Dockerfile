FROM node:16.17 as base

WORKDIR /usr/src/app

VOLUME /app_data

COPY ./* ./

COPY src/ ./src

RUN yarn

RUN yarn add global onchange

FROM base as production

