# Team Stack-Ops

# CourseInsider

![course_insider_logo_trans](https://user-images.githubusercontent.com/111534176/232884866-4573578f-29f2-4f09-8eae-970c75079c17.png)

# User Story :raising_hand: :book:

**As a** student :woman_technologist:

**I want** to find classes that have python :mag:

**So that** I can take them :memo:  
<br />

**As a** student :technologist:

**I want** to select a class :mag:

**So that** I can learn more about them :book: 

# The Process :exclamation:
1)Project Board 
 - [CourseInsider Project Board](https://github.com/users/HubbbaBubbba/projects/2)
2) Introduction of product
 - [Intro Wiki](https://github.com/HubbbaBubbba/StackOps/wiki)
3) Rough Draft Design
 - [Design Wiki](https://github.com/HubbbaBubbba/StackOps/wiki/The-Process)
 - [Design Inspiration](https://codepen.io/bartaxyz/pen/DZJwQX)
 - We will also be changing colors to match our logo for uniformity.
![anton_logo](https://user-images.githubusercontent.com/111534176/234392525-6e776bc4-d1ae-45bc-9994-0c2addd77d12.png)
![stackops-searchfilter-page](https://user-images.githubusercontent.com/111534176/232892352-b776e626-5eaf-44de-bd8f-e051cefc4b67.jpg)
![footer](https://user-images.githubusercontent.com/111534176/232890997-8d3069af-ece3-4d12-9124-1d39717eea7d.jpg)
![moredesign](https://user-images.githubusercontent.com/111534176/232891059-c0aad41e-51d6-43a8-9145-337d076cce11.jpg)

4) Some of our login code

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
5) Example of Issue Card
  - [Closed Issue](https://github.com/HubbbaBubbba/StackOps/issues/3)
6) Workflow
``` diff
name: Move assigned card
on:
  issues:
    types:
      - assigned
jobs:
  move-assigned-card:
    runs-on: ubuntu-latest
    steps:
      - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
        with:
          project: CIS Course Database
          column: Todo
          repo-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
 - Still in Progress
 - Will allow us to automatically move items from new -> ToDo when assigning new members to issues.
 # Code snippets
 - [Code](https://github.com/HubbbaBubbba/StackOps/wiki/Coding-Journey)
