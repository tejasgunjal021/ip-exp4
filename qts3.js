class Person {
    constructor(name, age) 
    {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error("Name must be a non-empty string.");
        }
        if (typeof age !== 'number' || age <= 0) {
            throw new Error("Age must be a positive number.");
        }

        this.name = name; 
        this.age = age;   
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, rollNo, grade, email, course) {
        super(name, age); 
        this.rollNo = rollNo; 
        this.grade = grade;    
        this.email = email;    
        this.course = course;    

        this.validateInputs();
    }

    validateInputs() {
        if (this.rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }
        if (typeof this.grade !== 'string' || this.grade.trim() === '') {
            throw new Error("Grade must be a non-empty string.");
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailPattern.test(this.email)) {
            throw new Error("Invalid email format.");
        }
        if (typeof this.course !== 'string' || this.course.trim() === '') {
            throw new Error("Major must be a non-empty string.");
        }
    }


    displayInfo() {
        super.displayInfo(); 
        console.log(`Roll No: ${this.rollNo}, Grade: ${this.grade}, Email: ${this.email}, Course: ${this.course}`);
    }
}

try {
    const student1 = new Student("Alice", 20, 5, "A", "alice@example.com", "Computer Science");
    student1.displayInfo(); 

    const student2 = new Student("Bob", 22, 3, "B", "bob@example.com", "Mathematics");
    student2.displayInfo(); 

    const student3 = new Student("Charlie", 19, 0, "C", "charlie@example.com", "Physics"); 
    student3.displayInfo();
} 
catch (error) {
    console.error(error.message); 
}

try {
    const student4 = new Student("David", 21, 10, "B", "invalid-email", "Chemistry"); 
    student4.displayInfo(); 
} 
catch (error) {
    console.error(error.message); 
}

try {
    const student5 = new Student("", 21, 8, "B", "david@example.com", "Biology"); 
    student5.displayInfo(); 
} 
catch (error) {
    console.error(error.message); 
}
