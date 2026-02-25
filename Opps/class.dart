class Student {
  int rollNumber;
  String name;
  int age;

  Student(this.rollNumber, this.name, this.age);

  Student.guest() :
    rollNumber = -1,
    name = 'Guest',
    age = 0;
  

  void displayInfo() {
    print('Roll Number: $rollNumber, Name: $name, Age: $age');
  }
}
void main(){
  Student student1 = Student(1, 'Alice', 20);
  Student student2 = Student(2, 'Bob', 22);

  student1.displayInfo();
  student2.displayInfo();
 Student student3 = Student.guest();
  student3.displayInfo();
}