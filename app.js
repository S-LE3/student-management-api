
const express = require('express');
const { serialize } = require('node:v8');
const app = express();
const PORT = 3000;

app.use(express.json());

const students = []; // In-memory array 
let nextId = 17;      // Tracker variable to handle ID serialization

app.post('/createstudents', (req, res) => {
  const { name, age, course } = req.body;

// Converts the number to a string and adds leading zeros until it has 3 digits
   const serializedId = String(nextId++).padStart(3, '0');

   const newStudent = {
     id: serializedId,
     name: name,
     age: parseInt(age),
     course: course,
     enrolled: true,
   };

   students.push(newStudent);

   res.status(201).json(newStudent);
});

app.get('/getallstudents', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);
});

app.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const { name, age, course, enrolled } = req.body;

  const student = students.find((s) => s.id === studentId);
  
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  
  if (name !== undefined) student.name = name;
  if (age !== undefined) student.age = parseInt(age);
  if (course !== undefined) student.course = course;
  if (enrolled !== undefined) student.enrolled = enrolled;
  
  res.json(student);
});

app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const studentIndex = students.findIndex((s) => s.id === studentId);
   
  if (studentIndex === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }
   
  students.splice(studentIndex, 1);
  res.json({ message: 'Student deleted successfully' });
});

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});
