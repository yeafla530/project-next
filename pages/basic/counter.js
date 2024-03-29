import React, {useState} from "react";
import tableStyles from '../common/styles/table.module.css'

// 컴포넌트             // props
export default function Counter() {
    const [count, setCount] = useState(0) // state
    return (<table className={tableStyles.table}>
        <thead>
            <tr>
                <th><h2>카운터</h2></th>
            </tr>
        </thead>
        <tbody>
    <tr >
    <td><button style={{width:100}} onClick={() => setCount(count+1)}> + </button>
        <button style={{width:100}} onClick={() => setCount(count-1)}> - </button>
       </td></tr>
        <tr><td><h3>결과: {count}</h3></td></tr>
                    </tbody>
                </table>
    ) // render함수
}