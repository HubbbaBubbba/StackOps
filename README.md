# Team Stack-Ops

# CourseInsider

**As a** student

**I want** to find classes that have python 

**So that** I can take them

# The Process
1) Introduction of product
 - [Intro Wiki](https://github.com/HubbbaBubbba/StackOps/wiki)
2) Rough Draft Design
 - [Design Wiki](https://github.com/HubbbaBubbba/StackOps/wiki/The-Process)
3) Some of our login code

```javascript
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

```
