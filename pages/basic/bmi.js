// server에서 연산해서 계산하기
import React, { useState } from 'react';
import axios from 'axios';
import tableStyles from '../common/styles/table.module.css'

export default function Bmi() {
    // const [name, setName] = useState('')
    // const [height, setHeight] = useState('0')
    // 위의 코드의 확장판
    const [inputs, setInputs] = useState({})
    // 나중에 도메인화 시켜줌
    const proxy = 'http://localhost:5000'
    const handleSubmit = e => {
        e.preventDefault()
        // axios - 비동기
        axios.post(proxy+'/api/basic/bmi', inputs)
        // method chain
        // 연쇄 패턴에 걸리면 이벤트 값이 자동으로 넘어간다
        .then(res => {
            const bmi = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>이름 : ${bmi.name}</h3>
            <h3>키 : ${bmi.height} cm</h3>
            <h3>몸무게 : ${bmi.weight}kg</h3>
            <h3>BMI결과 : ${bmi.bmi}</h3>
            `
        })
        .catch(err => alert(err))

    }

    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        // 오버로딩
        setInputs({...inputs, [name]:value}) 
    }

    // 기능단위로 컴포넌트 분리시킴
    return (
        <form action="" onSubmit={handleSubmit} >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h2>BMI</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
            <td>
                <label htmlFor="">이름</label>
            </td>
            <td>
                <input type="text" name="name" onChange={handleChange} />
            </td>
        </tr>
        <tr >
            <td>
                <label htmlFor="">키</label>
            </td>
            <td>
            <input type="text" name="height" onChange={handleChange} />
            </td>
        </tr>
        <tr >
            <td>
                <div>
                    <label htmlFor="">몸무게</label>
                </div>
            </td>
            <td>
                <input type="text" name="weight" onChange={handleChange} /><br />
            </td>
        </tr>
        <tr><td colSpan={2}><input type="submit" value="BMI 체크" /></td></tr>
            <tr><td colSpan={2}>결과 : <span id="result-span"></span></td></tr>
                </tbody>
            </table></form>
    )
}