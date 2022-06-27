const express = require('express');

const app = express(); 

app.use(express.json());

const courses = [
    { id:1 ,name : 'Abdullah'},
    { id:2 ,name : 'team2' },
    { id:3 ,name : 'team3'}
];

app.get('/',(req,res)=>{
    console.log(req.route)
    res.send('Hello world');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses)
});

app.post('/api/courses',(req,res)=>{

// if(req.body.name || req.body.name.length <3){
//     res.status(400).send("Missing name");
//     return ;
// }

const course = {
id:courses.length +1,
name: req.body.name
};
courses.push(course)
res.send(course); 
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find( c => c.id == parseInt(req.params.id)) ;
    if (!course) res.status(404).send(" Team unavailable"); 
    res.send(course)
    
});

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params)
})

const port = process.env.PORT || 3000 ;


app.listen(port, ()=>

    console.log(`listening on port ${port} ..`)
);
