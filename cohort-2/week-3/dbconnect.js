const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://gandhi:5447@cluster0.eqc6a4c.mongodb.net/user_data2")


// Here .model fn is used to define the structure of the table
// User => Name of the table
// name , email , password => Data of the table
// String => Type of the data
const User = mongoose.model('User' , {name : String , email : String , password : String})

// Giving the inputs of the table manually
const user = new User({ name : 'Animesh Gandhi' , email : 'abc@gmail.com' , password : '12345'})


// Now if we call the .save function it will actually in the database
user.save() 