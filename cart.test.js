let cart;

beforeEach(() => {
    cart = [];
});

afterEach(() => {
    cart = null;
});

test('should start with the empty cart', () => {
    expect(cart).toHaveLength(0);
});

test('should add a product to the cart', () => {
    cart.push('Laptop');

    expect(cart).toContain('Laptop');
});

test('should add a multiple products', () => {
    cart.push('tablet', 'Mouse');

    expect(cart).toHaveLength(2);
});


