const express=require('express');
const app=express();
const Joi=require('joi');
app.use(express.json());
const courses= [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'}
];

app.get('/',(req,res)=>{
    res.send('Hello Vihita');
});

app.get('/api/courses',(req,res)=>{

    //res.send([1, 2, 3])
    res.send(courses);
});

app.get('/api/posts/:id',(req,res)=>{
    res.send(req.params.id);
}
);

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params.month);
});

app.post('/api/courses',(req,res)=>{
    const {error}=validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    
    const course={
        id : courses.length+1,
        name : req.body.name.concat(courses.length+1)
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('The course is not found');
    const {error}=validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    course.name=req.body.name;
    res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course not found');
    }
    else{
        res.send(course);
    }
});
app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('The course not found');

    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(courses);
});

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on ${port}`));




function validateCourse(course){
    const schema={
        name : Joi.string().min(3).required()
    };
    const result=Joi.validate(course, schema);
    return result;
}
