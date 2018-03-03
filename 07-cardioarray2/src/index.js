/* importing styles from `./assets/styles/index.css */
import "./assets/styles/index.css";

// /* Start of javascript */
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
const checkAge = (item) => {
    const a = new Date();
    return ((a.getFullYear() - item.year) >= 19);
}
// Array.prototype.some() // is at least one person 19 or older?
console.log(people.some(checkAge));
// Array.prototype.every() // is everyone 19 or older?
console.log(people.every(checkAge));



// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findItem = ((item) => item.id === 823423)
console.log(comments.find(findItem));

// Array.prototype.findIndex()
// Find the comment with this ID
const findIndex = comments.findIndex(findItem);
console.log({findIndex});
// delete the comment with the ID of 823423
console.table(comments.reduce((initial, item) => {
    if (item.id !== 823423) {
        initial.push(item);
    }
    return initial;
}, []));

const newComments = [
    ...comments.slice(0, findIndex),
    ...comments.slice(findIndex + 1)
];
console.table(newComments);
