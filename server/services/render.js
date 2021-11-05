const axios = require('axios');

exports.homeRoutes = (req, res) =>{
// Make a get request to /api/users
axios.get('http://localhost:8558/api/users')
   .then(function(response){
      console.log(response)
      res.render('index', { users : response.data});
   })
   .catch(err =>{
      res.send(err);
   })
}

exports.add_todo = (req, res) =>{
   res.render('add_todo')
}

exports.update_todo = (req, res) =>{
   axios.get('http://localhost:8558/api/users', { params : { id: req.query.id }})
      .then(function(userdata){
         res.render('update_todo', {todo:tododata.data})
      })
      .catch(err =>{
         res.send(err);
      })
}