import { getUserAsync,getUserAfterDelay,getUserWithError } from "./userAsync";

test('getUserAsync returns the user details',async ()=>{
    const user = await getUserAsync();
    // console.log('usr......',user);

    expect(user.name).toBe('Abdul Kadir Khan');
});

test('getUserAsync to be equal',async ()=>{
    const user = await getUserAsync();

    expect(user).toEqual({
        name:'Abdul Kadir Khan',
        age:30,
        address:'gorakhpur uttar pradesh'
    });
});

test('getUserAfterDelay returns user after delay',async ()=>{
    const userDelay = await getUserAfterDelay(1000);

    expect(userDelay.name).toBe('Abdul Kadir Khan');
});

test('getUserWithError reject with an error',async ()=>{
    await expect(getUserWithError()).rejects.toThrow('Failed to fetch error.');
});