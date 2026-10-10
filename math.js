const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const multi = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
};

export { add, sub, multi, divide };