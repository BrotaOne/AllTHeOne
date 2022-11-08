import { useState } from 'react'
import { add } from '../store'
import { useDispatch } from 'react-redux'

export default function Add() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = () => {
        dispatch(add({
            content: {
                name: value,
                finish: false
            }
        }))
        setValue('')
    }
    return <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAddTodo} >新增todo</button>
    </div>
} 