const mysql = require('mysql2');
 
     const connection = mysql.createConnection({
          host: 'localhost',
          user: 'laitec',
          database: 'laitec',
          password : 'Reza1989@'
        });

module.exports.create = (name,lastname,user,email)=>{
     var person = {
          name : name,
          lastname: lastname,
          user : user ,
          email : email
     }
     connection.query(
          'INSERT INTO users SET ?',person,function(err,result){
               if(err){
                    console.log(err)
               }
               console.log(result)
          }
     )
}