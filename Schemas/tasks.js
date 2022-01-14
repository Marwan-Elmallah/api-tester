const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    name:           {type: String , required: true},
    categ:          {type: String , required: true},
    description:    {type: String , default: "NONE"},
    createdAt:      {type: Date , default: Date.now}
})

const task = mongoose.model("note",taskSchema)

module.exports = task;