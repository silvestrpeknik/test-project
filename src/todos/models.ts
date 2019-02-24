// typescript allows us to use interfaces
export interface Todo {
    id?: number; //optional (client does not have to define it)
    message: string;
    isDone: boolean;
    color: string;
}