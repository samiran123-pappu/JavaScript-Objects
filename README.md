What are JavaScript Objects?
Objects are variables that can store both values and functions.

Values are stored as key:value pairs called properties.

Functions are stored as key:function() pairs called methods.


```bash
const person = {
  firstName: "John",  // property 
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;         // method
  }
}



```