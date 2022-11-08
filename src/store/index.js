import { configureStore, createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [{
            name: '找工作', finish: false
        }]
    },
    reducers: {
        add: (state, action) => {
            const { content } = action.payload
            state.list.push({
                ...content,
                finish: false
            })
        },
        remove: (state, action) => {
            state.list.splice(action.index, 1)
        },
        toggleFinish: (state, action) => {
            const { index } = action.payload
            state.list[index].finish = !state.list[index].finish
        }
    }
});

export const { add, remove, toggleFinish } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

export default configureStore({
    reducer: {
        todo: todoReducer
    }
});

