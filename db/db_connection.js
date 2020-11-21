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
module.exports.insertOffersTable = (category,main_pic,name,off,address,image1,image2,image3,description,timeout)=>{
     var offers = {
          category : category,
          main_pic : main_pic,
          name : name,
          off : off,
          address : address,
          description : description,
          first_pic : image1,
          second_pic : image2,
          third_pic : image3,
          timeout : timeout          
     }
     connection.query(
          'INSERT INTO offers SET ?',offers,function(err,res){
               if(err){
                    console.log(err)
               }
               console.log(res)
          }
     )
}
module.exports.editOffer = (name,off,timeout)=>{
     var edit = 'UPDATE offers SET off= ? , timeout=? WHERE name = ?'
     connection.query(edit,[off,timeout,name],function(err,res){
          if(err){
               console.log(err)
          }
          console.log(res)
     })

}
module.exports.deleteOffer = (name)=>{
     var del = 'DELETE FROM offers WHERE name=?'
     connection.query(del,name,function(err,res){
          if (err){
               console.log(err)
          }
          console.log(res)
     })
}