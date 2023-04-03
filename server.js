const express = require('express');
const app = express();
const port = 3000;
const students = require('./models/students.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
  });
  //near the top, around other app.use() calls
  app.use(express.urlencoded({extended:false}));



app.get('/students', (req,res) =>{
    res.render('Index', { students: students });
    
});

app.get('/students/new', (req, res) => {
    res.render('New');
  });

  app.post('/students', (req, res)=>{
    if(req.body.pass === 'on'){ 
        req.body.pass = true; 
    } else { 
        req.body.pass = false; 
    }
    students.push(req.body);
    console.log(students);
    res.redirect('/students'); 
  });






app.get('/students/:indexOfStudentsArray', (req, res) => {
    res.render('Show', { 
        student:students[req.params.indexOfStudentsArray]
});
});



app.listen(port,() => {
    console.log('listening on port' , port);
});