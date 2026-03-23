This is a base node js project templete, which anyone can use as it has been prepare, by keeping some of the most importent code principles and project management recomendation. Feel free change anything. 


`src`-> Inside the src folder all the actual source code regarding the project will reside. this will not include any kind of tests. (you might want to make separate tests folder)

Lets take a look inside the `src` folder 

- `config` -> In this folder anything and everything regarding any configurations or setup of a librery or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this librery should also be done here. 

-`routes` -> in the routes folder, we register a route and the corresponding middleware and controllers to it. 

-`middlewarers` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

-`controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the business logic. In controllers we just receive the incomming requests and data and then pass it to the business layer, and once business layer an output, we structure the API response in controllers and send the output.

-`repositories` -> this folder contains all the logic using which we interect the DB writing quries, all the raw queries or ORM queries will go here.

-`services` -> contains the buiness logic and interacts with repositories for data from the database.

-`utils` -> contains helper methods, error classes etc.


-`ORM` -> it is going to make sure that whenever we have to write SQL queries we don't write raw SQL queries we are able to maybe write some `Object Oriented code` for it instead of writing plain raw queries because who likes raw queries for everything. Maybe you have a very complex logic in that kind of a case maybe a plain raw query might also help.
for setup ->(https://sequelize.org/docs/v6/getting-started/);


why we want to use sequelize cli?
- because a lot of things sequelize cli will autometically do for us we don't have to go through the hassle of creating our own database configurations and everything it will generate a lot of files for us and when we have to even create schema models and everything it will automatically generate everything for us.

set up sequelize/cli -> (https://github.com/sequelize/cli);

firstluy go to `src` directory of your project using `cd src` and execute --> npx sequelize init 


what the `config.json` file gives us?
-- it gives us configuration for three environments (Development, Test, Production)

what is Development environment?
-- A development environment is a setup where developers write, test, and debug their code. It includes tools like code editors, runtime, libraries, and local servers. It allows developers to safely develop applications before deploying them to the production environment.

in short --> “Safe place to build and test code”

Every developer is going to setup their development environment in their own local laptop so they can't share the development environment 

what is `Test environment` ?
--A test environment is a setup where an application is tested to ensure it works correctly before deployment. It includes a server, test database, and testing tools. It helps identify bugs and ensures the application is stable and ready for production.

in short --> "Check before you show"


-what is `Production environment` ?
-> Production environment is the real environment where your application is deployed and used by actual users.

--Full flow 
Development → Test → Production

### Setup the project

-Download this template from github and open it in your favourite text editor.

- Go inside the folder path and execute the following command:

``npm install
-In the root directory create a `.env` file and add the following env variables 
 ```
     PORT=<port number of your choice>

```

ex:
```
   PORT = 3000
```
-go inside the `src` folder and execute the following command:
```
   npx sequelize init
```

- By executing the above command you will get migrations and sender folder along with a config.json inside the config folder.

- If you're setting up your development environment, then write the username of you db, password of your db and in dialect mention whatever db you are using for ex:
mysql, mariadb etc

-If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

-To run the server execute 
```

npm run dev
```