# EMSE UI - 
> A modern Component Library used by the Asynchrous Learning Management Portal and other EMSE applications that are used by the Async project.  

### Technologies
- Storybook
- React
- TypeScript
- TailwindCSS
- Cypress
- Prettier

### Pre-requisites
- [Node.js](https://nodejs.org/en/)
    - You need to have installed NodeJS version `16.17.0` or higher and `18.1.0` or lower to run this project. You can check your version by running `node -v` in your terminal.
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker-desktop)

### Local Development
To run the source code in development on your local environment, you first need to ensure that you have installed the pre-requisite pieces of software. If you do not wish to install them, you can utilize `Docker` to run the application.
```console
# runs the application using your local installation of Node.js
yarn start
```

### Building a production bundle of Storybook
```console
# builds the application using your local installation of Node.js
yarn build-storybook
```

### Development using Docker
If you do not wish to install the pre-requisite pieces of software, you can utilize `Docker` to run the application. You will need to have `Docker` installed on your machine.

```console
# builds the application image using Docker
docker-compose build
```

```console
# runs the application using Docker
docker-compose up
```

### Running the Cypress tests
```console
# runs the tests using your local installation of Node.js
yarn test
```

### Build a production bundle of the library
```console
yarn build
```