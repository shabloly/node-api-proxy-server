import { MongoClient } from "mongodb";

let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "app-credentials";

const getWeatherAppCredentials = async () => {
  // Connect to the db
  MongoClient.connect(
    mongoUrlLocal,
    mongoClientOptions,
    function (err, client) {
      if (err) throw err;

      let db = client.db(databaseName);

      let myquery = { APIKey: 1 };

      db.collection("openWeatherAPI").findOne(myquery, function (err, result) {
        if (err) throw err;
        client.close();
        return result
      });
    }
  );
};

export default {getWeatherAppCredentials}
