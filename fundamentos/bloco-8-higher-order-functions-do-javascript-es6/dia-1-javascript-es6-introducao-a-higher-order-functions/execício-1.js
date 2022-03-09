const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const employeeGenerator = (fulName) => {
  const email = fulName.toLowerCase().split(' ').join('_');
  return {fulName, email: `${email}@trybe.com`};
};

console.log(newEmployees(employeeGenerator));
