# Angular, NodeJS, and MySQL+Postgresql

This app business logic is implemented mostly outside the of the engine of the database. Most of the implementation takes place in the middleware and very little task is delegated to the database engine. Taking an entity without creating a model.

The architectural plan in the API creates a definition class before implementation. It utilizes the NodeJS engine much more than the sql engine hence the model definition is importance. Backend #3 have three similar code structures.

## Technology Stack used

The full developmental stack of the application consist of;

1. NodeJS+ExpressJS
2. Database(MySQL)
3. Database(Postgresql)
4. FrontEnd (Angular +10 &+11)

## Execution Commands

To use this application, move into the root folder where there is the server. Execution the following commands.

```
cd Frontend
-------------------------------------
npm install
npm start


cd Backend
-----------------------------------
npm install
nodemon start

```

## Links for the frontend endpoints and backend endpoints

- Open [http://localhost:4200/](http://localhost:4200/) in browser to see the frontend of the application.
- Open [http://localhost:8080/](http://localhost:8080/) in browser to see the backend #1 of the application.
- Open [http://localhost:8081/](http://localhost:8081/) in browser to see the backend #2 of the application.

## user Interface

Below are some screens(5) shots from the application console output

![ AMuntu #1 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page1.png)
![ AMuntu #2 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page2.png)
![ AMuntu #3 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page3.png)
![ AMuntu #4 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page4.png)
![ AMuntu #5 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page1.png)


## Versioning
```
    We analyzed your package.json, there are some packages to update:

      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       10.2.0 -> 11.2.1         ng update @angular/cli
      @angular/core                      10.2.1 -> 11.2.1         ng update @angular/core

    There might be additional packages which don't provide 'ng update' capabilities that are outdated.
    You can update the additional packages by running the update command of your package manager.

```
# END
