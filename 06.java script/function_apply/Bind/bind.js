
const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    console.log(this.name + "studies in grade" + this.grade + ".");
  },
};

const student2 = {
  name: "Jimmy ",
  grade: " 6",
};

let result= student1.introduction.bind(student2);

result();  

{
  const Person1 = {
    name: "Motu",
    grade: "8",
    introduction: function () {
      console.log("This Person Name is" + " " + this.name + " " + "Person's Grade is" + " " + this.grade + ".");
    }
  }

  const Person2 = {
    name: "Patlu",
    grade: "9",
  };

  let result = Person1.introduction.bind(Person2);

  result();
}