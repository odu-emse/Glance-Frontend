FROM node:16.17 as base

WORKDIR /usr/src/app

#copy folder director to docker container
COPY package.json .eslintrc.js tsconfig.json postcss.config.js tailwind.config.js vite.config.js cypress.config.ts yarn.lock .storybook/ .prettierrc ./

COPY src/ ./src

RUN yarn

RUN yarn add global onchange

FROM base as production

