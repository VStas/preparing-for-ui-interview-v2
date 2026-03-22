// bun test src/problems/06-es5-extends/test/es5-extends.test.ts

export const myExtends = (SuperType: Function, SubType: Function) => {
  function MyType(this: unknown, ...args: unknown[]) {
    const thisObj = Object.create(SubType.prototype)
    SubType.apply(thisObj, args)
    SuperType.apply(thisObj, args)
    return thisObj
  }
  Object.setPrototypeOf(SubType.prototype, SuperType.prototype)
  Object.setPrototypeOf(MyType, SuperType)

  return MyType
}

// --- Examples ---
// Uncomment to test your implementation:

function Animal(this: any, name: string) {
  this.name = name
}
Animal.prototype.greet = function () {
  return `Hello, ${this.name}`
}

function Dog(this: any) {
  this.breed = 'Labrador'
}
Dog.prototype.bark = function () {
  return `${this.name} says Woof!`
}

const DogExtended = myExtends(Animal, Dog)
const dog = new (DogExtended as any)('Rex')
console.log(dog.name) // Expected: "Rex"
console.log(dog.breed) // Expected: "Labrador"
console.log(dog.__proto__)
console.log(dog.greet()) // Expected: "Hello, Rex"
console.log(dog.bark()) // Expected: "Rex says Woof!"
console.log(dog instanceof Animal) // Expected: true
