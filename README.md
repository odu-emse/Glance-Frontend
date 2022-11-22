# EMSE UI
[![Component Library CI](https://github.com/odu-emse/emse-UI/actions/workflows/main.yml/badge.svg)](https://github.com/odu-emse/emse-UI/actions/workflows/main.yml)
[![EMSE-UI](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ye2f54&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ye2f54/runs)
[![codecov](https://codecov.io/github/odu-emse/emse-UI/branch/main/graph/badge.svg?token=HTE618L01G)](https://codecov.io/github/odu-emse/emse-UI)
> A modern Component Library used by the Asynchrous Learning Management Portal and other EMSE applications that are used by the Async project.  

<!-- TOC -->
* [EMSE UI -](#emse-ui--)
  * [Technologies](#technologies)
  * [Pre-requisites](#pre-requisites)
  * [Local Development](#local-development)
  * [Development using Docker](#development-using-docker)
    * [Building](#building)
    * [Running](#running)
      * [Running services individually](#running-services-individually)
      * [Running services with flags](#running-services-with-flags)
    * [Stopping](#stopping)
      * [Stopping services individually](#stopping-services-individually)
    * [Restarting](#restarting)
      * [Restarting services individually](#restarting-services-individually)
    * [Logs](#logs)
    * [List containers](#list-containers)
    * [Enter a container](#enter-a-container)
      * [Enter a specific service container](#enter-a-specific-service-container)
  * [Testing](#testing)
      * [Testing using the Cypress GUI](#testing-using-the-cypress-gui)
  * [Build a production bundle of the component library](#build-a-production-bundle-of-the-component-library)
  * [Building a production bundle of Storybook](#building-a-production-bundle-of-storybook)
<!-- TOC -->

## Technologies
- Storybook
- React
- TypeScript
- TailwindCSS
- Cypress
- Prettier

## Pre-requisites
- [Node.js](https://nodejs.org/en/)
    - You need to have installed NodeJS version `16.17.0` or higher and `18.1.0` or lower to run this project. You can check your version by running `node -v` in your terminal.
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Make](https://www.gnu.org/software/make/)

## Local Development
To run the source code in development on your local environment, you first need to ensure that you have installed the pre-requisite pieces of software. If you do not wish to install them, you can utilize `Docker` to run the application.
```console
yarn start
```

## Development using Docker
If you do not wish to install the pre-requisite pieces of software, you can utilize `Docker` to run the application. You will need to have `Docker` installed on your machine.

### Building
This commands builds the image for all 3 services that are used by the application.
```console
make build
```

### Running
There are multiple options to running the Docker services. You can run them all at once, or you can run them individually. The following commands will run all 3 services at once.
```console
make up
```

#### Running services individually
The following commands will run each service individually.
- Running the Component Library in a storybook instance:
  ```console
  make up-ui
  ```

- Running prettier for code formatting:
  ```console
  make up-prettier
  ```

- Compiling Tailwind CSS for styling:
  ```console
  make up-tailwind
  ```

#### Running services with flags
You can also run the services with flags. The following commands will run the services with flags.

- Running all services in detached mode:
  ```console
  make up-detached
  ```

- Running a clean build of all services:
  ```console
  make up-clean
  ```

### Stopping
The following commands will stop all 3 services.
```console
make down
```

### Restarting
The following commands will restart all 3 services.
```console
make restart
```

#### Restarting services individually
The following commands will restart each service individually.
- Restarting the storybook instance:
  ```console
  make restart-ui
  ```
- Restarting prettier:
  ```console
  make restart-prettier
  ```
  
- Restarting Tailwind CSS compilation:
  ```console
  make restart-tailwind
  ```

### Logs
The following command will show the logs for all 3 services in one terminal session. 

_Note that running this command is only successful if the application is running, as the logs window will attempt to attach to the docker instance._
```console
make logs
```

### List containers
The following command lists all your currently running containers.
```console
make ps
```

### Enter a container
The following command will enter the storybook container and spin up a terminal session using `bash`. You can use this to run commands inside the container. 

_Note that you cannot enter all containers at once, you will have to do it individually. Due to this limitation, the default service container to enter is the storybook instance._
```console
make shell
```

#### Enter a specific service container
The following commands will enter a specific service container. You can use this to run commands inside the container.

- Entering the prettier instance:
  ```console
  make shell-prettier
  ```

- Entering the Tailwind CSS instance:
  ```console
  make shell-tailwind
  ```  

## Testing
To run the tests for the application, you can run the following command. This will run all the test cases using the `Cypress` framework, in the terminal window.
```console
yarn test
```
#### Testing using the Cypress GUI
If you would like to run the test cases using the `Cypress` GUI, you can run the following command. This will open the `Cypress` GUI in your browser, where you can run the test cases.
```console
yarn test:open
```

## Build a production bundle of the component library
To bundle the components into a library that can be used externally, you can run the following command. This will create a production bundle of the components in the `dist` folder.
```console
yarn build
```

After running the above command, you can also `pack` the bundle into a `.tgz` file. This will create a `.tgz` file in the root folder. This is useful to troubleshoot build systems that are set up. If the command completes successfully, you can use the `.tgz` file to see what is included in your production bundle.
```console
yarn pack
```

## Building a production bundle of Storybook
This command build the storybook application using your local installation of Node.js.
```console
yarn build-storybook
```
