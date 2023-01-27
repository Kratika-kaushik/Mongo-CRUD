const mongoose=require("mongoose");
const uri='mongodb+srv://kratika-mtalkz:kratika-mtalkz@cluster0.4o3dgcq.mongodb.net/?retryWrites=true&w=majority';
//const uri='mongodb://localhost:27017/employeeDB';
const employeeSchema=mongoose.Schema({
    name:String,
    age:Number,
    designation:String
})
const Employee=mongoose.model("Employee",employeeSchema);
//Create
// const fun= async()=>{
//     try{
//         // const e1=new EmployeeDB.employee.insertOne({
//         //     name:"njdne",
//         //     age:32,
//         //     designation:"Developer"
//         // });
        
//        // await e1.save();

//        const e1= Employee.insertMany([{
//             name:"Kratika",
//             age:21,
//             designation:"fvr"
//         },{
//             name:"jfnv",
//             age:32,
//             designation:"fcer"
//         }]);
//         await e1.save();
//     }catch(error){
//         console.log(error);
//     }
// }

// fun();

//Read

const read=async()=>{
    try{
  Employee.find(
    {age:{$gt:30}},function(err,emp){
        if(err){
            console.log(err);
        }else{
            console.log(emp);
        }
    });
    }catch(error){
        console.log(error);
    }
}
read();

//Update

// const update=async()=>{
//     try{
//           Employee.updateOne({age:32},{name:"Vaishnavi"},function(err){
//             if(err){
//                 console.log(err);
//             }else
//             console.log("Successfully updated");
//           });
//     }catch(error){
//         console.log(error);
//     }
// }
// update();

//Delete
const deleTe=async()=>{
    try{
  Employee.deleteOne({name:"Vaishnavi"},function(err){
    if(err)
    console.log(err);
    else
    console.log("deleted");
  });
    }catch(error){
        console.log(error);
    }
}
deleTe();
async function connect(){
    try{
        await mongoose.connect(uri,{useNewUrlParser:true});
        console.log("connected to mongodb");
    }catch(error){
        console.error(error);
    }
}
connect();