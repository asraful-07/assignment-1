# TypeScript Interview Questions — Blog Post

## 1️⃣ Difference between `any`, `unknown`, and `never` types in TypeScript

TypeScript provides several special types to handle different scenarios. Three commonly used types are `any`, `unknown`, and `never`. They serve distinct purposes:

### `any`

- Represents any type and essentially disables type checking.
- Using `any` is unsafe, because the compiler cannot catch errors.

**Example:**

```ts
let value: any = 42;
value = "hello";
value = true;
unknown
Also represents any type, but type checking is enforced before using it.

Safer than any because TypeScript forces you to check the type before performing operations.

Example:
let value: unknown = 10;
if (typeof value === "number") {
  console.log(value + 5);
}
never
Represents values that never occur.

Used for functions that never return, throw errors, or have infinite loops.

Example:

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

Point Table:
Type	             Behavior	                          Usage
any	          Disable type checking	            When type is unknown, quick prototyping
unknown	      Safe alternative to any	        Type-safe code with runtime checks
never	      Represents impossible values	    Functions that never return or throw


### 2️⃣ Use of `Enums` in TypeScript with Numeric and String Examples
Enums are used to define a set of named constants, making the code more readable, maintainable, and type-safe. They can be numeric or string enums.

Numeric Enum Example

enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move: Direction = Direction.Left;
console.log(move);
String Enum Example

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

const currentStatus: Status = Status.Active;
console.log(currentStatus);
Key Points:

Enums improve readability compared to magic numbers or strings.

They provide type-safety, preventing invalid values.

Both numeric and string enums can be used depending on the scenario.
```
