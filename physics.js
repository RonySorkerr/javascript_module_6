const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// console.log(student.physics);
let values = Object.values('physics');
// console.log(values[2]);

// console.log(values);
console.log(student.physics['marks']);
