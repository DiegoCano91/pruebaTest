const person = {
    firstname: "Delft",
    lastname: "Stack",
    age: 30,
    email: "Delft.Stack@gmail.com"
   };
   
   function email() {
    this.email = 'maofficial@gmail.com';
   }
   
   email.prototype = person;
   var obj = new email();
   
   for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
     }
   }