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


function calculateAverage(students) {
  students.forEach((student) => {
    let avg = student.totalMarks / student.marks.length;
    //student.marks.length gives the total number of subjects
    student.average = avg;
    console.log(`${student.name} average: ${student.average.toFixed(1)}`);
    //used toFixed(1) to get 1 digit after the decimal point
  });
}

console.log("2. Average marks for each student");
calculateAverage(students);

function subjectWiseHighest(students) {
  const highestMarks = {};
  students.forEach((student) => {
    student.marks.forEach((subject) => {
      //if the subject is never seen or if the current score is greater than the previous value
      if (
        highestMarks[subject.subject] === undefined ||
        highestMarks[subject.subject].marks < subject.score
      )
        // highestMarks is an object containing arr
        highestMarks[subject.subject] = {
          name: student.name,
          marks: subject.score,
        };
    });
  });
  return highestMarks;
}
console.log("3. Subject-wise Highest Score in the Class");
const subjectTopper = subjectWiseHighest(students);


