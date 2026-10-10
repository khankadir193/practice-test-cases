import { getSkills, getUser } from './user.js';

test('getUser return the object', () => {
    expect(getUser()).toEqual({ name: "Abdul Kadir Khan", age: 30, role: "Software Engineer" });
});

test('check getUser have property or not', () => {
    expect(getUser()).toHaveProperty("name");
});

test('check getSkills return the React',()=>{
    expect(getSkills()).toContain('React');
})

test("check the length of the getSkills",()=>{
    expect(getSkills()).toHaveLength(3);
});

test('check whether user age is exist',()=>{
    expect(getUser().age).toBe(30)
});

test('check missing property is exist or not',()=>{
    expect(getUser()).not.toHaveProperty('email');
});

test('check missing property is exist or not',()=>{
    expect(getSkills()).toContain('Javascript');
});

test('check age is not to be the 25',()=>{
    expect(getUser().age).not.toBe(25);
});

test('check age is to be greaterthan 25',()=>{
    expect(getUser().age).toBeGreaterThan(25);
});

test('check age is to be lessthan 31',()=>{
    expect(getUser().age).toBeLessThan(31);
});

test('check whether user rooe should be match',()=>{
    expect(getUser().role).toMatch('Software Engineer');
});




