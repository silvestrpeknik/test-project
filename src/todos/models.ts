// typescript allows us to use interfaces
export interface Todo {
    id?: number; //optional (client does not have to define it)
    message: string;
    isDone: boolean;
    color: 'red' | 'white' | 'green';
}

// in JS, interface does not have to be implemented. I can use any object with it.
// example:
// const todo: Todo = {
//     color: 'green',
//     id: 1,
//     isDone: false,
//     message: 'Note number 1.'
// }