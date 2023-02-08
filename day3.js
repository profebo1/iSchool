let student = {
  name: "John Doe",
  age: 80,
  email: "johndoe@doe.com",
  parents: {
    father: {
      name: "Mr Doe",
      age: 78,
    },
    mother: {
      name: "Mary Doe",
      age: 60,
    },
  },
};

if (student.age > student.parents.father.age) {
  console.log("student is older than father");
} else if (student.age > 15) {
  console.log("student is young");
} else {
  console.log("None met");
}
