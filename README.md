# Angular, NodeJS, and MySQL+Postgresql

Business logic(sql string generation) is implemented mostly outside the of the engine of the database. Most of the implementation takes place in the middleware and very little task is delegated to the database engine. Architectural plan in the API creates a definition class before sql string construction. It utilizes the NodeJS engine much more than the sql engine hence the model definition is importance. Backend #3 have three similar code structures for three different data objects.

## Technology Stack used

The full developmental stack of the application consist of;

1. FrontEnd (Angular +10 & +11)
2. NodeJS+ExpressJS
3. Database(MySQL)
4. Database(Postgresql)

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
- Open [http://localhost:8081/](http://localhost:8081/) in browser to see the backend #3 of the application.

## user Interface

Below are some screens(5) shots from the application console output

![ AMuntu #1 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page1.png)
![ AMuntu #2 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page2.png)
![ AMuntu #3 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page3.png)
![ AMuntu #4 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page4.png)
![ AMuntu #5 ](https://github.com/LINOSNCHENA/NodeJS-model-implemented-using-MySQL/blob/main/uxViews/page1.png)

## Versioning - Pending Update: LECTURE # 2

```
    We analyzed your package.json, there are some packages to update:

      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       10.2.0 -> 11.2.1         ng update @angular/cli
      @angular/core                      10.2.1 -> 11.2.1         ng update @angular/core

    There might be additional packages which don't provide 'ng update' capabilities that are outdated.
    You can update the additional packages by running the update command of your package manager.

```

```
Angular: 11.2.2
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.1
@angular-devkit/build-angular   0.1102.1
@angular-devkit/core            11.2.1
@angular-devkit/schematics      11.2.1
@angular/cli                    11.2.1
@angular/http                   7.2.16
@schematics/angular             11.2.1
@schematics/update              0.1102.1
rxjs                            6.6.3
typescript                      4.1.5
```

# END
