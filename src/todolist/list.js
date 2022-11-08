import { useSelector, useDispatch } from 'react-redux'
import { toggleFinish, remove } from '../store';

export default function List() {
    const list = useSelector(state => state.todo.list)
    const dispatch = useDispatch();
    return <div>
        <p>正在进行</p>
        {list.map((item, index) => {
            if (item.finish) return null
            return <div key={item.name}>
                <span onClick={() => dispatch(toggleFinish({ index }))}>切换状态</span>
                <span>{item.name}</span>
                <span onClick={() => dispatch(remove({ index }))}>删除</span>
            </div>
        })}
        <p>已经完成</p>
        {list.map((item, index) => {
            if (!item.finish) return null
            return <div key={item.name}>
                <span onClick={() => dispatch(toggleFinish({ index }))}>切换状态</span>
                <span>{item.name}</span>
                <span onClick={() => dispatch(remove({ index }))}>删除</span>
            </div>
        })}
    </div>

}