# EMSE - Asynchronous Learning Management Platform | UI

This repository contains all the files that are required for the operation of the AMLP user interface. The UI is a web application that facilitates interactions with the API. The UI is built using ReactJS and is ran in a Docker container.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requisites

-   Docker
    > Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.
    -   [Install Docker for your OS](https://docs.docker.com/desktop/)
-   make
    > Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. Make gets its knowledge of how to build your program from a file called the makefile, which lists each of the non-source files and how to compute it from other files. When you write a program, you should write a makefile for it, so that it is possible to use Make to build and install the program.
    -   [Install GNU win32 on Windows](http://gnuwin32.sourceforge.net

## Environmental Variables

After cloning the repository, create a .env file with the appropriate variables that you received from your supervisor or through documentation. This file will contain the necessary variables like, our JWT configuration and our edge functions' URL.

```shell
$ cd emsePortal && touch .env
```

## Caveats when working on UI

To run the UI, first please make sure you have all the necessary Pre-Requisite are installed. Without these, the application will not be able to run or compile.

Second, you should verify if you are working across the entire stack (need to modify both the UI and the API to complete your issue), or is it specific for only the UI. If the later, you should only run commands that have `dev` in the name. If you require to work across the entire stack, please follow the set-up steps in the API's README.md file, and use all the `local` commands.

As a short hand explanation, `local` commands expect you to have the API running on your machine, while `dev` commands reach out to our staging server API.

## Common Commands

### Start container

To start up the application using our staging API, use the following command:

```shell
$ make up-dev
```

If you want to run the application using your local instance of the API, use the following command:

```shell
$ make up-local
```

### Build image

While currently there isn't a huge difference in what these two commands do, they are here for future scaling support and to make it easier to switch between the two. In short, if you are using the staging API, you should use the `make build-dev` command, otherwise, use the `make build-local` command. Stick to either one throughout your entire development process, to avoid duplicate images and containers being built.

```shell
$ make build-dev
```

```shell
$ make build-local
```

### Remove image

```shell
$ make rm-dev
```

```shell
$ make rm-local
```

### Enter container

This command is useful when you want to look into the Docker container and it's current files that are shared across your own OS.

```shell
$ make enter-dev
```

```shell
$ make enter-local
```

## Helper Commands

### Clean system

This command should only be used if you know what you are doing. It will remove all images, containers, cached files, and other files that are not needed for Docker's basic operation.

```shell
$ make prune
```

### List containers

```shell
$ make rncn
```

### List images

```shell
$ make img
```

### Stop all containers

```shell
$ make down
```
