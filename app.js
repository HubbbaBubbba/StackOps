require('dotenv').config()
const { ObjectId } = require('mongodb')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;  
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');

// let authenticated = false;

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.static("public"));
async function cxnDB(){

  try{
    client.connect; 
    const collection = client.db("CISDB").collection("CISCourses");
    // const collection = client.db("papa").collection("dev-profiles");
    const result = await collection.find().toArray();
    //const result = await collection.findOne(); 
    console.log("cxnDB result: ", result);
    return result; 
  }
  catch(e){
      console.log(e)
  }
  finally{
    client.close; 
  }
}



app.get('/', async (req, res) => {

if(req.query.username && req.query.password)   
{ //authenticated
  console.log("authenticated", req.query.username);

}
else
{
  //you aint 
  console.log("not", req.query.username);

}


  if(true){
    console.log("im authenticated!"); 

    let result = await cxnDB().catch(console.error); 
    // console.log("get/: ", result);
    res.render('index', {  courseData : result })
}
// else if(authenticated === false) {
//   console.log("im NOT authenticated!"); 
//   // authenticated = true;
//   res.redirect('/login');
// }
})

app.get('/login', async(req,res) => {

  res.render('login'); 

  // res.render('login', {  courseData : result })
})

//CREATE

app.get('/create', async (req, res) => {

  //get data from the form 

  console.log("in get to slash update:", req.query.ejsFormName); 
  game_input = req.query.ejsFormName; 

  //update in the database. 
  client.connect; 
  const collection = client.db("CISDB").collection("CISCourses");
  await collection.insertOne({ 
    game: game_input
})
.then(result => {
  console.log(result); 
  res.redirect('/');
})
  
})

//READ

app.get('/mongo', async (req, res) => {

  // res.send("check your node console, bro");

  let result = await cxnDB().catch(console.error); 

  console.log('in get to slash mongo', result[1].course_name); 

  res.send(`here ya go, joe. ${ result[1].course_name }` ); 

})

//UPDATE

app.post('/updateCourse/:id', async (req, res) => {

  try {
    console.log("req.parms.id: ", req.params.id) 
    
    client.connect; 
    const collection = client.db("CISDB").collection("CISCourses");
    let result = await collection.findOneAndUpdate(
      {"_id": new ObjectId(req.params.id)}, {$set:{game : "Halo"}})
    .then(result => {
      console.log(result); 
      res.redirect('/');
    })
    .catch(error => console.error(error))
  }
  finally{
    //client.close()
  }

})

// DELETE

app.post('/deleteCourse/:id', async (req, res) => {

  try {
    console.log("req.parms.id: ", req.params.id) 
    
    client.connect; 
    const collection = client.db("CISDB").collection("CISCourses");
    let result = await collection.findOneAndDelete( 
      {"_id": new ObjectId(req.params.id)}, {$set:{game : ""}})
    
    .then(result => {
      console.log(result); 
      res.redirect('/');
    })
    .catch(error => console.error(error))
  }
  finally{
    //client.close()
  }

})


console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})