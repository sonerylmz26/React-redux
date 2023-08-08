//? todoReducer type declaration
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

//? action function:
// *rxaaction
export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});
export const clearTodo = () => ({
    type: CLEAR_TODO,
    
});
export const toogleTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload,
});

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
});


//! rxreduser kısayol sinippet
const initialState = {
    todoList: [{ id: new Date().getTime(), text: "work redux", completed: true }],
};

//? { type, payload } actionu havada destructuring yapılmış.

export const todoReduser =  (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return { 
                 todoList:[...state.todoList, {id:new Date().getTime, text:payload, completed:false} ]
             };
        case DELETE_TODO:
            return { ...state, ...payload };
        case TOGGLE_TODO:
            return { ...state.todoList.filter((item)=> ({...item, completed: !item.completed})) };
        case CLEAR_TODO:
            return initialState;

        default:
            return state;
    }
};

//  item.id == id ? { ...item, consulted: !item.consulted } : item