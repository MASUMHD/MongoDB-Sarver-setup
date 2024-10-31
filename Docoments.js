// basic server setup

// ..... FLOW MODULE 59-1 ......


// 1. create a server Commands

//  * mkdir (Name of the project)
//  * cd (Name of the project)
//  * npm init -y
//  * npm i express cors mongodb dotenv


// 2. go to the package.json file
//  * add "start": "node index.js"

// 3. create a index.js file and go to index.js
//  * please check the index.js file

// 4. Connect to mongoDB atlas
//  * go to mongodb.com
//  * Database
//  * connect
//  * Drivers
//  * and copy to (Add your connection string into your application code)
//  * follow the steps in the indexTwo.js file


// 5. create a .env file
//  *DB_USER=(your username)
//  *DB_PASS=(your password)


// 6. Go to Database Access
//  * Add new Database user
//  * Username
//  * Password
//  * and go to Built-in Role
//  * read and write to any database
//  * and click on create user button


// 7. go to indexTwo.js file
//  * add a code { require('dotenv').config(); }

// 8. go to indexTwo.js file
//  * add a code { const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zi8pxok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; }


// 9. go to indexTwo.js file
//  * open the terminal and write { nodemon index.js }

// 10. go to indexTwo.js file
//  * commend to 3 lines
//  * 1. { await client.connect(); }
//  * 2. { await client.db("admin").command({ ping: 1 }); }
//  * 3. { await client.close(); }


// Successfully connected to MongoDB and server is running


