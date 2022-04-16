import React, {useState} from 'react';
// 2. style import 
import tableStyles from '../common/styles/table.module.css'


export default function Calculator() {
    // 3. 상태 정의
    const [result, setResult] = useState(``)
    // 4. 객체형태 초기값 > opcode초기화 필요
    const [inputs, setInputs] = useState({opcode: "+"})
    // 구조분해 할당
    const { num1, num2, opcode} = inputs


    // 내부함수는 람다(array function)으로 
    const onChange = e => {
        //Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
        e.preventDefault()
        //console.log(e.target) // <input name="num1" type="text">
        const { name, value } = e.target
        //console.log(name, value) //num1 13
        // 4. 객체로 처리되어있기 때문에 state에도 초기값 객체로        
        // ...inputs 오버로딩
        setInputs({
            ...inputs,
            [name]: value 
        })
    }

    const onClick = e => {
        e.preventDefault()
        switch (opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
            default :
                console.log("Default")
        }
    }
    // 1. return 
    // form =>서버와 통신한다는 의미
    return (<form >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th><h2>계산기</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
        <td>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> 

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />

            <button onClick={onClick}>계산하기</button></td>
            </tr>
            <tr><td>결과 : {result}</td></tr>
                </tbody>
            </table>
        </form>)
}