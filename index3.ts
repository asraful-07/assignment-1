//!
class Person {
  constructor(private name: string, private age: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
