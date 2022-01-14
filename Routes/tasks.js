const express = require("express")
const router = express.Router();
const task = require("../Schemas/tasks.js")
//get all tasks
router.get("/home", async (req,res) => {
    const tasks = await task.find()
    res.send(tasks)
})
//add tasks
router.post("/add", async (req,res) => {
    const body = req.body
    const newtask = new task({
        name:  body.name,
        categ: body.categ,
        description: body.description,
        createdAt: body.createdAt
    })
    const response = await newtask.save().catch( (e) => {console.log(e)} )
    res.send(response)
})
//select task to edit
router.get("/edit/:id" , async (req,res) => {
    const id = req.params.id
    const task = await task.findById(id)
    res.send(task)
})
//delete task
router.post("/del/:id", async (req,res) => {
    const id = req.params.id
    const response = await task.deleteOne({"_id" : id})
    res.send(response)
})



module.exports = router;