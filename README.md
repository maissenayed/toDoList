# Super Charged ToDoList starter with react 16.8+ /redux /redux Toolkit /Typscript [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://bitbucket.org/lbesson/ansi-colors)


This project is an example of implementation of a an interview ToDoList exercice

### Packages

| Project | Version | Links |
| ------- | ------- |------- |
| *ant D* | ^4.15.2 | https://ant.design/
| **React** | ^16.8.2 | https://reactjs.org/
| **Redux** | ^4.8.5 | https://redux.js.org/
| **Redux-toolkit** | ^1.5.1 | https://redux-toolkit.js.org/
| **TypeScript** | ^4.2.1 | https://www.typescriptlang.org/docs/handbook/intro.html

# Getting started

Install `nodejs` and `yarn` in your machine.

Install dependencies with yarn and run the application:

```
yarn install
yarn dev
```
This will run the application locally on port 3000. To access the application, navigate to:
```sh
localhost:3000
```

to connect use these cardinantials 

```
 { email: 'test@test.com', password: 'test' }
 ```


# Docker
**to do list** is very easy to install and deploy in a docker container.

By default, the repository is equipped with a Dockerfile enabling to build an out-of-the-box docker image.
To build the image from the Dockerfile, enter:
```sh
 sudo docker build -t maissenayed/to-do-list .
```
This will create the image tagged as *pickar-currency-converter* and pull in the necessary dependencies.


### Docker Pull Command
to get the project image from the docker hub  you can pull the image by using this commend
``` 
docker pull maissenayed/to-do-list
```



### Run using Docker
Once done, run the docker image and map the port to whatever you wish on your host. In this example, we simply map port 3001 of the host to port 3000 of the container.

``` 
docker run -it  --rm  -v /app/node_modules  -p 3001:3000 -e CHOKIDAR_USEPOLLING=true maissenayed/to-do-list
```
Verify the deployment by navigating to your server address in your preferred browser.

```sh
localhost:3001
```

# Testing a live Demo
you can see the app deployed on heroku from this link 
``` 
https://to-do-list-interview.herokuapp.com/auth
```


### Future Goals

Adding react-intl,connected-redux-router,redux-saga .

build a small backend to recreate the crud process and authentification process , using NestJs , passportjs , TypeOrm.

Create a generic boundrey context for errors.

create a generic Notification module for faiable actions .


## Architecture of the React project
The project is structured as follow:

- components:provides the different components of the application.

- shared: defines  the logic of commun components , services ,state and types.

    layout: define the app layout and general components .
    
    state : define redux store and state , and modular slices , inspired from  redux Ducks pattern  ,



