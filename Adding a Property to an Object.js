

function addProperty(a,b,c){
    this.name = a;
    this.age = b;
    this.city = c;

}

const d = new addProperty("John", 30, "New York");
console.log(d)


d.height = 180;

console.log(d)

addProperty.prototype.country = "USA";
console.log(d)