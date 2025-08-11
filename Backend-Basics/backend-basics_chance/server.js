import { createServer } from "node:http";
import { Chance } from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const age = chance.age();
  const name = chance.name();
  const profession = chance.profession();

  if (request.url === "/") {
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}`
    );
    return;
  }
});

// Hier wird ein Objekt wiedergegeben: 

// export const server = createServer((request, response) => {
// const person= {
// name: chance.name();
// age: chance.age();
// profession : chance.profession()})}

// response.setHeader("Content-Type", "application/json")
// response.end(JSON.stringify.person))