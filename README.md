# MICROSERVICES (Angular, NodeJS and MySQL+Postgresql)

This app business logic is implemented mostly outside the of the engine of the database. Most of the implementation takes place in the middleware and very little task is delegated to the database engine. Taking an entity without creating a model.

The architectural plan in the API creates a definition class before implementation. It utilizes the NodeJS engine much more than the sql engine hence the model definition is importance. Backend #3 have three similar code structures.

## Technology Stack used

The full developmental stack of the application consist of;

1. JavaScript(NodeJS+Angular)
2. Database(MySQL)
3. Database(Postgresql)
4. Server(ExpresJS)
5. FrontEnd (Angular +10)

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

![ AMuntu #1 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/master/uxViews/page1.png)
![ AMuntu #2 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/master/uxViews/page2.png)
![ AMuntu #3 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/master/uxViews/page3.png)
![ AMuntu #4 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/master/uxViews/page4.png)
![ AMuntu #5 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/master/uxViews/page5.png)

# END
