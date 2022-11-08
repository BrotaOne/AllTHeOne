import { useSelector, useDispatch } from 'react-redux';
import List from './list';
import Add from './add'

export default function TodoList() {
    const list = useSelector(state => state.todo.list)
    return <div>
        <Add />
        <List />
    </div>

}