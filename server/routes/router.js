const router=require('express').Router()
const { express } = require('express');
const Todo_model=require('../model/model');


router.post('/add/todo', (req,res)=>{ 
   const Todo = new Todo_model()
   try {
   Todo.todo = req.body.todo;
   Todo.done = req.body.done
   Todo.save(err => {
      if (err) {
         res.render('index', {
            error: 'Failed to add Todo'
         })
      }
   } )
}
   catch (error) {
      res.redirect('/')
   }
})

// GET METHOD
router.get("/", (req, res) => {
   Todo_model.find({}, (err, tasks) => {
   res.render("index.ejs", {todo: tasks });
   });
});

//DELETE
router.route("/deletetodo/:id").get((req, res) => {
   const id = req.params._id;
   Todo_model.findByIdAndRemove(id, err => {
   if (err) return res.send(500, err);
   res.redirect("/");
   });
   });

//Update Todo
router.patch("/update/todo/:id",(req,res)=>{
    const {id}=req.params._id;
    const info=Todo_model.find();
    console.log(info)
    Todo_model.updateOne({_id}, { done:"1"})
    .then(()=>{
        console.log("deleted")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

module.exports=router;