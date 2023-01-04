var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE inventory", function (err, result) {
    if (err) throw err;
    else{

      console.log("Database created");
      con.query("use inventory");
      var sql="CREATE TABLE customer(cid int,cname varchar(25))";
      con.query(sql,function(err,result){
        if(err) throw err;
        console.log("table created");
      });
    }
    
  });
});