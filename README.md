### 1.What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type দুটোই object এর shape define করতে ব্যবহার হয়, কিন্তু কিছু key difference আছে:

### Interface:

- মূলত object shape define করার জন্য ব্যবহৃত হয়।
- Extend করা যায় এবং একাধিক interface merge করা যায়।
- OOP style development-এ বেশি use হয়।

### Type Alias:

- শুধু object নয়, primitive, union, tuple, function type ইত্যাদিও define করা যায়।
- Merge করা যায় না (interface এর মতো)।
- Complex type composition করতে বেশি সুবিধা দেয়।

Interface Example
interface User {
name: string;
age: number;
}

## MERGE হয়ে যাবে

interface User {
email: string;
}

Type Example
type Person = {
name: string;
age: number;
};

Error: Duplicate type name allowed না
type Person = { email: string }

### 2.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

## Enum কী?

Enum হলো TypeScript এর একটি special feature, যা একটি fixed group of values define করতে ব্যবহার হয়। যেমন: রোল (Admin, User), ডে (Sat, Sun), কালার (Red, Green), ইত্যাদি।
Enum ব্যবহার করলে code আরও readable, clean এবং bug-free হয়।

## A. Numeric Enum (ডিফল্টভাবে সংখ্যা)

TypeScript-এ enum default হিসেবে সংখ্যা ব্যবহার করে।
0 থেকে শুরু হয়, চাইলে manually value দিতে পারো।

Example:
enum Role {
Admin,
User,
Moderator
}

let myRole: Role = Role.User;
console.log(myRole);

## B. String Enum

String enum-এ প্রতিটি value একটি string হয়, যা readable এবং predictable।

Example:
enum Status {
Success = "SUCCESS",
Failed = "FAILED",
Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus);
