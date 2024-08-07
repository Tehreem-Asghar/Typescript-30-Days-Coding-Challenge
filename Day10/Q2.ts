// ***Question 20:*** Implement a Simple Student Record

interface RecordData {
  name: string;
  grade: number;
}

class Student {
  name: string = "";
  grade: number = 0;

  // This method sets the student's name
  setName(name: string): void {
    this.name = name;
  }
  // This method sets the student's grade
  setGrade(grade: number): void {
    this.grade = grade;
  }

  // This method returns an object with the student's name and grade
  getRecord(): RecordData {
    return { name: this.name, grade: this.grade };
  }
}

const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
