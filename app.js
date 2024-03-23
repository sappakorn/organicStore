console.log("hello")

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "node60666-vgtproject.th1.proen.cloud",
  user: "root",
  password: "OZIxac77163",
  database: "myproject"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("You are connected!");
});
con.end();