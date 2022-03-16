const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (student, grade) => student.map((nameStudent, index) => ({
    name: nameStudent,
    average: (grade[index].reduce((acc, curr) => acc + curr, 0) / grade[index].length),
  }));

console.log(studentAverage(students, grades));
