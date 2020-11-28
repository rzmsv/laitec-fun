const mysql = require('mysql2');


const connection = mysql.createConnection({
          host: 'localhost',
          user: 'laitec',
          database: 'laitec',
          password : 'Reza1989@'
     })          

     

module.exports.create = (name,lastname,user,email,password,callback)=>{
     var person = {
          name : name,
          lastname: lastname,
          user : user ,
          email : email,
          password : password
     }
          return new Promise((resolve,reject)=>{
               connection.query(
                    'INSERT INTO users SET ?',person,function(err,res){
                         resolve(res)
                         reject(err)
                    })
          })

}
module.exports.loginUser= (user,password)=>{
     var user = {
          user : user,
          password : password
     }
     return new Promise((resolve,reject)=>{
          var giveUser = 'SELECT * FROM users WHERE user=? && password=?;'
               connection.query(giveUser,[user.user,user.password],(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
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
     return new Promise((resolve,reject)=>{
          connection.query(
               'INSERT INTO offers SET ?',offers,function(err,res){
                    resolve(res)
                    reject(`please try again ${err}`)
               }
          )
     })
}
module.exports.readOffers =()=>{
     
          return new Promise((resolve,reject)=>{
               var readOffers = 'SELECT * FROM offers ORDER BY created_at DESC;'
               connection.query(readOffers,function(err,res){
               resolve(res)
               reject(err)
               
               })
          })
          
}
module.exports.coffeMost = ()=>{
     return new Promise((resolve,reject)=>{
          var most = "SELECT * FROM offers WHERE category = 'coffe' && off > 20 ORDER BY created_at DESC LIMIT 4;"
          connection.query(most,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
}
module.exports.coffeAll = ()=>{
     return new Promise((resolve,reject)=>{
          var most = "SELECT * FROM offers WHERE category = 'coffe' ORDER BY created_at DESC;"
          connection.query(most,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
}
module.exports.sportMost = ()=>{
     return new Promise((resolve,reject)=>{
          var most = "SELECT * FROM offers WHERE category = 'sport' && off > 40 && off < 100 ORDER BY created_at DESC LIMIT 4;"
          connection.query(most,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
}
module.exports.sportAll = ()=>{
     return new Promise((resolve,reject)=>{
          var most = "SELECT * FROM offers WHERE category = 'sport' ORDER BY created_at DESC;"
          connection.query(most,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
}
module.exports.educationMost = ()=>{
     return new Promise((resolve,reject)=>{
          var most = "SELECT * FROM offers WHERE category = 'edu' && off > 50 ORDER BY created_at DESC LIMIT 4;"
          connection.query(most,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
}
module.exports.educationAll = ()=>{
     return new Promise((resolve,reject)=>{
          var most = "SELECT * FROM offers WHERE category = 'edu' ORDER BY created_at DESC;"
          connection.query(most,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
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
          if(err){
               console.log(err)
          }
          console.log(res)
     })
}
module.exports.detail = (id)=>{
     var id = id
     return new Promise((resolve,reject)=>{
          var readById = 'SELECT * FROM offers WHERE id=?;' 
          connection.query(readById,id,(err,res)=>{
               resolve(res)
               reject(err)
          })
     })
}