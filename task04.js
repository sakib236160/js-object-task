// Task-4
// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const keys = Object.keys(student);
console.log('Count the number of properties:',keys.length);
// for(const key of keys){
//     console.log(key, ':', student[key]);
// }