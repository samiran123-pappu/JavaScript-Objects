const samiran = {
    gender: "male",
    age: "20",
    fun: function (){
        return this.age;
    }

}

let a = samiran["age"];
let b = samiran.fun();
console.log(a);
console.log(b);