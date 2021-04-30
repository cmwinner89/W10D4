export const allTodos = ({ todos }) => {
    // return Object.keys(todos).map(id => todos[id]);
    return Object.values(todos);
    // return Object.entries(todos);
};