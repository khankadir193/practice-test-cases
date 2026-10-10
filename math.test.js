import { add, sub, multi, divide } from './math.js';

test("add should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("add should work the negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
});


test("add should return 0 when both numbers are 0", () => {
    expect(add(0, 0)).toBe(0);
});

test("sub should return the subtraction of two numbers", () => {
    expect(sub(5, 3)).toBe(2);
});

test("sub should work the negative numbers", () => {
    expect(sub(0, 5)).toBe(-5);
});

test("sub should work negative numbers", () => {
    expect(sub(-5, -3)).toBe(-2);
});

test("multi should return the multiply of two numbers", () => {
    expect(multi(5, 3)).toBe(15);
});

test("multi should return 0 when one number is 0", () => {
    expect(multi(0, 3)).toBe(0);
});

test("multi should return -18 when one number is -3", () => {
    expect(multi(-3, 6)).toBe(-18);
});

test("divide should return the division of two numbers", () => {
    expect(divide(10, 5)).toBe(2);
});

test("divide should work decimal numbers", () => {
    expect(divide(5, 2)).toBe(2.5);
});

test("divide should work decimal numbers", () => {
    expect(divide(15, 2)).toBe(7.5);
});

test("divide should throw error when divide by the zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});

test("divide by 2 and should return 5", () => {
    expect(divide(10, 2)).toBe(5);
});

test("divide by 2 and should return -5", () => {
    expect(divide(-10, 2)).toBe(-5);
})