import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

test("add() returns 5 if called with 2 and 3", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("add() returns a negative value if the greater argument is negative", () => {
  const result = add(-5, 2);
  expect(result).toBeLessThan(0);
});
test("add() returns a value close to 0.3 when adding 0.1 and 0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("subtract() returns 10 if called with 15 and 5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() returns a negative value if the second arguement is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

test("multiply() returns 8 if called with muliply 2 and 4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBe(-8);
});
test("multiply() returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBe(-8);
});
test("multiply() returns a positive value if ocalled with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBe(8);
});

test("divide() returns 3 if called with devide 9 and 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("divide() returns You should not do this! if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
