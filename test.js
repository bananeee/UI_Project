function Person(fn, al) {
    this.fullName = fn
    this.alias = al
    this.sayHello = function () {
        console.log(this.fullName + this.alias)
    }
}

person1 = new Person("minh", "jazz")
person1 = new Person("chui", "rap")
person1 = new Person("banana", "rock")

Person.sayGoodbye = function() {
    console.log("goodbye")
}