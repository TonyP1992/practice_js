// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     raiting: 8.38,
// };

// for(const genres in book) {
//     console.log(genres);
//     console.log(book[genres]);
// }

// const user = {
//     userName: "Tony",
//     age: 32,
//     hobbies: "IT",
//     pet: "cat",
// }

// const keys = [];
// const values = [];

// for (const key in user) {
//     keys.push(key);
//     values.push(user[key]);
// }

// console.log(keys);
// console.log(values);

// const keys = Object.keys(user);
// console.log(keys);

function getSalary (salaryName) { 
const salaries = [
    { userName: "Roma", userSalary: 1300},
    { userName: "Dima", userSalary: 1500},
    { userName: "Julia", userSalary: 2300},
    { userName: "Jay", userSalary: 2000}
];

for (const salary of salaries ) {
    if (salary.userName === salaryName)
        return salary.userSalary;
}

  return "there is no this Name";
}

console.log(getSalary("Roma"));