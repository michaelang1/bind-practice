const { Employee } = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

setTimeout(john.sayName.bind(john), 2000);

const sayOccupation = john.sayOccupation.bind(john);
setTimeout(sayOccupation, 3000);
