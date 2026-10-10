const getUserAsync = async () => {
    return {
        name: 'Abdul Kadir Khan',
        age: 30,
        address: 'gorakhpur uttar pradesh'
    }
};

const getUserAfterDelay = async (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Abdul Kadir Khan',
                age: 27
            })
        }, delay)
    })
};

const getUserWithError = async () => {
    throw new Error('Failed to fetch error.')
}

export { getUserAsync, getUserAfterDelay, getUserWithError};