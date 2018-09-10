var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "jason",
  password: "jason"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// mysql> select Host,User,plugin,authentication_string from user where User='root'\G
// *************************** 1. row ***************************
//                 Host: localhost
//                 User: root
//               plugin: caching_sha2_password
// authentication_string: $A$005$V4FAR>FqgP|Gn_	IxlBCXAkjxz63FtX4v1bOpJdZdHqaMY09yrXaULxHp5Xp1
// 1 row in set (0.00 sec)
