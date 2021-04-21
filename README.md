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
to connect please use these cardinantials 

```
 { email: 'test@test.com', password: 'test' }
 ```



# Docker Pull Command
to get the project docker image please use this commend
``` 
docker pull maissenayed/to-do-list
```



# Run using Docker
⚠️ Before deploy the app in a container set the right **configuration** as explained in the section below, and then you can run:
``` 
docker run -it  --rm  -v /app/node_modules  -p 3001:3000 -e CHOKIDAR_USEPOLLING=true maissenayed/to-do-list
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


