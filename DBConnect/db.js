//npm install pg
var pg = require('pg');
//npm install es6-promise
var Promise = require("es6-promise").Promise

function getDBClient(dbName){
  var conString = "postgres://postgres:1111@localhost/"+dbName;
  var client = new pg.Client(conString);
  return client;
}
//client instance version
//client pooling version on site: https://github.com/brianc/node-postgres
function getJSON(db,SQLquery,resolve) {
  var client = getDBClient(db);
  var promise = new Promise(function(resolve,reject){

    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }

      client.query(SQLquery, function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          client.end();
          resolve(JSON.stringify(result.rows,''));
        });
    });
  });
  //execute function resolve()
  promise.then(resolve);
};
exports.getJSON = getJSON;