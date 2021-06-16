const person = {
  firstname: 'John',
  lastname: 'Doe',
  hobbies: ['coding', 'travelling', 'cooking'],
  walk: function () {
    console.log(person.firstname + ' is walking');
  },
};

let students = [
  { name: 'Mike' },
  { name: 'Nike' },
  { name: 'Praise' },
  { name: 'George' },
  { name: 'Unity' },
];

let name = 'Owolabi';

// if (name === 'Tega') {
//   console.log('yes it is tega');
// } else if (name === 'Owoloabi') {
//   console.log('yes it is owolabi');
// } else if (name === 'Ayobami') {
//   console.log('yes it is ayobami');
// } else if (name === 'Favour') {
//   console.log('yes it is favour');
// } else {
//   console.log('i do not need you');
// }

// switch (name) {
//   case 'Tega':
//     console.log('yes it is tega');
//     break;
//   case 'Owolabi':
//     console.log('yes it is owolabi');
//     break;
//   case 'Ayobami':
//     console.log('yes it is ayobami');
//     break;
//   case 'Favour':
//     console.log('yes it is favour');
//     break;

//   default:
//     console.log('I do not know you');
//     break;
// }

module.exports = {
  students,
  person,
};
