const getUser = () => {
    return {
        name: 'Abdul Kadir Khan',
        age: 30,
        role: 'Software Engineer'
    }
}

const getSkills = () => {
    return ["Javascript", "React", "Redux"];
}

const isLoggedIn = () => true;
const hasPermission = () => false;

export { getUser, getSkills, isLoggedIn, hasPermission };