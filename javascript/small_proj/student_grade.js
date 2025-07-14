// Array of students with marks
const students = [
  { name: "Pratik", marks: 85 },
  { name: "Sita", marks: 62 },
  { name: "Ravi", marks: 45 },
  { name: "Nisha", marks: 29 },
  { name: "Amit", marks: 95 }
];

// Function to calculate grade
function getGrade(marks) {
  if (marks >= 80) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  else return "F";
}

// Loop through students and print grades
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const grade = getGrade(student.marks);
  console.log(`${student.name} scored ${student.marks} and got Grade ${grade}`);
}
