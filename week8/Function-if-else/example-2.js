function grade(name, grade) {
    if (grade >= 85 && grade <= 100) {
        console.log(`${name}, you have recieved an A`);
    } else if (grade >= 70 && grade < 85) {
        console.log(`${name}, you have recieved a B`);
    } else if (grade > 50 && grade < 70) {
        console.log(`${name}, you have recieved a C`);
    } else {
        console.log(`${name}, you have an invalid mark`)
    }
}


grade("Sarah", 91);
grade("George", 85);
grade("Sam", 73);
grade("Emily", 53);
grade("Tom", 20);
grade("Wilson", 120);