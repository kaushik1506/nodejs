const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


let students = [
    { id: 1, name: "Meow", course: "AI-ML" },
    { id: 2, name: "Bow", course: "DS" }
];



app.get('/students', (req, res) => {
    res.json(students);
});



app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.json(student);
});



app.post('/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(student);

    res.send("Student Added Successfully");
});



app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.send("Student Updated Successfully");
});




app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);

    res.send("Student Deleted Successfully");
});



app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});
