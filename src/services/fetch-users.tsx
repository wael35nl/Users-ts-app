export const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) throw new Error('Response isn\'t ok!!');
        const data = await response.json();
        return data;
    } catch (error: any) {
        return error.message;
    }
}