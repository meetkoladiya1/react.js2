function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Product("cheese", 5).name);
// Expected output: "cheese"


{
  function School (Student , Teachers){
    this.Student = Student;
    this.Teachers = Teachers;
  }

  function Standard (Student , Teachers){
    School.call(this, Student , Teachers);
    this.category = "standard";
  }

  console.log(new School("Small Standard").Student);
}