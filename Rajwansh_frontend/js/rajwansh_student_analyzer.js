const students = [
{
 name: "Lalit",
 marks: [
   { subject: "Math", score: 78 },
   { subject: "English", score: 82 },
   { subject: "Science", score: 74 },
   { subject: "History", score: 69 },
   { subject: "Computer", score: 88 }
 ],
 attendance: 82
},
{
 name: "Rahul",
 marks: [
   { subject: "Math", score: 90 },
   { subject: "English", score: 85 },
   { subject: "Science", score: 80 },
   { subject: "History", score: 76 },
   { subject: "Computer", score: 92 }
 ],
 attendance: 91
},

{
  name: "Aman",
  marks: [
    { subject: "Math", score: 35 },
    { subject: "English", score: 60 },
    { subject: "Science", score: 55 },
    { subject: "History", score: 65 },
    { subject: "Computer", score: 70 }
  ],
  attendance: 80
}
];

// here I am calculating total marks for each student
function calculateTotalMarks(students) {
  students.forEach((student) => {
    // start total from 0 for each student
    let total = 0;
     // adding all subject scores one by one
    student.marks.forEach((mark) => {
      total += mark.score;
    });
    student.totalMarks = total;
    // printing total marks in console
    console.log(`${student.name} Total Marks: ${total}`);
  });
}

console.log("1. Total marks for each student");
// calling function because we want to see total marks for each student in console
calculateTotalMarks(students);
