class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary; 
    }

    increaseSalary(percentage) {
        this.salary += this.salary * (percentage / 100); 
        return this.salary; 
    }

    totalSalaryOverYears(years, bonus) {
        return (this.salary + bonus) * years; 
    }

    static averageSalary(person1, person2) {
        return (person1.salary + person2.salary) / 2; 
    }

    displayInfo = () => {
        console.log(
            `Name: ${this.firstName} ${this.lastName}, Salary: ${this.salary}`
        );
    }
}

const person1 = new Person("Tejas", "Gunjal", 50000); 
const person2 = new Person("Hitesh","Patel",40000);

person1.displayInfo(); 
person2.displayInfo();

console.log(`${person1.firstName}'s new salary after 10% raise: ${person1.increaseSalary(10)}`);
console.log(`${person1.firstName}'s total salary over 5 years with 5000 bonus per year: ${person1.totalSalaryOverYears(5, 5000)}`);
console.log("Average Salary of two persons:", Person.averageSalary(person1, person2)); 





