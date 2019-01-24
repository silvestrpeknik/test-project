import Router from 'koa-router';
import { Context } from 'koa';
import { Todo } from './models';
import 'koa-body';


const routes = new Router({
    prefix: '/todos' // adds this prefix to all routes defined for this router
});

let todos: Array<Todo> = [];

// 
//  Define routes
//   - create todo
routes.post('/', (ctx: Context) => { // context contains request, response and other?
    const todo: Todo = ctx.request.body; // note: during runtime, its no longer typescript, so anything can be assigned to the todo variable
    todo.id = Date.now()
    todos.push(todo);
    ctx.response.status = 201;
    ctx.response.body = todo;
})
//   - get all dotos
routes.get('/', (ctx: Context) => {
    ctx.response.body = todos;
})
//   - get specific doto
routes.get('/:id', (ctx: Context) => {
    const id = Number(ctx.params.id);
    for(let todo of todos) {
        if(todo.id === id) {
            ctx.response.body = todo;
            break;
        }
    }
    if(!ctx.response.body) {
        ctx.response.status = 404;
    }
})
//   - update todo
routes.put('/:id', (ctx: Context) => {
        const id = Number(ctx.params.id);
        const todo: Todo = ctx.request.body;
        console.log(id);
        if(isNaN(id)) {
            ctx.response.status = 400;
            ctx.response.body = `'${ctx.params.id}' is not a number`;
            return;
        }
        if(!!todo.id && todo.id !== id) {
            ctx.response.status = 409
            ctx.response.body = 'Mismatch between URL id and body id.'
            return;
        }
        const index = todos.findIndex((item: Todo) => item.id === id);
        if(index !== -1) {
            todo.id = id;
            todos[index] = todo;
            ctx.response.status = 204
        } else {
            todo.id = id;
            todos.push(todo);
            ctx.response.status = 201
            ctx.response.body = todo;
        }

})
//   - delete todo
routes.delete('/:id', (ctx: Context) => {
    const id = Number(ctx.params.id);    
    todos = todos.filter((todo: Todo) => todo.id !== id);
    ctx.response.status = 200;
})

export default routes;