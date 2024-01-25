const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase(){
    let client = await MongoClient.connect(
        'mongodb+srv://ks456167:Z4C7bSmSm3PrinpM@cluster0.atox7mm.mongodb.net/toDoAPI?retryWrites=true&w=majority'
    );
    database = client.db('todo')
}

function getDb(){
    if(!database){
        throw {message: 'Could not connect to database'}
    }
    return database;
}

module.exports = {
    connectToDatabase : connectToDatabase,
    getDb : getDb
};


